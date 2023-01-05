<template>
	<view class="post" :class="AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'},{top:jpHeight + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					商品详细设置
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
				<view class="title">商品价格</view>
				<input placeholder="输入商品价格" type="number" name="input" v-model="price"    @focus="ToisText(0)" @blur="ToisText(0)" :adjust-position="false" :focus="false"></input>
				<view class="action">
					<text class="text-red" @tap="showModal" data-target="RadioModal">设置VIP折扣</text>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">商品数量</view>
				<input placeholder="输入商品数量" type="number" name="input" v-model="num"   @focus="ToisText(0)" @blur="ToisText(0)" :adjust-position="false" :focus="false"></input>
			</view>
			
			<view class="cu-form-group">
				<view class="title">缩略图
				</view>
				<input placeholder="" name="input" v-model="imgurl" disabled="disabled"></input>
				<view class="action">
					<text class="cu-btn bg-blue radius" @tap="imgUpload">上传图片</text>
				</view>
			</view>
			<view class="edit-tool">
				<text @tap="showModal" data-target="RadioModal">H</text>
				<text @tap="toBold">B</text>
				<text @tap="toItalic">I</text>
				<text class="cuIcon-picfill" @tap="upload"></text>
				<text class="cuIcon-font" @tap="toCode"></text>
				<text class="cuIcon-link" @tap="showModal" data-target="LinksModal"></text>
				<text class="cuIcon-read" @tap="toIsShow"></text>
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" v-if="!isShow" class="text" @input="textareaAInput" v-model="value" placeholder="收费显示内容,在这里设置文本,链接,或者联系信息" :style="poststyle" @focus="ToisText(1)" @blur="ToisText(0)" :adjust-position="false" :focus="false"></textarea>
				<scroll-view scroll-y class="text" v-if="isShow"  :style="readstyle">
					<mp-html :content="value" selectable="true" show-img-menu="true" lazy-load="true" markdown="true"/>
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
		<!--折扣选择-->
		<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in DiscountList" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{item.name}}</view>
								<radio class="round" :class="vipDiscount==item.value?'checked':''" :checked="vipDiscount==item.value?true:false"
								 :value="item.value"></radio>
							</label>
						</view>
					</view>
				</radio-group>
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
			AppStyle:this.$store.state.AppStyle,
				
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
				imgurl:"",
				value:'',
				price:"",
				num:"",
				vipDiscount:"1.0",
				DiscountList:[
					{
						name:"无折扣",
						value:"1.0",
					},
					{
						name:"九折",
						value:"0.9",
					},
					{
						name:"八折",
						value:"0.8",
					},
					{
						name:"七折",
						value:"0.7",
					},
					{
						name:"六折",
						value:"0.6",
					},
					{
						name:"五折",
						value:"0.5",
					},
					{
						name:"四折",
						value:"0.4",
					},
					{
						name:"三折",
						value:"0.3",
					},
					{
						name:"二折",
						value:"0.2",
					},
					{
						name:"一折",
						value:"0.1",
					},
					{
						name:"VIP免费",
						value:"0.0",
					},
				],
				
				link:{
					title:"",
					url:"",
				},
				
				//页面状态
				type:"add",
				cid:0,
				
				start:-1,
				
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
			if(localStorage.getItem('userShopinfo')){
				var userShopinfo = JSON.parse(localStorage.getItem('userShopinfo'));
				that.imgurl=userShopinfo.imgurl;
				that.price=userShopinfo.price;
				that.num=userShopinfo.num;
				that.value=userShopinfo.value;
				that.vipDiscount=userShopinfo.vipDiscount;
			}
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
			
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
			})
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
				var text = that.value;
				if(start==-1){
					text+=newStr;
				}else{
					text = text.slice(0, start) + newStr + text.slice(start);
				}
				that.value = text;
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
			RadioChange(e) {
				this.vipDiscount = e.detail.value;
				this.hideModal();
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
				//that.value+=text;
				that.insetText(text);
				
			},
			toItalic(){
				var that = this;
				var h = "";
				var text = h+"*斜体文字* ";
				//that.value+=text;
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
				if(that.value!=""){
					h="\n";
				}
				var title = h+text+" 标题文字";
				//that.value+=title;
				that.insetText(text);
				that.hideModal();
			},
			toCode(){
				var that = this;
				var h = "";
				if(that.value!=""){
					h="\n";
				}
				var text = h+"```javascript\n代码片段\n```";
				//that.value+=text;
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
				//that.value+=text;
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
									if(that.value!=""){
										h="\n";
									}
									var text = h+"![图片名称]("+data.data.url+")";
									//that.value+=text;
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
				if(that.imgurl==""||that.value==""||that.price==""||that.num==""){
					uni.showToast({
						title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if(that.price<0||that.num<0){
					uni.showToast({
						title:"请输入正确的参数",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var data = {

					'imgurl':that.imgurl,
					'price':that.price,
					'num':that.num,
					'value':that.value,
					'vipDiscount':that.vipDiscount
				}
				localStorage.setItem('userShopinfo',JSON.stringify(data));
				uni.showToast({
					title:"设置完成",
					icon:'none',
					duration: 1000,
					position:'bottom',
				});
				var timer = setTimeout(function() {
					that.back();
				}, 1000)
			},

			toMate(data){
				var that = this;
				that.categoryText = data.name;
				that.category = data.mid,
				that.hideModal();
			},
			imgUpload(){
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
								that.imgurl = data.data.url;
								
								
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
