<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					切换用户
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<view class="cu-list menu-avatar userList" style="margin-top: 20upx;">
			<view class="cu-item" v-for="(item,index) in userList" :key="index" @tap="switchLogin(item)">
				<view class="cu-avatar round lg" :style="item.style"></view>
				<view class="content">
					<view class="text-black">
						<block  v-if="item.screenName">{{item.screenName}}</block>
						<block  v-else>{{item.name}}</block>
						<text v-if="item.groupKey=='contributor'||item.groupKey=='administrator'" class="cuIcon-lightfill"></text>
						<!--  #ifdef H5 || APP-PLUS -->
						<block v-if="item.isvip>0">
							<block v-if="item.vip==1">
								<text class="isVIP bg-gradual-red">VIP</text>
							</block>
							<block v-else>
								<text class="isVIP bg-yellow">VIP</text>
							</block>
						</block>
						<!--  #endif -->
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{subText(item.introduce,100)}}
						</view> </view>
				</view>
				<view class="action goUserIndex">
					<text class="text-blue cuIcon-roundcheckfill" v-if="item.uid==userinfo.uid"></text>
					
				</view>
			</view>
		
		</view>
		<view class="addAccount">
			<view class="addAccount-main" @tap="goLogin()">
				<view class="addAccount-i">
					<text class="cuIcon-add"></text>
				</view>
				<view class="addAccount-text">
					添加或注册新账号
				</view>
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
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				userList:[],
				isLoading:0,
				
				userinfo:{
					uid:0
				},
				
			}
		},
		onPullDownRefresh(){
			var that = this;
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
		},
		onShow(){
			var that = this;
			that.page=1;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
			that.getSwitchAccounts();
		},
		methods:{
			getSwitchAccounts(){
				var that = this;
				try{
					if(localStorage.getItem('userinfo')){
						that.userinfo = JSON.parse(localStorage.getItem('userinfo'));
					}
				}catch(e){
					
				}
					
				try{
					if(localStorage.getItem('localAccounts')){
						var userList = JSON.parse(localStorage.getItem('localAccounts'));
						
						for(var i in userList){
							userList[i].style = "background-image:url("+userList[i].avatar+");"
						}
						that.userList = userList
					}
				}catch(e){
					console.log(JSON.stringify(e));
				}
				that.isLoading = 1;
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			goLogin(){
				 
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/login'
				});
				uni.$emit('goUser', 0);
			},
			formatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				// 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
				var year = datetime.getFullYear(),
					month = ("0" + (datetime.getMonth() + 1)).slice(-2),
					date = ("0" + datetime.getDate()).slice(-2),
					hour = ("0" + datetime.getHours()).slice(-2),
					minute = ("0" + datetime.getMinutes()).slice(-2);
				//second = ("0" + date.getSeconds()).slice(-2);
				// 拼接
				var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
				// 返回
				return result;
			},
			getCID() {
				var that = this;
				let cid = ''
				// #ifdef APP-PLUS
				let pinf = plus.push.getClientInfo();
				cid = pinf.clientid;
				if(cid){
					that.setClientId(cid);
				}
				// #endif
			},
			setClientId(cid){
				var that = this;
				var token = "";
				if(localStorage.getItem('token')){
					
					token = localStorage.getItem('token');
				}else{
					return false;
				}
				that.$Net.request({
					
					url: that.$API.setClientId(),
					data:{
						"clientId":cid,
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
			
							
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
			subText(text,num){
				if(text){
					if(text.length>num){
						text = text.substring(0,num);
						return text+"……";
					}else{
						return text;
					}
				}else{
					return "Ta还没有个人介绍哦"
				}
			},
			switchLogin(userInfo){
				var that = this;
				if(userInfo.uid == that.userinfo.uid){
					return false;
				}
				var token = userInfo.token;
				that.$Net.request({
					
					url: that.$API.userStatus(),
					data:{
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							localStorage.setItem('token',userInfo.token);
							if(userInfo.screenName){
								that.name = userInfo.screenName;
							}else{
								that.name = userInfo.name;
							}
							if(res.data.data.customize){
								userInfo.customize = res.data.data.customize;
							}
							if(res.data.data.lv){
								userInfo.lv = res.data.data.lv;
							}
							if(res.data.data.isvip){
								userInfo.isvip = res.data.data.isvip;
							}
							if(res.data.data.vip){
								userInfo.vip = res.data.data.vip;
							}
							if(res.data.data.experience){
								userInfo.experience = res.data.data.experience;
							}
							localStorage.setItem('userinfo',JSON.stringify(userInfo));
							uni.showToast({
								title: "登录成功！",
								icon: 'none'
							})
							that.getCID();
							var timer = setTimeout(function() {
								uni.redirectTo({
									url: '/pages/home/index'
								})
								clearTimeout('timer')
							}, 1000)
							
						}else{
							uni.showToast({
								title: "登录状态已失效",
								icon: 'none'
							})
							that.removeLocalAccount(userInfo.uid)
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
			removeLocalAccount(uid){
				var that = this;
				var userList = that.userList;
				var list = [];
				for(var i in userList){
					if(userList[i]!=uid){
						list.push(userList[i]);
					}
				}
				localStorage.setItem('localAccounts',JSON.stringify(list));
				that.getSwitchAccounts();
			}
		}
	}
	
</script>

<style>
</style>
