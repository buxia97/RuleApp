<template>
	<view :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					我的订单
				</view>
				<view class="action">
					<!-- <text class="cuIcon-search"></text> -->
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="text-tips margin-top text-center text-gray text-sm">
			只显示最近60条记录，请及时保存信息
		</view>
		<view class="no-data" v-if="orderList.length==0">
			<text class="cuIcon-text"></text>暂时没有数据
		</view>
		<view class="order-box"  v-for="(item,index) in orderList" :key="index">
			<view class="order-main">
				<view class="order-info">
					<text class="order-id">订单ID：{{item.id}}{{item.created}}</text>
					<text class="order-type bg-blue" v-if="item.shopInfo">{{getType(item.shopInfo.type)}}</text>
				</view>
				<view class="order-shop" @tap="shopInfo(item.shopInfo.id)" v-if="item.shopInfo">
					{{item.shopInfo.title}}
					<view class="order-time">{{formatDate(item.created)}}</view>
				</view>
				<view class="order-shop"v-if="!item.shopInfo">
					[该商品已失效！]
					<view class="order-time">{{formatDate(item.created)}}</view>
				</view>
				<view class="order-btn" v-if="item.shopInfo">
					<text class="text-red">{{item.shopInfo.price}} {{currencyName}}</text>
					<text class="text-green margin-left" @tap="getUserInfo(item.shopInfo.uid)">联系商家</text>
					<text class="text-blue" @tap="toInfo(item.shopInfo)">查看收费内容</text>
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">商户联系信息</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<text class="text-blue" @tap="ToCopy(merchantEmail)">{{merchantEmail}}</text>
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
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
			AppStyle:this.$store.state.AppStyle,
				
				
				isLoad:0,
				token:"",
				orderList:[],
				
				merchantEmail:"",
				
				modalName: null,
				isLoading:0,
				currencyName:""
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
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('token')){
				that.token=localStorage.getItem('token');
			}
			that.getOrderList();
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.currencyName = that.$API.getCurrencyName();
			
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
			getType(i){
				var arr = ["实体商品","源码","软件工具","付费阅读"];
				return arr[i-1];
			},
			getOrderList(){
				var that = this;
				var data = {
					"token":that.token
				}
				that.$Net.request({
					url: that.$API.orderList(),
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
			shopInfo(sid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/shop/shopinfo?sid='+sid
				});
			},
			toInfo(data){
				if(data.type==1){
					uni.showToast({
						title: "实体商品请留意快递信息",
						icon: 'none'
					})
				}else{
					uni.navigateTo({
					    url: '/pages/shop/shoptext?sid='+data.id
					});
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
			toMerchant(text){
				var that = this;
				if(!text||text==""){
					uni.showToast({
						title: "该商户无联系方式或已失效",
						icon: 'none'
					})
					return false;
					
				}
				that.merchantEmail = text;
				that.modalName = "Modal";
			},
			ToCopy(text) {
				var that = this;
				// #ifdef APP-PLUS
				uni.setClipboardData({
					data: text,
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: "复制成功"
						})
					}
				});
				// #endif
				// #ifdef H5 
				uni.showToast({ //提示
					title: "复制成功"
				})
				let textarea = document.createElement("textarea");
				textarea.value = text;
				textarea.readOnly = "readOnly";
				document.body.appendChild(textarea);
				textarea.select();
				textarea.setSelectionRange(0, text.length) ;
				
				var result = document.execCommand("copy") 
				textarea.remove();
				
				// #endif
			},
			getUserInfo(touid){
				var that = this;
				that.$Net.request({
					
					url: that.$API.getUserInfo(),
					data:{
						"key":touid
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var name = res.data.data.name;
							if(res.data.data.screenName){
								name = res.data.data.screenName;
							}else{
								name = res.data.data.name;
							}
						
							that.getPrivateChat(touid,name)
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
			getPrivateChat(touid,name){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}else{
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					uni.navigateTo({
						url: '/pages/user/login'
					});
					return false;
				}
				var data={
					"touid":touid,
					"token":token
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.getPrivateChat(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res));
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						
						if(res.data.code==1){
							var uid = that.uid;
							var chatid = res.data.data
							uni.redirectTo({
							    url: '/pages/chat/chat?uid='+uid+"&name="+name+"&chatid="+chatid
							});
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
