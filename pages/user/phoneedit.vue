<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					手机号设置
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="userEdit">
					<button class="cu-btn round bg-blue">保存</button>
				</view>
				<!--  #endif -->
				
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">用户名</view>
				<input name="input" disabled="disabled" :value="name"></input>
			</view>
			<view class="cu-form-group" margin-top>
				<view class="login-area margin-right-sm" @tap="showArea=!showArea">
					<text class="login-area-text">{{areaCode}}</text><text class="cuIcon-triangledownfill"></text>
					<view class="login-area-list" v-if="showArea">
						<view class="login-area-list-search">
							<input name="input" v-model="searchArea" placeholder="搜索国家/地区"></input>
						</view>
						<scroll-view class="login-area-list-concent" scroll-y>
							<block v-if="searchArea==''">
								<view class="login-area-box" v-for="(item,index) in areaList" :key="index" @tap="setArea(item.code)">
									<text class="area-code">{{item.code}}</text>
									<text class="area-text">{{item.text}}</text>
								</view>
							</block>
							<block v-else>
								<view class="login-area-box" v-for="(item,index) in areaList" :key="index" @tap="setArea(item.code)" v-if="item.text.indexOf(searchArea)!=-1||item.code.indexOf(searchArea)!=-1">
									<text class="area-code">{{item.code}}</text>
									<text class="area-text">{{item.text}}</text>
								</view>
							</block>
						</scroll-view>
					</view>
				</view>
				<input placeholder="请输入新手机号" v-model="phone" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">验证码</view>
				<input placeholder="填写新手机号验证码" v-model="code" name="input"></input>
				<view class="sendcode text-blue" v-if="show" @tap="SMSCode">发送</view>
				<view class="sendcode text-gray" v-if="!show">{{ times }}s</view>
			</view>
			<!--  #ifdef MP -->
			<view class="post-update bg-blue" @tap="userEdit">
				<text class="cuIcon-upload"></text>
			</view>
			<!--  #endif -->
			
			
		</form>
		<view class="cu-modal" :class="modalName=='kaptcha'?'show':''">
			<view class="cu-dialog kaptcha-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">操作验证</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close"></text>
					</view>
				</view>
				<view class="kaptcha-form">
					<view class="kaptcha-image">
						<image :src="kaptchaUrl" mode="widthFix" @tap="reloadCode()"></image>
					</view>
					<view class="kaptcha-input">
						<input name="input" v-model="verifyCode" placeholder="请输入验证码"></input>
						<view class="cu-btn bg-blue" @tap="SMSCode">确定</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	import area from '../../utils/area.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
			AppStyle:this.$store.state.AppStyle,
				
				uid:0,
				name:'',
				phone:'',
				code:'',
				times: 60,
				show:true,
				areaList:area.area,
				areaCode:"+86",
				showArea:false,
				searchArea:"",
				
				modalName:null,
				kaptchaUrl:"",
				verifyCode:"",
				verifyLevel:0,

				
				token:'',
				styleIndex:""
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			
			that.getCacheInfo();
			that.kaptchaUrl = that.$API.getKaptcha();
			that.getConfig();
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.getCacheInfo();
			that.styleIndex = that.$API.GetStyleIndex();
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			reloadCode(){
				var that = this;
				var kaptchaUrl = that.$API.getKaptcha();
				var num=Math.ceil(Math.random()*10);
				kaptchaUrl += "?"+num;
				that.kaptchaUrl = kaptchaUrl;
			},
			getConfig() {
				var that = this;
				if(localStorage.getItem('AppInfo')){
					try{
						var AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
						that.verifyLevel = AppInfo.verifyLevel;
						that.isEmail = AppInfo.isEmail;
					}catch(e){
						console.log(e);
					}
					
				}
			},
			hideModal(e) {
				this.modalName = null
			},
			getCacheInfo(){
				var that = this;
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					that.uid=userInfo.uid;
					that.name=userInfo.name;
					that.token=userInfo.token;
				}
			},
			userEdit() {
				var that = this;
				if (that.phone == "" || that.code =="") {
					uni.showToast({
					    title:"请完成表单填写",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
			
				var data = {
					uid:that.uid.toString(),
					name:that.name,
					phone:that.areaCode + that.phone,
					code:that.code,
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.userEdit(),
					data:{
						"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							//保存用户信息
							if(that.password!=""){
								localStorage.removeItem('userinfo');
								localStorage.removeItem('token');
								var timer = setTimeout(function() {
									var styleIndex = that.styleIndex;
									uni.redirectTo({
										url: '/pages/home/'+styleIndex
									});
									clearTimeout('timer')
								}, 1000)
							}else{
								var userInfo = JSON.parse(localStorage.getItem('userinfo'));
								userInfo.screenName=that.screenName;
								userInfo.url=that.url;
								localStorage.setItem('userinfo',JSON.stringify(userInfo));
								that.getCacheInfo();
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
						uni.stopPullDownRefresh()
					}
				})
			},

			getCode() {
			  this.show = false
			  this.timer = setInterval(()=>{
				this.times--
				if(this.times<=0){
				  this.show = true;
				  clearInterval(this.timer);
				  this.times = 60;
				}
			  },1000)
			},
			SMSCode() {
				var that = this;
				if (that.phone == "") {
					uni.showToast({
						title:"请输入手机号",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(that.verifyLevel>0){
					if (that.verifyCode == "") {
						that.modalName = 'kaptcha'
						return false
					}
				}
				var data = {
					'phone':that.phone,
					'verifyCode':that.verifyCode,
					"area":that.areaCode,
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.sendSMS(),
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
							that.getCode();
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
						uni.stopPullDownRefresh()
					}
				})
			},
		}
	}
</script>

<style>
</style>
