<template>
	<view class="userpost">
		<view class="header" :style="[{height:CustomBar + 'px'}]">
			<view class="cu-bar bg-white" :style="{'height': CustomBar + 'px','padding-top':StatusBar + 'px'}">
				<view class="action" @tap="back">
					<text class="cuIcon-back"></text>
				</view>
				<view class="content text-bold" :style="[{top:StatusBar + 'px'}]">
					内容管理
				</view>
			</view>
		</view>
		<view :style="[{padding:NavBar + 'px 10px 0px 10px'}]"></view>
		<view class="data-box">
			<view class="fullpost-btn">
				<text class="cu-btn bg-blue" @tap="toMetas" v-if="group=='administrator'">分类标签</text>
			</view>
			<view class="cu-bar bg-white search">
				<view class="search-form round">
					<text class="cuIcon-search"></text>
					<input type="text" placeholder="输入搜索关键字" v-model="searchText"  @input="searchTag"></input>
				</view>
			</view>
			<view class="search-type grid col-2">
				<view class="search-type-box" @tap="toType('waiting')" :class="type=='waiting'?'active':''">
					<text>待审核</text>
				</view>
				<view class="search-type-box" @tap="toType('publish')" :class="type=='publish'?'active':''">
					<text>已发布</text>
				</view>
			</view>
			<view class="no-data" v-if="contentsList.length==0">
				暂时没有数据
			</view>
			<view class="cu-card article no-card">
				<view class="cu-item shadow"  v-for="(item,index) in contentsList" :key="index">
					<view class="content">
						<view class="desc">
							<view class="text-content">{{item.title}}</view>
							<view>
								<view class="cu-tag bg-green light sm round" v-if="item.status=='publish'">已发布</view>
								<view class="cu-tag bg-orange light sm round" v-if="item.status=='waiting'">待审核</view>
								<view class="cu-tag data-time">{{formatDate(item.created)}}</view>
							</view>
						</view>
						
					</view>
					<view class="manage-btn">
						<text class="text-yellow radius"  v-if="item.status=='waiting'" @tap="toAudit(item.cid)">快捷审核</text>
						<block v-if="item.status!='waiting'&&group=='administrator'">
							<text class="text-green radius" v-if="item.isrecommend==0"  @tap="addRecommend(item.cid)">推荐</text>
							<text class="text-grey radius" v-else  @tap="rmRecommend(item.cid)">取消推荐</text>
							<text class="text-green radius" v-if="item.istop==0"  @tap="addTop(item.cid)">置顶</text>
							<text class="text-grey radius" v-else  @tap="rmTop(item.cid)">取消置顶</text>
							<text class="text-blue radius" @tap="setFields(item.cid,item.abcimg)">图文类型</text>
						</block>
						
						<text class="text-blue radius" @tap="toEdit(item.cid)">编辑</text>
						<text class="text-red radius"  @tap="toDelete(item.cid)" v-if="group=='administrator'">删除</text>
					</view>
				</view>
				<view class="load-more" @tap="loadMore" v-if="contentsList.length>0">
					<text>{{moreText}}</text>
				</view>

			</view>
		</view>
		<!--加载遮罩-->
		<view class="loading" v-if="isLoading==0">
			<view class="loading-main">
				<image src="../../static/loading.gif"></image>
			</view>
		</view>
		<!--加载遮罩结束-->
		<view class="cu-modal" :class="modalName=='RadioModal'?'show':''" @tap="hideModal">
			<view class="cu-dialog" @tap.stop="">
				<radio-group class="block" @change="RadioChange">
					<view class="cu-list menu text-left">
						<view class="cu-item" v-for="(item,index) in abcimgList" :key="index">
							<label class="flex justify-between align-center flex-sub">
								<view class="flex-sub">{{item.name}}</view>
								<radio class="round" :class="abcimg==item.value?'checked':''" :checked="abcimg==item.value?true:false"
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
	import { localStorage } from '../../js_sdk/mp-storage/mp-storage/index.js'
	var API = require('../../utils/api')
	var Net = require('../../utils/net')
	export default {
		data() {
			return {
				StatusBar: this.StatusBar,
				CustomBar: this.CustomBar,
				NavBar:this.StatusBar +  this.CustomBar,
				
				page:1,
				moreText:"加载更多",
				
				isLoad:0,
				token:"",
				contentsList:[],
				
				searchText:"",
				
				type:"waiting",
				
				isLoading:0,
				
				group:"",
				
				modalName: null,
				abcimg: 'able',
				abcimgList:[
					{
						name:"默认",
						value:"able"
					},
					{
						name:"三图",
						value:"mable"
					},
					{
						name:"大图",
						value:"bable"
					},
				],
				curCid:"",
			}
		},
		onPullDownRefresh(){
			var that = this;
			that.page=1;
			that.getContentsList(false);
			var timer = setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000)
			
		},
		onReachBottom() {
		    //触底后执行的方法，比如无限加载之类的
			var that = this;
			if(that.isLoad==0){
				that.loadMore();
			}
		},
		onShow(){
			var that = this;
			// #ifdef APP-PLUS
			//可取值： "dark"：深色前景色样式（即状态栏前景文字为黑色），此时background建议设置为浅颜色； "light"：浅色前景色样式（即状态栏前景文字为白色），此时background建设设置为深颜色；
			plus.navigator.setStatusBarStyle("dark")
			// #endif
			that.page = 1;
			if(localStorage.getItem('token')){
				that.token=localStorage.getItem('token');
				that.getContentsList(false);
			}
			if(localStorage.getItem('userinfo')){
				
				var userInfo = JSON.parse(localStorage.getItem('userinfo'));
				that.group = userInfo.group;
			}
			
			
		},
		onLoad() {
			var that = this;
			// #ifdef APP-PLUS || MP
			that.NavBar = this.CustomBar;
			// #endif
			
		},
		methods: {
			back(){
				uni.navigateBack({
					delta: 1
				});
			},
			loadMore(){
				var that = this;
				that.moreText="正在加载中...";
				that.isLoad=1;
				that.getContentsList(true);
			},
			searchTag(){
				var that = this;
				var searchText = that.searchText;
				that.page=1;
				that.getContentsList();
			
			},
			toType(i){
				var that = this;
				that.type=i;
				that.page=1;
				that.moreText="加载更多";
				that.isLoad=0;
				that.getContentsList(false);
			},
			getContentsList(isPage){
				var that = this;
				if(that.token==""){
					uni.showToast({
					    title:"请先登录",
						icon:'none',
						duration: 1000,
						position:'bottom',
					});
					return false
				}
				var data = {
					"type":"post",
					"status":that.type
				}
				var page = that.page;
				if(isPage){
					page++;
				}
				Net.request({
					url: API.getContentsList(),
					data:{
						"searchParams":JSON.stringify(API.removeObjectEmptyKey(data)),
						"limit":8,
						"page":page,
						"searchKey":that.searchText,
						"order":"created",
						"token":that.token
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.isLoad=0;
						//console.log(JSON.stringify(res))
						that.moreText="加载更多";
						if(res.data.code==1){
							var list = res.data.data;
							if(list.length>0){
								var contentsList = [];
								//将自定义字段获取并添加到数据
								var curFields = API.GetFields();
								for(var i in list){
									var fields = list[i].fields;
									if(fields.length>0){
										for(var j in fields){
											if(curFields.indexOf(fields[j].name)!=-1){
												list[i][fields[j].name]=fields[j].strValue;
											}
										}
									}
									contentsList.push(list[i]);
								}
								if(isPage){
									that.page++;
									that.contentsList = that.contentsList.concat(contentsList);
								}else{
									that.contentsList = contentsList;
								}
								
							}else{
								that.moreText="没有更多文章了";
								if(!isPage){
									that.contentsList = list;
								}
							}
						}
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					},
					fail: function(res) {
						that.moreText="加载更多";
						that.isLoad=0;
						var timer = setTimeout(function() {
							that.isLoading=1;
							clearTimeout('timer')
						}, 300)
					}
				})
			},
			toPost(){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/user/post'
				});
			},
			toEdit(cid){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/user/post?type=edit'+'&cid='+cid
				});
			},
			subText(text,num){
				if(text.length < null){
					return text.substring(0,num)+"……"
				}else{
					return text;
				}
				
			},
			formatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				// 获取年月日时分秒值  slice(-2)过滤掉大于10日期前面的0
				var year = datetime.getFullYear(),
					month = ("0" + (datetime.getMonth() + 1)).slice(-2),
					date = ("0" + datetime.getDate()).slice(-2),
					hour = ("0" + datetime.getHours()).slice(-2),
					minute = ("0" + datetime.getMinutes()).slice(-2);
				//second = ("0" + date.getSeconds()).slice(-2);
				// 拼接
				var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
				// 返回
				return result;
			},
			toAudit(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"key":id,
					"token":token
				}
				uni.showModal({
				    title: '确定要审核通过该文章吗？',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            Net.request({
				            	url: API.contentsAudit(),
				            	data:data,
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
				            			that.getContentsList();
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
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			toDelete(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"key":id,
					"token":token
				}
				uni.showModal({
				    title: '确定要删除该文章吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            Net.request({
				            	url: API.contentsDelete(),
				            	data:data,
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
				            			that.getContentsList();
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
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			addRecommend(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"key":id,
					"recommend":1,
					"token":token
				}
				uni.showModal({
				    title: '确定要推荐该文章吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            Net.request({
				            	url: API.toRecommend(),
				            	data:data,
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
										that.page=1;
										that.moreText="加载更多";
										that.isLoad=0;
				            			that.getContentsList();
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
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			rmRecommend(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"key":id,
					"recommend":0,
					"token":token
				}
				uni.showModal({
				    title: '确定要取消推荐该文章吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            Net.request({
				            	url: API.toRecommend(),
				            	data:data,
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
										that.page=1;
										that.moreText="加载更多";
										that.isLoad=0;
				            			that.getContentsList();
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
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			addTop(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"key":id,
					"istop":1,
					"token":token
				}
				uni.showModal({
				    title: '确定要置顶该文章吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            Net.request({
				            	url: API.toTop(),
				            	data:data,
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
										that.page=1;
										that.moreText="加载更多";
										that.isLoad=0;
				            			that.getContentsList();
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
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			rmTop(id){
				var that = this;
				var token = "";
				
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"key":id,
					"istop":0,
					"token":token
				}
				uni.showModal({
				    title: '确定要取消置顶该文章吗',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showLoading({
				            	title: "加载中"
				            });
				            
				            Net.request({
				            	url: API.toTop(),
				            	data:data,
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
										that.page=1;
										that.moreText="加载更多";
										that.isLoad=0;
				            			that.getContentsList();
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
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			toMetas(){
				var that = this;
				
				uni.navigateTo({
					url: '/pages/manage/metas'
				});
			},
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			hideModal(e) {
				this.modalName = null
			},
			RadioChange(e) {
				var abcimg = e.detail.value;
				var cid = this.curCid;
				this.setFields(cid,abcimg);
			},
			setFields(id,type){
				var that = this;
				that.curCid = id;
				if(type){
					that.abcimg = type;
				}else{
					that.abcimg = "able";
				}
				if(that.modalName == null){
					that.modalName = "RadioModal";
					return false;
				}
				
				var token;
				if(localStorage.getItem('userinfo')){
					var userInfo = JSON.parse(localStorage.getItem('userinfo'));
					token=userInfo.token;
				}
				var data = {
					"cid":id,
					"name":"abcimg",
					"strvalue":that.abcimg,
					"token":token
				}
				that.modalName = null;
				uni.showLoading({
					title: "加载中"
				});
				
				Net.request({
					url: API.setFields(),
					data:data,
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					method: "get",
					dataType: 'json',
					success: function(res) {
						that.modalName =  null;
						that.abcimg = "able";
						that.curCid = "";
						setTimeout(function () {
							uni.hideLoading();
						}, 1000);
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						if(res.data.code==1){
							that.page=1;
							that.moreText="加载更多";
							that.isLoad=0;
							that.getContentsList();
						}
						
					},
					fail: function(res) {
						that.modalName =  null;
						that.abcimg = "able";
						that.curCid = "";
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
			
		}
	}
</script>

<style>
@import "../../static/base.css";
</style>
