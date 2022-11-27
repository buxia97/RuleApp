<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					我的广告
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="search-type grid col-3">
				<view class="search-type-box" :class="status==1?'active':''" @tap="setStatus(1)">
					<text>已发布</text>
				</view>
				<view class="search-type-box" :class="status==0?'active':''" @tap="setStatus(0)">
					<text>待审核</text>
				</view>
				<view class="search-type-box" :class="status==2?'active':''" @tap="setStatus(2)">
					<text>已到期</text>
				</view>
			</view>
			<view class="myAds">
				<view class="no-data" v-if="adsList.length==0">
					<text class="cuIcon-text"></text>
					暂时没有数据
				</view>
				
				<view class="myAds-box" v-for="(item,index) in adsList" :key="index" @tap="goEdit(item)">
					<view class="myAds-title">
						{{item.name}}
					</view>
					<view class="myAds-time">
						预计到期时间：<text class="text-blue">{{formatDate(item.close)}}</text>
						<text class="text-green">{{getType(item.type)}}</text>
					</view>
					<view class="myAds-concent">
						<view class="myAds-pic">
							<image :src="item.img" mode="aspectFill"></image>
						</view>
						<view class="myAds-intro">
							{{item.intro}}
						</view>
					</view>
				</view>
				
			</view>
			<view class="load-more" @tap="loadMore" v-if="adsList.length>0">
				<text>{{moreText}}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
var API = require('../../utils/api')
var Net = require('../../utils/net')
export default {
	data() {
		return {
			StatusBar: this.StatusBar,
			CustomBar: this.CustomBar,
			NavBar:this.StatusBar +  this.CustomBar,
			
			status:1,

			page:1,
			moreText:"加载更多",
			
			isLoad:0,
			token:"",
			adsList:[],
		}
	},
	onPullDownRefresh(){
		var that = this;
		
	},
	onReachBottom() {
	    //触底后执行的方法，比如无限加载之类的
		var that = this;
		if(that.isLoad==0){
			that.loadMore();
		}
	},
	onShow(){
		var that = this;
		that.page=1;
		// #ifdef APP-PLUS
		plus.navigator.setStatusBarStyle("dark")
		// #endif
		if(localStorage.getItem('token')){
			that.page=1;
			that.token = localStorage.getItem('token');
			that.getAdsList(false);
		}
		
	},
	onLoad(res) {
		var that = this;
		
		// #ifdef APP-PLUS || MP
		that.NavBar = this.CustomBar;
		// #endif
		if(localStorage.getItem('token')){
			
			that.token = localStorage.getItem('token');
			that.getAdsList(false);
		}
		
	},
	methods: {
		back(){
			uni.navigateBack({
				delta: 1
			});
		},
		getType(type){
			var that = this;
			var arr = ["文章推流广告","横幅广告","启动图广告"];
			return arr[type];
		},
		loadMore(){
			var that = this;
			that.moreText="正在加载中...";
			that.isLoad=1;
			that.getAdsList(true);
		},
		formatDate(datetime) {
			var datetime = new Date(parseInt(datetime * 1000));
			// 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
			var year = datetime.getFullYear(),
				month = ("0" + (datetime.getMonth() + 1)).slice(-2),
				date = ("0" + datetime.getDate()).slice(-2),
				hour = ("0" + datetime.getHours()).slice(-2),
				minute = ("0" + datetime.getMinutes()).slice(-2);
			//second = ("0" + date.getSeconds()).slice(-2);
			// 拼接
			var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
			// 返回
			return result;
		},
		setStatus(status){
			var that = this;
			that.adsList = [];
			that.status = status;
			that.page = 1;
			that.getAdsList(false);
		},
		getAdsList(isPage){
			var that = this;
			if(that.token==""){
				uni.showToast({
					title:"请先登录",
					icon:'none',
					duration: 1000,
					position:'bottom',
				});
				return false
			}
				
			
			var page = that.page;
			if(isPage){
				page++;
			}
			var uid = "";
			
			if(localStorage.getItem('userinfo')){
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				uid=userInfo.uid;
			}
			var data = {
				"status":that.status,
				"uid":uid
			}
			Net.request({
				url: API.adsList(),
				data:{
					"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
					"limit":8,
					"page":page,
					"token":that.token,
				},
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method: "get",
				dataType: 'json',
				success: function(res) {
					that.isLoad=0;
					//console.log(JSON.stringify(res))
					that.moreText="加载更多";
					if(res.data.code==1){
						var list = res.data.data;
						if(list.length>0){
							if(isPage){
								that.page++;
								that.adsList = that.contentsList.concat(list);
							}else{
								that.adsList = list;
							}
							
						}else{
							that.moreText="没有更多数据了";
							if(!isPage){
								that.adsList = list;
							}
						}
					}
					var timer = setTimeout(function() {
						that.isLoading=1;
						clearTimeout('timer')
					}, 300)
				},
				fail: function(res) {
					var timer = setTimeout(function() {
						that.isLoading=1;
						clearTimeout('timer')
					}, 300)
					that.moreText="加载更多";
					that.isLoad=0;
				}
			})
		},
		goEdit(data){
			var that = this;
			var type = data.type;
			var aid = data.aid;
			uni.showModal({
			    title: '提示',
			    content: '修改广告需要重新审核，可能导致广告无法上线！',
			    success: function (res) {
			        if (res.confirm) {
						uni.navigateTo({
							url: '/pages/ads/adsPost?post=edit&type='+type+"&aid="+aid
						});
					} else if (res.cancel) {
						
					}
				}
			});
			
		}
	},
}
</script>

<style>
</style>
