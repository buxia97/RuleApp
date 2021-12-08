<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="toGroup">
					<text class="toGroup">社交</text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					账户
				</view>
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box" style="padding-bottom: 20upx;">
			<view class="cu-list menu-avatar">
				<view class="cu-item userinfo" v-if="userInfo==null">
					<view class="cu-avatar round lg"></view>
					<view class="content" @tap="toLogin">
						<view class="text-grey">点击登录</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item userinfo" v-else  @tap="toLink('../user/useredit')">
					<view class="cu-avatar round lg" :style="userInfo.style"></view>
					<view class="content">
						<view class="text-grey" v-if="userInfo.screenName">{{userInfo.screenName}}</view>
						<view class="text-grey" v-else>{{userInfo.name}}</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								{{userInfo.mail}}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="index-sort grid col-4">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('../user/useredit')">
							<view class="index-sort-i">
								<text class="cuIcon-picfill"></text>
							</view>
							<view class="index-sort-text">
								个人信息
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('../user/inbox')">
							<view class="index-sort-i">
								<text class="cuIcon-message"></text>
							</view>
							<view class="index-sort-text">
								我的消息
							</view>
						</view>
					</waves>
				</view>
				<!-- <view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i">
								<text class="cuIcon-commentfill"></text>
							</view>
							<view class="index-sort-text">
								评论区
							</view>
						</view>
					</waves>
				</view> -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i">
								<text class="cuIcon-favorfill"></text>
							</view>
							<view class="index-sort-text">
								收藏
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('../user/userpost')">
							<view class="index-sort-i">
								<text class="cuIcon-writefill"></text>
							</view>
							<view class="index-sort-text">
								我的投稿
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i">
								<text class="cuIcon-post"></text>
							</view>
							<view class="index-sort-text">
								意见反馈
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toSetUp">
							<view class="index-sort-i">
								<text class="cuIcon-settingsfill"></text>
							</view>
							<view class="index-sort-text">
								设置
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-list menu" @tap="toGroup">
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-friendfill  text-blue"></text>
						<text>QQ交流群</text>
					</view>
				</view>
				<view class="cu-item" @tap="toWeb">
					<view class="content">
						<text class="cuIcon-circlefill text-brown"></text>
						<text>官网网站</text>
					</view>
				</view>
				<view class="cu-item" @tap="toGithub">
					<view class="content">
						<text class="cuIcon-github text-black"></text>
						<text>Github</text>
					</view>
				</view>
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
				userInfo:null,
				token:"",
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
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
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
			
		},
		methods:{
			toLogin(){
				var that = this;
				
				uni.navigateTo({
					url: '../user/login'
				});
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
						if(res.data.code==0){
							localStorage.removeItem('userinfo');
							localStorage.removeItem('token');
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
			toSearch(){
				var that = this;
				
				uni.navigateTo({
				    url: '../contents/search'
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
			toWeb(){
				var url = API.GetWebUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			toGithub(){
				var url = API.GetGithubUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			toSetUp(){
				var that = this;
				
				uni.navigateTo({
				    url: '../user/setup'
				});
			}
		},
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
