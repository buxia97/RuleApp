<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					快捷提现
				</view>
				<view class="action" @tap="userwithdraw">
					<text class="cuIcon-upload"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="all-btn margin-top">
			<view class="user-btn flex flex-direction" @tap="userwithdrawlist">
				
				<button class="cu-btn bg-blue margin-tb-sm lg">提现记录</button>
			</view>
		</view>
		<view class="cur-assets">当前积分：<text class="text-red">{{assets}}</text></view>
		<form>
			
			<view class="cu-form-group margin-top">
				<view class="title">积分</view>
				<input placeholder="请输入提现积分" name="input" type="number" v-model="num"></input>
			</view>
		</form>
		<view class="userrecharge-intro userwithdraw-box">
			<view class="userrecharge-intro-title">
				提现注意：
			</view>
			<view class="userrecharge-intro-text">
				1.提现申请发起后，将会在<text class="text-red text-bold">24小时</text>内审核并打款到您设置的账户，所以在提现前，请<text class="text-blue" @tap="topay">设置</text>自己的收款信息。
			</view>
			<view class="userrecharge-intro-text">
				2.提现金额与网站积分的比例为<text class="text-red text-bold"> 1:{{scale}} </text>，最低提现<text class="text-red text-bold"> 5000 </text>积分，网站将收取<text class="text-red text-bold">5%</text>手续费。
			</view>
			<view class="userrecharge-intro-text">
				3.如果未收到提现款，请先查看提现记录中的数据，并立即反馈。
			</view>
			<view class="userrecharge-intro-text">
				4.在提现处于审核状态时，不会扣除用户积分。
			</view>
		</view>
		<!--  #ifdef MP -->
		<view class="post-update bg-blue" @tap="userwithdraw">
			<text class="cuIcon-upload"></text>
		</view>
		<!--  #endif -->
	
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
				
				num:"",

				modalName:null,
				
				token:'',
				assets:"",
				scale:0,
				
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
			that.userStatus();
			that.getVipInfo();
		},
		onLoad() {
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
			userwithdrawlist(){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/user/userwithdrawlist'
				});
			},
			userStatus() {
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				Net.request({
					
					url: API.userStatus(),
					data:{
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						if(res.data.code==1){
							that.assets = res.data.data.assets;
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
			userwithdraw() {
				var that = this;
				if(that.num==""){
					uni.showToast({
					    title:"请完成表单输入",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(that.num< 5000){
					uni.showToast({
					    title:"最低提现5000积分",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"num":that.num,
					"token":token,
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.userWithdraw(),
					data:data,
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
							
							var timer = setTimeout(function() {
								that.back();
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
			topay(){
				uni.navigateTo({
				    url: '/pages/user/pay'
				});
			},
			getVipInfo(){
				var that = this;
				Net.request({
					url: API.getVipInfo(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.scale=res.data.data.scale;
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
		}
	}
</script>

<style>
</style>
