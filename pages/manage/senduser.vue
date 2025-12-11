<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					发送消息
				</view>
				<view class="action" @tap="userRecharge">
					<button class="cu-btn round bg-blue">发送</button>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group">
				<view class="title">用户ID</view>
				<input placeholder="请输入用户ID" name="input" type="number" v-model="toid"></input>
				<view class="action">
					<text class="text-blue" @tap="toUser">选择用户</text>
				</view>
			</view>
			<view class="cu-form-group">
				<textarea  v-model="text" placeholder="请输入消息内容"></textarea>
			</view>
		</form>
		<!--  #ifdef MP -->
		<view class="post-update bg-blue" @tap="userRecharge">
			<text class="cuIcon-upload"></text>
		</view>
		<!--  #endif -->
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
				
				toid:"",
				text:"",
				modalName:null,
				
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
			
			//plus.navigator.setStatusBarStyle("dark")
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
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal() {
				this.modalName = null
			},
			toType(text,id){
				var that = this;
				that.typeText = text;
				that.type = id;
				console.log(id);
				that.hideModal();
			},
			userRecharge() {
				var that = this;
				if(that.toid==""||that.text==""){
					uni.showToast({
					    title:"请完成表单输入",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"uid":that.toid,
					"text":that.text,
					"token":token
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.sendUser(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							
							var timer = setTimeout(function() {
								that.back();
							}, 1000)
							
						}
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						uni.stopPullDownRefresh()
					}
				})
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
<strong></strong>

<style>
</style>