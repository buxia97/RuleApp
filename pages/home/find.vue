<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					发现
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action header-btn">
					
					<text class="cuIcon-notice" @tap="toLink('/pages/user/inbox')">
						<text class="noticeSum bg-red" v-if="noticeSum>0">{{noticeSum}}</text>
					</text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 排行榜
				</view>
				<view class="action more" @tap='toTopContents("排行榜","commentsNum")'>
					<text>更多热门</text><text class="cuIcon-right"></text>
				</view>
				
			</view>
			<view class="top">
				<view class="top-box"  v-for="(item,index) in topList" :key="index" @tap="toInfo(item)">
					<text>{{index+1}}</text>{{item.title}}
				</view>
			</view>
		</view>
		
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 内容分类
				</view>
				<view class="action more" @tap="toAllcategory">
					<text>全部分类</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="category grid col-3">
				<view class="category-box"  v-for="(item,index) in metaList" v-if="item.parent==0" @tap="toCategoryContents(item.name,item.mid)" :key="index">
					<view class="category-main">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 标签云
				</view>
				<view class="action more" @tap="toAlltag">
					<text>更多标签</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="tags">
				
				<text class="tags-box" v-for="(item,index) in tagList" @tap='toCategoryContents("#"+item.name+"#",item.mid)'>
					{{item.name}}
				</text>
				
			</view>
		</view>
		<view class="ads-banner" v-if="bannerAdsInfo!=null">
			<image :src="bannerAdsInfo.img" mode="widthFix" @tap="goAds(bannerAdsInfo)"></image>
		</view>
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<!--加载遮罩结束-->
		<!--  #ifdef APP-PLUS -->
		<view style="height: 100upx;"></view>
		<Tabbar :current="1"></Tabbar>
		<!--  #endif -->
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
	// #ifdef APP-PLUS
	import Tabbar from '@/pages/components/tabBar.vue'
	// #endif
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				topList:[],
				metaList:[],
				tagList:[],
				
				isLoading:0,
				
				ads:"",
				bannerAds:[],
				bannerAdsInfo:null,
				
				noticeSum:0,
				token:"",
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.loading();
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onShow(){
			var that = this;
			that.getAdsCache();
			// #ifdef APP-PLUS
			uni.hideTabBar({
				animation: false
			})
			that.getAds();
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.allCache();
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.unreadNum();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.loading();
		},
		methods:{
			getAdsCache(){
				var that = this;
				if(localStorage.getItem('bannerAds')){
					that.bannerAds = JSON.parse(localStorage.getItem('bannerAds'));
					
					var num = that.bannerAds.length;
					if(num>0){
						var rand = Math.floor(Math.random()*num);
						that.bannerAdsInfo = that.bannerAds[rand];
					}
				}
			},
			loading(){
				var that = this;
				that.getTopList();
				that.getMetaList();
				that.getTagList();
			},
			allCache(){
				var that = this;
				if(localStorage.getItem('topList')){
					that.topList = JSON.parse(localStorage.getItem('topList'));
					var timer = setTimeout(function() {
						that.isLoading=1;
						clearTimeout('timer')
					}, 300)
				}
				if(localStorage.getItem('find_metaList')){
					that.metaList = JSON.parse(localStorage.getItem('find_metaList'));
				}
				if(localStorage.getItem('find_tagList')){
					that.tagList = JSON.parse(localStorage.getItem('find_tagList'));
				}
			},
			getAds(){
				var that = this;
				
				Net.request({
					url: API.GetAds(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.isAds==1){
							that.ads= res.data.ad1.split("|");
						}
						
					},
					fail: function(res) {
						
					}
				})
			},
			getTopList(){
				var that = this;
				var info = {
					"type":"post"
				}
				Net.request({
					url: API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(info)),
						"limit":5,
						"page":1,
						"order":"commentsNum"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
							
								that.topList = list;
								localStorage.setItem('topList',JSON.stringify(list));
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getMetaList(){
				var that = this;
				var data = {
					"type":"category",
					"parent":0
				}
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":15,
						"page":1,
						"order":"order"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
							
								that.metaList = list;
								localStorage.setItem('find_metaList',JSON.stringify(that.metaList));
							}
						}
					},
					fail: function(res) {
					}
				})
			},
			goAds(data){
				var that = this;
				var url = data.url;
				var type = data.urltype;
				// #ifdef APP-PLUS
				if(type==1){
					plus.runtime.openURL(url);
				}
				if(type==0){
					plus.runtime.openWeb(url);
				}
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			getTagList(){
				var that = this;
				var data = {
					"type":"tag"
				}
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":20,
						"page":1,
						"order":"count"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){


								that.tagList = list;
								
								localStorage.setItem('find_tagList',JSON.stringify(that.tagList));
							}
						}
					},
					fail: function(res) {
					}
				})
			},
			toSearch(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/search'
				});
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			toTopContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type=top&id="+id
				});
			},
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			toAlltag(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/alltag'
				});
			},
			toAllcategory(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/allcategory'
				});
			},
			toGroup(){
				var url = API.GetGroupUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			toAds(url){
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			unreadNum() {
				var that = this;
				Net.request({
					
					url: API.unreadNum(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.noticeSum = res.data.data;
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
			}
		},
		// #ifdef APP-PLUS
		components: {
			waves,
			Tabbar
		},
		// #endif
		
		// #ifdef H5 || MP
		components: {
			waves
		},
		// #endif
	}
</script>

<style>
</style>