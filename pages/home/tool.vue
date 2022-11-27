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
					工具
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 常用功能
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-3 tool-sort">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toPage('使用攻略',raiders)">
							<view class="index-sort-i" style="background-color: #ff7300;">
								<text class="cuIcon-appreciate"></text>
							</view>
							<view class="index-sort-text">
								使用攻略
							</view>
						</view>
					</waves>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="toLink('../user/post?type=add')">
							<view class="index-sort-i" style="background-color: #c16000;">
								<text class="cuIcon-edit"></text>
							</view>
							<view class="index-sort-text">
								发布文章
							</view>
						</view>
					</waves>
				</view>
				<!--  #endif -->
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
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="goPage('/pages/contents/recommend')">
							<view class="index-sort-i">
								<text class="cuIcon-choicenessfill"></text>
							</view>
							<view class="index-sort-text">
								精选作品
							</view>
						</view>
					</waves>
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 站内入口
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-3 tool-sort">
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
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main"  @tap="goPage('/pages/contents/shop')">
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
			</view>
		</view>
		<view class="data-box">
			<view class="cu-bar bg-white">
				<view class="action data-box-title">
					<text class="cuIcon-titles text-rule"></text> 创意区
				</view>
				<view class="action more">
					
				</view>
			</view>
			<view class="index-sort grid col-3 tool-sort">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="goPage('/pages/contents/foreverblog')">
							<view class="index-sort-i toClub">
								<text class="cuIcon-upstagefill"></text>
							</view>
							<view class="index-sort-text">
								十年之约
							</view>
						</view>
					</waves>
					
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i" style="background-color: #4a7aff;">
								<text class="cuIcon-newfill"></text>
							</view>
							<view class="index-sort-text">
								聊天室<text class="text-sm text-gray margin-left-sm">开发中</text>
							</view>
						</view>
					</waves>
					
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main">
							<view class="index-sort-i" style="background-color: #1db837;">
								<text class="cuIcon-locationfill"></text>
							</view>
							<view class="index-sort-text">
								圈子<text class="text-sm text-gray margin-left-sm">开发中</text>
							</view>
						</view>
					</waves>
					
				</view>
				<!--  #endif -->
			</view>
		</view>
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<!--加载遮罩结束-->
		<!--  #ifdef APP-PLUS -->
		<view style="height: 100upx;"></view>
		<Tabbar :current="2"></Tabbar>
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
				
				toolList:[],
				userInfo:null,
				token:"",
				isLoading:0,
				raiders:API.GetRaiders(),
				toolid:0,
			}
		},
		onPullDownRefresh(){
			var that = this;
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
			
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.userStatus();
			that.allCache();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods:{
			allCache(){
				var that = this;
				if(localStorage.getItem('toolList')){
					that.toolList = JSON.parse(localStorage.getItem('toolList'));
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
			toInfo(data){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			toPage(title,cid){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			toSearch(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/search'
				});
			},
			goPage(url){
				var that = this;
				
				uni.navigateTo({
				    url: url
				});
			},
			toCategoryContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
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
						that.isLoading=1;
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
			toGroup(){
				var url = API.GetGroupUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
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
