<template>
	<view :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					消息中心
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box data-inbox">
			<view class="search-type grid col-2">
				<view class="search-type-box" @tap="toType('inbox')" :class="type=='inbox'?'active':''">
					<text>平台消息</text>
				</view>
				<view class="search-type-box" @tap="toType('chat')" :class="type=='chat'?'active':''">
					<text>用户消息</text>
				</view>
			</view>
			<block v-if="type=='inbox'">
				<view class="cu-card dynamic no-card">
					<view class="cu-item">
						<view class="cu-list menu-avatar comment">
							<view class="no-data" v-if="inboxList.length==0">
								暂时没有消息
							</view>
							<view class="cu-card dynamic no-card" style="margin-top: 20upx;">
								<view class="cu-item" v-for="(item,index) in inboxList" :key="index" v-if="inboxList.length>0">
									<view class="cu-list menu-avatar comment" @tap="goInbox(item)">
										<view class="cu-item">
											<view class="cu-avatar round" :style="item.style"></view>
											<view class="content">
												<view class="text-grey">{{item.userJson.name}}
													<block  v-if="item.type=='system'">
														<text class="userlv bg-red">系统通知</text>
													</block>
													<block  v-if="item.type=='finance'">
														<text class="userlv bg-gradual-orange">财务通知</text>
													</block>
													<block  v-if="item.type=='comment'">
													<!--  #ifdef H5 || APP-PLUS -->
													<text class="userlv" :style="getUserLvStyle(item.userJson.lv)">{{getUserLv(item.userJson.lv)}}</text>
													<!--  #endif -->
													<text class="userlv customize" v-if="item.userJson.customize&&item.userJson.customize!=''">{{item.userJson.customize}}</text>
													<block v-if="item.userJson.isvip>0">
														<block v-if="item.userJson.vip==1">
															<text class="isVIP bg-gradual-red">VIP</text>
														</block>
														<block v-else>
															<text class="isVIP bg-yellow">VIP</text>
														</block>
													</block>
													</block>
												</view>
												<view class="text-content text-df">
													<rich-text :nodes="markHtml(item.text)"></rich-text>
												</view>
												<view class="bg-grey light padding-sm radius margin-top-sm  text-sm" v-if="item.type=='comment'">
													<view class="flex">
														<view>{{item.contenTitle}}</view>
														
													</view>
												</view>
												<view class="margin-top-sm flex justify-between">
													<view class="text-gray text-df">{{formatDate(item.created)}}</view>
													<view>
													</view>
												</view>
											</view>
										</view>
							
										
									</view>
								</view>
							</view>
							
							<view class="load-more" @tap="loadMore" v-if="inboxList.length>0">
								<text>{{moreText}}</text>
							</view>
						</view>
					</view>
				</view>
			</block>
			<block v-if="type=='chat'">
				<view class="cu-list menu-avatar"  v-if="chatList.length>0">
					<block v-for="(item,index) in chatList" :key="index">
					<view class="cu-item" @tap="goChat(item)">
						<view class="cu-avatar round lg" :style="'background-image:url('+item.userJson.avatar+');'"></view>
						<view class="content">
							<view><view class="text-cut">{{item.userJson.name}}</view></view>
							<view class="text-gray text-sm flex">
								<view class="text-cut">
									<block v-if="item.lastMsg!=null">
										
										<block v-if="item.lastMsg.type!=4">
											<block v-if="item.lastMsg.uid==uid">
												我: 
											</block>
											<block v-else>
												{{item.userJson.name}}: 
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
												<block v-if="item.lastMsg.uid==uid">
													
													<text class="text-blue">[你屏蔽了对方]</text>
												</block>
												<block v-else>
													<text class="text-blue">[对方屏蔽了你]</text>
													
												</block>
											</block>
											<block v-else>
												<block v-if="item.lastMsg.uid==uid">
													
													<text class="text-blue">[你解除了屏蔽]</text>
												</block>
												<block v-else>
													<text class="text-blue">[对方解除了屏蔽]</text>
													
												</block>
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
	// #ifdef APP-PLUS
	import owo from '../../static/app-plus/owo/OwO.js'
	// #endif
	// #ifdef H5
	import owo from '../../static/h5/owo/OwO.js'
	// #endif
	// #ifdef MP
	var owo = [];
	// #endif
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				inboxList:[],
				chatList:[],
				oldChatList:[],
				uid:0,
				type:"inbox",
				
				moreText:"加载更多",
				page:1,
				
				token:"",
				
				isLoading:0,
				
				owo:owo,
				owoList:[],
				
				chatLoading:null,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onHide() {
			var that = this
			clearInterval(that.chatLoading);
			that.chatLoading = null
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			that.loadMore();
		},
		onShow(){
			var that = this;
			that.page=1;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('userinfo')){
				
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.uid = userInfo.uid;
			}
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
				that.getInboxList(false);
				that.setRead();
			}
			if(localStorage.getItem('chatList')){
				that.oldChatList = JSON.parse(localStorage.getItem('chatList'));
				// that.chatList = JSON.parse(localStorage.getItem('chatList'));
			}
			
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			// #ifdef APP-PLUS || H5
			var owo = that.owo.data;
			var owoList=[];
			for(var i in owo){
				owoList = owoList.concat(owo[i].container);
			}
			that.owoList = owoList;
			// #endif
			
		},
		methods:{
			back(){
				var that = this;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				uni.navigateBack({
					delta: 1
				});
			},
			loadMore(){
				var that = this;
				
				if(that.isLoad==0){
					if(that.type=="inbox"){
						that.moreText="正在加载中...";
						that.getInboxList(true);
					}
				}
			},
			markHtml(text){
				var that = this;
				var owoList=that.owoList;
				for(var i in owoList){
				
					if(that.replaceSpecialChar(text).indexOf(owoList[i].data) != -1){
						text = that.replaceAll(that.replaceSpecialChar(text),owoList[i].data,"<img src='/"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				return text;
			},
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},
			toInfo(cid,title){
				var that = this;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			goInbox(data){
				var that = this;
				if(data.type=="comment"){
					that.toInfo(data.contentsInfo.cid,data.contenTitle);
				}
				if(data.type=="finance"){
					clearInterval(that.chatLoading);
					that.chatLoading = null
					uni.navigateTo({
					    url: '/pages/user/assets'
					});
				}
				if(data.type=="system"){
					return false;
				}
				
			},
			getUserLv(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankList = that.$API.GetRankList();
				return rankList[i];
			},
			getUserLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankStyle = that.$API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return userlvStyle;
			},
			toType(i){
				var that = this;
				that.type=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				if(i=="inbox"){
					clearInterval(that.chatLoading);
					that.chatLoading = null
					that.getInboxList(false);
				}else{
					that.getMyChat(false);
					that.msgLoading = setInterval(() => {
					 that.getMyChat(false);
					}, 3000);
				}
				
				
			},
			getInboxList(isPage){
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
					url: that.$API.getInbox(),
					data:{
						"token":that.token,
						"limit":8,
						"page":page,
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
								var inboxList = [];
								for(var i in list){
									var arr = list[i];
									arr.style = "background-image:url("+list[i].avatar+");"
									inboxList.push(arr);
								}
								if(isPage){
									that.page++;
									that.inboxList = that.inboxList.concat(inboxList);
								}else{
									that.inboxList = inboxList;
								}
							}else{
								that.moreText="没有更多消息了";
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
			//为了性能考虑，只显示最近30条聊天
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
					url: that.$API.myChat(),
					data:{
						"token":that.token,
						"limit":30,
						"page":page,
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
											localStorage.setItem('chatList',JSON.stringify(chatList));
										}
										
										
									}else{
										that.oldChatList = chatList;
										that.chatList = chatList;
										localStorage.setItem('chatList',JSON.stringify(chatList));
									}
									// 
									
									
								}
							}else{
								that.moreText="没有更多消息了";
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
			commentsAdd(title,coid,reply,cid){
				var that = this;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				uni.navigateTo({
				    url: '/pages/contents/commentsadd?cid='+cid+"&coid="+coid+"&title="+title+"&isreply="+reply
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
			replaceSpecialChar(text) {
				if(!text){
					return false;
				}
				text = text.replace(/&quot;/g, '"');
				text = text.replace(/&amp;/g, '&');
				text = text.replace(/&lt;/g, '<');
				text = text.replace(/&gt;/g, '>');
				text = text.replace(/&nbsp;/g, ' ');
				return text;
			},
			getUserLv(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankList = that.$API.GetRankList();
				return rankList[i];
			},
			getUserLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankStyle = that.$API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return userlvStyle;
			},
			setRead() {
				var that = this;
				that.$Net.request({
					
					url: that.$API.setRead(),
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
			goChat(data){
				var that = this;
				clearInterval(that.chatLoading);
				that.chatLoading = null
				var chatid = data.id;
				//去除未读标志
				var chatList = that.chatList;
				for(var i in chatList){
					if(chatList[i].id==chatid){
						chatList[i].isNew =0;
						chatList[i].unRead =0;
					}
				}
				that.chatList = chatList;
				that.oldChatList = chatList;
				localStorage.setItem('chatList',JSON.stringify(chatList));
				//结束
				var name = data.userJson.name;
				var uid = data.userJson.uid;
				
				clearInterval(that.chatLoading);
				that.chatLoading = null
				uni.navigateTo({
				    url: '/pages/chat/chat?uid='+uid+"&name="+name+"&chatid="+chatid
				});
			}

		}
	}
</script>

<style>
</style>
