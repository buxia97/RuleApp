<template>
	<view class="user">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					发布文章
				</view>
				<view class="action">
					<text class="cuIcon-upload"></text>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">文章标题</view>
				<input placeholder="输入文章标题" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">选择分类</view>
				<picker @change="PickerChange" :value="index" :range="picker">
					<view class="picker">
						{{index>-1?picker[index]:'选择发布的分类'}}
					</view>
				</picker>
			</view>
			<view class="edit-tool">
				<text @tap="showModal" data-target="RadioModal">H</text>
				<text @tap="toBold">B</text>
				<text @tap="toItalic">I</text>
				<text class="cuIcon-picfill" @tap="upload"></text>
				<text class="cuIcon-font" @tap="toCode"></text>
				<text class="cuIcon-link"></text>
				<text class="cuIcon-read" @tap="toIsShow"></text>
			</view>
			<view class="cu-form-group">
				<textarea maxlength="-1" v-if="!isShow" class="text" @input="textareaAInput" v-model="text" placeholder="文章内容"></textarea>
				<scroll-view scroll-y class="text" v-if="isShow">
					<mp-html :content="text" selectable="true" show-img-menu="true" lazy-load="true" markdown="true"/>
				</scroll-view>
			</view>
		</form>
		
		<!--控件-->
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
				
				index: -1,
				picker: ['喵喵喵', '汪汪汪', '哼唧哼唧'],
				
				text:'',
				
				token:"",
				
				isShow:false,
				
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
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS
			that.NavBar = this.CustomBar;
			// #endif
		},
		methods: {
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
				
			},
			//编辑器工具开始
			toBold(){
				var that = this;
				var h = "";
				if(that.text!=""){
					h="\n";
				}
				var text = h+"**加粗文字**";
				that.text+=text;
				
			},
			toItalic(){
				var that = this;
				var h = "";
				if(that.text!=""){
					h="\n";
				}
				var text = h+"*斜体文字* ";
				that.text+=text;
				
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
				that.text+=title;
				that.hideModal();
			},
			toCode(){
				var that = this;
				var h = "";
				if(that.text!=""){
					h="\n";
				}
				var text = h+"```javascript\n代码片段\n```";
				that.text+=text;
				
			},
			 
			upload(){
				let that = this				
				uni.chooseImage({
					count: 1,  // 最多可以选择的图片张数，默认9
					sourceType: ['album', 'camera'], 
				    success: function (res) {						
						console.log(JSON.stringify(res));
						const tempFilePaths = res.tempFilePaths;
						const uploadTask = uni.uploadFile({
						  url : API.cosUpload(),
						  filePath: tempFilePaths[0],
						  name: 'file',
						  formData: {
						   'token': that.token
						  },
						  success: function (uploadFileRes) {
						   var data = JSON.parse(uploadFileRes.data);
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
							    that.text+=text;
							   }
						   }
						   
						});
					 
						uploadTask.onProgressUpdate(function (res) {
						  that.percent = res.progress;
						  console.log('上传进度' + res.progress);
						  console.log('已经上传的数据长度' + res.totalBytesSent);
						  console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
						 });
					}
				})
			},
			toIsShow(){
				var that= this;
				that.isShow = !that.isShow;
			}
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
