<template>
	<view :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]" >
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<!--  #ifdef H5 || APP-PLUS -->
				<!-- <view class="action" @tap="toGroup">
					<text class="toGroup">社交</text>
				</view> -->
				<!--  #endif -->
				<!--  #ifdef MP -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					首页
				</view>
				<!--  #endif -->
				
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="cu-avatar round" @tap="goUserInfo()" :style="userInfo.style" v-if="token!=''"></view>
				<view class="cu-avatar round" @tap="goUserInfo()" v-else>
					<text class="home-noLogin">登录</text>
				</view>
				<view class="search-form radius">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="搜索动态、文章、用户" confirm-type="search" disabled="disabled"  @tap="toSearch"></input>
				</view>
				<view class="action header-btn">
					
					<text class="cuIcon-notice" @tap="toLink('/pages/user/inbox')">
						<text class="noticeSum bg-red" v-if="noticeSum>0">{{noticeSum}}</text>
					</text>
					<!-- <text class="cuIcon-search" @tap="toSearch"></text> -->
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view class="home-nav metaList" :style="'top:'+CustomBar+'px'">
			<block v-if="metaList.length>0">
				<scroll-view scroll-x class="bg-white nav " scroll-with-animation :scroll-left="scrollLeft" >
					<view class="cu-item" :class="item.mid==TabCur?'text-blue cur':''" v-for="(item,index) in metaList" :key="index" @tap="tabSelect" :data-id="item.mid" v-if="item.parent==0">
						{{item.name}}
					</view>
				</scroll-view>
			</block>
			
			<view class="goCategory" @tap="goCategory">
				<text class="cuIcon-more"></text>
			</view>
		</view>
		<view :style="[{padding:NavBar+45 + 'px 10px 0px 10px'}]"></view>
		<block v-if="TabCur==0">
			<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index"  @tap="toInfo(item)">
					<view class="swiper-box">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
						<view class="swiper-text">
							<view class="swiper-title">
								{{item.title}}
							</view>
							<view class="swiper-intro">
								{{item.intro}}
							</view>
						</view>
					</view>
					
				</swiper-item>
			</swiper>
			<view class="index-sort grid col-4">
				
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap='toTopContents("排行榜","commentsNum")'>
							<view class="index-sort-i" style="background: rgba(255, 0, 127, 0.2);">
								<text class="cuIcon-crownfill" style="color:  #ff007f;"></text>
							</view>
							<view class="index-sort-text">
								排行榜
							</view>
						</view>
					</waves>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toComments">
							<view class="index-sort-i" style="background: rgba(3, 154, 84, 0.2);">
								<text class="cuIcon-commentfill" style="color:  #039a54;"></text>
							</view>
							<view class="index-sort-text">
								评论区
							</view>
						</view>
					</waves>
				</view>
				<!--  #endif -->
				<!--  #ifdef MP -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toImagetoday">
							<view class="index-sort-i" style="background: rgba(3, 154, 84, 0.2);">
								<text class="cuIcon-picfill" style="color:  #039a54;"></text>
							</view>
							<view class="index-sort-text">
								图库
							</view>
						</view>
					</waves>
				</view>
				<!--  #endif -->
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toShop">
							<view class="index-sort-i" style="background: rgba(255,51,51, 0.2);">
								<text class="cuIcon-shopfill" style="color:  #ff3333;"></text>
							</view>
							<view class="index-sort-text">
								积分商城
							</view>
						</view>
					</waves>
				</view>
				<!--  #endif -->
				<!--  #ifdef MP -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toRand">
							<view class="index-sort-i" style="background: rgba(255,51,51, 0.2);">
								<text class="cuIcon-refresh" style="color:  #ff3333;"></text>
							</view>
							<view class="index-sort-text">
								随机阅读
							</view>
						</view>
					</waves>
				</view>
				<!--  #endif -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toUsers">
							<view class="index-sort-i" style="background: rgba(170,85,255, 0.2);">
								<text class="cuIcon-peoplefill" style="color:  #aa55ff;"></text>
							</view>
							<view class="index-sort-text">
								用户列表
							</view>
						</view>
					</waves>
				</view>
			</view>
			
			<view class="data-box">
				<view class="cu-bar bg-white">
					<view class="action data-box-title">
						<text class="cuIcon-titles text-rule"></text> 热门专题
					</view>
					<view class="action more" @tap="toMetas">
						<text>查看全部</text><text class="cuIcon-right"></text>
					</view>
				</view>
				<view class="topic grid col-2">
					<view class="topic-box" v-for="(item,index) in Topic" @tap="toCategoryContents(item.name,item.mid)" :key="index">
						<view class="topic-main">
							<image :src="item.imgurl" mode="aspectFill"></image>
							<view class="topic-text" v-if="item.type=='tag'">#{{replaceSpecialChar(item.name)}}#</view>
							<view class="topic-text" v-else>{{replaceSpecialChar(item.name)}}</view>
						</view>
					</view>
				</view>
			</view>
		</block>
		<view class="ads-banner" v-if="bannerAdsInfo!=null">
			<image :src="bannerAdsInfo.img" mode="widthFix" @tap="goAds(bannerAdsInfo)"></image>
		</view>
		<!--底下改成滑动形式-->
		<view class="all-box" :style="TabCur!=0?'margin-top:0;':''">
			<view class="cu-bar bg-white" v-if="TabCur==0">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text>最新文章
				</view>
				<view class="action more" @tap='toTopContents("排行榜","commentsNum")'>
					<text>阅读更多</text><text class="cuIcon-right"></text>
				</view>
			</view>
			
			<block v-for="(item,index) in topContents" :key="'top'+index" v-if="TabCur==0&&dataLoad">
				<articleItem :item="item" :isTop="true"></articleItem>
			</block>
			<view class="dataLoad" v-if="!dataLoad">
				<image src="../../static/loading.gif"></image>
			</view>
			<block v-for="(item,index) in contentsList" :key="index" v-if="dataLoad">
				<articleItem :item="item"></articleItem>
			</block>
			
			
			<view class="load-more" @tap="loadMore" v-if="dataLoad">
				<text>{{moreText}}</text>
			</view>
		</view>
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<!--加载遮罩结束-->
		<!--登录遮罩-->
		<view class="full-noLogin" v-if="noLogin">
			<view class="full-noLogin-main">
				<view class="full-noLogin-text">
					您需要登录后才可以查看内容哦！
				</view>
				<view class="full-noLogin-btn">
					<view class="cu-btn bg-blue" @tap="goLogin()">
						立即登录
					</view>
				</view>
			</view>
		</view>
		<!--登录遮罩结束-->
		<!--弹窗公告-->
		<view class="announcement" v-if="isAnnouncement&&Update!=1">
			<view class="announcement-bg" @tap="isAnnouncement=false">
				
			</view>
			<view class="announcement-main">
				<view class="announcement-title">
					网站公告
					<text class="cuIcon-close text-red" @tap="isAnnouncement=false"></text>
				</view>
				<view class="announcement-concent">
					<rich-text :nodes="announcement"></rich-text>
				</view>
				<view class="announcement-btn">
					<button class="cu-btn bg-gradual-blue lg" @tap="readAnnouncement">我知道了</button>
				</view>
			</view>
		</view>
		<!--update-->
		
		<!--  #ifdef APP-PLUS -->
		<view class="update" v-if="Update==1">
			<view class="update-bg">
				
			</view>
			<view class="update-box">
				<view class="update-main">
					<image src="../../static/app-plus/ic_ar.png"></image>
					<view class="update-title">发现新版本：{{versionTitle}}</view>
					<view class="update-intro"><rich-text :nodes="versionIntro"></rich-text></view>
					<view class="update-btn grid col-2">
						<view class="update-btn-box">
							<view class="update-btn-main bg-blue"  @tap="isUpdate(true)">
								确定
							</view>
						</view>
						<view class="update-btn-box">
							<view class="update-btn-main bg-gray" @tap="closeUpdate()">
								取消
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--  #endif -->
		<!--#ifdef APP-PLUS-->
		<view class="Startupmap" v-if="!isStart">
			<view class="Startupmap-close" @tap="toStart">
				<text>跳过</text>
			</view>
			<view class="Startupmap-pic" @tap="toStartUrl">
				<image :src="startImg.localUrl"></image>
				<!-- <image src="_doc/uniapp_save/16631684216820.png"></image> -->
			</view>
		</view>
		<!--#endif-->
		<!--update结束-->
		<!--  #ifdef APP-PLUS -->
		<view style="height: 100upx;"></view>
		<Tabbar :current="0"></Tabbar>
		<!--  #endif -->
		
		
	</view>
