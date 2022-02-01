<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					收货地址
				</view>
				<view class="action" @tap="userEdit">
					<text class="cuIcon-upload"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">收货人名称</view>
				<input placeholder="请输入收货人名称" name="input" v-model="name"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">收货人电话</view>
				<input placeholder="请输入收货人电话" name="input" type="number" v-model="telephone"></input>
			</view>
			<view class="cu-form-group">
				<textarea class="text"  v-model="address" placeholder="输入收货地址(精确到省市区街道)" ></textarea>
			</view>
		</form>
		<!--  #ifdef MP-WEIXIN -->
		<view class="post-update bg-blue" @tap="userEdit">
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
				
				uid:0,
				
				name:"",
				telephone:"",
				address:"",
				
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
			// #ifdef APP-PLUS || MP-WEIXIN
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
				}
			},
			userEdit() {
				var that = this;
				if(that.name==""||that.telephone==""||that.address==""){
					uni.showToast({
						title: "请完成表单输入",
						icon: 'none'
					})
					return false;
				}
				var address = that.name+"|"+that.telephone+"|"+that.address;
				var data = {
					uid:that.uid,
					address:address
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
							uni.showToast({
								title: "操作成功！",
								icon: 'none'
							})
							setTimeout(function () {
								that.back();
							}, 1000);
							
							
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
