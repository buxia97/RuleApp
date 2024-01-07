<template>
	<view :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					发现
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action header-btn">
					
					<text class="cuIcon-notice" @tap="toLink('/pages/inbox/home')">
						<text class="noticeSum bg-red" v-if="noticeSum>0">{{noticeSum}}</text>
					</text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 文章排行榜
				</view>
				<view class="action more" @tap='toTopContents("文章排行榜","commentsNum")'>
					<text>更多热门</text><text class="cuIcon-right"></text>
				</view>
				
			</view>
			<view class="topList grid col-3">
				<view class="topList-box" @tap='toTopContents("排行榜","views")'>
					<view class="topList-main">
						<text class="cuIcon-upstagefill"></text>
						阅读榜
					</view>
				</view>
				<view class="topList-box" @tap='toTopContents("排行榜","commentsNum")'>
					<view class="topList-main">
						<text class="cuIcon-markfill"></text>
						评论榜
					</view>
				</view>
				<view class="topList-box" @tap='toTopContents("排行榜","likes")'>
					<view class="topList-main">
						<text class="cuIcon-likefill"></text>
						喜欢榜
					</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 工具库
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-4 tool-sort">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="goPage('/pages/contents/imagetoday')">
							<view class="index-sort-i" style="background-color: #039a54;">
								<text class="cuIcon-picfill"></text>
							</view>
							<view class="index-sort-text">
								图库
							</view>
						</view>
					</waves>
				</view>
				
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="goPage('/pages/ads/home')">
							<view class="index-sort-i" style="background-color: #7f165e;">
								<text class="cuIcon-read"></text>
							</view>
							<view class="index-sort-text">
								广告位
							</view>
						</view>
					</waves>
				</view>
				<!--  #endif -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main"  @tap="goPage('/pages/shop/shop')">
							<view class="index-sort-i" style="background-color: #ff3333;">
								<text class="cuIcon-taoxiaopu"></text>
							</view>
							<view class="index-sort-text">
								积分商城
							</view>
						</view>
					</waves>
				</view>
				<!--  #ifdef MP -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="goPage('/pages/contents/randlist')">
							<view class="index-sort-i">
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
						<view class="index-sort-main" @tap="goPage('/pages/home/tool')">
							<view class="index-sort-i" style="background-color: #7d7c7c;">
								<text class="cuIcon-similar"></text>
							</view>
							<view class="index-sort-text">
								更多
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="ads-banner" v-if="bannerAdsInfo!=null">
			<image :src="bannerAdsInfo.img" mode="widthFix" @tap="goAds(bannerAdsInfo)"></image>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 热销商品
				</view>
				<view class="action more" @tap="goPage('/pages/shop/shop')">
					<text>进入商城</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="shop-list" style="padding: 10upx;">
				<block v-for="(item,index) in shopList" :key="index">
					<shopItem :item="item"></shopItem>
				</block>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 最近活跃用户
				</view>
			</view>
			<view class="cu-list menu-avatar userList" style="padding-bottom: 20upx;">
				<view class="cu-item" v-for="(item,index) in userList" :key="index" @tap="toUserContents(item)">
					<view class="cu-avatar round lg" :style="item.style"></view>
					<view class="content">
						<view class="text-grey">
							<block  v-if="item.screenName">{{item.screenName}}</block>
							<block  v-else>{{item.name}}</block>
							<text v-if="item.groupKey=='contributor'||item.groupKey=='administrator'" class="cuIcon-lightfill"></text>
							<!--  #ifdef H5 || APP-PLUS -->
							<block v-if="item.isvip>0">
								<block v-if="item.vip==1">
									<text class="isVIP bg-gradual-red">VIP</text>
								</block>
								<block v-else>
									<text class="isVIP bg-yellow">VIP</text>
								</block>
							</block>
							<!--  #endif -->
						</view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								上次活跃: 
								<text class="text-blue" v-if="item.posttime>0">{{formatDate(item.posttime)}}</text>
								<text class="text-blue" v-else>暂未活跃</text>
							</view>
						</view>
					</view>
					<view class="action goUserIndex">
						<view class="cu-btn text-blue">主页</view>
						
					</view>
				</view>
			</view>
			
		</view>
		<view class="data-box" style="display: none;">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 内容分类
				</view>
				<view class="action more" @tap="toAllcategory">
					<text>全部分类</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="category grid col-3">
				<view class="category-box"  v-for="(item,index) in metaList" v-if="item.parent==0" @tap="toCategoryContents(item.name,item.mid)" :key="index">
					<view class="category-main">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 标签云
				</view>
				<view class="action more" @tap="toAlltag">
					<text>更多标签</text><text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="tags">
				
				<text class="tags-box" v-for="(item,index) in tagList" @tap='toCategoryContents("#"+item.name+"#",item.mid)'>
					# {{item.name}}
				</text>
				
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
		
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<!--加载遮罩结束-->
		<!--加载遮罩结束-->
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
		name: "find",
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				metaList:[],
				tagList:[],
				recommendList:[],
				shopList:[],
				userList:[],
				isLoading:0,
				
				ads:"",
				bannerAds:[],
				bannerAdsInfo:null,
				
				noticeSum:0,
				token:"",
				
				noLogin:false
				
			}
		},

		mounted() {
			var that = this;
			uni.$on('onShow', function(data) {
				if(Number(data)!=Number(that.curPage)){
					return false;
				}
				
				console.log("触发Tab-"+data+"||页面下标"+that.curPage);
				if(localStorage.getItem('token')){
					
					that.token = localStorage.getItem('token');
				}
				that.loading();
				that.getAdsCache();
				that.allCache();
				if(localStorage.getItem('token')){
					
					that.token = localStorage.getItem('token');
				}
				that.unreadNum();
				
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
				that.loading();
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
			getAdsCache(){
				var that = this;
				if(localStorage.getItem('bannerAds')){
					that.bannerAds = JSON.parse(localStorage.getItem('bannerAds'));
					
					var num = that.bannerAds.length;
					if(num>0){
						var rand = Math.floor(Math.random()*num);
						that.bannerAdsInfo = that.bannerAds[rand];
					}
				}
			},
			loading(){
				var that = this;
				that.getUserList();
				that.getShopList();
				that.getRecommend();
				that.getMetaList();
				that.getTagList();
			},
			replaceSpecialChar(text) {
			  text = text.replace(/&quot;/g, '"');
			  text = text.replace(/&amp;/g, '&');
			  text = text.replace(/&lt;/g, '<');
			  text = text.replace(/&gt;/g, '>');
			  text = text.replace(/&nbsp;/g, ' ');
			  return text;
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
			allCache(){
				var that = this;
				if(localStorage.getItem('recommendList')){
					that.recommendList = JSON.parse(localStorage.getItem('recommendList'));
				}
				if(localStorage.getItem('find_metaList')){
					that.metaList = JSON.parse(localStorage.getItem('find_metaList'));
				}
				if(localStorage.getItem('find_tagList')){
					that.tagList = JSON.parse(localStorage.getItem('find_tagList'));
				}
				var timer = setTimeout(function() {
					that.isLoading=1;
					clearTimeout('timer')
				}, 300)
			},
			getRecommend(){
				var that = this;
				var data = {
					"type":"post",
					"isrecommend":1
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
							that.noLogin = false;
							var list = res.data.data;
							if(list.length>0){
							
								that.recommendList = list;
								
							}else{
								that.recommendList = [];
							}
							localStorage.setItem('recommendList',JSON.stringify(that.recommendList));
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
					"type":"category",
					"parent":0
				}
				that.$Net.request({
					url: that.$API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":15,
						"page":1,
						"order":"order"
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
							
								that.metaList = list;
								localStorage.setItem('find_metaList',JSON.stringify(that.metaList));
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
			getTagList(){
				var that = this;
				var data = {
					"type":"tag"
				}
				that.$Net.request({
					url: that.$API.getMetasList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":20,
						"page":1,
						"order":"count"
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


								that.tagList = list;
								
								localStorage.setItem('find_tagList',JSON.stringify(that.tagList));
							}
						}
					},
					fail: function(res) {
					}
				})
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
			getShopList(){
				var that = this;
				var data = {
					"status":"1",
					"isView":"1"
				}
				that.$Net.request({
					url: that.$API.shopList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":4,
						"page":1,
						"order":"sellNum"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							that.shopList = list;
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
			getUserList(){
				var that = this;
				var token = ""
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				
				}
				that.$Net.request({
					url: that.$API.getUserList(),
					data:{
						"searchParams":"",
						"limit":5,
						"page":1,
						"order":"posttime",
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
								
								var userList = [];
								for(var i in list){
									var arr = list[i];
									arr.style = "background-image:url("+list[i].avatar+");"
									userList.push(arr);
								}
								that.userList = userList;
							}
						}
					},
					fail: function(res) {
					}
				})
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			toTopContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type=top&id="+id
				});
			},
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			toAlltag(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/alltag'
				});
			},
			toAllcategory(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/allcategory'
				});
			},
			goPage(url){
				var that = this;
				
				uni.navigateTo({
				    url: url
				});
			},
			toRecommend(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/recommend'
				});
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
			toAds(url){
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			unreadNum() {
				var that = this;
				if(localStorage.getItem('noticeSum')){
					that.noticeSum = Number(localStorage.getItem('noticeSum'));
				}
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
			goLogin(){
				uni.navigateTo({
				    url: '/pages/user/login'
				});
			},
			toUserContents(data){
				var that = this;
				var name = data.name;
				var title = data.name+"的信息";
				if(data.screenName){
					title = data.screenName+" 的信息";
					name = data.screenName
				}
				var id= data.uid;
				var type="user";
				uni.navigateTo({
				    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(data.avatar)
				});
			},
			subText(text,num){
				if(text){
					if(text.length>num){
						text = text.substring(0,num);
						return text+"……";
					}else{
						return text;
					}
				}else{
					return "Ta还没有个人介绍哦"
				}
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