<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					开通或续期VIP
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="vip-box" v-for="(item,index) in vipTypeList" :key="index">
				<view class="vip-maim">
					<view class="bg-gradual-blue text-center shadow-blur">
						<view class="text-lg text-bold">{{item.name}}<text class="text-red margin-left">{{item.price}}{{currencyName}}</text></view>
						<view class="margin-top-sm text-Abc">{{item.intro}}</view>
						<view class="margin-top-sm text-yellow" v-if="item.giftDay>0">额外赠送{{item.giftDay}}天</view>
						<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="toBuyVIPpackage(item.id)">立即购买</view>
					</view>
				</view>
			</view>
			<view class="vip-box">
				<view class="vip-maim">
					<view class="bg-gradual-orange padding radius text-center shadow-blur">
						<view class="text-lg text-bold">永久VIP<text class="text-black margin-left">{{vipPrice*vipDay}}{{currencyName}}</text></view>
						<view class="margin-top-sm text-Abc">享受永久VIP特权，并获取高亮VIP头衔</view>
						<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="toBuyVip(vipDay)">立即购买</view>
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
				isLoading:0,
				vipDiscount:0,
				vipPrice:0,
				vipDay:0,
				scale:0,
				isIOS: 0,
				vipTypeList:[],
			}
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.getVipInfo();
			that.getVipTypeList();
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.currencyName = that.$API.getCurrencyName();
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
			getVipTypeList(){
				var that = this;
				that.$Net.request({
					url: that.$API.vipTypeList(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.vipTypeList=res.data.data
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
							that.vipDiscount=res.data.data.vipDiscount;
							that.vipPrice=res.data.data.vipPrice;
							that.scale=res.data.data.scale;
							that.vipDay=res.data.data.vipDay;
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
			//原本的按天购买VIP
			toBuyVip(day){
				var that = this;
				var token = "";
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
				}
				var data = {
					"day":day,
					"token":token
				}
				var tips = '确定要购买'+day+'天VIP吗';
				if(day == that.vipDay){
					tips = '确定要购买永久VIP吗';
				}
				uni.showModal({
					title: tips,
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							
							that.$Net.request({
								url: that.$API.buyVIP(),
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
										
										var timer = setTimeout(function() {
											that.back();
											clearTimeout('timer')
										}, 1000)
									}else{
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
				
			},
			//按套餐购买VIP
			toBuyVIPpackage(id){
				var that = this;
				var token = "";
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
				}
				var data = {
					"id":id,
					"token":token
				}
				uni.showModal({
					title: '确定要购买该套餐吗',
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							
							that.$Net.request({
								url: that.$API.buyVIPpackage(),
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
										
										var timer = setTimeout(function() {
											that.back();
											clearTimeout('timer')
										}, 1000)
									}else{
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
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
				
				
			},
			tovipDiscount(num){
				if(Number(num)<=0){
					return 0;
				}else{
					num = num.toString();
					num = num.replace("0.","");
					return num;
				}
				
			}
		},
	}
</script>

<style>
</style>
