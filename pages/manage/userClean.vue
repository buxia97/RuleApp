<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					用户数据清理
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">用户UID</view>
				<input placeholder="请输入用户UID" name="input" type="number" v-model="uid"></input>
				<view class="action">
					<text class="text-blue" @tap="toUser">选择用户</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清除该用户所有文章</view>
				<view class="action">
					<text class="cu-btn bg-red radius" @tap="userClean(1)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清除该用户所有评论</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="userClean(2)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清除该用户所有动态
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="userClean(3)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清除该用户所有商品
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="userClean(4)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清除该用户所有签到记录
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="userClean(5)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清除该用户所有帖子
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="userClean(6)">确认清理</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">清除该用户所有帖子评论
				</view>
				<view class="action">
					<text class="cu-btn bg-red  radius" @tap="userClean(7)">确认清理</text>
				</view>
			</view>
		</form>
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
				uid:""
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			if(localStorage.getItem('getuid')){
				that.uid = localStorage.getItem('getuid');
				localStorage.removeItem('getuid');
			}
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
			userClean(id){
				var that = this;
				var token = "";
				if(that.uid==""){
					uni.showToast({
						title: "请输入用户uid",
						icon: 'none'
					})
					return false;
				}
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"uid":that.uid,
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
				            
				            that.$Net.request({
				            	url: that.$API.userClean(),
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
			toUser(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/manage/users?type=get'
				});
			}
		}
	}
</script>

<style>
</style>
