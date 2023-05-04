<template>
	<view class="userpost" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					动态管理
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"  @input="searchTag"></input>
					<view class="search-close" v-if="searchText!=''" @tap="searchClose()"><text class="cuIcon-close"></text></view>
				</view>
			</view>
			<view class="search-type grid col-3">
				<view class="search-type-box" @tap="toType(0)" :class="type==0?'active':''">
					<text>待审核</text>
				</view>
				<view class="search-type-box" @tap="toType(1)" :class="type==1?'active':''">
					<text>已发布</text>
				</view>
				<view class="search-type-box" @tap="toType(2)" :class="type==2?'active':''">
					<text>已锁定</text>
				</view>
			</view>
		</view>
		<view class="cu-card dynamic no-card square-list">
			<view class="no-data" v-if="spaceList.length==0">
				<text class="cuIcon-text"></text>暂时没有数据
			</view>
			<block  v-for="(item,index) in spaceList" :key="index" v-if="spaceList.length>0">
				<view class="cu-item">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" :style="'background-image:url('+item.userJson.avatar+');'" @tap="toUserContents(item.userJson)">
							</view>
							<view class="content flex-sub">
								<view>{{item.userJson.name}}
								</view>
								<view class="text-gray text-sm flex">
									{{formatDate(item.created)}}
								</view>
							</view>
						</view>
					</view>
					<view class="text-content break-all" @tap="toInfo(item.id)">
						<rich-text :nodes="markHtml(item.text)"></rich-text>
					</view>
					<block  v-if="item.type==0">
						
						<view class="grid flex-sub padding-lr col-3 grid-square" v-if="item.picList.length>0">
							<view class="bg-img" :style="'background-image:url('+data+');'"
							 v-for="(data,i) in item.picList" :key="i" @tap="previewImage(item.picList,data)">
							</view>
						</view>
					</block>
					<block  v-if="item.type==1">
						<view class="grid flex-sub padding-lr">
							<block v-if="item.contentJson.cid==0">
								<view class="user-post-info">
									<view class="user-post-text">
										<view class="user-post-title">
											文章不存在
										</view>
										<view class="user-post-intro">
											该文章已被删除或数据缺失！
										</view>
									</view>
								</view>
							</block>
							<block v-else>
								<view class="user-post-info" @tap="goContentInfo(item.contentJson)">
									<view class="user-post-pic" v-if="item.contentJson.images.length>0">
										<image :src="item.contentJson.images[0]" mode="widthFix"></image>
									</view>
									<view class="user-post-text">
										<view class="user-post-title">
											{{replaceSpecialChar(item.contentJson.title)}}
										</view>
										<view class="user-post-intro">
											{{item.contentJson.text}}
										</view>
									</view>
								</view>
							</block>
							
						</view>
					</block>
					<block  v-if="item.type==2">
						<view class="grid flex-sub padding-lr">
							<block v-if="item.forwardJson.id==0">
								<view class="user-space-info">
									<view class="user-space-text">
										该动态已被删除或数据缺失！
									</view>
								</view>
							</block>
							<block v-else>
								<view class="user-space-info" @tap="toInfo(item.forwardJson.id)">
									<view class="user-space-text">
										<text class="text-blue">@{{item.forwardJson.username}}：</text><rich-text :nodes="markHtml(item.forwardJson.text)"></rich-text>
									</view>
									
									<view class="grid flex-sub col-3 grid-square margin-top-xs" v-if="item.forwardJson.picList.length>0">
										<view class="bg-img" :style="'background-image:url('+data+');'"
										 v-for="(data,i) in item.forwardJson.picList" :key="i">
										</view>
									</view>
								</view>
							</block>
							
						</view>
					</block>
					<block  v-if="item.type==4">
						<view class="padding-lr spaceVideo">
							<!--  #ifdef H5 || MP-->
							<video :src="item.pic"></video>
							<!--  #endif -->
							<!--  #ifdef APP-PLUS -->
							<view class="spaceVideo-play" @tap="goPlay(item.pic)">
								<text class="cuIcon-playfill"></text>
							</view>
							<!--  #endif -->
							
						</view>
					</block>
					<block  v-if="item.type==5">
						<view class="grid flex-sub padding-lr">
							<block v-if="item.shopJson.id==0">
								<view class="user-post-info">
									<view class="user-post-text">
										<view class="user-post-title">
											该商品不存在或已被删除！
										</view>
										<view class="user-post-intro">
											<text class="text-red text-lg text-bold">-- {{currencyName}}</text>
											
										</view>
										<view class="user-post-intro">
											<text class="text-gray text-sm">剩余数量：0</text>
											
										</view>
									</view>
								</view>
							</block>
							<block v-else>
								<view class="user-post-info" @tap="goShopInfo(item.shopJson.id)">
									<view class="user-post-pic">
										<image :src="item.shopJson.imgurl" mode="widthFix"></image>
									</view>
									<view class="user-post-text">
										<view class="user-post-title">
											{{replaceSpecialChar(item.shopJson.title)}}
										</view>
										<view class="user-post-intro">
											<text class="text-red text-lg text-bold">{{parseInt(item.shopJson.price)}} {{currencyName}}</text>
											
										</view>
										<view class="user-post-intro">
											<text class="text-gray text-sm">剩余数量：{{item.shopJson.num}}</text>
											
										</view>
									</view>
								</view>
							</block>
							
						</view>
					</block>
					<view class="forum-list-operate padding-sm text-center bg-white">
						<block v-if="item.status==0">
							<text class="bg-green cu-btn xs radius" @tap="toReview(item.id,1,index)"> <text class="cuIcon-check"></text>通过</text>
							<text class="bg-red cu-btn xs radius margin-left" @tap="toReview(item.id,0,index)"><text class="cuIcon-close"></text>不通过</text>
						</block>
						<block v-if="item.status==1">
							<text class="bg-black cu-btn xs radius" @tap="toLock(item.id,2,index)"><text class="cuIcon-lock"></text>锁定</text>
						</block>
						<block v-if="item.status==2">
							<text class="bg-black cu-btn xs radius" @tap="toLock(item.id,1,index)"><text class="cuIcon-unlock"></text>解除锁定</text>
						</block>
						<text class="bg-red cu-btn xs radius margin-left" @tap="toDelete(item.id)"><text class="cuIcon-delete"></text>删除</text>
					</view>
				</view>
			</block>
			
		</view>
		<view class="videoPlay" v-if="isPlay">
			<view class="videoPlay-bg" @tap="isPlay=false">
				<view class="videoPlay-close" @tap="isPlay=false">
					<i class="cuIcon-close"></i>
				</view>
			</view>
			<video :src="curVideo"></video>
		</view>
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
				
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
				token:"",
				spaceList:[],
				
				searchText:"",
				
				type:0,
				vipDiscount:0,
				currencyName:"",
				group:"",
				uid:0,
				isPlay:false,
				curVideo:"",
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getSpaceList(false);
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
			
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			if(that.isLoad==0){
				that.loadMore();
			}
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.page = 1;
			if(localStorage.getItem('token')){
				that.token=localStorage.getItem('token');
				that.getSpaceList(false);
			}
			if(localStorage.getItem('userinfo')){
				
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.group = userInfo.group;
			}
			
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			that.currencyName = that.$API.getCurrencyName();
			if(localStorage.getItem('token')){
				that.token=localStorage.getItem('token');
				that.getSpaceList(false);
			}
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getSpaceList(true);
			},
			toType(i){
				var that = this;
				that.type=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				that.spaceList = [];
				that.getSpaceList(false);
			},
			previewImage(imageList,image) {
				//预览图片
				uni.previewImage({
					urls: imageList,
					current: image
				});
			},
			goPlay(url){
				var that = this;
				that.curVideo =url;
				that.isPlay=true;
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
			markHtml(text){
				var that = this;
				text = that.replaceAll(text,"<","&lt;");
				text = that.replaceAll(text,">","&gt;");
				var owoList=that.owoList;
				for(var i in owoList){
				
					if(that.replaceSpecialChar(text).indexOf(owoList[i].data) != -1){
						text = that.replaceAll(that.replaceSpecialChar(text),owoList[i].data,"<img src='/"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				text = that.replaceAll(text,"/r/n","<br>");
				text = that.TransferString(text);
				return text;
			},
			TransferString(content)
			{  
			    var string = content;  
			    try{  
			        string=string.replace(/\r\n/g,"<br>")  
			        string=string.replace(/\n/g,"<br>");  
			    }catch(e) {  
			        return content;
			    }  
			    return string;  
			},
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getSpaceList();
			
			},
			searchClose(){
				var that = this;
				that.searchText = "";
				that.page=1;
				that.getSpaceList();
			
			},
			getSpaceList(isPage){
				var that = this;
				var page = that.page;
				if(isPage){
					page++;
				}
				var data = {
					"status":that.type
				}
				that.$Net.request({
					url: that.$API.spaceList(),
					data:{
						"searchParams":JSON.stringify(that.$API.removeObjectEmptyKey(data)),
						"limit":10,
						"page":page,
						"order":"created",
						"token":that.token
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoading = 1;
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
						that.isLoading = 1;
						that.moreText="加载更多";
						that.isLoad=0;
					}
				})
			},
			toLock(id,type,index){
				var that = this;
				
				var typeText = "确定要锁定动态吗？";
				if(type==1){
					typeText = "确定要取消锁定动态吗？";
				}
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":id,
					"type":type,
					"token":token
				}
				uni.showModal({
				    title: typeText,
				    success: function (res) {
				        if (res.confirm) {
							
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.spaceLock(),
				            	data:data,
				            	header:{
				            		'Content-Type':'application/x-www-form-urlencoded'
				            	},
				            	method: "post",
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
				            			that.page=1;
				            			that.getSpaceList(false);
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
			toReview(id,type,index){
				var that = this;
				var typeText = "确定要审核通过动态吗？";
				if(type==0){
					typeText = "确定要不过审动态吗？";
				}
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":id,
					"type":type,
					"token":token
				}
				uni.showModal({
				    title: typeText,
				    success: function (res) {
				        if (res.confirm) {
							
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.spaceReview(),
				            	data:data,
				            	header:{
				            		'Content-Type':'application/x-www-form-urlencoded'
				            	},
				            	method: "post",
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
				            			that.page=1;
				            			that.getSpaceList(false);
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
					"id":id,
					"token":token
				}
				uni.showModal({
					title: '确定要删除该动态吗',
					success: function (res) {
						if (res.confirm) {
							uni.showLoading({
								title: "加载中"
							});
							
							that.$Net.request({
								url: that.$API.spaceDelete(),
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
										that.page=1;
										that.getSpaceList(false);
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
			toInfo(id){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/space/info?id='+id
				});
			},
			forward(id){
				var that = this;
				uni.navigateTo({
				    url: '/pages/space/post?type=2&id='+id
				});
			},
			
			goShopInfo(sid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/shopinfo?sid='+sid
				});
			},
			toUserContents(data){
				var that = this;
				var name = data.name;
				var title = data.name+"的信息";
				var id= data.uid;
				var type="user";
				uni.navigateTo({
				    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(data.avatar)
				});
			},
			goContentInfo(data){
				var that = this;
				if(data.status!="publish"){
					uni.showToast({
						title:"文章正在审核中，请稍后再试！",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false;
				}
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+data.cid+"&title="+data.title
				});
			},
		},
	}
</script>

<style>
</style>