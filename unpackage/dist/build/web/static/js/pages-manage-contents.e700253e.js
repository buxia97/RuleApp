(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-manage-contents"],{"4e48":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"userpost",class:t.AppStyle},[i("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"})],1),i("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("内容管理")])],1)],1),i("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),i("v-uni-view",{staticClass:"data-box"},[i("v-uni-view",{staticClass:"fullpost-btn"},["administrator"==t.group?i("v-uni-text",{staticClass:"cu-btn bg-blue",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toMetas.apply(void 0,arguments)}}},[t._v("分类标签")]):t._e()],1),i("v-uni-view",{staticClass:"cu-bar bg-white search"},[i("v-uni-view",{staticClass:"search-form round"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{type:"text",placeholder:"输入搜索关键字"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchTag.apply(void 0,arguments)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),""!=t.searchText?i("v-uni-view",{staticClass:"search-close",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.searchClose()}}},[i("v-uni-text",{staticClass:"cuIcon-close"})],1):t._e()],1)],1),i("v-uni-view",{staticClass:"search-type grid col-3"},[i("v-uni-view",{staticClass:"search-type-box",class:"waiting"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("waiting")}}},[i("v-uni-text",[t._v("待审核")])],1),i("v-uni-view",{staticClass:"search-type-box",class:"publish"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("publish")}}},[i("v-uni-text",[t._v("已发布")])],1),i("v-uni-view",{staticClass:"search-type-box",class:"reject"==t.type?"active":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toType("reject")}}},[i("v-uni-text",[t._v("已拒绝")])],1)],1),i("v-uni-view",{staticClass:"cu-card article no-card"},["publish"==t.type?i("v-uni-view",{staticClass:"data-select"},[i("v-uni-text",{class:0==t.dataSelect?"act":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSelect(0)}}},[t._v("全部")]),i("v-uni-text",{class:1==t.dataSelect?"act":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSelect(1)}}},[t._v("推荐")]),i("v-uni-text",{class:2==t.dataSelect?"act":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSelect(2)}}},[t._v("置顶")]),i("v-uni-text",{class:3==t.dataSelect?"act":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toSelect(3)}}},[t._v("轮播")])],1):t._e(),0==t.contentsList.length?i("v-uni-view",{staticClass:"no-data"},[i("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),t._l(t.contentsList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-item shadow"},[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"desc"},[i("v-uni-view",{staticClass:"text-content"},[t._v(t._s(e.title))]),i("v-uni-view",["publish"==e.status?i("v-uni-view",{staticClass:"cu-tag bg-green light sm round"},[t._v("已发布")]):t._e(),"waiting"==e.status?i("v-uni-view",{staticClass:"cu-tag bg-orange light sm round"},[t._v("待审核")]):t._e(),"reject"==e.status?i("v-uni-view",{staticClass:"cu-tag bg-red light sm round"},[t._v("已拒绝")]):t._e(),i("v-uni-view",{staticClass:"cu-tag data-time"},[t._v(t._s(t.formatDate(e.created)))])],1)],1)],1),i("v-uni-view",{staticClass:"manage-btn"},["waiting"==e.status?i("v-uni-text",{staticClass:"text-green radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toAudit(e.cid,0)}}},[t._v("通过")]):t._e(),"waiting"==e.status?i("v-uni-text",{staticClass:"text-yellow radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toAudit(e.cid,1)}}},[t._v("拒绝")]):t._e(),"publish"==e.status&&"administrator"==t.group?[0==e.isrecommend?i("v-uni-text",{staticClass:"text-green radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addRecommend(e.cid)}}},[t._v("推荐")]):i("v-uni-text",{staticClass:"text-grey radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.rmRecommend(e.cid)}}},[t._v("取消推荐")]),0==e.istop?i("v-uni-text",{staticClass:"text-green radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addTop(e.cid)}}},[t._v("置顶")]):i("v-uni-text",{staticClass:"text-grey radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.rmTop(e.cid)}}},[t._v("取消置顶")]),0==e.isswiper?i("v-uni-text",{staticClass:"text-green radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.addSwiper(e.cid)}}},[t._v("轮播")]):i("v-uni-text",{staticClass:"text-grey radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.rmSwiper(e.cid)}}},[t._v("取消轮播")]),i("v-uni-text",{staticClass:"text-blue radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.setFields(e.cid,e.abcimg)}}},[t._v("图文类型")])]:t._e(),i("v-uni-text",{staticClass:"text-blue radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toEdit(e.cid)}}},[t._v("编辑")]),"administrator"==t.group?i("v-uni-text",{staticClass:"text-red radius",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.toDelete(e.cid)}}},[t._v("删除")]):t._e(),i("v-uni-text",{staticClass:"text-gray radius",staticStyle:{float:"right"}},[t._v(t._s(e.authorInfo.name))])],2)],1)})),t.contentsList.length>0?i("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],2)],1),0==t.isLoading?i("v-uni-view",{staticClass:"loading"},[i("v-uni-view",{staticClass:"loading-main"},[i("v-uni-image",{attrs:{src:n("14d6")}})],1)],1):t._e(),i("v-uni-view",{staticClass:"cu-modal",class:"RadioModal"==t.modalName?"show":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-dialog",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e)}}},[i("v-uni-radio-group",{staticClass:"block",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.RadioChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(t.abcimgList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"cu-item"},[i("v-uni-label",{staticClass:"flex justify-between align-center flex-sub"},[i("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(e.name))]),i("v-uni-radio",{staticClass:"round",class:t.abcimg==e.value?"checked":"",attrs:{checked:t.abcimg==e.value,value:e.value}})],1)],1)})),1)],1)],1)],1),i("v-uni-view",{staticClass:"cu-modal",class:"reject"==t.modalName?"show":""},[i("v-uni-view",{staticClass:"cu-dialog"},[i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"content"},[t._v("输入拒绝理由")]),i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-close text-red"})],1)],1),i("v-uni-view",{staticClass:"padding-xl text-left"},[i("v-uni-textarea",{staticStyle:{width:"100%",height:"150upx"},attrs:{maxlength:"-1",placeholder:"输入拒绝理由"},model:{value:t.reason,callback:function(e){t.reason=e},expression:"reason"}})],1),i("v-uni-view",{staticClass:"cu-bar bg-white justify-end"},[i("v-uni-view",{staticClass:"action"},[i("v-uni-button",{staticClass:"cu-btn line-green text-green",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.hideModal.apply(void 0,arguments)}}},[t._v("取消")]),i("v-uni-button",{staticClass:"cu-btn bg-green margin-left",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toAudit(t.curCid,1)}}},[t._v("确定")])],1)],1)],1)],1)],1)},a=[]},"94a2":function(t,e,n){"use strict";n("7a82");var i=n("ee27").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("e9c4"),n("c975"),n("14d9"),n("99af"),n("e25e"),n("fb6a");var a=i(n("fc11")),o=n("625a"),s={data:function(){var t;return t={StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,page:1,moreText:"加载更多",isLoad:0,token:"",contentsList:[],searchText:"",type:"waiting",reason:"",curCid:0,isLoading:0,group:"",modalName:null,abcimg:"able",abcimgList:[{name:"默认",value:"able"},{name:"三图",value:"mable"},{name:"大图",value:"bable"}]},(0,a.default)(t,"curCid",""),(0,a.default)(t,"dataSelect",0),t},onPullDownRefresh:function(){this.page=1,this.getContentsList(!1);setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){0==this.isLoad&&this.loadMore()},onShow:function(){if(this.page=1,o.localStorage.getItem("token")&&(this.token=o.localStorage.getItem("token"),this.getContentsList(!1)),o.localStorage.getItem("userinfo")){var t=JSON.parse(o.localStorage.getItem("userinfo"));this.group=t.group}},onLoad:function(){},methods:{back:function(){uni.navigateBack({delta:1})},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,this.getContentsList(!0)},searchTag:function(){this.searchText;this.page=1,this.getContentsList()},searchClose:function(){this.searchText="",this.page=1,this.getContentsList()},toType:function(t){this.type=t,this.page=1,this.moreText="加载更多",this.isLoad=0,this.getContentsList(!1)},toSelect:function(t){this.dataSelect=t,this.page=1,this.moreText="加载更多",this.isLoad=0,this.getContentsList(!1)},getContentsList:function(t){var e=this;if(""==e.token)return uni.showToast({title:"请先登录",icon:"none",duration:1e3,position:"bottom"}),!1;var n={type:"post",status:e.type};1==e.dataSelect&&(n.isrecommend=1),2==e.dataSelect&&(n.istop=1),3==e.dataSelect&&(n.isswiper=1);var i=e.page;t&&i++,e.$Net.request({url:e.$API.getContentsList(),data:{searchParams:JSON.stringify(e.$API.removeObjectEmptyKey(n)),limit:8,page:i,searchKey:e.searchText,order:"created",token:e.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(n){if(e.isLoad=0,e.moreText="加载更多",1==n.data.code){var i=n.data.data;if(i.length>0){var a=[],o=e.$API.GetFields();for(var s in i){var c=i[s].fields;if(c.length>0)for(var u in c)-1!=o.indexOf(c[u].name)&&(i[s][c[u].name]=c[u].strValue);a.push(i[s])}t?(e.page++,e.contentsList=e.contentsList.concat(a)):e.contentsList=a}else e.moreText="没有更多文章了",t||(e.contentsList=i)}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){e.moreText="加载更多",e.isLoad=0;setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)}})},toPost:function(){uni.navigateTo({url:"/pages/user/post"})},toEdit:function(t){uni.navigateTo({url:"/pages/user/post?type=edit&cid="+t})},subText:function(t,e){return t.length<null?t.substring(0,e)+"……":t},formatDate:function(t){t=new Date(parseInt(1e3*t));var e=t.getFullYear(),n=("0"+(t.getMonth()+1)).slice(-2),i=("0"+t.getDate()).slice(-2),a=("0"+t.getHours()).slice(-2),o=("0"+t.getMinutes()).slice(-2),s=e+"-"+n+"-"+i+" "+a+":"+o;return s},toAudit:function(t,e){var n=this,i="";if(n.modalName=null,o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));i=a.token}if(1==e&&""==n.reason)return n.modalName="reject",n.curCid=t,!1;var s="确定要审核通过该文章吗？";1==e&&(s="确定要拒绝该文章吗？");var c={type:e,key:t,token:i,reason:n.reason};uni.showModal({title:s,success:function(t){t.confirm?(uni.showLoading({title:"加载中"}),n.$Net.request({url:n.$API.contentsAudit(),data:c,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(n.page=1,n.moreText="加载更多",n.isLoad=0,n.getContentsList()),n.reason="",n.curCid=0},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):t.cancel&&console.log("用户点击取消")}})},toDelete:function(t){var e=this,n="";if(o.localStorage.getItem("userinfo")){var i=JSON.parse(o.localStorage.getItem("userinfo"));n=i.token}var a={key:t,token:n};uni.showModal({title:"确定要删除该文章吗",success:function(t){t.confirm?(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.contentsDelete(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(e.page=1,e.moreText="加载更多",e.isLoad=0,e.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):t.cancel&&console.log("用户点击取消")}})},addRecommend:function(t){var e=this,n="";if(o.localStorage.getItem("userinfo")){var i=JSON.parse(o.localStorage.getItem("userinfo"));n=i.token}var a={key:t,recommend:1,token:n};uni.showModal({title:"确定要推荐该文章吗",success:function(t){t.confirm?(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.toRecommend(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(e.page=1,e.moreText="加载更多",e.isLoad=0,e.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):t.cancel&&console.log("用户点击取消")}})},rmRecommend:function(t){var e=this,n="";if(o.localStorage.getItem("userinfo")){var i=JSON.parse(o.localStorage.getItem("userinfo"));n=i.token}var a={key:t,recommend:0,token:n};uni.showModal({title:"确定要取消推荐该文章吗",success:function(t){t.confirm?(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.toRecommend(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(e.page=1,e.moreText="加载更多",e.isLoad=0,e.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):t.cancel&&console.log("用户点击取消")}})},addTop:function(t){var e=this,n="";if(o.localStorage.getItem("userinfo")){var i=JSON.parse(o.localStorage.getItem("userinfo"));n=i.token}var a={key:t,istop:1,token:n};uni.showModal({title:"确定要置顶该文章吗",success:function(t){t.confirm?(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.toTop(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(e.page=1,e.moreText="加载更多",e.isLoad=0,e.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):t.cancel&&console.log("用户点击取消")}})},rmTop:function(t){var e=this,n="";if(o.localStorage.getItem("userinfo")){var i=JSON.parse(o.localStorage.getItem("userinfo"));n=i.token}var a={key:t,istop:0,token:n};uni.showModal({title:"确定要取消置顶该文章吗",success:function(t){t.confirm?(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.toTop(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(e.page=1,e.moreText="加载更多",e.isLoad=0,e.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):t.cancel&&console.log("用户点击取消")}})},addSwiper:function(t){var e=this,n="";if(o.localStorage.getItem("userinfo")){var i=JSON.parse(o.localStorage.getItem("userinfo"));n=i.token}var a={key:t,isswiper:1,token:n};uni.showModal({title:"确定要轮播该文章吗",success:function(t){t.confirm?(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.toSwiper(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(e.page=1,e.moreText="加载更多",e.isLoad=0,e.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):t.cancel&&console.log("用户点击取消")}})},rmSwiper:function(t){var e=this,n="";if(o.localStorage.getItem("userinfo")){var i=JSON.parse(o.localStorage.getItem("userinfo"));n=i.token}var a={key:t,isswiper:0,token:n};uni.showModal({title:"确定要取消轮播该文章吗",success:function(t){t.confirm?(uni.showLoading({title:"加载中"}),e.$Net.request({url:e.$API.toSwiper(),data:a,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(e.page=1,e.moreText="加载更多",e.isLoad=0,e.getContentsList())},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})):t.cancel&&console.log("用户点击取消")}})},toMetas:function(){uni.navigateTo({url:"/pages/manage/metas"})},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},RadioChange:function(t){var e=t.detail.value,n=this.curCid;this.setFields(n,e)},setFields:function(t,e){var n,i=this;if(i.curCid=t,i.abcimg=e||"able",null==i.modalName)return i.modalName="RadioModal",!1;if(o.localStorage.getItem("userinfo")){var a=JSON.parse(o.localStorage.getItem("userinfo"));n=a.token}var s={cid:t,name:"abcimg",strvalue:i.abcimg,token:n};i.modalName=null,uni.showLoading({title:"加载中"}),i.$Net.request({url:i.$API.setFields(),data:s,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"post",dataType:"json",success:function(t){i.modalName=null,i.abcimg="able",i.curCid="",setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:t.data.msg,icon:"none"}),1==t.data.code&&(i.page=1,i.moreText="加载更多",i.isLoad=0,i.getContentsList())},fail:function(t){i.modalName=null,i.abcimg="able",i.curCid="",setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"})}})}}};e.default=s},d886:function(t,e,n){"use strict";n.r(e);var i=n("4e48"),a=n("ee64");for(var o in a)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(o);var s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"32fb1c28",null,!1,i["a"],void 0);e["default"]=c.exports},ee64:function(t,e,n){"use strict";n.r(e);var i=n("94a2"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);