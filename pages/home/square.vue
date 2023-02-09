<template>
	<view :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action">
					<text class="square-box" :class="squareid==0?'cur':''" @tap="setSquare(0)">动态</text>
					<text class="square-box" :class="squareid==1?'cur':''" @tap="setSquare(1)">群聊</text>
					<!-- <text class="square-box" :class="squareid==2?'cur':''" @tap="setSquare(2)">综合</text> -->
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
						<view class="square-user" @tap="goUserInfo()">
							<view class="cu-avatar round" :style="userInfo.style" v-if="token!=''"></view>
							<view class="cu-avatar round" v-else>
								<text class="text-blue text-sm">登录</text>
							</view>
						</view>
						<view class="square-text" @tap="postSpace(0)">
							分享你的想法吧！
						</view>
					</view>
					<view class="square-post-btn grid col-4">
						<view class="square-post-btn-box" @tap="postSpace(0)">
							<text class="cuIcon-pic text-green"></text>图片
						</view>
						<view class="square-post-btn-box" @tap="postSpace(4)">
							<text class="cuIcon-record text-purple"></text>视频
						</view>
						<view class="square-post-btn-box" @tap="postSpace(1)">
							<text class="cuIcon-read text-blue"></text>文章
						</view>
						<view class="square-post-btn-box" @tap="postSpace(5)">
							<text class="cuIcon-cart text-red"></text>商品
						</view>
					</view>
				</view>
			</view>
			<view class="no-data" v-if="spaceList.length==0">
				<text class="cuIcon-text"></text>
				
				暂时没有动态哦！
				<view class="text-center margin-top-sm">
					<text class="cu-btn bg-gradual-orange radius" @tap="postSpace(0)">我要发布</text>
				
				</view>
				
			</view>
				
			<spaceItem :spaceList="spaceList"></spaceItem>
			<view class="load-more" @tap="loadMore" v-if="dataLoad&&chatList.length>0">
				<text>{{moreText}}</text>
			</view>
			
			
		</block>
		<block v-if="squareid==1">
			
			<view class="no-data" v-if="token==''">
				<text class="cuIcon-text"></text>
				
				请先登录哦！
				<view class="text-center margin-top-sm">
					<text class="cu-btn bg-blue radius" @tap="goLogin()">登录</text>
					<text class="cu-btn line-blue margin-left-sm radius" @tap="goRegister()">注册</text>
				</view>
				
			</view>
			<view class="cu-list menu-avatar" v-if="token!=''">
				<view class="cu-bar bg-white search">
					<view class="search-form round">
						<text class="cuIcon-search"></text>
						<input type="text" placeholder="搜索群聊" v-model="searchText"></input>
						<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
					</view>
				</view>
				<view class="no-data" v-if="chatList.length==0">
					<text class="cuIcon-text"></text>
					暂时没有数据
				</view>
				<block v-for="(item,index) in chatList" :key="index">
				<view class="cu-item" @tap="goChat(item)" v-if="item.name.indexOf(searchText)!=-1">
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
										<block v-if="item.lastMsg.uid==uid">
											我: 
										</block>
										<block v-if="item.lastMsg.uid!=uid">
											{{item.name}}: 
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
		<!--  #ifdef APP-PLUS -->
		<view style="height: 100upx;"></view>
		<Tabbar :current="2"></Tabbar>
		<!--  #endif -->
	</view>
</template>

