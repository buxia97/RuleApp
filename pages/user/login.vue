<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="loginType==0">
						用户登录
					</block>
					<block v-if="loginType==1">
						手机号快捷登录
					</block>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toRegister">
					<text>注册</text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="user-form" v-if="loginType==0">
			<form>
				<view class="cu-form-group">
					<input name="input" placeholder="用户名/邮箱/手机号 " v-model="userName"></input>
					<text class="text-blue" v-if="isPhone==1" @tap="loginType=1">快捷登录</text>
				</view>
				<view class="cu-form-group">
					<input name="input" placeholder="用户密码" type="password" v-if="!pwdShow" v-model="password"></input>
					<input name="input" placeholder="用户密码" type="text" v-if="pwdShow" v-model="password"></input>
					<text class="active cuIcon-attentionfill text-black" @tap="pwdShow=!pwdShow" v-if="password!=''&&pwdShow"></text>
					<text class="active cuIcon-attentionfill text-gray" @tap="pwdShow=!pwdShow" v-if="password!=''&&!pwdShow"></text>
				</view>
				<view class="user-btn flex flex-direction">
					<button class="cu-btn bg-blue margin-tb-sm lg" @tap="login">立即登录</button>
					<!-- #ifdef MP -->
					<button class="cu-btn bg-green margin-tb-sm lg" @tap="toRegister">注册新用户</button>
					<!-- #endif -->
					<view class="qrcode-login text-center margin-top-sm" @tap="qrcodeLogin">
						<text class="text-black"><text class="cuIcon-qrcode margin-right-xs"></text>扫码登录</text>
					</view>
					<text class="text-center margin-top"><text class="agree-ico" :class="isAgree?'bg-blue':''" @tap="isAgree=!isAgree"><text class="cuIcon-check"></text></text>我同意<text class="text-blue" @tap="toPrivacyPolicy()">《隐私政策》</text>和<text class="text-blue" @tap="toAgreement()">《用户服务条款》</text></text>
				</view>
			</form>
		</view>
		<view class="user-form" v-if="loginType==1">
			<form>
				<view class="cu-form-group">
					<view class="login-area margin-right-sm" @tap="showArea=!showArea">
						<text class="login-area-text">{{areaCode}}</text><text class="cuIcon-triangledownfill"></text>
						<view class="login-area-list" v-if="showArea">
							<view class="login-area-list-search">
								<input name="input" v-model="searchArea" placeholder="搜索国家/地区"></input>
							</view>
							<scroll-view class="login-area-list-concent" scroll-y>
								<block v-if="searchArea==''">
									<view class="login-area-box" v-for="(item,index) in areaList" :key="index" @tap="setArea(item.code)">
										<text class="area-code">{{item.code}}</text>
										<text class="area-text">{{item.text}}</text>
									</view>
								</block>
								<block v-else>
									<view class="login-area-box" v-for="(item,index) in areaList" :key="index" @tap="setArea(item.code)" v-if="item.text.indexOf(searchArea)!=-1||item.code.indexOf(searchArea)!=-1">
										<text class="area-code">{{item.code}}</text>
										<text class="area-text">{{item.text}}</text>
									</view>
								</block>
							</scroll-view>
						</view>
					</view>
					<input name="input" placeholder="请输入手机号" v-model="phone"></input>
				</view>
				<view class="cu-form-group">
					<input name="input" v-model="code" placeholder="请输入验证码"></input>
					<view class="sendcode text-blue" v-if="show" @tap="SMSCode">发送</view>
					<view class="sendcode text-gray" v-if="!show">{{ times }}s</view>
				</view>
				<view class="user-btn flex flex-direction">
					<button class="cu-btn bg-blue margin-tb-sm lg" @tap="phoneLogin">一键登录</button>
					<button class="cu-btn line-green lg" @tap="loginType=0">普通登录</button>
					<text class="text-center margin-top"><text class="agree-ico" :class="isAgree?'bg-blue':''" @tap="isAgree=!isAgree"><text class="cuIcon-check"></text></text>我同意<text class="text-blue" @tap="toPrivacyPolicy()">《隐私政策》</text>和<text class="text-blue" @tap="toAgreement()">《用户服务条款》</text></text>
				</view>
			</form>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="api-login" v-if="AppInfo!=null">
			<view class="api-login-box" @tap="toApplelogin" v-if="isIOS13OrAbove==1&&AppInfo.switchAppleLogin==1">
				<image src="../../static/icon_apple.png"></image>
			</view>
			<view class="api-login-box" @tap="toQQlogin" v-if="AppInfo.switchQQLogin==1">
				<image src="../../static/icon_qq.png"></image>
			</view>
			<view class="api-login-box" @tap="toWexinlogin" v-if="AppInfo.switchWxLogin==1">
				<image src="../../static/icon_weixin.png"></image>
			</view>
			<view class="api-login-box" @tap="toWeibologin" v-if="AppInfo.switchWbLogin==1">
				<image src="../../static/icon_weibo.png"></image>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-WEIXIN -->
		<view class="api-login">
			<view class="api-login-box" @tap="toWexinlogin">
				<image src="../../static/icon_weixin.png"></image>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef MP-QQ -->
		<view class="api-login">
			<view class="api-login-box" @tap="toQQlogin">
				<image src="../../static/icon_qq.png"></image>
			</view>
		</view>
		<!-- #endif -->
		<view class="user-foget">
			<text @tap="toFoget">忘记密码？</text>
		</view>
		<view class="cu-modal" :class="modalName=='kaptcha'?'show':''">
			<view class="cu-dialog kaptcha-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">操作验证</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close"></text>
					</view>
				</view>
				<view class="kaptcha-form">
					<view class="kaptcha-image">
						<image :src="kaptchaUrl" mode="widthFix" @tap="reloadCode()"></image>
					</view>
					<view class="kaptcha-input">
						<input name="input" v-model="verifyCode" placeholder="请输入验证码"></input>
						<view class="cu-btn bg-blue" @tap="SMSCode">确定</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	import area from '../../utils/area.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				userName:"",
				password:"",
				loginType:0,
				isPhone:0,
				areaList:area.area,
				
				times: 60,
				show:true,
				
				phone:"",
				searchArea:"",
				code:"",
				areaCode:"+86",
				showArea:false,
				
				modalName:null,
				kaptchaUrl:"",
				verifyCode:"",
				verifyLevel:0,
				styleIndex:"",
				
				
				pwdShow:false,
				
				isIOS13OrAbove:0,
				
				isAgree:false,
				
				AppInfo:null
				
				
				
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
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.regConfig();
			that.kaptchaUrl = that.$API.getKaptcha();
			that.styleIndex = that.$API.GetStyleIndex();
			
			// 判断是否为 iOS 13 及以上版本
			const info = uni.getSystemInfoSync()
			
			if(localStorage.getItem('AppInfo')){
				try{
					that.AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
				}catch(e){
					console.log(e);
				}
				
			}
			if (info.platform === 'ios') {
			  // system 示例： "iOS 17.2.1"
			  const match = info.system.match(/iOS\s([\d_\.]+)/i)
			  if (match && match[1]) {
			    const versionStr = match[1].replace(/_/g, '.') // 兼容 iOS 可能的下划线格式
			    const majorVersion = parseInt(versionStr.split('.')[0])
			    if (majorVersion >= 13) {
			      that.isIOS13OrAbove = 1
			    }
			  }
			}
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			setArea(code){
				var that = this;
				that.areaCode = code;
			},
			reloadCode(){
				var that = this;
				var kaptchaUrl = that.$API.getKaptcha();
				var num=Math.ceil(Math.random()*10);
				kaptchaUrl += "?"+num;
				that.kaptchaUrl = kaptchaUrl;
			},
			getCID() {
				var that = this;
				let cid = ''
				// #ifdef APP-PLUS
				let pinf = plus.push.getClientInfo();
				cid = pinf.clientid;
				if(cid){
					that.setClientId(cid);
				}
				// #endif
			},
			hideModal(e) {
				this.modalName = null
			},
			setClientId(cid){
				var that = this;
				var token = "";
				if(localStorage.getItem('token')){
					
					token = localStorage.getItem('token');
				}else{
					return false;
				}
				that.$Net.request({
					
					url: that.$API.setClientId(),
					data:{
						"clientId":cid,
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
			
							
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
			regConfig() {
				var that = this;
				
				if(localStorage.getItem('AppInfo')){
					try{
						var AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
						that.loginType = AppInfo.isPhone;
						that.isPhone = AppInfo.isPhone;
						that.verifyLevel = AppInfo.verifyLevel;
					}catch(e){
						console.log(e);
					}
					
				}
				
				

			},
			login() {
				var that = this;
				if (that.password == ""||that.userName == "") {
					uni.showToast({
					    title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
			
				var data = {
					name: that.userName,
					password: that.password,
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.userLogin(),
					data:{
						"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
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
							//保存用户信息
							localStorage.setItem('userinfo',JSON.stringify(res.data.data));
							localStorage.setItem('token',res.data.data.token);
							that.getCID();
							var timer = setTimeout(function() {
								var styleIndex = that.styleIndex;
								uni.redirectTo({
									url: '/pages/home/'+styleIndex
								})
								clearTimeout('timer')
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
			toRegister(){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/user/register'
				});
			},
			toFoget(){
				var that = this;
				uni.navigateTo({
					url: '/pages/user/foget'
				});
			},
			toQQlogin(){
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
									
									url: that.$API.userApi(),
									data:{"params":JSON.stringify(that.$API.removeObjectEmptyKey(formdata))},
									header:{
										'Content-Type':'application/x-www-form-urlencoded'
									},
									method: "get",
									dataType: 'json',
									success: function(res) {
										console.log(res)
										setTimeout(function () {
											uni.hideLoading();
										}, 1000);
										uni.showToast({
											title: res.data.msg,
											icon: 'none'
										})
										if(res.data.code==1){
											//保存用户信息
											localStorage.setItem('userinfo',JSON.stringify(res.data.data));
											localStorage.setItem('token',res.data.data.token);
											var timer = setTimeout(function() {
												var styleIndex = that.styleIndex;
												uni.redirectTo({
													url: '/pages/home/'+styleIndex
												})
												clearTimeout('timer')
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
								
							}
						});
					},
					fail: err => {
						uni.showToast({
							title: '请求出错啦！',
							icon: 'none',
							duration: 3000
						});
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
					}
				});
			},
			toWexinlogin(){
				var that = this;
				//微信登陆
				//后端直接根据unionId来判断用户的唯一性。
				
				uni.login({
					provider: 'weixin',
					onlyAuthorize:true,
					success: res => {
						var js_code = res.code;
						console.log(JSON.stringify(res));
						//微信APP需要从微信接口获取
						// #ifdef APP-PLUS
						let formdata = {
							"type":"app",
							"js_code":js_code,
							"appLoginType":"weixin"
						}
						uni.showLoading({
							title: "加载中"
						});
						that.$Net.request({
							
							url: that.$API.userApi(),
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
									//保存用户信息
									localStorage.setItem('userinfo',JSON.stringify(res.data.data));
									localStorage.setItem('token',res.data.data.token);
									var timer = setTimeout(function() {
										var styleIndex = that.styleIndex;
										uni.redirectTo({
											url: '/pages/home/'+styleIndex
										})
										clearTimeout('timer')
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
						// #endif
						//微信小程序直接获取
						// #ifdef MP-WEIXIN
						uni.getUserInfo({
							provider: 'weixin',
							onlyAuthorize:true,
							success: function(infoRes) {
								console.log(JSON.stringify(infoRes));
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
									
									url: that.$API.userApi(),
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
											//保存用户信息
											localStorage.setItem('userinfo',JSON.stringify(res.data.data));
											localStorage.setItem('token',res.data.data.token);
											var timer = setTimeout(function() {
												var styleIndex = that.styleIndex;
												uni.redirectTo({
													url: '/pages/home/'+styleIndex
												})
												clearTimeout('timer')
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
								
							}
						});
						// #endif
					},
					fail: err => {
						console.log(err)
						uni.showToast({
							title: err.errMsg,
							icon: 'none',
							duration: 3000
						});
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
					}
				});
			},
			toWeibologin(){
				var that = this;
				//微博登陆
				//后端直接根据access_token来判断用户的唯一性。
				
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
									
									url: that.$API.userApi(),
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
											//保存用户信息
											localStorage.setItem('userinfo',JSON.stringify(res.data.data));
											localStorage.setItem('token',res.data.data.token);
											var timer = setTimeout(function() {
												var styleIndex = that.styleIndex;
												uni.redirectTo({
													url: '/pages/home/'+styleIndex
												})
												clearTimeout('timer')
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
							}
						});
					},
					fail: err => {
						uni.showToast({
							title: '请求出错啦！',
							icon: 'none',
							duration: 3000
						});
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
					}
				});
			},
			toApplelogin(){
				var that = this;
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
								
				                uni.showLoading({ title: "加载中" });
				                that.$Net.request({
				                    url: that.$API.userApi(),
				                    data: {"params": JSON.stringify(that.$API.removeObjectEmptyKey(formdata))},
				                    header: {'Content-Type':'application/x-www-form-urlencoded'},
				                    method: "post",
				                    dataType: 'json',
				                    success: function(res) {
				                        uni.hideLoading();
				                        uni.showToast({ title: res.data.msg, icon: 'none' });
				                        if(res.data.code==1){
				                            localStorage.setItem('userinfo', JSON.stringify(res.data.data));
				                            localStorage.setItem('token', res.data.data.token);
				                            setTimeout(function(){
				                                uni.redirectTo({ url: '/pages/home/'+that.styleIndex })
				                            },1000)
				                        }
				                    },
				                    fail: function() {
				                        uni.hideLoading();
				                        uni.showToast({ title: "网络错误", icon: 'none' });
				                    }
				                })
				            }
				        })
				    },
				    fail: function (err) {
				        console.log('Apple登录失败：', err);
				    }
				});
				
			},
			SMSCode() {
				var that = this;
				if (that.phone == "") {
					uni.showToast({
						title:"请输入手机号",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				
				
				if(that.verifyLevel > 0){
					if (that.verifyCode == "") {
						that.modalName = 'kaptcha'
						return false
					}
				}
				var data = {
					"area":that.areaCode,
					'phone':that.phone,
					'verifyCode':that.verifyCode
				}
				
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.sendSMS(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.modalName = null;
						that.verifyCode = "";
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							that.getCode();
						}
						
					},
					fail: function(res) {
						that.modalName = null;
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
			getCode() {
			  this.show = false
			  this.timer = setInterval(()=>{
				this.times--
				if(this.times===0){
				  this.show = true
				  clearInterval(this.timer);
				  this.times = 60;
				}
			  },1000)
			},
			phoneLogin(){
				var that = this;
				if (that.phone == ""||that.code == "") {
					uni.showToast({
					    title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
							
				var data = {
					'phone':that.areaCode + that.phone,
					"code": that.code
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.phoneLogin(),
					data:data,
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
							//保存用户信息
							localStorage.setItem('userinfo',JSON.stringify(res.data.data));
							localStorage.setItem('token',res.data.data.token);
							that.getCID();
							var timer = setTimeout(function() {
								var styleIndex = that.styleIndex;
								uni.redirectTo({
									url: '/pages/home/'+styleIndex
								})
								clearTimeout('timer')
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
			qrcodeLogin(){
				uni.navigateTo({
				    url: '/pages/user/qrcodeLogin'
				});
			},
			toAgreement(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/agreement'
				});
			},
			toPrivacyPolicy(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/privacyPolicy'
				});
			}
			
		}
	}
	
</script>

<style>
</style>
