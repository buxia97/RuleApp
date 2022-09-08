<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					付费广告位
				</view>
				<view class="action">
					<text class="text-blue">我的广告</text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="ads-list">
			<view class="ads-box">
				<view class="ads-main">
					<view class="ads-name">
						文章推流广告
					</view>
					<view class="ads-text">
						在用户下拉文章列表时，平台将随机推送已有的推流广告列表。您发布的广告将以类似文章的形式嵌入列表中，并拥有广告标识，在活跃用户浏览文章时，您的广告将获得充分曝光。
					</view>
					<view class="ads-info grid col-3 text-center">
						<view class="ads-num">
							剩余：<text class="text-blue">30</text>
						</view>
						<view class="ads-price">
							<text class="text-red">100积分</text>/天
						</view>
						<view class="ads-btn">
							<text class="text-green">立即购买</text>
						</view>
					</view>
				</view>
			</view>
			<view class="ads-box">
				<view class="ads-main">
					<view class="ads-name">
						横幅广告
					</view>
					<view class="ads-text">
						在平台的几个固定的热门区域将随机推送所有的横幅广告列表。您发布的广告将以图片横幅的形式随机显示在平台的固定区域，在部分用户频繁访问的页面区域（如文章详情页面），将获得良好的引流效果。
					</view>
					<view class="ads-info grid col-3 text-center">
						<view class="ads-num">
							剩余：<text class="text-blue">5</text>
						</view>
						<view class="ads-price">
							<text class="text-red">100积分</text>/天
						</view>
						<view class="ads-btn">
							<text class="text-green">立即购买</text>
						</view>
					</view>
				</view>
			</view>
			<view class="ads-box">
				<view class="ads-main">
					<view class="ads-name">
						启动图广告
					</view>
					<view class="ads-text">
						在平台APP启动的时候（仅限原生安卓和苹果），平台将随机显示一条启动图广告。您发布的广告将以启动大图的形式显示在所有用户的启动界面，且每一次用户打开APP都可能获得推送，由于启动图广告名额较少，您将可以较快的获得曝光。
					</view>
					<view class="ads-info grid col-3 text-center">
						<view class="ads-num">
							剩余：<text class="text-blue">2</text>
						</view>
						<view class="ads-price">
							<text class="text-red">100积分</text>/天
						</view>
						<view class="ads-btn">
							<text class="text-green">立即购买</text>
						</view>
					</view>
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
		
	},
	onLoad(res) {
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
	},
}
</script>

<style>
@import "../../static/base.css";
</style>
