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
					
					<text class="cuIcon-search"  @tap="toSearch"></text>
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
				
				<mp-html :content="html" selectable="true" show-img-menu="true" ImgCache="true" scroll-table="true"/>
				<view class="content-shop">
						<view class="cu-card article no-card" v-for="(item,index) in shopList"  @tap="shopInfo(item)">
							
							<view class="cu-item shadow" >
								<view class="content">
									<text class="info-shop-status cu-btn bg-orange" v-if="item.status!=1">未上架</text>
									<image :src="item.imgurl"
									 mode="aspectFill"></image>
									<view class="desc">
										<view class="text-content">{{item.title}}</view>
										<view class="text-i">
											<text class="text-red">{{item.price}} 积分</text>
											<text class="cuIcon-cart"></text>
										</view>
									</view>
								</view>
							</view>
							
					</view>
				</view>
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
			<view class="ads-box" v-if="ads!=''">
				<image :src="ads[0]" mode="widthFix" @tap="toAds(ads[1])"></image>
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
									<view class="text-content text-df break-all">
										<rich-text :nodes="markCommentHtml(item.text)"></rich-text>
									</view>
									<view class="bg-grey light padding-sm radius margin-top-sm  text-sm" v-if="item.parent>0">
										<view class="flex">
											<view>{{item.parentComments.author}}：</view>
											<view class="flex-sub break-all">{{item.parentComments.text}}</view>
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
				<view style="height: 100upx"></view>
			</view>
		</view>
		<!--打赏选择-->
		<view class="cu-modal bottom-modal" :class="modalName=='ChooseModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<view class="cu-bar bg-white">
					<view class="action text-blue" @tap="hideModal">取消</view>
					<view class="action text-green" @tap="toReward">确定</view>
				</view>
				<view class="grid col-3 padding-sm">
					<view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
						<button class="cu-btn orange lg block" :class="item.checked?'bg-orange':'line-orange'" @tap="ChooseCheckbox(index)"> {{item.name}}
							<view class="cu-tag sm round" :class="item.checked?'bg-white text-orange':'bg-orange'" v-if="item.hot">HOT</view>
						</button>
					</view>
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
		<view class="info-footer grid col-2">
			<view class="info-footer-input">
				<view class="info-input-box"  @tap="commentsAdd(title,0,0)">
					<text class="cuIcon-writefill"></text>留下评论&吐槽
				</view>
			</view>
			<view class="info-footer-btn">
				<text class="cuIcon-appreciate" @tap="toLikes"></text>
				<text class="cuIcon-favor" @tap="toMark" v-if="isMark==0"></text>
				<text class="cuIcon-favorfill text-orange" @tap="rmMark" v-else></text>
				<!-- <text class="cuIcon-recharge"  @tap="toReward"></text> -->
				<text class="cuIcon-recharge"  @tap="showModal" data-target="ChooseModal"></text>
				<text class="cuIcon-share text-blue" @tap="ToShare"></text>
				
				
			</view>
		</view>
	</view>
