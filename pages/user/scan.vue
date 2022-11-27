<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					授权登录
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view class="scan text-center">
			<view class="scan-user">
				<image :src="userInfo.avatar" mode="aspectFill"></image>
				<view class="scan-user-name">
					<block v-if="userInfo.screenName">
						{{userInfo.screenName}}
					</block>
					<block v-else>
						{{userInfo.name}}
					</block>
				</view>
				<view class="scan-user-tips text-gray">
					将使用{{appname}}授权登录
				</view>
			</view>
			<view class="scan-user-btn">
				<view class="cu-btn bg-blue" @tap="scanLogin">确认登录</view>
				<view class="text-blue" @tap="back">取消</view>
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
				appname:"",
				text:"",
				
			}
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
				that.group = that.userInfo.group;
			}else{
				that.userInfo =null;
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}else{
				that.token = "";
			}
			that.appname = API.GetAppName();
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.text){
				that.text = res.text;
			}
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			scanLogin(){
				var that = this;
				if(that.token==""){
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					return false;
				}
				Net.request({
					
					url: API.setScan(),
					data:{
						"token":that.token,
						"codeContent":that.text,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						var timer = setTimeout(function() {
							that.back();
						}, 1000)
						
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				});
			},

		},
	}
</script>

<style>
	page{
		background-color: #fff;
	}
</style>
