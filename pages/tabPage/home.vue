<template>
	<view :class="$store.state.AppStyle">
		<view class="header" :class="squareid==3&&scrollTop<=50?'startHome':''" :style="[{height:CustomBar + 'px'}]" >
			<view class="cu-bar" :class="squareid!=3||scrollTop>50?'bg-white':''" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="home-header-sort">
					<text class="square-box" :class="squareid==3?'cur':''" @tap="setSquareid(3)">推荐</text>
					<text class="square-box" :class="squareid==4?'cur':''" @tap="setSquareid(4)">文章库</text>
					<text class="square-box" :class="squareid==0?'cur':''" @tap="setSquareid(0)">动态</text>
					<text class="square-box" :class="squareid==1?'cur':''" @tap="setSquareid(1)">群聊</text>
				</view>
				<view class="action header-btn">
					
					<!-- <text class="cuIcon-notice" @tap="toLink('/pages/inbox/home')">
						<text class="noticeSum bg-red" v-if="noticeSum>0">{{noticeSum > 99?'99+':noticeSum}}</text>
					</text> -->
					<text class="cuIcon-search" @tap="toSearch"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view v-if="squareid==0" :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view v-if="squareid==1" :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view v-if="squareid==4" :style="[{padding:NavBar+40 + 'px 10px 0px 10px'}]"></view>
		<block v-if="squareid==4">
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
			
			
		</block>
		<block v-if="squareid==3">
			<swiper class="screen-swiper home-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
			 :autoplay="true" interval="5000" duration="500">
				<swiper-item v-for="(item,index) in swiperList" :key="index"  @tap="toInfo(item)">
					<view class="swiper-item-bg">
						<view class="swiper-item-bgShow"></view>
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					</view>
					<view class="swiper-box">
						<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
						<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
						<view class="swiper-text">
							<view class="swiper-title">
								{{replaceSpecialChar(item.title)}}
							</view>
							<view class="swiper-intro">
								{{getSwiperText(item.intro)}}
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
								商城
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
			<view class="ads-banner" v-if="bannerAdsInfo!=null">
				<image :src="bannerAdsInfo.img" mode="widthFix" @tap="goAds(bannerAdsInfo)"></image>
			</view>
		</block>
		<block v-if="squareid==3||squareid==4">
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
				
				
				<view class="load-more" @tap="loadMore" v-if="dataLoad&contentsList.length>5">
					<text>{{moreText}}</text>
				</view>
			</view>
		</block>
		<block v-if="squareid==0">
			<view class="data-box">
				<view class="square-post">
					<view class="square-post-header">
						<view class="square-user" @tap="goUserInfo()">
							<view class="cu-avatar round" :style="userInfo.style" v-if="token!=''"></view>
							<view class="cu-avatar round" v-else>
								<text class="text-blue text-sm">登录</text>
							</view>
						</view>
						<view class="square-text" @tap="postSpace(0)">
							分享你的想法吧！
						</view>
					</view>
					<view class="square-post-btn grid col-4">
						<view class="square-post-btn-box" @tap="postSpace(0)">
							<text class="cuIcon-pic text-green"></text>图片
						</view>
						<view class="square-post-btn-box" @tap="postSpace(4)">
							<text class="cuIcon-record text-purple"></text>视频
						</view>
						<view class="square-post-btn-box" @tap="postSpace(1)">
							<text class="cuIcon-read text-blue"></text>文章
						</view>
						<view class="square-post-btn-box" @tap="postSpace(5)">
							<text class="cuIcon-cart text-red"></text>商品
						</view>
					</view>
				</view>
			</view>
			<view class="square-data-type">
				<text :class="spaceDataType==0?'cur':''" @tap="setSpaceDataType(0)">只看关注</text>
				<text :class="spaceDataType==1?'cur':''" @tap="setSpaceDataType(1)">点赞最多</text>
				<text :class="spaceDataType==2?'cur':''" @tap="setSpaceDataType(2)">实时最新</text>
			</view>
			<block v-if="spaceList.length==0">
			
				<block v-if="spaceLoad">
					<view class="no-data" >
						<text class="cuIcon-text"></text>
						
						暂时没有动态哦！
						<view class="text-center margin-top-sm">
							<text class="cu-btn bg-gradual-orange radius" @tap="postSpace(0)">我要发布</text>
						
						</view>
					</view>
				</block>
				<block v-else>
					<view class="dataLoad" v-if="!dataLoad">
						<image src="../../static/loading.gif"></image>
					</view>
				</block>
			</block>	
				
			<spaceItem :spaceList="spaceList"></spaceItem>
			<view class="load-more" @tap="loadMore" v-if="dataLoad&&chatList.length>0">
				<text>{{moreText}}</text>
			</view>
			
			
		</block>
		<block v-if="squareid==1">
			
			<view class="no-data" v-if="token==''">
				<text class="cuIcon-text"></text>
				
				请先登录哦！
				<view class="text-center margin-top-sm">
					<text class="cu-btn bg-blue radius" @tap="goLogin()">登录</text>
					<text class="cu-btn line-blue margin-left-sm radius" @tap="goRegister()">注册</text>
				</view>
				
			</view>
			<view class="cu-list menu-avatar" v-if="token!=''">
				<view class="cu-bar bg-white search">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="搜索群聊" v-model="searchText"></input>
						<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
					</view>
				</view>
				<view class="no-data" v-if="chatList.length==0">
					<text class="cuIcon-text"></text>
					暂时没有数据
				</view>
				<block v-for="(item,index) in chatList" :key="index">
				<view class="cu-item" @tap="goChat(item)" v-if="item.name.indexOf(searchText)!=-1">
					<block v-if="item.type==1">
						<view class="cu-avatar round lg" :style="'background-image:url('+item.pic+');'"></view>
					</block>
					<block v-else>
						<view class="cu-avatar round lg" :style="'background-image:url('+item.userJson.avatar+');'"></view>
					</block>
					<view class="content">
						<view><view class="text-cut">{{item.name}}</view></view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								<block v-if="item.lastMsg!=null">
									
									<block v-if="item.lastMsg.type!=4">
										<block v-if="item.lastMsg.uid==uid">
											我: 
										</block>
										<block v-if="item.lastMsg.uid!=uid">
											{{item.name}}: 
										</block>
										<block v-if="item.lastMsg.type==0">
											{{item.lastMsg.text}}
										</block>
										<block v-if="item.lastMsg.type==1">
											[图片]
										</block>
									</block>
									<block v-else>
										<block v-if="item.lastMsg.text=='ban'">
											<text class="text-red">[已开启全体禁言]</text>
										</block>
										<block v-else>
											<text class="text-blue">[已解除全体禁言]</text>
										</block>
									</block>
								</block>
								<block v-else>暂无消息</block>
							</view>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">{{chatFormatDate(item.lastTime)}}</view>
						<block v-if="item.lastMsg!=null">
							<block v-if="item.lastMsg.uid==uid">
								<view class="cu-tag sm" style="background: none;">&nbsp</view>
							</block>
							<block v-else>
								<view class="cu-tag sm" style="background: none;" v-if="item.isNew==0">&nbsp</view>
								<view class="cu-tag round bg-red sm" v-else>{{item.unRead}}</view>
							</block>
						</block>
						<block v-else>
							<view class="cu-tag sm" style="background: none;">&nbsp</view>
						</block>
					</view>
				</view>
				</block>
			</view>
		</block>

		
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
		<view style="width: 100%; height: 100upx;"></view>
	</view>
