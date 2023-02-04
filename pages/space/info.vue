<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					动态详情
				</view>
				<view class="action" @tap="userRecharge">
					<text class="cuIcon-more"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="cu-card dynamic no-card space-info">
			<view class="cu-item">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content flex-sub">
							<view>凯尔</view>
							<view class="text-gray text-sm flex justify-between">
								2019年12月3日
							</view>
						</view>
					</view>
				</view>
				<view class="text-content">
					动态的内容，可以很长，不显示长度，就是这样很好。动态的内容，可以很长，不显示长度，就是这样很好。动态的内容，可以很长，不显示长度，就是这样很好。动态的内容，可以很长，不显示长度，就是这样很好。动态的内容，可以很长，不显示长度，就是这样很好。动态的内容，可以很长，不显示长度，就是这样很好。动态的内容，可以很长，不显示长度，就是这样很好。动态的内容，可以很长，不显示长度，就是这样很好。动态的内容，可以很长，不显示长度，就是这样很好。动态的内容，可以很长，不显示长度，就是这样很好。
				</view>
				<view class="grid flex-sub padding-lr col-3 grid-square">
					<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
					 v-for="(item,index) in 6" :key="index">
					</view>
				</view>

			</view>
		</view>
		<view class="space-reply">
			<view class="space-reply-head">
				<text>转发 0</text>
				<text class="margin-left-xl cur">评论 0</text>
				<text class="space-reply-likes">赞 0</text>
			</view>
			<view class="space-reply-list">
				<view class="cu-list menu-avatar comment">
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content">
							<view class="text-grey">老实人</view>
							<view class="text-gray text-content text-df">
								这个是测试的回复内容，反正是用来测试的，很强总之
							</view>
							<view class="space-reply-num padding-xs radius margin-top-sm  text-sm">
								<text class="text-blue">共10条回复<text class="cuIcon-right margin-left-xs"></text></text>
							</view>
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">2018年12月4日</view>
								<view>
									<text class="cuIcon-forward text-gray"></text>
									<text class="cuIcon-message text-gray margin-left-xl"></text>
									<text class="cuIcon-appreciate text-gray margin-left-xl">1.13万</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="no-data">
					<text class="cuIcon-text"></text>
					
					暂时没有消息
					<view class="text-center margin-top-sm">
						<text class="cu-btn bg-blue">我要抢首评</text>
					</view>
					
				</view>
				
			</view>
		</view>
		<view class="space-footer grid col-3">
			<view class="space-footer-box">
				<text class="cuIcon-forward"></text>
				转发
			</view>
			<view class="space-footer-box">
				<text class="cuIcon-message"></text>
				评论
			</view>
			<view class="space-footer-box">
				<text class="cuIcon-appreciate"></text>
				点赞
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
				AppStyle:this.$store.state.AppStyle,
				
				
				
				token:'',
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onHide() {
			localStorage.removeItem('getuid')
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
			if(localStorage.getItem('getuid')){
				that.toid = localStorage.getItem('getuid');
			}
			
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
		}
	}
</script>

<style>
</style>
