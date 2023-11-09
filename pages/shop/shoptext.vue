<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					已购内容
				</view>
				<view class="action">
					
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="info" style="margin-top:10upx;">
			<view class="info-content">
				<!-- <joMarkdown :nodes="markdownData"></joMarkdown> -->
				
				
				<block v-if="shopIsMd==1">
					<mp-html :content="html" :selectable="true" :show-img-menu="true" :lazy-load="true" :ImgCache="true" :markdown="true"/>
				</block>
				<block v-if="shopIsMd==0">
					<mp-html :content="html" :selectable="true" :show-img-menu="true" :lazy-load="true" :ImgCache="true" :markdown="false"/>
				</block>
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
				
				sid:0,
				title:"",
				html:"",
				markdownData: {},
				price:"",
				num:"",
				imgurl:"",
				shopIsMd:-1,
				
				isLoading:0,
				
				
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
			
			
		},
		onPullDownRefresh(){
			var that = this;
		},
		onLoad(res) {
			var that = this;
			
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
			if(res.sid){
				that.sid = res.sid;
				that.getInfo(that.sid);
			}
			
		},
		methods:{
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			getInfo(sid){
				var that = this;
				var token = "";
				if(localStorage.getItem('token')){
					token=localStorage.getItem('token');
				}
				var data = {
					"key":that.sid,
					"token":token
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
						if(res.data.value){
							that.shopIsMd = res.data.isMd;
							var html = res.data.value;
							if(res.data.isMd==1){
								html =that.markHtml(res.data.value);
							}else{
								html =that.quillHtml(res.data.value);
							}
							that.html = html;
						}
						

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
			quillHtml(text){
				var that = this;
				text = that.replaceAll(text,"hljs","hl");
				text = that.replaceAll(text,"ql-syntax","hl-pre");
				
				text = that.markExpand(text);
				return text;
			},
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},
			markExpand(text){
				var that = this;
				//表情包
				// #ifdef APP-PLUS || H5
				var owoList=that.owoList;
				for(var i in owoList){
				
					if(that.replaceSpecialChar(text).indexOf(owoList[i].data) != -1){
						text = that.replaceAll(that.replaceSpecialChar(text),owoList[i].data,"<img src='"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				// #endif
				
				return text;
			},
			markHtml(text){
				var that = this;
				//下面奇怪的代码是为了解决可执行代码区域问题
				text = that.replaceAll(text,"@!!!","@@@@");
				
				text = that.replaceAll(text,"!!!","");
				text = that.replaceAll(text,"@@@@","@!!!");
				text = that.markExpand(text);
				//text = text.replace(/(?<!\r)\n(?!\r)/g, "\n\n");
				//兼容垃圾的Safari浏览器
				text = text.replace(/([^\r])\n([^\r])/g, "$1\n\n$2");
				text = that.replaceAll(text,"||rn||","\n\n");
				return text;
				
			},
		}
	}
</script>

<style>
</style>
