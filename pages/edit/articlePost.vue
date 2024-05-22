<template>
	<view class="post" :class="$store.state.AppStyle">
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
				<view class="action" @click="toDraft()">
					<!-- <text class="cuIcon-upload"></text> -->
					<text class="text-gray">草稿箱</text>
				</view>
				<!--  #endif -->
				
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<web-view :src="weburl"  @message="onMessage"></web-view>
	</view>
</template>

<script>
	import mpHtml from '@/components/mp-html/mp-html'
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var wv;
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
			AppStyle:this.$store.state.AppStyle,
				
				modalName:"",
				
				uid:0,
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
				isSpace:false,
				//页面状态
				type:"add",
				cid:0,
				isDocx:0,
				
				weburl:'/hybrid/html/edit.html?data=',
				lenght:0,
				
				editInterval:null
				
			}
		},
		onPullDownRefresh(){
			var that = this;
			
		},
		onShow(){
			var that = this;
			
		},
		onHide() {
			var that = this;
			clearInterval(that.editInterval);
			that.editInterval= null;
			//localStorage.removeItem('clist')
		},
		onLoad(res) {
			var that = this;
			that.editInterval = setInterval(function(){
				if(localStorage.getItem('goBack')){
					localStorage.removeItem('goBack');
					that.back();
				}
			}, 500);
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(res.type){
				that.type = res.type;
			}
			if(res.isDocx){
				that.isDocx = res.isDocx;
			}
			var id = 0;
			if(that.type!='add'){
				if(!res.cid){
					uni.showToast({
					    title:"参数不能为空",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					that.back();
					return false;
				}else{
					id = res.cid;
				}
			}
			if(localStorage.getItem('userinfo')){
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.token=userInfo.token;
				that.uid=userInfo.uid;
			}
			var Env = "APP";
			// #ifdef H5
			Env = "H5";
			// #endif
			var data = {
				"apiUrl":that.$API.getApiUrl(),
				"id":id,
				"uid":that.uid,
				"token":that.token,
				"type":that.type,
				"isDocx":that.isDocx,
				"env":Env
			}
			that.weburl+=encodeURIComponent(JSON.stringify(data));
			
			// #ifdef APP-PLUS
			var currentWebview = that.$scope.$getAppWebview();
			that.statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
			setTimeout(function() {
				
			    wv = currentWebview.children()[0]
			    wv.setStyle({
					top:uni.getSystemInfoSync().statusBarHeight + 44 ,
					height:uni.getSystemInfoSync().windowHeight - 44 - uni.getSystemInfoSync().statusBarHeight,
				})
			}, 300); //如果是页面初始化调用时，需要延时一下
			// #endif
			
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			onMessage(e) {
				var that = this;
				  if (e.detail.data[0].type == "back") {
					that.back();
				  }
			},
			toDraft(){
				uni.navigateTo({
					url: '/pages/user/draftList'
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
