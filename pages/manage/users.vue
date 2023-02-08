<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="type=='get'">
						用户选择
					</block>
					<block v-if="type==''">
						用户管理
					</block>
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
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"  @input="searchTag"></input>
					<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
				</view>
			</view>
			<view class="search-type grid col-6">
				<view class="search-type-box " @tap="getType('all')" :class="dataType=='all'?'active':''">
					<text>全部</text>
				</view>
				<view class="search-type-box" @tap="getType('contributor')" :class="dataType=='contributor'?'active':''">
					<text>贡献者</text>
				</view>
				<view class="search-type-box" @tap="getType('administrator')" :class="dataType=='administrator'?'active':''">
					<text>管理员</text>
				</view>
				<view class="search-type-box" @tap="getType('editor')" :class="dataType=='editor'?'active':''">
					<text>编辑</text>
				</view>
				<view class="search-type-box" @tap="getType('vip')" :class="dataType=='vip'?'active':''">
					<text>VIP</text>
				</view>
				<view class="search-type-box" @tap="getType('ban')" :class="dataType=='ban'?'active':''">
					<text>封禁</text>
				</view>
			</view>
			<view class="no-data" v-if="userList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<view class="cu-item" v-for="(item,index) in userList" :key="index" >
				<view class="cu-avatar round lg" @tap="toUserContents(item)" :style="item.style"></view>
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
							UID:{{item.uid}}&nbsp;&nbsp;积分:<text class="text-blue">{{item.assets}}</text>
						</view>
					</view>
				</view>
				<view class="action user-list-btn">
					<block v-if="type==''">
						<block v-if="dataType=='ban'">
							<view class="cu-btn text-black radius" @tap="unblockUser(item.uid)">
								解封
							</view>
						</block>
						<block v-else>
							<view class="cu-btn text-red radius" @tap="deleteUser(item.uid)"  v-if="group=='administrator'">
								<text class="cuIcon-deletefill"></text>
							</view>
							<view class="cu-btn text-blue radius" @tap="toEdit(item.uid)"  v-if="group=='administrator'">
								<text class="cuIcon-post"></text>
							</view>
							
							<view class="cu-btn text-black radius" @tap="toBan(item.uid)">
								<text class="cuIcon-warnfill"></text>
							</view>
						</block>
						
						
					</block>
					<block v-if="type=='get'">
						<view class="cu-btn text-blue radius" @tap="getUser(item)">
							选择
						</view>
					</block>
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
				
				userList:[],
				
				page:1,
				moreText:"加载更多",
				isLoad:0,
				searchText:"",
				
				isLoading:0,
				type:"",
				dataType:"all",
				group:"",
				token:"",
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getUserList(false);
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
			
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
			if(localStorage.getItem('userinfo')){
				
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.group = userInfo.group;
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			that.page=1;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.type){
				that.type = res.type;
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
			toEdit(id){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/manage/usersedit?uid='+id
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
			getType(type){
				var that = this;
				that.dataType = type;
				that.page = 1;
				that.userList = [];
				that.getUserList(false);
			},
			searchClose(){
				var that = this;
				that.searchText = "";
				that.page = 1;
				that.getUserList(false);
			},
			getUserList(isPage){
				var that = this;
				if(localStorage.getItem('token')){
					
					that.token = localStorage.getItem('token');
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				var data = {};
				if(that.dataType!="all"&that.dataType!="vip"){
					data = {
						"groupKey":that.dataType
					}
				}
				if(that.dataType=='vip'){
					data = {
						"vip":1
					}
				}
				if(that.dataType=='ban'){
					data = {
						"bantime":1
					}
				}
				that.$Net.request({
					url: that.$API.getUserList(),
					data:{
						"searchParams":data,
						"limit":10,
						"page":page,
						"searchKey":that.searchText,
						"order":"created",
						"token":that.token
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
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getUserList()
			
			},
			deleteUser(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"key":id,
					"token":token
				}
				uni.showModal({
				    title: '确定要删除该用户吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.userDelete(),
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
										that.page=1;
				            			that.getUserList();
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
				
			},
			unblockUser(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"uid":id,
					"token":token
				}
				uni.showModal({
				    title: '确定要解封该用户吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.unblockUser(),
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
										that.page=1;
				            			that.getUserList();
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
				
			},
			getUser(data){
				var that = this;
				localStorage.setItem('getuid',data.uid);
				that.back();
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
			toBan(uid){
				uni.navigateTo({
				    url: '/pages/manage/banuser?uid='+uid
				});
			}
		}
	}
	
</script>

<style>
</style>
