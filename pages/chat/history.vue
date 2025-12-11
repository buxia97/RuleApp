<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					历史聊天消息
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<view class="cu-card dynamic no-card" style="margin-top: 20upx;">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"  @input="searchTag"></input>
				</view>
			</view>
			<view class="cu-item chat-history"  v-for="(item,index) in msgList" :key="index" :class="item.isAI==0?'self':''">
				<view class="chat-history-user">
					<view class="cu-avatar radius" :style="'background-image:url('+item.userJson.avatar+');'"></view>
				</view>
				<view class="chat-history-main">
					<view class="chat-history-user">
						{{item.userJson.name}}
					</view>
					<view class="content shadow break-all" @longtap="ToCopy(item.text)">
						<!-- <rich-text :nodes="markHtml(item.text)"></rich-text> -->
						<mp-html :content="item.text" :selectable="true" :show-img-menu="true"  :scroll-table="true" :markdown="true"/>
					</view>
					<view class="date">
					{{formatDate(item.created)}}
					
					
					</view>
				</view>
				<!-- <view class="cu-avatar radius"  v-if="item.isAI==0" :style="'background-image:url('+item.userJson.avatar+');'"></view> -->
				
			</view>
			<view class="load-more" @tap="loadMore" v-if="msgList.length>=limit">
				<text>{{moreText}}</text>
			</view>
			<!-- {{msgList}} -->
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
				id:0,
				msgList:[],
				moreText:"加载更多",
				page:1,
				limit:10,
				
				searchText:"",
				
				isLoading:0,
				avatar:"",
				name:"",
				price:"",
				intro:"",
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getMsgList(false);
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
			
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			that.loadMore();
		},
		onShow(){
			var that = this;
			that.page = 1;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.id){
				that.id = res.id;
				that.getGptInfo();
				that.getMsgList(false);
			}
			
		},
		methods:{
			getGptInfo(){
				var that = this;
				var data = {
					"id":that.id,
				}
				
				that.$Net.request({
					url: that.$API.gptInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var gptInfo = res.data.data;
							that.avatar = gptInfo.avatar;
							that.name = gptInfo.name;
							that.price = gptInfo.price;
							that.intro =  gptInfo.intro;
						}
					},
					fail: function(res) {
					}
				});
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},

			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				if(that.isLoad==0){
					that.getMsgList(true);
				}
			},
			toInfo(cid,title){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getMsgList();
			
			},
			getMsgList(isPage){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.msgList(),
					data:{
						
						"limit":that.limit,
						"page":page,
						"chatid":that.id,
						"searchKey":that.searchText,
						'token':token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var msgList = [];
								for(var i in list){
									var arr = list[i];
									arr.style = "background-image:url("+list[i].userJson.avatar+");"
									msgList.push(arr);
								}
								if(isPage){
									that.page++;
									that.msgList = that.msgList.concat(msgList);
								}else{
									that.msgList = msgList;
								}
							}else{
								that.moreText="没有更多数据了";
								if(!isPage){
									that.msgList = list;
								}
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
			toStatus(i){
				var that = this;
				that.status=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				that.getCommentsList(false);
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
			}
		}
	}
</script>

<style>
</style>
