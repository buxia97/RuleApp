<template>
	<view class="post" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'},{top:jpHeight + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					<block v-if="type=='edit'">
						修改文章
					</block>
					<block v-else>
						发布文章
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
				<view class="title">文章标题</view>
				<input placeholder="输入文章标题" name="input" v-model="title"   @focus="ToisText(0)" @blur="ToisText(0)" :adjust-position="false" :focus="false"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">选择分类</view>
				<view class="picker" @tap="toCategory">
					<block v-if="categoryText==''">
						选择发布的分类
					</block>
					<block v-else>
						<text class="text-green">已选择</text>
					</block>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="edit-tool">
				<!--  #ifdef H5 || APP-PLUS -->
				<view class="OwO-box">
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
				<!--  #endif -->
				<text @tap="showModal" data-target="RadioModal">H</text>
				<text @tap="toBold">B</text>
				<text @tap="toItalic">I</text>
				<!-- <text class="cuIcon-picfill" @tap="upload"></text> -->
				<text class="cuIcon-picfill" @tap="showModal" data-target="imgModal"></text>
				<text class="cuIcon-font" @tap="toCode"></text>
				<text class="cuIcon-link" @tap="showModal" data-target="LinksModal"></text>
				<text class="cuIcon-attentionforbidfill" @tap="toHideText"></text>
				
				<text class="cuIcon-tag" :class="tag!=''?'text-blue':''" @tap="addTag"></text>
				<text class="text-red cuIcon-shopfill" @tap="setShop" v-if="shopID==-1"></text>
				<text class="text-yellow cuIcon-shopfill" @tap="setShop" v-else></text>
				<text class="cuIcon-read" :class="isShow?'text-blue':''" @tap="toIsShow(false)"></text>
				
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" v-if="!isShow" class="text" :adjust-position="false" :focus="false" @input="textareaAInput" v-model="text" placeholder="文章内容" :style="poststyle" @focus="ToisText(1)" @blur="ToisText(0)"></textarea>
				<scroll-view scroll-y class="text" v-if="isShow"  :style="readstyle">
					<mp-html :content="textRead" selectable="true" show-img-menu="true" lazy-load="true" markdown="true"/>
				</scroll-view>
			</view>
			<!--  #ifdef MP -->
			<view class="post-update bg-blue" @tap="submit">
				<text class="cuIcon-upload"></text>
			</view>
			<!--  #endif -->
		</form>
		<!--标题控件-->
		<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in 5" :key="index" @tap="toTitle(index +1)" >
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
					<view class="post-link-type grid col-2">
						<view class="post-link-box" @tap="toPostlinktype(0)" :class="postlinktype==0?'cur':''">
							<text>超链接</text>
						</view>
						<view class="post-link-box" @tap="toPostlinktype(1)" :class="postlinktype==1?'cur':''">
							<text>远程图片</text>
						</view>
					</view>
				</view>
				
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-blue text-blue" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue margin-left" @tap="tolinks">确定</button>
		
					</view>
				</view>
			</view>
		</view>
		<!--插入图片控件-->
		<view class="cu-modal LinksModal" :class="modalName=='imgModal'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">上传图片</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl">
					<view class="padding flex flex-direction">
						<button class="cu-btn bg-blue lg" @tap="upload">本地上传</button>
						<button class="cu-btn line-red margin-tb-sm lg" @tap="goImgData">图库选择</button>
					</view>
				</view>
			
			</view>
		</view>
		<!--xss提示控件-->
		<view class="cu-modal" :class="modalName=='xss'?'show':''">
			<view class="cu-dialog">
				<view class="cu-bar bg-white justify-end">
					<view class="content">安全提示</view>
					<view class="action" @tap="hideModal">
						<text class="cuIcon-close text-red"></text>
					</view>
				</view>
				<view class="padding-xl text-left">
					<view>检测到该文章的内容存在可执行的代码，为了您的系统安全，请你确认文章内容不存在如：<text class="text-bold text-red">未知远程js、未知的接口请求代码、未知的网页嵌套、未知的表单提交等</text>可能触发xss漏洞的代码。</view>
					<view>如您已经确认无误，可点击下方按钮继续。</view>
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn bg-blue margin-left"  @tap="toIsShow(true)">预览</button>
		
					</view>
				</view>
			</view>
		</view>
		<!--插入商品控件-->
		<view class="setShop" v-if="isShop">
			<view class="setShop-bg" @tap="isShop=0"></view>
			<view class="setShop-box">
				<view class="setShop-main">
					<view class="setShop-title">
						选择付费内容插入文章
						<text class="setShop-close cuIcon-close" @tap="isShop=0"></text>
						
					</view>

					<scroll-view class="setShop-list" scroll-y>
						<view class="setShop-list-box" v-for="(item,index) in shopList" @tap="toShop(item.id)" :class="item.id==shopID?'cur':''" :key="index">
							<view class="setShop-list-main">
								<text class="cuIcon-moneybagfill text-red"></text>{{item.title}}
							</view>
							<view class="setShop-status">
								<text v-if="item.cid!=-1">CID：{{item.cid}}</text>
								<text v-else class="text-green">未插入文章</text>
							</view>
							
						</view>

					</scroll-view>
					<view class="setShop-btn text-center">
						<text class="cu-btn radius bg-blue" @tap="toAddShop">添加商品</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mpHtml from '@/components/mp-html/mp-html'
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
				
				modalName:"",
				
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
				category:"",
				tag:"",
				categoryText:"",
				text:'',
				textRead:"",
				link:{
					title:"",
					url:"",
				},
				
				shopList:[],
				isShop:0,
				shopID:-1,
				//页面状态
				type:"add",
				cid:0,
				
				isOwO:false,
				owo:owo,
				owoList:[],
				OwOtype:"paopao",
				
				postlinktype:0,
				
				start:-1,
				
				toImg:false,
				
			}
		},
		onPullDownRefresh(){
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
			if(localStorage.getItem('clist')){
				that.categoryText = "已选择";
				that.category = localStorage.getItem('clist');
			}
			if(localStorage.getItem('ctag')){
				that.tag = localStorage.getItem('ctag');
			}
			if(localStorage.getItem('serImage')){
				that.modalName = null;
				var serImage = localStorage.getItem('serImage');
				var h = "";
				if(that.text!=""){
					h="\n";
				}
				var text = h+"![图片名称]("+serImage+")";
				//that.text+=text;
				that.insetText(text);
				localStorage.removeItem('serImage');
			}
			// #ifdef APP-PLUS || H5
			that.owoList = that.owo.data.paopao.container;
			// #endif
		},
		onHide() {
			var that = this;
			//localStorage.removeItem('clist')
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
			if(res.type){
				that.type = res.type;
				if(res.cid){
					that.cid = res.cid;
					that.getInfo(that.cid);
					
				}
			}
			that.getShopList();
			
			//键盘弹出相关
			let screenHeight = uni.getSystemInfoSync().screenHeight;
			let statusHeight= uni.getSystemInfoSync().statusBarHeight;
			let inputHeight = screenHeight - statusHeight - 240;
			// #ifdef APP-PLUS
			inputHeight = screenHeight - statusHeight - 250;
			// #endif
			// #ifdef H5
			inputHeight = 350;
			// #endif
			
			that.screenHeight = screenHeight - that.NavBar;
			that.postheight = inputHeight;
			//
			//that.poststyle = "height:200upx";
			that.poststyle = "height:"+inputHeight+"px";
			that.readstyle = "height:"+(inputHeight+30)+"px";
			// #ifdef H5
			//that.h5Keyboard();
			// #endif
			// #ifdef APP-PLUS
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
			// #endif
			localStorage.removeItem('clist')
		},
		methods: {
			markHtml(text){
				var that = this;
				text = that.replaceAll(text,"@!!!","@@@@");
				text = that.replaceAll(text,"!!!","");
				text = that.replaceAll(text,"@@@@","@!!!");
				var owoList=that.owoList;
				for(var i in owoList){
					if(text.indexOf(owoList[i].data) != -1){
						text = that.replaceAll(that.replaceSpecialChar(text),owoList[i].data,"<img src='"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				return text;
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
				that.textRead = that.markHtml(that.text);
			},
			focus(h){
				var that = this;
				if(that.isText==0){
					return false;
				}
				// #ifdef APP-PLUS
				// let screenHeight = uni.getSystemInfoSync().screenHeight;
				// let statusHeight= uni.getSystemInfoSync().statusBarHeight;
				// let inputHeight = screenHeight - statusHeight - 240;
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
				// let inputHeight = screenHeight - statusHeight - 250;
				// that.jpHeight =0;
				// that.postheight = inputHeight;
				// that.poststyle = "height:"+inputHeight+"px";
				// #endif
			},
			back(){
				localStorage.removeItem('clist');
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
				that.textRead = that.markHtml(that.text);
				
			},
			//编辑器工具开始
			toBold(){
				var that = this;
				var h = "";
				var text = h+"**加粗文字**";
				//that.text+=text;
				that.insetText(text);
				
			},
			toHideText(){
				var that = this;
				var h = "";
				var text = h+"[hide]这是回复可见的内容[/hide]";
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
				that.insetText(title);
				
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
				var text;
				if(that.postlinktype==0){
					text = "["+link.title+"]("+link.url+")";
				}
				if(that.postlinktype==1){
					text = "!["+link.title+"]("+link.url+")";
				}
				//that.text+=text;
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
					count: 9,  // 最多可以选择的图片张数，默认9
					sourceType: ['album', 'camera'], 
				    success: function (res) {						
						uni.showLoading({
							title: "加载中"
						});
						const tempFilePaths = res.tempFilePaths;
						for(let i = 0;i < tempFilePaths.length; i++) {
							const uploadTask = uni.uploadFile({
							  url : API.upload(),
							  filePath: tempFilePaths[i],
							  name: 'file',
							  formData: {
							   'token': that.token
							  },
							  success: function (uploadFileRes) {
								  let count = 0;
								  count++;
								  if(count==tempFilePaths.length){
									  that.hideModal();
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
						}
					}
				})
			},
			toIsShow(isTo){
				var that= this;
				var group = "";
				if(localStorage.getItem('userinfo')){
					
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					var group = userInfo.group;
				}
				if(!isTo&&!that.isShow){
					if(group=='administrator'||group=='editor'){
						if(that.text.indexOf("<script>")!=-1||that.text.indexOf("<form>")!=-1||that.text.indexOf("<iframe>")!=-1||that.text.indexOf("<frame>")!=-1){
							
							that.modalName = "xss"
							return false;
						}
					}
				}
				that.modalName = null;
				that.textRead = that.markHtml(that.text);
				that.isShow = !that.isShow;
				
				
				
			},

			submit(){
				var that = this;
				var type = that.type;
				if(type=="add"){
					that.contentsAdd();
				}else{
					that.contentsUpdate();
				}
				// if(that.shopID!=-1){
				// 	that.mountShop();
				// }
				
			},
			contentsAdd() {
				var that = this;
				if (that.title == ""||that.category == ""||that.text == "") {
					uni.showToast({
						title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var data = {
					'title':that.title,
					'category':that.category,
					'tag':that.tag,
					'text':that.text,
					'sid':that.shopID
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.contentsAdd(),
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
							localStorage.removeItem('clist');
							localStorage.removeItem('ctag');
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
			contentsUpdate() {
				var that = this;
				if (that.title == ""||that.category == ""||that.text == "") {
					uni.showToast({
						title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var data = {
					'cid':that.cid,
					'title':that.title,
					'category':that.category,
					'tag':that.tag,
					'text':that.text,
					'sid':that.shopID
				}
				uni.showLoading({
					title: "加载中"
				});
				Net.request({
					
					url: API.contentsUpdate(),
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
							localStorage.removeItem('clist');
							localStorage.removeItem('ctag');
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
			getInfo(cid){
				var that = this;
				var token = "";
				if(localStorage.getItem('userinfo')){
					
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token = userInfo.token;
					
				}
				var data = {
					"key":that.cid,
					"token":token,
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
						if(res.data.title){
							
							that.title = res.data.title;
							if(res.data.category.length>0){
								that.categoryText = "已选择";
								var list = res.data.category;
								var clist ="";
								for(var i in list){

									clist += ","+list[i].mid;
									
								}
								localStorage.setItem('clist',clist);
								that.category = clist;
								
							}
							if(res.data.tag.length>0){
								var list = res.data.tag;
								var ctag ="";
								for(var i in list){
							
									ctag += ","+list[i].mid;
									
								}
								localStorage.setItem('ctag',ctag);
								that.tag = ctag;
								
							}
							
							that.text=res.data.text;
						}
					},
					fail: function(res) {
					}
				})
			},
			toMate(data){
				var that = this;
				that.categoryText = data.name;
				that.category = data.mid,
				that.hideModal();
			},
			setShop(){
				var that=this;
				that.isShop = 1;
			},
			toShop(id){
				var that=this;
				that.shopID = id;
				that.isShop = 0;
			},
			getShopList(){
				var that = this;
				var uid= 0;
				if(localStorage.getItem('userinfo')){
					
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					uid = userInfo.uid;
					
				}else{
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
				var data = {
					"uid":uid,
					"status":1,
				}
				Net.request({
					url: API.shopList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":1000,
						"page":1,
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {

						if(res.data.code==1){
							var list = res.data.data;
							that.shopList = list;
	
							
							if(that.cid!=0){
								for(var i in list){
									if(list[i].cid == that.cid){
										
										that.shopID = list[i].id;
									}
								}
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
				//that.text+=text;
				that.insetText(text);
				that.isOwO = false;
				that.textRead = that.markHtml(that.text);
			},
			OwO(){
				var that = this;
				that.isOwO = !that.isOwO;
			},
			toCategory(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/allcategory?type=edit'
				});
			},
			addTag(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/alltag?type=edit'
				});
			},
			toPostlinktype(i){
				var that = this;
				that.postlinktype = i;
			},
			toAddShop(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/user/addshop'
				});
			},
			goImgData(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/imagetoday?type=post'
				});
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
