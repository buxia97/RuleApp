<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					用户注册
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="user-form">
			<form>
				<view class="cu-form-group">
					<input name="input" v-model="name" placeholder="请输入用户名(必填)"></input>
				</view>
				<view class="cu-form-group">
					<input name="input" v-model="mail" placeholder="请输入邮箱(必填)"></input>
				</view>
				<view class="cu-form-group" v-if="isEmail>0">
					<input name="input" v-model="code" placeholder="请输入验证码"></input>
					<view class="sendcode text-blue" v-if="show" @tap="RegSendCode">发送</view>
					<view class="sendcode text-gray" v-if="!show">{{ times }}s</view>
				</view>
				<view class="cu-form-group">
					<input name="input" placeholder="请输入密码" type="password" v-if="!pwdShow" v-model="password"></input>
					<input name="input" placeholder="请输入密码" type="text" v-if="pwdShow" v-model="password"></input>
					<text class="active cuIcon-attentionfill text-black" @tap="pwdShow=!pwdShow" v-if="password!=''&&pwdShow"></text>
					<text class="active cuIcon-attentionfill text-gray" @tap="pwdShow=!pwdShow" v-if="password!=''&&!pwdShow"></text>
				</view>
				<view class="cu-form-group">
					<input name="input" placeholder="再次输入密码" type="password" v-if="!rePwdShow" v-model="repassword"></input>
					<input name="input" placeholder="再次输入密码" type="text" v-if="rePwdShow" v-model="repassword"></input>
					<text class="active cuIcon-attentionfill text-black" @tap="rePwdShow=!rePwdShow" v-if="repassword!=''&&rePwdShow"></text>
					<text class="active cuIcon-attentionfill text-gray" @tap="rePwdShow=!rePwdShow" v-if="repassword!=''&&!rePwdShow"></text>
				</view>
				<view class="cu-form-group" v-if="isInvite>0">
					<input name="input" v-model="inviteCode" type="text" placeholder="请输入邀请码(必填)"></input>
				</view>
				<view class="cu-form-group" v-else>
					<input name="input" v-model="inviteCode" type="text" placeholder="邀请码(可不填)"></input>
				</view>
				<view class="user-btn flex flex-direction">
					<button class="cu-btn bg-blue margin-tb-sm lg" @tap="userRegister">立即注册</button>
					<text class="text-center margin-top"><text class="agree-ico" :class="isAgree?'bg-blue':''" @tap="isAgree=!isAgree"><text class="cuIcon-check"></text></text>我同意<text class="text-blue" @tap="toPrivacyPolicy()">《隐私政策》</text>和<text class="text-blue" @tap="toAgreement()">《用户服务条款》</text></text>
				</view>
			</form>
		</view>
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
						<view class="cu-btn bg-blue" @tap="RegSendCode">确定</view>
					</view>
				</view>
			</view>
		</view>
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
				
				times: 60,
				show:true,
				
				name:"",
				mail:"",
				code:"",
				password:"",
				repassword:"",
				isEmail:1,
				isInvite:0,
				inviteCode:"",
				isAgree:false,
				
				modalName:null,
				kaptchaUrl:"",
				verifyCode:"",
				verifyLevel:0,
				
				pwdShow:false,
				rePwdShow:false
				
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
			that.regConfig();
			that.kaptchaUrl = that.$API.getKaptcha();
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.inviteCode){
				that.inviteCode = res.inviteCode;
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			hideModal(e) {
				this.modalName = null
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			validatePassword(password) {
			  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]])[A-Za-z\d`~!@#$%^&*()_+<>?:"{},.\/\\;'[\]]{8,}$/;
			  return regex.test(password);
			},
			reloadCode(){
				var that = this;
				var kaptchaUrl = that.$API.getKaptcha();
				var num=Math.ceil(Math.random()*10);
				kaptchaUrl += "?"+num;
				that.kaptchaUrl = kaptchaUrl;
			},
			userRegister() {
				var that = this;
				if(!that.isAgree){
					uni.showToast({
						title:"请阅读并同意用户协议",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if (that.name == ""||that.mail == ""||that.password == ""||that.repassword == "") {
					uni.showToast({
						title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(!that.validatePassword(that.password)){
					uni.showToast({
						title:"密码必须包含字母、数字和特殊符号，且长度必须大于8",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(that.password!=that.repassword){
					uni.showToast({
						title:"两次密码不一致",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var data = {
					'name':that.name,
					'code':that.code,
					'password':that.password,
					'mail':that.mail,
					'inviteCode':that.inviteCode
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.userRegister(),
					data:{
						"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
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
							that.back();
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
			RegSendCode() {
				var that = this;
				if (that.mail == "") {
					uni.showToast({
						title:"请输入邮箱",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(that.verifyLevel > 0){
					if (that.verifyCode == "") {
						that.modalName = 'kaptcha'
						return false
					}
				}
				
				var data = {
					'mail':that.mail
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.RegSendCode(),
					data:{
						"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						'verifyCode':that.verifyCode
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.modalName = null;
						that.verifyCode = "";
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
			regConfig() {
				var that = this;
				if(localStorage.getItem('AppInfo')){
					try{
						var AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
						that.isEmail = AppInfo.isEmail;
						that.isInvite = AppInfo.isInvite;
						that.verifyLevel = AppInfo.verifyLevel;
					}catch(e){
						console.log(e);
					}
					
				}
			},
			getCode() {
			  this.show = false
			  this.timer = setInterval(()=>{
				this.times--
				if(this.times===0){
				  this.show = true
				  clearInterval(this.timer);
				  this.times = 60;
				}
			  },1000)
			},
			toAgreement(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/agreement'
				});
			},
			toPrivacyPolicy(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/privacyPolicy'
				});
			}
		}
	}
</script>

<style>
</style>
