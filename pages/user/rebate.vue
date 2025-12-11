<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]" :class="AppStyle">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					获取{{currencyName}}
				</view>
				<view class="action">
					<text class="text-blue"  @tap="toLink('/pages/user/inviteList')">邀请记录</text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			
			<view class="cu-list menu">
				<!--  #ifdef APP-PLUS -->
				<block v-if="adsVideoType==0">
					<view class="cu-item" v-if="adpid!=''&&adpid">
						<view class="content">
							<text>观看广告，奖励随机{{currencyName}}</text>
						</view>
						<view class="action">
							
							<text class="cu-btn bg-yellow radius cuIcon-videofill" v-if="adpid!=''&&adpid" @tap="show">获取</text>
							
						</view>
					</view>
				</block>
				<block v-if="adsVideoType==1">
					<view class="cu-item" v-if="adpid!=''&&adpid">
						<view class="content">
							<text>观看广告，奖励随机{{currencyName}}</text>
						</view>
						<view class="action">
							<ad-rewarded-video 
							:adpid="adpid" 
							:url-callback="urlCallback" 
							:loadnext="true" 
							v-slot:default="{loading, error}"
							@close="onadRewardedClose"
							@load="onadRewardedLoad"
							@error="onaderror"	>
							  <text class="cu-btn bg-yellow radius cuIcon-videofill" :disabled="loading" :loading="loading">获取</text>
							  <!-- <text class="text-red" v-if="error">{{error}}</text> -->
							</ad-rewarded-video>
						</view>
					</view>
				</block>
				<!--  #endif -->
				<view class="cu-item">
					<view class="content">
						<text>在线充值{{currencyName}}</text>
					</view>
					<view class="action">
						
						<text class="cu-btn bg-green radius cuIcon-upload" @tap="userrecharge">充值</text>
						
					</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="invite">
				<view class="invite-title">邀请好友，获得{{currencyName}}</view>
				<view class="invite-main">
					<view class="invite-pic">
						<image :src="codeImg" mode="widthFix"></image>
					</view>
					<view class="invite-text  text-blue">
						{{invitationCode}}
					</view>
				</view>
				<view class="invite-btn">
					<text class="cu-btn bg-red radius" @tap="dtImg">下载图片</text>
					<text class="cu-btn bg-blue radius margin-left" @tap="copy(invitationCode)">复制邀请码</text>
				</view>
			</view>
			<view class="padding">
				<view class="margin-bottom-sm">1.可通过保存邀请码，并让被邀请者使用本平台应用进行扫码，即可开始邀请注册。</view>
				<view class="margin-bottom-sm">2.被邀请者注册后，可获得固定奖励，或消费分成奖励，以实际信息为准。</view>
			</view>
			
		</view>
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<!--加载遮罩结束-->
	</view>
	
</template>