<script>
	import waves from '@/components/xxley-waves/waves.vue';
	// #ifdef APP-PLUS
	import Tabbar from '@/pages/components/tabBar.vue'
	// #endif
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
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
				toolid:0,
				
				noticeSum:0,
				
				squareid: 0,
				searchText:"",
				
				chatList:[],
				oldChatList:[],
				
				spaceList:[],
				
				isGetChat:null,
				
				uid:0,
				dataLoad:false,
				
				page:1,
				moreText:"加载更多",
				
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			if(that.squareid==0){
				that.getSpaceList(false);
			}
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
				that.userInfo.style = "background-image:url("+that.userInfo.avatar+");";
				that.uid = that.userInfo.uid;
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
			if(localStorage.getItem('chatList')){
				that.oldChatList = JSON.parse(localStorage.getItem('chatList'));
				// that.chatList = JSON.parse(localStorage.getItem('chatList'));
			}
			that.userStatus();
			that.unreadNum();
			if(that.squareid==0){
				that.getSpaceList(false);
			}
			
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
				that.page = 1;
				that.squareid = type;
				clearInterval(that.isGetChat);
				that.isGetChat = null
				if(type==0){
					that.getSpaceList(false);
				}
				if(type==1){
					if(that.token!=""){
						that.getMyChat(false);
						that.isGetChat = setInterval(() => {
						 that.getMyChat(false);
						}, 4000);
					}
					
				}
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				if(that.squareid==0){
					that.getSpaceList(true);
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
				that.$Net.request({
					
					url: that.$API.userStatus(),
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
				var url = that.$API.GetGroupUrl();
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			unreadNum() {
				var that = this;
				that.$Net.request({
					
					url: that.$API.unreadNum(),
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
				that.$Net.request({
					url: that.$API.allChat(),
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
						that.isLoading = 1;
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
										
										if(!that.arraysEqual(oldChatList,chatList)){
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
						that.isLoading = 1;
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
				that.oldChatList = that.chatList;
				localStorage.setItem('AllchatList',JSON.stringify(that.chatList));
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
			postSpace(type){
				var that = this;
				if(type==1){
					uni.navigateTo({
					    url: '/pages/user/post?isSpace=1'
					});
				}else if(type==5){
					uni.navigateTo({
					    url: '/pages/user/addshop?isSpace=1'
					});
				}else{
					uni.navigateTo({
					    url: '/pages/space/post?type='+type
					});
				}
				
				
			},
			getSpaceList(isPage){
				var that = this;
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.spaceList(),
					data:{
						"limit":10,
						"page":page,
						"order":"created",
						"token":that.token
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoading = 1;
						that.isLoad=0;
						that.moreText="加载更多";
						if(!isPage){
							that.dataLoad = true;
						}
						if(res.data.code==1){
							var list = res.data.data;
							var spaceList = [];
							for(var i in list){
								if(list[i].type==0){
									if(list[i].pic){
										var pic = list[i].pic;
										list[i].picList = pic.split("||");
									}else{
										list[i].picList = [];
									}
									
								}
								if(list[i].type==2){
									if(list[i].forwardJson.pic){
										var pic = list[i].forwardJson.pic;
										list[i].forwardJson.picList = pic.split("||");
									}else{
										list[i].forwardJson.picList = [];
									}
									
								}
							}
							spaceList = list;
							if(list.length>0){
								if(isPage){
									that.page++;
									that.spaceList = that.spaceList.concat(spaceList);
								}else{
									that.spaceList = spaceList;
								}
								
							}else{
								that.moreText="没有更多动态了";
							}
						}
					},
					fail: function(res) {
						that.isLoading = 1;
						that.moreText="加载更多";
						that.isLoad=0;
					}
				})
			},
			
			goUserInfo(){
				 
				var that = this;
				if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
					uni.navigateTo({
					    url: '/pages/user/login'
					});
					return false;
				}
				uni.switchTab({
					url: '/pages/home/user'
				});
			},
			goLogin(){
				uni.navigateTo({
				    url: '/pages/user/login'
				});
			},
			goRegister(){
				uni.navigateTo({
				    url: '/pages/user/register'
				});
			}
		},
		// #ifdef APP-PLUS
		components: {
			waves,
			Tabbar
		},
		// #endif
		
		// #ifdef H5 || MP
		components: {
			waves
		},
		// #endif
	}
</script>

<style>
</style>
