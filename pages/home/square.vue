<template>
	<view :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action">
					<text class="square-box" :class="squareid==0?'cur':''" @tap="setSquare(0)">动态</text>
					<text class="square-box" :class="squareid==1?'cur':''" @tap="setSquare(1)">群聊</text>
					<text class="square-box" :class="squareid==2?'cur':''" @tap="setSquare(2)">综合</text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<block v-if="squareid==0">
			<view class="data-box">
				<view class="square-post">
					<view class="square-post-header">
						<view class="square-user">
							<view class="cu-avatar round" :style="userInfo.style" v-if="token!=''"></view>
							<view class="cu-avatar round" v-else></view>
						</view>
						<view class="square-text">
							分享你的想法吧！
						</view>
					</view>
					<view class="square-post-btn grid col-4">
						<view class="square-post-btn-box">
							<text class="cuIcon-pic text-green"></text>图片
						</view>
						<view class="square-post-btn-box">
							<text class="cuIcon-record text-purple"></text>视频
						</view>
						<view class="square-post-btn-box">
							<text class="cuIcon-read text-blue"></text>文章
						</view>
						<view class="square-post-btn-box">
							<text class="cuIcon-cart text-red"></text>商品
						</view>
					</view>
				</view>
			</view>
			<view class="cu-card dynamic no-card square-list">
				<view class="cu-item">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view>凯尔</view>
								<view class="text-gray text-sm flex justify-between">
									2019年12月3日
								</view>
							</view>
						</view>
					</view>
					<view class="text-content">
						测试图片类型动态，单图，3,6,9
					</view>
					<view class="grid flex-sub padding-lr col-3 grid-square">
						<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
						 v-for="(item,index) in 6" :key="index">
						</view>
					</view>
					<view class="text-center grid col-3 padding-xs">
						<view class="square-post-btn">
							<text class="cuIcon-forward"></text>100
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-community"></text>200
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-appreciate"></text>100
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view>凯尔</view>
								<view class="text-gray text-sm flex justify-between">
									2019年12月3日
								</view>
							</view>
						</view>
					</view>
					<view class="text-content">
						我发布了新文章！
					</view>
					<view class="grid flex-sub padding-lr">
						<view class="user-post-info">
							
						</view>
					</view>
					<view class="text-center grid col-3 padding-xs">
						<view class="square-post-btn">
							<text class="cuIcon-forward"></text>100
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-community"></text>200
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-appreciate"></text>100
						</view>
					</view>
				</view>
			</view>
		</block>
		<block v-if="squareid==1">
			
			<view class="cu-list menu-avatar">
				<view class="cu-bar bg-white search">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="搜索群聊" v-model="searchText"  @input="searchTag"></input>
						<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
					</view>
				</view>
				<view class="cu-item ">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
					<view class="content">
						<view class="text-pink"><view class="text-cut">吃瓜交流群</view></view>
						<view class="text-gray text-sm flex"> <view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-red sm">new</view>
					</view>
				</view>
				<view class="cu-item ">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
					<view class="content">
						<view class="text-pink"><view class="text-cut">吃瓜交流群</view></view>
						<view class="text-gray text-sm flex"> <view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-red sm">new</view>
					</view>
				</view>
				<view class="cu-item ">
					<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/img/champion/Morgana.png);"></view>
					<view class="content">
						<view class="text-pink"><view class="text-cut">吃瓜交流群</view></view>
						<view class="text-gray text-sm flex"> <view class="text-cut">凯尔，你被自己的光芒变的盲目！</view></view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">22:20</view>
						<view class="cu-tag round bg-red sm">new</view>
					</view>
				</view>
			</view>
		</block>
		
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
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
				
				userInfo:null,
				token:"",
				isLoading:0,
				raiders:API.GetRaiders(),
				toolid:0,
				
				noticeSum:0,
				
				squareid: 0,
				searchText:"",
			}
		},
		onPullDownRefresh(){
			var that = this;
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			uni.hideTabBar({
				animation: false
			})
			
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.userStatus();
			that.unreadNum();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods:{
			setSquare(type){
				var that = this;
				that.squareid = type;
			},
			searchClose(){
				var that = this;
				that.searchText = "";
				that.page = 1;
				that.getUserList(false);
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
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			toPage(title,cid){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			toSearch(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/search'
				});
			},
			goPage(url){
				var that = this;
				
				uni.navigateTo({
				    url: url
				});
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			userStatus() {
				var that = this;
				Net.request({
					
					url: API.userStatus(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoading=1;
						if(res.data.code==0){
							localStorage.removeItem('userinfo');
							localStorage.removeItem('token');
							that.token = "";
							that.userinfo = null;
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
		},
		components: {
			waves
		}
	}
</script>

<style>
</style>
