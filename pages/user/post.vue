<template>
	<view class="post"  :style="'height:'+screenHeight+'px'">
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
				<input placeholder="输入文章标题" name="input" v-model="title"  @tap="ToisText(0)"></input>
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
				<view class="OwO-box">
					<text class="cuIcon-emoji" @tap="OwO"></text>
					<!--表情-->
					<view class="owo" v-if="isOwO">
						<scroll-view class="owo-list" scroll-y>
							<view class="owo-main">
								<view class="owo-lit-box" v-for="(item,index)  in owoList" @tap="setOwO(item)">
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
				<text @tap="showModal" data-target="RadioModal">H</text>
				<text @tap="toBold">B</text>
				<text @tap="toItalic">I</text>
				<text class="cuIcon-picfill" @tap="upload"></text>
				<text class="cuIcon-font" @tap="toCode"></text>
				<text class="cuIcon-link" @tap="showModal" data-target="LinksModal"></text>
				<text class="cuIcon-attentionforbidfill" @tap="toHideText"></text>
				
				<text class="cuIcon-tag" :class="tag!=''?'text-blue':''" @tap="addTag"></text>
				<text class="text-red cuIcon-shopfill" @tap="setShop" v-if="shopID==-1"></text>
				<text class="text-yellow cuIcon-shopfill" @tap="setShop" v-else></text>
				<text class="cuIcon-read" @tap="toIsShow"></text>
				
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" v-if="!isShow" class="text" @input="textareaAInput" v-model="text" placeholder="文章内容" :style="poststyle" @focus="ToisText(1)" @blur="ToisText(0)"></textarea>
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
				</view>
				<view class="cu-bar bg-white justify-end">
					<view class="action">
						<button class="cu-btn line-blue text-blue" @tap="hideModal">取消</button>
						<button class="cu-btn bg-blue margin-left" @tap="tolinks">确定</button>
		
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
						<view class="setShop-list-box" v-for="(item,index) in shopList" @tap="toShop(item.id)" :class="item.id==shopID?'cur':''">
							<text class="cuIcon-moneybagfill text-red"></text>{{item.title}}
						</view>

					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import mpHtml from '@/components/mp-html/mp-html'
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	import owo from '../../static/owo/OwO.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
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
				
				start:-1,
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
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
			that.owoList = that.owo.data.paopao.container;
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
					
				} else {
					that.curHeight=res.height;
					
					that.focus(res.height);
				}
			});
			localStorage.removeItem('clist')
		},
		methods: {
			markHtml(text){
				var that = this;
				var owoList=that.owoList;
				for(var i in owoList){
					if(text.indexOf(owoList[i].data) != -1){
						text = text.replace(owoList[i].data,"<img src='"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				return text;
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
				let screenHeight = uni.getSystemInfoSync().screenHeight;
				let statusHeight= uni.getSystemInfoSync().statusBarHeight;
				let inputHeight = screenHeight - statusHeight - 240;
				that.screenHeight = screenHeight - statusHeight - 5;
				let height = h;
				let postheight = that.postheight - height;

				that.jpHeight =height - statusHeight;
				
				
				that.postheight = postheight;
				that.poststyle = "height:"+postheight+"px";
				that.readstyle = "height:"+(inputHeight+30)+"px";
				// #endif
			},
			focalize(h){
				var that = this;
				// #ifdef APP-PLUS
				let screenHeight = uni.getSystemInfoSync().screenHeight;
				let statusHeight= uni.getSystemInfoSync().statusBarHeight;
				that.screenHeight = screenHeight - that.NavBar;
				let inputHeight = screenHeight - statusHeight - 250;
				that.jpHeight =0;
				that.postheight = inputHeight;
				that.poststyle = "height:"+inputHeight+"px";
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
				var text = "["+link.title+"]("+link.url+")";
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
								  if(i==tempFilePaths.length-1){
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
			toIsShow(){
				var that= this;
				that.isShow = !that.isShow;
				that.textRead = that.markHtml(that.text);
			},

			submit(){
				var that = this;
				var type = that.type;
				if(type=="add"){
					that.contensAdd();
				}else{
					that.contensUpdate();
				}
				if(that.shopID!=-1){
					that.mountShop();
				}
				
			},
			contensAdd() {
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
					
					url: API.contensAdd(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":that.token,
					},
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
			contensUpdate() {
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
					
					url: API.contensUpdate(),
					data:{
						"params":JSON.stringify(API.removeObjectEmptyKey(data)),
						"token":that.token,
					},
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
							url: '../user/login'
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
				    url: '../contents/allcategory?type=edit'
				});
			},
			addTag(){
				var that = this;
				uni.navigateTo({
				    url: '../contents/alltag?type=edit'
				});
			}
			
		}
	}
</script>

<style>
@import "../../static/base.css";
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
