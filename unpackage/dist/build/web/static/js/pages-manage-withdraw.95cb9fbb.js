(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-withdraw"],{"01ba":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"user",class:t.AppStyle},[a("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[a("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-back"})],1),a("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("提现审核")]),a("v-uni-view",{staticClass:"action"})],1)],1),a("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),a("v-uni-view",{staticClass:"cu-card dynamic no-card",staticStyle:{"margin-top":"20upx"}},[a("v-uni-view",{staticClass:"search-type grid col-3 bg-white"},[a("v-uni-view",{staticClass:"search-type-box",class:"-1"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("-1")}}},[a("v-uni-text",[t._v("待审核")])],1),a("v-uni-view",{staticClass:"search-type-box",class:"-2"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("-2")}}},[a("v-uni-text",[t._v("已拒绝")])],1),a("v-uni-view",{staticClass:"search-type-box",class:"0"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("0")}}},[a("v-uni-text",[t._v("已通过")])],1)],1),a("v-uni-view",{staticClass:"cu-item"},[a("v-uni-view",{staticClass:"cu-list menu-avatar comment"},[0==t.withdrawList.length?a("v-uni-view",{staticClass:"no-data"},[a("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),t._l(t.withdrawList,(function(e,i){return t.withdrawList.length>0?a("v-uni-view",{key:i,staticClass:"order-box"},[a("v-uni-view",{staticClass:"order-main"},[a("v-uni-view",{staticClass:"order-info"},[a("v-uni-text",{staticClass:"order-id"},[t._v("时间："+t._s(t.formatDate(e.created)))]),a("v-uni-text",{staticClass:"order-type"},[t._v("UID："+t._s(e.uid))])],1),a("v-uni-view",{staticClass:"order-btn"},[a("v-uni-text",{staticClass:"text-red"},[t._v(t._s(e.num)+" 积分 = ￥ "+t._s(e.num/t.scale))]),a("v-uni-text",{staticClass:"text-blue order-status",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.showUserPay(e.pay)}}},[t._v("用户收款信息")])],1),-1==e.cid?a("v-uni-view",{staticClass:"order-kill"},[a("v-uni-text",{staticClass:"cu-btn text-green radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toStatus(e.id,1)}}},[t._v("已打款")]),a("v-uni-text",{staticClass:"cu-btn text-red radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toStatus(e.id,0)}}},[t._v("拒绝")])],1):t._e()],1)],1):t._e()})),t.withdrawList.length>0?a("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[a("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],2)],1)],1),a("v-uni-view",{staticClass:"cu-modal",class:"payInfo"==t.modalName?"show":""},[a("v-uni-view",{staticClass:"cu-dialog"},[a("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[a("v-uni-view",{staticClass:"content"},[t._v("收款信息")]),a("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[a("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),a("v-uni-view",{staticClass:"padding-lg text-left"},[a("v-uni-view",{staticClass:"payinfo-text"},[a("v-uni-text",{staticClass:"payinfo-text-name"},[t._v("支付方式：")]),a("v-uni-text",{staticClass:"payinfo-text-value"},[t._v(t._s(t.curPay[0]))])],1),a("v-uni-view",{staticClass:"payinfo-text"},[a("v-uni-text",{staticClass:"payinfo-text-name"},[t._v("真实姓名：")]),a("v-uni-text",{staticClass:"payinfo-text-value"},[t._v(t._s(t.curPay[1]))])],1),a("v-uni-view",{staticClass:"payinfo-text"},[a("v-uni-text",{staticClass:"payinfo-text-name"},[t._v("支付账号：")]),a("v-uni-text",{staticClass:"payinfo-text-value"},[t._v(t._s(t.curPay[2]))])],1),a("v-uni-view",{staticClass:"payinfo-text"},[a("v-uni-text",{staticClass:"payinfo-text-name"},[t._v("收款二维码：")]),a("v-uni-text",{staticClass:"text-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toPay(t.curPay)}}},[t._v("点击查看")])],1)],1)],1)],1),0==t.isLoading?a("v-uni-view",{staticClass:"loading"},[a("v-uni-view",{staticClass:"loading-main"},[a("v-uni-image",{attrs:{src:i("14d6")}})],1)],1):t._e()],1)},n=[]},"1dbd":function(t,e,i){"use strict";i.r(e);var a=i("cd27"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},"84e6":function(t,e,i){"use strict";i.r(e);var a=i("01ba"),n=i("1dbd");for(var s in n)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(s);var o=i("f0c5"),c=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"f25a5534",null,!1,a["a"],void 0);e["default"]=c.exports},cd27:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4"),i("99af"),i("e25e"),i("fb6a"),i("14d9");var a=i("625a"),n={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,withdrawList:[],moreText:"加载更多",page:1,type:"-1",isLoading:0,scale:0,modalName:null,curPay:[]}},onPullDownRefresh:function(){this.page=1,this.getWithdrawList(!1);setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){this.loadMore()},onShow:function(){this.page=1,this.getVipInfo()},onLoad:function(){this.getWithdrawList(!1)},methods:{hideModal:function(t){this.modalName=null},back:function(){uni.navigateBack({delta:1})},loadMore:function(){this.moreText="正在加载中...",0==this.isLoad&&this.getWithdrawList(!0)},getWithdrawList:function(t){var e=this,i=null;if(!a.localStorage.getItem("userinfo"))return uni.showToast({title:"请先登录哦",icon:"none"}),!1;i=JSON.parse(a.localStorage.getItem("userinfo"));var n="";if(a.localStorage.getItem("userinfo")){i=JSON.parse(a.localStorage.getItem("userinfo"));n=i.token}if(a.localStorage.getItem("userinfo")){i=JSON.parse(a.localStorage.getItem("userinfo"));i.uid}var s={type:"withdraw",cid:e.type},o=e.page;t&&o++,e.$Net.request({url:e.$API.withdrawList(),data:{searchParams:JSON.stringify(e.$API.removeObjectEmptyKey(s)),limit:5,page:o,token:n},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(e.isLoad=0,1==i.data.code){var a=i.data.data;a.length>0?t?(e.page++,e.withdrawList=e.withdrawList.concat(a)):e.withdrawList=a:(t||(e.withdrawList=a),e.moreText="没有更多数据了")}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){e.isLoad=0,e.moreText="加载更多";setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}})},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),i=("0"+(t.getMonth()+1)).slice(-2),a=("0"+t.getDate()).slice(-2),n=("0"+t.getHours()).slice(-2),s=("0"+t.getMinutes()).slice(-2),o=e+"-"+i+"-"+a+" "+n+":"+s;return o},toPay:function(t){if(t.length<1)return uni.showToast({title:"该用户未设置收款信息",icon:"none"}),!1;var e=t,i=e[3],a=[];a.push(i),uni.previewImage({urls:a,current:a[0]}),this.modalName=null},showUserPay:function(t){if(this.curPay=[],!t)return uni.showToast({title:"该用户未设置收款信息",icon:"none"}),!1;var e=t.split("|");this.curPay=e,this.modalName="payInfo"},toStatus:function(t,e){var i=this,n="";if(a.localStorage.getItem("userinfo")){var s=JSON.parse(a.localStorage.getItem("userinfo"));n=s.token}var o={key:t,type:e,token:n};uni.showModal({title:"确定要进行操作吗？",success:function(t){t.confirm?(uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.withdrawStatus(),data:o,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.getWithdrawList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):t.cancel&&console.log("用户点击取消")}})},toType:function(t){this.type=t,this.page=1,this.getWithdrawList()},getVipInfo:function(){var t=this;t.$Net.request({url:t.$API.getVipInfo(),header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){1==e.data.code&&(t.scale=e.data.data.scale);setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)},fail:function(e){setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)}})}}};e.default=n}}]);