<script>
	const ERROR_CODE = [-5001, -5002, -5003, -5004, -5005, -5006];
	import waves from '@/components/xxley-waves/waves.vue';
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
			AppStyle:this.$store.state.AppStyle,
				
				
				userInfo:null,
				token:"",
				
				isLoading:0,
				
				modalName: null,
				
				currencyName:"",
				invitationCode:"--",
				codeImg:null,
				
				title: '激励视频广告',
				loading: false,
				loadError: false,
				adpid:'',
				adsLogid:'',
				
				//服务端回调相关配置
				urlCallback: {
					userId: '0',
					extra: 'RuleApp'
				},
				adsVideoType:1,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onReady() {
		    // #ifdef APP-PLUS
			this.adsVideoType = this.$API.GetAdsVideoType();
			this.adpid = this.$API.GetAdpid();
			
			if(this.adpid!=""&&this.adpid){
				this.adOption = {
				    adpid: this.adpid
				};
				this.createAd();
			}
		    
		    // #endif
		    
		},
		onShow(){
			var that = this;
			that.currencyName = that.$API.getCurrencyName();
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
				that.urlCallback.userId = that.userInfo.uid;
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
				that.getInvitationCode();
			}
		},
		onLoad() {
			var that = this;
			that.currencyName = that.$API.getCurrencyName();
			
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.urlCallback.userId = that.userInfo.uid;
			}
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
			hideModal(e) {
				this.modalName = null
			},
			toLink(text){
				var that = this;
				
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
			userrecharge(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/userrecharge'
				});
				
			},
			formatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				// 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
				var year = datetime.getFullYear(),
					month = ("0" + (datetime.getMonth() + 1)).slice(-2),
					date = ("0" + datetime.getDate()).slice(-2),
					hour = ("0" + datetime.getHours()).slice(-2),
					minute = ("0" + datetime.getMinutes()).slice(-2);
				//second = ("0" + date.getSeconds()).slice(-2);
				// 拼接
				var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
				// 返回
				return result;
			},

			tovipDiscount(num){
				if(Number(num)<=0){
					return 0;
				}else{
					num = num.toString();
					num = num.replace("0.","");
					return num;
				}
				
			},
			//激励视频
			createAd() {
				var that = this;
			    var rewardedVideoAd = this.rewardedVideoAd = uni.createRewardedVideoAd(this.adOption);
			    rewardedVideoAd.onLoad(() => {
			        this.loading = false;
			        this.loadError = false;
			        console.log('onLoad event')
			    });
			    rewardedVideoAd.onClose((res) => {
			        this.loading = true;
			        // 用户点击了【关闭广告】按钮
			        if (res && res.isEnded) {
			            // 正常播放结束
			            console.log("onClose " + res.isEnded);
						console.log("开始广告")
						that.adsGiftNotify();
			        } else {
			            // 播放中途退出
			            console.log("onClose " + res.isEnded);
						setTimeout(() => {
						    uni.showToast({
						        title: "您未完成广告播放，无法获得奖励！",
						        duration: 10000,
						        position: 'bottom'
						    })
						}, 500)
			        }
					uni.hideLoading();
			        
			    });
			    rewardedVideoAd.onError((err) => {
					uni.hideLoading();
			        this.loading = false;
			        if (err.code && ERROR_CODE.indexOf(err.code) !== -1) {
			            this.loadError = true;
			        }
			        console.log('onError event', err)
					uni.showToast({
					    title: err.errMsg,
					    duration: 10000,
					    position: 'bottom'
					})
			    });
			    this.loading = true;
			},
			show() {
				var that = this;
				uni.showLoading();
				that.$Net.request({
					
					url: that.$API.adsGift(),
					data:{
						"token":that.token,
						"appkey":that.$API.getAppKey()
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						console.log(JSON.stringify(res));
						uni.hideLoading();
						if(res.data.code==1){
							that.adsLogid = res.data.data.logid;
							const rewardedVideoAd = that.rewardedVideoAd;
							rewardedVideoAd.show().catch(() => {
							    rewardedVideoAd.load()
							        .then(() => rewardedVideoAd.show())
							        .catch(err => {
							            console.log('激励视频 广告显示失败', err)
							            uni.showToast({
							                title: err.errMsg || err.message,
							                duration: 5000,
							                position: 'bottom'
							            })
							        })
							})
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
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
			adsGiftNotify(){
				var that = this;
				console.log("进来了")

				that.$Net.request({
					
					url: that.$API.adsGiftNotify(),
					data:{
						"token":that.token,
						"logid":that.adsLogid
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						console.log(JSON.stringify(res));
						if(res.data.code==1){
							uni.showToast({
							    title: "已获得"+res.data.data.award+that.currencyName+"奖励",
							    duration: 3000,
							    position: 'bottom'
							})
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
			reloadAd() {
			    this.loading = true;
			    this.rewardedVideoAd.load();
			},
			copy(text) {
				var that = this;
				// #ifndef H5
				uni.setClipboardData({
					data: text,
					success:() => {
						uni.showToast({
							title:'复制成功',
							 icon: 'none'
						})
					}
				});
				// #endif
				
				 // #ifdef H5 
					let textarea = document.createElement("textarea")
					textarea.value = text
					textarea.readOnly = "readOnly"
					document.body.appendChild(textarea)
					textarea.select() // 选中文本内容
					textarea.setSelectionRange(0, text.length) 
					uni.showToast({//提示
						title:'复制成功',
						icon: 'none'
					})
					result = document.execCommand("copy") 
					textarea.remove()    
				// #endif
			},
			getInvitationCode() {
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				
				}
				that.$Net.request({
					
					url: that.$API.getInvitationCode(),
					data:{
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
						if(res.data.code==1){
							that.invitationCode = res.data.data;
							var inviteJson = {
								"type":"Invite",
								"code":that.invitationCode
							}
							
							that.codeImg = that.$API.qrCode()+"?codeContent="+encodeURIComponent(JSON.stringify(inviteJson));
						}
					},
					fail: function(res) {
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			dtImg(){
				var that = this;
				var url = that.codeImg;
				// #ifdef APP-PLUS
				uni.downloadFile({
					url: url,
					success: (res) =>{
						if (res.statusCode === 200){
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: function() {
									if(that.payType==1){
										uni.showToast({
											title: "图片已保存，微信不支持相册识别支付，请通过正常扫码完成。",
											icon: "none"
										});
									}else{
										uni.showToast({
											title: "保存成功",
											icon: "none"
										});
									}
									
								},
								fail: function() {
									uni.showToast({
										title: "保存失败，请稍后重试",
										icon: "none"
									});
								}
							});
						}
					}
				})
				// #endif
				// #ifdef H5
				uni.showToast({
					title: "请长按二维码图片保存",
					icon: "none"
				});
				// #endif
			},
			onadRewardedLoad() {
				console.log('激励视频广告数据加载成功');
			},
			onaderror(e) {
				// 广告加载失败
				console.log(e.detail, '广告加载失败');
				uni.showToast({
					title: "广告加载失败，请稍后重试",
					icon: "none"
				});
			},
			onadRewardedClose(e) {
				const detail = e.detail;
				// 用户点击了【关闭广告】按钮
				if (detail && detail.isEnded) {
					// 正常播放结束
					console.log('onadclose---正常播放结束 ' + detail.isEnded);
					uni.showToast({
						title: "播放完成，奖励已发放！",
						icon: "none"
					});
				} else {
					console.log('onadclose--播放中途退出 ' + detail.isEnded);
					uni.showToast({
						title: "你未完成广告播放，无法获得奖励！",
						icon: "none"
					});
				}
			}
		},
		components: {
			waves
		}
	}
</script>

<style>
</style>
