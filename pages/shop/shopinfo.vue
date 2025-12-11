<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<!--  #endif -->
				<!--  #ifdef MP -->
				<view class="action" @tap="backHome">
					<text class="cuIcon-home"></text>
				</view>
				<!--  #endif -->
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					商品详情
				</view>
				<view class="action info-btn">
					<!--  #ifdef H5 || APP-PLUS -->
					<text class="cuIcon-moreandroid" @tap="moreShow=!moreShow"></text>
					<!--  #endif -->
					<view class="info-more-links" :class="moreShow?'moreShow':''">
						<view class="info-more-links-box"  @tap="toSearch">
							<text class="cuIcon-search"></text>搜索
						</view>
						<view class="info-more-links-box" @tap="report(title,4)">
							<text class="cuIcon-warn"></text>举报
						</view>
					</view>
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="info" style="margin-top:10upx;">
			<view class="shopinfo-img">
				<image :src="imgurl" mode="aspectFill" @tap="previewImage(imgurl)"></image>
			</view>
			<view class="shopinfo-info margin-bottom-sm">
				<text class="text-orange text-bold shopinfo-head-price">
					<block v-if="isvip==1">
						{{parseInt(price * vipDiscount)}} {{currencyName}}
						<text class="margin-left-xs text-sm">VIP优惠</text>
					</block>
					<block v-else>
						{{price}} {{currencyName}}
					</block>
				</text>
				<text class="text-sm text-right text-gray margin-left-xs">剩余{{num}}</text>
				<text class="text-sm text-right text-gray margin-left-xs">已售出{{sellNum}}</text>
			</view>
			<view class="shopinfo-title">
				{{title}}
			</view>
			<view class="info-author margin-bottom-sm" v-if="userInfo!=null">
				<view class="cu-list menu-avatar">
					<view class="cu-item">
						<view class="cu-avatar round lg" :style="userInfo.style"  @tap="toUserInfo(userInfo)"></view>
						<view class="content">
							<view class="text-black">
								<block v-if="userInfo.screenName">
									{{userInfo.screenName}}
								</block>
								<block v-else>
									{{userInfo.name}}
								</block>
								<!--  #ifdef H5 || APP-PLUS -->
								<!-- <text class="userlv" :style="getUserLvStyle(userInfo.lv)">{{getUserLv(userInfo.lv)}}</text> -->
								<text class="userlv" :style="getLvStyle(userInfo.experience)">{{getLv(userInfo.experience)}}</text>
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
								</view>
							</view>
						</view>
						<view class="action goUserIndex">
							<button class="cu-btn bg-gradual-red" @tap="follow(0)" v-if="isFollow==1">已关注</button>
							<button class="cu-btn bg-gradual-orange" @tap="follow(1)" v-else><text class="cuIcon-add"></text>关注</button>
							
						</view>
					</view>
				</view>
			</view>
			<view class="shopinfo-tips" v-if="integral>0">
				<text class="text-green">该商品支持{{integral}}积分抵扣</text>
			</view>
			
			<view class="info-content shop-content">
				<!-- <joMarkdown :nodes="markdownData"></joMarkdown> -->
				
				<block v-if="shopIsMd==1">
					<mp-html :content="html" :selectable="true" :show-img-menu="true" :lazy-load="true" :ImgCache="true" :markdown="true"/>
				</block>
				<block v-if="shopIsMd==0">
					<mp-html :content="html" :selectable="true" :show-img-menu="true" :lazy-load="true" :ImgCache="true" :markdown="false"/>
				</block>
			</view>
		</view>
		<view class="shopinfo-bar grid col-2" v-if="isBuy==0||type==1">
			<view class="shopinfo-price">
				<block v-if="isvip==1">
					{{parseInt(price * vipDiscount)}} {{currencyName}}
					<text class="text-yellow margin-left-xs text-sm">VIP优惠</text>
				</block>
				<block v-else>
					{{price}} {{currencyName}}
				</block>
			</view>
			<view class="shopinfo-btn">
				
				<text class="cu-btn bg-gray radius" @tap="shopBuy">立即购买</text>
				<text class="cu-btn bg-orange radius margin-left-sm"  v-if="userInfo!=null"  @tap="getPrivateChat(userInfo)">聊一聊</text>
			</view>
		</view>
		<view class="shopinfo-bar grid col-2" v-if="isBuy==1&&type!=1">
			<view class="shopinfo-price">
				已购买
			</view>
			<view class="shopinfo-btn">
				
				<text class="cu-btn bg-gray radius" @tap="shopBuy">立即购买</text>
				<text class="cu-btn bg-orange radius margin-left-sm"  v-if="userInfo!=null"  @tap="getPrivateChat(userInfo)">聊一聊</text>
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
	import mpHtml from '@/components/mp-html/mp-html'
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
			AppStyle:this.$store.state.AppStyle,
				
				uid:null,
				
				userInfo:null,
				
				sid:0,
				shopUid:0,
				title:"",
				html:"",
				markdownData: {},
				price:"",
				num:"",
				sellNum:"",
				imgurl:"",
				integral:0,
				
				isLoading:0,
				shopIsMd:-1,
				
				isBuy:0,
				shopinfo:{},
				
				vipDiscount:0,
				
				vipPrice:0,
				scale:0,
				isvip:0,
				isFollow:false,
				vip:0,
				currencyName:"",
				
				moreShow:false,
				
			}
		},
		components: {
		  mpHtml,
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
		},
		
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			//plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.getVipInfo();
			that.userStatus();
			
		},
		onPullDownRefresh(){
			var that = this;
			that.getInfo(that.sid);
			that.isBuyShop(that.sid);
		},
		onLoad(res) {
			var that = this;
			that.currencyName = that.$API.getCurrencyName();
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.sid){
				that.sid = res.sid;
				that.getInfo(that.sid);
				
			}
			try{
				if(localStorage.getItem('userinfo')){
					var userinfo = JSON.parse(localStorage.getItem('userinfo'));
					that.uid = userinfo.uid;
				}
			}catch(e){
				
			}
			
			
		},
		methods:{
			editShop(data){
				var that = this;
				var sid = data.id;
				var isMd = data.isMd;
				if(isMd==1){
					uni.navigateTo({
					    url: '/pages/user/addshop?type=edit'+'&sid='+sid
					});
				}else{
					//富文本编辑器
					uni.navigateTo({
						url: '/pages/edit/addshop?type=edit'+'&id='+sid
					});
				}
				
			},
			backHome(){
				uni.redirectTo({
					url: '/pages/home/index'
				});
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			getInfo(sid){
				var that = this;
				var data = {
					"key":that.sid,
				}
				that.$Net.request({
					url: that.$API.shopInfo(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						uni.stopPullDownRefresh();
						that.shopinfo = res.data;
						that.shopIsMd = res.data.isMd;
						that.title = res.data.title;
						that.type = res.data.type;
						that.html = res.data.text;
						that.shopUid = res.data.uid;
						that.imgurl = res.data.imgurl;
						that.integral = res.data.integral;
						that.price = res.data.price;
						that.num = res.data.num;
						that.sellNum =  res.data.sellNum;
						that.vipDiscount = res.data.vipDiscount;
						if(res.data.type!=1){
							that.isBuyShop(that.sid);
						}
						
						that.getUserInfo(res.data.uid);
						that.getIsFollow(res.data.uid);
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
			shopBuy(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/shop/orderpay?sid='+that.sid
				});
			},
			getIsFollow(uid){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					token:token,
					touid:uid,
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
							that.userInfo = res.data.data;
							that.userInfo.style = "background-image:url("+res.data.data.avatar+");"
						}
					},
					fail: function(res) {
					}
				});
			},
			toInfo(){
				var that = this;
				var data = that.shopinfo;
				if(data.type==1){
					uni.showToast({
						title: "实体商品请留意快递信息",
						icon: 'none'
					})
				}else{
					uni.navigateTo({
					    url: '/pages/shop/shoptext?sid='+data.id
					});
				}
			},
			isBuyShop(sid){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"sid":that.sid,
					"token":token
				}
				that.$Net.request({
					url: that.$API.isBuyShop(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							that.isBuy=1;
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
			getVipInfo(){
				var that = this;
				that.$Net.request({
					url: that.$API.getVipInfo(),
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						if(res.data.code==1){
							//that.vipDiscount=res.data.data.vipDiscount;
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
			userStatus() {
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				that.$Net.request({
					
					url: that.$API.userStatus(),
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
							that.vip = res.data.data.vip;
							that.isvip = res.data.data.isvip;
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
				
				uni.redirectTo({
				    url: '/pages/user/report?title='+title+"&type="+type
				});
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
			},
			toUserInfo(data){
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
			toSearch(){
				var that = this;
				
				uni.redirectTo({
				    url: '/pages/contents/search'
				});
			},
			getPrivateChat(userinfo){
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
				var data={
					"touid":userinfo.uid,
					"token":token
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.getPrivateChat(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						//console.log(JSON.stringify(res));
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						
						if(res.data.code==1){
							var chatid = res.data.data
							uni.redirectTo({
							    url: '/pages/chat/chat?uid='+userinfo.uid+"&name="+userinfo.name+"&chatid="+chatid
							});
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
			},
		},
		
	}
</script>

<style>
</style>