</template>

<script>
	import { mapState } from 'vuex'
	
	import waves from '@/components/xxley-waves/waves.vue';
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	
	export default {
		props: {
			curPage: {
			  type: Number,
			  default: 0
			}
		},
		name: "home",
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				cardCur: 0,
				swiperList: [],
				postSwiperList:[],
				
				contentsList:[],
				topContents:[],
				metaList:[],
				Topic:[],
				dotStyle: false,
				towerStart: 0,
				direction: '100000',
				
				squareid:3,
				
				TabCur: 0,
				scrollLeft: 0,
				
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
				
				token:"",
				
				isLoading:0,
				
				
				dataLoad:false,
				
				pushAds:[],
				pushAdsInfo:null,
				bannerAds:[],
				bannerAdsInfo:null,
				
				
				
				noticeSum:0,
				
				userInfo:null,
				token:"",
				isvip:0,
				
				noLogin:false,
				
				scrollTop:0,
				
				chatList:[],
				oldChatList:[],
				
				spaceList:[],
				
				isGetChat:null,
				
				uid:0,
				dataLoad:false,
				
				
				
				spaceDataType:2,
				spaceLoad:false,
				searchText:""
					
			}
		},
		watch:{
			"$store.state.scrollTop": function(newValue, oldValue) {
				this.scrollTop = newValue;
			}
		},
		
		mounted() {
			var that = this;
			uni.$on('onShow', function(data) {
				if(Number(data)!=Number(that.curPage)){
					return false;
				}
				console.log("触发Tab-"+data+"||页面下标"+that.curPage);
				if(localStorage.getItem('userinfo')){
					
					that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
					that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
					that.group = that.userInfo.group;
					that.isvip = that.userInfo.isvip;
				}else{
					that.userInfo =null;
					
				}
				if(localStorage.getItem('token')){
					
					that.token = localStorage.getItem('token');
				}else{
					that.token = "";
				}
				if(localStorage.getItem('appStyle')){
					var appStyle = localStorage.getItem('appStyle');
					
					var curStyle = "blue";
					if(appStyle.indexOf("blue")!=-1){
						curStyle = "blue";
					}
					if(appStyle.indexOf("pink")!=-1){
						curStyle = "pink";
					}
					if(appStyle.indexOf("orange")!=-1){
						curStyle = "orange";

					}
					if(appStyle.indexOf("green")!=-1){
						curStyle = "green";
					}
					// that.$store.state.AppStyle = that.appStyle;
					that.$store.commit('setStyle', appStyle);
					console.log(that.$store.state.AppStyle)
					
					
				}
				
				// #ifdef APP-PLUS
				//如果启动图还没有缓存过，第一次进来就不显示启动图了
				if(!localStorage.getItem('appStart')){
					that.isStart = true;
				}
				
				////plus.navigator.setStatusBarStyle("dark")
				// #endif
				//获取缓存
				that.allCache();
				that.loading();
				if(localStorage.getItem('token')){
					
					that.token = localStorage.getItem('token');
				}
				that.userStatus();
				that.unreadNum();
				that.getSwiper();
				that.getCID();
				// #ifdef APP-PLUS || H5
				if(that.isvip==0){
					that.getAdsCache();
					that.getAds();
				}
				
				// #endif
				
			});
			
			uni.$on('onReachBottom', function(data) {
				if(Number(data)!=Number(that.curPage)){
					return false;
				}
				console.log("触发触底刷新");
				
				if(that.isLoad==0){
					that.loadMore();
				}
			});
			
			uni.$on('onPullDownRefresh', function(data) {
				if(Number(data)!=Number(that.curPage)){
					return false;
				}
				console.log("触发下拉刷新");
				that.page = 1;
				that.setSquareid(that.squareid);
			});
			// if(localStorage.getItem('userinfo')){
				
			// 	that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
			// 	that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			// 	that.group = that.userInfo.group;
			// }else{
			// 	that.userInfo =null;
			// }
			// if(localStorage.getItem('token')){
				
			// 	that.token = localStorage.getItem('token');
			// }else{
			// 	that.token = "";
			// }
			// //第一次加载执行
			// //如果启动图还没有缓存过，第一次进来就不显示启动图了
			// if(!localStorage.getItem('appStart')){
			// 	that.isStart = true;
			// }
			// that.loading();
			// that.userStatus();
			// that.unreadNum();
			// that.getSwiper();
			// that.getCID();
			// // #ifdef APP-PLUS || H5
			// that.getAdsCache();
			// that.getAds();
			// // #endif
			
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
		},
		beforeDestroy(){
			uni.$off('onReachBottom')
			uni.$off('onShow')
			uni.$off('onPullDownRefresh')
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
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){

							
						}
					},
					fail: function(res) {
						console.log(res)
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
				//获取轮播图广告
				that.getAdsList(3);
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
					"status":1,
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
					method: "get",
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
							if(type==3){
								that.swiperAds = res.data.data;
								localStorage.setItem('swiperAds',JSON.stringify(that.swiperAds));
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
				// that.page = 1;
				//that.getSwiper();
				that.getTopPic();
				
				that.getTopContents();
				if(that.page < 2){
					if(that.TabCur==0){
						that.getContentsList(false);
					}else{
						that.getMetaContents(false,that.TabCur);
					}
				}
				
			},
			setSquareid(squareid){
				var that = this;
				if(squareid==that.squareid){
					return false;
				}
				that.squareid = squareid;
				that.page = 1;
				console.log("当前分页"+that.page)
				clearInterval(that.isGetChat);
				that.isGetChat = null
				if(squareid==0){
					if(that.page == 1){
						that.getSpaceList(false);
					}
				}
				if(squareid==1){
					if(that.token!=""){
						that.getMyChat(false);
						that.isGetChat = setInterval(() => {
						 that.getMyChat(false);
						}, 4000);
					}
				}
				if(squareid==3){
					that.TabCur = 0;
					
					
					that.getSwiper();
					that.loading();
					
					that.getContentsList(false);
				}
				if(squareid==4){
					that.loading();
					that.getMetaList();
					if(that.page < 2){
						if(that.TabCur==0){
							that.getContentsList(false);
						}else{
							that.getMetaContents(false,that.TabCur);
						}
					}
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
				if(that.squareid==3||that.squareid==4){
					if(that.TabCur==0){
						that.getContentsList(true);
					}else{
						that.getMetaContents(true,that.TabCur);
					}
				}
				
				if(that.squareid==0){
					that.getSpaceList(true);
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
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						if(res.data.code==1){
							that.noLogin = false;
							var list = res.data.data;
							var swiper = [];
							var swiperAdsList = [];
							// #ifdef APP-PLUS || H5
							if(that.isvip==0){
								if(localStorage.getItem('swiperAds')){
									var swiperAds = JSON.parse(localStorage.getItem('swiperAds'));
									
									if(swiperAds.length>0){
										for(var i in swiperAds){
											var arr = {
												cid: 0,
												adurl:swiperAds[i].img,
												type: 'image',
												url: swiperAds[i].url,
												title:swiperAds[i].name,
												urltype:0,
												isAd:1,
												intro:that.subText(swiperAds[i].intro,20),
											}
											swiper.push(arr);
										}
									}
								}
							}
							// #endif
							if(list.length>0){
								for(var i in list){
									if(list[i].images.length>0){
										var arr = {
											cid: list[i].cid,
											type: 'image',
											url: list[i].images[0],
											title:list[i].title,
											intro:that.subText(list[i].text,20),
											isAd:0,
											urltype:0
										}
										swiper.push(arr);
									}
									
								}
								that.swiperList = swiper;
								if(swiperAdsList.length>0){
									that.swiperList = swiper.concat(swiperAdsList);
								}
								
							}else{
								that.swiperList = swiperAdsList;
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
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var meta = [{
									mid:0,
									name:"全部",
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
					method: "get",
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
					method: "get",
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
					method: "get",
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
								if(that.isvip==0){
									if(localStorage.getItem('pushAds')){
										var pushAds = JSON.parse(localStorage.getItem('pushAds'));
										var adsNum = pushAds.length;
										if(adsNum>0){
											var adsRand = Math.floor(Math.random()*adsNum);
											pushAdsInfo = that.pushAds[adsRand];
											pushAdsInfo.isAds = 1;
										}
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
					method: "get",
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
					method: "get",
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
						console.log(res)
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			unreadNum() {
				var that = this;
				if(localStorage.getItem('noticeSum')){
					that.noticeSum = Number(localStorage.getItem('noticeSum'));
				}
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
				if(data.isAd==0){
					uni.navigateTo({
					    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
					});
				}else{
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
				}
				
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
				    url: '/pages/shop/shop'
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
			goUserInfo(){
				 
				var that = this;
				if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
					uni.navigateTo({
					    url: '/pages/user/login'
					});
					return false;
				}
				uni.$emit('goUser', 0);
			},
			getSwiperText(text){
				var that = this;
				var regex = /[a-zA-Z]|[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]/g;
				text = text.replace(regex, '');
				return text;
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
			
			goLogin(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/login'
				});
			},
			setSpaceDataType(type){
				var that = this;
				that.spaceDataType = type;
				that.spaceLoad = false;
				that.page = 1;
				that.spaceList = [];
				that.getSpaceList(false);
			},
			getSpaceList(isPage){
				var that = this;
				var page = that.page;
				if(isPage){
					page++;
				}
				var data = {
					"status":1
				}
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				
				}
				var spaceDataType = that.spaceDataType;
				var url = that.$API.followSpace();
				var order = "created";
				if(spaceDataType > 0 ){
					url = that.$API.spaceList();
				}
				if(spaceDataType  == 1 ){
					order = "likes";
				}
				that.$Net.request({
					url: url,
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":10,
						"page":page,
						"order":order,
						"token":token
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.spaceLoad = true;
						that.isLoading = 1;
						that.isLoad=0;
						that.moreText="加载更多";
						if(!isPage){
							that.dataLoad = true;
						}
						if(res.data.code==1){
							that.noLogin = false;
							var list = res.data.data;
							var spaceList = [];
							for(var i in list){
								list[i].banShow = false;
								list[i].isBan = false;
								if(list[i].type==0){
									if(list[i].pic){
										var pic = list[i].pic;
										list[i].picList = pic.split("||");
									}else{
										list[i].picList = [];
									}
									
								}
								if(list[i].type==2){
									if(list[i].forwardJson.pic){
										var pic = list[i].forwardJson.pic;
										list[i].forwardJson.picList = pic.split("||");
									}else{
										list[i].forwardJson.picList = [];
									}
									
								}
							}
							spaceList = list;
							if(list.length>0){
								if(isPage){
									that.page++;
									that.spaceList = that.spaceList.concat(spaceList);
								}else{
									that.spaceList = spaceList;
								}
								localStorage.setItem('spaceList',JSON.stringify(spaceList));
							}else{
								that.moreText="没有更多动态了";
							}
							
						}else{
							if(res.data.msg=="用户未登录或Token验证失败"){
								that.noLogin = true;
							}
						}
					},
					fail: function(res) {
						that.spaceLoad = true;
						that.isLoading = 1;
						that.moreText="加载更多";
						that.isLoad=0;
					}
				})
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
			goLogin(){
				uni.navigateTo({
				    url: '/pages/user/login'
				});
			},
			goRegister(){
				uni.navigateTo({
				    url: '/pages/user/register'
				});
			},
			subText(text,num){
				if(text.length < null){
					return text.substring(0,num)+"……"
				}else{
					return text;
				}
				
			},
			goLogin(){
				uni.navigateTo({
				    url: '/pages/user/login'
				});
			},
			//群聊(性能考虑，只加载前30条)
			getMyChat(isPage){
				var that = this;
				var page = that.page;
				if(isPage){
					page++;
				}
				if(that.token==""){
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				that.$Net.request({
					url: that.$API.allChat(),
					data:{
						"token":that.token,
						"limit":30,
						"page":page,
						"order":"lastTime"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoading = 1;
						that.isLoad=0;
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var chatList = [];
								for(var i in list){
									var arr = list[i];
									arr.isNew =0;
									arr.unRead =0;
									chatList.push(arr);
								}
								if(isPage){
									that.page++;
									that.chatList = that.chatList.concat(chatList);
								}else{
									var oldChatList = [];
									if(that.oldChatList!=null){
										oldChatList = that.oldChatList;
									}
									if(oldChatList.length>0){
										
										if(!that.arraysEqual(oldChatList,chatList)){
											console.log("开始对比")
											for(var c in chatList){
												for(var d in oldChatList){
													if(oldChatList[d].id == chatList[c].id){
														if(oldChatList[d].lastTime < chatList[c].lastTime){
															console.log("赋值完成")
															chatList[c].isNew = 1;
															
															var unRead = chatList[c].msgNum - oldChatList[d].msgNum;
															if(unRead <= 0){
																unRead = 0;
															}
															chatList[c].unRead = unRead;
														}
													}
													
												}
											}
											that.oldChatList = chatList;
											that.chatList = chatList;
											localStorage.setItem('AllchatList',JSON.stringify(chatList));
										}
										
										
									}else{
										that.oldChatList = chatList;
										that.chatList = chatList;
										localStorage.setItem('AllchatList',JSON.stringify(chatList));
									}
								}
							}else{
								// that.moreText="没有更多消息了";
							}
							
						}
					},
					fail: function(res) {
						that.isLoading = 1;
						that.isLoad=0;
						// that.moreText="加载更多";
					}
				})
			},
			arraysEqual(a, b) {
				if (a === b) return true;
				if (a == null || b == null) return false;
				if (a.length != b.length) return false;
				for(var c in a){
					for(var d in b){
						if(b[d].id == a[c].id){
							if(b[d].lastTime != a[c].lastTime){
								return false;
							}
						}
						
					}
				}
			},
			chatFormatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				// 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
				var year = datetime.getFullYear();
				var month = ("0" + (datetime.getMonth() + 1)).slice(-2);
				var date = ("0" + datetime.getDate()).slice(-2);
				var hour = ("0" + datetime.getHours()).slice(-2);
				var minute = ("0" + datetime.getMinutes()).slice(-2);
				var time = year+""+month+""+date;
				
				var result = hour + ":" + minute;
				var curDate = new Date();
				var curYear = curDate.getFullYear(); //获取完整的年份(4位)
				var curMonth = ("0" + (curDate.getMonth() + 1)).slice(-2);
				var curDay = ("0" + curDate.getDate()).slice(-2); //获取当前日(1-31)
				var curTime = curYear+""+curMonth+""+curDay;
				if(year==curYear){
					if(year==curYear){
						if(date==curDay){
							result = hour + ":" + minute;
						}else{
							result = month + "-" + date;
						}
					}else{
						result = month + "-" + date;
					}
				}else{
					result = month + "-" + date;
				}
				return result;
			},
			goChat(data){
				var that = this;
				var chatid = data.id;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				//去除未读标志
				var chatlist = that.chatList;
				for(var i in chatlist){
					if(chatlist[i].id==chatid){
						chatlist[i].isNew =0;
						chatlist[i].unRead =0;
					}
				}
				that.chatList = chatlist;
				that.oldChatList = that.chatList;
				localStorage.setItem('AllchatList',JSON.stringify(that.chatList));
				//结束
				if(data.type==0){
					var name = data.userJson.name;
					var uid = data.userJson.uid;
					
					uni.navigateTo({
					    url: '/pages/chat/chat?uid='+uid+"&name="+name+"&chatid="+chatid+"&type=0"
					});
				}
				if(data.type==1){
					var name = data.name;
					
					uni.navigateTo({
					    url: '/pages/chat/chat?&name='+name+'&chatid='+chatid+'&type=1'
					});
				}
				
			},
			postSpace(type){
				var that = this;
				if(type==1){
					uni.navigateTo({
					    url: '/pages/edit/articlePost'
					});
				}else if(type==5){
					uni.navigateTo({
					    url: '/pages/edit/addshop'
					});
				}else{
					uni.navigateTo({
					    url: '/pages/space/post?type='+type
					});
				}
				
				
			},
		},
		
		
		components: {
			waves
		}

	}
</script>

<style>
</style>
