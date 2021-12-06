<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action">
					<text class="toGroup">社交</text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					账户
				</view>
				<view class="action">
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
				<view class="cu-item userinfo" v-else>
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
						<view class="index-sort-main">
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
						<view class="index-sort-main">
							<view class="index-sort-i">
								<text class="cuIcon-commentfill"></text>
							</view>
							<view class="index-sort-text">
								我的消息
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i">
								<text class="cuIcon-rechargefill"></text>
							</view>
							<view class="index-sort-text">
								收藏
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i">
								<text class="cuIcon-rechargefill"></text>
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
								<text class="cuIcon-rechargefill"></text>
							</view>
							<view class="index-sort-text">
								意见反馈
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i">
								<text class="cuIcon-rechargefill"></text>
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
			<view class="cu-list menu" >
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">QQ交流群</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">官网网站</text>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">Github</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				userInfo:null,
				
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
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
			if(localStorage.getItem('userinfo')){
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
		},
		methods:{
			toLogin(){
				var that = this;
				
				uni.navigateTo({
					url: '../user/login'
				});
			},
			
		},
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
