<template>
	<view class="post">
		<view class="header" :style="[{height:CustomBar + 'px'},{top:jpHeight + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="type=='edit'">
						修改商品
					</block>
					<block v-else>
						发布商品
					</block>
				</view>
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="action" @tap="submit">
					<text class="cuIcon-upload"></text>
				</view>
				<!--  #endif -->
				
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">商品标题</view>
				<input placeholder="输入商品标题" name="input" v-model="title"   @focus="ToisText(0)" @blur="ToisText(0)" :adjust-position="false" :focus="false"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">商品分类</view>
				<view class="picker" @tap="showModal" data-target="metaModal">
					<block v-if="categoryText==''">
						选择商品分类
					</block>
					<block v-else>
						{{categoryText}}
					</block>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">详细设置
					<text class="text-gray text-sm margin-left" v-if="isInfo==0">未设置</text>
					<text class="text-blue text-sm margin-left" v-else>已设置</text>
				</view>
				<view class="action" @tap="toSetShopInfo">
					设置收费内容，缩略图
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="edit-tool">
				<text @tap="showModal" data-target="RadioModal">H</text>
				<text @tap="toBold">B</text>
				<text @tap="toItalic">I</text>
				<text class="cuIcon-picfill" @tap="upload"></text>
				<text class="cuIcon-font" @tap="toCode"></text>
				<text class="cuIcon-link" @tap="showModal" data-target="LinksModal"></text>
				<text class="cuIcon-read" :class="isShow?'text-blue':''" @tap="toIsShow"></text>
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" v-if="!isShow" class="text" @input="textareaAInput" v-model="text" placeholder="商品介绍" :style="poststyle" @focus="ToisText(1)" @blur="ToisText(0)" :adjust-position="false" :focus="false"></textarea>
				<scroll-view scroll-y class="text" v-if="isShow"  :style="readstyle">
					<mp-html :content="text" selectable="true" show-img-menu="true" lazy-load="true" markdown="true"/>
				</scroll-view>
			</view>
			<!--  #ifdef MP -->
			<view class="post-update bg-blue" @tap="submit">
				<text class="cuIcon-upload"></text>
			</view>
			<!--  #endif -->
		</form>
		<!--分类选择控件-->
		<view class="cu-modal" :class="modalName=='metaModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in metaList" :key="index" @tap="toMate(item)" >
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{item.name}}</view>
								<radio class="round"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
		<!--标题控件-->
		<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in 5" :key="index" @tap="toTitle(index +1)">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">标题 {{index +1}}</view>
								<radio class="round"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>
		<!--插入链接控件-->
		<view class="cu-modal LinksModal" :class="modalName=='LinksModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">插入外部链接</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<input placeholder="链接标题" v-model="link.title"/>
					<input placeholder="http(s)://"  v-model="link.url"/>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-blue text-blue" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue margin-left" @tap="tolinks">确定</button>
		
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mpHtml from '@/components/mp-html/mp-html'
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				modalName:"",
				
				metaList:[
					{
						"name":"实体商品",
						"mid":1
					},
					{
						"name":"源码",
						"mid":2
					},
					{
						"name":"软件工具",
						"mid":3
					},
					{
						"name":"付费阅读",
						"mid":4
					}
				],
				token:"",
				
				isShow:false,
				
				curHeight:0,
				jpHeight:0,
				screenHeight:0,
				postheight:0,
				poststyle:"",
				readstyle:"",
				isText:0,
				
				//文章表单部分
				title:"",
				category:-1,
				categoryText:"",
				text:'',
				
				isInfo:0,
				
				link:{
					title:"",
					url:"",
				},
				
				//页面状态
				type:"add",
				sid:0,
				
				start:-1,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onHide() {
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			if(localStorage.getItem('userinfo')){
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.token=userInfo.token;
			}
			if(localStorage.getItem('userShopinfo')){
				that.isInfo=1;
			}
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
			if(res.type){
				that.type = res.type;
				if(res.sid){
					that.sid = res.sid;
					that.getInfo(that.sid);
				}else{
					localStorage.removeItem('userShopinfo');
					that.isInfo=0;
				}
			}
			
			//键盘弹出相关
			let screenHeight = uni.getSystemInfoSync().screenHeight;
			let statusHeight= uni.getSystemInfoSync().statusBarHeight;
			let inputHeight = screenHeight - statusHeight - 292;
			// #ifdef APP-PLUS
			inputHeight = screenHeight - statusHeight - 302;
			// #endif
			// #ifdef H5
			inputHeight = 300;
			// #endif
			
			that.screenHeight = screenHeight - that.NavBar;
			that.postheight = inputHeight;
			that.poststyle = "height:"+inputHeight+"px";
			that.readstyle = "height:"+(inputHeight+30)+"px";
			
			uni.onKeyboardHeightChange(res => {
				//监听软键盘的高度 
				//当点击软键盘自带的收起按钮的时候也就是会隐藏软键盘 这时候监听到的软键盘的高度就是0 、
				//让输入框取消焦点 这时候再去输入内容的时候 输入框就会弹起
				if (res.height == 0) {
				
					that.focalize(res.height);
					that.poststyle = "height:"+inputHeight+"px";
					
				} else {
					that.curHeight=res.height;
					var keyHeight = inputHeight - res.height;
					that.focus(res.height);
					that.poststyle = "height:"+keyHeight+"px";
				}
			});
			
			
		},
		methods: {
			ToisText(i){
				var that= this;
				that.isText = i;
				if (that.curHeight != 0&&that.isText==1) {
					that.focus(that.curHeight);
				}
				uni.getSelectedTextRange({
				  success: res => {
				    //console.log('getSelectedTextRange res', res.start, res.end);
					that.start = res.start;
				  }
				})
				
			},
			insetText(newStr){
				var that= this;
				var start = that.start;
				var text = that.text;
				if(start==-1){
					text+=newStr;
				}else{
					text = text.slice(0, start) + newStr + text.slice(start);
				}
				that.text = text;
			},
			focus(h){
				var that = this;
				if(that.isText==0){
					return false;
				}
				// #ifdef APP-PLUS
				// let screenHeight = uni.getSystemInfoSync().screenHeight;
				// let statusHeight= uni.getSystemInfoSync().statusBarHeight;
				// let inputHeight = screenHeight - statusHeight - 292;
				// that.screenHeight = screenHeight - statusHeight - 5;
				// let height = h;
				// let postheight = that.postheight - height;
				// that.jpHeight =height - statusHeight;
				// that.postheight = postheight;
				// that.poststyle = "height:"+postheight+"px";
				// that.readstyle = "height:"+(inputHeight+30)+"px";
				// #endif
			},
			focalize(h){
				var that = this;
				// #ifdef APP-PLUS
				// let screenHeight = uni.getSystemInfoSync().screenHeight;
				// let statusHeight= uni.getSystemInfoSync().statusBarHeight;
				// that.screenHeight = screenHeight - that.NavBar;
				// let inputHeight = screenHeight - statusHeight - 302;
				// that.jpHeight =0;
				// that.postheight = inputHeight;
				// that.poststyle = "height:"+inputHeight+"px";
				// #endif
			},
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			PickerChange(e) {
				this.index = e.detail.value
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal() {
				this.modalName = null
			},
			textareaAInput(){
				var that = this;
				uni.getSelectedTextRange({
				  success: res => {
				    //console.log('getSelectedTextRange res', res.start, res.end);
					that.start = res.start;
				  }
				})
			},
			//编辑器工具开始
			toBold(){
				var that = this;
				var h = "";
				var text = h+"**加粗文字**";
				//that.text+=text;
				that.insetText(text);
				
			},
			toItalic(){
				var that = this;
				var h = "";
				var text = h+"*斜体文字* ";
				//that.text+=text;
				that.insetText(text);
				
			},
			toTitle(num){
				var that = this;
				var text = "";
				for (var i=0;i<num;i++)
				{ 
				    text=text+"#";
				}
				var h = "";
				if(that.text!=""){
					h="\n";
				}
				var title = h+text+" 标题文字";
				//that.text+=title;
				that.insetText(text);
				that.hideModal();
			},
			toCode(){
				var that = this;
				var h = "";
				if(that.text!=""){
					h="\n";
				}
				var text = h+"```javascript\n代码片段\n```";
				//that.text+=text;
				that.insetText(text);
				
			},
			tolinks(){
				var that = this;
				var link = that.link;
				if(link.title==""||link.url==""){
					uni.showToast({
					    title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var text = "["+link.title+"]("+link.url+")";
				//that.text+=text;
				that.insetText(text);
				that.link = {
					title:"",
					url:"",
				}
				that.hideModal();
			},
			upload(){
				let that = this				
				uni.chooseImage({
					count: 1,  // 最多可以选择的图片张数，默认9
					sourceType: ['album', 'camera'], 
				    success: function (res) {						
						uni.showLoading({
							title: "加载中"
						});
						const tempFilePaths = res.tempFilePaths;
						const uploadTask = uni.uploadFile({
						  url : API.upload(),
						  filePath: tempFilePaths[0],
						  name: 'file',
						  formData: {
						   'token': that.token
						  },
						  success: function (uploadFileRes) {
							  setTimeout(function () {
							  	uni.hideLoading();
							  }, 1000);
							var data = JSON.parse(uploadFileRes.data);
							//var data = uploadFileRes.data;
							uni.showToast({
								title: data.msg,
								icon: 'none'
							})
							if(data.code==1){
								   //插入文章
									var h = "";
									if(that.text!=""){
										h="\n";
									}
									var text = h+"![图片名称]("+data.data.url+")";
									//that.text+=text;
									that.insetText(text);
								   }
							},fail:function(){
								setTimeout(function () {
									uni.hideLoading();
								}, 1000);
							}
							
						   
						});
					 
						uploadTask.onProgressUpdate(function (res) {
						  
						 });
					}
				})
			},
			toIsShow(){
				var that= this;
				that.isShow = !that.isShow;
			},
			submit(){
				var that = this;
				var type = that.type;
				if(type=="add"){
					that.addShop();
				}else{
					that.editShop();
				}
				
			},
			addShop() {
				var that = this;
				if (that.title == ""||that.category == -1||that.text == "") {
					uni.showToast({
						title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var userShopinfo = "";
				if(localStorage.getItem('userShopinfo')){
					userShopinfo = JSON.parse(localStorage.getItem('userShopinfo'));
				}else{
					uni.showToast({
						title: "请完成商品详细设置",
						icon: 'none'
					})
					return false;
				}
				var data = {
					'title':that.title,
					'type':that.category,
					'text':that.text,
					'imgurl':userShopinfo.imgurl,
					'price':userShopinfo.price,
					'num':userShopinfo.num,
					'value':userShopinfo.value,
					'vipDiscount':userShopinfo.vipDiscount,
				}
				uni.showLoading({
					title: "加载中"
				});
				
				Net.request({
					
					url: API.addShop(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":that.token,
					},
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
							localStorage.removeItem('userShopinfo');
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
			editShop() {
				var that = this;
				if (that.title == ""||that.category == -1||that.text == "") {
					uni.showToast({
						title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var userShopinfo = "";
				if(localStorage.getItem('userShopinfo')){
					userShopinfo = JSON.parse(localStorage.getItem('userShopinfo'));
				}else{
					uni.showToast({
						title: "请完成商品详细设置",
						icon: 'none'
					})
					return false;
				}
				var data = {
					'id':that.sid,
					'title':that.title,
					'type':that.category,
					'text':that.text,
					'imgurl':userShopinfo.imgurl,
					'price':userShopinfo.price,
					'num':userShopinfo.num,
					'value':userShopinfo.value,
					'vipDiscount':userShopinfo.vipDiscount,
				}
				uni.showLoading({
					title: "加载中"
				});
				
				Net.request({
					
					url: API.editShop(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":that.token,
					},
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
							localStorage.removeItem('userShopinfo');
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
			toMate(data){
				var that = this;
				that.categoryText = data.name;
				that.category = data.mid,
				that.hideModal();
			},
			toSetShopInfo(){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/user/addshopinfo'
				});
			},
			getInfo(sid){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"key":that.sid,
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
						that.title = res.data.title;
						that.category = res.data.type;
						that.text = res.data.text;
						var data = {
							'imgurl':res.data.imgurl,
							'price':res.data.price,
							'num':res.data.num,
							'value':res.data.value,
							'vipDiscount':res.data.vipDiscount,
						}
						that.categoryText = that.metaList[that.category-1].name;
						localStorage.setItem('userShopinfo',JSON.stringify(data));
					},
					fail: function(res) {
						uni.stopPullDownRefresh();
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
page{
	overflow: hidden;
}
.post{
	display: flex;
	flex: 1;
	flex-direction: column;
	justify-content: space-between;
}
</style>
