<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					快捷扫码登录
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="qrcodeLogin">
			<view class="qrcodeLogin-logo">
				<image :src="logo" mode="widthFix"></image>
			</view>
			<view class="qrcodeLogin-name">
				使用 {{appname}} 扫码快捷登录
			</view>
			<view class="qrcodeLogin-code">
				<image :src="scanLoginUrl"></image>
			</view>
		</view>
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
				
				
				logo:"",
				token:"",
				appname:"",
				text:"",
				
				scanText:"",
				scanLoginUrl:"",
				
				timer:null,
				
				styleIndex:"",
				
			}
		},
		onHide() {
			var that = this;
			clearInterval(that.timer);
			that.timer = null;
		},
	
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
				that.group = that.userInfo.group;
			}else{
				that.userInfo =null;
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}else{
				that.token = "";
			}
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.text){
				that.text = res.text;
			}
			that.styleIndex = that.$API.GetStyleIndex();
			that.appname = that.$API.GetAppName();
			that.logo = that.$API.GetLogo();
			var text = that.randomString(7)+new Date().getTime();
			that.scanText = text;
			that.scanLoginUrl =that.$API.getScan()+"?codeContent="+text;
			that.timer = setInterval(function () {
				that.getScan();
			}, 3000);
			
		},
		methods:{
			back(){
				var that = this;
				clearInterval(that.timer);
				that.timer = null;
				uni.navigateBack({
					delta: 1
				});
			},
			getScan(){
			  const that = this;
			  var data = {
			    'codeContent':that.scanText
			  }
			  that.$Net.request({
			  	
			  	url: that.$API.getScanStatus(),
			  	data:data,
			  	header:{
			  		'Content-Type':'application/x-www-form-urlencoded'
			  	},
			  	method: "get",
			  	dataType: 'json',
			  	success: function(res) {
			  		
					if(res.data.code==1){
						uni.showToast({
							title: "扫码登录成功！",
							icon: 'none'
						})
						//保存用户信息
						clearInterval(that.timer);
						that.timer = null;
						
						localStorage.setItem('userinfo',JSON.stringify(res.data.data));
						localStorage.setItem('token',res.data.data.token);
						var timer = setTimeout(function() {
							var styleIndex = that.styleIndex;
							uni.redirectTo({
								url: '/pages/home/'+styleIndex
							})
							clearTimeout('timer')
						}, 1000)
					}
			  		
			  	},
			  	fail: function(res) {
			  		uni.showToast({
			  			title: "网络开小差了哦",
			  			icon: 'none'
			  		})
			  	}
			  });
			},
			randomString(e) {
			    e = e || 32;
			    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
			    a = t.length,
			    n = "";
			    for (var i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
			    return n
			},
			

		},
	}
</script>

<style>
	page{
		background-color: #fff;
	}
</style>
