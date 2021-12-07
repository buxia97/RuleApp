<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					个人设置
				</view>
				<view class="action" @tap="userEdit">
					<text class="cuIcon-upload"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">用户名</view>
				<input name="input" disabled="disabled" :value="name"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">昵称</view>
				<input placeholder="请输入昵称" name="input" v-model="screenName"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">邮箱</view>
				<input placeholder="未设置" disabled="disabled" name="input" :value="mail"></input>
				<view class="text-blue">修改</view>
			</view>
			<view class="cu-form-group">
				<view class="title">网址</view>
				<input placeholder="请输入网址" name="input" v-model="url"></input>
			</view>
			
			<view class="cu-form-group margin-top">
				<view class="title">密码</view>
				<input placeholder="请输入密码,不填则不修改" v-model="password" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">确认密码</view>
				<input placeholder="请再次输入密码" v-model="repassword" name="input"></input>
			</view>
		</form>
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
				
				uid:0,
				name:'',
				screenName:'',
				password:'',
				repassword:'',
				mail:'',
				url:'',
				
				token:'',
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
			
			that.getCacheInfo();
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
			getCacheInfo(){
				var that = this;
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					that.uid=userInfo.uid;
					that.screenName=userInfo.screenName;
					that.name=userInfo.name;
					that.mail=userInfo.mail;
					that.url=userInfo.url;
					that.token=userInfo.token;
				}
			},
			userEdit() {
				var that = this;
				if (that.password != "") {
					if (that.password != that.repassword) {
						uni.showToast({
						    title:"两次密码不一致",
							icon:'none',
							duration: 1000,
							position:'bottom',
						});
						return false
					}
					
				}
			
				var data = {
					uid:that.uid,
					name:that.name,
					screenName:that.screenName,
					password:that.password,
					url:that.url,
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.userEdit(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							//保存用户信息
							if(that.password!=""){
								localStorage.removeItem('userinfo');
								localStorage.removeItem('token');
								var timer = setTimeout(function() {
									uni.reLaunch({
										url: '/pages/home/home'
									})
									clearTimeout('timer')
								}, 1000)
							}else{
								var userInfo = JSON.parse(localStorage.getItem('userinfo'));
								userInfo.screenName=that.screenName;
								userInfo.url=that.url;
								localStorage.setItem('userinfo',JSON.stringify(userInfo));
								that.getCacheInfo();
							}
							
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
