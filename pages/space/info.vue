<template>
	<view class="user" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					动态详情
				</view>
				<view class="action" @tap="userRecharge">
					<text class="cuIcon-more"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="cu-card dynamic no-card space-info">
			<view class="cu-item">
				<view class="cu-list menu-avatar" v-if="spaceInfo.userJson">
					<view class="cu-item">
						<view class="cu-avatar round lg"  :style="'background-image:url('+spaceInfo.userJson.avatar+');'">
							<view class="curLv" :style="getLvStyle(spaceInfo.userJson.lv)">{{getLv(spaceInfo.userJson.experience)}}</view>
						</view>
						<view class="content flex-sub">
							<view>{{spaceInfo.userJson.name}}
							
							<!--  #ifdef H5 || APP-PLUS -->
							<text class="userlv" :style="getUserLvStyle(spaceInfo.userJson.lv)">{{getUserLv(spaceInfo.userJson.lv)}}</text>
							
							<!--  #endif -->
							<text class="userlv customize" v-if="spaceInfo.userJson.customize&&spaceInfo.userJson.customize!=''">{{spaceInfo.userJson.customize}}</text>
							</view>
							<view class="text-gray text-sm flex justify-between">
								{{formatDate(spaceInfo.created)}} <text class="margin-left-sm" v-if="spaceInfo.created!=spaceInfo.modified">已编辑</text>
							</view>
						</view>
						<view class="action space-follow">
							<view class="cu-btn bg-red" v-if="spaceInfo.isFollow==0">
								<text class="cuIcon-add"></text>关注
							</view>
							<view class="cu-btn text-red isFollow" v-if="spaceInfo.isFollow==1">
								已关注
							</view>
						</view>
					</view>
				</view>
				<view class="text-content">
					<rich-text :nodes="markHtml(spaceInfo.text)"></rich-text>
				</view>
				<view class="grid flex-sub padding-lr col-3 grid-square" v-if="spaceInfo.picList.length>0">
					<view class="bg-img" :style="'background-image:url('+data+');'"
					 v-for="(data,i) in spaceInfo.picList" :key="i" @tap="previewImage(spaceInfo.picList,data)">
					</view>
				</view>

			</view>
		</view>
		<view class="space-reply">
			<view class="space-reply-head">
				<text>转发 <block v-if="spaceInfo.forward>0">{{formatNumber(spaceInfo.forward)}}</block></text>
				<text class="margin-left-xl cur">评论 <block v-if="spaceInfo.reply>0">{{formatNumber(spaceInfo.reply)}}</block></text>
				<text class="space-reply-likes">赞 <block v-if="spaceInfo.likes>0">{{formatNumber(spaceInfo.likes)}}</block></text>
			</view>
			<view class="space-reply-list">
				<view class="cu-list menu-avatar comment">
					<view class="cu-item">
						<view class="cu-avatar round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"></view>
						<view class="content">
							<view class="text-grey">老实人</view>
							<view class="text-gray text-content text-df">
								这个是测试的回复内容，反正是用来测试的，很强总之
							</view>
							<view class="space-reply-num padding-xs radius margin-top-sm  text-sm">
								<text class="text-blue">共10条回复<text class="cuIcon-right margin-left-xs"></text></text>
							</view>
							<view class="margin-top-sm flex justify-between">
								<view class="text-gray text-df">2018年12月4日</view>
								<view>
									<text class="cuIcon-forward text-gray"></text>
									<text class="cuIcon-message text-gray margin-left-xl"></text>
									<text class="cuIcon-appreciate text-gray margin-left-xl">1.13万</text>
								</view>
							</view>
						</view>
					</view>
				</view>
				<view class="no-data">
					<text class="cuIcon-text"></text>
					
					暂时没有消息
					<view class="text-center margin-top-sm">
						<text class="cu-btn bg-blue">我要抢首评</text>
					</view>
					
				</view>
				
			</view>
		</view>
		<view class="space-footer grid col-3">
			<view class="space-footer-box">
				<text class="cuIcon-forward"></text>
				转发
			</view>
			<view class="space-footer-box">
				<text class="cuIcon-message"></text>
				评论
			</view>
			<view class="space-footer-box">
				<text class="cuIcon-appreciate"></text>
				点赞
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
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				
				id:0,
				token:'',
				
				spaceInfo:{
					created: 0,
					forward: 0,
					id: 3,
					likes: 0,
					reply: 0,
					text: "",
					toid: 0,
					type: 0,
					uid: 1,
					modified:0,
					picList:[]
				},
				
				isLoading:0,
				
				owo:owo,
				owoList:[],
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			if(that.id!=0){
				that.getInfo();
			}
			var timer = setTimeout(function() {
				
				uni.stopPullDownRefresh();
			}, 1000)
		},
		onHide() {
			localStorage.removeItem('getuid')
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			
			if(localStorage.getItem('getuid')){
				that.toid = localStorage.getItem('getuid');
			}
			
		},
		onLoad(res) {
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
			if(res.id){
				that.id = res.id;
				that.getSpaceInfo();
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			getSpaceInfo(){
				var that = this;
				var data = {
					"id":that.id
				}
				Net.request({
					url: API.spaceInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoading=1;
						if(res.data.code==1){
							that.spaceInfo = res.data.data;
							if(res.data.data.pic&&res.data.data.pic!=""){
								that.spaceInfo.picList = res.data.data.pic.split("||");
							}else{
								that.spaceInfo.picList = [];
							}
						}
					},
					fail: function(res) {
						that.isLoading=1;
					}
				});
				
			},
			previewImage(imageList,image) {
				//预览图片
				uni.previewImage({
					urls: imageList,
					current: image
				});
			},
			subText(text,num){
				if(text.length < null){
					return text.substring(0,num)+"……"
				}else{
					return text;
				}
				
			},
			replaceSpecialChar(text) {
			  text = text.replace(/&quot;/g, '"');
			  text = text.replace(/&amp;/g, '&');
			  text = text.replace(/&lt;/g, '<');
			  text = text.replace(/&gt;/g, '>');
			  text = text.replace(/&nbsp;/g, ' ');
			  return text;
			},
			formatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				var year = datetime.getFullYear(),
					month = ("0" + (datetime.getMonth() + 1)).slice(-2),
					date = ("0" + datetime.getDate()).slice(-2),
					hour = ("0" + datetime.getHours()).slice(-2),
					minute = ("0" + datetime.getMinutes()).slice(-2);
				var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
				return result;
			},
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
			},
			toInfo(id){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/space/info?id='+id
				});
			},
			goAds(data){
				var that = this;
				var url = data.url;
				var type = data.urltype;
				// #ifdef APP-PLUS
				if(type==1){
					plus.runtime.openURL(url);
				}
				if(type==0){
					plus.runtime.openWeb(url);
				}
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
			},
			toUserContents(data){
				var that = this;
				var name = data.author;
				var title = data.author+"的信息";
				var id= data.authorId;
				var type="user";
				uni.navigateTo({
				    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(data.avatar)
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
			getLv(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var lv  = API.getLever(i);
				var leverList = API.GetLeverList();
				return leverList[lv];
			},
			getLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var lv  = API.getLever(i);
				var rankStyle = API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[lv];
				return userlvStyle;
			},
		}
	}
</script>

<style>
</style>
