<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					用户筛选
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<view class="cu-list menu-avatar userList" style="margin-top: 20upx;">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入用户ID/名称/手机号/所在地区" v-model="searchText"  @input="searchTag"></input>
					<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
				</view>
			</view>
			<view class="no-data" v-if="userList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="cu-item" v-for="(item,index) in userList" :key="index" @tap="toUserContents(item)">
				<view class="cu-avatar round lg" :style="item.style"></view>
				<view class="content">
					<view class="text-black">
						<block  v-if="item.screenName">{{item.screenName}}</block>
						<block  v-else>{{item.name}}</block>
						<text v-if="item.gender==1" class="gender-ico cuIcon-male"></text>
						<text v-if="item.gender==2" class="gender-ico cuIcon-female"></text>
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
						<block v-if="item.birthday&&item.birthday!=0">
							<text class="age-ico bg-blue">{{getAge(item.birthday)}}岁</text>
						</block>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{subText(item.introduce,100)}}
						</view> </view>
				</view>
				<view class="action goUserIndex">
					<view class="cu-btn bg-gradual-red">主页</view>
					
				</view>
			</view>
			<view class="load-more" @tap="loadMore" v-if="userList.length>0">
				<text>{{moreText}}</text>
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
				
				searchText:"",
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
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			if(that.isLoad==0){
				that.loadMore();
			}
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
			if(res.searchText){
				that.searchText = res.searchText;
			}
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
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getUserList()
			
			},
			searchClose(){
				var that = this;
				that.searchText = "";
				that.page = 1;
				that.getUserList(false);
			},
			getUserList(isPage){
				var that = this;
				var page = that.page;
				if(isPage){
					page++;
				}
				var token = ""
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				
				}
				that.$Net.request({
					url: that.$API.getUserList(),
					data:{
						"searchParams":"",
						"limit":10,
						"page":page,
						"searchKey":that.searchText,
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
								if(isPage){
									that.page++;
									that.userList = that.userList.concat(userList);
								}else{
									that.userList = userList;
								}
								localStorage.setItem('userList',JSON.stringify(that.userList));
							}else{
								that.moreText="没有更多数据了";
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						that.isLoad=0;
						that.moreText="加载更多";
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
			getAge(birthday) {
			if (!birthday || isNaN(birthday)||birthday==0) return null;

			const birth = new Date(birthday * 1000); // 转成毫秒
			const today = new Date();

			let age = today.getFullYear() - birth.getFullYear();
			const m = today.getMonth() - birth.getMonth();
			const d = today.getDate() - birth.getDate();

			if (m < 0 || (m === 0 && d < 0)) {
			  age--;
			}

			return age >= 0 ? age : 0; // 防止负数
		  }
		}
	}
	
</script>

<style>
</style>
