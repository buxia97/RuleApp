<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					我的商品
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toShop">
					<text class="cuIcon-add"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			
			<view class="all-btn">
				<view class="user-btn flex flex-direction">
					<!--  #ifdef MP -->
					<button class="cu-btn bg-blue margin-tb-sm lg" @tap="toShop">发布商品</button>
					
					<!--  #endif -->
					<button class="cu-btn bg-yellow margin-tb-sm lg" @tap="sellOrder">已售出订单</button>
				</view>
			</view>
			<view class="no-data" v-if="shopList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="shop-list">
				
				<block v-for="(item,index) in shopList" :key="index">
					<shopItem :item="item" :isAdmin="true"></shopItem>
				</block>

				
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
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				
				userInfo:null,
				uid:0,
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
			localStorage.removeItem('userShopinfo');
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.uid = that.userInfo.uid;
				
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.isLoad=0;
			that.page=1;
			that.getShopList();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
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
					"uid":uid
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.shopList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
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
							that.$Net.request({
								
								url: that.$API.deleteShop(),
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
			toShop(sid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/edit/addshop'
				});
			},
			sellOrder(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/sellorder'
				});
			},
			editShop(data){
				var that = this;
				var sid = data.id;
				var isMd = data.isMd;
				if(isMd==1){
					uni.navigateTo({
					    url: '/pages/user/addshop?type=edit'+'&sid='+sid
					});
				}else{
					//富文本编辑器
					uni.navigateTo({
						url: '/pages/edit/addshop?type=edit'+'&id='+sid
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
