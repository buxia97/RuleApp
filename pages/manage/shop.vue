<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					商品管理
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"  @input="searchTag"></input>
				</view>
			</view>
			<view class="search-type grid col-2">
				<view class="search-type-box" @tap="toType(0)" :class="status==0?'active':''">
					<text>待审核</text>
				</view>
				<view class="search-type-box" @tap="toType(1)" :class="status==1?'active':''">
					<text>已上架</text>
				</view>
				<!-- <view class="search-type-box" @tap="toType(2)" :class="status==2?'active':''">
					<text>已禁用</text>
				</view> -->
			</view>
			<view class="no-data" v-if="shopList.length==0">
				暂时没有商品
			</view>
			<view class="shop-list grid col-2">
				<view class="shop-box" v-for="(item,index) in shopList" :key="index">
					<view class="shop-main">
						<text class="bg-orange shop-status" v-if="item.status==0">待审核</text>
						<text class="bg-green shop-status" v-if="item.status==1">已上架</text>
						<text class="bg-red shop-status" v-if="item.status==2">已禁用</text>
						<view class="shop-img" @tap="editShop(item.id)">
							<image :src="item.imgurl" mode="widthFix"></image>
						</view>
						<view class="shop-title">
							{{item.title}}
						</view>
						<view class="shop-info text-center">
							<text class="shop-btn text-blue" v-if="item.status==0" @tap="getUserInfo(item.uid)">用户</text>
							<text class="shop-btn text-yellow" v-if="item.status==0" @tap="auditShop(item.id)">审核</text>
							<text class="shop-btn text-red" @tap="deleteShop(item.id)" v-if="group=='administrator'">删除</text>
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
				uid:0,
				token:"",
				
				shopList:[],
				isLoad:0,
				page:1,
				moreText:"加载更多",
				type:1,
				searchText:"",
				status:0,
				
				isLoading:0,
				group:"",
				
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
			
			plus.navigator.setStatusBarStyle("dark")
			
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.uid = that.userInfo.uid;
				that.group = that.userInfo.group;
				
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.isLoad=0;
			that.page=1;
			
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
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getShopList(true);
				
			},
			getShopList(isPage){
				var that = this;
				var uid= 0;
				if(localStorage.getItem('userinfo')){
					
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					uid = userInfo.uid;
					
				}else{
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					var timer = setTimeout(function() {
						uni.navigateTo({
							url: '/pages/user/login'
						});
						clearTimeout('timer')
					}, 1000)
					return false
				}
				var data = {
					"status":that.status
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
						"searchKey":that.searchText,
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
			deleteShop(sid) {
				var that = this;
				var token= "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}else{
				uni.showToast({
				    title:"请先登录",
					icon:'none',
					duration: 1000,
					position:'bottom',
				});
				var timer = setTimeout(function() {
					uni.navigateTo({
						url: '/pages/user/login'
					});
					clearTimeout('timer')
				}, 1000)
				return false
				}
				var data = {
					key: sid,
					token: token,
				}
				uni.showModal({
					title: '确定要删除此商品吗?',
					content: ' ',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							Net.request({
								
								url: API.deleteShop(),
								data:data,
								header:{
									'Content-Type':'application/x-www-form-urlencoded'
								},
								method: "get",
								dataType: 'json',
								success: function(res) {
									setTimeout(function () {
										uni.hideLoading();
									}, 1000);
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									})
									if(res.data.code==1){
										that.page=1;
										that.getShopList();
									}
								},
								fail: function(res) {
									setTimeout(function () {
										uni.hideLoading();
									}, 1000);
									uni.showToast({
										title: "网络开小差了哦",
										icon: 'none'
									})
									uni.stopPullDownRefresh()
								}
							})
						}
					}
				});
				
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getShopList();
			
			},
			toShop(sid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/addshop'
				});
			},
			editShop(sid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/addshop?type=edit'+'&sid='+sid
				});
			},
			auditShop(sid){
				var that = this;
				var token= "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}else{
				uni.showToast({
				    title:"请先登录",
					icon:'none',
					duration: 1000,
					position:'bottom',
				});
				var timer = setTimeout(function() {
					uni.navigateTo({
						url: '/pages/user/login'
					});
					clearTimeout('timer')
				}, 1000)
				return false
				}
				var data = {
					key: sid,
					token: token,
				}
				uni.showModal({
					title: '确定审核通过该商品吗?',
					content: ' ',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							Net.request({
								
								url: API.auditShop(),
								data:data,
								header:{
									'Content-Type':'application/x-www-form-urlencoded'
								},
								method: "get",
								dataType: 'json',
								success: function(res) {
									setTimeout(function () {
										uni.hideLoading();
									}, 1000);
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									})
									if(res.data.code==1){
										that.page=1;
										that.getShopList();
									}
								},
								fail: function(res) {
									setTimeout(function () {
										uni.hideLoading();
									}, 1000);
									uni.showToast({
										title: "网络开小差了哦",
										icon: 'none'
									})
									uni.stopPullDownRefresh()
								}
							})
						}
					}
				});
			},
			toType(i){
				var that = this;
				that.status=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				that.getShopList(false);
			},
			getUserInfo(uid){
				var that = this;
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.getUserInfo(),
					data:{
						"key":uid
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
							var data = res.data.data;
							that.toUserContents(data);
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
			
		},
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
