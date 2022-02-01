<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					积分商城
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="index-sort grid col-4">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('../user/useredit')">
							<view class="index-sort-i">
								<text class="cuIcon-friend"></text>
							</view>
							<view class="index-sort-text">
								实体商品
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('../user/inbox')">
							<view class="index-sort-i">
								<text class="cuIcon-text"></text>
							</view>
							<view class="index-sort-text">
								源码
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('../user/usermark')">
							<view class="index-sort-i">
								<text class="cuIcon-favorfill"></text>
							</view>
							<view class="index-sort-text">
								软件工具
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('../user/userpost')">
							<view class="index-sort-i">
								<text class="cuIcon-shop"></text>
							</view>
							<view class="index-sort-text">
								付费阅读
							</view>
						</view>
					</waves>
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
				
				
				userInfo:null,
				token:"",
				
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
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
