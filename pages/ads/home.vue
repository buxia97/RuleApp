<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					付费广告位
				</view>
				<view class="action">
					<text class="text-blue" @tap="toLink('/pages/ads/myAds')">我的广告</text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="ads-list">
			<view class="ads-box">
				<view class="ads-main">
					<view class="ads-name">
						文章推流广告
					</view>
					<view class="ads-text">
						在用户下拉文章列表时，平台将随机推送已有的推流广告列表。您发布的广告将以类似文章的形式嵌入列表中，并拥有广告标识，在活跃用户浏览文章时，您的广告将获得充分曝光。<text class="text-red">为了展现效果，建议上传横版图片。</text>
					</view>
					<view class="ads-info grid col-3 text-center">
						<view class="ads-num">
							剩余：<text class="text-blue">{{pushAdsNum || 0}}</text>
						</view>
						<view class="ads-price">
							<text class="text-red">{{pushAdsPrice || 0}}积分</text>/天
						</view>
						<view class="ads-btn" @tap="goAdsBuy(pushAdsPrice,pushAdsNum,0)">
							<text class="text-green">立即购买</text>
						</view>
					</view>
				</view>
			</view>
			<view class="ads-box">
				<view class="ads-main">
					<view class="ads-name">
						横幅广告
					</view>
					<view class="ads-text">
						在平台的几个固定的热门区域将随机推送所有的横幅广告列表。您发布的广告将以图片横幅的形式随机显示在平台的固定区域，在部分用户频繁访问的页面区域（如文章详情页面），将获得良好的引流效果。<text class="text-red">为了展现效果，建议上传横版图片。</text>
					</view>
					<view class="ads-info grid col-3 text-center">
						<view class="ads-num">
							剩余：<text class="text-blue">{{bannerAdsNum || 0}}</text>
						</view>
						<view class="ads-price">
							<text class="text-red">{{bannerAdsPrice || 0}}积分</text>/天
						</view>
						<view class="ads-btn" @tap="goAdsBuy(bannerAdsPrice,bannerAdsNum,1)">
							<text class="text-green">立即购买</text>
						</view>
					</view>
				</view>
			</view>
			<view class="ads-box">
				<view class="ads-main">
					<view class="ads-name">
						启动图广告
					</view>
					<view class="ads-text">
						在平台APP启动的时候（仅限原生安卓和苹果），平台将随机显示一条启动图广告。您发布的广告将以启动大图的形式显示在所有用户的启动界面，且每一次用户打开APP都可能获得推送，由于启动图广告名额较少，您将可以较快的获得曝光。<text class="text-red">为了展现效果，需上传像素宽度1080，长度1883的图片。</text>
					</view>
					<view class="ads-info grid col-3 text-center">
						<view class="ads-num">
							剩余：<text class="text-blue">{{startAdsNum || 0}}</text>
						</view>
						<view class="ads-price">
							<text class="text-red">{{startAdsPrice || 0}}积分</text>/天
						</view>
						<view class="ads-btn" @tap="goAdsBuy(startAdsPrice,startAdsNum,2)">
							<text class="text-green">立即购买</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<!--加载遮罩结束-->
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
			
			isLoading:0,
			
			pushAdsNum:0,
			pushAdsPrice:0,
			bannerAdsNum:0,
			bannerAdsPrice:0,
			startAdsNum:0,
			startAdsPrice:0,

			token:"",
			userData:{
				assets:0,
			},
		}
	},
	onPullDownRefresh(){
		var that = this;
		
	},
	onShow(){
		var that = this;
		if(localStorage.getItem('token')){
			
			that.token = localStorage.getItem('token');
		}
		// #ifdef APP-PLUS
		plus.navigator.setStatusBarStyle("dark")
		// #endif
		that.getAdsConfig();
		that.getUserData();
		
	},
	onLoad(res) {
		var that = this;
		// #ifdef APP-PLUS || MP
		that.NavBar = this.CustomBar;
		// #endif
		
	},
	methods: {
		back(){
			uni.navigateBack({
				delta: 1
			});
		},
		getUserData() {
			var that = this;
			Net.request({
				
				url: API.getUserData(),
				data:{
					"token":that.token
				},
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method: "get",
				dataType: 'json',
				success: function(res) {
					//console.log(JSON.stringify(res));
					if(res.data.code==1){
						that.userData = res.data.data;
					}
				},
				fail: function(res) {
					uni.showToast({
						title: "网络开小差了哦",
						icon: 'none'
					})
				}
			})
		},
		getAdsConfig(){
			var that = this;
			Net.request({
				url: API.adsConfig(),
				header:{
					'Content-Type':'application/x-www-form-urlencoded'
				},
				method: "get",
				dataType: 'json',
				success: function(res) {
					
					if(res.data.code==1){
						that.pushAdsNum = res.data.data.pushAdsNum;
						that.pushAdsPrice = res.data.data.pushAdsPrice;
						that.bannerAdsNum = res.data.data.bannerAdsNum;
						that.bannerAdsPrice = res.data.data.bannerAdsPrice;
						that.startAdsNum = res.data.data.startAdsNum;
						that.startAdsPrice = res.data.data.startAdsPrice;
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
				}
			})
		},
		toLink(text){
			var that = this;
			
			if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
				uni.showToast({
					title: "请先登录哦",
					icon: 'none'
				})
				return false;
			}
			uni.navigateTo({
				url: text
			});
		},
		goAdsBuy(price,num,type){
			var that = this;
			if(num <= 0||!num){
				uni.showToast({
					title: "该广告位已售完",
					icon: 'none'
				})
				return false;
			}
			if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
				uni.showToast({
					title: "请先登录哦",
					icon: 'none'
				})
				return false;
			}
			var assets = that.userData.assets;
			if(price>assets){
				uni.showToast({
					title: "余额不足，请先充值",
					icon: 'none'
				})
				return false;
			}
			uni.navigateTo({
				url: '/pages/ads/adsPost?post=add&type='+type
			});
		},
	},
}
</script>

<style>
@import "../../static/base.css";
</style>
