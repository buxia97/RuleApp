(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contents-foreverblog"],{"0efb":function(t,e,i){"use strict";i.r(e);var n=i("bc22"),a=i("ffb8");for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);var o=i("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"71b14608",null,!1,n["a"],void 0);e["default"]=u.exports},"9b14":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("14d9"),i("99af"),i("e25e"),i("fb6a");i("625a");var n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,contentsList:[],modalName:null,isLoading:0,page:1,moreText:"加载更多",isLoad:0}},onShow:function(){this.getContentsList()},onLoad:function(){},onPullDownRefresh:function(){this.getContentsList();setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){0==this.isLoad&&this.loadMore()},methods:{showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},back:function(){uni.navigateBack({delta:1})},reload:function(){this.getContentsList()},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,this.getContentsList(!0)},getContentsList:function(t){var e=this,i=e.page;t&&i++;var n={page:i};e.$Net.request({url:e.$API.getForeverblog(),data:n,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(1==i.data.code){var n=i.data.data.data;if(n.length>0){var a=[];for(var s in n){var o=n[s];o.style="background-image:url("+n[s].avatar+");",a.push(o)}e.contentsList=t?e.contentsList.concat(a):a}else e.moreText="没有更多文章了"}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){e.moreText="加载更多",e.isLoad=0,uni.showToast({title:"网络开小差了哦",icon:"none"});setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}})},toPost:function(){uni.navigateTo({url:"/pages/user/post"})},toEdit:function(t){uni.navigateTo({url:"/pages/user/post?type=edit&cid="+t})},subText:function(t,e){return t.length<null?t.substring(0,e)+"……":t},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),i=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2),a=("0"+t.getHours()).slice(-2),s=("0"+t.getMinutes()).slice(-2),o=e+"-"+i+"-"+n+" "+a+":"+s;return o},toInfo:function(t){uni.navigateTo({url:"/pages/contents/info?cid="+t.cid+"&title="+t.title})},toPage:function(t){window.open(t)},toForeverblog:function(){this.hideModal();window.open("https://www.foreverblog.cn")}}};e.default=n},bc22:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"userpost",class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("十年之约")]),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cuIcon-question foreverblog-ico",attrs:{"data-target":"DialogModal1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showModal.apply(void 0,arguments)}}})],1)],1)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-view",{staticClass:"data-box"},[0==t.contentsList.length?n("v-uni-view",{staticClass:"no-data"},[n("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),t._l(t.contentsList,(function(e,i){return n("v-uni-view",{key:i,staticClass:"cu-list menu-avatar comment foreverblog",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toPage(e.link)}}},[n("v-uni-view",{staticClass:"cu-item"},[n("v-uni-view",{staticClass:"cu-avatar round",style:e.style}),n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"text-grey"},[t._v(t._s(e.author))]),n("v-uni-view",{staticClass:"text-gray text-content text-df foreverblog-title"},[t._v(t._s(e.title))]),n("v-uni-view",{staticClass:"padding-sm radius margin-top-sm  text-sm foreverblog-text"},[n("v-uni-view",{staticClass:"flex"},[t._v(t._s(e.desc))])],1),n("v-uni-view",{staticClass:"margin-top-sm flex justify-between"},[n("v-uni-view",{staticClass:"text-gray text-df"},[t._v(t._s(e.created_at))])],1)],1)],1)],1)}))],2),t.contentsList.length>0?n("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e(),n("v-uni-view",{staticClass:"cu-modal",class:"DialogModal1"==t.modalName?"show":""},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"content"},[t._v("十年之约")]),n("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"padding-xl  text-left"},[n("v-uni-view",[t._v("十年之约是一个记录、展示独立博客的平台，即从加入这个活动起，我们的博客10年不关闭或者更久，保持更新和活力。把博客从爱好变成一种习惯，坚持10年，是一项很有意义的活动，我们希望更多的博主加入！")]),n("v-uni-view",[t._v("此页面将获取加入十年之约博客的最新文章，用于共同阅读分享。")])],1),n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn line-green text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-green margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toForeverblog.apply(void 0,arguments)}}},[t._v("前往加入")])],1)],1)],1)],1),0==t.isLoading?n("v-uni-view",{staticClass:"loading"},[n("v-uni-view",{staticClass:"loading-main"},[n("v-uni-image",{attrs:{src:i("14d6")}})],1)],1):t._e()],1)},a=[]},ffb8:function(t,e,i){"use strict";i.r(e);var n=i("9b14"),a=i.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);e["default"]=a.a}}]);