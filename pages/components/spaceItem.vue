<template>
	<view>
		<view class="cu-card dynamic no-card square-list">
			<block  v-for="(item,index) in spaceList" :key="index" v-if="spaceList.length>0">
				<view class="cu-item">
					<view class="cu-list menu-avatar">
						<view class="cu-item">
							<view class="cu-avatar round lg" :style="'background-image:url('+item.userJson.avatar+');'"></view>
							<view class="content flex-sub">
								<view>{{item.userJson.name}}</view>
								<view class="text-gray text-sm flex justify-between">
									{{formatDate(item.created)}}
								</view>
							</view>
						</view>
					</view>
					<view class="text-content">
						<rich-text :nodes="markHtml(item.text)"></rich-text>
					</view>
					<block  v-if="item.type==0">
						
						<view class="grid flex-sub padding-lr col-3 grid-square" v-if="item.picList.length>0">
							<view class="bg-img" :style="'background-image:url('+data+');'"
							 v-for="(data,i) in item.picList" :key="i">
							</view>
						</view>
					</block>
					<block  v-if="item.type==1">
						<view class="grid flex-sub padding-lr">
							<view class="user-post-info">
								<view class="user-post-pic">
									<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" mode="aspectFill"></image>
								</view>
								<view class="user-post-text">
									<view class="user-post-title">
										文章的标题，无法换行，超出长度则自动变为省略号
									</view>
									<view class="user-post-intro">
										文章的简略说明，只允许换两行，超出长度则自动变为省略号。文章的简略说明，只允许换两行，超出长度则自动变为省略号。
									</view>
								</view>
							</view>
						</view>
					</block>
					<block  v-if="item.type==2">
						<view class="grid flex-sub padding-lr">
							
							<view class="user-space-info">
								<view class="user-space-text">
									<text class="text-blue">@老实人：</text>动态的简略说明，只允许换四行，超出长度则自动变为省略号。动态的简略说明，只允许换四行，超出长度则自动变为省略号。
								</view>
								
								<view class="grid flex-sub col-3 grid-square margin-top-xs">
									<view class="bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg);"
									 v-for="(item,index) in 3" :key="index">
									</view>
								</view>
							</view>
						</view>
					</block>
					<view class="text-center grid col-3 padding-xs">
						<view class="square-post-btn">
							<text class="cuIcon-forward"></text>{{formatNumber(item.forward)}}
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-community"></text>{{formatNumber(item.reply)}}
						</view>
						<view class="square-post-btn">
							<text class="cuIcon-appreciate"></text>{{formatNumber(item.likes)}}
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	var API = require('../../utils/api');
	// #ifdef APP-PLUS
	import owo from '../../static/app-plus/owo/OwO.js'
	// #endif
	// #ifdef H5
	import owo from '../../static/h5/owo/OwO.js'
	// #endif
	// #ifdef MP
	var owo = [];
	// #endif
	export default {
	    props: {
	        spaceList: {
			  type: Array,
			  default: () => []
			},
			isHead: {
			  type: Boolean,
			  default: true
			}
	    },
		name: "spaceItem",
		data() {
			return {
				owo:owo,
				owoList:[],
			};
		},
		created(){
			var that = this;
			// #ifdef APP-PLUS || H5
			var owo = that.owo.data;
			var owoList=[];
			for(var i in owo){
				owoList = owoList.concat(owo[i].container);
			}
			that.owoList = owoList;
			// #endif
		},
		methods: {
			subText(text,num){
				if(text.length < null){
					return text.substring(0,num)+"……"
				}else{
					return text;
				}
				
			},
			replaceSpecialChar(text) {
			  text = text.replace(/&quot;/g, '"');
			  text = text.replace(/&amp;/g, '&');
			  text = text.replace(/&lt;/g, '<');
			  text = text.replace(/&gt;/g, '>');
			  text = text.replace(/&nbsp;/g, ' ');
			  return text;
			},
			formatDate(datetime) {
				var datetime = new Date(parseInt(datetime * 1000));
				var year = datetime.getFullYear(),
					month = ("0" + (datetime.getMonth() + 1)).slice(-2),
					date = ("0" + datetime.getDate()).slice(-2),
					hour = ("0" + datetime.getHours()).slice(-2),
					minute = ("0" + datetime.getMinutes()).slice(-2);
				var result = year + "-" + month + "-" + date + " " + hour + ":" + minute;
				return result;
			},
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
			},
			toInfo(cid,title){
				var that = this;
				
				uni.navigateTo({
				    url: '/pages/contents/info?cid='+cid+"&title="+title
				});
			},
			goAds(data){
				var that = this;
				var url = data.url;
				var type = data.urltype;
				// #ifdef APP-PLUS
				if(type==1){
					plus.runtime.openURL(url);
				}
				if(type==0){
					plus.runtime.openWeb(url);
				}
				// #endif
				// #ifdef H5
				window.open(url)
				// #endif
			},
			formatNumber(num) {
			    return num >= 1e3 && num < 1e4 ? (num / 1e3).toFixed(1) + 'k' : num >= 1e4 ? (num / 1e4).toFixed(1) + 'w' : num
			},
			toUserContents(data){
				var that = this;
				var name = data.author;
				var title = data.author+"的信息";
				var id= data.authorId;
				var type="user";
				uni.navigateTo({
				    url: '/pages/contents/userinfo?title='+title+"&name="+name+"&uid="+id+"&avatar="+encodeURIComponent(data.avatar)
				});
			},
			getUserLv(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankList = API.GetRankList();
				return rankList[i];
			},
			getUserLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankStyle = API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return userlvStyle;
			},
			markHtml(text){
				var that = this;
				var owoList=that.owoList;
				for(var i in owoList){
				
					if(that.replaceSpecialChar(text).indexOf(owoList[i].data) != -1){
						text = that.replaceAll(that.replaceSpecialChar(text),owoList[i].data,"<img src='/"+owoList[i].icon+"' class='tImg' />")
						
					}
				}
				return text;
			},
			replaceAll(string, search, replace) {
			  return string.split(search).join(replace);
			},
		}
	}
</script>

<style>
</style>