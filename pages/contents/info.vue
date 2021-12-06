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
				<view class="action">
					<text class="cuIcon-share"></text>
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
				<text class="info-date" v-if="created!=''">{{formatDate(created)}}
				<!-- <text class="cuIcon-attention"></text>221323 -->
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
				<joMarkdown :nodes="markdownData"></joMarkdown>
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
				<view class="cu-card dynamic no-card" style="margin-top: 20upx;">
					<view class="cu-item" v-for="(item,index) in commentsList" :key="index" v-if="commentsList.length>0">
						<view class="cu-list menu-avatar comment">
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
		
	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	import joMarkdown from '@/components/jo-markdown/decode.vue';
	import markdownFunc from '@/components/jo-markdown/index.js';
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
				
				commentsList:[],
				
				moreText:"加载更多",
				page:1,
				
				isLoad:0,
				
			}
		},
		components: {
			joMarkdown
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			that.loadMore();
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
		},
		onLoad(res) {
			var that = this;
			
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
			that.cid = res.cid;
			that.title = res.title;
			that.getInfo(that.cid);
			that.getCommentsList(false,that.cid);
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
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
					"isMd":0,
				}
				
				Net.request({
					url: API.getContentsInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.title){
							that.category = res.data.category;
							that.created = res.data.created;
							that.commentsNum = res.data.commentsNum;
							that.html=res.data.text;
							that.markdownData = markdownFunc(that.html, 'markdown');
							that.getUserInfo(res.data.authorId);
							
						}
					},
					fail: function(res) {
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
								that.moreText="没有更多评论了";
							}
							
						}
					},
					fail: function(res) {
						that.isLoad=0;
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
		}
	}
</script>

<style>
	
@import "../../static/base.css";
</style>