</template>
<script>
	import mpHtml from '@/components/mp-html/mp-html'
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	import owo from '../../static/owo/OwO.js'
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
				
				shopList:[],
				shopID:-1,
				
				owo:owo,
				owoList:[],
				
				isCommnet:0,
				
				modalName: null,
				checkbox: [{
					value: 0,
					name: '5积分',
					num:5,
					checked: false,
					hot: false,
				}, {
					value: 1,
					name: '10积分',
					num:10,
					checked: false,
					hot: false,
				}, {
					value: 2,
					name: '30积分',
					num:30,
					checked: false,
					hot: false,
				}, {
					value: 3,
					name: '50积分',
					num:50,
					checked: false,
					hot: false,
				}, {
					value: 4,
					name: '100积分',
					num:100,
					checked: false,
					hot: false,
				}, {
					value: 5,
					name: '200积分',
					num:200,
					checked: false,
					hot: false,
				}],
				ads:""
				
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
			that.getAds();
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.isLoad=0;
			that.page=1;
			
			if(that.cid!=0){
				that.getIsCommnet();
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
			
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.cid = res.cid;
			that.title = res.title;
			
			var owo = that.owo.data;
			var owoList=[];
			for(var i in owo){
				owoList = owoList.concat(owo[i].container);
			}
			that.owoList = owoList;
			
			
			that.allCache();
			that.getInfo(that.cid);
			that.getShopList();
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
					that.html=that.markHtml(postInfo.text);
					that.tagList=postInfo.tag;
					that.slug = postInfo.slug;
					that.getUserInfo(postInfo.authorId);
				}
				if(localStorage.getItem('commentsList_'+cid)){
					that.commentsList = JSON.parse(localStorage.getItem('commentsList_'+cid));
				}
				
			},
			markHtml(text){
				var that = this;
				if(that.isCommnet==1){
					text = that.replaceAll(text,"[hide]","<div style='width:100%;padding:15px 15px;background:#dff0d8;color:#3c763d;border:solid 1px #d6e9c6;box-sizing: border-box;border-radius: 5px;'>");
					text = that.replaceAll(text,"[/hide]","</div>");
					text = that.replaceAll(text,"{hide}","<div style='width:100%;padding:15px 15px;background:#dff0d8;color:#3c763d;border:solid 1px #d6e9c6;box-sizing: border-box;border-radius: 5px;'>")
					text = that.replaceAll(text,"{/hide}","</div>")
				}else{
					text = text.replace(/\[hide(([\s\S])*?)\[\/hide\]/g,"<div style='width:100%;padding:15px 15px;background:#f2dede;color:#a94442;border:solid 1px #ebccd1;box-sizing: border-box;border-radius: 5px;'>此内容需要评论后方可阅读！</div>");
					text = text.replace(/{hide(([\s\S])*?){\/hide}/g,"<div style='width:100%;padding:15px 15px;background:#f2dede;color:#a94442;border:solid 1px #ebccd1;box-sizing: border-box;border-radius: 5px;'>此内容需要评论后方可阅读！</div>");
				}
				var owoList=that.owoList;
				for(var i in owoList){
					if(text.indexOf(owoList[i].data) != -1){
						text = text.replace(owoList[i].data,"<img src='"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				return text;
			},
			markCommentHtml(text){
				var that = this;
				var owoList=that.owoList;
				for(var i in owoList){
					if(text.indexOf(owoList[i].data) != -1){
						text = text.replace(owoList[i].data,"<img src='/"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				return text;
			},
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},
			toUserContents(data){
				var that = this;
				var name = data.name;
				var title = data.name+"的信息";
				if(data.screenName){
					title = data.screenName+" 的信息";
					name = data.screenName
				}
				var id= data.uid;
				var type="user";
				uni.navigateTo({
				    url: '../contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(data.avatar)
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
			getAds(){
				var that = this;
				
				Net.request({
					url: API.GetAds(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						var isAds = API.isAds();
						if(isAds==1){
							if(res.data){
								that.ads= res.data.ad3.split("|");
							}
						}
						
					},
					fail: function(res) {
						
					}
				})
			},
			getInfo(cid){
				var that = this;
				var data = {
					"key":that.cid,
					"isMd":1,
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
						uni.stopPullDownRefresh();
						if(res.data.title){
							that.title = res.data.title;
							that.category = res.data.category;
							that.created = res.data.created;
							that.commentsNum = res.data.commentsNum;
							var html =that.markHtml(res.data.text);
							
							that.html=html;
							that.tagList=res.data.tag;
							that.slug = res.data.slug;
							that.type = res.data.type;
							that.likes =  res.data.likes;
							
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
				
				if(!localStorage.getItem('userinfo')){
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					uni.navigateTo({
					    url: '../user/login'
					});
					return false;
				}else{
					var cid = that.cid;
					uni.navigateTo({
					    url: '../contents/commentsadd?cid='+cid+"&coid="+coid+"&title="+title+"&isreply="+reply
					});
				}
				
			},
			toReward(){
				var that = this;
				var rewardList = that.checkbox;
				var num = 10;
				for(var i in rewardList){
					if(rewardList[i].checked){
						num = rewardList[i].num;
					}
				}
				var data = {
					"type":"reward",
					"cid":that.cid,
					"num":num,
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
						that.hideModal();
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							uni.showToast({
								title: "成功打赏 "+num+" 积分",
								icon: 'none'
							})
						}
						
					},
					fail: function(res) {
						that.hideModal();
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
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			ChooseCheckbox(j) {
				let items = this.checkbox;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					this.checkbox[i].checked = false;
				}
				this.checkbox[j].checked = !this.checkbox[j].checked;
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
							that.isMark=0;
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
			},
			getShopList(){
				var that = this;
				var uid= 0;
				if(localStorage.getItem('userinfo')){
					
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					uid = userInfo.uid;
					
				}
				var data = {
					"cid":that.cid,
				}
				Net.request({
					url: API.shopList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":1,
						"page":1,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var list = res.data.data;
							that.shopList = list;
							if(list.length>0){
								that.shopID = list[0].id;
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
			getIsCommnet(){
				var that = this;
				var token= "";
				if(localStorage.getItem('userinfo')){
					
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token = userInfo.token;
					
				}
				if(token==""){
					return false;
				}
				var data = {
					"key":that.cid,
					"token":token
				}
				Net.request({
					url: API.isCommnet(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.isCommnet=1;
							that.getInfo(that.cid);
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
			shopInfo(data){
				var that = this;
				var sid = data.id;
				if(data.status!=1){
					uni.showToast({
						title: "该商品未上架",
						icon: 'none'
					})
					return false;
				}
				uni.navigateTo({
				    url: '../contents/shopinfo?sid='+sid
				});
			},
			toSearch(){
				var that = this;
				
				uni.redirectTo({
				    url: '../contents/search'
				});
			},
			toAds(url){
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			}
		}
	}
</script>

<style>
	
@import "../../static/base.css";
</style>
