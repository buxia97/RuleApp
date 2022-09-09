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
				<view class="search-type-box active">
					<text>已发布</text>
				</view>
				<view class="search-type-box">
					<text>待审核</text>
				</view>
				<view class="search-type-box">
					<text>已到期</text>
				</view>
			</view>
			<view class="myAds">
				<view class="no-data" v-if="adsList.length==0">
					<text class="cuIcon-text"></text>
					暂时没有数据
				</view>
				{{adsList}}
				<view class="myAds-box">
					<view class="myAds-title">
						
					</view>
					<view class="myAds-concent">
						<view class="myAds-pic">
							
						</view>
						<view class="myAds-intro">
							
						</view>
					</view>
					<view class="myAds-btn">
						
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
	onShow(){
		var that = this;
		// #ifdef APP-PLUS
		plus.navigator.setStatusBarStyle("dark")
		// #endif
		
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
		loadMore(){
			var that = this;
			that.moreText="正在加载中...";
			that.isLoad=1;
			that.getAdsList(true);
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
			Net.request({
				url: API.adsList(),
				data:{
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
	},
}
</script>

<style>
@import "../../static/base.css";
</style>
