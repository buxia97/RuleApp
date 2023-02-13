<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					设置
				</view>
				<view class="action">
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="cu-list menu margin-top">
			<view class="cu-item">
				<view class="content">
					<text>账号状态</text>
				</view>
				<view class="action">
					<block v-if="systemBan==-1">
						<text class="text-blue">获取中…</text>
					</block>
					<block v-if="systemBan==1">
						<text class="text-red">功能限制</text>
					</block>
					<block v-if="systemBan==0">
						<text class="text-green">正常</text>
					</block>
				</view>
			</view>
			<view class="cu-item" @tap="rmlocal">
				<view class="content">
					<text>清除缓存</text>
				</view>
				<view class="action">
					<text class="text-gray">{{ localdata }}</text>
				</view>
			</view>
			<!--  #ifdef APP-PLUS -->
			<view class="cu-item" @tap="isUpdate(true)">
				<view class="content">
					<text>检查更新</text>
				</view>
				<view class="action">
					<text class="text-gray" v-if="Update==0">{{wgtVer}}</text>
					<text class="update-tips bg-red"  v-if="Update==1">News</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<!--  #endif -->
		</view>
		<view class="logout" v-if="token!=''" @tap="logout">
			<view class="logout-main">
				<text class="text-red">退出登录</text>
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
				
				localdata: '',
				systemBan:"-1",
				
				versionCode:0,
				wgtVer:'',
				
				Update:0,
				versionUrl:"",
				
				userInfo:null,
				token:"",
				
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			
			that.isUpdate(false);
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				//that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.get_cache_size();
			that.getUserData();
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			rmlocal(){
				var that = this;
				uni.showModal({
				    title: '提示',
				    content: '是否清除缓存？',
				    success: function (res) {
				        if (res.confirm) {
				            that.closeLocal();
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			getUserData() {
				var that = this;
				that.$Net.request({
					
					url: that.$API.getUserData(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res));
						if(res.data.code==1){
							that.systemBan = res.data.data.systemBan;
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
			closeLocal() {
				var that = this
				var userinfo = "";
				var token = "";
				//绕过用户状态
				if(localStorage.getItem('userinfo')){
					userinfo = localStorage.getItem('userinfo')
					token = localStorage.getItem('token');
				}
				localStorage.clear();
				uni.showToast({
					title: '操作成功！',
					icon: 'none',
					duration: 1000,
					position: 'bottom'
				})
				that.localdata = '0 KB'
				localStorage.setItem('userinfo',userinfo);
				localStorage.setItem('token',token);
			},
			get_cache_size() {
				var that = this
				var obj = uni.getStorageInfoSync()
				if (obj) {
					that.localdata = obj.currentSize + ' KB'
				} else {
					console.log('浏览器不支持localStorage')
				}
			},
			isUpdate(Status) {
				var that = this;
				plus.runtime.getProperty(plus.runtime.appid, function(inf) {
					
					that.wgtVer = inf.version //获取当前版本号
					that.versionCode = inf.versionCode;
					var version = inf.versionCode;
					that.$Net.request({
						url: that.$API.GetUpdateUrl(),
						method: 'get',
						success: function(res) {
							var versionCode = res.data.versionCode;
							that.versionUrl =  res.data.versionUrl;
							if(Status){
								uni.showToast({
									title:"检测完成",
									icon:'none',
									duration: 1000,
									position:'bottom',
								});
								
							}
							if(versionCode > version){
								console.log("有更新");
								that.Update=1;
								if(Status){
									if(res.data.versionUrl!=""){
										plus.runtime.openURL(res.data.versionUrl);  
									}
								}
							}
							
						},
						fail:function(res){
							
						}
					})
					
				})
			},
			logout(){
				var that = this;
				uni.showModal({
				    title: '提示',
				    content: '确认退出账户？',
				    success: function (res) {
				        if (res.confirm) {
							
							uni.showLoading({
								title: "加载中"
							});
							var data={
								"token":that.token
							}
							that.$Net.request({
								url: that.$API.signOut(),
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
										localStorage.removeItem('userinfo');
										localStorage.removeItem('token');
										uni.showToast({
											title:"退出成功",
											icon:'none',
											duration: 1000,
											position:'bottom',
										});
										var timer = setTimeout(function() {
											uni.reLaunch({
												url: '/pages/home/home'
											})
											clearTimeout('timer')
										}, 1000)
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
							
							
				            
				        } else if (res.cancel) {
				            
				        }
				    }
				});
			}
		}
	}
</script>

<style>
</style>
