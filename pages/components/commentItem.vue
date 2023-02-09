<template>
	<view>
		<view class="cu-item">
			<view class="cu-list menu-avatar comment">
				<view class="cu-item">
					<view class="cu-avatar round" @tap="toUserContents(item)" :style="item.style"></view>
					<view class="content">
						<view class="text-grey">
						<block v-if="item.isvip>0">
							<block v-if="item.vip==1">
								<text class="text-red">
									{{item.author}}
								</text>
							</block>
							<block v-else>
								<text class="text-yellow">
									{{item.author}}
								</text>
							</block>
						</block>
						<block v-else>
							{{item.author}}
						</block>
						<block v-if="isHead">
							<!--  #ifdef H5 || APP-PLUS -->
							<text class="userlv" :style="getLvStyle(item.experience)">{{getLv(item.experience)}}</text>
							<text class="userlv" :style="getUserLvStyle(item.lv)">{{getUserLv(item.lv)}}</text>
							
							<!--  #endif -->
							<text class="userlv customize" v-if="item.customize&&item.customize!=''">{{item.customize}}</text>
						</block>
						</view>
						<view class="text-content text-df break-all">
							<rich-text :nodes="markHtml(item.text)"></rich-text>
							
						</view>
						<view class="bg-grey light padding-sm radius margin-top-sm  text-sm">
							<view class="flex" @tap="toInfo(item.cid,item.contenTitle)">
								<view class="break-all">{{replaceSpecialChar(item.contenTitle)}}</view>
								
							</view>
						</view>
						<view class="margin-top-sm flex justify-between">
							<view class="text-gray text-df">{{formatDate(item.created)}}</view>
							<view>
								<text class="cuIcon-messagefill text-gray margin-left-sm" @tap="commentsAdd(item.author+'：'+item.text,item.coid,1,item.cid)"></text>
							</view>
						</view>
					</view>
				</view>
							
				
			</view>
		</view>
	</view>
</template>

<script>
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
	        item: {
			  type: Object,
			  default: () => ({})
			},
			isHead: {
			  type: Boolean,
			  default: true
			}
	    },
		name: "commentItem",
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
				var rankList = that.$API.GetRankList();
				return rankList[i];
			},
			
			getUserLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var rankStyle = that.$API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[i];
				return userlvStyle;
			},
			getLv(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var lv  = that.$API.getLever(i);
				var leverList = that.$API.GetLeverList();
				return leverList[lv];
			},
			getLvStyle(i){
				var that = this;
				if(!i){
					var i = 0;
				}
				var lv  = that.$API.getLever(i);
				var rankStyle = that.$API.GetRankStyle();
				var userlvStyle ="color:#fff;background-color: "+rankStyle[lv];
				return userlvStyle;
			},
			commentsAdd(title,coid,reply,cid){
				var that = this;
				uni.navigateTo({
				    url: '/pages/contents/commentsadd?cid='+cid+"&coid="+coid+"&title="+title+"&isreply="+reply
				});
			},
			markHtml(text){
				var that = this;
				text = that.replaceAll(text,"<","&lt;");
				text = that.replaceAll(text,">","&gt;");
				var owoList=that.owoList;
				// console.log(JSON.stringify(owoList));
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