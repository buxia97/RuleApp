(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-invitation"],{"559fe":function(t,i,e){"use strict";e.r(i);var n=e("981d"),a=e("9d87");for(var o in a)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(o);var s=e("f0c5"),u=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"856cdfd2",null,!1,n["a"],void 0);i["default"]=u.exports},"981d":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("邀请码管理")]),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cu-btn bg-green radius",attrs:{"data-target":"tokenExcel"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("导出")]),n("v-uni-text",{staticClass:"cu-btn bg-blue radius margin-left-sm",attrs:{"data-target":"tokenModal"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showModal.apply(void 0,arguments)}}},[t._v("生成")])],1)],1)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-view",{staticClass:"data-box"},[n("v-uni-view",{staticClass:"search-type grid col-2"},[n("v-uni-view",{staticClass:"search-type-box",class:0==t.status?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toType(0)}}},[n("v-uni-text",[t._v("未使用")])],1),n("v-uni-view",{staticClass:"search-type-box",class:1==t.status?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toType(1)}}},[n("v-uni-text",[t._v("已使用")])],1)],1),0==t.invitationList.length?n("v-uni-view",{staticClass:"no-data"},[n("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),t._l(t.invitationList,(function(i,e){return n("v-uni-view",{key:e,staticClass:"cu-item tokenList-box"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-text",{staticClass:"text-bold"},[t._v(t._s(i.code))])],1),n("v-uni-view",{staticClass:"tokenList-info"},[n("v-uni-text",{staticClass:"tokenDate"},[t._v(t._s(t.formatDate(i.created)))]),n("v-uni-text",{staticClass:"cu-btn text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.ToCopy(i.code)}}},[t._v("复制")])],1)],1)})),t.invitationList.length>0?n("v-uni-view",{staticClass:"load-more",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.loadMore.apply(void 0,arguments)}}},[n("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],2),n("v-uni-view",{staticClass:"cu-modal LinksModal",class:"tokenModal"==t.modalName?"show":""},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"content"},[t._v("生成邀请码")]),n("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"padding-xl"},[n("v-uni-input",{attrs:{placeholder:"邀请码数量,一次最大100",type:"number"},model:{value:t.num,callback:function(i){t.num=i},expression:"num"}})],1),n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn line-blue text-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-blue margin-left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toMade.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1),n("v-uni-view",{staticClass:"cu-modal LinksModal",class:"tokenExcel"==t.modalName?"show":""},[n("v-uni-view",{staticClass:"cu-dialog"},[n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"content"},[t._v("导出邀请码")]),n("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),n("v-uni-view",{staticClass:"padding-xl"},[n("v-uni-text",{staticClass:"text-red"},[t._v("将导出未使用的邀请码为Excel表格，填入过多条数可能导致数据库卡顿")]),n("v-uni-input",{attrs:{placeholder:"导出条数",type:"number"},model:{value:t.tokenNum,callback:function(i){t.tokenNum=i},expression:"tokenNum"}})],1),n("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[n("v-uni-view",{staticClass:"action"},[n("v-uni-button",{staticClass:"cu-btn line-blue text-blue",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),n("v-uni-button",{staticClass:"cu-btn bg-blue margin-left",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toExcel.apply(void 0,arguments)}}},[t._v("确定")])],1)],1)],1)],1),0==t.isLoading?n("v-uni-view",{staticClass:"loading"},[n("v-uni-view",{staticClass:"loading-main"},[n("v-uni-image",{attrs:{src:e("14d6")}})],1)],1):t._e()],1)},a=[]},"9d87":function(t,i,e){"use strict";e.r(i);var n=e("da65"),a=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(o);i["default"]=a.a},da65:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("e9c4"),e("99af"),e("e25e"),e("fb6a");var n=e("625a"),a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,invitationList:[],page:1,moreText:"加载更多",isLoad:0,searchText:"",isLoading:0,status:0,token:"",price:"",num:"",modalName:"",tokenNum:""}},onPullDownRefresh:function(){},onReachBottom:function(){this.loadMore()},onHide:function(){n.localStorage.removeItem("getuid")},onShow:function(){this.getInvitationList()},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},toType:function(t){this.status=t,this.invitationList=[],this.page=1,this.getInvitationList()},loadMore:function(){this.moreText="正在加载中...",0==this.isLoad&&this.getInvitationList(!0)},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(){this.modalName=null},toMade:function(){var t=this;if(""==t.num)return uni.showToast({title:"请输入正确的参数",icon:"none",duration:1e3,position:"bottom"}),!1;var i="";if(n.localStorage.getItem("userinfo")){var e=JSON.parse(n.localStorage.getItem("userinfo"));i=e.token}var a={num:t.num,token:i};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.madeInvitation(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){console.log(JSON.stringify(i)),setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:i.data.msg,icon:"none",duration:1e3,position:"bottom"}),1==i.data.code&&(t.status=0,t.invitationList=[],t.page=1,t.getInvitationList(),t.hideModal())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},getInvitationList:function(t){var i=this,e=i.page,a="";if(n.localStorage.getItem("userinfo")){var o=JSON.parse(n.localStorage.getItem("userinfo"));a=o.token}var s={status:i.status};t&&e++,i.$Net.request({url:i.$API.invitationList(),data:{searchParams:JSON.stringify(i.$API.removeObjectEmptyKey(s)),limit:20,page:e,searchKey:i.searchText,order:"created",token:a},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){if(i.isLoad=0,1==e.data.code){var n=e.data.data;if(n.length>0){var a=n;t?(i.page++,i.invitationList=i.invitationList.concat(a)):i.invitationList=a}else i.moreText="没有更多数据了"}setTimeout((function(){i.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){i.isLoad=0,i.moreText="加载更多";setTimeout((function(){i.isLoading=1,clearTimeout("timer")}),300)}})},formatDate:function(t){t=new Date(parseInt(1e3*t));var i=t.getFullYear(),e=("0"+(t.getMonth()+1)).slice(-2),n=("0"+t.getDate()).slice(-2),a=("0"+t.getHours()).slice(-2),o=("0"+t.getMinutes()).slice(-2),s=i+"-"+e+"-"+n+" "+a+":"+o;return s},ToCopy:function(t){uni.showToast({title:"复制成功"});var i=document.createElement("textarea");i.value=t,i.readOnly="readOnly",document.body.appendChild(i),i.select(),i.setSelectionRange(0,t.length);document.execCommand("copy");i.remove()},toExcel:function(){var t="";if(""==this.tokenNum||this.tokenNum<1)return uni.showToast({title:"请输入正确的条数",icon:"none",duration:1e3,position:"bottom"}),!1;if(!n.localStorage.getItem("userinfo"))return uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"}),!1;var i=JSON.parse(n.localStorage.getItem("userinfo"));t=i.token;var e=this.$API.invitationExcel()+"?limit="+this.tokenNum+"&token="+t;window.open(e)}}};i.default=a}}]);