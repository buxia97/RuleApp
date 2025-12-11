<template>
	<view class="user" :class="$store.state.AppStyle">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					赋予版主权限
				</view>
				<view class="action" @tap="submit">
					<button class="cu-btn round bg-blue">提交</button>
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">用户ID</view>
				<input placeholder="请输入用户ID" name="input" type="number" v-model="toid"></input>
				<view class="action">
					<text class="text-blue" @tap="toUser">选择用户</text>
				</view>
			</view>
			<view class="cu-form-group" @tap="toSection()">
				<view class="title">选择版块</view>
				<view class="picker">
					<text class="text-green">{{curSection.name}}</text>
					<text class="cuIcon-right"></text>
				</view>
			</view>
			<view class="cu-form-group">
				<view class="title">选择权限</view>
				<view class="picker" @tap="showModal" data-target="restrictList">
					{{restrictList[purview-1].name}}
					<text class="cuIcon-right"></text>
				</view>
			</view>
		</form>
		<view class="padding">
			<view class="margin-bottom-sm">1.审核员：拥有审核帖子，关闭帖子评论，修改编辑帖子的权限。</view>
			<view class="margin-bottom-sm">2.执行员：拥有审核员所有权限，并增加删除帖子的权限。</view>
			<view class="margin-bottom-sm">3.小版主：拥有前两个权限级的全部权限。</view>
			<view class="margin-bottom-sm">4.版主：拥有编辑当前版块，并对当前版块帖子拥有全部的权限。</view>
			<view class="margin-bottom-sm">5.大版主：拥有编辑所有版块权限，并拥有添加其它权限级的权限（无论选择任何版块，只要设置为大版主则拥有全部版块权限）。</view>
		</view>
		<!--  #ifdef MP -->
		<view class="post-update bg-blue" @tap="submit">
			<text class="cuIcon-upload"></text>
		</view>
		<!--  #endif -->
		<view class="cu-modal" :class="modalName=='restrictList'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in restrictList" :key="index">
							<label class="flex justify-between align-center flex-sub" @tap="setRestrict(item.id)">
								<view class="flex-sub">{{item.name}}</view>
								<radio class="round" :class="purview==item.id?'checked':''" :checked="purview==item.id?true:false"></radio>
							</label>
						</view>
					</view>
				</radio-group>
			</view>
		</view>

	</view>
</template>

<script>
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				AppStyle:this.$store.state.AppStyle,
				
				toid:"",
				
				token:'',
				curSection:{
					"name":"",
					"id":0,
				},
				purview:1,
				restrictList:[
					{
						'id':1,
						'name':'审核员'
					},
					{
						'id':2,
						'name':'执行员'
					},
					{
						'id':3,
						'name':'小版主'
					},
					{
						'id':4,
						'name':'版主'
					},
					{
						'id':5,
						'name':'大版主'
					}
				],
				modalName: null,
				
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
			
			if(localStorage.getItem('getuid')){
				that.toid = localStorage.getItem('getuid');
				localStorage.removeItem('getuid')
			}
			if(localStorage.getItem('curSection')){
				that.curSection =JSON.parse(localStorage.getItem('curSection'));
				localStorage.removeItem('curSection')
			}
			
		},
		onLoad(res) {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			if(localStorage.getItem('token')){
				
				that.token = localStorage.getItem('token');
			}
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal() {
				this.modalName = null
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				this.radio = e.detail.value
			},
			setRestrict(id){
				let that = this	
				that.purview = id;
				that.hideModal();
			},
			toType(text,id){
				var that = this;
				that.typeText = text;
				that.type = id;
				that.hideModal();
			},
			toTime(item,index){
				var that = this;
				that.timeText = item.title;
				that.time = item.num;
				that.hideModal();
			},
			toUser(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/manage/users?type=get'
				});
			},
			toSection(){
				var that = this;
				uni.navigateTo({
				    url: '/pages/forum/section?type=1'
				});
			},
			submit(){
				var that = this;
				if(that.curSection.id==0){
					uni.showToast({
						title:"请选择版块",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				if (that.toid == "") {
					uni.showToast({
						title:"请选择用户",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var data = {
					'sectionId':that.curSection.id,
					'uid':that.toid,
					'purview':that.purview,
					"token":that.token,
				}
				uni.showLoading({
					title: "加载中"
				});
				that.$Net.request({
					
					url: that.$API.setModerator(),
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
							that.toid = ""
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
		}
	}
</script>

<style>
</style>
