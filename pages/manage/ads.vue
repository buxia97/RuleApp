<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					广告管理
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"  @input="searchTag"></input>
					<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
				</view>
			</view>
			<view class="search-type grid col-3">
				<view class="search-type-box" :class="status==0?'active':''" @tap="setStatus(0)">
					<text>待审核</text>
				</view>
				<view class="search-type-box" :class="status==1?'active':''" @tap="setStatus(1)">
					<text>已发布</text>
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
				
				<view class="myAds-box" v-for="(item,index) in adsList" :key="index">
					<view class="myAds-title">
						{{item.name}}
					</view>
					<view class="myAds-time">
						预计到期时间：<text class="text-blue">{{formatDate(item.close)}}</text>
						<text class="text-green">{{getType(item.type)}}</text>
					</view>
					<view class="myAds-concent">
						<view class="myAds-pic">
							<image :src="item.img" mode="aspectFill"  @tap="previewImage(item.img)"></image>
						</view>
						<view class="myAds-intro">
							{{item.intro}}
						</view>
					</view>
					<view class="myAds-btn">
						<text class="text-red radius" @tap="toAudit(item.aid)" v-if="status==0">快捷审核</text>
						<text class="text-green radius" @tap="toRenewal(item)" v-if="status==1">续期</text>
						<text class="text-blue radius" @tap="goEdit(item)">编辑</text>
						<text class="text-blue radius" @tap="toDelete(item.aid)">删除</text>
					</view>
				</view>
				
			</view>
			<view class="load-more" @tap="loadMore" v-if="adsList.length>0">
				<text>{{moreText}}</text>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='renewal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">广告续期</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl ads-renewal">
					<input placeholder="输入续期天数" type="number" name="input" v-model="day" @input="day = limit(day,0)"  :adjust-position="false" :focus="false"></input>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-blue text-green" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue margin-left" @tap="adsRenewal">确定</button>
		
					</view>
				</view>
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
			AppStyle:this.$store.state.AppStyle,
			
			status:0,
			modalName: null,
			
			adsInfo:null,
			
			searchText:"",
			day:"",

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
		showModal(e) {
			this.modalName = e.currentTarget.dataset.target
		},
		hideModal(e) {
			this.modalName = null
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
		isRealNum(val){
		　　if(val === "" || val ==null){
		        return false;
		　　}
		   if(!isNaN(val)){　　　　
		　　　 return true;
		　　}
		
		　else{
		　　　　return false;
		　　}
		},
		limit(value,num){
		  var that = this;
		  if(that.isRealNum(value)){
		    var newNum = value.toString();
		    if(newNum.indexOf(".")!=-1){
		      var arrbuy = newNum.split(".");
		      var val1 = arrbuy[0];
		      var val2 = arrbuy[1];
		      if(val2.length > num){
		        val2 = val2.slice(0, num);
		      }
		      newNum = Number(val1)+"."+val2;
		      value = newNum;
		    }
		  }else{
		    value = value.substr(0, value.length - 1);
		    if(that.isRealNum(value)){
		      value=value;
		    }else{
		      value="";
		    }
		
		  }
		  return value;
		},
		previewImage(image) {
			var imgArr = [];
			imgArr.push(image);
			//预览图片
			uni.previewImage({
				urls: imgArr,
				current: imgArr[0]
			});
		},
		setStatus(status){
			var that = this;
			that.adsList = [];
			that.status = status;
			that.page = 1;
			that.getAdsList(false);
		},
		searchTag(){
			var that = this;
			var searchText = that.searchText;
			that.page=1;
			that.getAdsList();
		
		},
		searchClose(){
			var that = this;
			that.searchText = "";
			that.page=1;
			that.getAdsList();
		
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
			var data = {
				"status":that.status
			}
			Net.request({
				url: API.adsList(),
				data:{
					"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
					"limit":8,
					"searchKey":that.searchText,
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
			uni.navigateTo({
				url: '/pages/ads/adsPost?post=edit&type='+type+"&aid="+aid
			});
		},
		toAudit(id){
			var that = this;
			var token = "";
			
			if(localStorage.getItem('userinfo')){
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				token=userInfo.token;
			}
			var data = {
				"id":id,
				"token":token
			}
			uni.showModal({
			    title: '确定要通过审核吗？',
			    success: function (res) {
			        if (res.confirm) {
			            uni.showLoading({
			            	title: "加载中"
			            });
			            
			            Net.request({
			            	url: API.auditAds(),
			            	data:data,
			            	header:{
			            		'Content-Type':'application/x-www-form-urlencoded'
			            	},
			            	method: "get",
			            	dataType: 'json',
			            	success: function(res) {
			            		setTimeout(function () {
			            			uni.hideLoading();
			            		}, 1000);
			            		uni.showToast({
			            			title: res.data.msg,
			            			icon: 'none'
			            		})
			            		if(res.data.code==1){
			            			that.page=1;
			            			that.moreText="加载更多";
			            			that.isLoad=0;
			            			that.getAdsList();
			            		}
			            		
			            	},
			            	fail: function(res) {
			            		setTimeout(function () {
			            			uni.hideLoading();
			            		}, 1000);
			            		uni.showToast({
			            			title: "网络开小差了哦",
			            			icon: 'none'
			            		})
			            	}
			            })
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
		},
		toRenewal(data){
			var that = this;
			that.adsInfo = data;
			that.modalName = 'renewal';
		},
		adsRenewal(){
			var that = this;
			var token = "";
			var id = that.adsInfo.aid;
			if(that.day==""||that.day<=0){
				return false;
			}
			if(localStorage.getItem('userinfo')){
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				token=userInfo.token;
			}
			var data = {
				"id":id,
				"token":token,
				"day":that.day
			}
			uni.showLoading({
				title: "加载中"
			});
			
			Net.request({
				url: API.renewalAds(),
				data:data,
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method: "get",
				dataType: 'json',
				success: function(res) {
					setTimeout(function () {
						uni.hideLoading();
						that.modalName = null
					}, 1000);
					uni.showToast({
						title: res.data.msg,
						icon: 'none'
					})
					if(res.data.code==1){
						that.page=1;
						that.moreText="加载更多";
						that.isLoad=0;
						that.getAdsList();
					}
					
				},
				fail: function(res) {
					setTimeout(function () {
						that.modalName = null
						uni.hideLoading();
					}, 1000);
					uni.showToast({
						title: "网络开小差了哦",
						icon: 'none'
					})
				}
			})
		},
		toDelete(id){
			var that = this;
			var token = "";
			
			if(localStorage.getItem('userinfo')){
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				token=userInfo.token;
			}
			var data = {
				"id":id,
				"token":token
			}
			uni.showModal({
			    title: '确定要删除该广告吗',
			    success: function (res) {
			        if (res.confirm) {
			            uni.showLoading({
			            	title: "加载中"
			            });
			            
			            Net.request({
			            	url: API.deleteAds(),
			            	data:data,
			            	header:{
			            		'Content-Type':'application/x-www-form-urlencoded'
			            	},
			            	method: "get",
			            	dataType: 'json',
			            	success: function(res) {
			            		setTimeout(function () {
			            			uni.hideLoading();
			            		}, 1000);
			            		uni.showToast({
			            			title: res.data.msg,
			            			icon: 'none'
			            		})
			            		if(res.data.code==1){
			            			that.page=1;
			            			that.moreText="加载更多";
			            			that.isLoad=0;
			            			that.getAdsList();
			            		}
			            		
			            	},
			            	fail: function(res) {
			            		setTimeout(function () {
			            			uni.hideLoading();
			            		}, 1000);
			            		uni.showToast({
			            			title: "网络开小差了哦",
			            			icon: 'none'
			            		})
			            	}
			            })
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
		},
	},
}
</script>

<style>
</style>