</template>

<script>
	
	import waves from '@/components/xxley-waves/waves.vue';
	// #ifdef APP-PLUS
	import Tabbar from '@/pages/components/tabBar.vue'
	// #endif
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				cardCur: 0,
				swiperList: [],
				
				contentsList:[],
				topContents:[],
				metaList:[],
				Topic:[],
				dotStyle: false,
				towerStart: 0,
				direction: '100000',
				
				TabCur: 0,
				scrollLeft: 0,
				
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
				
				token:"",
				
				isLoading:0,
				
				
				versionCode:0,
				wgtVer:'',
				
				Update:0,
				versionUrl:"",
				versionTitle:"",
				versionIntro:"",
				
				
				
				startImg:{
					localUrl:""
				},
				isStart:false,
				dataLoad:false,
				
				pushAds:[],
				pushAdsInfo:null,
				bannerAds:[],
				bannerAdsInfo:null,
				announcement:"",
				isAnnouncement:false,
				
				noticeSum:0,
				
				userInfo:null,
				token:"",
				
				noLogin:false,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.loading();
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		// #ifdef MP
		onShareAppMessage(res) {
			var that = this;
			if (res.from === 'button') {
				// 来自页面内分享按钮
			}
			if (res.from === 'menu') {
				// 来自页面内分享按钮
			}
			var title = that.$API.GetAppName();
			var data = {
				title: title,
			}
			
			return data;
		
		},
		onShareTimeline() {
			var that = this;
			var title = that.$API.GetAppName();
			var data = {
				title: title,
			}
			
			return data;
		},
		// #endif
		onShow(){
			var that = this;
			that.getSwiper();
			that.getTopPic();
			if(localStorage.getItem('appStyle')){
				// that.appStyle = localStorage.getItem('appStyle');
				// that.$store.state.AppStyle = that.appStyle;
				that.$store.commit('setStyle', that.appStyle);
				
			}
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
			// #ifdef APP-PLUS || H5
			
			that.getAdsCache();
			that.getAds();
			// #endif
			// #ifdef APP-PLUS
			 uni.hideTabBar({
				animation: false
			})
			//如果启动图还没有缓存过，第一次进来就不显示启动图了
			if(!localStorage.getItem('appStart')){
				that.isStart = true;
			}
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			//获取缓存
			that.allCache();
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.userStatus();
			that.unreadNum();
			that.getCID();
			
			
			
			// #ifdef APP-PLUS
			//外部启动APP处理
			var args= plus.runtime.arguments;
			plus.runtime.arguments=null;
			plus.runtime.arguments="";
			if(args){  
				
				//跳转到文章
				if(args.indexOf("?info=") != -1){
					var arr = args.split("?info=");
					uni.navigateTo({
					    url: '/pages/contents/info?cid='+arr[1]
					});
				}
				//判断是否是扫码登录
				if(args.indexOf("?scan=") != -1){
					var arr = args.split("?scan=");
					that.scanLogin(arr[1]);
				}
			}
			// #endif
			
			
		},
		onLoad() {
			var that = this;
			
			that.loading();
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.getAnnouncement();
			// #ifdef APP-PLUS
			that.isUpdate(false);
			// #endif
			
			
			setTimeout(function() {
				that.isStart=true;
			}, 5000); 
			// #ifdef APP-PLUS
			 that.appStartImg();
			 //#endif
			 
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			if(that.isLoad==0){
				that.loadMore();
			}
		},
		methods: {
			//获取客户端id用于消息通知
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
					method: "post",
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
			//获取并缓存广告
			getAds(){
				var that = this;
				// #ifdef APP-PLUS || H5
				//获取推流广告
				that.getAdsList(0);
				//获取横幅广告
				that.getAdsList(1);
				//#endif
				// #ifdef APP-PLUS
				//获取启动图广告
				that.getAdsList(2);
				//#endif
			},
			getAdsCache(){
				var that = this;
				if(localStorage.getItem('pushAds')){
					that.pushAds = JSON.parse(localStorage.getItem('pushAds'));
				}
				
				if(localStorage.getItem('bannerAds')){
					that.bannerAds = JSON.parse(localStorage.getItem('bannerAds'));
					
					var num = that.bannerAds.length;
					if(num>0){
						var rand = Math.floor(Math.random()*num);
						that.bannerAdsInfo = that.bannerAds[rand];
					}
				}
				
			},
			getAdsList(type){
				var that = this;
				var data = {
					"type":type,
				}
				that.$Net.request({
					url: that.$API.adsList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":100,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(type==0){
								that.pushAds = res.data.data;
								localStorage.setItem('pushAds',JSON.stringify(that.pushAds));
							}
							if(type==1){
								that.bannerAds = res.data.data;
								
								localStorage.setItem('bannerAds',JSON.stringify(that.bannerAds));
								
							}
							if(type==2){
								that.startAds = res.data.data;
								localStorage.setItem('startAds',JSON.stringify(that.startAds));
							}
						}
						
						
					},
					fail: function(res) {
						
					}
				})
			},
			goAds(data){
				var that = this;
				var url = data.url;
				var type = data.urltype;
				// #ifdef APP-PLUS
				if(type==1){
					plus.runtime.openURL(url);
				}
				if(type==0){
					plus.runtime.openWeb(url);
				}
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			//全部请求
			loading(){
				var that = this;
				that.page = 1;
				that.getSwiper();
				that.getTopPic();
				
				that.getMetaList();
				that.getTopContents();
				if(that.TabCur==0){
					that.getContentsList(false);
				}else{
					that.getMetaContents(false,that.TabCur);
				}
			},
			tabSelect(e) {
				var that = this;
				that.TabCur = e.currentTarget.dataset.id;
				that.page = 1;
				that.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				that.contentsList = [];
				that.dataLoad = false;
				if(that.TabCur==0){
					that.getContentsList(false);
				}else{
					that.getMetaContents(false,that.TabCur);
				}
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				if(that.TabCur==0){
					that.getContentsList(true);
				}else{
					that.getMetaContents(true,that.TabCur);
				}
			},
			//公共缓存
			allCache(){
				var that = this;
				var meta = that.TabCur;
				if(localStorage.getItem('swiperList')){
					that.swiperList = JSON.parse(localStorage.getItem('swiperList'));
					var timer = setTimeout(function() {
						that.isLoading=1;
						clearTimeout('timer')
					}, 300)
				}
				
				if(localStorage.getItem('metaList')){
					that.metaList = JSON.parse(localStorage.getItem('metaList'));
				}
				if(localStorage.getItem('contentsList_'+meta)){
					that.contentsList = JSON.parse(localStorage.getItem('contentsList_'+meta));
				}
				if(localStorage.getItem('topContents')){
					that.topContents = JSON.parse(localStorage.getItem('topContents'));
				}
				
				if(localStorage.getItem('Topic')){
					that.Topic = JSON.parse(localStorage.getItem('Topic'));
				}
			},
			getSwiper(){
				var that = this;
				var data = {
					"type":"post",
					"isswiper":1
				}
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				that.$Net.request({
					url: that.$API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":8,
						"page":1,
						"order":"modified",
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						
						if(res.data.code==1){
							that.noLogin = false;
							var list = res.data.data;
							var swiper = [];
							if(list.length>0){
								for(var i in list){
									if(list[i].images.length>0){
										var arr = {
											cid: list[i].cid,
											type: 'image',
											url: list[i].images[0],
											title:list[i].title,
											intro:that.subText(list[i].text,20),
										}
										swiper.push(arr);
									}
									
								}
								that.swiperList = swiper;
								
							}else{
								that.swiperList = [];
							}
							localStorage.setItem('swiperList',JSON.stringify(that.swiperList));
						}else{
							if(res.data.msg=="用户未登录或Token验证失败"){
								that.noLogin = true;
							}
						}
					},
					fail: function(res) {
						
					}
				})
			},
			
			getMetaList(){
				var that = this;
				var data = {
					"type":"category"
				}
				that.$Net.request({
					url: that.$API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":15,
						"page":1,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var meta = [{
									mid:0,
									name:"推荐",
									parent:0
								}];
								that.metaList = meta.concat(list);
								
							}else{
								that.metaList = [];
							}
							localStorage.setItem('metaList',JSON.stringify(that.metaList));
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getTopPic(){
				var that = this;
				var data = {
					"isrecommend":"1"
				}
				that.$Net.request({
					url: that.$API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":4,
						"page":1,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								that.Topic = list;
								
							}else{
								that.Topic = [];
							}
							localStorage.setItem('Topic',JSON.stringify(that.Topic));
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getTopContents(){
				var that = this;
				var data = {
					"type":"post",
					"istop":1,
				}
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				that.$Net.request({
					url: that.$API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":1,
						"order":"modified",
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								
								var contentsList = [];
								//将自定义字段获取并添加到数据
								var curFields = that.$API.GetFields();
								for(var i in list){
									var fields = list[i].fields;
									if(fields.length>0){
										for(var j in fields){
											if(curFields.indexOf(fields[j].name)!=-1){
												list[i][fields[j].name]=fields[j].strValue;
											}
										}
									}
									contentsList.push(list[i]);
								}

								that.topContents = contentsList;
							}else{
								that.topContents = [];
							}
							localStorage.setItem('topContents',JSON.stringify(that.topContents));
						}
					},
					fail: function(res) {
					}
				})
			},
			getContentsList(isPage){
				var that = this;
				var data = {
					"type":"post",
					"istop":0,
				}
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":page,
						"order":"created",
						"token":token
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						that.moreText="加载更多";
						if(!isPage){
							that.dataLoad = true;
						}
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								
								var num = res.data.data.length;
								var rand = Math.floor(Math.random()*num);
								var pushAdsInfo = null;
								// #ifdef APP-PLUS || H5
								if(localStorage.getItem('pushAds')){
									var pushAds = JSON.parse(localStorage.getItem('pushAds'));
									var adsNum = pushAds.length;
									if(adsNum>0){
										var adsRand = Math.floor(Math.random()*adsNum);
										pushAdsInfo = that.pushAds[adsRand];
										pushAdsInfo.isAds = 1;
									}
								}
								// #endif
								var contentsList = [];
								//将自定义字段获取并添加到数据
								var curFields = that.$API.GetFields();
								for(var i in list){
									var fields = list[i].fields;
									if(fields.length>0){
										for(var j in fields){
											if(curFields.indexOf(fields[j].name)!=-1){
												list[i][fields[j].name]=fields[j].strValue;
											}
										}
									}
									contentsList.push(list[i]);
									// #ifdef APP-PLUS || H5
									var isAds = Math.round(Math.random());
									if(isAds==1){
										if(i==rand&&pushAdsInfo!=null){
											contentsList.push(pushAdsInfo);
										}
									}
									
									// #endif
									
								}
								var num = contentsList.length;
								if(isPage){
									that.page++;
									that.contentsList = that.contentsList.concat(contentsList);
								}else{
									that.contentsList = contentsList;
								}
								
								
								localStorage.setItem('contentsList_0',JSON.stringify(that.contentsList));
							}else{
								that.moreText="没有更多文章了";
							}
						}
					},
					fail: function(res) {
						
						that.moreText="加载更多";
						that.isLoad=0;
					}
				})
			},
			getMetaContents(isPage,meta){
				var that = this;
				var data = {
					"mid":meta,
					"type":"post"
				}
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.getMetaContents(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":page,
						"order":"created",
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						if(!isPage){
							that.dataLoad = true;
						}
						that.isLoad=0;
						
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var contentsList = [];
								//将自定义字段获取并添加到数据
								var curFields = that.$API.GetFields();
								for(var i in list){
									var fields = list[i].fields;
									if(fields.length>0){
										for(var j in fields){
											if(curFields.indexOf(fields[j].name)!=-1){
												list[i][fields[j].name]=fields[j].strValue;
											}
										}
									}
									contentsList.push(list[i]);
								}
								if(isPage){
									that.page++;
									that.contentsList = that.contentsList.concat(contentsList);
								}else{
									that.contentsList = contentsList;
								}
								
								
								localStorage.setItem('contentsList_'+meta,JSON.stringify(that.contentsList));
							}else{
								that.moreText="没有更多文章了";
							}
						}
					},
					fail: function(res) {
						
						that.moreText="加载更多";
						that.isLoad=0;
					}
				})
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
					method: "post",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==0){
							localStorage.removeItem('userinfo');
							localStorage.removeItem('token');
							that.token = "";
							that.userinfo = null;
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
			unreadNum() {
				var that = this;
				that.$Net.request({
					
					url: that.$API.unreadNum(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
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
			
			toForeverblog(){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/contents/foreverblog'
				});
				
			},
			toComments(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/comments'
				});
			},
			toSearch(){
				var that = this;
				if(that.noLogin){
					uni.navigateTo({
					    url: '/pages/user/login'
					});
					return false;
				}
				uni.navigateTo({
				    url: '/pages/contents/search'
				});
			},
			toUsers(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/userlist'
				});
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			readAnnouncement(){
				var that = this;
				that.isAnnouncement = false;
				var timestamp=new Date().getTime();
				localStorage.setItem('isAnnouncement',timestamp);
				
			},
			toAllContents(){
				var that = this;
				var type="all";
				var title="全部文章";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id=0"
				});
			},
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			subText(text,num){
				if(text.length < null){
					return text.substring(0,num)+"……"
				}else{
					return text;
				}
				
			},
			toShop(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/shop'
				});
			},
			formatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				var year = datetime.getFullYear(),
					month = ("0" + (datetime.getMonth() + 1)).slice(-2),
					date = ("0" + datetime.getDate()).slice(-2),
					hour = ("0" + datetime.getHours()).slice(-2),
					minute = ("0" + datetime.getMinutes()).slice(-2);
				var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
				return result;
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
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
			},
			getAnnouncement(){
				var that = this;
				if(localStorage.getItem('AppInfo')){
					try{
						var AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
						that.announcement = AppInfo.announcement;
						if(that.announcement!=""||AppInfo.announcement){
							if(localStorage.getItem('isAnnouncement')){
								var oldTime = Number(localStorage.getItem('isAnnouncement'));
								var curTime=new Date().getTime();
								var difference = curTime - oldTime;
								if(difference > 86400000){
									that.isAnnouncement=true;
								}
							}else{
								that.isAnnouncement=true;
							}
							
						}
					}catch(e){
						console.log(e);
					}
				}
			},
			isUpdate(Status) {
				var that = this;
				
				plus.runtime.getProperty(plus.runtime.appid, function(inf) {
					
					that.wgtVer = inf.version //获取当前版本号
					that.versionCode = inf.versionCode;
					var version = inf.versionCode;
					//从缓存里读取版本号
					if(localStorage.getItem('AppInfo')){
						try{
							var AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
							var versionCode = AppInfo.versionCode;
							let platform=uni.getSystemInfoSync().platform;
							if(platform=='ios'){
								that.versionUrl =  AppInfo.iosUrl;
							}else if(platform=='android'){
								that.versionUrl =  AppInfo.androidUrl;
							}
							
							that.versionTitle = AppInfo.version;
							that.versionIntro = AppInfo.versionIntro;
							if(Status){
								// uni.showToast({
								// 	title:"检测完成",
								// 	icon:'none',
								// 	duration: 1000,
								// 	position:'bottom',
								// });
								
							}
							if(versionCode > version){
								console.log("有更新");
								uni.hideTabBar({
								animation: true
								})
								that.Update=1;
								if(Status){
									if(that.versionUrl!=""){
										plus.runtime.openURL(that.versionUrl);  
									}
								}
							}
						}catch(e){
							console.log(e);
						}
						
					}
				});
			},
			toImagetoday(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/imagetoday'
				});
			},
			toTopContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type=top&id="+id
				});
			},
			goLogin(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/login'
				});
			},
			goUserInfo(){
				 
				var that = this;
				if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
					uni.navigateTo({
					    url: '/pages/user/login'
					});
					return false;
				}
				uni.switchTab({
					url: '/pages/home/user'
				});
			},
			toMetas(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/metas'
				});
			},
			
			goCategory(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/allcategory'
				});
			},
			closeUpdate(){
				var that = this;
				that.Update = 0;
				// uni.showTabBar({
				// 	animation: true
				// });
			},
			toRand(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/randlist'
				});
			},
			replaceSpecialChar(text) {
			  text = text.replace(/&quot;/g, '"');
			  text = text.replace(/&amp;/g, '&');
			  text = text.replace(/&lt;/g, '<');
			  text = text.replace(/&gt;/g, '>');
			  text = text.replace(/&nbsp;/g, ' ');
			  return text;
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
			scanLogin(text){
				var that = this;
				var token;
				if(!localStorage.getItem('token')){
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					return false;
				}
				uni.navigateTo({
				    url: '/pages/user/scan?text='+text
				});
			},
			//自定义启动图广告相关
			toStartUrl(){
				if(localStorage.getItem('appStart')){
					var imgData = JSON.parse(localStorage.getItem('appStart'));
					//如果线上的图片与本地缓存图片相同，就不再进行下载
					if(imgData.url){
						var url = imgData.url;
						var type = imgData.urltype;
						if(url.indexOf("http") != -1){
							// #ifdef APP-PLUS
							if(type==1){
								plus.runtime.openURL(url);
							}
							if(type==0){
								plus.runtime.openWeb(url);
							}
							// #endif
							// #ifdef H5
							window.open(url)
							// #endif
							
						}else{
							uni.navigateTo({
							    url: url
							});
						}
						
					}else{
						return false
					}
					
				}else{
					return false
				}
			},
			toStart(){
				var that = this;
				that.isStart=true;
			},
			appStartImg(){
				
				var that = this;
				// #ifdef APP-PLUS
				if(localStorage.getItem('appStart')){
					var imgData = JSON.parse(localStorage.getItem('appStart'));
					
					if(!imgData.localUrl||imgData.localUrl==""){
						console.log("启动图文件本地不存在");
						localStorage.removeItem('appStart');
						that.isStart=true;
						return false;
					}
					var localUrl = imgData.localUrl;
					//在请求之前，先为了性能载入上次图片
					plus.io.resolveLocalFileSystemURL(imgData.localUrl, function(entry) {
						console.log("启动图文件本地存在");
						imgData.localUrl = localUrl;
						that.startImg = imgData;
					
						that.isStart=false;
					}, function(e) {
						console.log("启动图文件本地不存在");
						localStorage.removeItem('appStart');
						that.isStart=true;
					});
				}else{
					console.log("启动图未缓存")
				}
				if(localStorage.getItem('startAds')){
					var data =JSON.parse(localStorage.getItem('startAds'));
					var adsNum = data.length;
					if(adsNum>0){
						
						var adsRand = Math.floor(Math.random()*adsNum);
						var appStartPic = data[adsRand].img;
						if(appStartPic!=""){
							appStartPic = appStartPic.replace(/[\r\n]/g,"");
							var imgData = data[adsRand];
							imgData.appStartPic = appStartPic;
							that.Download(imgData);
						}
					}else{
						console.log("广告信息不存在，删除缓存");
						localStorage.removeItem('appStart');
						that.isStart=true;
					}
					
				}
				// #endif
			},
			Download(startImg) {
				var that = this;
				// #ifdef APP-PLUS
				var url = startImg.appStartPic;
				if(localStorage.getItem('appStart')){
					var imgData = JSON.parse(localStorage.getItem('appStart'));
					//如果线上的图片与本地缓存图片相同，就不再进行下载
					if(url == imgData.appStartPic){
						console.log("启动图不更新");
						//但是链接可能变化，所以需要载入缓存
						var oldStartImg = imgData;
						localStorage.setItem('appStart', JSON.stringify(oldStartImg));
						return false;
					}
				}
				uni.downloadFile({
					url:url,//下载地址接口返回
					success: (data) => {
						if (data.statusCode === 200) {
							//文件保存到本地
							uni.saveFile({
								tempFilePath: data.tempFilePath, //临时路径
								success: function(res) {
									// uni.showToast({
									// 	icon: 'none',
									// 	mask: true,
									// 	title: '文件已保存：' + res.savedFilePath, //保存路径
									// 	duration: 3000,
									// });
									
									startImg.localUrl = res.savedFilePath;
									localStorage.setItem('appStart', JSON.stringify(startImg));
									console.log("启动图已更新"+startImg.localUrl);
								
									that.startImg = startImg;
								}
							});
						}
					},
					fail: (err) => {
						console.log(err);
						// uni.showToast({
						// 	icon: 'none',
						// 	mask: true,
						// 	title: '失败请重新下载',
						// });
					},
				});
				// #endif
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
