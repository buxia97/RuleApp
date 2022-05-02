<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					积分商城
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="搜索商品" v-model="searchText"  @input="searchShop"></input>
				</view>
			</view>
			<view class="shop-sort">
				<view class="shop-sort-box" @tap="setType(0)":class="type=='0'?'active':''">
					全部
				</view>
				<view class="shop-sort-box" @tap="setType(1)":class="type=='1'?'active':''">
					实体商品
				</view>
				<view class="shop-sort-box" @tap="setType(2)":class="type=='2'?'active':''">
					源码
				</view>
				<view class="shop-sort-box" @tap="setType(3)":class="type=='3'?'active':''">
					软件工具
				</view>
				<view class="shop-sort-box" @tap="setType(4)":class="type=='4'?'active':''">
					付费阅读
				</view>
			</view>
		</view>
		<view class="data-box">
			<view class="no-data" v-if="shopList.length==0">
				暂时没有商品
			</view>
			<view class="shop-list grid col-2">
				
				<view class="shop-box" v-for="(item,index) in shopList" :key="index">
					<view class="shop-main" @tap="shopInfo(item.id)">
						<view class="shop-img">
							<image :src="item.imgurl" mode="widthFix"></image>
						</view>
						<view class="shop-title">
							{{item.title}}
						</view>
						<view class="shop-info">
							<block v-if="isvip==1">
								<text class="shop-price text-yellow text-bold">{{parseInt(item.price * item.vipDiscount)}}</text><text class="text-sm margin-left-sm text-yellow">积分</text>
							</block>
							<block v-else>
								<text class="shop-price text-red text-bold">{{item.price}}</text><text class="text-sm margin-left-sm text-red">积分</text>
							</block>
							<text class="cuIcon-cart"></text>
						</view>
					</view>
				</view>

				
			</view>
		</view>
		<view class="load-more" @tap="loadMore" v-if="shopList.length>0">
			<text>{{moreText}}</text>
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
				
				
				userInfo:null,
				token:"",
				
				shopList:[],
				isLoad:0,
				page:1,
				moreText:"加载更多",
				type:0,
				
				isLoading:0,
				searchText:"",
				
				vipDiscount:0,
				vipPrice:0,
				scale:0,
				isvip:0,
				vip:0,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getShopList();
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
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
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.isLoad=0;
			that.page=1;
			that.allCache();
			that.getVipInfo();
			that.userStatus();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.getShopList();
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			searchShop(){
				var that = this;
				that.page=1;
				that.getShopList();
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getShopList(true);
				
			},
			setType(i){
				var that = this;
				that.type = i;
				that.page = 1;
				that.getShopList();
			},
			//公共缓存
			allCache(){
				var that = this;
				if(localStorage.getItem(that.type+'_shopList')){
					that.shopList = JSON.parse(localStorage.getItem(that.type+'_shopList'));
				}
			},
			getShopList(isPage){
				var that = this;
				var data = {
					"type":that.type,
					"status":"1"
				}
				if(that.type==0){
					data = {
						"status":"1"
					}
				}
				
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.shopList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"searchKey":that.searchText,
						"limit":6,
						"page":page,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
						that.isLoad=0;
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length==0){
								that.moreText="没有更多数据了";
							}
							if(isPage){
								if(list.length>0){
									that.page++;
									that.shopList = that.shopList.concat(list);
								}
							}else{
								
								that.shopList = list;
							}
							
							localStorage.setItem(that.type+'_shopList',JSON.stringify(that.shopList));
						}
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
			shopInfo(sid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/shopinfo?sid='+sid
				});
			},
			getVipInfo(){
				var that = this;
				Net.request({
					url: API.getVipInfo(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.vipDiscount=res.data.data.vipDiscount;
							that.vipPrice=res.data.data.vipPrice;
							that.scale=res.data.data.scale;
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
			userStatus() {
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				Net.request({
					
					url: API.userStatus(),
					data:{
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.vip = res.data.data.vip;
							that.isvip = res.data.data.isvip;
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
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
