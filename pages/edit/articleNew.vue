<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					发布作品
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="articleNew">
			<view class="articleNew-box"  @tap="toLink('/pages/edit/articlePost?type=add')">
				<view class="articleNew-main">
					<view class="articleNew-ico bg-green">
						<text class="cuIcon-writefill"></text>
					</view>
					<view class="articleNew-mian-info">
						<view class="articleNew-mian-title">
							在线撰写
						</view>
						<view class="articleNew-mian-intro">
							直接进入编辑器撰写作品
						</view>
					</view>
					<view class="articleNew-right">
						<text class="cuIcon-right"></text>
					</view>
				</view>
			</view>
			<view class="articleNew-box" @tap="toLink('/pages/edit/articlePost?type=add&isDocx=1')">
				<view class="articleNew-main">
					<view class="articleNew-ico bg-blue">
						<text class="cuIcon-roundaddfill"></text>
					</view>
					<view class="articleNew-mian-info">
						<view class="articleNew-mian-title">
							导入Docx
						</view>
						<view class="articleNew-mian-intro">
							导入本地Docx文档
						</view>
					</view>
					<view class="articleNew-right">
						<text class="cuIcon-right"></text>
					</view>
				</view>
			</view>
			<view class="articleNew-box"  @tap="toLink('/pages/user/draftList')">
				<view class="articleNew-main">
					<view class="articleNew-ico bg-brown">
						<text class="cuIcon-newshotfill"></text>
					</view>
					<view class="articleNew-mian-info">
						<view class="articleNew-mian-title">
							我的草稿箱
						</view>
						<view class="articleNew-mian-intro">
							查看已有的作品草稿
						</view>
					</view>
					<view class="articleNew-right">
						<text class="cuIcon-right"></text>
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
				AppStyle:this.$store.state.AppStyle,

				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
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
			toLink(text){
				var that = this;
				that.isPost = false;
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
			
		}
	}
</script>

<style>
</style>
