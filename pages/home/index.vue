<template>
	<view>
		<home v-show="curType=='home'" :curPage="0"></home>
		<find v-show="curType=='find'" :curPage="1"></find>
		<square v-show="curType=='square'" :curPage="2"></square>
		<user v-show="curType=='user'" :curPage="3"></user>
		<view class="tabbar" :style="{'padding-bottom': paddingBottomHeight + 'upx'}" :class="$store.state.AppStyle">
			<view class="tabbar-operate-bg" :class="isPost?'show':''" @tap="isPost=false"></view>
			<view class="tabbar-operate" :class="isPost?'show':''" :style="{'padding-bottom': paddingBottomHeight + 'upx'}">
				<view class="tabbar-operate-main grid col-3">
					<view class="index-sort-box">
						<view class="index-sort-main"  @tap="toLink('../edit/articlePost?type=add')">
							<view class="index-sort-i" style="background: rgba(30, 134, 231, 0.2);">
								<text class="cuIcon-writefill" style="color:  #1e86e7;"></text>
							</view>
							<view class="index-sort-text">
								文章
							</view>
						</view>
					</view>
					<view class="index-sort-box">
						<view class="index-sort-main" @tap="toLink('../space/post?type=0')">
							<view class="index-sort-i" style="background: rgba(21, 159, 44, 0.2);">
								<text class="cuIcon-creativefill" style="color:  #159f2c;"></text>
							</view>
							<view class="index-sort-text">
								动态
							</view>
						</view>
					</view>
					<view class="index-sort-box">
						<view class="index-sort-main" @tap="toLink('../edit/addshop')">
							<view class="index-sort-i" style="background: rgba(255, 0, 127, 0.2);">
								<text class="cuIcon-cartfill" style="color:  #ff007f;"></text>
							</view>
							<view class="index-sort-text">
								商品
							</view>
						</view>
					</view>
				</view>
			</view>
			<block  v-for="(item, index) in list" 
				    :key="index">
				
				<view class="tabbar-item" @tap="tabbarChange(item.type,index)">
				    <image class="item-img" :src="item.icon_a+'.png'" v-if="curType == item.type"></image>
				    <image class="item-img" :src="item.icon" v-else></image>
				    <view class="item-name" :class="{'tabbarActive': curType == item.type}" v-if="item.text">{{item.text}}</view>
				</view>
				<view class="tabbar-item addPost" v-if="index==1" @tap="isPost=!isPost" :class="isPost?'postShow':''">
					<view class="addPost-main">
						<view class="addPost-i">
							 <text class="cuIcon-add"></text>
						</view>
					</view>
				</view>
			</block>
		</view>
		
		<!--弹窗公告-->
		<view class="announcement" v-if="isAnnouncement&&Update!=1">
			<view class="announcement-bg" @tap="isAnnouncement=false">
				
			</view>
			<view class="announcement-main">
				<view class="announcement-title">
					网站公告
					<text class="cuIcon-close text-red" @tap="isAnnouncement=false"></text>
				</view>
				<view class="announcement-concent">
					<rich-text :nodes="announcement"></rich-text>
				</view>
				<view class="announcement-btn">
					<button class="cu-btn bg-gradual-blue lg" @tap="readAnnouncement">我知道了</button>
				</view>
			</view>
		</view>
		<!--update-->
		<!--  #ifdef APP-PLUS -->
		<view class="update" v-if="Update==1">
			<view class="update-bg">
				
			</view>
			<view class="update-box">
				<view class="update-main">
					<image src="../../static/app-plus/ic_ar.png"></image>
					<view class="update-title">发现新版本：{{versionTitle}}</view>
					<view class="update-intro"><rich-text :nodes="versionIntro"></rich-text></view>
					<view class="update-btn grid col-2">
						<view class="update-btn-box">
							<view class="update-btn-main bg-blue"  @tap="isUpdate(true)">
								确定
							</view>
						</view>
						<view class="update-btn-box">
							<view class="update-btn-main bg-gray" @tap="closeUpdate()">
								取消
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!--  #endif -->
		<!--#ifdef APP-PLUS-->
		<view class="Startupmap" v-if="!isStart">
			<view class="Startupmap-close" @tap="toStart">
				<text>跳过</text>
			</view>
			<view class="Startupmap-pic" @tap="toStartUrl">
				<image :src="startImg.localUrl"></image>
				<!-- <image src="_doc/uniapp_save/16631684216820.png"></image> -->
			</view>
		</view>
		<!--#endif-->
	</view>
	
</template>

