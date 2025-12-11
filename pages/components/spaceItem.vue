<template>
	<view>
		
		<view class="cu-card dynamic no-card square-list">
			<block  v-for="(item,index) in spaceList" :key="index" v-if="spaceList.length>0">
				<view class="cu-item content-list-box"  @longtap="item.banShow=true"  v-if="!item.isBan" :class="item.banShow?'banShow':''">
					
					<view class="ban">
						<view class="ban-close" @tap="item.banShow=false">
							<text class="cuIcon-close"></text>
						</view>
						<view class="ban-concent">
							<text class="ban-btn" @tap="report(item.text,4)">
								<text class="cuIcon-warn"></text>举报
							</text>
							<text class="ban-btn" @tap="goMyBan(item,'banSpace')">
								<text class="cuIcon-roundclosefill"></text>不喜欢
							</text>
							<text class="ban-btn" @tap="goMyBan(item,'banUser')">
								<text class="cuIcon-attentionforbidfill"></text>拉黑作者
							</text>
						</view>
					</view>
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" :style="'background-image:url('+item.userJson.avatar+');'" @tap="toUserContents(item.userJson)">
								<!--  #ifdef H5 || APP-PLUS -->
								<view class="curLv" :style="getLvStyle(item.userJson.experience)">{{getLv(item.userJson.experience)}}</view>
								<!--  #endif -->
							</view>
							<view class="content flex-sub">
								<view>{{item.userJson.name}}
								<block v-if="item.userJson.uid!=0">
									<!--  #ifdef H5 || APP-PLUS -->
									<!-- <text class="userlv" :style="getLvStyle(item.userJson.lv)">{{getLv(item.userJson.experience)}}</text> -->
									<!-- <text class="userlv" :style="getUserLvStyle(item.userJson.lv)">{{getUserLv(item.userJson.lv)}}</text> -->
									
									<!--  #endif -->
									<text class="userlv customize" v-if="item.userJson.customize&&item.userJson.customize!=''">{{item.userJson.customize}}</text>
									
								</block>
								</view>
								<view class="text-gray text-sm flex">
									{{formatDate(item.created)}}
									{{getLocal(item.userJson.local)}}
									
									<block v-if="group=='administrator'||group=='editor'">
										<text class="text-blue margin-left-sm" @tap="edit(item.id)">编辑</text>
										<text class="text-black margin-left-sm" @tap="toBan(item.userJson.uid)">封禁</text>
										<text class="text-red margin-left-sm" @tap="toDelete(item.id)">删除</text>
									</block>
									<block v-else>
										<block v-if="item.userJson.uid!=0&&item.userJson.uid==uid">
											<text class="text-blue margin-left-sm" @tap="edit(item.id)">编辑</text>
											<text class="text-red margin-left-sm" @tap="toDelete(item.id)">删除</text>
										</block>
										
									</block>
								</view>
								<view class="text-gray text-sm flex">
									
								</view>
							</view>
							<view class="action space-follow">
								<view class="cu-btn text-red" v-if="item.isFollow==0" @tap="follow(1,item.userJson.uid,index)">
									<text class="cuIcon-add"></text>关注
								</view>
								<view class="cu-btn bg-red isFollow" v-if="item.isFollow==1" @tap="follow(0,item.userJson.uid,index)">
									已关注
								</view>
							</view>
						</view>
					</view>
					<view class="text-content break-all" @tap="toInfo(item.id)">
						<text class="text-orange text-sm" v-if="item.onlyMe==1">[私密]</text><rich-text :nodes="markHtml(item.text)"></rich-text>
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
					<block  v-if="item.type==6">
						<view class="grid flex-sub padding-lr">
							<block v-if="item.postJson.id==0">
								<view class="user-post-info">
									<view class="user-post-text">
										<view class="user-post-title">
											帖子不存在
										</view>
										<view class="user-post-intro">
											帖子已被删除或数据缺失！
										</view>
									</view>
								</view>
							</block>
							<block v-else>
								<view class="user-post-info" @tap="goPostInfo(item.postJson.id)">
									<view class="user-post-pic" v-if="item.postJson.images.length>0">
										<image :src="item.postJson.images[0]" mode="widthFix"></image>
									</view>
									<view class="user-post-text">
										<view class="user-post-title">
											{{replaceSpecialChar(item.postJson.title)}}
										</view>
										<view class="user-post-intro">
											{{item.postJson.text}}
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
								<view class="user-post-info" @tap="goShopInfo(item.shopJson)">
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
					<view class="text-center grid col-3 padding-xs">
						<view class="square-post-btn" @tap="forward(item.id)">
							<text class="cuIcon-forward"></text>
							<block v-if="item.forward>0">
								{{formatNumber(item.forward)}}
							</block>
							<block v-else>
								转发
							</block>
						</view>
						<view class="square-post-btn"  @tap="toInfo(item.id)">
							<text class="cuIcon-community"></text>
							<block v-if="item.reply>0">
								{{formatNumber(item.reply)}}
							</block>
							<block v-else>
								评论
							</block>
						</view>
						<view class="square-post-btn" @tap="toLike(item.id,index)">
							<text class="cuIcon-appreciate" :class="item.isLikes==1?'text-red':''"></text>
							<block v-if="item.likes>0">
								{{formatNumber(item.likes)}}
							</block>
							<block v-else>
								点赞
							</block>
						</view>
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
	        spaceList: {
			  type: Array,
			  default: () => []
			},
			isHead: {
			  type: Boolean,
			  default: true
			}
	    },
		name: "spaceItem",
		data() {
			return {
				owo:owo,
				owoList:[],
				vipDiscount:0,
				currencyName:"",
				group:"",
				uid:0,
				isPlay:false,
				curVideo:"",
				
			};
		},
		created(){
			var that = this;
			if(localStorage.getItem('userinfo')){
							
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.group = userInfo.group;
				that.uid = userInfo.uid;
			}
			that.currencyName = that.$API.getCurrencyName();
			// #ifdef APP-PLUS || H5
			var owo = that.owo.data;
			var owoList=[];
			for(var i in owo){
				owoList = owoList.concat(owo[i].container);
			}
			that.owoList = owoList;
			// #endif
			var that = this;
			if(localStorage.getItem('userinfo')){
				if(localStorage.getItem('myBanLog')){
					var myBanLog = JSON.parse(localStorage.getItem('myBanLog'));
					var banSpaceList = myBanLog.banSpaceList;
					var banUserList = myBanLog.banUserList;
					var spaceList = that.spaceList;
					for(var i in spaceList){
						for(var j in banUserList){
							if(spaceList[i].uid == banUserList[j].num){
								that.isBan = true;
							}
						}
						for(var o in banSpaceList){
							if(spaceList[i].id == banSpaceList[o].num){
								that.isBan = true;
							}
						}
					}
					that.spaceList = spaceList;
					
				}
			}
		},
		methods: {
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
			follow(type,uid,index){
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
				that.spaceList[index].isFollow = type;
				var data = {
					token:token,
					touid:uid,
					type:type,
				}
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
						if(res.data.code==0){
							that.spaceList[index].isFollow = 0;
						}else{
							var spaceList = that.spaceList;
							for(var i in spaceList){
								if(spaceList[i].userJson.uid==uid){
									spaceList[i].isFollow = type;
								}
							}
							that.spaceList = spaceList;
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
			toLike(id,index){
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
				if(that.spaceList[index].isLikes==1){
					uni.showToast({
						title: "你已经点赞过了",
						icon: 'none'
					});
					return false;
				}else{
					that.spaceList[index].isLikes = 1;
				}
				
				that.spaceList[index].likes += 1;
				var data = {
					token:token,
					id:id,
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.spaceLikes(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
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
						if(res.data.code==0){
							that.spaceList[index].isLikes = 0;
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
			edit(id){
				var that = this;
				uni.navigateTo({
				    url: '/pages/space/post?postType=edit&id='+id
				});
			},
			forward(id){
				var that = this;
				uni.navigateTo({
				    url: '/pages/space/post?type=2&id='+id
				});
			},
			
			goShopInfo(data){
				var that = this;
				var sid = data.id;
				var status = data.status;
				if(status!=1){
					uni.showToast({
						title: "商品未通过审核",
						icon: 'none'
					})
					return false;
				}
				uni.navigateTo({
				    url: '/pages/shop/shopinfo?sid='+sid
				});
			},
			goPostInfo(id){
				var that = this;
				uni.navigateTo({
					url: '/pages/forum/info?id='+id
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
			toBan(uid){
				if(uid==0){
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
									if(res.data.code==1){
										uni.showToast({
											title: res.data.msg+"，刷新数据后生效",
											icon: 'none'
										})
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
			goPlay(url){
				var that = this;
				that.curVideo =url;
				that.isPlay=true;
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
			goMyBan(item,type){
				var that = this;
				var token = "";
				var id = 0;
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var title = "";
				if(type=="banUser"){
					id = item.uid;
					title = '确定要拉黑作者吗？拉黑后，将屏蔽该用户所有发布内容！'
				}
				if(type=="banSpace"){
					id = item.id;
					title = '确定要屏蔽该动态吗！'
				}
				var data = {
					"id":id,
					"type":type,
					"token":token
				}
				uni.showModal({
					title: title,
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
											title: "操作成功！",
											icon: 'none'
										})
										that.myBanLog();
										var curId = item.id;
										var spaceList = that.spaceList;
										for(var i in spaceList){
											if(spaceList[i].id == curId){
												spaceList[i].isBan = true;
											}
											if(type=="banUser"){
												if(spaceList[i].uid == id){
													spaceList[i].isBan = true;
												}
											}
										}
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
			}
		}
	}
</script>

<style>
</style>