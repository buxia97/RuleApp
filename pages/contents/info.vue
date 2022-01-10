<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					文章详情
				</view>
				<view class="action info-btn">
					<!--  #ifdef H5 || APP-PLUS -->
					<text class="cuIcon-favor" @tap="toMark" v-if="isMark==0"></text>
					<text class="cuIcon-favorfill" @tap="rmMark" v-else></text>
					<text class="cuIcon-share" @tap="ToShare"></text>
					<!--  #endif -->
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="info" style="margin-top: 20upx;">
			<view class="info-title">
				{{title}}
			</view>
			<view class="info-tyle">
				<text class="text-blue" v-if="category.length>0" @tap="toCategoryContents(category)">{{category[0].name}}</text>
				<text class="text-gray" v-if="category.length==0">暂无分类</text>
				<text class="info-date" v-if="created!=''">{{formatDate(created)}}
				</text>
			</view>
			<view class="info-author">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="userInfo.style"  @tap="toUserContents(userInfo)"></view>
						<view class="content">
							<view class="text-grey" v-if="userInfo.screenName!=''">{{userInfo.screenName}}</view>
							<view class="text-grey" v-else>{{userInfo.name}}</view>
							<view class="text-gray text-sm flex">
								<view class="text-cut">
									{{userInfo.mail}}
								</view> </view>
						</view>
						<view class="action" @tap="toUserContents(userInfo)">
							<view class="text-blue">作品</view>
							
						</view>
					</view>
				</view>
			</view>
			<view class="info-content">
				<!-- <joMarkdown :nodes="markdownData"></joMarkdown> -->
				
				<mp-html :content="html" selectable="true" show-img-menu="true" lazy-load="true" ImgCache="true"/>
				
				<view class="content-btn grid col-2">
					<view class="content-btn-box">
						<view class="content-btn-i" @tap="toLikes">
							<text class="cuIcon-appreciatefill btn-i"></text>
							<text>点赞( {{formatNumber(likes)}} )</text>
						</view>
					</view>
					<view class="content-btn-box" @tap="toReward">
						<view class="content-btn-i">
							<text class="cuIcon-rechargefill btn-i"></text>
							<text>投币</text>
						</view>
					</view>
				</view>
				<view class="tags" v-if="tagList.length>0">
					
					<text class="tags-box" v-for="(item,index) in tagList"  @tap='toTagsContents("#"+item.name+"#",item.mid)'>
						{{item.name}}
					</text>
					
				</view>
			</view>
			<view class="data-box">
				<view class="cu-bar bg-white">
					<view class="action data-box-title">
						<text class="cuIcon-titles text-rule"></text> 评论区 <text v-if="commentsNum>0"> ( {{commentsNum}} ) </text>
					</view>
					<view class="action more" @tap="commentsAdd(title,0,0)">
						<text class="cuIcon-add"></text><text>发布评论</text>
					</view>
				</view>
				<view class="no-data" v-if="commentsList.length==0">
					暂时没有评论
				</view>
				<view class="cu-card dynamic no-card info-comment" style="margin-top: 20upx;">
					<view class="cu-item" v-for="(item,index) in commentsList" :key="index" v-if="commentsList.length>0">
						<view class="cu-list menu-avatar comment">
							<text class="copy-comment" @tap="ToCopy(item.text)">
								复制
							</text>
							<view class="cu-item">
								<view class="cu-avatar round" :style="item.style"></view>
								<view class="content">
									<view class="text-grey">{{item.author}}</view>
									<view class="text-content text-df">
										{{item.text}}
									</view>
									<view class="bg-grey light padding-sm radius margin-top-sm  text-sm" v-if="item.parent>0">
										<view class="flex">
											<view>{{item.parentComments.author}}：</view>
											<view class="flex-sub">{{item.parentComments.text}}</view>
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
	import mpHtml from '@/components/mp-html/mp-html'
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				cid:0,
				title:"",
				html:"",
				commentsNum:0,
				category:[],
				created:'',
				markdownData: {},
				userInfo:{},
				slug:"",
				tagList:[],
				commentsList:[],
				
				moreText:"加载更多",
				page:1,
				
				isLoad:0,
				
				isLoading:0,
				
				isMark:0,
				logid:-1,
				
				token:"",
				
				likes:0,
				
				type:"post",
				
			}
		},
		components: {
		  mpHtml,
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			that.loadMore();
		},
		
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.isLoad=0;
			that.page=1;
			if(that.cid!=0){
				that.getInfo(that.cid);
				that.getCommentsList(false,that.cid);
			}
			
			if(localStorage.getItem('token')){
				that.token=localStorage.getItem('token');
				that.toIsMark();
			}
			//that.allCache();
			
		},
		onPullDownRefresh(){
			var that = this;
			
			var timer = setTimeout(function() {
				that.getInfo(that.cid);
				that.getCommentsList(false,that.cid);
			}, 1000)
		},
		onLoad(res) {
			var that = this;
			
			// #ifdef APP-PLUS || MP-WEIXIN
			that.NavBar = this.CustomBar;
			// #endif
			that.cid = res.cid;
			that.title = res.title;
			
			that.getInfo(that.cid);
			that.getCommentsList(false,that.cid);
			
			var ctx = this.$refs.article;
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			allCache(){
				var that = this;
				var cid = that.cid;
				if(localStorage.getItem('postInfo_'+cid)){
					var postInfo = JSON.parse(localStorage.getItem('postInfo_'+cid));
					that.category = postInfo.category;
					that.created = postInfo.created;
					that.commentsNum = postInfo.commentsNum;
					that.html=postInfo.text;
					that.tagList=postInfo.tag;
					that.slug = postInfo.slug;
					that.getUserInfo(postInfo.authorId);
				}
				if(localStorage.getItem('commentsList_'+cid)){
					that.commentsList = JSON.parse(localStorage.getItem('commentsList_'+cid));
				}
				
			},
			toUserContents(data){
				var that = this;
				var title = data.name+"的文章";
				if(data.screenName){
					title = data.screenName+" 的文章";
				}
				var id= data.uid;
				var type="user";
				uni.navigateTo({
				    url: '../contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			toTagsContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '../contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			toCategoryContents(data){
				var that = this;
				var title = data[0].name;
				var id= data[0].mid;
				var type="meta";
				uni.navigateTo({
				    url: '../contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				if(that.isLoad==0){
					that.getCommentsList(true,that.cid);
				}
				
			},
			getInfo(cid){
				var that = this;
				var data = {
					"key":that.cid,
					"isMd":1,
				}
				that.allCache();
				Net.request({
					url: API.getContentsInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						uni.stopPullDownRefresh();
						if(res.data.title){
							that.title = res.data.title;
							that.category = res.data.category;
							that.created = res.data.created;
							that.commentsNum = res.data.commentsNum;
							that.html=res.data.text;
							that.tagList=res.data.tag;
							that.slug = res.data.slug;
							that.type = res.data.type;
							that.likes =  res.data.likes;
							//这里可以继续处理text字段，将网站内部链接缓存程序链接，从而实现内部页面跳转
							
							//下面是uniapp的markdown解析插件
							//that.markdownData = markdownFunc(that.html, 'markdown');
							that.getUserInfo(res.data.authorId);
							localStorage.removeItem('postInfo_'+that.cid);
							localStorage.setItem('postInfo_'+that.cid,JSON.stringify(res.data));
							var timer = setTimeout(function() {
								that.allCache();
							}, 200)
							
						}
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
					}
				})
			},
			getUserInfo(id){
				var that = this;
				var data = {
					"key":id,
				}
				
				Net.request({
					url: API.getUserInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.userInfo = res.data.data;
							that.userInfo.style = "background-image:url("+res.data.data.avatar+");"
						}
					},
					fail: function(res) {
					}
				});
			},
			getCommentsList(isPage,id){
				var that = this;
				var data = {
					"cid":id,
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getCommentsList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":4,
						"page":page,
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
								localStorage.setItem('commentsList_'+that.cid,JSON.stringify(that.commentsList));
								
							}else{
								that.moreText="没有更多评论了";
							}
							
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						that.isLoad=0;
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
						
						that.moreText="加载更多";
					}
				})
			},
			commentsAdd(title,coid,reply){
				var that = this;
				var cid = that.cid;
				uni.navigateTo({
				    url: '../contents/commentsadd?cid='+cid+"&coid="+coid+"&title="+title+"&isreply="+reply
				});
			},
			toReward(){
				var that = this;
				var data = {
					"type":"reward",
					"cid":that.cid,
					"num":5,
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.addLog(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							uni.showToast({
								title: "成功打赏 5 积分",
								icon: 'none'
							})
						}
						
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			toLikes(){
				var that = this;
				var data = {
					"type":"likes",
					"cid":that.cid,
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.addLog(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							that.likes++;
							//that.getInfo(that.cid);
						}
						
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			toIsMark(){
				var that = this;
				Net.request({
					
					url: API.getIsMark(),
					data:{
						"token":that.token,
						"cid":that.cid
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.isMark = res.data.data.isMark;
							that.logid = res.data.data.logid;
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
			toMark(){
				
				var that = this;
				var data = {
					"type":"mark",
					"cid":that.cid,
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.addLog(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							that.isMark=1;
							that.toIsMark();
						}
						
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
			},
			rmMark(){
				var that = this;
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.removeLog(),
					data:{
						"key":that.logid,
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							that.isMark=1;
							that.toIsMark();
						}
						
					},
					fail: function(res) {
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
					}
				})
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
			ToShare(){
				
				var that = this;
				var url = API.GetWebUrl()+"archives/"+that.cid+"/"
				if(that.type!="post"){
					url = API.GetWebUrl()+that.slug+".html"
				}
				// #ifdef APP-PLUS
				uni.shareWithSystem({
				  href: url,
				  summary:that.title,
				  success(){
				    // 分享完成，请注意此时不一定是成功分享
					
				  },
				  fail(){
				    // 分享失败
				  }
				});
				// #endif
				// #ifdef h5
				that.ToCopy(url);
				// #endif
			},
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
			}
		}
	}
</script>

<style>
	
@import "../../static/base.css";
</style>
