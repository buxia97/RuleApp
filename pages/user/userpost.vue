<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					投稿列表
				</view>
				<view class="action">
					<text class="cuIcon-add"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-card article no-card">
				<view class="cu-item shadow">
					<view class="content">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环</view>
							<view>
								<view class="cu-tag">草稿</view>
								<view class="cu-tag data-time">2021-05-17 15:35:26</view>
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item shadow">
					<view class="content">
						<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环</view>
							<view>
								<view class="cu-tag bg-red light sm round">已发布</view>
								<view class="cu-tag data-time">2021-05-17 15:35:26</view>
							</view>
						</view>
					</view>
				</view>


			</view>
		</view>
		
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
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
			PickerChange(e) {
				this.index = e.detail.value
			},
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
