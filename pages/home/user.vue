<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toGroup">
					<text class="toGroup">社交</text>
				</view>
				<!--  #endif -->
				<!--  #ifdef MP -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<!--  #endif -->
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					账户
				</view>
				<!--  #ifdef H5 -->
				<view class="action header-btn">
					<text class="cuIcon-mail" @tap="toLink('/pages/user/inbox')">
						<text class="noticeSum bg-red" v-if="noticeSum>0">{{noticeSum}}</text>
					</text>
					<text class="cuIcon-search" @tap="toSearch"></text>
				</view>
				<!--  #endif -->
				<!--  #ifdef APP-PLUS -->
				<view class="action header-btn">
					<text class="cuIcon-mail" @tap="toLink('/pages/user/inbox')">
						<text class="noticeSum bg-red" v-if="noticeSum>0">{{noticeSum}}</text>
					</text>
					<text class="cuIcon-scan" @tap="toScan"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box" style="padding-bottom: 20upx;">
			<view class="cu-list menu-avatar">
				<view class="cu-item userinfo" v-if="userInfo==null">
					<view class="cu-avatar round lg"></view>
					<view class="content" @tap="toLogin">
						<view class="text-grey">点击登录</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item userinfo" v-else  @tap="toLink('/pages/user/useredit')">
					<view class="cu-avatar round lg" :style="userInfo.style"></view>
					<view class="content">
						<view class="text-grey">
							<block v-if="userInfo.screenName">
								{{userInfo.screenName}}
							</block>
							<block v-else>
								{{userInfo.name}}
							</block>
							<text class="userlv" :style="userlvStyle">{{getUserLv(userInfo.lv)}}</text>
							<text class="userlv customize" v-if="userInfo.customize&&userInfo.customize!=''">{{userInfo.customize}}</text>
							<!--  #ifdef H5 || APP-PLUS -->
							<block v-if="userInfo.isvip==1">
								<block v-if="userInfo.vip==1">
									<text class="isVIP bg-gradual-red">VIP</text>
								</block>
								<block v-else>
									<text class="isVIP bg-yellow">VIP</text>
								</block>
							</block>
							<block v-else>
								<text class="userlv bg-gray isVIP">VIP</text>
							</block>
							<!--  #endif -->
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								{{userInfo.mail || "未设置邮箱"}}
							</view>
						</view>
						
					</view>
					
				</view>
				
				<block v-if="userInfo!=null">
					<text class="clock-btn" @tap="toClock" v-if="isClock==0">签到</text>
					<text class="clock-btn istap" v-else>已签到</text>
					<!--  #ifdef H5 || APP-PLUS -->
					<view class="user-data grid col-3" v-if="userInfo!=null">
						<view class="user-data-box" @tap="toLink('/pages/user/userpost')">
							<view class="user-data-value">{{userData.contentsNum}}</view>
							<view class="user-data-title">文章</view>
						</view>
						<view class="user-data-box" @tap="toLink('/pages/user/usercomments')">
							<view class="user-data-value">{{userData.commentsNum}}</view>
							<view class="user-data-title">评论</view>
						</view>
						<view class="user-data-box" @tap="toLink('/pages/user/assets')">
							<view class="user-data-value">{{userData.assets}}</view>
							<view class="user-data-title">积分</view>
						</view>
					</view>
					<!--  #endif -->
				</block>
				
			</view>
			
		</view>
		<view class="data-box">
			<view class="index-sort grid col-4">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/user/useredit')">
							<view class="index-sort-i" style="background-color: #006493;">
								<text class="cuIcon-edit"></text>
							</view>
							<view class="index-sort-text">
								个人信息
							</view>
						</view>
					</waves>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/user/inbox')">
							<view class="index-sort-i" style="background-color: #ff7a06;">
								<text class="cuIcon-message"></text>
							</view>
							<view class="index-sort-text">
								我的消息
							</view>
						</view>
					</waves>
				</view>
				<!--  #endif -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/user/usermark')">
							<view class="index-sort-i">
								<text class="cuIcon-favorfill"></text>
							</view>
							<view class="index-sort-text">
								收藏
							</view>
						</view>
					</waves>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/user/userpost')">
							<view class="index-sort-i">
								<text class="cuIcon-writefill"></text>
							</view>
							<view class="index-sort-text">
								我的投稿
							</view>
						</view>
					</waves>
				</view>
				
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/user/myshop')">
							<view class="index-sort-i" style="background-color: #0aa347;">
								<text class="cuIcon-present"></text>
							</view>
							<view class="index-sort-text">
								我的商品
							</view>
						</view>
					</waves>
				</view>
				<!--  #endif -->
				<view class="index-sort-box"  @tap="toPage('帮助与反馈',feedback)">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i">
								<text class="cuIcon-post"></text>
							</view>
							<view class="index-sort-text">
								意见反馈
							</view>
						</view>
					</waves>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="index-sort-box" @tap="toLink('/pages/user/order')">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i" style="background-color: #f8c909;">
								<text class="cuIcon-baby"></text>
							</view>
							<view class="index-sort-text">
								订单记录
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/user/assets')">
							<view class="index-sort-i">
								<text class="cuIcon-choicenessfill"></text>
							</view>
							<view class="index-sort-text">
								财务中心
							</view>
						</view>
					</waves>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<!--  #ifdef H5 || APP-PLUS -->
		<view class="data-box" v-if="group=='administrator'||group=='editor'">
			<view class="cu-list menu" @tap="toManage">
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-colorlens text-red"></text>
						<text>管理中心 </text>
					</view>
					<view class="action">
						<text class="text-sm text-gray">仅管理员&编辑显示</text>
						<text class="cuIcon-right"></text>
					</view>
				</view>
			</view>
		</view>
		<!--  #endif -->
		<view class="data-box">
			
			<view class="cu-list menu">
				<view class="cu-item" @tap="toSetUp">
					<view class="content">
						<text class="cuIcon-settingsfill text-blue"></text>
						<text>系统设置</text>
					</view>
					<view class="action">
						<text class="cuIcon-right"></text>
					</view>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="cu-item" @tap="toMedia">
					<view class="content">
						<text class="cuIcon-newfill text-blue"></text>
						<text>社交媒体</text>
					</view>
					<view class="action">
						<text class="cuIcon-right"></text>
					</view>
				</view>
				<!--  #endif -->
				<view class="cu-item" @tap="toPage('关于平台',aboutme)">
					<view class="content">
						<text class="cuIcon-servicefill text-blue"></text>
						<text>关于我们</text>
					</view>
					<view class="action">
						<text class="cuIcon-right"></text>
					</view>
				</view>
				
			</view>
		</view>
		<view class="cu-modal userLoginstatus" :class="isLoginShow?'show':''">
			<view class="cu-dialog">

				<view class="padding-sm">
					<view class="padding flex flex-direction">
						<view class="userLoginstatus-i bg-red">
							<text class="cuIcon-close"></text>
						</view>
						<view class="text-bold">登录状态已失效</view>
						
						<button class="cu-btn bg-blue margin-top" @tap="isLoginShow=false">确定</button>
					</view>
				</view>
			
			</view>
		</view>
		<!--  #ifdef APP-PLUS -->
		<view style="height: 100upx;"></view>
		<Tabbar :current="3"></Tabbar>
		<!--  #endif -->
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
	// #ifdef APP-PLUS
	import Tabbar from '@/pages/components/tabBar.vue'
	// #endif
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
				userData:{},
				isClock:0,
				group:"",
				
				feedback:API.GetFeedback(),
				userlvStyle:"",
				
				aboutme:API.GetAboutme(),
				
				isLoginShow:false,
				
				noticeSum:0,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			uni.hideTabBar({
				animation: false
			})
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
				that.group = that.userInfo.group;
			}else{
				that.userInfo =null;
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}else{
				that.token = "";
			}
			that.getUserData();
			that.userStatus();
			that.unreadNum();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
		},
		methods:{
			toLogin(){
				var that = this;
				
				// #ifdef MP-WEIXIN
				//that.toWexinlogin();
				//return false;
				// #endif
				// #ifdef MP-QQ
				// that.toQQlogin();
				// return false;
				// #endif
				uni.navigateTo({
					url: '/pages/user/login'
				});
				
			},
			toWexinlogin(){
				//微信登陆
				//后端直接根据unionId来判断用户的唯一性。
				uni.showLoading({
					title: "加载中"
				});
				uni.login({
					provider: 'weixin',
					success: res => {
						uni.getUserInfo({
							provider: 'weixin',
							success: function(infoRes) {
								console.log(JSON.stringify(infoRes));
								let formdata = {
									nickName: infoRes.userInfo.nickName,
									//gender: infoRes.userInfo.gender,
									appLoginType:"weixin",
				                    headImgUrl: infoRes.userInfo.avatarUrl,
									openId: infoRes.userInfo.openId,
									accessToken: infoRes.userInfo.unionId
								};
								Net.request({
									
									url: API.userApi(),
									data:{"params":JSON.stringify(API.removeObjectEmptyKey(formdata))},
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
											//保存用户信息
											localStorage.setItem('userinfo',JSON.stringify(res.data.data));
											localStorage.setItem('token',res.data.data.token);
											var timer = setTimeout(function() {
												uni.reLaunch({
													url: '/pages/home/home'
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
			toQQlogin(){
				//QQ登陆
				//后端直接根据access_token来判断用户的唯一性。
				uni.showLoading({
					title: "加载中"
				});
				uni.login({
					provider: 'qq',
					success: resp => {
						var access_token = resp.authResult.access_token;
						uni.getUserInfo({
							provider: 'qq',
							success: function(infoRes) {
								
								var formdata = {
									nickName: infoRes.userInfo.nickname,
									//gender: infoRes.userInfo.gender == '男' ? 1 : 2,
									appLoginType:"qq",
				                    headImgUrl: infoRes.userInfo.figureurl_qq_2,
									openId: infoRes.userInfo.openId,
									accessToken: access_token
								};
								
								Net.request({
									
									url: API.userApi(),
									data:{"params":JSON.stringify(API.removeObjectEmptyKey(formdata))},
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
											//保存用户信息
											localStorage.setItem('userinfo',JSON.stringify(res.data.data));
											localStorage.setItem('token',res.data.data.token);
											var timer = setTimeout(function() {
												uni.reLaunch({
													url: '/pages/home/home'
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
			getUserLv(i){
				var that = this;
				var rankList = API.GetRankList();
				var rankStyle = API.GetRankStyle();
				that.userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return rankList[i];
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
			toPage(title,cid){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			userStatus() {
				var that = this;
				Net.request({
					
					url: API.userStatus(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==0){
							
							if(that.userInfo != null){
								that.isLoginShow = true;
							}
							localStorage.removeItem('userinfo');
							localStorage.removeItem('token');
							
							that.userInfo = null;
						}else{
							
							if(localStorage.getItem('userinfo')){
								
								var userInfo = JSON.parse(localStorage.getItem('userinfo'));
								if(res.data.data.customize){
									userInfo.customize = res.data.data.customize;
								}
								if(res.data.data.lv){
									userInfo.lv = res.data.data.lv;
								}
								if(res.data.data.isvip){
									userInfo.isvip = res.data.data.isvip;
								}
								if(res.data.data.vip){
									userInfo.vip = res.data.data.vip;
								}
								// if(res.data.data.avatar){
								// 	that.userInfo = res.data.data.avatar;
								// }
								
							}
							
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
			toGroup(){
				var url = API.GetGroupUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			getUserData() {
				var that = this;
				Net.request({
					
					url: API.getUserData(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res));
						if(res.data.code==1){
							that.userData = res.data.data;
							that.isClock = res.data.data.isClock;
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
			toClock(){
				
				var that = this;
				var data = {
					"type":"clock",
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.addLog(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
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
						}, 500);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							that.isClock=1;
							that.getUserData();
						}
						
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			
			toSearch(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/search'
				});
			},
			toMedia(){
				uni.navigateTo({
				    url: '/pages/user/media'
				});
			},
			toSetUp(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/setup'
				});
			},
			toManage(){
				uni.navigateTo({
				    url: '/pages/user/manage'
				});
			},
			toScan(){
				var that = this;
				uni.scanCode({
					onlyFromCamera: false,
					scanType: ['barCode', 'qrCode'],
					success: function(res) {
						var text = res.result;
						var strUrl= "^((https|http|ftp|rtsp|mms)?://)" +
					   "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?"+
					   "(([0-9]{1,3}\.){3}[0-9]{1,3}" +
					   "|"+
					   "([0-9a-z_!~*'()-]+\.)*" +
					   "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." +
					   "[a-z]{2,6})" +
					   "(:[0-9]{1,4})?"+
					   "((/?)|"+
					   "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
						var urlDemo = new RegExp(strUrl); 
						if(urlDemo.test(text)) {
							var linkRule = API.GetLinkRule();
							var linkRuleArr = linkRule.split("{cid}");
							if(text.indexOf(linkRuleArr[0])!=-1){
								//是本站链接
								var cid = text;
								for(var i in linkRuleArr){
									cid = cid.replace(linkRuleArr[i],"");
								}
								uni.navigateTo({
									url: '/pages/contents/info?cid='+cid
								});
							}else{
								// #ifdef MP
								uni.setClipboardData({
								  data: href,
								  success: () =>
									uni.showToast({
									  title: '链接已复制'
									})
								})
								// #endif
								// #ifdef APP-PLUS
								plus.runtime.openWeb(href)
								// #endif
							}
						}else{
							that.scanLogin(text);
						}
					}
				});
			},
			scanLogin(text){
				var that = this;
				if(that.token==""){
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					return false;
				}
				if(that.isJSON(text)){
					text = JSON.parse(text);
				}else{
					uni.showToast({
						title: "无法解析的内容！",
						icon: 'none'
					})
					return false;
				}
				if(text.type){
					if(text.type!="Scan"){
						uni.showToast({
							title: "无法解析的内容！",
							icon: 'none'
						})
						return false;
					}
				}
				uni.navigateTo({
				    url: '/pages/user/scan?text='+text.data
				});
				
			},
			toPage(title,cid){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			isJSON(str) {
			
			    if (typeof str == 'string') {
			        try {
			            var obj=JSON.parse(str);
			            if(typeof obj == 'object' && obj ){
			                return true;
			            }else{
			                return false;
			            }
			        } catch(e) {
			            console.log('error：'+str+'!!!'+e);
			            return false;
			        }
			    }
			},
			unreadNum() {
				var that = this;
				Net.request({
					
					url: API.unreadNum(),
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
							that.noticeSum = res.data.data;
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
		},
		// #ifdef APP-PLUS
		components: {
			waves,
			Tabbar
		},
		// #endif
		
		// #ifdef H5 || MP
		components: {
			waves
		},
		// #endif
	}
</script>

<style>
</style>
