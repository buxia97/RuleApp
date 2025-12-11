<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					向管理员反馈
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="about-tips">
			如您在使用过程中遇到问题，或者有意见建议要与我们反馈，请通过下方管理员列表直接与我们取得联系。
		</view>
		<view class="cu-list menu-avatar userList" style="margin-top: 20upx;">
			<view class="no-data" v-if="userList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="cu-item" v-for="(item,index) in userList" :key="index">
				<view class="cu-avatar round lg" :style="item.style"></view>
				<view class="content">
					<view class="text-grey">
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
				<view class="action goUserIndex" @tap="getPrivateChat(item)">
					<view class="cu-btn bg-gradual-red">反馈</view>
					
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
				
				page:1,
				moreText:"加载更多",
				isLoad:0,
				isLoading:0,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getUserList(false);
			setTimeout(function () {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onShow(){
			var that = this;
			that.page=1;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.getUserList(false);
		},
		methods:{
			allCache(){
				var that = this;
				if(localStorage.getItem('userList')){
					that.userList = JSON.parse(localStorage.getItem('userList'));
				}
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
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
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getUserList(true);
				
			},
			getUserList(isPage){
				var that = this;
				var page = that.page;
				var data = {
					"groupKey":"administrator"
				}
				var token = ""
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				
				}
				that.$Net.request({
					url: that.$API.getUserList(),
					data:{
						"searchParams":data,
						"limit":10,
						"page":1,
						"order":"created",
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								
								var userList = [];
								for(var i in list){
									var arr = list[i];
									arr.style = "background-image:url("+list[i].avatar+");"
									userList.push(arr);
								}
								that.userList = userList;
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						that.isLoad=0;
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			toUserContents(data){
				var that = this;
				var name = data.name;
				var title = data.name+"的信息";
				if(data.screenName){
					title = data.screenName+" 的信息";
					name = data.screenName
				}
				var id= data.uid;
				var type="user";
				uni.navigateTo({
				    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(data.avatar)
				});
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
			getPrivateChat(item){
				var that = this;
				var token = "";
				var myUid = 0;
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
					myUid=userInfo.uid;
				}else{
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					uni.navigateTo({
						url: '/pages/user/login'
					});
					return false;
				}
				
				var touid = item.uid;
				if(myUid==touid){
					uni.showToast({
						title: "不可以向自己发起私聊",
						icon: 'none'
					})
					
					return false;
				}
				var data={
					"touid":touid,
					"token":token
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.getPrivateChat(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res));
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						
						if(res.data.code==1){
							var name = item.name;
							if(item.screenName!=""&item.screenName!=null){
								name = item.screenName;
							}
							var uid = item.uid;
							var chatid = res.data.data
							uni.redirectTo({
							    url: '/pages/chat/chat?uid='+uid+"&name="+name+"&chatid="+chatid
							});
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
		}
	}
	
</script>

<style>
</style>
