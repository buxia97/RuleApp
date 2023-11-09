<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					账户
				</view>
				<!--  #ifdef H5 -->
				<view class="action header-btn">
					<text class="cuIcon-notice" @tap="toLink('/pages/user/inbox')">
						<text class="noticeSum bg-red" v-if="noticeSum>0">{{noticeSum}}</text>
					</text>
					<text class="cuIcon-clothes" @tap="goStyle"></text>
					<!-- <text class="cuIcon-search" @tap="toSearch"></text> -->
				</view>
				<!--  #endif -->
				<!--  #ifdef APP-PLUS -->
				<view class="action header-btn">
					<text class="cuIcon-notice" @tap="toLink('/pages/user/inbox')">
						<text class="noticeSum bg-red" v-if="noticeSum>0">{{noticeSum}}</text>
					</text>
					<text class="cuIcon-scan" @tap="toScan"></text>
					<text class="cuIcon-clothes" @tap="goStyle"></text>
					
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box" style="padding-bottom: 20upx;">
			<view class="cu-list menu-avatar">
				<view class="cu-item userinfo" v-if="userInfo==null">
					<view class="cu-avatar round lg">
						<i class="cuIcon-myfill"></i>
					</view>
					<view class="content" @tap="toLogin">
						<view class="text-black">点击登录</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								
							</view>
						</view>
					</view>
				</view>
				<view class="cu-item userinfo" v-else  @tap="toUserContents()">
					<view class="cu-avatar round lg" :style="userInfo.style">
						<view class="curLv" :style="lvStyle">{{getLv(userInfo.experience)}}</view>
					</view>
					<view class="content">
						<view class="text-black">
							
							<block v-if="userInfo.isvip==1">
								<block v-if="userInfo.vip==1">
									<text class="text-red">
										{{name}}
									</text>
								</block>
								<block v-else>
									<text class="text-yellow">
										{{name}}
									</text>
								</block>
							</block>
							<block v-else>
								{{name}}
							</block>
							
							<text class="userlv" :style="userlvStyle">{{getUserLv(userInfo.lv)}}</text>
							<text class="userlv customize" v-if="userInfo.customize&&userInfo.customize!=''">{{userInfo.customize}}</text>

						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								UID : {{userInfo.uid}}
							</view>
						</view>
						
					</view>
					
				</view>
				
				<block v-if="userInfo!=null">
					<text class="clock-btn" @tap="toClock" v-if="isClock==0">签到</text>
					<text class="clock-btn istap" v-else>已签到</text>
					<!--  #ifdef H5 || APP-PLUS -->
					<view class="user-data grid col-4" v-if="userInfo!=null">
						<view class="user-data-box" @tap="toLink('/pages/user/userpost')">
							<view class="user-data-value">{{userData.contentsNum}}</view>
							<view class="user-data-title">文章</view>
						</view>
						<view class="user-data-box" @tap="toLink('/pages/user/usercomments')">
							<view class="user-data-value">{{userData.commentsNum}}</view>
							<view class="user-data-title">评论</view>
						</view>
						<view class="user-data-box"  @tap="toLink('/pages/user/fanList?uid='+uid)">
							<view class="user-data-value">{{formatNumber(userData.fanNum)}}</view>
							<view class="user-data-title">粉丝</view>
						</view>
						
						<view class="user-data-box" @tap="toLink('/pages/user/assets')">
							<view class="user-data-value">{{formatNumber(userData.assets)}}</view>
							<view class="user-data-title">{{currencyName}}</view>
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
							<view class="index-sort-i" style="background-color: #ff5c5f;">
								<text class="cuIcon-edit"></text>
							</view>
							<view class="index-sort-text">
								个人信息
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/user/followList?uid='+uid)">
							<view class="index-sort-i" style="background-color: #00aa7f;">
								<text class="cuIcon-attentionfill"></text>
							</view>
							<view class="index-sort-text">
								我的关注
							</view>
						</view>
					</waves>
				</view>
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
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('/pages/user/assets')">
							<view class="index-sort-i" style="background-color: #ff34b8;">
								<text class="cuIcon-choicenessfill"></text>
							</view>
							<view class="index-sort-text">
								财务中心
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="user-title">
				更多功能
			</view>
			<view class="index-sort grid col-4">
				
				<view class="index-sort-box" @tap="toLink('/pages/user/userpost')">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i" style="background-color:#1e86e7;">
								<text class="cuIcon-writefill"></text>
							</view>
							<view class="index-sort-text">
								我的文章
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" @tap="toLink('/pages/space/mySpace')">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i" style="background-color: #0aa347;">
								<text class="cuIcon-creativefill"></text>
							</view>
							<view class="index-sort-text">
								我的动态
							</view>
						</view>
					</waves>
				</view>
				
				<view class="index-sort-box" @tap="toLink('/pages/user/myshop')">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i" style="background-color: #ff4398;">
								<text class="cuIcon-shopfill"></text>
							</view>
							<view class="index-sort-text">
								我的商品
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box"  @tap="toPage('帮助与反馈',feedback)">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i" style="background-color: #be5f00;">
								<text class="cuIcon-post"></text>
							</view>
							<view class="index-sort-text">
								意见反馈
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" @tap="toLink('/pages/user/order')">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i" style="background-color: #5d72f8;">
								<text class="cuIcon-baby"></text>
							</view>
							<view class="index-sort-text">
								订单记录
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box" @tap="toLink('/pages/user/inbox')">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i" style="background-color: #9728aa;">
								<text class="cuIcon-noticefill"></text>
							</view>
							<view class="index-sort-text">
								消息通知
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<!--  #ifdef H5 || APP-PLUS -->
		<block v-if="group=='administrator'||group=='editor'">
			<view class="data-box">
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
		</block>

		
		<!--  #endif -->
		<view class="data-box">
			
			<view class="cu-list menu">

				<view class="cu-item" @tap="toSetUp">
					<view class="content">
						<text class="cuIcon-settingsfill text-blue"></text>
						<text>账户和设置</text>
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
				<view class="cu-item" @tap="toAbout()">
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
		<view class="cu-modal" :class="modalName=='changeStyle'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">切换到圈子风格</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<block v-if="curFullStyle=='index'">
						通过此操作可以进入圈子内容为主的首页模式，此页面仅供预览，重启APP后将还原。
					</block>
					<block v-else>
						通过此入口可重新回到文章为主的首页模式，也可以通过重启APP回归。
					</block>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn bg-purple" @tap="changeStyle">确认切换</button>
		
					</view>
				</view>
			</view>
		</view>
		<view style="width: 100%; height: 100upx;"></view>
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		props: {
			curPage: {
			  type: Number,
			  default: 0
			}
		},
		name: "user",
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				userInfo:null,
				name:"",
				uid:0,
				token:"",
				userData:{},
				isClock:0,
				group:"",
				avatar:"",
				
				feedback:this.$API.GetFeedback(),
				userlvStyle:"",
				lvStyle:"",
				
				aboutme:this.$API.GetAboutme(),
				
				isLoginShow:false,
				
				noticeSum:0,
				
				isModerator:false,
				
				currencyName:"",
				
				modalName:null,
				
				curFullStyle:""
				
			}
		},
		mounted() {
			var that = this;
			uni.$on('onShow', function(data) {
				if(Number(data)!=Number(that.curPage)){
					return false;
				}
				console.log("触发Tab-"+data+"||页面下标"+that.curPage);
				that.currencyName = that.$API.getCurrencyName();
				if(localStorage.getItem('userinfo')){
					that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
					that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
					that.avatar = that.userInfo.avatar;
					that.uid = that.userInfo.uid;
					that.group = that.userInfo.group;
					if(that.userInfo.screenName){
						that.name = that.userInfo.screenName;
					}else{
						that.name = that.userInfo.name;
					}
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
				if(localStorage.getItem('curFullStyle')){
					that.curFullStyle = localStorage.getItem('curFullStyle');
				}
				
			});
			
			uni.$on('onReachBottom', function(data) {
				if(Number(data)!=Number(that.curPage)){
					return false;
				}
				console.log("触发触底刷新");
				
			});
			
			uni.$on('onPullDownRefresh', function(data) {
				if(Number(data)!=Number(that.curPage)){
					return false;
				}
				console.log("触发下拉刷新");
				that.getUserData();
				that.userStatus();
				that.unreadNum();
			});
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
		},
		beforeDestroy(){
			uni.$off('onReachBottom')
			uni.$off('onShow')
			uni.$off('onPullDownRefresh')
		},
		methods:{
			toLogin(){
				var that = this;
				uni.navigateTo({
					url: '/pages/user/login'
				});
				
			},
			hideModal(e) {
				this.modalName = null
			},
			getUserLv(i){
				var that = this;
				var rankList = that.$API.GetRankList();
				var rankStyle = that.$API.GetRankStyle();
				that.userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return rankList[i];
			},
			getLv(i){
				var that = this;
				var lv  = that.$API.getLever(i);
				var leverList = that.$API.GetLeverList();
				var rankStyle = that.$API.GetRankStyle();
				that.lvStyle ="color:#fff;background-color: "+rankStyle[lv];
				return leverList[lv];
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
				that.$Net.request({
					
					url: that.$API.userStatus(),
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
								if(userInfo.screenName){
									that.name = userInfo.screenName;
								}else{
									that.name = userInfo.name;
								}
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
								if(res.data.data.experience){
									userInfo.experience = res.data.data.experience;
								}
								localStorage.setItem('userinfo',JSON.stringify(userInfo));
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
				var url = that.$API.GetGroupUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			getUserData() {
				var that = this;
				that.$Net.request({
					
					url: that.$API.getUserData(),
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
			formatNumber(num) {
				if(num==0||!num){
					return 0;
				}
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
			},
			toClock(){
				
				var that = this;
				var data = {
					"type":"clock",
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.addLog(),
					data:{
						"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
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
						
						if(res.data.code==1){
							that.isClock=1;
							var clockData = res.data.clockData;
							uni.showToast({
								title: "签到成功！获得"+clockData.award+that.$API.getCurrencyName()+"，"+clockData.addExp+"经验",
								icon: 'none'
							})
							that.isClock == 1;
							
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
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
			toRebate(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/rebate'
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
							var linkRule = that.$API.GetLinkRule();
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
					if(text.type=="Scan"){
						if(that.token==""){
							uni.showToast({
								title: "请先登录",
								icon: 'none'
							})
							return false;
						}
						uni.navigateTo({
						    url: '/pages/user/scan?text='+text.data
						});
						return false;
					}else if(text.type=="Invite"){
						uni.navigateTo({
						    url: '/pages/user/register?inviteCode='+text.code
						});
						return false;
					}else{
						uni.showToast({
							title: "无法解析的内容！",
							icon: 'none'
						})
						return false;
					}
				}else{
					uni.showToast({
						title: "无法解析的内容！",
						icon: 'none'
					})
					return false;
				}
				
				
			},
			toPage(title,cid){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			goStyle(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/clothes'
				});
			},
			toAbout(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/home/about'
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
				if(localStorage.getItem('noticeSum')){
					that.noticeSum = Number(localStorage.getItem('noticeSum'));
				}
			},
			goFanList(uid){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/fanList?uid='+uid
				});
			},
			toUserContents(){
				var that = this;
				var name = that.name;
				var title = that.name+"的信息";
				var id= that.uid;
				var type="user";
				uni.navigateTo({
				    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(that.avatar)
				});
			},
		},
		// #ifdef APP-PLUS
		components: {
			waves
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
