<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					我要举报
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action">
					<button class="cu-btn round bg-blue"  @tap="report">提交</button>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title"  v-if="type==1">文章：</view>
				<view class="title"  v-if="type==2">用户：</view>
				<view class="title"  v-if="type==3">评论：</view>
				<view class="title"  v-if="type==4">商品：</view>
				<view class="title"  v-if="type==5">动态：</view>
				<view class="title"  v-if="type==6">帖子：</view>
				<input name="input" :value="title" disabled=""></input>
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" v-model="text" placeholder="请说明具体的违规信息"></textarea>
			</view>
			<!--  #ifdef MP -->
			<view class="all-btn">
				<view class="user-btn flex flex-direction">
					<button class="cu-btn bg-cyan margin-tb-sm lg" @tap="report">提交</button>
					
				</view>
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
						<view class="cu-btn bg-blue" @tap="report">确定</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	
	// #ifdef APP-PLUS
	import owo from '../../static/app-plus/owo/OwO.js'
	// #endif
	// #ifdef H5
	import owo from '../../static/h5/owo/OwO.js'
	// #endif
	// #ifdef MP
	var owo = [];
	// #endif
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				
				title:"",
				type:1,
				text:"",
				
				userinfo:{},
				token:"",
				
				modalName:null,
				kaptchaUrl:"",
				verifyCode:"",
				verifyLevel:0,
				
				//数据提交拦截，防止重复提交
				submitStatus:false,
				
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
			//获取用户信息
			if(localStorage.getItem('userinfo')){
				that.userinfo = JSON.parse(localStorage.getItem('userinfo'));
			}
			if(localStorage.getItem('token')){
				that.token = localStorage.getItem('token');
			}
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.title){
				that.title=res.title;
			}
			if(res.type){
				that.type=res.type;
			}
			
			that.kaptchaUrl = that.$API.getKaptcha();
			that.getConfig();
		},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value
			},
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
					}catch(e){
						console.log(e);
					}
					
				}
			},
			hideModal(e) {
				this.modalName = null
			},
			report(){
				var that = this;
				if(that.submitStatus){
					return false;
				}
				that.submitStatus = true;
				if(that.token==""){
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					var timer = setTimeout(function() {
						uni.navigateTo({
						    url: '/pages/user/login'
						});
						clearTimeout('timer')
					}, 1000)
					return false
				}
				if (that.text == "") {
					uni.showToast({
					    title:"请说明具体的违规信息",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(that.verifyLevel>1){
					if (that.verifyCode == "") {
						that.modalName = 'kaptcha'
						return false
					}
				}
				var text = that.text;
				if(that.type==1){
					text = "举报文章内容["+that.title+"]，理由为："+text;
				}
				if(that.type==2){
					text = "举报用户["+that.title+"]，理由为："+text;
				}
				if(that.type==3){
					text = "举报评论内容["+that.title+"]，理由为："+text;
				}
				if(that.type==4){
					text = "举报商品["+that.title+"]，理由为："+text;
				}
				if(that.type==5){
					text = "举报动态内容["+that.title+"]，理由为："+text;
				}
				if(that.type==6){
					text = "举报帖子内容["+that.title+"]，理由为："+text;
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.report(),
					data:{
						"token":that.token,
						"text":text,
						'verifyCode':that.verifyCode
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.submitStatus = false;
						that.modalName = null;
						that.verifyCode = "";
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							var timer = setTimeout(function() {
								that.back();
							}, 500)
							
						}
					},
					fail: function(res) {
						that.submitStatus = false;
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						uni.stopPullDownRefresh()
					}
				})
			},
			
			toOwO(text){
				var that = this;
				that.OwOtype = text;
				if(text=="paopao"){
					that.owoList = that.owo.data.paopao.container;
				}
				if(text=="adai"){
					that.owoList = that.owo.data.adai.container;
				}
				if(text=="alu"){
					that.owoList = that.owo.data.alu.container;
				}
				if(text=="quyinniang"){
					that.owoList = that.owo.data.quyinniang.container;
				}
			},
			setOwO(data){
				var that = this;
				var text = data.data;
				that.text+=text;
				that.isOwO = false;
			},
			OwO(){
				var that = this;
				that.isOwO = !that.isOwO;
			}
		}
	}
</script>

<style>
</style>
