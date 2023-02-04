<template>
	<view :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action">
					<text class="square-box" :class="squareid==0?'cur':''" @tap="setSquare(0)">动态</text>
					<text class="square-box" :class="squareid==1?'cur':''" @tap="setSquare(1)">群聊</text>
					<text class="square-box" :class="squareid==2?'cur':''" @tap="setSquare(2)">综合</text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<block v-if="squareid==0">
			<view class="data-box">
				<view class="square-post">
					<view class="square-post-header">
						<view class="square-user">
							<view class="cu-avatar round" :style="userInfo.style" v-if="token!=''"></view>
							<view class="cu-avatar round" v-else></view>
						</view>
						<view class="square-text">
							分享你的想法吧！
						</view>
					</view>
					<view class="square-post-btn grid col-4">
						<view class="square-post-btn-box">
							<text class="cuIcon-pic text-green"></text>图片
						</view>
						<view class="square-post-btn-box">
							<text class="cuIcon-record text-purple"></text>视频
						</view>
						<view class="square-post-btn-box">
							<text class="cuIcon-read text-blue"></text>文章
						</view>
						<view class="square-post-btn-box">
							<text class="cuIcon-cart text-red"></text>商品
						</view>
					</view>
				</view>
			</view>
			<view class="cu-card dynamic no-card square-list">
				<view class="cu-item">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view>凯尔</view>
								<view class="text-gray text-sm flex justify-between">
									2019年12月3日
								</view>
							</view>
						</view>
					</view>
					<view class="text-content">
						测试图片类型动态，单图，3,6,9
					</view>
					<view class="grid flex-sub padding-lr col-3 grid-square">
						<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
						 v-for="(item,index) in 6" :key="index">
						</view>
					</view>
					<view class="text-center grid col-3 padding-xs">
						<view class="square-post-btn">
							<text class="cuIcon-forward"></text>100
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-community"></text>200
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-appreciate"></text>100
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view>凯尔</view>
								<view class="text-gray text-sm flex justify-between">
									2019年12月3日
								</view>
							</view>
						</view>
					</view>
					<view class="text-content">
						我发布了新文章！
					</view>
					<view class="grid flex-sub padding-lr">
						<view class="user-post-info">
							<view class="user-post-pic">
								<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
							</view>
							<view class="user-post-text">
								<view class="user-post-title">
									文章的标题，无法换行，超出长度则自动变为省略号
								</view>
								<view class="user-post-intro">
									文章的简略说明，只允许换两行，超出长度则自动变为省略号。文章的简略说明，只允许换两行，超出长度则自动变为省略号。
								</view>
							</view>
						</view>
					</view>
					<view class="text-center grid col-3 padding-xs">
						<view class="square-post-btn">
							<text class="cuIcon-forward"></text>100
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-community"></text>200
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-appreciate"></text>100
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
							<view class="content flex-sub">
								<view>凯尔</view>
								<view class="text-gray text-sm flex justify-between">
									2019年12月3日
								</view>
							</view>
						</view>
					</view>
					<view class="text-content">
						我转发了动态！
					</view>
					<view class="grid flex-sub padding-lr">
						
						<view class="user-space-info">
							<view class="user-space-text">
								<text class="text-blue">@老实人：</text>动态的简略说明，只允许换四行，超出长度则自动变为省略号。动态的简略说明，只允许换四行，超出长度则自动变为省略号。
							</view>
							
							<view class="grid flex-sub col-3 grid-square margin-top-xs">
								<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
								 v-for="(item,index) in 3" :key="index">
								</view>
							</view>
						</view>
					</view>
					<view class="text-center grid col-3 padding-xs">
						<view class="square-post-btn">
							<text class="cuIcon-forward"></text>100
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-community"></text>200
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-appreciate"></text>100
						</view>
					</view>
				</view>
			</view>
		</block>
		<block v-if="squareid==1">
			
			
			<view class="cu-list menu-avatar"  v-if="chatList.length>0">
				<view class="cu-bar bg-white search">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="搜索群聊" v-model="searchText"  @input="searchTag"></input>
						<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
					</view>
				</view>
				<view class="no-data" v-if="chatList.length==0">
					暂时没有数据
				</view>
				<block v-for="(item,index) in chatList" :key="index">
				<view class="cu-item" @tap="goChat(item)">
					<block v-if="item.type==1">
						<view class="cu-avatar round lg" :style="'background-image:url('+item.pic+');'"></view>
					</block>
					<block v-else>
						<view class="cu-avatar round lg" :style="'background-image:url('+item.userJson.avatar+');'"></view>
					</block>
					<view class="content">
						<view><view class="text-cut">{{item.name}}</view></view>
						<view class="text-gray text-sm flex">
							<view class="text-cut">
								<block v-if="item.lastMsg!=null">
									
									<block v-if="item.lastMsg.type!=4">
										<block v-if="item.lastMsg.uid==item.uid">
											{{item.userJson.name}}: 
										</block>
										<block v-if="item.lastMsg.uid==item.toid">
											{{item.userJson.toName}}: 
										</block>
										<block v-if="item.lastMsg.type==0">
											{{item.lastMsg.text}}
										</block>
										<block v-if="item.lastMsg.type==1">
											[图片]
										</block>
									</block>
									<block v-else>
										<block v-if="item.lastMsg.text=='ban'">
											<text class="text-red">[已开启全体禁言]</text>
										</block>
										<block v-else>
											<text class="text-blue">[已解除全体禁言]</text>
										</block>
									</block>
								</block>
								<block v-else>暂无消息</block>
							</view>
						</view>
					</view>
					<view class="action">
						<view class="text-grey text-xs">{{chatFormatDate(item.lastTime)}}</view>
						<block v-if="item.lastMsg!=null">
							<block v-if="item.lastMsg.uid==uid">
								<view class="cu-tag sm" style="background: none;">&nbsp</view>
							</block>
							<block v-else>
								<view class="cu-tag sm" style="background: none;" v-if="item.isNew==0">&nbsp</view>
								<view class="cu-tag round bg-red sm" v-else>{{item.unRead}}</view>
							</block>
						</block>
						<block v-else>
							<view class="cu-tag sm" style="background: none;">&nbsp</view>
						</block>
					</view>
				</view>
				</block>
			</view>
		</block>
		
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				userInfo:null,
				token:"",
				isLoading:0,
				raiders:API.GetRaiders(),
				toolid:0,
				
				noticeSum:0,
				
				squareid: 0,
				searchText:"",
				
				chatList:[],
				oldChatList:[],
				
				isGetChat:null
			}
		},
		onPullDownRefresh(){
			var that = this;
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onHide() {
			var that = this
			clearInterval(that.isGetChat);
			that.isGetChat = null
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			uni.hideTabBar({
				animation: false
			})
			
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");"
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			if(localStorage.getItem('chatList')){
				that.oldChatList = JSON.parse(localStorage.getItem('oldChatList'));
				// that.chatList = JSON.parse(localStorage.getItem('chatList'));
			}
			that.userStatus();
			that.unreadNum();
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods:{
			setSquare(type){
				var that = this;
				that.squareid = type;
				if(type==0){
					clearInterval(that.isGetChat);
					that.isGetChat = null
				}
				if(type==1){
					that.getMyChat(false);
					that.isGetChat = setInterval(() => {
					 that.getMyChat(false);
					}, 4000);
				}
			},
			searchClose(){
				var that = this;
				that.searchText = "";
				that.page = 1;
				that.getUserList(false);
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
			toInfo(data){
				var that = this;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			toPage(title,cid){
				var that = this;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			toSearch(){
				var that = this;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				uni.navigateTo({
				    url: '/pages/contents/search'
				});
			},
			goPage(url){
				var that = this;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				uni.navigateTo({
				    url: url
				});
			},
			toCategoryContents(title,id){
				var that = this;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			userStatus() {
				var that = this;
				Net.request({
					
					url: API.userStatus(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoading=1;
						if(res.data.code==0){
							localStorage.removeItem('userinfo');
							localStorage.removeItem('token');
							that.token = "";
							that.userinfo = null;
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
			toLink(text){
				var that = this;
				
				if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
					uni.showToast({
						title: "请先登录哦",
						icon: 'none'
					})
					return false;
				}
				uni.navigateTo({
					url: text
				});
			},
			toGroup(){
				var url = API.GetGroupUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			unreadNum() {
				var that = this;
				Net.request({
					
					url: API.unreadNum(),
					data:{
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.noticeSum = res.data.data;
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
			
			//群聊(性能考虑，只加载前30条)
			getMyChat(isPage){
				var that = this;
				var page = that.page;
				if(isPage){
					page++;
				}
				if(that.token==""){
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				Net.request({
					url: API.allChat(),
					data:{
						"token":that.token,
						"limit":30,
						"page":page,
						"type":that.type,
						"order":"lastTime"
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
								var chatList = [];
								for(var i in list){
									var arr = list[i];
									arr.isNew =0;
									arr.unRead =0;
									chatList.push(arr);
								}
								if(isPage){
									that.page++;
									that.chatList = that.chatList.concat(chatList);
								}else{
									var oldChatList = [];
									if(that.oldChatList!=null){
										oldChatList = that.oldChatList;
									}
									if(oldChatList.length>0){
										
										if(!arraysEqual(oldChatList,chatList)){
											console.log("开始对比")
											for(var c in chatList){
												for(var d in oldChatList){
													if(oldChatList[d].id == chatList[c].id){
														if(oldChatList[d].lastTime < chatList[c].lastTime){
															console.log("赋值完成")
															chatList[c].isNew = 1;
															
															var unRead = chatList[c].msgNum - oldChatList[d].msgNum;
															if(unRead <= 0){
																unRead = 0;
															}
															chatList[c].unRead = unRead;
														}
													}
													
												}
											}
											that.oldChatList = chatList;
											that.chatList = chatList;
											localStorage.setItem('AllchatList',JSON.stringify(chatList));
										}
										
										
									}else{
										that.oldChatList = chatList;
										that.chatList = chatList;
										localStorage.setItem('AllchatList',JSON.stringify(chatList));
									}
								}
							}else{
								// that.moreText="没有更多消息了";
							}
							
						}
					},
					fail: function(res) {
						that.isLoad=0;
						// that.moreText="加载更多";
					}
				})
			},
			arraysEqual(a, b) {
				if (a === b) return true;
				if (a == null || b == null) return false;
				if (a.length != b.length) return false;
				for(var c in a){
					for(var d in b){
						if(b[d].id == a[c].id){
							if(b[d].lastTime != a[c].lastTime){
								return false;
							}
						}
						
					}
				}
			},
			chatFormatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				// 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
				var year = datetime.getFullYear();
				var month = ("0" + (datetime.getMonth() + 1)).slice(-2);
				var date = ("0" + datetime.getDate()).slice(-2);
				var hour = ("0" + datetime.getHours()).slice(-2);
				var minute = ("0" + datetime.getMinutes()).slice(-2);
				var time = year+""+month+""+date;
				
				var result = hour + ":" + minute;
				var curDate = new Date();
				var curYear = curDate.getFullYear(); //获取完整的年份(4位)
				var curMonth = ("0" + (curDate.getMonth() + 1)).slice(-2);
				var curDay = ("0" + curDate.getDate()).slice(-2); //获取当前日(1-31)
				var curTime = curYear+""+curMonth+""+curDay;
				if(year==curYear){
					if(year==curYear){
						if(date==curDay){
							result = hour + ":" + minute;
						}else{
							result = month + "-" + date;
						}
					}else{
						result = month + "-" + date;
					}
				}else{
					result = month + "-" + date;
				}
				return result;
			},
			goChat(data){
				var that = this;
				var chatid = data.id;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				//去除未读标志
				var chatlist = that.chatList;
				for(var i in chatlist){
					if(chatlist[i].id==chatid){
						chatlist[i].isNew =0;
						chatlist[i].unRead =0;
					}
				}
				that.chatList = chatlist;
				that.oldChatList = chatlist;
				localStorage.setItem('AllchatList',JSON.stringify(chatList));
				//结束
				if(data.type==0){
					var name = data.userJson.name;
					var uid = data.userJson.uid;
					
					uni.navigateTo({
					    url: '/pages/chat/chat?uid='+uid+"&name="+name+"&chatid="+chatid+"&type=0"
					});
				}
				if(data.type==1){
					var name = data.name;
					
					uni.navigateTo({
					    url: '/pages/chat/chat?&name='+name+'&chatid='+chatid+'&type=1'
					});
				}
				
			},
		},
		components: {
			waves
		}
	}
</script>

<style>
</style>
