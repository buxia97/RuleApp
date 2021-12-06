<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action">
					<text class="toGroup">社交</text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					首页
				</view>
				<view class="action">
					<text class="cuIcon-search"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<swiper class="screen-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="true" interval="5000" duration="500">
			<swiper-item v-for="(item,index) in swiperList" :key="index"  @tap="toInfo(item)">
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
			</swiper-item>
		</swiper>
		<view class="index-sort grid col-4">
			<view class="index-sort-box">
				<waves itemClass="butclass">
					<view class="index-sort-main">
						<view class="index-sort-i">
							<text class="cuIcon-picfill"></text>
						</view>
						<view class="index-sort-text">
							图库
						</view>
					</view>
				</waves>
			</view>
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
			<view class="index-sort-box">
				<waves itemClass="butclass">
					<view class="index-sort-main" @tap="toCategoryContents('软件中心',58)">
						<view class="index-sort-i">
							<text class="cuIcon-repairfill"></text>
						</view>
						<view class="index-sort-text">
							软件中心
						</view>
					</view>
				</waves>
			</view>
			<view class="index-sort-box">
				<waves itemClass="butclass">
					<view class="index-sort-main" @tap="toUsers">
						<view class="index-sort-i">
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
				<view class="action more" @tap="toAllContents">
					<text>查看全部</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<scroll-view scroll-x="true">
				<view class="topic grid col-4">
					<view class="topic-box" @tap="toCategoryContents('#区块链#',744)">
						<view class="topic-main">
							<image src="../../static/img/topic1.jpg"></image>
							<view class="topic-text">#区块链#</view>
						</view>
					</view>
					<view class="topic-box">
						<view class="topic-main" @tap="toCategoryContents('#编程#',2)">
							<image src="../../static/img/topic2.jpg"></image>
							<view class="topic-text">#编程#</view>
						</view>
					</view>
					<view class="topic-box">
						<view class="topic-main" @tap="toCategoryContents('#APP开发#',24)">
							<image src="../../static/img/topic3.jpg"></image>
							<view class="topic-text">#APP开发#</view>
						</view>
					</view>
					<view class="topic-box">
						<view class="topic-main" @tap="toCategoryContents('#短篇文学#',3)">
							<image src="../../static/img/topic4.jpg"></image>
							<view class="topic-text">#短篇文学#</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 推荐文章
				</view>
				<view class="action more" @tap="toAllContents">
					<text>阅读更多</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-card article no-card">
				
				<view class="cu-item shadow"  v-for="(item,index) in recommendList" :key="index" @tap="toInfo(item)">
					<view class="content">
						<image v-if="item.images.length>0" :src="item.images[0]"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content">{{item.title}}</view>
							<view class="text-i">
								<view class="cu-tag bg-blue light sm round" v-if="item.category.length>0">{{item.category[0].name}}</view>
								<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
							</view>
						</view>
					</view>
				</view>
				
				
				
			</view>
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
					<view class="title">
						<view class="text-cut">{{item.title}}</view>
					</view>
					<view class="content">
						<image v-if="item.images.length>0" :src="item.images[0]"
						 mode="aspectFill"></image>
						<view class="desc">
							<view class="text-content"> {{subText(item.text,80)}}</view>
							<view>
								<view class="cu-tag data-author"><text class="cuIcon-message"></text>{{item.commentsNum}}</view>
								<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="load-more" @tap="loadMore">
				<text>{{moreText}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
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
				metaList:[
					{
						mid:0,
						name:"全部",
						parent:0
					}
				],
				
				dotStyle: false,
				towerStart: 0,
				direction: '100000',
				
				TabCur: 0,
				scrollLeft: 0,
				
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad() {
			var that = this;
			that.loading();
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
		},
		
		onPullDownRefresh(){
		    var that = this;
		    //用户下拉操作时执行的方法
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
				that.getSwiper();
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
				
			},
			getSwiper(){
				var that = this;
				var data = {
					"mid":"394"
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
					"mid":"397"
				}
				Net.request({
					url: API.getMetaContents(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":5,
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
							
								that.metaList = that.metaList.concat(list);
								localStorage.setItem('metaList',JSON.stringify(that.metaList));
							}
						}
					},
					fail: function(res) {
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
						//console.log(JSON.stringify(res))
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
						//console.log(JSON.stringify(res))
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
			
			
			toComments(){
				var that = this;
				
				uni.navigateTo({
				    url: '../contents/comments'
				});
			},
			toUsers(){
				var that = this;
				
				uni.navigateTo({
				    url: '../user/userlist'
				});
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '../contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			toAllContents(){
				var that = this;
				var type="all";
				var title="全部文章";
				uni.navigateTo({
				    url: '../contents/contentlist?title='+title+"&type="+type+"&id=0"
				});
			},
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '../contents/info?cid='+data.cid+"&title="+data.title
				});
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
			//
		},
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
