<template>
	<view class="userpost userIndex" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]"  :class="scrollTop>40?'goScroll':''">
			<view class="cu-bar" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="scrollTop>40">
					{{name}}的主页
					</block>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="toSearch">
					<text class="cuIcon-search"></text>
				</view>
				<!--  #endif -->
			</view>
		</view>
		<!-- <view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view> -->
		<view class="all-box" style="margin-top:-10upx">
			
			<view class="user-info" :style="'padding-top:'+NavBar+'px;'">
				<view class="user-info-bg">
					<image :src="avatar" mode="aspectFill"></image>
				</view>
				<view class="user-info-main">
					<view class="user-info-content">
						<view class="user-info-col">
							<view class="user-header">
								<image :src="avatar"></image>
							</view>
							<view class="user-text">
							
								<text class="user-info-name">{{name}}</text>
								<!-- <view class="userinfo-lv"> -->
									<!--  #ifdef H5 || APP-PLUS -->
								<text class="userlv" :style="getUserLvStyle(lv)">{{getUserLv(lv)}}</text>
								<!--  #endif -->
								<text class="userlv customize" v-if="customize&&customize!=''">{{customize}}</text>
								<!--  #ifdef H5 || APP-PLUS -->
								<block v-if="isvip==1">
									<block v-if="vip==1">
										<text class="isVIP bg-gradual-red">VIP</text>
									</block>
									<block v-else>
										<text class="isVIP bg-yellow">VIP</text>
									</block>
								</block>
									<!--  #endif -->
								<!-- </view> -->
								<view class="user-info-data">
									<text class="user-info-data-box" @tap="goFanList(uid)">
										<text class="user-data-num">{{fanNum}}</text>
										<text class="user-data-label">粉丝</text>
									</text>
									<text class="user-info-data-box">
										<text class="user-data-num">{{contentsNum}}</text>
										<text class="user-data-label">文章</text>
									</text>
									<text class="user-info-data-box">
										<text class="user-data-num">{{commentsNum}}</text>
										<text class="user-data-label">评论</text>
									</text>
								</view>
							</view>
							
						</view>
						<view class="user-introduce">
							<text class="cuIcon-text"></text>
							<block v-if="introduce!=''&&introduce">
								{{subText(introduce,60)}}
							</block>
							<block v-else>
								Ta还没有个人介绍哦
							</block>
						</view>
						
					</view>
					
				</view>
			</view>
			<!--  #ifdef H5 || APP-PLUS -->
			<view class="search-type grid col-2">
				<view class="search-type-box" @tap="toType(0)" :class="type==0?'active':''">
					<text>文章</text>
				</view>
				<view class="search-type-box" @tap="toType(1)" :class="type==1?'active':''">
					<text>评论</text>
				</view>
			</view>
			<!--  #endif -->
			<view class="cu-card article no-card" v-if="type==0">
				<view class="cu-card article no-card" v-for="(item,index) in contentsList" :key="index"  @tap="toInfo(item)">
					<view class="cu-item shadow">
						<view class="title">
							<view class="text-cut">{{item.title}}</view>
						</view>
						<view class="content">
							<image v-if="item.images.length>0" :src="item.images[0]"
							 mode="aspectFill"></image>
							<view class="desc">
								<view class="text-content"> {{subText(item.text,80)}}</view>
								<view>
									<view class="cu-tag data-author"><text class="cuIcon-attentionfill"></text>{{formatNumber(item.views)}}</view>
									<view class="cu-tag data-author"><text class="cuIcon-appreciatefill"></text>{{item.likes}}</view>
									<view class="cu-tag data-author"><text class="cuIcon-messagefill"></text>{{item.commentsNum}}</view>
									<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="load-more" @tap="loadMore" v-if="contentsList.length>0">
					<text>{{moreText}}</text>
				</view>
				<view class="no-data" v-if="contentsList.length==0">
					<text class="cuIcon-text"></text>暂时没有数据
				</view>

			</view>
			
			<!--评论-->
			<view class="cu-list menu-avatar" v-if="type==1">
				<view class="no-data" v-if="commentsList.length==0">
					暂时没有评论
				</view>
				<view class="cu-card dynamic no-card" style="margin-top: 20upx;">
					<view class="cu-item" v-for="(item,index) in commentsList" :key="index" v-if="commentsList.length>0">
						<view class="cu-list menu-avatar comment">
							<text class="copy-comment" @tap="ToCopy(item.text)">
								复制
							</text>
							<view class="cu-item">
								<view class="cu-avatar round" :style="item.style"></view>
								<view class="content">
									<view class="text-grey">{{item.author}}
									</view>
									<view class="text-content text-df break-all">
										<rich-text :nodes="markHtml(item.text)"></rich-text>
									</view>
									<view class="bg-grey light padding-sm radius margin-top-sm  text-sm">
										<view class="flex" @tap="toInfoComment(item.cid,item.contenTitle)">
											<view>{{item.contenTitle}}</view>
											
										</view>
									</view>
									<view class="margin-top-sm flex justify-between">
										<view class="text-gray text-df">{{formatDate(item.created)}}</view>
										<view>
											<text class="cuIcon-messagefill text-gray margin-left-sm" @tap="commentsAdd(item.author+'：'+item.text,item.coid,1)"></text>
										</view>
									</view>
								</view>
							</view>
				
							
						</view>
					</view>
				</view>
				
				<view class="load-more" @tap="loadMore" v-if="commentsList.length>0">
					<text>{{moreText}}</text>
				</view>
			</view>
			<!--评论结束-->
			<!--占位区域-->
			<view style="width: 100%;height: 100upx;"></view>
		</view>
		<!--底部操作-->
		<view class="userInfo-bottom-btn" v-if="vid!=uid">
			<view class="userInfo-bottom-main grid col-2">
				<view class="userInfo-bottom-box" @tap="getPrivateChat()">
					<view class="userInfo-tochat">
						<text class="cuIcon-mark"></text>私聊
					</view>
					
				</view>
				<view class="userInfo-bottom-box">
					<button class="cu-btn bg-gradual-red" @tap="follow(0)" v-if="isFollow==1"><text class="cuIcon-add"></text>已关注</button>
					<button class="cu-btn bg-gradual-red" @tap="follow(1)" v-else><text class="cuIcon-add"></text>关注</button>
					
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
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
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
				
				contentsList:[],
				
				commentsList:[],
				
				userList:[],
				owo:owo,
				owoList:[],
				
				type:0,
				
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
				
				isLoading:0,
				
				title:"",
				uid:0,
				avatar:"",
				name:"",
				customize:"",
				lv:"",
				vip:"",
				isvip:"",
				introduce:"",
				fanNum:0,
				contentsNum:0,
				commentsNum:0,
				
				scrollTop:0,
				isFollow:0,
				
				vid:"",
				
				
			}
		},
		onPageScroll(res){
			var that = this;
			that.scrollTop = res.scrollTop;
		},
		onShow(){
			var that = this;
			if(localStorage.getItem('userinfo')){
				
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.vid = userInfo.uid;
			}
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
			
			
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			if(that.isLoad==0){
				that.loadMore();
			}
			
		},
		onPullDownRefresh(){
			var that = this;
			var i = that.type;
			that.page=1;
			that.moreText="加载更多";
			that.isLoad=0;
			if(i==0){
				that.getContentsList(false);
			}else{
				that.getCommentsList(false)
			}
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
			that.title = res.title;
			that.uid =  res.uid;
			that.avatar =  res.avatar;
			that.name =  res.name;
			that.getIsFollow();
			that.getUserInfo();
			that.getUserData();
			// #ifdef APP-PLUS || H5
			var owo = that.owo.data;
			var owoList=[];
			for(var i in owo){
				owoList = owoList.concat(owo[i].container);
			}
			that.owoList = owoList;
			// #endif
			that.getContentsList(false);
			
		},
		methods: {
			toType(i){
				var that = this;
				that.type=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				if(i==0){
					that.getContentsList(false);
				}else{
					that.getCommentsList(false)
				}
			},
			goFanList(uid){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/fanList?uid='+uid
				});
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			getUserLv(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankList = API.GetRankList();
				return rankList[i];
			},
			getUserLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankStyle = API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return userlvStyle;
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
			getUserInfo(){
				var that = this;
				Net.request({
					
					url: API.getUserInfo(),
					data:{
						"key":that.uid
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.vip = res.data.data.vip;
							that.isvip = res.data.data.isvip;
							that.lv = res.data.data.lv;
							that.customize = res.data.data.customize;
							that.introduce = res.data.data.introduce;
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
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				if(that.type==0){
					that.getContentsList(true);
				}else{
					that.getCommentsList(true)
				}
				
			},
			reload(){
				var that = this;
				if(that.type==0){
					that.getContentsList();
				}else{
					that.getCommentsList()
				}
				
			},
			getPrivateChat(){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
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
				var touid = that.uid;
				var data={
					"touid":touid,
					"token":token
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.getPrivateChat(),
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
							var name = that.name;
							var uid = that.uid;
							var avatar = that.avatar;
							var chatid = res.data.data
							uni.redirectTo({
							    url: '/pages/chat/chat?uid='+uid+"&avatar="+avatar+"&name="+name+"&chatid="+chatid
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
			getUserData() {
				var that = this;
				Net.request({
					
					url: API.getUserData(),
					data:{
						"uid":that.uid
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res));
						if(res.data.code==1){
							that.fanNum = res.data.data.fanNum;
							that.contentsNum = res.data.data.contentsNum;
							that.commentsNum = res.data.data.commentsNum;
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
			getContentsList(isPage){
				var that = this;
				var data = {
					"type":"post",
					"authorId":that.uid,
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":8,
						"page":page,
						"order":"created"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						uni.stopPullDownRefresh();
						that.isLoad=0;
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								//that.contentsList = list;
								if(isPage){
									that.page++;
									that.contentsList = that.contentsList.concat(list);
								}else{
									that.contentsList = list;
								}
								
								
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
						uni.stopPullDownRefresh();
						that.moreText="加载更多";
						that.isLoad=0;
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getCommentsList(isPage){
				var that = this;
				var data = {
					"type":"comment",
					"authorId":that.uid,
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getCommentsList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":5,
						"page":page,
						"order":"created"
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						uni.stopPullDownRefresh();
						that.isLoad=0;
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var commentsList = [];
								for(var i in list){
									var arr = list[i];
									arr.style = "background-image:url("+list[i].avatar+");"
									commentsList.push(arr);
								}
								if(isPage){
									that.page++;
									that.commentsList = that.commentsList.concat(commentsList);
								}else{
									that.commentsList = commentsList;
								}
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
						uni.stopPullDownRefresh();
						that.isLoad=0;
						that.moreText="加载更多";
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getIsFollow(){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					token:token,
					touid:that.uid,
				}
				Net.request({
					
					url: API.isFollow(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isFollow = res.data.code;
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			follow(type){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
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
				var data = {
					token:token,
					touid:that.uid,
					type:type,
				}
				that.isFollow = type;
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.follow(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res))
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						that.getIsFollow();
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						uni.stopPullDownRefresh();
						that.getIsFollow();
					}
				})
			},
			commentsAdd(title,coid,reply){
				var that = this;
				var cid = that.cid;
				uni.navigateTo({
				    url: '/pages/contents/commentsadd?cid='+cid+"&coid="+coid+"&title="+title+"&isreply="+reply
				});
			},
			toPost(){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/user/post'
				});
			},
			toEdit(cid){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/user/post?type=edit'+'&cid='+cid
				});
			},
			subText(text,num){
				if(text.length < null){
					return text.substring(0,num)+"……"
				}else{
					return text;
				}
				
			},
			getUserLv(i){
				var that = this;
				var rankList = API.GetRankList();
				return rankList[i];
			},
			getUserLvStyle(i){
				var that = this;
				var rankStyle = API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return userlvStyle;
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
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
			toInfoComment(cid,title){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			toSearch(){
				var that = this;
				
				uni.redirectTo({
				    url: '/pages/contents/search'
				});
			},
			ToCopy(text) {
				var that = this;
				// #ifdef APP-PLUS
				uni.setClipboardData({
					data: text,
					success: () => { //复制成功的回调函数
						uni.showToast({ //提示
							title: "复制成功"
						})
					}
				});
				// #endif
				// #ifdef H5 
				let textarea = document.createElement("textarea");
				textarea.value = text;
				textarea.readOnly = "readOnly";
				document.body.appendChild(textarea);
				textarea.select();
				textarea.setSelectionRange(0, text.length) ;
				uni.showToast({ //提示
					title: "复制成功"
				})
				var result = document.execCommand("copy") 
				textarea.remove();
				
			// #endif
			},
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
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
		}
	}
</script>

<style>
</style>
