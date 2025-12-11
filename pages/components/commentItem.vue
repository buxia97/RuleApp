<template>
	<view>
		<view class="cu-item" v-if="!isBan">
			<view class="cu-list menu-avatar comment">
				<view class="comment-header-more">
					<text class="cuIcon-moreandroid" @tap="moreShow=!moreShow"></text>
					<view class="info-more-links" :class="moreShow?'moreShow':''">
						<view class="info-more-links-box"  @tap="ToCopy(item.text)">
							<text class="cuIcon-copy"></text>复制
						</view>
						<view class="info-more-links-box" @tap="report(item.text,3)">
							<text class="cuIcon-warn"></text>举报
						</view>
						<view class="info-more-links-box" @tap="goMyBan(item.authorId)">
							<text class="cuIcon-attentionforbidfill"></text>拉黑Ta
						</view>
					</view>
				</view>
				<view class="cu-item">
					<view class="cu-avatar round" @tap="toUserContents(item)" :style="item.style"></view>
					<view class="content">
						<view class="text-black">
						<block v-if="item.isvip>0">
							<block v-if="item.vip==1">
								<text class="text-red">
									{{item.author}}
								</text>
							</block>
							<block v-else>
								<text class="text-yellow">
									{{item.author}}
								</text>
							</block>
						</block>
						<block v-else>
							{{item.author}}
						</block>
						<block v-if="isHead">
							<!--  #ifdef H5 || APP-PLUS -->
							<text class="userlv" :style="getLvStyle(item.experience)">{{getLv(item.experience)}}</text>
							<!-- <text class="userlv" :style="getUserLvStyle(item.lv)">{{getUserLv(item.lv)}}</text> -->
							
							<!--  #endif -->
							<text class="userlv customize" v-if="item.customize&&item.customize!=''">{{item.customize}}</text>
						</block>
						</view>
						<view class="text-content text-df break-all">
							<rich-text :nodes="markHtml(item.text)"></rich-text>
							
						</view>
						<view class="bg-grey light padding-sm radius margin-top-sm  text-sm" v-if="item.parent>0&&isContent">
							<view class="flex">
								<view v-if="item.parentComments.author">{{item.parentComments.author}}：</view>
								<view class="flex-sub break-all"><rich-text :nodes="markHtml(item.parentComments.text)"></rich-text></view>
							</view>
						</view>
						<view class="bg-grey light padding-sm radius margin-top-sm  text-sm" v-if="!isContent">
							<view class="flex" @tap="toInfo(item.cid,item.contenTitle)">
								<view class="break-all">{{replaceSpecialChar(item.contenTitle)}}</view>
								
							</view>
						</view>
						<view class="margin-top-sm flex justify-between">
							<view class="text-gray text-df">{{formatDate(item.created)}}
							
							<text class="margin-left-sm">{{getLocal(item.local)}}</text>
							</view>
							<view>
								<text class="cuIcon-messagefill text-gray margin-left-sm" @tap="commentsAdd(item.author+'：'+item.text,item.coid,1,item.cid)"></text>
							</view>
						</view>
						<view class="comment-operation"  v-if="group=='administrator'||group=='editor'">
							<text class="text-black" @tap="toBan(item.authorId)">封禁</text>
							<text class="text-red" @tap="toDelete(item.coid)">删除</text>
						</view>
					</view>
				</view>
							
				
			</view>
		</view>
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
	    props: {
	        item: {
			  type: Object,
			  default: () => ({})
			},
			isHead: {
			  type: Boolean,
			  default: true
			},
			isContent: {
			  type: Boolean,
			  default: false
			}
	    },
		name: "commentItem",
		data() {
			return {
				owo:owo,
				owoList:[],
				group:"",
				moreShow:false,
				isBan:false,
			};
		},
		created(){
			var that = this;
			if(localStorage.getItem('userinfo')){
							
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.group = userInfo.group;
			}
			// #ifdef APP-PLUS || H5
			var owo = that.owo.data;
			var owoList=[];
			for(var i in owo){
				owoList = owoList.concat(owo[i].container);
			}
			that.owoList = owoList;
			// #endif
		},
		methods: {
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
			toInfo(cid,title){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
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
			commentsAdd(title,coid,reply,cid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/commentsadd?cid='+cid+"&coid="+coid+"&title="+title+"&isreply="+reply
				});
			},
			markHtml(text){
				var that = this;
				text = that.replaceAll(text,"<","&lt;");
				text = that.replaceAll(text,">","&gt;");
				var owoList=that.owoList;
				// console.log(JSON.stringify(owoList));
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
			toBan(uid){
				if(!uid){
					uni.showToast({
						title: "该用户不存在",
						icon: 'none'
					})
					return false;
				}
				uni.navigateTo({
					url: '/pages/manage/banuser?uid='+uid
				});
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
					title: '确定要拉黑评论发布者吗？拉黑后，评论也将不显示！',
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
										uni.showToast({
											title: "拉黑成功！",
											icon: 'none'
										})
										that.isBan = true;
										that.myBanLog();
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
			toDelete(id){
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
					title: '确定要删除该评论吗',
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							
							that.$Net.request({
								url: that.$API.commentsDelete(),
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
			report(title,type){
				var that = this;
				if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
					uni.showToast({
						title: "请先登录哦",
						icon: 'none'
					})
					return false;
				}
				uni.navigateTo({
				    url: '/pages/user/report?title='+title+"&type="+type
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
			
		}
	}
</script>

<style>
</style>