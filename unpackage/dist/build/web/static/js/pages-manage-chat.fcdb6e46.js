(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-chat"],{1520:function(t,e,a){"use strict";a.r(e);var i=a("e1ec"),s=a("23aa");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"5422b610",null,!1,i["a"],void 0);e["default"]=c.exports},"23aa":function(t,e,a){"use strict";a.r(e);var i=a("fa9f"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},e1ec:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{class:t.AppStyle},[i("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"})],1),i("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("聊天室管理")]),i("v-uni-view",{staticClass:"action"},[i("v-uni-text",{staticClass:"text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.addGroup.apply(void 0,arguments)}}},[t._v("创建群聊")])],1)],1)],1),i("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),i("v-uni-view",{staticClass:"data-box data-inbox"},[i("v-uni-view",{staticClass:"search-type grid col-2"},[i("v-uni-view",{staticClass:"search-type-box",class:1==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType(1)}}},[i("v-uni-text",[t._v("全站群聊")])],1),i("v-uni-view",{staticClass:"search-type-box",class:0==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType(0)}}},[i("v-uni-text",[t._v("全站私聊")])],1)],1),1==t.type?[0==t.chatList.length?i("v-uni-view",{staticClass:"no-data"},[t._v("暂时没有数据")]):t._e(),t.chatList.length>0?i("v-uni-view",{staticClass:"cu-list menu-avatar"},[t._l(t.chatList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goChat(e)}}},[1==e.type?[i("v-uni-view",{staticClass:"cu-avatar round lg",style:"background-image:url("+e.pic+");"})]:[i("v-uni-view",{staticClass:"cu-avatar round lg",style:"background-image:url("+e.userJson.avatar+");"})],i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[i("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"text-gray text-sm flex"},[i("v-uni-view",{staticClass:"text-cut"},[e.lastMsg?[4!=e.lastMsg.type?[0==e.type?[e.lastMsg.uid==e.uid?[t._v(t._s(e.userJson.name)+":")]:t._e(),e.lastMsg.uid==e.toid?[t._v(t._s(e.userJson.toName)+":")]:t._e()]:t._e(),1==e.type?[t._v(t._s(e.lastMsg.name)+":")]:t._e(),0==e.lastMsg.type?[t._v(t._s(e.lastMsg.text))]:t._e(),1==e.lastMsg.type?[t._v("[图片]")]:t._e()]:["ban"==e.lastMsg.text?[i("v-uni-text",{staticClass:"text-red"},[t._v("[已开启全体禁言]")])]:[i("v-uni-text",{staticClass:"text-blue"},[t._v("[已解除全体禁言]")])]]]:[t._v("暂无消息")]],2)],1)],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"text-grey text-xs"},[t._v(t._s(t.chatFormatDate(e.lastTime)))]),0==e.isNew?i("v-uni-view",{staticClass:"cu-tag sm",staticStyle:{background:"none"}},[t._v("")]):i("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("new")])],1)],2)]}))],2):t._e()]:t._e(),0==t.type?[0==t.chatList.length?i("v-uni-view",{staticClass:"no-data"},[t._v("暂时没有数据")]):t._e(),t.chatList.length>0?i("v-uni-view",{staticClass:"cu-list menu-avatar"},[t._l(t.chatList,(function(e,a){return[i("v-uni-view",{key:a+"_0",staticClass:"cu-item",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goChat(e)}}},[i("v-uni-view",{staticClass:"cu-avatar round lg",style:"background-image:url("+e.userJson.avatar+");"}),i("v-uni-view",{staticClass:"content"},[i("v-uni-view",[i("v-uni-view",{staticClass:"text-cut"},[t._v(t._s(e.userJson.name)),0==t.type?[t._v("和"+t._s(e.userJson.toName))]:t._e()],2)],1),i("v-uni-view",{staticClass:"text-gray text-sm flex"},[i("v-uni-view",{staticClass:"text-cut"},[e.lastMsg?[4!=e.lastMsg.type?[e.lastMsg.uid==e.uid?[t._v(t._s(e.userJson.name)+":")]:t._e(),e.lastMsg.uid==e.toid?[t._v(t._s(e.userJson.toName)+":")]:t._e(),0==e.lastMsg.type?[t._v(t._s(e.lastMsg.text))]:t._e(),1==e.lastMsg.type?[t._v("[图片]")]:t._e()]:["ban"==e.lastMsg.text?[i("v-uni-text",{staticClass:"text-blue"},[t._v("[聊天者已开启屏蔽]")])]:[i("v-uni-text",{staticClass:"text-blue"},[t._v("[聊天者已关闭屏蔽]")])]]]:[t._v("暂无消息")]],2)],1)],1),i("v-uni-view",{staticClass:"action"},[i("v-uni-view",{staticClass:"text-grey text-xs"},[t._v(t._s(t.chatFormatDate(e.lastTime)))]),0==e.isNew?i("v-uni-view",{staticClass:"cu-tag sm",staticStyle:{background:"none"}},[t._v("")]):i("v-uni-view",{staticClass:"cu-tag round bg-red sm"},[t._v("new")])],1)],1)]}))],2):t._e()]:t._e(),t.chatList.length>0?i("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],2),0==t.isLoading?i("v-uni-view",{staticClass:"loading"},[i("v-uni-view",{staticClass:"loading-main"},[i("v-uni-image",{attrs:{src:a("14d6")}})],1)],1):t._e()],1)},s=[]},fa9f:function(t,e,a){"use strict";a("7a82");var i=a("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(a("fc11"));a("99af"),a("c975"),a("ac1f"),a("5319"),a("5b81"),a("1276"),a("14d9"),a("e25e"),a("fb6a");var n,o=a("625a"),c=i(a("634b")),u={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,chatList:[],type:1,moreText:"加载更多",page:1,token:"",isLoading:0,owo:c.default,owoList:[],chatLoading:null}},onPullDownRefresh:function(){o.localStorage.getItem("token")&&(this.token=o.localStorage.getItem("token"),this.getMyChat(!1));setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onHide:function(){clearInterval(this.chatLoading),this.chatLoading=null},onReachBottom:function(){this.loadMore()},onShow:function(){this.page=1,o.localStorage.getItem("token")&&(this.token=o.localStorage.getItem("token"),this.getMyChat(!1))},onLoad:function(){var t=this.owo.data,e=[];for(var a in t)e=e.concat(t[a].container);this.owoList=e},methods:(n={back:function(){uni.navigateBack({delta:1})},loadMore:function(){0==this.isLoad&&(this.moreText="正在加载中...",this.getMyChat(!0))},markHtml:function(t){var e=this.owoList;for(var a in e)-1!=this.replaceSpecialChar(t).indexOf(e[a].data)&&(t=this.replaceAll(this.replaceSpecialChar(t),e[a].data,"<img src='/"+e[a].icon+"' class='tImg' />"));return t},replaceAll:function(t,e,a){return t.split(e).join(a)},toInfo:function(t,e){uni.navigateTo({url:"/pages/contents/info?cid="+t+"&title="+e})},goInbox:function(t){if("comment"==t.type&&this.toInfo(t.contentsInfo.cid,t.contenTitle),"finance"==t.type&&uni.navigateTo({url:"/pages/user/assets"}),"system"==t.type)return!1},getUserLv:function(t){if(!t)t=0;var e=this.$API.GetRankList();return e[t]},getUserLvStyle:function(t){if(!t)t=0;var e=this.$API.GetRankStyle(),a="color:#fff;background-color: "+e[t];return a},toType:function(t){this.chatList=[],this.type=t,this.page=1,this.moreText="加载更多",this.isLoad=0,this.getMyChat(!1)},getMyChat:function(t){var e=this,a=e.page;if(t&&a++,""==e.token)return uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"}),!1;e.$Net.request({url:e.$API.allChat(),data:{token:e.token,limit:30,page:a,type:e.type,order:"lastTime"},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(a){if(e.isLoad=0,1==a.data.code){var i=a.data.data;if(i.length>0){var s=[];for(var n in i){var o=i[n];o.isNew=0,s.push(o)}t?(e.page++,e.chatList=e.chatList.concat(s)):e.chatList=s}else e.moreText="没有更多消息了"}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){e.isLoad=0,e.moreText="加载更多";setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}})},commentsAdd:function(t,e,a,i){uni.navigateTo({url:"/pages/contents/commentsadd?cid="+i+"&coid="+e+"&title="+t+"&isreply="+a})},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),s=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),o=e+"-"+a+"-"+i+" "+s+":"+n;return o},chatFormatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),s=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2),o=s+":"+n,c=new Date,u=c.getFullYear(),l=(("0"+(c.getMonth()+1)).slice(-2),("0"+c.getDate()).slice(-2));return o=e==u&&e==u&&i==l?s+":"+n:a+"-"+i,o},replaceSpecialChar:function(t){return!!t&&(t=t.replace(/&quot;/g,'"'),t=t.replace(/&amp;/g,"&"),t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t=t.replace(/&nbsp;/g," "),t)}},(0,s.default)(n,"getUserLv",(function(t){if(!t)t=0;var e=this.$API.GetRankList();return e[t]})),(0,s.default)(n,"getUserLvStyle",(function(t){if(!t)t=0;var e=this.$API.GetRankStyle(),a="color:#fff;background-color: "+e[t];return a})),(0,s.default)(n,"setRead",(function(){this.$Net.request({url:this.$API.setRead(),data:{token:this.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){t.data.code},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})})),(0,s.default)(n,"goChat",(function(t){if(0==t.type){var e=t.userJson.name,a=t.userJson.uid,i=t.id;uni.navigateTo({url:"/pages/chat/chat?uid="+a+"&name="+e+"&chatid="+i+"&type=0"})}if(1==t.type){e=t.name,i=t.id;uni.navigateTo({url:"/pages/chat/chat?name="+e+"&chatid="+i+"&type=1"})}})),(0,s.default)(n,"addGroup",(function(){uni.navigateTo({url:"/pages/manage/addGroup"})})),n)};e.default=u}}]);