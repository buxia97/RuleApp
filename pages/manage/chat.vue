<template>
	<view :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					聊天室管理
				</view>
				<view class="action">
					<text class="text-blue" @tap="addGroup">创建群聊</text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box data-inbox">
			<view class="search-type grid col-2">
				<view class="search-type-box" @tap="toType(1)" :class="type==1?'active':''">
					<text>全站群聊</text>
				</view>
				<view class="search-type-box" @tap="toType(0)" :class="type==0?'active':''">
					<text>全站私聊</text>
				</view>
			</view>
			<block v-if="type==1">
				<view class="no-data" v-if="chatList.length==0">
					暂时没有数据
				</view>
				<view class="cu-list menu-avatar"  v-if="chatList.length>0">
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
									<block v-if="item.lastMsg">
										
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
							<view class="cu-tag sm" style="background: none;" v-if="item.isNew==0">&nbsp</view>
							<view class="cu-tag round bg-red sm" v-else>new</view>
						</view>
					</view>
					</block>
				</view>
			</block>
			<block v-if="type==0">
				<view class="no-data" v-if="chatList.length==0">
					暂时没有数据
				</view>
				<view class="cu-list menu-avatar"  v-if="chatList.length>0">
					<block v-for="(item,index) in chatList" :key="index">
					<view class="cu-item" @tap="goChat(item)">
						<view class="cu-avatar round lg" :style="'background-image:url('+item.userJson.avatar+');'"></view>
						<view class="content">
							<view><view class="text-cut">{{item.userJson.name}}
							<block v-if="type==0">
								和{{item.userJson.toName}}
							</block>
							</view></view>
							<view class="text-gray text-sm flex">
								<view class="text-cut">
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
										<text class="text-blue">[聊天者已开启屏蔽]</text>
									</block>
								</view>
							</view>
						</view>
						<view class="action">
							<view class="text-grey text-xs">{{chatFormatDate(item.lastTime)}}</view>
							<view class="cu-tag sm" style="background: none;" v-if="item.isNew==0">&nbsp</view>
							<view class="cu-tag round bg-red sm" v-else>new</view>
						</view>
					</view>
					</block>
				</view>
			</block>
			<view class="load-more" @tap="loadMore" v-if="chatList.length>0">
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
				
				chatList:[],
				type:1,
				
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
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
				that.getMyChat(false);
			}
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
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
				that.getMyChat(false);
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
				uni.navigateBack({
					delta: 1
				});
			},
			loadMore(){
				var that = this;
				
				if(that.isLoad==0){
					that.moreText="正在加载中...";
					that.getMyChat(true);
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
				that.chatList = [];
				that.type=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				that.getMyChat(false);
			},

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
						that.isLoad=0;
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var chatList = [];
								for(var i in list){
									var arr = list[i];
									arr.isNew =0;
									chatList.push(arr);
								}
								if(isPage){
									that.page++;
									that.chatList = that.chatList.concat(chatList);
								}else{
									that.chatList = chatList;
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
			commentsAdd(title,coid,reply,cid){
				var that = this;
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
				if(data.type==0){
					var name = data.userJson.name;
					var uid = data.userJson.uid;
					var chatid = data.id;
					uni.navigateTo({
					    url: '/pages/chat/chat?uid='+uid+"&name="+name+"&chatid="+chatid+"&type=0"
					});
				}
				if(data.type==1){
					var name = data.name;
					var chatid = data.id;
					uni.navigateTo({
					    url: '/pages/chat/chat?&name='+name+'&chatid='+chatid+'&type=1'
					});
				}
				
			},
			addGroup(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/manage/addGroup'
				});
			},

		}
	}
</script>

<style>
</style>
