<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="postType=='add'">
						<block v-if="type==0">
							发布新动态
						</block>
						<block v-if="type==1">
							转发文章
						</block>
						<block v-if="type==2">
							转发动态
						</block>
						<block v-if="type==4">
							发布视频动态
						</block>
						<block v-if="type==5">
							转发商品
						</block>
						<block v-if="type==6">
							转发帖子
						</block>
					</block>
					<block v-else>
						编辑动态
					</block>
				</view>
				<view class="action">
					<!--  #ifdef H5 || APP-PLUS -->
					<block v-if="postType=='add'">
						<button class="cu-btn round bg-gradual-orange" @tap="addSpace()">发布</button>
					</block>
					<block v-else>
						<button class="cu-btn round bg-gradual-orange" @tap="editSpace()">保存</button>
					</block>
					<!--  #endif -->
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<form>
			<view class="cu-form-group">
				<textarea maxlength="-1" v-model="text" placeholder="输入您现在的想法"></textarea>
			</view>
			<!--  #ifdef H5 || APP-PLUS -->
			<view class="comments-owo space-owo">
				<text class="cuIcon-emoji" @tap="OwO"></text>
				<!--表情-->
				<view class="owo" v-if="isOwO">
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
			</view>
			<view class="cu-form-group">
				<view class="title">仅自己可见</view>
				<switch @change="OnlyMe" :class="onlyMe?'checked':''" :checked="onlyMe?true:false"></switch>
			</view>
			
			<!--  #endif -->
			<block v-if="type==0">
				<view class="grid flex-sub col-3 grid-square space-pic">
					<view class="bg-img" :style="'background-image:url('+item+');'"
					 v-for="(item,index) in picList" :key="index">
					 <text class="cuIcon-close" @tap="picClose(item)"></text>
					</view>
					<view class="space-upload" v-if="picList.length < 9" @tap="upload">
						<text class="cuIcon-add"></text>
					</view>
				</view>
			</block>
			<block v-if="type==4">
				<view class="grid flex-sub col-3 grid-square space-pic">
					<view class="space-upload" v-if="pic == ''" @tap="uploadVideo">
						<text class="cuIcon-add"></text>
					</view>
					<view class="space-upload " v-if="pic != ''">
						<text class="cuIcon-close bg-black" @tap="pic=''"></text>
					</view>
				</view>
			</block>
			<block v-if="type==2">
				<view class="grid flex-sub padding-sm bg-white" v-if="forwardJson!=null">
					
					<view class="user-space-info">
						<view class="user-space-text">
							<text class="text-blue">@{{forwardJson.userJson.name}}：</text>{{forwardJson.text}}
						</view>
					</view>
				</view>
			</block>
			<block  v-if="type==1">
				<view class="grid flex-sub padding-lr margin-top-sm" v-if="contentJson!=null&&contentJson.cid!=0">
					<view class="user-post-info">
						<view class="user-post-pic" v-if="contentJson.images.length>0">
							<image :src="contentJson.images[0]" mode="widthFix"></image>
						</view>
						<view class="user-post-text">
							<view class="user-post-title">
								{{contentJson.title}}
							</view>
							<view class="user-post-intro">
								{{contentJson.text}}
							</view>
						</view>
					</view>
				</view>
			</block>
			<block  v-if="type==5">
				<view class="grid flex-sub padding-lr" v-if="shopJson!=null&&shopJson.id!=0">
					<view class="user-post-info">
						<view class="user-post-pic">
							<image :src="shopJson.imgurl" mode="widthFix"></image>
						</view>
						<view class="user-post-text">
							<view class="user-post-title">
								{{shopJson.title}}
							</view>
							<view class="user-post-intro">
								<text class="text-red text-lg text-bold">{{parseInt(shopJson.price)}} {{currencyName}}</text>
								
							</view>
							<view class="user-post-intro">
								<text class="text-gray text-sm">剩余数量：{{shopJson.num}}</text>
								
							</view>
						</view>
					</view>
				</view>
			</block>
			
			<block  v-if="type==6">
				
				<view class="grid flex-sub padding-lr margin-top-sm" v-if="postJson!=null&&postJson.id!=0">
					<view class="user-post-info">
						<view class="user-post-pic" v-if="postJson.images.length>0">
							<image :src="postJson.images[0]" mode="widthFix"></image>
						</view>
						<view class="user-post-text">
							<view class="user-post-title">
								{{postJson.title}}
							</view>
							<view class="user-post-intro">
								{{postJson.text}}
							</view>
						</view>
					</view>
				</view>
			</block>
			<!--  #ifdef MP -->
			<view class="all-btn">
				<view class="user-btn flex flex-direction">
					<block v-if="postType=='add'">		
						<button class="cu-btn bg-gradual-orange margin-tb-sm lg" @tap="addSpace()">发布</button>
					</block>
					<block v-else>
						<button class="cu-btn bg-gradual-orange margin-tb-sm lg" @tap="editSpace()">保存</button>
					</block>
					
					
				</view>
			</view>
			<!--  #endif -->
			
		</form>
		<view class="cu-modal" :class="modalName=='kaptcha'?'show':''">
			<view class="cu-dialog kaptcha-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">操作验证</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close"></text>
					</view>
				</view>
				<view class="kaptcha-form">
					<view class="kaptcha-image">
						<image :src="kaptchaUrl" mode="widthFix" @tap="reloadCode()"></image>
					</view>
					<view class="kaptcha-input">
						<input name="input" v-model="verifyCode" placeholder="请输入验证码"></input>
						<view class="cu-btn bg-blue" @tap="addSpace">确定</view>
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
				
				id:0,
				postType:"add",
				type:0,
				text:"",
				toid:0,
				pic:"",
				picList:[],
				token:"",
				currencyName:"",
				
				forwardJson:null,
				contentJson:null,
				postJson:null,
				shopJson:null,
				
				isOwO:false,
				owo:owo,
				owoList:[],
				OwOtype:"paopao",
				
				
				modalName:null,
				kaptchaUrl:"",
				verifyCode:"",
				verifyLevel:0,
				
				onlyMe:false
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onHide() {
			localStorage.removeItem('getuid')
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('token')){
				that.token = localStorage.getItem('token');
			}
			
		},
		onLoad(res) {
			var that = this;
			that.currencyName = that.$API.getCurrencyName();
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			// #ifdef APP-PLUS || H5
			that.owoList = that.owo.data.paopao.container;
			// #endif
			if(res.type){
				that.type = res.type;
			}
			if(res.toid){
				that.toid = res.toid;
				if(that.type==6){
					that.getPostInfo();
				}else{
					that.getInfo()
				}
				
			}
			
			
			if(res.postType){
				that.postType = res.postType;
			}
			if(res.id){
				that.id = res.id;
				if(that.postType=='add'){
					that.getForwardInfo(that.id);
				}else{
					that.getSpaceInfo();
				}
				
			}
			that.kaptchaUrl = that.$API.getKaptcha();
			that.getConfig();
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			OnlyMe(e) {
				this.onlyMe = e.detail.value
			},
			reloadCode(){
				var that = this;
				var kaptchaUrl = that.$API.getKaptcha();
				var num=Math.ceil(Math.random()*10);
				kaptchaUrl += "?"+num;
				that.kaptchaUrl = kaptchaUrl;
			},
			getConfig() {
				var that = this;
				if(localStorage.getItem('AppInfo')){
					try{
						var AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
						that.verifyLevel = AppInfo.verifyLevel;
					}catch(e){
						console.log(e);
					}
					
				}
			},
			hideModal(e) {
				this.modalName = null
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
				that.text+=text;
				that.isOwO = false;
			},
			OwO(){
				var that = this;
				that.isOwO = !that.isOwO;
			},
			getForwardInfo(toid){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":that.id,
					"token":token
				}
				that.$Net.request({
					url: that.$API.spaceInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoading=1;
						if(res.data.code==1){
							that.forwardJson = res.data.data;
							that.toid = res.data.data.id;
							
						}
					},
					fail: function(res) {
						that.isLoading=1;
					}
				});
				
			},
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},
			getSpaceInfo(){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"id":that.id,
					"token":token
				}
				that.$Net.request({
					url: that.$API.spaceInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoading=1;
						if(res.data.code==1){
							that.id = res.data.data.id;
							that.type = res.data.data.type;
							
							if(res.data.data.onlyMe==1){
								that.onlyMe = true;
							}
							var text = res.data.data.text;
							text = that.replaceAll(text,"/r/n","\n");
							text = that.replaceAll(text,"||rn||","\n");
							that.text = text;
							that.toid = res.data.data.toid;
							if(res.data.data.pic){
								that.pic = res.data.data.pic;
								if(that.type==0){
									if(that.pic.indexOf("||")!=-1){
										that.picList = that.pic.split("||");
									}else{
										that.picList = that.picList.push(that.pic);
									}
								}
							}
							
							if(that.type==1){
								that.contentJson = res.data.data.contentJson;
							}
							if(that.type==5){
								that.shopJson = res.data.data.shopJson;
							}
							if(that.type==6){
								that.postJson = res.data.data.postJson;
							}
							if(that.type==2){
								that.getForwardInfo(that.toid);
							}
							
						}
					},
					fail: function(res) {
						that.isLoading=1;
					}
				});
				
			},
			getInfo(){
				var that = this;
				var data = {
					"key":that.toid,
					"isMd":0,
				}
				
				that.$Net.request({
					url: that.$API.getContentsInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						uni.stopPullDownRefresh();
						if(res.data.title){
							that.contentJson = res.data;
							

							
						}
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
					}
				})
			},
			getPostInfo(){
				var that = this;
				var data = {
					"id":that.toid,
				}
				
				that.$Net.request({
					url: that.$API.postInfoForum(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "post",
					dataType: 'json',
					success: function(res) {
						uni.stopPullDownRefresh();
						if(res.data.code==1){
							that.postJson = res.data.data;
						}
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
					}
				})
			},
			addSpace(){
				var that = this;
				if(that.token==""){
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					
					var timer = setTimeout(function() {
						uni.navigateTo({
						    url: '/pages/user/login'
						});
						clearTimeout('timer')
					}, 1000)
					return false
				}
				if(that.type==2){
					if (that.text == "") {
						text = "转发了动态"
					}
				}
				if (that.text == "") {
					uni.showToast({
					    title:"请输入动态内容",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var text  = that.text;
				if(that.type==0){
					var picList = that.picList;
					var pic = "";
					for(var i in picList){
						if(i==0){
							pic += picList[i];
						}else{
							pic += "||"+picList[i];
						}
					}
					that.pic = pic;
				}
				if(that.type==4){
					if(that.pic==""){
						uni.showToast({
						    title:"请上传视频文件",
							icon:'none',
							duration: 1000,
							position:'bottom',
						});
						return false;
					}
				}
				text = text.replace(/\r\n/g,"||rn||");
				text = text.replace(/\n/g,"||rn||");
				
				if(that.verifyLevel>1){
					if (that.verifyCode == "") {
						that.modalName = 'kaptcha'
						return false
					}
				}
				var data = {
					"type":that.type,
					"text":text,
					"toid":that.toid,
					"pic":that.pic,
					"token":that.token,
					'verifyCode':that.verifyCode
				}
				if(that.onlyMe){
					data.onlyMe = 1;
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.addSpace(),
					data:that.$API.removeObjectEmptyKey(data),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.modalName = null;
						that.verifyCode = "";
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							var timer = setTimeout(function() {
								that.back();
							}, 1000)
							
						}
					},
					fail: function(res) {
						that.modalName = null;
						that.verifyCode = "";
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: "网络开小差了哦",
							icon: 'none'
						})
						uni.stopPullDownRefresh()
					}
				})
			},
			editSpace(){
				var that = this;
				if(that.token==""){
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					
					var timer = setTimeout(function() {
						uni.navigateTo({
						    url: '/pages/user/login'
						});
						clearTimeout('timer')
					}, 1000)
					return false
				}
				if(that.type==2){
					if (that.text == "") {
						text = "转发了动态"
					}
				}
				if (that.text == "") {
					uni.showToast({
					    title:"请输入动态内容",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var text  = that.text;
				if(that.type==0){
					var picList = that.picList;
					var pic = "";
					for(var i in picList){
						if(i==0){
							pic += picList[i];
						}else{
							pic += "||"+picList[i];
						}
					}
					that.pic = pic;
				}
				if(that.type==4){
					if(that.pic==""){
						uni.showToast({
						    title:"请上传视频文件",
							icon:'none',
							duration: 1000,
							position:'bottom',
						});
						return false;
					}
				}
				text = text.replace(/\r\n/g,"||rn||");
				text = text.replace(/\n/g,"||rn||");
				var data = {
					id:that.id,
					type:that.type,
					text:text,
					toid:that.toid,
					pic:that.pic,
					token:that.token
				}
				if(that.onlyMe){
					data.onlyMe = 1;
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.editSpace(),
					data:that.$API.removeObjectEmptyKey(data),
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
							var timer = setTimeout(function() {
								that.back();
							}, 1000)
							
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
						uni.stopPullDownRefresh()
					}
				})
			},
			upload(){
				let that = this				
				uni.chooseImage({
					count: 9,  // 最多可以选择的图片张数，默认9
					sizeType:['original'],
					sourceType: ['album', 'camera'], 
				    success: function (res) {						
						uni.showLoading({
							title: "加载中"
						});
						const tempFilePaths = res.tempFilePaths;
						for(let i = 0;i < tempFilePaths.length; i++) {
							const uploadTask = uni.uploadFile({
							  url : that.$API.upload(),
							  filePath: tempFilePaths[i],
							  name: 'file',
							  formData: {
							   'token': that.token
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
									uni.showToast({
										title: data.msg,
										icon: 'none'
									})
									if(data.code==1){
									   var url = data.data.url;
									   that.picList.push(url);
									}
								},fail:function(){
									setTimeout(function () {
										uni.hideLoading();
									}, 1000);
								}
								
							   
							});
						}
					}
				})
			},
			// uploadVideo(){
			// 	var that = this;
				
			// 	uni.chooseVideo({
			// 		sourceType: ['camera', 'album'],
			// 		compressed:false,
			// 		success: (responent) => {
			// 			uni.showLoading({
			// 				title: "加载中"
			// 			});
			// 			let videoFile = responent.tempFilePath;
			// 			const uploadTask = uni.uploadFile({
			// 			  url : that.$API.upload(),
			// 			  filePath:videoFile,
			// 			  name: 'file',
			// 			  formData: {
			// 			   'token': that.token
			// 			  },
			// 			  success: function (uploadFileRes) {
			// 				  setTimeout(function () {
			// 				  	uni.hideLoading();
			// 				  }, 1000);
			// 					var data = JSON.parse(uploadFileRes.data);
			// 					//var data = uploadFileRes.data;
			// 					uni.showToast({
			// 						title: data.msg,
			// 						icon: 'none'
			// 					})
			// 					if(data.code==1){
			// 					   var url = data.data.url;
			// 					   that.pic = url;
			// 					}
			// 				},fail:function(){
			// 					uni.showToast({
			// 						title: "网络异常，上传失败！",
			// 						icon: 'none'
			// 					})
			// 					setTimeout(function () {
			// 						uni.hideLoading();
			// 					}, 1000);
			// 				}
							
						   
			// 			});
			// 		}
			// 	})
			// },
			
			picClose(item){
				var that = this;
				var picList = that.picList;
				var list = [];
				for(var i in picList){
					if(picList[i]!=item){
						list.push(picList[i]);
					}
				}
				that.picList = list;
			},
			// 入口方法
			uploadVideo() {
			  let that = this;
			
			  if (process.env.UNI_PLATFORM === 'h5') {
			    // H5 平台
			    const fileInput = document.createElement('input');
			    fileInput.type = 'file';
			    fileInput.accept = 'video/*';
			    fileInput.onchange = async (e) => {
			      const file = e.target.files[0];
			      if (!file) return;
			
			      uni.showLoading({ title: "分片上传中…" });
			      try {
			        const url = await that.uploadLargeVideoH5(file);
			        uni.hideLoading();
			        uni.showToast({ title: "上传成功", icon: "none" });
			        that.pic = url;
			      } catch (err) {
			        console.error(err);
			        uni.hideLoading();
			        uni.showToast({ title: "上传失败", icon: "none" });
			      }
			    };
			    fileInput.click();
			    return;
			  }
			
			  // App / 小程序
			  uni.chooseVideo({
			    sourceType: ['camera', 'album'],
			    compressed: false,
			    success: async (res) => {
			      const filePath = res.tempFilePath;
			      const fs = uni.getFileSystemManager();
			      const stat = fs.statSync(filePath);
			      const size = stat.size;
			
			      if (size < 5 * 1024 * 1024) {
			        return that.directUpload(filePath);
			      }
			
			      uni.showLoading({ title: "分片上传中…" });
			      try {
			        const url = await that.uploadLargeVideoApp(filePath);
			        uni.hideLoading();
			        uni.showToast({ title: "上传成功", icon: "none" });
			        that.pic = url;
			      } catch (e) {
			        console.error(e);
			        uni.hideLoading();
			        uni.showToast({ title: "上传失败", icon: "none" });
			      }
			    }
			  });
			},
			
			// ========================
			// H5 分片上传
			// ========================
			async uploadLargeVideoH5(file) {
			  const chunkSize = 2 * 1024 * 1024;
			  const totalChunks = Math.ceil(file.size / chunkSize);
			  const uploadId = Date.now() + "_" + Math.random().toString(36).substr(2);
			
			  for (let index = 0; index < totalChunks; index++) {
			    const start = index * chunkSize;
			    const end = Math.min(start + chunkSize, file.size);
			    const chunk = file.slice(start, end);
			
			    await this.uploadSingleChunkH5(uploadId, index, totalChunks, chunk);
			  }
			
			  const mergeRes = await this.mergeChunks(uploadId, file.name, totalChunks);
			  return mergeRes.data.url;
			},
			
			uploadSingleChunkH5(uploadId, index, total, chunk) {
			  const formData = new FormData();
			  formData.append('file', chunk);
			  formData.append('uploadId', uploadId);
			  formData.append('index', index);
			  formData.append('total', total);
			  formData.append('token', this.token);
			
			  return fetch(this.$API.uploadChunk(), {
			    method: 'POST',
			    body: formData
			  }).then(res => res.json())
			    .catch(() => new Promise((resolve, reject) => {
			      setTimeout(() => {
			        this.uploadSingleChunkH5(uploadId, index, total, chunk).then(resolve).catch(reject);
			      }, 1500);
			    }));
			},
			
			// ========================
			// App / 小程序分片上传
			// ========================
			async uploadLargeVideoApp(filePath) {
			  const fs = uni.getFileSystemManager();
			  const stat = fs.statSync(filePath);
			  const chunkSize = 2 * 1024 * 1024;
			  const totalChunks = Math.ceil(stat.size / chunkSize);
			  const uploadId = Date.now() + "_" + Math.random().toString(36).substr(2);
			
			  for (let index = 0; index < totalChunks; index++) {
			    const start = index * chunkSize;
			    const end = Math.min(start + chunkSize, stat.size);
			    const chunkPath = filePath; // uni.uploadFile 会自动读取 filePath 指定文件，可以按偏移读取完整文件
			
			    await new Promise((resolve, reject) => {
			      uni.uploadFile({
			        url: this.$API.uploadChunk(),
			        filePath: chunkPath,
			        name: 'file',
			        formData: {
			          uploadId,
			          index,
			          total: totalChunks,
			          token: this.token
			        },
			        success: res => resolve(res),
			        fail: err => reject(err)
			      });
			    });
			  }
			
			  // 合并
			  const mergeRes = await this.mergeChunks(uploadId, filePath.split('/').pop(), totalChunks);
			  return mergeRes.data.url;
			},
			
			// ========================
			// 合并分片 (H5 / App / 小程序)
			// ========================
			mergeChunks(uploadId, filename, total) {
			  const formData = new FormData();
			  formData.append('uploadId', uploadId);
			  formData.append('filename', filename);
			  formData.append('total', total);
			  formData.append('token', this.token);
			
			  if (process.env.UNI_PLATFORM === 'h5') {
			    return fetch(this.$API.uploadMerge(), { method: 'POST', body: formData }).then(res => res.json());
			  } else {
			    return new Promise((resolve, reject) => {
			      uni.request({
			        url: this.$API.uploadMerge(),
			        method: 'POST',
			        header: { 'Content-Type': 'multipart/form-data' },
			        formData: { uploadId, filename, total, token: this.token },
			        success: res => resolve(res.data),
			        fail: reject
			      });
			    });
			  }
			}


			
		}
	}
</script>

<style>
</style>
