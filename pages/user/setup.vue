<template>
	<view class="user" :class="$store.state.AppStyle">
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
		<view class="cu-list menu  card-menu margin-top">
			<block v-if="token!=''">
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-btn"></text>
						<text>账号状态<text class="cuIcon-question margin-left-xs" @tap="showModal" data-target="Modal"></text></text>
					</view>
					<view class="action">
						<block v-if="systemBan==-1">
							<text class="text-blue">获取中…</text>
						</block>
						<block v-if="systemBan==1">
							<text class="text-red">功能限制</text>
						</block>
						<block v-if="systemBan==2">
							<text class="text-red">注销中</text>
						</block>
						<block v-if="systemBan==0">
							<text class="text-green">正常</text>
						</block>
					</view>
				</view>
				<view class="cu-item">
					<view class="content">
						<text class="cuIcon-profilefill"></text>
						<text>注销账户<text class="cuIcon-question margin-left-xs" @tap="showModal" data-target="deleteTips"></text></text>
					</view>
					<view class="action">
						<text class="text-blue"  @tap="showModal" data-target="deleteUser">申请注销</text>
					</view>
				</view>
			</block>
			
			<view class="cu-item" @tap="rmlocal">
				<view class="content">
					<text class="cuIcon-backwardfill"></text>
					<text>清除缓存</text>
				</view>
				<view class="action">
					<text class="text-gray">{{ localdata }}</text>
				</view>
			</view>
			<view class="cu-item" v-if="token!=''" @tap="goMyBanlist()">
				<view class="content">
					<text class="cuIcon-attentionforbidfill"></text>
					<text>我的黑名单</text>
				</view>
				<view class="action">
					<text class="cuIcon-right text-black"></text>
				</view>
			</view>
			
		</view>
		<view class="cu-list menu  card-menu margin-top">
			
			<view class="cu-item" v-if="token!=''" @tap="switchAccounts">
				<view class="content">
					<text class="cuIcon-roundaddfill"></text>
					<text>切换账号</text>
				</view>
				<view class="action">
					<text class="cuIcon-right text-black"></text>
				</view>
			</view>
			<view class="cu-item" v-if="token!=''" @tap="logout">
				<view class="content">
					<text class="cuIcon-playfill"></text>
					<text>退出登录</text>
				</view>
				<view class="action">
					<text class="cuIcon-right text-black"></text>
				</view>
			</view>
		</view>
		
		<view class="cu-modal" :class="modalName=='Modal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">账号状态说明</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl text-left">
					如果您的账号存在刷评论、文章、动态，或频繁出现疑似非人工操作行为，即会进入<text class="text-red text-bold">功能限制</text>状态，该状态持续时间为10-30分钟，期间平台内部分功能将操作受限，并且无法以任何方式解除。
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='deleteTips'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">用户注销说明</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl text-left">
					申请注销后，您的用户信息将从本平台数据库删除，但您发布的文章等信息将继续保留，此时内容作者将不在提示具体信息，将以“账号已注销”代替。如您需要删除您发布的所有信息，可联系管理员处理。
				</view>
			</view>
		</view>
		<view class="cu-modal bottom-modal" :class="modalName=='deleteUser'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white">
					<view class="action">申请注销账户</view>
					<view class="action text-blue" @tap="hideModal">取消</view>
					
					
				</view>
				<view class="padding-top padding-bottom text-left">
					<form>
						<view class="cu-form-group">
							<view class="title">用户名</view>
							<input name="input" disabled="disabled" :value="name"></input>
						</view>
						<view class="all-btn">
							<view class="user-btn flex flex-direction">
								<button class="cu-btn bg-blue margin-tb-sm lg" @tap="selfDelete()">提交申请</button>
								
							</view>
						</view>
						
					</form>
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
				
				modalName: null,
				
				localdata: '',
				systemBan:"-1",
				
				versionCode:0,
				wgtVer:'',
				
				Update:0,
				versionUrl:"",
				
				userInfo:null,
				token:"",
				code:'',
				
				name:""
				
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			
			that.getUserData();
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.name = that.userInfo.name;
				//that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
			
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.get_cache_size();
			that.getUserData();
		},
		methods: {
			switchAccounts(){
				var that = this;
				if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
					uni.showToast({
						title: "请先登录哦",
						icon: 'none'
					})
					return false;
				}
				
				//获取当前缓存
				var userinfo  = null;
				try{
					if(localStorage.getItem('userinfo')){
						userinfo = JSON.parse(localStorage.getItem('userinfo'));
					}
				}catch(e){
					console.log(JSON.stringify(e));
				}
				
				
				//把当前用户载入本地缓存
				var localAccounts = [];
				try{
					if(localStorage.getItem('localAccounts')){
						localAccounts = JSON.parse(localStorage.getItem('localAccounts'));
					}
				}catch(e){
					console.log(JSON.stringify(e));
				}
				if(localAccounts.length>0){
					
					var isHave = 0
					for(var i in localAccounts){
						if(localAccounts[i].uid==userinfo.uid){
							isHave = 1;
							localAccounts[i] = userinfo;
						}
					}
					if(isHave==0){
						if(userinfo!=null){
							localAccounts.push(userinfo);
						}
						
					}
					
				}else{
					if(userinfo!=null){
						localAccounts.push(userinfo);
						
					}
				}
				localStorage.setItem('localAccounts',JSON.stringify(localAccounts));
				
				uni.navigateTo({
				    url: '/pages/user/switchAccounts'
				});
				
			},
			goMyBanlist(){
				uni.navigateTo({
				    url: '/pages/user/mybanlist'
				});
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
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
											uni.redirectTo({
												url: '/pages/home/index'
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
			},
			selfDelete(){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"token":token
				}
				that.hideModal();
				uni.showModal({
				    title: '确定要注销自己的账号吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.selfDelete(),
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
										// localStorage.removeItem('userinfo');
										// localStorage.removeItem('token');
										var timer = setTimeout(function() {
											that.getUserData();
											uni.redirectTo({
												url: '/pages/home/index'
											})
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
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			}
		}
	}
</script>

<style>
</style>
