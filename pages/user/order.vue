<template>
	<view>
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
			只显示最近30条记录，请及时保存信息
		</view>
		<view class="no-data" v-if="orderList.length==0">
			暂时没有数据
		</view>
		<view class="order-box"  v-for="(item,index) in orderList">
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
					<text class="text-blue" @tap="toInfo(item.shopInfo)">查看收费内容</text>
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
				
				isLoading:0,
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
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
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
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
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
				Net.request({
					url: API.orderList(),
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
				    url: '../contents/shopinfo?sid='+sid
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
					    url: '../contents/shoptext?sid='+data.id
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
			}

		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
