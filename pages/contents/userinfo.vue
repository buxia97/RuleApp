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
				<block v-if="vid!=uid">
					<view class="action info-btn">
						<!--  #ifdef H5 || APP-PLUS -->
						<text class="cuIcon-moreandroid" @tap="moreShow=!moreShow"></text>
						<!--  #endif -->
						<view class="info-more-links" :class="moreShow?'moreShow':''">
							<view class="info-more-links-box"  @tap="toSearch">
								<text class="cuIcon-search"></text>搜索
							</view>
							<view class="info-more-links-box" @tap="report(name,2)">
								<text class="cuIcon-warn"></text>举报
							</view>
							<view class="info-more-links-box" @tap="goMyBan(uid)" v-if="isBan==0">
								<text class="cuIcon-attentionforbidfill"></text>拉黑
							</view>
						</view>
					</view>
				</block>
				<block v-else>
					<view class="action" @tap="toEdit">
						<text class="cuIcon-writefill"></text>
					</view>
				</block>
				
				
				<!--  #endif -->
			</view>
		</view>
		<!-- <view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view> -->
		<view class="all-box" style="margin-top:-10upx">
			
			<view class="user-info" :style="'padding-top:'+NavBar+'px;'">
				<view class="user-info-bg" v-if="userBg==''">
					<image :src="avatar" mode="aspectFill"></image>
				</view>
				<view class="user-info-bg infoBg-Show" v-else>
					<image :src="userBg" mode="aspectFill"></image>
				</view>
				<view class="user-info-main">
					<view class="user-info-content">
						<view class="user-info-col">
							<view class="user-header">
								<image :src="avatar"></image>
							</view>
							<view class="user-text">
							
								<text class="user-info-name">
									
									<block v-if="isvip>0">
										<block v-if="vip==1">
											<text class="text-red">
												{{name}}
											</text>
										</block>
										<block v-else>
											<text class="text-yellow">
												{{name}}
											</text>
										</block>
									</block>
									<block v-else>
										{{name}}
									</block>
								</text>
								<!-- <view class="userinfo-lv"> -->
									<!--  #ifdef H5 || APP-PLUS -->
								<!-- <text class="userlv" :style="getUserLvStyle(lv)">{{getUserLv(lv)}}</text> -->
								<text class="userlv" :style="getLvStyle(experience)">{{getLv(experience)}}</text>
								<!--  #endif -->
								<block v-if="birthday&&birthday!=0">
									<text class="age-ico bg-blue">{{getAge(birthday)}}岁</text>
								</block>
								<text class="userlv customize" v-if="customize&&customize!=''">{{customize}}</text>
								<text class="identifyLv bg-mauve cuIcon-selection" v-if="identifyConsumer==1"></text>
								<text class="identifyLv bg-yellow cuIcon-selection" v-if="identifyCompany==1"></text>
								
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
								<view class="user-info-local">
									<text>IP归属：{{getLocal(local)}} </text>
									<text class="margin-left-sm" @click="toUserList(region)">所在地：<text class="text-blue">{{getRegion(region)}}</text> </text>
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
			<template  v-if="isBan==0">
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="search-type grid col-4">
					<view class="search-type-box" @tap="toType(0)" :class="type==0?'active':''">
						<text>文章</text>
					</view>
					<view class="search-type-box" @tap="toType(2)" :class="type==2?'active':''">
						<text>动态</text>
					</view>
					<view class="search-type-box" @tap="toType(3)" :class="type==3?'active':''">
						<text>帖子</text>
					</view>
					<view class="search-type-box" @tap="toType(1)" :class="type==1?'active':''">
						<text>评论</text>
					</view>
					
				</view>
				<!--  #endif -->
				<!--  #ifdef MP -->
				<view class="search-type grid col-2">
					<view class="search-type-box" @tap="toType(0)" :class="type==0?'active':''">
						<text>文章</text>
					</view>
					<view class="search-type-box" @tap="toType(2)" :class="type==2?'active':''">
						<text>动态</text>
					</view>
				</view>
				<!--  #endif -->
				
				<view class="cu-card article no-card" v-if="type==0">
					<block v-for="(item,index) in contentsList" :key="index" v-if="type==0">
						<articleItem :item="item"></articleItem>
					</block>
					<view class="load-more" @tap="loadMore" v-if="contentsList.length>0">
						<text>{{moreText}}</text>
					</view>
					<view class="no-data" v-if="contentsList.length==0">
						<text class="cuIcon-text"></text>
						暂时没有数据
					</view>
				
				</view>
				<view class="search-space" v-if="type==2">
					<view class="no-data" v-if="spaceList.length==0">
						<text class="cuIcon-text"></text>
						暂时没有动态
					</view>
					<spaceItem :spaceList="spaceList"></spaceItem>
					<view class="load-more" @tap="loadMore" v-if="spaceList.length>0">
						<text>{{moreText}}</text>
					</view>
				</view>
				<!--论坛帖子-->
				<view class="forum-list-main" v-if="type==3">
					<view class="no-data" v-if="postList.length==0">
						<text class="cuIcon-text"></text>暂时没有帖子
					</view>
					<block v-for="(item,index) in postList" :key="index">
						<forumItem :item="item" :myPurview="0"></forumItem>
					</block>
					<view class="load-more" @tap="loadMore" v-if="postList.length>0">
						<text>{{moreText}}</text>
					</view>
				</view>
				<!--论坛帖子结束-->
				<!--评论-->
				<view class="cu-list menu-avatar" v-if="type==1">
					<view class="no-data" v-if="commentsList.length==0">
						<text class="cuIcon-text"></text>
						暂时没有评论
					</view>
					<view class="cu-card dynamic no-card" style="margin-top: 20upx;">
						<block  v-for="(item,index) in commentsList" :key="index" v-if="commentsList.length>0">
							<commentItem :item="item" :isHead="false"></commentItem>
						</block>
						
					</view>
					
					<view class="load-more" @tap="loadMore" v-if="commentsList.length>0">
						<text>{{moreText}}</text>
					</view>
				</view>
				<!--评论结束-->
			</template>
			
			<template v-else>
				<view class="no-data" v-if="isBan>0">
					<text class="cuIcon-text"></text>
					<template v-if="isBan==2">
						你已将对方拉黑，无法查看内容！
						<view class="text-center margin-top-sm">
							<text class="cu-btn bg-red" @tap="removeBan(uid)">解除拉黑</text>
						</view>
					</template>
					<template v-if="isBan==1">
						对方已将你拉黑，无法查看内容！
					</template>
					
				</view>
			</template>
			<!--占位区域-->
			<view style="width: 100%;height: 100upx; background-color: #f6f6f6;"></view>
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
					<button class="cu-btn bg-gradual-red" @tap="follow(0)" v-if="isFollow==1"><text class="cuIcon-check"></text>已关注</button>
					<button class="cu-btn bg-gradual-red" @tap="follow(1)" v-else><text class="cuIcon-add"></text>关注Ta</button>
					
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
				spaceList:[],
				postList:[],
				
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
				userBg:"",
				region:"",
				fanNum:0,
				birthday:0,
				contentsNum:0,
				commentsNum:0,
				isBan:0,
				
				scrollTop:0,
				isFollow:0,
				
				vid:"",
				
				local:"",
				
				identifyCompany:0,
				identifyConsumer:0,
				
				experience:0,
				
				moreShow:false
				
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
			
			//plus.navigator.setStatusBarStyle("dark")
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
			}else if(i==1){
				that.getCommentsList(false)
			}else if(i==3){
				that.getPostList(false)
			}else{
				that.getSpaceList(false)
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
			// that.name =  res.name;
			that.identifyStatus();
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
			getRegion(regionStr){
				var that = this;
				if (!regionStr || typeof regionStr !== 'string') return '未设置'; // 空值或非字符串返回空
				// 按 || 分割
				const parts = regionStr.split('||');
				// 过滤空字符串，并去掉首尾空格
				const filtered = parts.map(p => (p ? p.trim() : '')).filter(p => p);
				// 拼接成一个字符串
				var regionStr =  filtered.join('');
				regionStr = regionStr.replace("市辖区","");
				return regionStr;
			},
			toType(i){
				var that = this;
				that.type=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				if(i==0){
					that.getContentsList(false);
				}else if(i==1){
					that.getCommentsList(false)
				}else if(i==3){
					that.getPostList(false)
				}else{
					that.getSpaceList(false)
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
			identifyStatus() {
				var that = this;
				that.$Net.request({
					
					url: that.$API.identifyStatus(),
					data:{
						"uid":that.uid
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						if(res.data.code==1){
							
							that.identifyCompany = res.data.data.identifyCompany;
							that.identifyConsumer = res.data.data.identifyConsumer;
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			toUserList(regionStr){
				var that = this;
				if (!regionStr || typeof regionStr !== 'string') return false; // 空值或非字符串返回空
				// 按 || 分割
				const parts = regionStr.split('||');
				// 过滤空字符串，并去掉首尾空格
				const filtered = parts.map(p => (p ? p.trim() : '')).filter(p => p);
				// 拼接成一个字符串
				var regionStr =  filtered[2];
				uni.navigateTo({
				    url: '/pages/user/userlist?searchText='+regionStr
				});
			},
			getUserInfo(){
				var that = this;
				that.$Net.request({
					
					url: that.$API.getUserInfo(),
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
							if(res.data.data.screenName){
								that.name = res.data.data.screenName;
							}else{
								that.name = res.data.data.name;
							}
							that.local = res.data.data.local;
							that.vip = res.data.data.vip;
							that.isvip = res.data.data.isvip;
							that.lv = res.data.data.lv;
							that.isBan =res.data.data.isBan;
							that.avatar = res.data.data.avatar;
							that.customize = res.data.data.customize;
							that.introduce = res.data.data.introduce;
							that.experience = res.data.data.experience;
							that.region = res.data.data.region;
							that.birthday = res.data.data.birthday;
							if(res.data.data.userBg){
								that.userBg = res.data.data.userBg;
							}
							
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
				}else if(that.type==1){
					that.getCommentsList(true)
				}else if(that.type==3){
					that.getPostList(true)
				}else{
					that.getSpaceList(true)
				}
				
			},
			reload(){
				var that = this;
				if(that.type==0){
					that.getContentsList(false);
				}else if(that.type==1){
					that.getCommentsList(false)
				}else if(that.type==3){
					that.getPostList(false)
				}else{
					that.getSpaceList(false)
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
							var name = that.name;
							var uid = that.uid;
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
			getUserData() {
				var that = this;
				that.$Net.request({
					
					url: that.$API.getUserData(),
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
				var token = ""
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				
				}
				var data = {
					"type":"post",
					"authorId":that.uid,
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				that.$Net.request({
					url: that.$API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":8,
						"page":page,
						"order":"created",
						"token":token
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
				that.$Net.request({
					url: that.$API.getCommentsList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
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
				that.$Net.request({
					
					url: that.$API.isFollow(),
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
				that.$Net.request({
					
					url: that.$API.follow(),
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
				if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
					uni.showToast({
						title: "请先登录哦",
						icon: 'none'
					})
					return false;
				}
				uni.navigateTo({
					url: '/pages/user/post?type=edit'+'&cid='+cid
				});
			},
			getUserLv(i){
				var that = this;
				var rankList = that.$API.GetRankList();
				return rankList[i];
			},
			getUserLvStyle(i){
				var that = this;
				var rankStyle = that.$API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return userlvStyle;
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
			toEdit(){
				var that = this;
				
				uni.redirectTo({
				    url: '/pages/user/useredit'
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
			getSpaceList(isPage){
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
				var data = {
					"uid":that.uid 
				}
				that.$Net.request({
					url: that.$API.spaceList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":10,
						"page":page,
						"order":"created",
						"token":token
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.changeLoading = 1;
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
						
						that.changeLoading = 1;
						that.isLoad=0;
						that.moreText="加载更多";
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getPostList(isPage){
				var that = this;
				var page = that.page;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				if(isPage){
					page++;
				}
				var data = {
					"status":"1",
					"authorId":that.uid,
				}
				that.$Net.request({
					url: that.$API.postList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":10,
						"page":page,
						"order":that.orderKey,
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
								var postList = list;
								for(var i in postList){
									postList[i].isAds = 0;
								}
								if(isPage){
									that.page++;
									that.postList = that.postList.concat(postList);
								}else{
									that.postList = postList;
								}
							}else{
								if(isPage){
									that.moreText="没有更多数据了";
								}else{
									that.postList = [];
								}
								
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						that.changeLoading = 1;
						that.isLoad=0;
						that.moreText="加载更多";
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			getLocal(local){
				var that = this;
				if(local&&local!=''){
					var local_arr = local.split("|");
					if(!local_arr[3]||local_arr[3]==0){
						return local_arr[2];
					}else{
						return local_arr[3];
					}
					
				}else{
					return "未知"
				}
				
			},
			getLv(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var lv  = that.$API.getLever(i);
				var leverList = that.$API.GetLeverList();
				return leverList[lv];
			},
			getLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var lv  = that.$API.getLever(i);
				var rankStyle = that.$API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[lv];
				return userlvStyle;
			},
			report(title,type){
				var that = this;
				if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
					uni.showToast({
						title: "请先登录哦",
						icon: 'none'
					})
					return false;
				}
				uni.redirectTo({
				    url: '/pages/user/report?title='+title+"&type="+type
				});
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
			},
			goMyBan(uid){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":uid,
					"type":"banUser",
					"token":token
				}
				uni.showModal({
					title: "确定要拉黑Ta吗？拉黑后，将屏蔽该用户所有发布内容！",
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							
							that.$Net.request({
								url: that.$API.ban(),
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
									if(res.data.code==1){
										that.isBan = 2;
										that.myBanLog();
									}else{
										if(res.data.msg=="用户未登录或Token验证失败"){
											uni.showToast({
												title: "请先登录",
												icon: 'none'
											})
											uni.navigateTo({
												url: '/pages/user/login'
											});
										}else{
											uni.showToast({
												title: res.data.msg,
												icon: 'none'
											})
										}
										
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
			myBanLog(){
				var that = this;
				var token = ""
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				
				}else{
					return false;
				}
				that.$Net.request({
					
					url: that.$API.myBanLog(),
					data:{
						"token":token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var myBanLog = res.data.data;
							localStorage.setItem('myBanLog',myBanLog);
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
			removeBan(id){
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
					title: '确定要解除拉黑吗',
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							
							that.$Net.request({
								url: that.$API.removeBan(),
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
									
									
									if(res.data.code==1){
										uni.showToast({
											title: "操作成功！5分钟左右生效！",
											icon: 'none'
										})
										that.getUserInfo();
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
</style>
