<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					商品详情
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="info" style="margin-top:10upx;">
			<view class="shopinfo-img">
				<image :src="imgurl" mode="widthFix" @tap="previewImage(imgurl)"></image>
			</view>
			<view class="shopinfo-title">
				{{title}}
			</view>
			<view class="shopinfo-info">
				<text class="text-sm text-right text-gray">剩余数量：{{num}}</text>
			</view>
			<view class="info-content">
				<!-- <joMarkdown :nodes="markdownData"></joMarkdown> -->
				
				<mp-html :content="html" selectable="true" show-img-menu="true" lazy-load="true" ImgCache="true"/>
			</view>
		</view>
		<view class="shopinfo-bar grid col-2" v-if="isBuy==0">
			<view class="shopinfo-price">
				{{price}} 积分
			</view>
			<view class="shopinfo-btn">
				<text class="cu-btn bg-blue radius" @tap="shopBuy">立即购买</text>
			</view>
		</view>
		<view class="shopinfo-bar grid col-2" v-if="isBuy==1">
			<view class="shopinfo-price">
				已购买
			</view>
			<view class="shopinfo-btn">
				<text class="cu-btn bg-blue radius" @tap="toInfo">查看详情</text>
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
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				sid:0,
				title:"",
				html:"",
				markdownData: {},
				price:"",
				num:"",
				imgurl:"",
				
				isLoading:0,
				
				isBuy:0,
				shopinfo:{},
				
				
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
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
			
		},
		onPullDownRefresh(){
			var that = this;
		},
		onLoad(res) {
			var that = this;
			
			// #ifdef APP-PLUS || MP-WEIXIN
			that.NavBar = this.CustomBar;
			// #endif
			if(res.sid){
				that.sid = res.sid;
				that.getInfo(that.sid);
				that.isBuyShop(that.sid);
			}
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			getInfo(sid){
				var that = this;
				var data = {
					"key":that.sid,
				}
				Net.request({
					url: API.shopInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						uni.stopPullDownRefresh();
						that.shopinfo = res.data;
						that.title = res.data.title;
						that.type = res.data.type;
						that.html = res.data.text;
						that.imgurl = res.data.imgurl;
						that.price = res.data.price;
						that.num = res.data.num;
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
			previewImage(image) {
				var imgArr = [];
				imgArr.push(image);
				//预览图片
				uni.previewImage({
					urls: imgArr,
					current: imgArr[0]
				});
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
				Net.request({
					url: API.buyShop(),
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
			},
			toInfo(){
				var that = this;
				var data = that.shopinfo;
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
			isBuyShop(sid){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"sid":that.sid,
					"token":token
				}
				Net.request({
					url: API.isBuyShop(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.isBuy=1;
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
		}
	}
</script>

<style>
	
@import "../../static/base.css";
</style>
