<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					我的账户
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="myAssets">
				<text class="text-red myAssets-num">{{assets}}</text>积分
			</view>
			<view class="myAssets-btn">
				<text class="cu-btn bg-blue radius" @tap="userrecharge">在线充值</text>
				<text class="cu-btn bg-red radius">快捷提现</text>
			</view>
		</view>
		<view class="text-tips margin-top text-center text-gray text-sm">
			只显示最近30条充值记录
		</view>
		<view class="order-box"  v-for="(item,index) in orderList">
			<view class="order-main">
				<view class="order-info">
					<text class="order-id">订单ID：{{item.outTradeNo}}</text>
					<text class="order-type bg-blue" v-if="item.shopInfo">{{getType(item.shopInfo.type)}}</text>
				</view>
				<view class="order-shop">
					{{item.subject}}
					<view class="order-time">{{formatDate(item.created)}}</view>
				</view>
				<view class="order-btn">
					<text class="text-red">￥ {{item.totalAmount}}</text>
					<text class="text-yellow pay-status" v-if="item.status==0">未支付</text>
					<text class="text-green pay-status" v-if="item.status==1">未支付</text>
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
				assets:"",
				
				orderList:[],
				
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
				that.userStatus();
				that.getOrderList();
			}
			
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
			userrecharge(){
				var that = this;
				//  #ifdef MP-WEIXIN
				uni.showToast({
					title: "暂不支持微信充值",
					icon: 'none'
				})
				return false;
				//  #endif
				uni.navigateTo({
				    url: '../user/userrecharge'
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
			getOrderList(){
				var that = this;
				var data = {
					"token":that.token
				}
				Net.request({
					url: API.payLogList(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
							
								that.orderList = list;
								
							}
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
