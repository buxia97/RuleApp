<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					售出的订单
				</view>
				<view class="action">
					<!-- <text class="cuIcon-search"></text> -->
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<!-- <view class="text-tips margin-top text-center text-gray text-sm">
			只显示最近30条记录，请及时处理
		</view> -->
		<view class="no-data" v-if="orderList.length==0">
			暂时没有数据
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
					<text class="text-red">{{item.shopInfo.price}} 积分</text>
					<text class="text-green margin-left" @tap="toUser(item.userEmail)">联系用户</text>
					<text class="text-blue" v-if="item.shopInfo.type==1" @tap="addressInfo(item.address)">查看用户地址</text>
				</view>
			</view>
		</view>
		<view class="load-more" @tap="loadMore" v-if="orderList.length>0">
			<text>{{moreText}}</text>
		</view>
		
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">用户地址信息</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					{{address}}
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='Modal1'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">用户联系信息</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<text class="text-blue" @tap="ToCopy(userEmail)">{{userEmail}}</text>
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
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				
				isLoad:0,
				token:"",
				orderList:[],
				
				address:"",
				userEmail:"",
				modalName: null,
				
				page:1,
				moreText:"加载更多",
				
				isLoading:0,
			}
		},
		onPullDownRefresh(){
			var that = this;
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
			if(localStorage.getItem('token')){
				that.token=localStorage.getItem('token');
			}
			that.getOrderList(false);
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
			getType(i){
				var arr = ["实体商品","源码","软件工具","付费阅读"];
				return arr[i-1];
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getOrderList(true);
			},
			getOrderList(isPage){
				var that = this;
				var page = that.page;
				if(isPage){
					page++;
				}
				var data = {
					"limit":8,
					"page":page,
					"token":that.token
				}
				Net.request({
					url: API.orderSellList(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						that.moreText="加载更多";
						//console.log(JSON.stringify(res));
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								if(isPage){
									that.page++;
									that.orderList = that.orderList.concat(list);
								}else{
									that.orderList = list;
								}
								
							}else{
								that.moreText="没有更多数据了";
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
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
			addressInfo(text){
				var that = this;
				that.address = text;
				this.modalName ="Modal";
			},
			toUser(text){
				var that = this;
				if(!text||text==""){
					uni.showToast({
						title: "该用户未配置邮箱或已失效",
						icon: 'none'
					})
					return false;
					
				}
				that.userEmail = text;
				this.modalName ="Modal1";
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
			}

		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
