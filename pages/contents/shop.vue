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
			<view class="index-sort grid col-4">
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="setType(1)">
							<view class="index-sort-i">
								<text class="cuIcon-goods"></text>
							</view>
							<view class="index-sort-text">
								实体商品
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="setType(2)">
							<view class="index-sort-i">
								<text class="cuIcon-choicenessfill"></text>
							</view>
							<view class="index-sort-text">
								源码
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="setType(3)">
							<view class="index-sort-i">
								<text class="cuIcon-repairfill"></text>
							</view>
							<view class="index-sort-text">
								软件工具
							</view>
						</view>
					</waves>
				</view>
				<view class="index-sort-box">
					<waves itemClass="butclass">
						<view class="index-sort-main" @tap="setType(4)">
							<view class="index-sort-i">
								<text class="cuIcon-creativefill"></text>
							</view>
							<view class="index-sort-text">
								付费阅读
							</view>
						</view>
					</waves>
				</view>


			</view>
		</view>
		<view class="data-box">
			<view class="shop-list grid col-2">
				<view class="no-data" v-if="shopList.length==0">
					暂时没有商品
				</view>
				<view class="shop-box" v-for="(item,index) in shopList">
					<view class="shop-main" @tap="shopInfo(item.id)">
						<view class="shop-img">
							<image :src="item.imgurl"></image>
						</view>
						<view class="shop-title">
							{{item.title}}
						</view>
						<view class="shop-info">
							<text class="shop-price text-red text-bold">{{item.price}}</text>
							<text class="cuIcon-cart"></text>
						</view>
					</view>
				</view>

				
			</view>
		</view>
		<view class="load-more" @tap="loadMore">
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
				type:1,
				
				isLoading:0,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
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
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP-WEIXIN
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
					"type":that.type
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.shopList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
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
				    url: '../contents/shopinfo?sid='+sid
				});
			}
		},
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
