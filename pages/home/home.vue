<template>
	<view>
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
					首页
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
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
						<view class="index-sort-i" style="background-color: #ff007f;">
							<text class="cuIcon-crownfill"></text>
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
						<view class="index-sort-i">
							<text class="cuIcon-commentfill"></text>
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
						<view class="index-sort-i" style="background-color: #039a54;">
							<text class="cuIcon-picfill"></text>
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
						<view class="index-sort-i" style="background-color: #ff3333;">
							<text class="cuIcon-taoxiaopu"></text>
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
						<view class="index-sort-i" style="background-color: #2eabbf;">
							<text class="cuIcon-refresh"></text>
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
						<view class="index-sort-i" style="background-color: #aa55ff;">
							<text class="cuIcon-peoplefill"></text>
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
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 推荐文章
				</view>
				<view class="action more" @tap="toRecommend">
					<text>阅读更多</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-card article no-card">
				
				<view class="cu-item shadow"  v-for="(item,index) in recommendList" :key="index" @tap="toInfo(item)">
					<view class="content">
						<image v-if="item.images.length>0" :src="item.images[0]"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content">{{replaceSpecialChar(item.title)}}</view>
							<view class="text-i">
								<view class="cu-tag bg-blue light sm round" v-if="item.category.length>0">{{item.category[0].name}}</view>
								<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
							</view>
						</view>
					</view>
				</view>
				
				
				
			</view>
		</view>
		<view class="ads-box" v-if="ads!=''">
			<image :src="ads[0]" mode="widthFix" @tap="toAds(ads[1])"></image>
		</view>
		<!--底下改成滑动形式-->
		<view class="all-box">
			<scroll-view scroll-x class="bg-white nav metaList" scroll-with-animation :scroll-left="scrollLeft">
				<view class="cu-item" :class="item.mid==TabCur?'text-blue cur':''" v-for="(item,index) in metaList" :key="index" @tap="tabSelect" :data-id="item.mid" v-if="item.parent==0">
					{{item.name}}
				</view>
			</scroll-view>
			<view class="cu-card article no-card" v-for="(item,index) in contentsList" :key="index"  @tap="toInfo(item)">
				<view class="cu-item shadow">
					<block v-if="item.images.length==0">
						<view class="content-author content-header">
							<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
							<text class="content-author-name">{{item.authorInfo.name}}</text>
							<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
						</view>
					</block>
					<view class="title">
						<view class="text-cut">{{replaceSpecialChar(item.title)}}</view>
					</view>
					<view class="content article-content">
						
						 <image v-if="item.images.length > 0" :src="item.images[0]"
						  mode="aspectFill"></image>
						 
						<view class="desc">
							<view class="text-content"> {{subText(item.text,80)}}</view>
							<view class="content-author" v-if="item.images.length>0">
								<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
								<text class="content-author-name">{{item.authorInfo.name}}</text>
								<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
							</view>
						</view>
					</view>
					<view class="article-content-btn">
						<view class="cu-tag data-author"><text class="cuIcon-attentionfill"></text>{{formatNumber(item.views)}}</view>
						<view class="cu-tag data-author"><text class="cuIcon-appreciatefill"></text>{{item.likes}}</view>
						<view class="cu-tag data-author"><text class="cuIcon-messagefill"></text>{{item.commentsNum}}</view>
					
						<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
					</view>
				</view>
			</view>
			<view class="load-more" @tap="loadMore">
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
		<!--update-->
		<!--  #ifdef APP-PLUS -->
		<view class="update" v-if="Update==1">
			<view class="update-bg">
				
			</view>
			<view class="update-box">
				<view class="update-main">
					<image src="../../static/app-plus/ic_ar.png"></image>
					<view class="update-title">发现新版本：{{versionTitle}}</view>
					<view class="update-intro">{{versionIntro}}</view>
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
				<image :src="startImg.localUrl" mode="aspectFill"></image>
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
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				cardCur: 0,
				swiperList: [],
				recommendList:[],
				contentsList:[],
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
				
				
				ads:"",
				
				startImg:'',
				isStart:false,
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.loading();
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			 uni.hideTabBar({
				animation: false
			})
			//如果启动图还没有缓存过，第一次进来就不显示启动图了
			if(!localStorage.getItem('appStart')){
				that.isStart = true;
			}
			that.getAds();
			
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			//获取缓存
			that.allCache();
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.userStatus();
			
			
		},
		onLoad() {
			var that = this;
			that.loading();
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			// #ifdef APP-PLUS
			that.isUpdate(false);
			// #endif
			
			// #ifdef APP-PLUS
			//外部启动APP处理
			var args= plus.runtime.arguments;  
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
			//全部请求
			loading(){
				var that = this;
				that.page = 1;
				that.getSwiper(API.GetSwiperid());
				that.getTopPic();
				that.getRecommend();
				that.getMetaList();
				that.getContentsList(false);
			},
			tabSelect(e) {
				var that = this;
				that.TabCur = e.currentTarget.dataset.id;
				that.page = 1;
				that.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
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
				if(localStorage.getItem('recommendList')){
					that.recommendList = JSON.parse(localStorage.getItem('recommendList'));
				}
				if(localStorage.getItem('metaList')){
					that.metaList = JSON.parse(localStorage.getItem('metaList'));
				}
				if(localStorage.getItem('contentsList_'+meta)){
					that.contentsList = JSON.parse(localStorage.getItem('contentsList_'+meta));
				}
				if(localStorage.getItem('Topic')){
					that.Topic = JSON.parse(localStorage.getItem('Topic'));
				}
			},
			getAds(){
				var that = this;
				
				Net.request({
					url: API.GetAds(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.isAds==1){
							that.ads= res.data.ad1.split("|");
						}
						
						
					},
					fail: function(res) {
						
					}
				})
			},
			getSwiper(id){
				var that = this;
				var data = {
					"mid":id
				}
				
				Net.request({
					url: API.getMetaContents(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
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
								localStorage.setItem('swiperList',JSON.stringify(swiper));
							}
						}
					},
					fail: function(res) {
						
					}
				})
			},
			getRecommend(){
				var that = this;
				var data = {
					"type":"post",
					"isrecommend":1
				}
				Net.request({
					url: API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":1,
						"order":"created"
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
							
								that.recommendList = list;
								localStorage.setItem('recommendList',JSON.stringify(list));
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
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
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
								localStorage.setItem('metaList',JSON.stringify(that.metaList));
							}
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
				Net.request({
					url: API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
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
								localStorage.setItem('Topic',JSON.stringify(that.Topic));
							}
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
			getContentsList(isPage){
				var that = this;
				var data = {
					"type":"post"
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":page,
						"order":"created"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								if(isPage){
									that.page++;
									that.contentsList = that.contentsList.concat(list);
								}else{
									that.contentsList = list;
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
					"mid":meta
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getMetaContents(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":page,
						"order":"created"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						that.isLoad=0;
						
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								if(isPage){
									that.page++;
									that.contentsList = that.contentsList.concat(list);
								}else{
									that.contentsList = list;
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
							localStorage.removeItem('userinfo');
							localStorage.removeItem('token');
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
			
			toGroup(){
				var url = API.GetGroupUrl();
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
			isUpdate(Status) {
				var that = this;
				
				plus.runtime.getProperty(plus.runtime.appid, function(inf) {
					
					that.wgtVer = inf.version //获取当前版本号
					that.versionCode = inf.versionCode;
					var version = inf.versionCode;
					Net.request({
						url: API.GetUpdateUrl(),
						header: {
								'content-type': 'application/json'
							},
						method: 'get',
						success: function(res) {
							var versionCode = res.data.versionCode;
							that.versionUrl =  res.data.versionUrl;
							that.versionTitle = res.data.version;
							that.versionIntro = res.data.versionIntro;
							if(Status){
								uni.showToast({
									title:"检测完成",
									icon:'none',
									duration: 1000,
									position:'bottom',
								});
								
							}
							if(versionCode > version){
								console.log("有更新");
								uni.hideTabBar({
								animation: true
								})
								that.Update=1;
								if(Status){
									if(res.data.versionUrl!=""){
										plus.runtime.openURL(res.data.versionUrl);  
									}
								}
							}
							
						},
						fail:function(res){
							
						}
					})
					
				})
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
			toMetas(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/metas'
				});
			},
			toRecommend(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/recommend'
				});
			},
			closeUpdate(){
				var that = this;
				that.Update = 0;
				uni.showTabBar({
					animation: true
				});
			},
			toAds(url){
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
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
				if(localStorage.getItem('startImg')){
					var imgData = JSON.parse(localStorage.getItem('startImg'));
					//如果线上的图片与本地缓存图片相同，就不再进行下载
					if(imgData.appStartUrl){
						var url = imgData.appStartUrl;
						if(url.indexOf("http") != -1){
							plus.runtime.openWeb(url);
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
			appStartImg(){
				var that = this;
				if(localStorage.getItem('appStart')){
					var imgData = JSON.parse(localStorage.getItem('appStart'));
					//在请求之前，先为了性能载入上次图片
					plus.io.resolveLocalFileSystemURL(imgData.localUrl, function(entry) {
						console.log("启动图文件本地存在");
						that.startImg = imgData;
					}, function(e) {
						console.log("启动图文件本地不存在");
						localStorage.removeItem('appStart');
						that.isStart=true;
					});
				}
				Net.request({
					url: API.GetAppStart(),
					method: 'get',
					success: function(res) {
						var data = res.data;
						var appStartPic = res.data.appStartPic;
						appStartPic = appStartPic.replace(/[\r\n]/g,"");
						data.appStartPic = appStartPic;
						that.Download(data);
					},
					fail:function(res){
						
					}
				});
			},
			Download(startImg) {
				var that = this;
				var url = startImg.appStartPic;
				if(localStorage.getItem('appStart')){
					var imgData = JSON.parse(localStorage.getItem('appStart'));
					//如果线上的图片与本地缓存图片相同，就不再进行下载
					if(url == imgData.appStartPic){
						console.log("启动图不更新");
						//但是链接可能变化，所以需要载入缓存
						var oldStartImg = that.startImg;
						oldStartImg.appStartUrl = startImg.appStartUrl;
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
@import "../../static/base.css";

</style>
