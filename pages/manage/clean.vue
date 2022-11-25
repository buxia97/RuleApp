<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					数据清理
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">清理用户30天前签到日志</view>
				<view class="action">
					<text class="cu-btn bg-red radius" @tap="dataClean(1)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清理用户30天前资产日志</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="dataClean(2)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清理用户30天前订单数据
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="dataClean(3)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清理已使用充值码
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="dataClean(4)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清理已使用邀请码
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="dataClean(5)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清理超一年未登录用户
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="dataClean(6)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清理未支付订单
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="dataClean(7)">确认清理</text>
				</view>
			</view>
		</form>
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
			dataClean(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"clean":id,
					"token":token
				}
				uni.showModal({
				    title: '确定要删除该类数据吗？',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            Net.request({
				            	url: API.dataClean(),
				            	data:data,
				            	header:{
				            		'Content-Type':'application/x-www-form-urlencoded'
				            	},
				            	method: "get",
				            	dataType: 'json',
				            	success: function(res) {
				            		setTimeout(function () {
				            			uni.hideLoading();
				            		}, 1000);
				            		uni.showToast({
				            			title: res.data.msg,
				            			icon: 'none'
				            		})
				            		
				            	},
				            	fail: function(res) {
				            		setTimeout(function () {
				            			uni.hideLoading();
				            		}, 1000);
				            		uni.showToast({
				            			title: "网络开小差了哦",
				            			icon: 'none'
				            		})
				            	}
				            })
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
				
			},
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