<script>
import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
export default {
    data() {
        return {
			isPost:false,
            paddingBottomHeight: 0,  //苹果X以上手机底部适配高度
            list: [{
                    text: '首页',  
                    icon: '/static/tabbar/home.png',  //未选中图标
                    icon_a: '/static/tabbar/home_cur',  //选中图片
                    type: "home",
                },{
                    text: '发现',
                    icon: '/static/tabbar/find.png',
                    icon_a: '/static/tabbar/find_cur',
					type: "find",
                }
                ,{
                    text: '广场',
                    icon: '/static/tabbar/square.png',
                    icon_a: '/static/tabbar/square_cur',
                    type: 'square',
                },{
                    text: '我的',
                    icon: '/static/tabbar/user.png',
                    icon_a: '/static/tabbar/user_cur',
                    type: "user",
                },
            ],
			curType:"home",
			curStyle:"blue",
			curPage:0,
			
			announcement:"",
			isAnnouncement:false,
			
			versionCode:0,
			wgtVer:'',
			
			Update:0,
			versionUrl:"",
			versionTitle:"",
			versionIntro:"",
			
			startImg:{
				localUrl:""
			},
			isStart:false,
			backButtonPress:0,
        };
    },
	onBackPress(){
		// #ifdef APP-PLUS
		this.backButtonPress++;
		if (this.backButtonPress > 1) { 
			plus.runtime.quit();
		} else {
			plus.nativeUI.toast('再按一次退出应用');
		} 
		setTimeout(()=> {
			this.backButtonPress = 0;
		}, 1000);
		// #endif
		return true;
	},
	onPullDownRefresh(){
		var that = this;
		uni.$emit('onPullDownRefresh', that.curPage);
		var timer = setTimeout(function() {
			uni.stopPullDownRefresh();
		}, 1000);
	},
	onShow() {
		var that = this;
		setTimeout(function() {
			uni.$emit('onShow', that.curPage);
		}, 200); 
		// #ifdef APP-PLUS
		//外部启动APP处理
		var args= plus.runtime.arguments;
		plus.runtime.arguments=null;
		plus.runtime.arguments="";
		if(args){  
			
			//跳转到文章
			if(args.indexOf("?info=") != -1){
				var arr = args.split("?info=");
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+arr[1]
				});
			}
			//判断是否是扫码登录
			if(args.indexOf("?scan=") != -1){
				var arr = args.split("?scan=");
				that.scanLogin(arr[1]);
			}
		}
		// #endif
		that.unreadNum();
	},
	//触底监听
	onReachBottom() {
		var that = this;
		uni.$emit('onReachBottom', that.curPage);
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
		var title = that.$API.GetAppName();
		var data = {
			title: title,
		}
		
		return data;
	
	},
	onShareTimeline() {
		var that = this;
		var title = that.$API.GetAppName();
		var data = {
			title: title,
		}
		
		return data;
	},
	// #endif
    onLoad() {
        let that = this;
		let platform=uni.getSystemInfoSync().platform;
		localStorage.setItem('app_platform',platform);
        uni.getSystemInfo({
            success: function (res) {
                let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15'];
				console.log("当前设备型号："+res.model)
                model.forEach(item => {
					
                    //适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
                    if(res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
                        that.paddingBottomHeight = 40;
                    }
                })
            }
        });
		that.getAnnouncement();
		// #ifdef APP-PLUS
		that.isUpdate(false);
		// #endif
		
		
		setTimeout(function() {
			that.isStart=true;
		}, 5000); 
		// #ifdef APP-PLUS
		 that.appStartImg();
		 //#endif
		 that.unreadNum();
		 
		 // setTimeout(function() {
		 // 	uni.$emit('onShow', 0);
		 // }, 200); 
		uni.$on('goUser', function(data) {
			that.tabbarChange("user",3)
		});
    },
	onReady() {
		setTimeout(function() {
			uni.$emit('onShow', 0);
		}, 200); 
	},
    methods: {
        tabbarChange(type,index) {
			var that = this;
			that.isPost = false;
			that.curPage = index;
            that.curType = type;
			that.unreadNum();
			setTimeout(function() {
				uni.$emit('onShow', index);
			}, 200); 
			
        },
		closeUpdate(){
			var that = this;
			that.Update = 0;
			// uni.showTabBar({
			// 	animation: true
			// });
		},
		toLink(text){
			var that = this;
			that.isPost = false;
			if(!localStorage.getItem('token')||localStorage.getItem('token')==""){
				uni.showToast({
					title: "请先登录哦",
					icon: 'none'
				})
				return false;
			}
			uni.navigateTo({
				url: text
			});
		},
		getAnnouncement(){
			var that = this;
			if(localStorage.getItem('AppInfo')){
				try{
					var AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
					that.announcement = AppInfo.announcement;
					if(that.announcement!=""||AppInfo.announcement){
						if(localStorage.getItem('isAnnouncement')){
							var oldTime = Number(localStorage.getItem('isAnnouncement'));
							var curTime=new Date().getTime();
							var difference = curTime - oldTime;
							if(difference > 86400000){
								that.isAnnouncement=true;
							}
						}else{
							that.isAnnouncement=true;
						}
						
					}
				}catch(e){
					console.log(e);
				}
			}
		},
		isUpdate(Status) {
			var that = this;
			
			plus.runtime.getProperty(plus.runtime.appid, function(inf) {
				
				that.wgtVer = inf.version //获取当前版本号
				that.versionCode = inf.versionCode;
				var version = inf.versionCode;
				//从缓存里读取版本号
				if(localStorage.getItem('AppInfo')){
					try{
						var AppInfo = JSON.parse(localStorage.getItem('AppInfo'));
						var versionCode = AppInfo.versionCode;
						let platform=uni.getSystemInfoSync().platform;
						if(platform=='ios'){
							that.versionUrl =  AppInfo.iosUrl;
						}else if(platform=='android'){
							that.versionUrl =  AppInfo.androidUrl;
						}
						
						that.versionTitle = AppInfo.version;
						that.versionIntro = AppInfo.versionIntro;
						if(Status){
							// uni.showToast({
							// 	title:"检测完成",
							// 	icon:'none',
							// 	duration: 1000,
							// 	position:'bottom',
							// });
							
						}
						if(versionCode > version){
							console.log("有更新");
							uni.hideTabBar({
							animation: true
							})
							that.Update=1;
							if(Status){
								if(that.versionUrl!=""){
									plus.runtime.openURL(that.versionUrl);  
								}
							}
						}
					}catch(e){
						console.log(e);
					}
					
				}
			});
		},
		//自定义启动图广告相关
		toStartUrl(){
			if(localStorage.getItem('appStart')){
				var imgData = JSON.parse(localStorage.getItem('appStart'));
				//如果线上的图片与本地缓存图片相同，就不再进行下载
				if(imgData.url){
					var url = imgData.url;
					var type = imgData.urltype;
					if(url.indexOf("http") != -1){
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
						
					}else{
						uni.navigateTo({
						    url: url
						});
					}
					
				}else{
					return false
				}
				
			}else{
				return false
			}
		},
		toStart(){
			var that = this;
			that.isStart=true;
		},
		appStartImg(){
			
			var that = this;
			// #ifdef APP-PLUS
			if(localStorage.getItem('appStart')){
				var imgData = JSON.parse(localStorage.getItem('appStart'));
				
				if(!imgData.localUrl||imgData.localUrl==""){
					console.log("启动图文件本地不存在");
					localStorage.removeItem('appStart');
					that.isStart=true;
					return false;
				}
				var localUrl = imgData.localUrl;
				//在请求之前，先为了性能载入上次图片
				plus.io.resolveLocalFileSystemURL(imgData.localUrl, function(entry) {
					console.log("启动图文件本地存在");
					imgData.localUrl = localUrl;
					that.startImg = imgData;
				
					that.isStart=false;
				}, function(e) {
					console.log("启动图文件本地不存在");
					localStorage.removeItem('appStart');
					that.isStart=true;
				});
			}else{
				console.log("启动图未缓存")
			}
			if(localStorage.getItem('startAds')){
				var data =JSON.parse(localStorage.getItem('startAds'));
				var adsNum = data.length;
				if(adsNum>0){
					
					var adsRand = Math.floor(Math.random()*adsNum);
					var appStartPic = data[adsRand].img;
					if(appStartPic!=""){
						appStartPic = appStartPic.replace(/[\r\n]/g,"");
						var imgData = data[adsRand];
						imgData.appStartPic = appStartPic;
						that.Download(imgData);
					}
				}else{
					console.log("广告信息不存在，删除缓存");
					localStorage.removeItem('appStart');
					that.isStart=true;
				}
				
			}
			// #endif
		},
		Download(startImg) {
			var that = this;
			// #ifdef APP-PLUS
			var url = startImg.appStartPic;
			if(localStorage.getItem('appStart')){
				var imgData = JSON.parse(localStorage.getItem('appStart'));
				//如果线上的图片与本地缓存图片相同，就不再进行下载
				if(url == imgData.appStartPic){
					console.log("启动图不更新");
					//但是链接可能变化，所以需要载入缓存
					var oldStartImg = imgData;
					localStorage.setItem('appStart', JSON.stringify(oldStartImg));
					return false;
				}
			}
			uni.downloadFile({
				url:url,//下载地址接口返回
				success: (data) => {
					if (data.statusCode === 200) {
						//文件保存到本地
						uni.saveFile({
							tempFilePath: data.tempFilePath, //临时路径
							success: function(res) {
								// uni.showToast({
								// 	icon: 'none',
								// 	mask: true,
								// 	title: '文件已保存：' + res.savedFilePath, //保存路径
								// 	duration: 3000,
								// });
								
								startImg.localUrl = res.savedFilePath;
								localStorage.setItem('appStart', JSON.stringify(startImg));
								console.log("启动图已更新"+startImg.localUrl);
							
								that.startImg = startImg;
							}
						});
					}
				},
				fail: (err) => {
					console.log(err);
					// uni.showToast({
					// 	icon: 'none',
					// 	mask: true,
					// 	title: '失败请重新下载',
					// });
				},
			});
			// #endif
		},
		readAnnouncement(){
			var that = this;
			that.isAnnouncement = false;
			var timestamp=new Date().getTime();
			localStorage.setItem('isAnnouncement',timestamp);
			
		},
		unreadNum() {
			var that = this;
			var token = ""
			if(localStorage.getItem('userinfo')){
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				token=userInfo.token;
			
			}
			that.$Net.request({
				
				url: that.$API.unreadNum(),
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
						var noticeSum = res.data.data;
						localStorage.setItem('noticeSum',noticeSum);
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
};
</script>

<style>
    
</style>
