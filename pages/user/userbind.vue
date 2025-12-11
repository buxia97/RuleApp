<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					社会化登录绑定
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<view class="cu-list menu bind">
			<view class="cu-item margin-top">
				<view class="content">
					<image src="../../static/icon_qq.png"></image><text>QQ绑定</text>
				</view>
				<view class="action">
					<text class="text-gray" v-if="userBind.qqBind==0"  @tap="toQQBind">未绑定</text>
					<text class="text-red" @tap="toBindDelete('qq')" v-else>撤销绑定</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<image src="../../static/icon_weixin.png"></image>
					<text>微信绑定</text>
				</view>
				<view class="action">
					<text class="text-gray" v-if="userBind.weixinBind==0" @tap="toWexinBind">未绑定</text>
					<text class="text-red" @tap="toBindDelete('weixin')" v-else>撤销绑定</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<image src="../../static/icon_weibo.png"></image>
					<text>微博绑定</text>
				</view>
				<view class="action">
					<text class="text-gray" v-if="userBind.weiboBind==0"  @tap="toWeiboBind">未绑定</text>
					<text class="text-red" @tap="toBindDelete('sinaweibo')" v-else>撤销绑定</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-item">
				<view class="content">
					<image src="../../static/icon_apple.png"></image>
					<text>Apple绑定</text>
				</view>
				<view class="action">
					<text class="text-gray" v-if="userBind.appleBind==0"  @tap="toAppleBind">未绑定</text>
					<text class="text-red" @tap="toBindDelete('sinaweibo')" v-else>撤销绑定</text>
					<text class="cuIcon-right"></text>
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
			AppStyle:this.$store.state.AppStyle,
				
				
				token:'',
				
				userBind:{
					"qqBind":0,
					"weixinBind":0,
					"weiboBind":0,
					"appleBind":0
				}
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
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
				that.userBindStatus();
			}else{
				that.token = "";
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
			userBindStatus() {
				var that = this;
				that.$Net.request({
					
					url: that.$API.userBindStatus(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.userBind = res.data.data;
						}
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			toQQBind(){
				//QQ登陆
				//后端直接根据access_token来判断用户的唯一性。
				var that = this;
				
				uni.login({
					provider: 'qq',
					success: resp => {
						var js_code = resp.code;
						var access_token = "";
						// #ifdef APP-PLUS
						access_token = resp.authResult.access_token;
						// #endif
						uni.getUserInfo({
							provider: 'qq',
							success: function(infoRes) {
								
								var formdata = {
									nickName: infoRes.userInfo.nickname,
									//gender: infoRes.userInfo.gender == '男' ? 1 : 2,
									appLoginType:"qq",
				                    headImgUrl: infoRes.userInfo.figureurl_qq_2,
									// openId: infoRes.userInfo.openId,
									// accessToken: access_token
								};
								// #ifdef APP-PLUS
								formdata.openId=infoRes.userInfo.openId;
								formdata.accessToken=access_token,
								formdata.type = "app";
								// #endif
								// #ifdef MP-QQ
								formdata.type = "applets";
								formdata.js_code = js_code;
								// #endif
								uni.showLoading({
									title: "加载中"
								});
								that.$Net.request({
									
									url: that.$API.apiBind(),
									data:{
										"params":JSON.stringify(that.$API.removeObjectEmptyKey(formdata)),
										"token":that.token
									},
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
										if(res.data.code==1){
											that.userBindStatus();
											
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
								
							}
						});
					},
					fail: err => {
						uni.showToast({
							title: '请求出错啦！',
							icon: 'none',
							duration: 3000
						});
						uni.showLoading({
							title: "加载中"
						});
					}
				});
			},
			toWexinBind(){
				//微信登陆
				//后端直接根据unionId来判断用户的唯一性。
				var that = this;
				
				uni.login({
					provider: 'weixin',
					onlyAuthorize:true,
					success: res => {
						var js_code = res.code;
						// #ifdef APP-PLUS
						let formdata = {
							appLoginType:"weixin",
							js_code:js_code
						};
						formdata.type = "app";
						uni.showLoading({
							title: "加载中"
						});
						that.$Net.request({
							
							url: that.$API.apiBind(),
							data:{
								"params":JSON.stringify(that.$API.removeObjectEmptyKey(formdata)),
								"token":that.token
							},
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
								if(res.data.code==1){
									that.userBindStatus();
									
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
						// #endif
						// #ifdef MP-WEIXIN
						uni.getUserInfo({
							provider: 'weixin',
							onlyAuthorize:true,
							success: function(infoRes) {
								let formdata = {
									nickName: infoRes.userInfo.nickName,
									//gender: infoRes.userInfo.gender,
									appLoginType:"weixin",
								    headImgUrl: infoRes.userInfo.avatarUrl,
									// openId: infoRes.userInfo.openId,
									// accessToken: infoRes.userInfo.unionId,
								};
								formdata.type = "applets";
								formdata.js_code = js_code;
								uni.showLoading({
									title: "加载中"
								});
								that.$Net.request({
									
									url: that.$API.apiBind(),
									data:{
										"params":JSON.stringify(that.$API.removeObjectEmptyKey(formdata)),
										"token":that.token
									},
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
										if(res.data.code==1){
											that.userBindStatus();
											
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
								
							}
						});
						// #endif
					},
					fail: err => {
						uni.showToast({
							title: '请求出错啦！',
							icon: 'none',
							duration: 3000
						});
						uni.showLoading({
							title: "加载中"
						});
					}
				});
			},
			toWeiboBind(){
				//微博登陆
				//后端直接根据access_token来判断用户的唯一性。
				var that = this;
				
				uni.login({
					provider: 'sinaweibo',
					success: res => {
						var access_token = '';
						access_token = res.authResult.access_token;
						uni.getUserInfo({
							provider: 'sinaweibo',
							success: function(infoRes) {
								var formdata = {
									nickName: infoRes.userInfo.nickname,
									//gender: infoRes.userInfo.gender == 'm' ? 1 : 2,
									headImgUrl: infoRes.userInfo.avatar_large,
									openId: infoRes.userInfo.id,
									accessToken: access_token,
									appLoginType: 'SINAWEIBO'
			
								};
								uni.showLoading({
									title: "加载中"
								});
								that.$Net.request({
									
									url: that.$API.apiBind(),
									data:{
										"params":JSON.stringify(that.$API.removeObjectEmptyKey(formdata)),
										"token":that.token
									},
									header:{
										'Content-Type':'application/x-www-form-urlencoded'
									},
									method: "post",
									dataType: 'json',
									success: function(res) {
										setTimeout(function () {
											uni.hideLoading();
										}, 1000);
										uni.showToast({
											title: res.data.msg,
											icon: 'none'
										})
										if(res.data.code==1){
											that.userBindStatus();
											
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
							}
						});
					},
					fail: err => {
						uni.showToast({
							title: '请求出错啦！',
							icon: 'none',
							duration: 3000
						});
						uni.showLoading({
							title: "加载中"
						});
					}
				});
			},
			toAppleBind(){
				var that = this;
				//微博登陆
				uni.login({
				    provider: 'apple',
				    success: function (loginRes) {
				        uni.getUserInfo({
				            provider: 'apple',
				            success: function(info) {
							var formdata = {
							    appLoginType: "apple",
							    // 苹果用户唯一标识（Apple ID Sub）
							    openId: info.userInfo.openId || '',
							    // 身份令牌（JWT）
							    accessToken: info.userInfo.identityToken || '',
								
							};
							  uni.showLoading({
							  	title: "加载中"
							  });
							  that.$Net.request({
							  	
							  	url: that.$API.apiBind(),
							  	data:{"params":JSON.stringify(that.$API.removeObjectEmptyKey(formdata))},
							  	header:{
							  		'Content-Type':'application/x-www-form-urlencoded'
							  	},
							  	method: "post",
							  	dataType: 'json',
							  	success: function(res) {
							  		setTimeout(function () {
							  			uni.hideLoading();
							  		}, 1000);
							  		uni.showToast({
							  			title: res.data.msg,
							  			icon: 'none'
							  		})
							  		if(res.data.code==1){
							  			that.userBindStatus();
							  			
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
				            }
				        })
				    },
				    fail: function (err) {
				        // 登录授权失败
				        // err.code错误码参考`授权失败错误码(code)说明`
				    }
				});
			},
			toBindDelete(type){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"appLoginType":type,
					"token":token
				}
				uni.showModal({
				    title: '确定要撤销绑定吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.apiBindDelete(),
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
				            		if(res.data.code==1){
										that.userBindStatus();
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
				            	}
				            })
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style>
</style>
