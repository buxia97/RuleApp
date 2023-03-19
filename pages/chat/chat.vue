<template>
	<view>
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content" :style="[{top:StatusBar + 'px'}]">
					<text class="text-bold">{{name}}</text>
					<block v-if="type==1">
						<text class="margin-left-xs cuIcon-group"></text>
					</block>
				</view>
				<view class="action">
					<view class="cu-avatar round"  @tap="showModal" data-target="chatInfo" :style="avatarstyle" v-if="avatarstyle!=''"></view>
					<view class="cu-avatar round" v-else>
						<text class="home-noLogin"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="cu-chat" >
			<view class="cu-item"  :style="[{padding:NavBar + 'px 0px 0px 0px'}]"></view>
			<!-- <view class="more-msg">
				<text class="text-blue" @tap="loadMore">{{moreText}}</text>
			</view> -->
			<view class="cu-info" v-if="isFollow==0">
				你还不是Ta的粉丝，关注Ta后可以获得更多动态。
				<text class="text-blue" @tap="follow(1)">关注Ta</text>
			</view>
			<block v-for="(item,index) in msgList">
				<view class="cu-item " :class="item.uid==uid?'self':''" v-if="item.type!=4">
					<view class="cu-avatar radius" @tap="toUserContents(item.userJson)"  v-if="item.uid!=uid" :style="'background-image:url('+item.userJson.avatar+');'"></view>
					<view class="main">
						<block v-if="item.type==0">
							<view class="content shadow break-all" :class="item.uid==uid?'bg-green':''" @longtap="ToCopy(item.text)">
								<rich-text :nodes="markHtml(item.text)"></rich-text>
							</view>
						</block>
						<block v-if="item.type==1">
							<image :src="item.url" @tap="previewImage(item.url)" mode="widthFix"></image>
						</block>
					</view>
					<view class="cu-avatar radius"  v-if="item.uid==uid" :style="'background-image:url('+item.userJson.avatar+');'"></view>
					<view class="date">
					{{formatDate(item.created)}}
					<block  v-if="group=='administrator'||group=='editor'">
						<text class="admin-btn margin-left-sm" v-if="item.uid!=uid">
							<text class="text-red" @tap="toDeleteMsg(item.id)">删除</text>
							<text class="text-black margin-left-sm" @tap="toBanMsg(item.uid)">禁言</text>
						</text>
					</block>
					
					
					</view>
				</view>
				<view class="cu-info round"  v-if="item.type==4">
					<block v-if="type==1">
						<block v-if="item.text=='ban'">
							管理员开启全体禁言
						</block>
						<block v-else>
							管理员关闭全体禁言
						</block>
					</block>
					<block v-else>
						<block v-if="item.text=='ban'">
							<block v-if="item.uid==uid">
								你屏蔽了对方
							</block>
							<block v-else>
								对方屏蔽了你
							</block>
						</block>
						<block v-else>
							<block v-if="item.uid==uid">
								你解除了屏蔽
							</block>
							<block v-else>
								对方解除了屏蔽
							</block>
						</block>
						
					</block>
				</view>
			</block>
		</view>

		<view class="cu-bar foot input" :style="[{bottom:InputBottom+'px'}]">
			<view class="action">
				<text class="cuIcon-pic text-grey" @tap="upload"></text>
			</view>
			<input class="solid-bottom" :adjust-position="false" :focus="false" maxlength="300" cursor-spacing="10"
			 @focus="InputFocus" @blur="InputBlur" v-model="msg"></input>
			<view class="action">
				<text class="cuIcon-emojifill text-grey"  @tap="OwO"></text>
			</view>
			<button class="cu-btn bg-green shadow" @tap="sendMsg()">发送</button>
			
		</view>
		<view class="chat-owo owo" v-if="isOwO" :style="[{bottom:InputBottom+52+'px'}]">
			<scroll-view class="owo-list" scroll-y>
				<view class="owo-main">
					<view class="owo-lit-box" v-for="(item,index)  in owoList" @tap="setOwO(item)" :key="index">
						<image :src="'/'+item.icon" mode="aspectFill"></image>
					</view>
				</view>
				
			</scroll-view>
			<view class="owo-type">
				<view class="owo-box" @tap="toOwO('paopao')" :class="OwOtype=='paopao'?'cur':''">
					泡泡
				</view>
				<view class="owo-box" @tap="toOwO('adai')" :class="OwOtype=='adai'?'cur':''">
					阿呆
				</view>
				<view class="owo-box" @tap="toOwO('alu')" :class="OwOtype=='alu'?'cur':''">
					阿鲁
				</view>
				<view class="owo-box" @tap="toOwO('quyinniang')" :class="OwOtype=='quyinniang'?'cur':''">
					蛆音娘
				</view>
			</view>
		</view>
		<view class="cu-modal" :class="modalName=='chatInfo'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content"><text class="text-bold">{{name}}</text>
					<block v-if="type==1">
						<text class="margin-left-xs cuIcon-group"></text>
					</block></view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				
					<view class="user-edit-header">
						<image :src="avatar"></image>
					</view>
				<view class="cu-bar bg-white justify-center">
					<view class="action">
						<block v-if="type==0">
							<button class="cu-btn bg-green" @tap="goUserInfo(name,toid,0)">查看信息</button>
							<block v-if="ban==0">
								<button class="cu-btn bg-red margin-left" @tap="toBan(1)">屏蔽对方</button>
							</block>
							<block v-if="ban==uid">
								<button class="cu-btn bg-red margin-left" @tap="toBan(0)">解除屏蔽</button>
							</block>
						</block>
						
						<block v-if="type==1">
							<block  v-if="group=='administrator'||group=='editor'">
								<button class="cu-btn bg-green" @tap="addGroup">修改信息</button>
								<block v-if="ban==0">
									<button class="cu-btn bg-red margin-left" @tap="toBan(1)">全体禁言</button>
								</block>
								<block v-else>
									<button class="cu-btn bg-red margin-left" @tap="toBan(0)">解除禁言</button>
								</block>
								
								<button v-if="uid==groupUser"  class="cu-btn bg-red margin-left" @tap="toDelete()"><text class="cuIcon-delete"></text></button>
							</block>
							<block v-else>
								创建人：<text class="text-blue margin-left-sm" @tap="goUserInfo(groupUserName,groupUser,1)">{{groupUserName}}</text>
							</block>
						</block>
						
						
						
						
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
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				InputBottom: 0,
				chatid:0,
				name:"未知用户",
				moreText:"获取更多",
				toid:0,
				avatar:"",
				userInfo:null,
				token:"",
				avatarstyle:"",
				msg:"",
				isFollow:1,
				type:0,
				page:1,
				
				msgList:[],
				uid:"",
				
				msgLoading:null,
				lastTime:0,
				
				group:"",
				
				isOwO:false,
				owo:owo,
				owoList:[],
				owoTextList:[],
				OwOtype:"paopao",
				
				groupUserName:"",
				groupUser:0,
				groupUserAvatar:"",
				
				modalName:"",
				ban:0,
				lastid:0,
				
			};
		},
		onShow() {
			var that = this
			if(localStorage.getItem('userinfo')){
				
				that.userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.uid = that.userInfo.uid;
				that.group = that.userInfo.group;
			}
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			//到底部后，重新变成第一页，开始加载数据
			that.page = 1;
		},
		onHide() {
			var that = this
			clearInterval(that.msgLoading);
			that.msgLoading = null
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.chatid){
				that.chatid = res.chatid;
				that.getMsgList();
				that.msgLoading = setInterval(() => {
				 that.getMsgList(false);
				}, 3000);
			}
			if(res.type){
				that.type = res.type
			}
			if(res.name){
				that.name = res.name
			}
			if(res.uid){
				that.toid = res.uid;
				that.getIsFollow();
			}
			if(that.type==0){
				that.getUserInfo(that.toid);
				that.getGroupInfo(that.chatid);
			}
			if(that.type==1){
				that.getGroupInfo(that.chatid);
			}
			// #ifdef APP-PLUS
			uni.onKeyboardHeightChange(res => {
				//监听软键盘的高度 
				//当点击软键盘自带的收起按钮的时候也就是会隐藏软键盘 这时候监听到的软键盘的高度就是0 、
				//让输入框取消焦点 这时候再去输入内容的时候 输入框就会弹起
				if (res.height == 0) {
				
					that.InputBottom = 0;
					
				}else{
					that.InputBottom = res.height;
				}
			});
			// #endif
			// #ifdef APP-PLUS || H5
			//that.owoTextList = that.owo.data.paopao.container;
			var owo = that.owo.data;
			var owoList=[];
			for(var i in owo){
				owoList = owoList.concat(owo[i].container);
			}
			that.owoTextList = owoList;
			that.owoList = that.owo.data.paopao.container;
			// #endif
			setTimeout(() => {
				uni.pageScrollTo({
					duration: 0,
					scrollTop: 99999999
				})
			},1000)
		},
		methods: {
			loadMore(){
				var that = this;
				
				if(that.isLoad==0){
					that.moreText="正在加载中...";
					that.getMsgList(true);
					
				}
			},
			back(){
				uni.navigateBack({
					delta: 1
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
			InputFocus(e) {
				this.isOwO = false;
				this.InputBottom = e.detail.height;
			},
			InputBlur(e) {
				this.InputBottom = 0;
			},
			previewImage(image) {
				var imgArr = [];
				imgArr.push(image);
				//预览图片
				uni.previewImage({
					urls: imgArr,
					current: imgArr[0]
				});
			},
			toBanMsg(uid){
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
			toDeleteMsg(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"msgid":id,
					"token":token
				}
				uni.showModal({
				    title: '确定要删除该消息吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.deleteMsg(),
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
				            			that.getMsgList();
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
			getMsgList(isPage){
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
				// else{
				// 	用户加载更多数据时，不再加载数据
				// 	if(page > 1){
				// 		return false;
				// 	}
				// }
				that.$Net.request({
					url: that.$API.msgList(),
					data:{
						"token":token,
						"chatid":that.chatid,
						"limit":200,
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
						that.moreText="获取更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								//that.contentsList = list;
								
								
								
								if(isPage){
									that.page++;
									list = list.reverse();
									list = list.concat(that.msgList);
									that.msgList = list;
								}else{
									var lastid = list[0].id;
									//如果最新消息等于最后消息，那么不更新列表
									if(that.lastid==lastid){
										return false;
									}else{
										that.lastid = lastid;
									}
									that.msgList = list.reverse();
									
									
								}
								var lastTime = that.msgList[that.msgList.length-1].created;
								if(lastTime > that.lastTime){
									setTimeout(() => {
										uni.pageScrollTo({
											duration: 0,
											scrollTop: 99999999
										})
									},100)
									that.lastTime = that.msgList[that.msgList.length-1].created;
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
						that.moreText="获取更多";
						that.isLoad=0;
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
					touid:that.toid,
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
			getUserInfo(id){
				var that = this;
				var data = {
					"key":id,
				}
				
				that.$Net.request({
					url: that.$API.getUserInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var userInfo = res.data.data;
							if(that.type==0){
								that.avatarstyle = "background-image:url("+res.data.data.avatar+");"
								that.avatar = res.data.data.avatar;
							}
							if(that.type==1){
								if(res.data.data.screenName){
									that.groupUserName = res.data.data.screenName;
								}else{
									that.groupUserName = res.data.data.name;
								}
								that.groupUserAvatar = res.data.data.avatar;
							}
						}
					},
					fail: function(res) {
					}
				});
			},
			getGroupInfo(id){
				var that = this;
				var data = {
					"id":id,
				}
				
				that.$Net.request({
					url: that.$API.groupInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							var userInfo = res.data.data;
							if(that.type==1){
								that.avatarstyle = "background-image:url("+res.data.data.pic+");"
								that.avatar = res.data.data.pic;
								that.groupUser =  res.data.data.uid;
								
								that.getUserInfo(that.groupUser);
							}
							that.ban =  res.data.data.ban;
						}
					},
					fail: function(res) {
					}
				});
			},
			sendMsg(){
				var that = this;
				var token = "";
				if(that.msg==""){
					return false;
				}
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}else{
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					clearInterval(that.msgLoading);
					that.msgLoading = null
					uni.navigateTo({
						url: '/pages/user/login'
					});
					return false;
				}
				
				var data={
					"chatid":that.chatid,
					"token":token,
					"msg":that.msg,
					"type":0,
					
				}
				//添加一个新字段
				var curtime = Date.parse(new Date());
				var msg ={
					"created": curtime / 1000,
					"text":that.msg,
					"type": 0,
					"uid": that.uid,
					"userJson": that.userInfo
				}
				that.msgList.push(msg);
				setTimeout(() => {
					uni.pageScrollTo({
						duration: 0,
						scrollTop: 99999999
					})
				},100)
				
				that.$Net.request({
					
					url: that.$API.sendMsg(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.getMsgList();
							that.msg = "";
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
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
			goUserInfo(name,toid,type){
				var that = this;
				clearInterval(that.msgLoading);
				that.msgLoading = null
				var title = name+"的信息";
				var type="user";
				if(type==0){
					uni.redirectTo({
					    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+toid+"&avatar="+encodeURIComponent(that.avatar)
					});
				}else{
					uni.navigateTo({
					    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+toid+"&avatar="+encodeURIComponent(that.groupUserAvatar)
					});
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
					clearInterval(that.msgLoading);
					that.msgLoading = null
					uni.navigateTo({
						url: '/pages/user/login'
					});
					return false;
				}
				var data = {
					token:token,
					touid:that.toid,
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
			upload(){
				let that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}else{
					uni.showToast({
						title: "请先登录",
						icon: 'none'
					})
					clearInterval(that.msgLoading);
					that.msgLoading = null
					uni.navigateTo({
						url: '/pages/user/login'
					});
					return false;
				}
				uni.chooseImage({
					count: 6, 
					sourceType: ['album', 'camera'], 
				    success: function (res) {
						uni.showLoading({
							title: "上传中"
						});
						const tempFilePaths = res.tempFilePaths;
						for(let i = 0;i < tempFilePaths.length; i++) {
							const uploadTask = uni.uploadFile({
							  url : that.$API.upload(),
							  filePath: tempFilePaths[i],
							  name: 'file',
							  formData: {
							   'token': token
							  },
							  success: function (uploadFileRes) {
								  let count = 0;
								  count++;
								  if(count==tempFilePaths.length){
									  setTimeout(function () {
										uni.hideLoading();
									  }, 1000);
								  }
									var data = JSON.parse(uploadFileRes.data);
									//var data = uploadFileRes.data;
									// uni.showToast({
									// 	title: data.msg,
									// 	icon: 'none'
									// })
									if(data.code==1){
										that.sendURL(1,data.data.url);
									}
								},fail:function(){
								}
								
							   
							});
						}
					}
				})
			},
			sendURL(type,url){
				var that = this;
				var token = "";
				if(that.url==""){
					return false;
				}
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
				
				var data={
					"chatid":that.chatid,
					"token":token,
					"url":url,
					"type":type,
					
				}
				that.$Net.request({
					
					url: that.$API.sendMsg(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.getMsgList();
							that.msg = "";
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: 'none'
							})
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
			toOwO(text){
				var that = this;
				that.OwOtype = text;
				if(text=="paopao"){
					that.owoList = that.owo.data.paopao.container;
				}
				if(text=="adai"){
					that.owoList = that.owo.data.adai.container;
				}
				if(text=="alu"){
					that.owoList = that.owo.data.alu.container;
				}
				if(text=="quyinniang"){
					that.owoList = that.owo.data.quyinniang.container;
				}
			},
			setOwO(data){
				var that = this;
				var text = data.data;
				that.msg+=text;
				that.isOwO = false;
			},
			OwO(){
				var that = this;
				that.isOwO = !that.isOwO;
			},
			markHtml(text){
				var that = this;
				text = that.replaceAll(text,"<","&lt;");
				text = that.replaceAll(text,">","&gt;");
				// #ifdef APP-PLUS || H5
				var owoList=that.owoTextList;
				for(var i in owoList){
				
					if(that.replaceSpecialChar(text).indexOf(owoList[i].data) != -1){
						text = that.replaceAll(that.replaceSpecialChar(text),owoList[i].data,"<img src='/"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				// #endif
				
				return text;
				
				
			},
			goChatInfo(){
				var that = this;
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
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal() {
				this.modalName = null
			},
			toBan(type){
				var that = this;
				var token = "";
				that.hideModal();
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":that.chatid,
					"token":token,
					"type":type
				}
				var tips = "确定要屏蔽对方吗？";
				if(that.type==1){
					tips = "确定要全体禁言吗？";
				}
				uni.showModal({
				    title: tips,
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.banChat(),
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
				            			that.getMsgList(false);
										// that.getGroupInfo(that.chatid);
										that.ban = that.uid;
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
			toDelete(){
				var that = this;
				var token = "";
				that.hideModal();
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"chatid":that.chatid,
					"token":token
				}
				uni.showModal({
				    title: '确定要删除该聊天室吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            that.$Net.request({
				            	url: that.$API.deleteChat(),
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
				            			that.back();
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
			addGroup(){
				var that = this;
				clearInterval(that.msgLoading);
				that.msgLoading = null
				var chatid = that.chatid;
				uni.navigateTo({
				    url: '/pages/manage/addGroup?chatid='+chatid+"&postType=edit"
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
		}
	}
</script>

<style>
page{
  padding-bottom: 100upx;
}
.cu-bar.foot{
	z-index: 998;
}
</style>
