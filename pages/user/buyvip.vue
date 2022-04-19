<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					开通或续期VIP
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="vip-box">
				<view class="vip-maim">
					<view class="bg-gradual-blue text-center shadow-blur">
						<view class="text-lg text-bold">月付VIP<text class="text-red margin-left">1200积分</text></view>
						<view class="margin-top-sm text-Abc">为您的账号获得30天VIP期限</view>
						<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="toBuyVip(30)">立即购买</view>
					</view>
				</view>
			</view>
			<view class="vip-box">
				<view class="vip-maim">
					<view class="bg-gradual-blue text-center shadow-blur">
						<view class="text-lg text-bold">季付VIP<text class="text-red margin-left">6500积分</text></view>
						<view class="margin-top-sm text-Abc">获得90天VIP期限</view>
						<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="toBuyVip(90)">立即购买</view>
					</view>
				</view>
			</view>
			<view class="vip-box">
				<view class="vip-maim">
					<view class="bg-gradual-blue text-center shadow-blur">
						<view class="text-lg text-bold">年付VIP<text class="text-red margin-left">120000积分</text></view>
						<view class="margin-top-sm text-Abc">获得365天VIP期限</view>
						<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="toBuyVip(365)">立即购买</view>
					</view>
				</view>
			</view>
			<view class="vip-box">
				<view class="vip-maim">
					<view class="bg-gradual-orange padding radius text-center shadow-blur">
						<view class="text-lg text-bold">永久VIP<text class="text-black margin-left">45000积分</text></view>
						<view class="margin-top-sm text-Abc">享受永久VIP特权，并获取高亮VIP头衔</view>
						<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="toBuyVip(500)">立即购买</view>
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
				
			}
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
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			}
		},
	}
</script>

<style>
@import "../../static/base.css";
</style>
