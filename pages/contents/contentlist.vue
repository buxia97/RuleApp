<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					{{title}}
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<scroll-view scroll-x class="bg-white nav metaList" scroll-with-animation :scroll-left="scrollLeft" style="margin-top: 20upx;" v-if="type=='all'">
			<view class="cu-item" :class="item.mid==TabCur?'text-blue cur':''" v-for="(item,index) in metaList" :key="index" @tap="tabSelect" :data-id="item.mid" v-if="item.parent==0">
				{{item.name}}
			</view>
		</scroll-view>
		
		<view class="cu-card article no-card">
		<scroll-view scroll-x class="bg-white nav metaList" scroll-with-animation :scroll-left="scrollLeft" style="margin-top: 20upx;" v-if="type=='top'">
			<view class="cu-item" :class="item.order==orderCur?'text-blue cur':''" v-for="(item,index) in topList" :key="index" @tap="topSelect" :data-order="item.order">
				{{item.name}}
			</view>
		</scroll-view>
		<block v-for="(item,index) in contentsList" :key="index">
			<!--文章推流广告区域-->
			<view class="cu-card article no-card" v-if="item.isAds"  @tap="goAds(item)">
				<view class="cu-item shadow">
					<view class="title">
						<view class="text-cut">{{item.name}}</view>
					</view>
					<view class="content article-content" style="position: relative;">
						 <image :src="item.img"
						  mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content">{{item.intro}}</view>
						</view>
						<text class="ads-ico">AD</text>
					</view>
				</view>
			</view>
			<!--文章推流广告区域结束-->
			<view class="cu-card article no-card"  @tap="toInfo(item)" v-else>
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
					<block v-if="item.abcimg == 'mable'">
						
						<view class="article-imgMain grid col-3">
							
							<view class="article-img">
								<image v-if="item.images.length > 0" :src="item.images[0]"
								 mode="aspectFill"></image>
							</view>
							<view class="article-img">
								<image v-if="item.images.length > 1" :src="item.images[1]"
								 mode="aspectFill"></image>
							</view>
							<view class="article-img">
								<image v-if="item.images.length > 2" :src="item.images[2]"
								 mode="aspectFill"></image>
							</view>
						</view>
						<view class="content-author content-header bigImg-style">
							<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
							<text class="content-author-name">{{item.authorInfo.name}}</text>
							<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
						</view>
					</block>
					<block v-if="item.abcimg == 'bable'">
						
						<view class="content article-content">
							<view class="article-big">
								<image v-if="item.images.length > 0" :src="item.images[0]"
								 mode="aspectFill"></image>
							</view>
							<view class="text-content"> {{subText(item.text,80)}}</view>
						</view>
						<view class="content-author content-header bigImg-style">
							<image :src="item.authorInfo.avatar" mode="aspectFill"></image>
							<text class="content-author-name">{{item.authorInfo.name}}</text>
							<text class="article-category" v-if="item.category.length>0">{{item.category[0].name}}</text>
						</view>
					</block>
					<block v-if="item.abcimg == 'able'||!item.abcimg">
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
					</block>
					<view class="article-content-btn  article-list-btn">
						<view class="cu-tag data-author"><text class="cuIcon-attentionfill"></text>{{formatNumber(item.views)}}</view>
						<view class="cu-tag data-author"><text class="cuIcon-appreciatefill"></text>{{item.likes}}</view>
						<view class="cu-tag data-author"><text class="cuIcon-messagefill"></text>{{item.commentsNum}}</view>
					
						<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
					</view>
				</view>
			</view>
			</block>
			<view class="load-more" @tap="loadMore" v-if="contentsList.length>0">
				<text>{{moreText}}</text>
			</view>
			<view class="no-data" v-if="contentsList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
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
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				title:"",
				type:"",
				id:0,
				
				contentsList:[],
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
				
				metaList:[
					{
						mid:0,
						name:"全部",
						parent:0
					}
				],
				topList:[
					{
						order:"commentsNum",
						name:"评论榜",
						parent:0
					},
					{
						order:"views",
						name:"点击榜",
						parent:0
					},
					{
						order:"likes",
						name:"喜欢榜",
						parent:0
					},
				],
				orderCur:"commentsNum",
				TabCur: 0,
				scrollLeft: 0,
				isLoading:0,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			if(that.isLoad==0){
				that.loadMore();
			}
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.title = res.title;
			that.type =  res.type;
			//user根据用户查询 meta根据分类和标签查询，all显示分类查询全部，search根据搜索关键词查询
			that.id =  res.id;
			if(res.type!=""){
				if(that.type=="meta"){
					
					that.getMetaContents(false,that.id);
				}else if(that.type=="top"){
					that.getContentsList(false,that.type,that.id);
				}else{
					that.getContentsList(false,that.type,that.id);
				}
			}
			if(res.type=="all"){
				
				that.getMetaList();
			}
			
		},
		methods:{
			allCache(){
				var that = this;
				var meta = that.TabCur;
				
			},
			goAds(data){
				var that = this;
				var url = data.url;
				var type = data.urltype;
				// #ifdef APP-PLUS
				if(type==1){
					plus.runtime.openURL(url) 
				}
				if(type==0){
					plus.runtime.openWeb(url) 
				}
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			tabSelect(e) {
				var that = this;
				that.TabCur = e.currentTarget.dataset.id;
				that.id = e.currentTarget.dataset.id;
				that.page = 1;
				that.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				if(that.TabCur==0){
					that.getContentsList(false,"all",0);
				}else{
					that.getMetaContents(false,that.TabCur);
				}
			},
			topSelect(e){
				var that = this;
				that.orderCur = e.currentTarget.dataset.order;
				that.page = 1;
				that.getContentsList(false,"all",0);
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				if(that.type=="meta"){
					
					that.getMetaContents(true,that.id);
				}else if(that.type=="all"){
					if(that.id==0){
						that.getContentsList(true,that.type,that.id);
					}else{
						that.getMetaContents(true,that.id);
					}
				}else if(that.type=="top"){
					that.getContentsList(true,that.type,that.id);
					
				}else{
					that.getContentsList(true,that.type,that.id);
				}
			},
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
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
							
								that.metaList = that.metaList.concat(list);
							
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getContentsList(isPage,type,id){
				var that = this;
				var info = {
					"type":"post"
				}
				var order = "created";
				if(type=="user"){
					info = {
						"type":"post",
						"authorId":that.id
					}
				}
				if(that.type=="top"){
					order = that.orderCur
				}
				var page = that.page;
				if(isPage){
					page++;
				}else{
					that.contentsList = [];
				}
				var data = {
					"searchParams":JSON.stringify(API.removeObjectEmptyKey(info)),
					"limit":5,
					"page":page,
					"order":order
				};
				Net.request({
					url: API.getContentsList(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						that.moreText="加载更多";
						that.isLoad=0;
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
										pushAdsInfo = pushAds[adsRand];
										pushAdsInfo.isAds = 1;
									}
								}
								// #endif
								var contentsList = [];
								//将自定义字段获取并添加到数据
								var curFields = API.GetFields();
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
								if(isPage){
									that.page++;
									that.contentsList = that.contentsList.concat(contentsList);
								}else{
									that.contentsList = contentsList;
								}
								
								
							
							}else{
								that.moreText="没有更多文章了";
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						that.moreText="加载更多";
						that.isLoad=0;
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
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
						//console.log(JSON.stringify(res))
						that.isLoad=0;
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var contentsList = [];
								//将自定义字段获取并添加到数据
								var curFields = API.GetFields();
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
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
						that.moreText="加载更多";
						that.isLoad=0;
					}
				})
			},
			
			
			subText(text,num){
				if(text.length < null){
					return text.substring(0,num)+"……"
				}else{
					return text;
				}
				
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
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
			},
			toSearch(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/search'
				});
			},
			replaceSpecialChar(text) {
			  text = text.replace(/&quot;/g, '"');
			  text = text.replace(/&amp;/g, '&');
			  text = text.replace(/&lt;/g, '<');
			  text = text.replace(/&gt;/g, '>');
			  text = text.replace(/&nbsp;/g, ' ');
			  return text;
			}
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
