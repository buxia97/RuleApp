(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-ads-adsPost"],{"01eb":function(t,i,e){"use strict";e.d(i,"b",(function(){return n})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){}));var n=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("v-uni-view",{staticClass:"user",class:t.AppStyle},[n("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[n("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[n("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.back.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"cuIcon-back"})],1),n("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},["add"==t.post?[t._v("发布")]:[t._v("编辑")],t._v("广告")],2),"add"==t.post?[n("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.submit.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"cu-btn round bg-blue"},[t._v("提交")])],1)]:[n("v-uni-view",{staticClass:"action",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.edit.apply(void 0,arguments)}}},[n("v-uni-button",{staticClass:"cu-btn round bg-blue"},[t._v("保存")])],1)]],2)],1),n("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),n("v-uni-form",[n("v-uni-view",{staticClass:"cu-form-group margin-top"},[n("v-uni-view",{staticClass:"title"},[t._v("广告标题")]),n("v-uni-input",{attrs:{placeholder:"输入广告标题",name:"input","adjust-position":!1,focus:!1},model:{value:t.name,callback:function(i){t.name=i},expression:"name"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("广告类型")]),n("v-uni-view",{staticClass:"picker"},[n("v-uni-text",{staticClass:"text-blue"},[t._v(t._s(t.typeList[t.type].name))])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-textarea",{attrs:{placeholder:"请输入广告内容"},model:{value:t.intro,callback:function(i){t.intro=i},expression:"intro"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("缩略图")]),n("v-uni-input",{attrs:{placeholder:"",name:"input",disabled:"disabled"},model:{value:t.imgurl,callback:function(i){t.imgurl=i},expression:"imgurl"}}),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"cu-btn bg-blue radius",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.imgUpload.apply(void 0,arguments)}}},[t._v("上传图片")])],1)],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("广告跳转链接")]),n("v-uni-input",{attrs:{placeholder:"输入广告跳转链接",name:"input","adjust-position":!1,focus:!1},model:{value:t.url,callback:function(i){t.url=i},expression:"url"}})],1),n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("链接跳转类型")]),n("v-uni-view",{staticClass:"picker",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.modalName="urltypeModal"}}},[""==t.urltype?[t._v("选择跳转类型")]:[n("v-uni-text",{staticClass:"text-blue"},[t._v(t._s(t.urltypeList[t.urltype].name))])],n("v-uni-text",{staticClass:"cuIcon-right"})],2)],1),"add"==t.post?[n("v-uni-view",{staticClass:"cu-form-group"},[n("v-uni-view",{staticClass:"title"},[t._v("购买天数")]),n("v-uni-input",{attrs:{placeholder:"输入购买天数",type:"number",name:"input","adjust-position":!1,focus:!1},on:{input:function(i){arguments[0]=i=t.$handleEvent(i),t.day=t.limit(t.day,0)}},model:{value:t.day,callback:function(i){t.day=i},expression:"day"}}),n("v-uni-view",{staticClass:"action"},[n("v-uni-text",{staticClass:"text-red"},[t._v(t._s(t.price)+"积分/天")])],1)],1),n("v-uni-view",{staticClass:"form-tips"},[t._v("预计金额："),n("v-uni-text",{staticClass:"text-blue"},[t._v(t._s(t.total(t.day,t.price)))]),t._v("积分")],1)]:t._e()],2),n("v-uni-view",{staticClass:"cu-modal",class:"urltypeModal"==t.modalName?"show":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.hideModal.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-dialog",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i)}}},[n("v-uni-radio-group",{staticClass:"block",on:{change:function(i){arguments[0]=i=t.$handleEvent(i),t.RadioChange.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"cu-list menu text-left"},t._l(t.urltypeList,(function(i,e){return n("v-uni-view",{key:e,staticClass:"cu-item"},[n("v-uni-label",{staticClass:"flex justify-between align-center flex-sub"},[n("v-uni-view",{staticClass:"flex-sub"},[t._v(t._s(i.name))]),n("v-uni-radio",{staticClass:"round",class:t.urltype==Number(i.id)?"checked":"",attrs:{checked:t.urltype==Number(i.id),value:i.id}})],1)],1)})),1)],1)],1)],1),0==t.isLoading?n("v-uni-view",{staticClass:"loading"},[n("v-uni-view",{staticClass:"loading-main"},[n("v-uni-image",{attrs:{src:e("14d6")}})],1)],1):t._e()],1)},a=[]},4051:function(t,i,e){"use strict";e.r(i);var n=e("01eb"),a=e("94d2");for(var s in a)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return a[t]}))}(s);var o=e("f0c5"),u=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"543b7312",null,!1,n["a"],void 0);i["default"]=u.exports},"94d2":function(t,i,e){"use strict";e.r(i);var n=e("9957"),a=e.n(n);for(var s in n)["default"].indexOf(s)<0&&function(t){e.d(i,t,(function(){return n[t]}))}(s);i["default"]=a.a},9957:function(t,i,e){"use strict";e("7a82"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,e("d401"),e("d3b7"),e("25f0"),e("c975"),e("fb6a"),e("a9e3"),e("e9c4");var n=e("625a"),a={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,modalName:"",token:"",aid:null,name:"",intro:"",url:"",imgurl:"",type:0,urltype:1,day:"",price:0,typeList:[{name:"文章推流广告",id:0},{name:"横幅广告",id:1},{name:"启动图广告",id:2}],urltypeList:[{name:"APP内打开",id:"0"},{name:"浏览器打开",id:"1"}],post:"add",isLoading:0}},onPullDownRefresh:function(){},onShow:function(){},onLoad:function(t){n.localStorage.getItem("token")&&(this.token=n.localStorage.getItem("token")),t.type&&(this.type=t.type),t.post&&(this.post=t.post,"edit"==this.post&&(this.aid=t.aid,this.getAdsInfo())),this.getAdsConfig()},methods:{total:function(t,i){if(""!=t){var e=t*i;return e}return 0},showModal:function(t){this.modalName=t.currentTarget.dataset.target},hideModal:function(t){this.modalName=null},RadioChange:function(t){this.urltype=t.detail.value,this.modalName=null},back:function(){uni.navigateBack({delta:1})},isRealNum:function(t){return""!==t&&null!=t&&!isNaN(t)},limit:function(t,i){if(this.isRealNum(t)){var e=t.toString();if(-1!=e.indexOf(".")){var n=e.split("."),a=n[0],s=n[1];s.length>i&&(s=s.slice(0,i)),e=Number(a)+"."+s,t=e}}else t=t.substr(0,t.length-1),t=this.isRealNum(t)?t:"";return t},imgUpload:function(){var t=this;uni.chooseImage({count:1,sourceType:["album","camera"],success:function(i){uni.showLoading({title:"加载中"});var e=i.tempFilePaths,n=uni.uploadFile({url:t.$API.upload(),filePath:e[0],name:"file",formData:{token:t.token},success:function(i){setTimeout((function(){uni.hideLoading()}),1e3);var e=JSON.parse(i.data);uni.showToast({title:e.msg,icon:"none"}),1==e.code&&(t.imgurl=e.data.url)},fail:function(){setTimeout((function(){uni.hideLoading()}),1e3)}});n.onProgressUpdate((function(t){}))}})},getAdsConfig:function(){var t=this;t.$Net.request({url:t.$API.adsConfig(),header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){1==i.data.code&&(0==t.type&&(t.price=i.data.data.pushAdsPrice),1==t.type&&(t.price=i.data.data.bannerAdsPrice),2==t.type&&(t.price=i.data.data.startAdsPrice));setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)},fail:function(i){setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)}})},getAdsInfo:function(){var t=this,i={id:t.aid,token:t.token};t.$Net.request({url:t.$API.adsInfo(),data:i,header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){uni.stopPullDownRefresh(),i.data.name&&(t.name=i.data.name,t.intro=i.data.intro,t.url=i.data.url,t.imgurl=i.data.img,t.type=i.data.type,t.urltype=i.data.urltype)},fail:function(t){uni.stopPullDownRefresh()}})},submit:function(){var t=this;if(""==t.name||""==t.imgurl||""==t.intro||""==t.day||""==t.url)return uni.showToast({title:"请完成表单填写",icon:"none",duration:1e3,position:"bottom"}),!1;var i={name:t.name,type:t.type,img:t.imgurl,intro:t.intro,urltype:t.urltype,url:t.url};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.addAds(),data:{params:JSON.stringify(t.$API.removeObjectEmptyKey(i)),day:t.day,token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:i.data.msg,icon:"none"}),1==i.data.code)setTimeout((function(){t.back()}),1e3)},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})},edit:function(){var t=this;if(""==t.name||""==t.imgurl||""==t.intro||""==t.url)return uni.showToast({title:"请完成表单填写",icon:"none",duration:1e3,position:"bottom"}),!1;var i={aid:t.aid,name:t.name,type:t.type,img:t.imgurl,intro:t.intro,urltype:t.urltype,url:t.url};uni.showLoading({title:"加载中"}),t.$Net.request({url:t.$API.editAds(),data:{params:JSON.stringify(t.$API.removeObjectEmptyKey(i)),token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(i){if(setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:i.data.msg,icon:"none"}),1==i.data.code)setTimeout((function(){t.back()}),1e3)},fail:function(t){setTimeout((function(){uni.hideLoading()}),1e3),uni.showToast({title:"网络开小差了哦",icon:"none"}),uni.stopPullDownRefresh()}})}}};i.default=a}}]);