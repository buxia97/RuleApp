<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					用户管理
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
				</view>
			</view>
			<view class="no-data" v-if="userList.length==0">
				暂时没有数据
			</view>
			<view class="cu-item" v-for="(item,index) in userList" :key="index" >
				<view class="cu-avatar round lg" :style="item.style"></view>
				<view class="content">
					<view class="text-grey" v-if="item.screenName">{{item.screenName}}
						<text v-if="item.groupKey=='contributor'||item.groupKey=='administrator'" class="cuIcon-lightfill"></text>
					</view>
					<view class="text-grey" v-else>{{item.name}}
						<text v-if="item.groupKey=='contributor'||item.groupKey=='administrator'" class="cuIcon-lightfill"></text>
					</view>
					<view class="text-gray text-sm flex">
						<view class="text-cut">
							{{item.mail}}
						</view>
					</view>
				</view>
				<view class="action user-list-btn">
					<view class="cu-btn text-blue radius" @tap="toEdit(item.uid)">
						<text class="cuIcon-post"></text>
					</view>
					
					<view class="cu-btn text-red radius" @tap="deleteUser(item.uid)">
						<text class="cuIcon-deletefill"></text>
					</view>
					
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
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				userList:[],
				
				page:1,
				moreText:"加载更多",
				isLoad:0,
				searchText:"",
				
				isLoading:0,
				
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
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP-WEIXIN
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
			toEdit(id){
				var that = this;
				
				uni.navigateTo({
				    url: '../manage/usersedit?uid='+id
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
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getUserList(),
					data:{
						"searchParams":"",
						"limit":10,
						"page":page,
						"searchKey":that.searchText,
						"order":"created"
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
				            
				            Net.request({
				            	url: API.userDelete(),
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
		}
	}
	
</script>

<style>
@import "../../static/base.css";
</style>
