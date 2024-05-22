<template>
	<view class="user" :class="AppStyle">
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
			<view class="vip-box">
				<view class="vip-maim">
					<view class="bg-gradual-blue text-center shadow-blur">
						<view class="text-lg text-bold">月付VIP<text class="text-red margin-left">{{vipPrice*30}}积分</text></view>
						<view class="margin-top-sm text-Abc">为您的账号获得30天VIP期限</view>
						<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="toBuyVip(30)">立即购买</view>
					</view>
				</view>
			</view>
			<view class="vip-box">
				<view class="vip-maim">
					<view class="bg-gradual-blue text-center shadow-blur">
						<view class="text-lg text-bold">季付VIP<text class="text-red margin-left">{{vipPrice*90}}积分</text></view>
						<view class="margin-top-sm text-Abc">获得90天VIP期限</view>
						<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="toBuyVip(90)">立即购买</view>
					</view>
				</view>
			</view>
			<view class="vip-box">
				<view class="vip-maim">
					<view class="bg-gradual-blue text-center shadow-blur">
						<view class="text-lg text-bold">年付VIP<text class="text-red margin-left">{{vipPrice*365}}积分</text></view>
						<view class="margin-top-sm text-Abc">获得365天VIP期限</view>
						<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="toBuyVip(365)">立即购买</view>
					</view>
				</view>
			</view>
			<view class="vip-box">
				<view class="vip-maim">
					<view class="bg-gradual-orange padding radius text-center shadow-blur">
						<view class="text-lg text-bold">永久VIP<text class="text-black margin-left">{{vipPrice*vipDay}}积分</text></view>
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
				scale:0,
				vipDay:0
			}
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.getVipInfo();
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
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
							that.vipDay = res.data.data.vipDay;
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
				uni.showModal({
					title: '确定要购买'+day+'天VIP吗',
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
