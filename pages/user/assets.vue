<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					我的账户
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="myAssets">
				<text class="text-red myAssets-num">{{assets}}</text>积分
			</view>
			<view class="myAssets-btn">
				<text class="cu-btn bg-blue radius" @tap="userrecharge">在线充值</text>
				<text class="cu-btn bg-red radius" @tap="userwithdraw">快捷提现</text>
			</view>
			<view class="vip-maim" v-if="isvip==1">
				<view class="bg-gradual-red text-center shadow-blur">
					<view class="text-lg text-bold">欢迎您，尊贵的VIP用户</view>
					<view class="margin-top-sm text-Abc">正在享受全站商品{{tovipDiscount(vipDiscount)}}折优惠，及VIP专属头衔！</view>
					<view class="margin-top-sm text-Abc">到期时间：{{formatDate(vip)}}</view>
					<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="buyvip">立即续期</view>
				</view>
			</view>
			<view class="vip-maim" v-else>
				<view class="bg-gradual-blue text-center shadow-blur">
					<view class="text-lg text-bold">您当前不是VIP用户</view>
					<view class="margin-top-sm text-Abc">开通VIP，可享受全站商品{{tovipDiscount(vipDiscount)}}折优惠<text class="cuIcon-question"  @tap="showModal" data-target="DialogModal1"></text></view>
					<view class="cu-btn radius margin-top bg-black  shadow-blur" @tap="buyvip">立即开通</view>
				</view>
			</view>
		</view>
		<view class="text-tips margin-top text-center text-gray text-sm">
			只显示最近30条资产记录
		</view>
		<view class="no-data" v-if="orderList.length==0">
			暂时没有数据
		</view>
		<view class="order-box"  v-for="(item,index) in orderList" :key="index">
			<view class="order-main">
				<view class="order-info">
					<text class="order-id">订单ID：{{item.outTradeNo}}</text>
					<text class="order-type bg-blue" v-if="item.shopInfo">{{getType(item.shopInfo.type)}}</text>
				</view>
				<view class="order-shop">
					{{item.subject}}
					<view class="order-time">{{formatDate(item.created)}}</view>
				</view>
				<view class="order-btn">
					<text class="text-red">{{item.totalAmount}}积分</text>
					<text class="text-yellow pay-status" v-if="item.status==0">未支付</text>
					<text class="text-green pay-status" v-if="item.status==1">已支付</text>
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
		<view class="cu-modal" :class="modalName=='DialogModal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">VIP开通说明</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl text-left">
					<view>开通VIP后，在有效期结束之前，您将享受全站所有商品（无论类型）的对应折扣优惠。但因为商品采用积分结算，而积分仅能为整数，所以在进行折扣计算时，将默认已整数结果进行计算。所以，对于VIP用户，小于或等于1积分的商品，将视为免费。价格大于1的商品，将省略小数点后部分。</view>
				</view>
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
				
				
				userInfo:null,
				token:"",
				assets:"",
				isvip:0,
				vip:0,
				
				orderList:[],
				
				isLoading:0,
				
				modalName: null,
				
				vipDiscount:0,
				vipPrice:0,
				scale:0
				
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
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
				that.userStatus();
				that.getOrderList();
			}
			that.getVipInfo();
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
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
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
			userrecharge(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/userrecharge'
				});
				
			},
			userwithdraw(){
				uni.navigateTo({
				    url: '/pages/user/userwithdraw'
				});
			},
			buyvip(){
				uni.navigateTo({
				    url: '/pages/user/buyvip'
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
						if(res.data.code==1){
							that.assets = res.data.data.assets;
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
			getOrderList(){
				var that = this;
				var data = {
					"token":that.token
				}
				Net.request({
					url: API.payLogList(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
							
								that.orderList = list;
								
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
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
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
