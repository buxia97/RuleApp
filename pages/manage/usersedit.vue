<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					用户编辑
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
			<view class="cu-form-group">
				<view class="title">用户积分</view>
				<input name="input" disabled="disabled" :value="assets"></input>
				<view class="action">
					<text class="text-blue" @tap="recharge">充扣</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">昵称</view>
				<input placeholder="请输入昵称" name="input" v-model="screenName"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">邮箱</view>
				<input placeholder="请输入邮箱" name="input" v-model="mail"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">网址</view>
				<input placeholder="请输入网址" name="input" v-model="url"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">头衔</view>
				<input placeholder="为用户自定义头衔" name="input" v-model="customize"></input>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">权限设置</view>
				<input :value="groupText" name="input" disabled="true"></input>
				<view class="action">
					<text class="text-blue" @tap="showModal" data-target="groupModal">修改</text>
				</view>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">密码</view>
				<input placeholder="请输入密码,不填则不修改" v-model="password" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">确认密码</view>
				<input placeholder="请再次输入密码" v-model="repassword" name="input"></input>
			</view>
		</form>
		<!--  #ifdef MP -->
		<view class="post-update bg-blue" @tap="userEdit">
			<text class="cuIcon-upload"></text>
		</view>
		<!--  #endif -->
		<view class="cu-modal" :class="modalName=='groupModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in groupList" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{item.name}}</view>
								<radio class="round" :class="group==item.group?'checked':''" :checked="group==item.group?true:false"
								 :value="item.group" :data-name="item.name"></radio>
							</label>
						</view>
					</view>
				</radio-group>
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
				
				
				uid:0,
				assets:0,
				name:'',
				screenName:'',
				password:'',
				repassword:'',
				mail:'',
				url:'',
				customize:'',
				token:'',
				
				groupText:"贡献者",
				group:"contributor",
				groupList:[
					{
						name:"管理员",
						group:"administrator"
					},
					{
						name:"编辑",
						group:"editor"
					},
					{
						name:"贡献者",
						group:"contributor"
					},
					{
						name:"关注者",
						group:"subscriber"
					},
					{
						name:"游客",
						group:"visitor"
					},
				],
				
				modalName: null,
				radio: 'radio1',
				
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
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.uid){
				that.uid = res.uid;
				that.getUserInfo();
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			
			getUserInfo(){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				that.$Net.request({
					
					url: that.$API.getUserInfo(),
					data:{
						"key":that.uid,
						"token":token
						
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.name = res.data.data.name;
							that.screenName = res.data.data.screenName;
							that.mail = res.data.data.mail;
							that.url = res.data.data.url;
							that.group = res.data.data.groupKey;
							that.customize = res.data.data.customize;
							that.assets =  res.data.data.assets;
							var list = that.groupList;
							for(var i in list){
								if(list[i].group == that.group){
									that.groupText = list[i].name;
								}
							}
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
			userEdit() {
				var that = this;
				if (that.password != "") {
					if (that.password != that.repassword) {
						uni.showToast({
						    title:"两次密码不一致",
							icon:'none',
							duration: 1000,
							position:'bottom',
						});
						return false
					}
					
				}
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					uid:that.uid,
					name:that.name,
					screenName:that.screenName,
					password:that.password,
					mail:that.mail,
					url:that.url,
					customize:that.customize,
					group:that.group
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.manageUserEdit(),
					data:{
						"params":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"token":token
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
						uni.stopPullDownRefresh()
					}
				})
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				var that = this;
				that.group = e.detail.value;
				var list = that.groupList;
				for(var i in list){
					if(list[i].group == that.group){
						that.groupText = list[i].name;
					}
				}
				that.hideModal();
			},
			recharge(){
				var that = this;
				localStorage.setItem('getuid',that.uid);
				uni.navigateTo({
				    url: '/pages/manage/recharge'
				});
			},
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
