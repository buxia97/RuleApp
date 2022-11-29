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
				<text class="cu-btn text-blue radius" @tap="toPayType(1)" :class="payType=='1'?'active':''">微信支付</text>
				<text class="cu-btn text-blue radius" @tap="toPayType(2)" :class="payType=='2'?'active':''">卡密充值</text>
				<text class="cu-btn text-blue radius" @tap="toPayType(3)" :class="payType=='3'?'active':''">易支付</text>
			</view>
			<block  v-if="payType==1||payType==0">
				<block v-if="isToPay==0">
					<view class="userrecharge-form">
						<input placeholder="请输入充值金额(￥),最低5元" type="number" name="input" v-model="num"></input>
						<button class="cu-btn bg-yellow radius" @tap="pay">确定充值</button>
					</view>
				</block>
				<block v-if="isToPay==1">
					<view class="userrecharge-code">
						<image :src="codeImg"></image>
					</view>
					<view class="userrecharge-btn">
						<text class="cu-btn bg-cyan radius" @tap="dtImg">保存二维码</text>
						<text class="cu-btn bg-yellow radius" v-if="payType==1" @tap="toAlipay()">打开支付宝</text>
						<text class="cu-btn bg-yellow radius" v-else @tap="toWxpay()">打开微信</text>
					</view>
				</block>
			</block>
			<block  v-if="payType==2">
				<block v-if="isToPay==0">
					<view class="userrecharge-form">
						<input placeholder="请填入充值码" name="input" type="text" v-model="num"></input>
						<button class="cu-btn bg-yellow radius" @tap="tokenPay">确定充值</button>
					</view>
				</block>
				
			</block>
			<block  v-if="payType==3">
				<view class="userrecharge-form toEpay">
					<view class="toEpayType">
						<view class="toEpayType-cur" @tap="toEpayType=!toEpayType">{{getTypeText(ePayType)}}<text class="cuIcon-triangledownfill"></text></view>
						<view class="toEpayType-main" v-if="toEpayType">
							<view @tap="setEPayType('alipay')">支付宝</view>
							<view @tap="setEPayType('wxpay')">微信</view>
							<view @tap="setEPayType('qqpay')">QQ红包</view>
						</view>
					</view>
					<input placeholder="请输入充值金额(￥),最低5元" name="input" type="text" v-model="num"></input>
					<button class="cu-btn bg-yellow radius" @tap="toEpay()">确定充值</button>
				</view>
			</block>
			<view class="userrecharge-intro" v-if="payType==1||payType==0">
				<view class="userrecharge-intro-title">
					充值注意：
				</view>
				<view class="userrecharge-intro-text">
					1.如果支付软件未成功开启，可尝试保存二维码再进行扫码支付，部分设备可能无权限打开支付宝或微信。
				</view>
				<view class="userrecharge-intro-text">
					2.充值金额与网站积分的比例为<text class="text-red text-bold"> 1:{{scale}} </text>，最低充值金额<text class="text-red text-bold"> 5 </text>元。
				</view>
				<view class="userrecharge-intro-text">
					3.如果充值金额未到账，请查看账户中的充值记录，并立即反馈。
				</view>
				<view class="userrecharge-intro-text"  v-if="payType==1">
					4.微信<text class="text-red text-bold">不支持从相册识别二维码支付</text>，如选择保存二维码支付，请将二维码上传到其它设备，再进行正常扫码支付。
				</view>
			</view>
			<view class="userrecharge-intro"  v-if="payType==2">
				<view class="userrecharge-intro-title">
					充值注意：
				</view>
				<view class="userrecharge-intro-text">
					1.请填写正确的充值码，注意空格与特殊符号。
				</view>
				<view class="userrecharge-intro-text">
					2.充值金额与网站积分的比例为<text class="text-red text-bold"> 1:{{scale}} </text>。
				</view>
				<view class="userrecharge-intro-text">
					3.充值码在进行充值操作后，将失效。
				</view>
			</view>
			<view class="userrecharge-intro" v-if="payType==3">
				<view class="userrecharge-intro-title">
					充值注意：
				</view>
				<view class="userrecharge-intro-text">
					1.易支付可选择三种交易平台，分别为支付宝，微信，QQ钱包。
				</view>
				
				<view class="userrecharge-intro-text">
					2.充值金额与网站积分的比例为<text class="text-red text-bold"> 1:{{scale}} </text>，最低充值金额<text class="text-red text-bold"> 5 </text>元。
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
				ePayType:"alipay",
				toEpayType:false,
				
				codeImg:'',
				alipayUrl:"",
				wxpayUrl:"",
				
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
			that.codeImg = "";
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
				var that = this;
				
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"num":that.num,
					"token":token
				}
				uni.showLoading({
					title: "加载中"
				});
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
				var that = this;
				
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"price":that.num,
					"token":token
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					url: API.wxPay(),
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
							var url = res.data.data.data;
							that.wxpayUrl = url;
							that.codeImg = API.qrCode()+"?codeContent="+url;
							that.isToPay = 1;
							that.toWxpay();
						}else{
							uni.showToast({
								title: "支付接口异常",
								icon: 'none'
							})
						}
						//console.log(JSON.stringify(data.data))
						
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
			tokenPay(){
				var that = this;
				
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				if(that.num==""){
					uni.showToast({
						title: "请输入充值码！",
						icon: 'none'
					})
					return false;
				}
				var data = {
					"key":that.num,
					"token":token
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					url: API.tokenPay(),
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
			toWxpay(){
				var that = this;
				var url = that.wxpayUrl;
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
				// #ifdef MP
				that.dtImg();
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
									if(that.payType==1){
										uni.showToast({
											title: "图片已保存，微信不支持相册识别支付，请通过正常扫码完成。",
											icon: "none"
										});
									}else{
										uni.showToast({
											title: "保存成功",
											icon: "none"
										});
									}
									
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
			toEpay(){
				var that = this;
				var type = that.ePayType;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				if(!that.isPositiveInteger(that.num)||that.num==''){
					uni.showToast({
						title: "充值金额只能为正整数",
						icon: 'none'
					});
					return false;
				}
				if(that.num<5){
					uni.showToast({
						title: "最低充值金额5元",
						icon: 'none'
					});
					return false;
				}
				var data = {
					"money":that.num,
					"device":"mobile",
					"type":type,
					"token":token
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					url: API.EPay(),
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
							var payapi = res.data.payapi;
							var payurl="";
							if(res.data.data.payurl){
								payurl = res.data.data.payurl;
								var prefix= payurl.substring(0,2);
								if(prefix=="./"){
									payurl = payurl.replace("./","");
									payurl = payapi + payurl;
								}
							}
							if(res.data.data.qrcode){
								payurl = res.data.data.qrcode;
							}
							
							// #ifdef APP-PLUS
							plus.runtime.openURL(payurl) 
							// #endif
							// #ifdef H5
							window.open(payurl)
							// #endif
							
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
			setEPayType(text){
				var that = this;
				that.ePayType = text;
				that.toEpayType=false;
			},
			getTypeText(text){
				var that = this;
				if(text=="alipay"){
					return "支付宝"
				}
				if(text=="wxpay"){
					return "微信支付"
				}
				if(text=="qqpay"){
					return "QQ钱包"
				}
			}

		},
		components: {
			waves
		}
	}
</script>

<style>
page{
	background-color: #fff;
}
</style>
