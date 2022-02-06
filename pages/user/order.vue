<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					我的订单
				</view>
				<view class="action">
					<!-- <text class="cuIcon-search"></text> -->
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="text-tips margin-top text-center text-gray text-sm">
			只显示最近30条记录
		</view>
		<view class="order-box">
			<view class="order-main">
				<view class="order-info">
					<text class="order-id">订单ID：23112312312312</text>
					<text class="order-type bg-blue">源码</text>
				</view>
				<view class="order-shop">
					这是测试的商品名称
				</view>
				<view class="order-btn">
					<text class="text-red">100 积分</text>
					<text class="text-blue">查看收费内容</text>
				</view>
			</view>
		</view>
		<view class="order-box">
			<view class="order-main">
				<view class="order-info">
					<text class="order-id">订单ID：23112312312312</text>
					<text class="order-type bg-blue">源码</text>
				</view>
				<view class="order-shop">
					这是测试的商品名称
				</view>
				<view class="order-btn">
					<text class="text-red">100 积分</text>
					<text class="text-blue">查看收费内容</text>
				</view>
			</view>
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
				
				
				isLoad:0,
				token:"",
				contentsList:[],
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
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('token')){
				that.token=localStorage.getItem('token');
			}
			that.page = 1;
			
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

		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
