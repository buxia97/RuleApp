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
				{{replaceSpecialChar(title)}}
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
							<view class="text-grey">
								<block v-if="userInfo.screenName">
									{{userInfo.screenName}}
								</block>
								<block v-else>
									{{userInfo.name}}
								</block>
								<!--  #ifdef H5 || APP-PLUS -->
								<text class="userlv" :style="getUserLvStyle(userInfo.lv)">{{getUserLv(userInfo.lv)}}</text>
								<!--  #endif -->
								<text class="userlv customize" v-if="userInfo.customize&&userInfo.customize!=''">{{userInfo.customize}}</text>
								<!--  #ifdef H5 || APP-PLUS -->
								<block v-if="userInfo.isvip==1">
									<block v-if="userInfo.vip==1">
										<text class="isVIP bg-gradual-red">VIP</text>
									</block>
									<block v-else>
										<text class="isVIP bg-yellow">VIP</text>
									</block>
								</block>
								<!--  #endif -->
							</view>
							<view class="text-gray text-sm flex">
								<view class="text-cut">
									{{subText(userInfo.introduce,60)}}
								</view> </view>
						</view>
						<view class="action" @tap="toUserContents(userInfo)">
							<view class="text-blue">信息</view>
							
						</view>
					</view>
				</view>
			</view>
			
			<view class="info-content">
				<!-- <joMarkdown :nodes="markdownData"></joMarkdown> -->
				
				<mp-html :content="html" selectable="true" show-img-menu="true" ImgCache="true" scroll-table="true"/>
				
				<view class="shop-value" v-if="shopValue!=''">
					<view class="shop-value-title">
						付费内容
					</view>
					<mp-html :content="shopValue" selectable="true" show-img-menu="true" ImgCache="true" scroll-table="true"/>
				</view>
				<view class="content-shop" v-if="shopValue==''">
						<view class="cu-card article no-card" v-for="(item,index) in shopList" :key="index">
							<block v-if="item.type==1">
								<view class="shop-tool text-center">
									<view class="shop-name">
										实体商品
									</view>
									<image :src="item.imgurl"
									 mode="aspectFill"></image>
									<view class="text-content">{{item.title}}</view>
									<view class="tool-price" v-if="isBuy==0">
										<text class="text-red text-bold">{{item.price}} 积分</text><text class="margin-left-sm text-sm">VIP只需</text><text class="text-yellow text-bold">{{parseInt(item.price * item.vipDiscount)}} 积分</text>
									</view>
									<view class="tool-price">
										<text class="cu-btn bg-blue" @tap="shopBuy(item.id)">立即下单</text>
										<text class="cu-btn text-red" @tap="shopInfo(item)">商品详情</text>
									</view>
								</view>
							</block>
							<!--源码-->
							<block v-if="item.type==2">
								<view class="shop-tool text-center">
									<view class="shop-name">
										源码
									</view>
									<image :src="item.imgurl"
									 mode="aspectFill"></image>
									<view class="text-content">{{item.title}}</view>
									<view class="tool-price" v-if="isBuy==0">
										<text class="text-red text-bold">{{item.price}} 积分</text><text class="margin-left-sm text-sm">VIP只需</text><text class="text-yellow text-bold">{{parseInt(item.price * vipDiscount)}} 积分</text>
									</view>
									<view class="tool-price" v-if="isBuy==1">
										<text class="cu-btn bg-blue" @tap="toShopValue(item.id,item.type)">查看收费内容</text>
										<text class="cu-btn text-red" @tap="shopInfo(item)">商品详情</text>
									</view>
									<view class="tool-price" v-else>
										<text class="cu-btn bg-blue" @tap="shopBuy(item.id)">购买后下载</text>
										<text class="cu-btn text-red" @tap="shopInfo(item)">商品详情</text>
									</view>
								</view>
							</block>
							<!--工具-->
							<block v-if="item.type==3">
								<view class="shop-tool text-center">
									<view class="shop-name">
										软件工具
									</view>
									<image :src="item.imgurl"
									 mode="aspectFill"></image>
									<view class="text-content">{{item.title}}</view>
									<view class="tool-price" v-if="isBuy==0">
										<text class="text-red text-bold">{{item.price}} 积分</text><text class="margin-left-sm text-sm">VIP只需</text><text class="text-yellow text-bold">{{parseInt(item.price * vipDiscount)}} 积分</text>
									</view>
									<view class="tool-price" v-if="isBuy==1">
										<text class="cu-btn bg-blue" @tap="toShopValue(item.id,item.type)">查看收费内容</text>
										<text class="cu-btn text-red" @tap="shopInfo(item)">商品详情</text>
									</view>
									<view class="tool-price" v-else>
										<text class="cu-btn bg-blue" @tap="shopBuy(item.id)">购买后下载</text>
										<text class="cu-btn text-red" @tap="shopInfo(item)">商品详情</text>
									</view>
								</view>
							</block>
							<!--付费阅读-->
							<block v-if="item.type==4">
								<view class="shop-tool text-center">
									<view class="shop-name">
										付费阅读
									</view>
									<view class="tool-price" v-if="isBuy==0">
										<text class="text-red text-bold">{{item.price}} 积分</text><text class="margin-left-sm text-sm">VIP只需</text><text class="text-yellow text-bold">{{parseInt(item.price * vipDiscount)}} 积分</text>
									</view>
									<view class="tool-price" v-if="isBuy==1">
										<text class="cu-btn bg-blue" @tap="toShopValue(item.id,item.type)">查看收费内容</text>
									</view>
									<view class="tool-price" v-else>
										<text class="cu-btn bg-blue" @tap="shopBuy(item.id)">购买后阅读剩余内容</text>
									</view>
								</view>
							</block>
					</view>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="content-btn grid col-2">
					<view class="content-btn-box">
						<view class="content-btn-i" @tap="toLikes">
							<text class="cuIcon-appreciatefill btn-i"></text>
							<text>点赞( {{formatNumber(likes)}} )</text>
						</view>
					</view>
					<view class="content-btn-box"  @tap="showModal" data-target="ChooseModal">
						<view class="content-btn-i">
							<text class="cuIcon-rechargefill btn-i"></text>
							<text>投币</text>
						</view>
					</view>
				</view>
				<!--  #endif -->
				<!--  #ifdef MP -->
				<view class="content-btn grid col-2">
					<view class="content-btn-box">
						<view class="content-btn-i" @tap="toLikes" v-if="isLikes==0">
							<text class="cuIcon-appreciate btn-i"></text>
							<text>点赞( {{formatNumber(likes)}} )</text>
						</view>
						<view class="content-btn-i" @tap="toLikes" v-else>
							<text class="cuIcon-appreciatefill text-blue btn-i"></text>
							<text>点赞( {{formatNumber(likes)}} )</text>
						</view>
					</view>
					<view class="content-btn-box"  @tap="toMark"  v-if="isMark==0">
						<view class="content-btn-i">
							<text class="cuIcon-favor btn-i"></text>
							<text>收藏</text>
						</view>
					</view>
					<view class="content-btn-box"  @tap="rmMark"  v-else>
						<view class="content-btn-i">
							<text class="cuIcon-favorfill btn-i"></text>
							<text>已收藏</text>
						</view>
					</view>
				</view>
				<!--  #endif -->
				<view class="tags" v-if="tagList.length>0">
					
					<text class="tags-box" v-for="(item,index) in tagList"  @tap='toTagsContents("#"+item.name+"#",item.mid)' :key="index">
						{{item.name}}
					</text>
					
				</view>
			</view>
			<view class="ads-banner" v-if="bannerAdsInfo!=null">
				<image :src="bannerAdsInfo.img" mode="widthFix" @tap="goAds(bannerAdsInfo)"></image>
			</view>
			
			<view class="data-box" v-if="isComment==1">
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
									<view class="text-grey">
										{{item.author}}
										<!--  #ifdef H5 || APP-PLUS -->
										<text class="userlv" :style="getUserLvStyle(item.lv)">{{getUserLv(item.lv)}}</text>
										<!--  #endif -->
										<text class="userlv customize" v-if="item.customize&&item.customize!=''">{{item.customize}}</text>
										<!--  #ifdef H5 || APP-PLUS -->
										<block v-if="item.isvip>1">
											<block v-if="item.vip==1">
												<text class="isVIP bg-gradual-red">VIP</text>
											</block>
											<block v-else>
												<text class="isVIP bg-yellow">VIP</text>
											</block>
										</block>
										<!--  #endif -->
									</view>
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
		<!--  #ifdef H5 || APP-PLUS -->
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
		<!--  #endif -->
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<!--加载遮罩结束-->
		<!--  #ifdef H5 || APP-PLUS -->
		<view class="info-footer grid col-2">
			<view class="info-footer-input">
				<view class="info-input-box"  @tap="commentsAdd(title,0,0)">
					<text class="cuIcon-writefill"></text>留下评论&吐槽
				</view>
			</view>
			<view class="info-footer-btn">
				<text class="cuIcon-appreciate" @tap="toLikes" v-if="isLikes==0"></text>
				<text class="cuIcon-appreciatefill text-blue" @tap="toLikes" v-else></text>
				<text class="cuIcon-favor" @tap="toMark" v-if="isMark==0"></text>
				<text class="cuIcon-favorfill text-orange" @tap="rmMark" v-else></text>
				<!-- <text class="cuIcon-recharge"  @tap="toReward"></text> -->
				<text class="cuIcon-recharge"  @tap="showModal" data-target="ChooseModal"></text>
				<text class="cuIcon-share text-blue" @tap="ToShare"></text>
				
				
			</view>
		</view>
		<!--  #endif -->
	</view>
