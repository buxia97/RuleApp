<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					用户登录
				</view>
				<view class="action">
					<text>注册</text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="user-form">
			<form>
				<view class="cu-form-group">
					<input name="input" placeholder="用户名 / 邮箱" v-model="userName"></input>
				</view>
				<view class="cu-form-group">
					<input name="input" placeholder="用户密码" type="password" v-model="password"></input>
				</view>
				<view class="user-btn flex flex-direction">
					<button class="cu-btn bg-cyan margin-tb-sm lg" @tap="login">立即登录</button>
				</view>
			</form>
		</view>
		<view class="user-foget">
			<text>忘记密码？</text>
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
				userName:"",
				password:"",
				
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
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			login() {
				var that = this;
				if (this.password == ""||this.userName == "") {
					uni.showToast({
					    title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
			
				var data = {
					name: this.userName,
					password: this.password,
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.userLogin(),
					data:{"params":JSON.stringify(API.removeObjectEmptyKey(data))},
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
							//保存用户信息
							localStorage.setItem('userinfo',JSON.stringify(res.data.data));
							localStorage.setItem('token',res.data.data.token);
							var timer = setTimeout(function() {
								uni.reLaunch({
									url: '/pages/home/home'
								})
								clearTimeout('timer')
							}, 1000)
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
						uni.stopPullDownRefresh()
					}
				})
			},
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
