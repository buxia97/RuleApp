<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					确认购买
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="shop-order" style="margin-top:10upx;">
			<view class="shop-order-concent" v-if="shopinfo!=null">
				<view class="shop-order-img">
					<image :src="shopinfo.imgurl" mode="widthFix"></image>
				</view>
				<view class="shop-order-title">
					{{shopinfo.title}}
				</view>
			</view>
			<view class="shop-order-form" v-if="shopinfo!=null">
				<view class="cu-form-group margin-top">
					<view class="title">商品价格</view>
					<view class="action">

						<text class="text-red text-bold text-lg margin-right-xs">
							<block v-if="isvip==1">
								{{parseInt(shopinfo.price * shopinfo.vipDiscount)}}
							</block>
							<block v-else>
							{{shopinfo.price}}
							</block>
						</text>
						{{currencyName}}
						
					</view>
				</view>
				<view class="cu-form-group">
					<view class="title">剩余数量</view>
					<view class="action">
						<text class="text-blue text-bold text-lg margin-right-xs">
							{{shopinfo.num}}
						</text>
					</view>
				</view>
				
				<view class="cu-form-group  margin-top">
					<view class="title">我的资产</view>
					<view class="action">
						<text class="text-blue text-bold text-lg margin-right-xs">
							{{assets}}
						</text>{{currencyName}}
					</view>
				</view>

				<view class="shop-order-btn padding flex flex-direction">
					<button class="cu-btn bg-gradual-orange lg" @tap="shopBuy()">确认购买</button>
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
	</view>
</template>

<script>
	import mpHtml from '@/components/mp-html/mp-html'
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				switchA: false,
				userInfo:"",
				
				sid:0,
				
				vipDiscount:0,
				
				
				shopinfo:null,
				vipPrice:0,
				scale:0,
				isvip:0,
				vip:0,
				currencyName:"",
				
				isLoading:0,
				isIOS: 0,
				assets:0,
				
				
				
			}
		},
		components: {
		  mpHtml,
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
		},
		
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.getVipInfo();
			that.userStatus();
			
		},
		onPullDownRefresh(){
			var that = this;
			that.getInfo(that.sid);
		},
		onLoad(res) {
			var that = this;
			that.currencyName = that.$API.getCurrencyName();
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
			if(res.sid){
				that.sid = res.sid;
				that.getInfo(that.sid);
			}
			// #ifdef APP-PLUS
			const platform = uni.getSystemInfoSync().platform;
			this.isIOS = (platform === 'ios') ? 1 : 0;
			console.log('当前平台：', platform, 'isIOS=', this.isIOS);
			// #endif
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			getInfo(sid){
				var that = this;
				var token = "";
				if(localStorage.getItem('token')){
					token=localStorage.getItem('token');
				}
				var data = {
					"key":that.sid,
					"token":token
				}
				that.$Net.request({
					url: that.$API.shopInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						uni.stopPullDownRefresh();
						if(res.data.value){
						}
						

						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
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
			quillHtml(text){
				var that = this;
				text = that.replaceAll(text,"hljs","hl");
				text = that.replaceAll(text,"ql-syntax","hl-pre");
				
				text = that.markExpand(text);
				return text;
			},
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},
			SwitchA(e) {
				this.switchA = e.detail.value
			},
			getVipInfo(){
				var that = this;
				that.$Net.request({
					url: that.$API.getVipInfo(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							//that.vipDiscount=res.data.data.vipDiscount;
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
				that.$Net.request({
					
					url: that.$API.userStatus(),
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
							that.assets = res.data.data.assets;
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
			getInfo(sid){
				var that = this;
				var data = {
					"key":that.sid,
				}
				that.$Net.request({
					url: that.$API.shopInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.shopinfo = res.data;
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
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
			shopBuy(){
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
							url: '../user/login'
						});
						clearTimeout('timer')
					}, 1000)
					return false
				}
				var data = {
					"token":token,
					"sid":that.sid
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					url: that.$API.buyShop(),
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
							
							
							//跳转订单页面
							var timer = setTimeout(function() {
								uni.redirectTo({
								    url: '/pages/user/order'
								});
								clearTimeout('timer')
							}, 1000)
						}else{
							if(res.data.msg=="购买实体商品前，需要先设置收货地址"){
								var timer = setTimeout(function() {
									uni.redirectTo({
									    url: '/pages/user/address'
									});
									clearTimeout('timer')
								}, 1000)
							}
							if(res.data.msg=="当前资产不足，请充值"){
								
								var url = "/pages/user/userrecharge";
								if(that.isIOS == 1){
									url = "/pages/user/applePay";
								}
								uni.navigateTo({
								    url: url
								});
							}
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
					}
				})
			},
		}
	}
</script>

<style>
</style>
