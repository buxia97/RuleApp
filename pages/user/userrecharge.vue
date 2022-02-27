<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					在线充值
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box userrecharge">
			<view class="userrecharge-type">
				<!--  #ifdef H5 || APP-PLUS -->
				<text class="cu-btn text-blue radius" @tap="toPayType(0)" :class="payType=='0'?'active':''">支付宝</text>
				<!--  #endif -->
				<!--  #ifdef MP-WEIXIN || APP-PLUS -->
				<text class="cu-btn text-blue radius" @tap="toPayType(1)" :class="payType=='1'?'active':''">微信支付</text>
				<!--  #endif -->
			</view>
			<block v-if="isToPay==0">
				<view class="userrecharge-form">
					<input placeholder="请输入充值金额(￥),最低5元" name="input" v-model="num"></input>
					<button class="cu-btn bg-yellow radius" @tap="pay">确定充值</button>
				</view>
			</block>
			<block v-if="isToPay==1">
				<view class="userrecharge-code">
					<image :src="codeImg"></image>
				</view>
				<view class="userrecharge-btn">
					<text class="cu-btn bg-cyan radius" @tap="dtImg">保存二维码</text>
					<text class="cu-btn bg-yellow radius" @tap="toAlipay()">打开支付宝</text>
				</view>
			</block>
			
			<view class="userrecharge-intro">
				<view class="userrecharge-intro-title">
					充值注意：
				</view>
				<view class="userrecharge-intro-text">
					1.如果支付宝未成功开启，可尝试保存二维码再进行扫码支付，部分设备可能无权限打开支付宝。
				</view>
				<view class="userrecharge-intro-text">
					2.充值金额与网站积分的比例为<text class="text-red text-bold"> 1:100 </text>，最低充值金额<text class="text-red text-bold"> 5 </text>元。
				</view>
				<view class="userrecharge-intro-text">
					3.如果充值金额未到账，请查看账户中的充值记录，并立即反馈。
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
				
				payType:0,
				isToPay:0,
				num:"",
				
				codeImg:'',
				alipayUrl:"",
				
				
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
			}
			that.isToPay = 0;
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP-WEIXIN
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			toPayType(i){
				var that = this;
				that.payType = i;
				that.num="";
				that.isToPay=0;
			},
			isPositiveInteger(s){
			     var re = /^[0-9]+$/ ;
			     return re.test(s)
			},
			pay(){
				var that = this;
				
				if(!that.isPositiveInteger(that.num)||that.num==''){
					uni.showToast({
						title: "充值金额只能为正整数",
						icon: 'none'
					});
					return false;
				}
				if(that.num<1){
					uni.showToast({
						title: "最低充值金额5元",
						icon: 'none'
					});
					return false;
				}
				
				
				uni.showModal({
				    title: '确定要充值该金额吗？',
				    success: function (res) {
				        if (res.confirm) {
							if(that.payType==0){
								that.aliPay();
							}
				            if(that.payType==1){
				            	that.wxPay();
				            }
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			aliPay(){
				uni.showLoading({
					title: "加载中"
				});
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"num":that.num,
					"token":token
				}
				Net.request({
					url: API.scancodePay(),
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
						if(res.data.code==1){
							var url = res.data.data;
							that.alipayUrl = "alipays://platformapi/startapp?appId=20000067&url="+encodeURI(url);
							that.codeImg = API.qrCode()+"?codeContent="+url;
							that.isToPay = 1;
							that.toAlipay();
						}else{
							uni.showToast({
								title: "支付接口异常",
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
			wxPay() {
				uni.showLoading({
					title: "加载中"
				});
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"price":that.num,
					"token":token
				}
				Net.request({
					url: API.wxPay(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(data) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						console.log(JSON.stringify(data.data))
						uni.requestPayment({
							provider: 'wxpay',
							orderInfo: JSON.stringify(data.data), //微信、支付宝订单数据
							success: function(res) {
								uni.showToast({
									title: "充值成功",
									icon: 'none'
								})
								that.isToPay = 0;
								that.num = "";
							},
							fail: function(err) {
								uni.showToast({
									title:JSON.stringify(err),
									duration:1000,
									icon:'none'
								})
								
							}
						});
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
				});
			},
			toAlipay(){
				var that = this;
				var url = that.alipayUrl;
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			dtImg(){
				var that = this;
				var url = that.codeImg;
				// #ifdef APP-PLUS
				uni.downloadFile({
					url: url,
					success: (res) =>{
						if (res.statusCode === 200){
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: function() {
									uni.showToast({
										title: "保存成功",
										icon: "none"
									});
								},
								fail: function() {
									uni.showToast({
										title: "保存失败，请稍后重试",
										icon: "none"
									});
								}
							});
						}
					}
				})
				// #endif
				// #ifdef H5
				uni.showToast({
					title: "请长按二维码图片保存",
					icon: "none"
				});
				// #endif
			}

		},
		components: {
			waves
		}
	}
</script>

<style>
@import "../../static/base.css";
page{
	background-color: #fff;
}
</style>