</template>
<script>
	import mpHtml from '@/components/mp-html/mp-html'
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
				isLikes:0,
				
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
				ads:"",
				userlvStyle:"",
				vipDiscount:0,
				vipPrice:0,
				scale:0,
				
				isBuy:0,
				shopValue:"",
				
				bannerAds:[],
				bannerAdsInfo:null,
				
				isComment:0,
				images:[],
				
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
		// #ifdef MP
		onShareAppMessage(res) {
			var that = this;
			if (res.from === 'button') {
				// 来自页面内分享按钮
			}
			if (res.from === 'menu') {
				// 来自页面内分享按钮
			}
			var data = {
				title: that.title,
				path: '/page/contents/info?cid='+that.cid
			}
			if(that.images.lenght>0){
				data.imageUrl = that.images[0];
			}
		
		},
		onShareTimeline() {
			var that = this;
			var data = {
				title: that.title,
				path: '/page/contents/info?cid='+that.cid
			}
			if(that.images.lenght>0){
				data.imageUrl = that.images[0];
			}
			
			return data;
		},
		// #endif
		onShow(){
			var that = this;
			that.getAdsCache();
			// #ifdef H5 || APP-PLUS
			that.isComment=1;
			// #endif
			
			// #ifdef MP
			that.isComment = API.GetIsComment();
			// #endif
			
			// #ifdef APP-PLUS

			
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
			that.getVipInfo();
			
		},
		onPullDownRefresh(){
			var that = this;
			
			var timer = setTimeout(function() {
				that.getInfo(that.cid);
				// #ifdef H5 || APP-PLUS
				that.getCommentsList(false,that.cid);
				// #endif
			}, 1000)
		},
		onLoad(res) {
			var that = this;
			
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.cid = res.cid;
			that.title = res.title;
			
			// #ifdef APP-PLUS || H5
			var owo = that.owo.data;
			var owoList=[];
			for(var i in owo){
				owoList = owoList.concat(owo[i].container);
			}
			that.owoList = owoList;
			// #endif
			
			if(localStorage.getItem('likeDate_'+that.cid)){
				var data = localStorage.getItem('likeDate_'+that.cid);
				var cur_date = new Date().getTime();
				var c = Number(cur_date)-Number(data);
				if(c>=86400000){
					that.isLikes = 0;
					localStorage.removeItem('likeDate_'+that.cid)
				}else{
					that.isLikes = 1;
				}
			}
			that.allCache();
			that.getInfo(that.cid);
			
			// #ifdef H5 || APP-PLUS
			that.getShopList();
			// #endif
			that.getCommentsList(false,that.cid);
			
			
			
			var ctx = this.$refs.article;
		},
		methods:{
			getAdsCache(){
				var that = this;
				if(localStorage.getItem('bannerAds')){
					that.bannerAds = JSON.parse(localStorage.getItem('bannerAds'));
					
					var num = that.bannerAds.length;
					if(num>0){
						var rand = Math.floor(Math.random()*num);
						that.bannerAdsInfo = that.bannerAds[rand];
					}
				}
			},
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
					that.images = postInfo.images;
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
				//下面奇怪的代码是为了解决可执行代码区域问题
				text = that.replaceAll(text,"@!!!","@@@@");
				

				
				// var code = /!!!(([\s\S])*?)!!!/g;
				// var result = text.match(code);
				// for(var i in result){
				// 	var str = result[i];
				// 	str = that.replaceAll(str,"&lt;","<");
				// 	str = that.replaceAll(str,"&gt;",">");
				// 	text = that.replaceAll(text,result[i],str);
				// }

				
				text = that.replaceAll(text,"!!!","");
				text = that.replaceAll(text,"@@@@","@!!!");
				
				//结束
				
				if(that.isCommnet==1){
					text = that.replaceAll(text,"[hide]","<div style='width:100%;padding:15px 15px;background:#dff0d8;color:#3c763d;border:solid 1px #d6e9c6;box-sizing: border-box;border-radius: 5px;word-break:break-all;'>");
					text = that.replaceAll(text,"[/hide]","</div>");
					text = that.replaceAll(text,"{hide}","<div style='width:100%;padding:15px 15px;background:#dff0d8;color:#3c763d;border:solid 1px #d6e9c6;box-sizing: border-box;border-radius: 5px;word-break:break-all;'>")
					text = that.replaceAll(text,"{/hide}","</div>")
				}else{
					text = text.replace(/\[hide(([\s\S])*?)\[\/hide\]/g,"<div style='width:100%;padding:15px 15px;background:#f2dede;color:#a94442;border:solid 1px #ebccd1;box-sizing: border-box;border-radius: 5px;'>此内容需要评论后方可阅读！</div>");
					text = text.replace(/{hide(([\s\S])*?){\/hide}/g,"<div style='width:100%;padding:15px 15px;background:#f2dede;color:#a94442;border:solid 1px #ebccd1;box-sizing: border-box;border-radius: 5px;'>此内容需要评论后方可阅读！</div>");
				}
				// #ifdef APP-PLUS || H5
				var owoList=that.owoList;
				for(var i in owoList){

					if(that.replaceSpecialChar(text).indexOf(owoList[i].data) != -1){
						text = that.replaceAll(that.replaceSpecialChar(text),owoList[i].data,"<img src='"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				// #endif
				
				return text;
				
			},
			markCommentHtml(text){
				var that = this;
				// #ifdef APP-PLUS || H5
				var owoList=that.owoList;
				for(var i in owoList){
				
					if(that.replaceSpecialChar(text).indexOf(owoList[i].data) != -1){
						text = that.replaceAll(that.replaceSpecialChar(text),owoList[i].data,"<img src='/"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				// #endif
				return text;
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
				    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(data.avatar)
				});
			},
			toTagsContents(title,id){
				var that = this;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			toCategoryContents(data){
				var that = this;
				var title = data[0].name;
				var id= data[0].mid;
				var type="meta";
				uni.navigateTo({
				    url: '/pages/contents/contentlist?title='+title+"&type="+type+"&id="+id
				});
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				if(that.isLoad==0){
					that.getCommentsList(true,that.cid);
				}
				
			},
			getVipInfo(){
				var that = this;
				Net.request({
					url: API.getVipInfo(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.vipDiscount=res.data.data.vipDiscount;
							that.vipPrice=res.data.data.vipPrice;
							that.scale=res.data.data.scale;
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
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
						uni.stopPullDownRefresh();
						if(res.data.title){
							that.title = res.data.title;
							that.category = res.data.category;
							that.created = res.data.created;
							that.commentsNum = res.data.commentsNum;
							that.images = res.data.images;
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
							}, 200);
							var timer = setTimeout(function() {
								that.isLoading=1;
								clearTimeout('timer')
							}, 300)
							
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
					"status":"approved"
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
								if(that.page==1&&!isPage){
									localStorage.removeItem('commentsList_'+that.cid);
									that.commentsList = [];
								}
								
							}
							
						}
						
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
					    url: '/pages/user/login'
					});
					return false;
				}else{
					var cid = that.cid;
					uni.navigateTo({
					    url: '/pages/contents/commentsadd?cid='+cid+"&coid="+coid+"&title="+title+"&isreply="+reply
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
							var timestamp=new Date().getTime();
							that.isLikes = 1;
							localStorage.setItem('likeDate_'+that.cid,timestamp);
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
						//console.log(JSON.stringify(res))
						setTimeout(function () {
							uni.hideLoading();
						}, 500);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							that.toIsMark();
							that.isMark=1;
							//that.toIsMark();
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
						//console.log(JSON.stringify(res))
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
							//that.toIsMark();
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
				var linkRule = API.GetLinkRule();
				
				
				var url = linkRule.replace("{cid}",that.cid);
				if(linkRule.indexOf("{category}")!=-1){
					var category = that.category[0].slug;
					url = url.replace("{category}",category);
				}
				//console.log(url);
				if(that.type!="post"){
					var pageRule = API.GetPageRule();
					url = pageRule.replace("{slug}",that.slug);
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
						//console.log(JSON.stringify(res));
						if(res.data.code==1){
							var list = res.data.data;
							that.shopList = list;
							if(list.length>0){
								that.shopID = list[0].id;
								that.isBuyShop(that.shopID,list[0].type);
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
				// #ifdef MP
				that.isCommnet=1;
				that.getInfo(that.cid);
				return false;
				// #endif
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
				    url: '/pages/contents/shopinfo?sid='+sid
				});
			},
			toSearch(){
				var that = this;
				
				uni.redirectTo({
				    url: '/pages/contents/search'
				});
			},
			toAds(url){
				// #ifdef APP-PLUS
				plus.runtime.openURL(url) 
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
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
			isBuyShop(sid,type){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"sid":sid,
					"token":token
				}
				Net.request({
					url: API.isBuyShop(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res));
						if(res.data.code==1){
							that.isBuy=1;
							if(type==4){
								that.toShopValue(sid,type);
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
			shopBuy(sid){
				var that = this;
				var token= "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}else{
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					var timer = setTimeout(function() {
						uni.navigateTo({
							url: '../user/login'
						});
						clearTimeout('timer')
					}, 1000)
					return false
				}
				var data = {
					"token":token,
					"sid":sid
				}
				uni.showModal({
					title: '确定购买此商品吗?',
					content: ' ',
					success: function(res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							Net.request({
								url: API.buyShop(),
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
									uni.showToast({
										title: res.data.msg,
										icon: 'none'
									})
									if(res.data.code==1){
										
										
										//跳转订单页面
										var timer = setTimeout(function() {
											uni.redirectTo({
											    url: '/pages/user/order'
											});
											clearTimeout('timer')
										}, 1000)
									}else{
										if(res.data.msg=="购买实体商品前，需要先设置收货地址"){
											var timer = setTimeout(function() {
												uni.redirectTo({
												    url: '/pages/user/address'
												});
												clearTimeout('timer')
											}, 1000)
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
						}
					}
				});
				
			},
			toShopValue(id,type){
				var that = this;
				if(type==1){
					uni.showToast({
						title: "实体商品请留意快递信息",
						icon: 'none'
					})
				}else if(type==4){
					var that = this;
					var token = "";
					if(localStorage.getItem('token')){
						token=localStorage.getItem('token');
					}
					var data = {
						"key":id,
						"token":token
					}
					Net.request({
						url: API.shopInfo(),
						data:data,
						header:{
							'Content-Type':'application/x-www-form-urlencoded'
						},
						method: "get",
						dataType: 'json',
						success: function(res) {
							
							uni.stopPullDownRefresh();
							if(res.data.value){
								that.shopValue = res.data.value;
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
							var timer = setTimeout(function() {
								that.isLoading=1;
								clearTimeout('timer')
							}, 300)
						}
					})
				}else{
					uni.navigateTo({
					    url: '/pages/contents/shoptext?sid='+id
					});
				}
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
			}
		}
	}
</script>

<style>
</style>
