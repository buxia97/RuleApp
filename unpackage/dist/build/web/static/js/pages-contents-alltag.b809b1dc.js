(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contents-alltag"],{"4fc3":function(t,e,a){"use strict";a.r(e);var i=a("a942"),s=a("e093");for(var n in s)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(n);var o=a("f0c5"),c=Object(o["a"])(s["default"],i["b"],i["c"],!1,null,"55333568",null,!1,i["a"],void 0);e["default"]=c.exports},a942:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"user",class:t.AppStyle},[i("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"})],1),i("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("全部标签"),"edit"==t.type?[t._v("(多选)")]:t._e()],2),"edit"==t.type?[i("v-uni-view",{staticClass:"action",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cu-btn bg-blue text-sm radius"},[t._v("确定")])],1)]:t._e()],2)],1),i("v-uni-view",{style:[{padding:t.NavBar+"px 10px 0px 10px"}]}),i("v-uni-view",{staticClass:"data-box"},[i("v-uni-view",{staticClass:"cu-bar bg-white search"},[i("v-uni-view",{staticClass:"search-form round"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{type:"text",placeholder:"搜索标签"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.searchTag.apply(void 0,arguments)}},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1)],1),0==t.tagList.length?i("v-uni-view",{staticClass:"no-data"},[i("v-uni-text",{staticClass:"cuIcon-text"}),t._v("暂时没有数据")],1):t._e(),i("v-uni-view",{staticClass:"tags"},t._l(t.tagList,(function(e,a){return i("v-uni-text",{key:a,staticClass:"tags-box",class:1==e.active?"active":"",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.toCategoryContents("#"+e.name+"#",e.mid,a)}}},[t._v(t._s(e.name))])})),1),t.tagList.length>0?i("v-uni-view",{staticClass:"load-more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.loadMore.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e()],1),0==t.isLoading?i("v-uni-view",{staticClass:"loading"},[i("v-uni-view",{staticClass:"loading-main"},[i("v-uni-image",{attrs:{src:a("14d6")}})],1)],1):t._e()],1)},s=[]},e093:function(t,e,a){"use strict";a.r(e);var i=a("fc53"),s=a.n(i);for(var n in i)["default"].indexOf(n)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(n);e["default"]=s.a},fc53:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e9c4"),a("a9e3"),a("14d9"),a("99af");var i=a("625a"),s={data:function(){return{StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,tagList:[],searchText:"",isLoading:0,type:"all",curNum:0,moreText:"加载更多",page:1}},onPullDownRefresh:function(){},onShow:function(){},onLoad:function(t){this.getTagList(!1),t.type&&(this.type=t.type)},methods:{back:function(){uni.navigateBack({delta:1})},loadMore:function(){this.moreText="正在加载中...",0==this.isLoad&&this.getTagList(!0)},getTagList:function(t){var e=this,a=e.page;t&&a++,e.$Net.request({url:e.$API.getMetasList(),data:{searchParams:JSON.stringify(e.$API.removeObjectEmptyKey({type:"tag"})),limit:50,page:a,searchKey:e.searchText,order:"order"},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(a){if(e.isLoading=1,e.isLoad=0,1==a.data.code){var s=a.data.data;if(s.length>0){var n=[];for(var o in s){if(s[o].active=0,"edit"==e.type&&i.localStorage.getItem("ctag")){var c=i.localStorage.getItem("ctag"),u=c.split(",");for(var r in u)if(""!=u[r]){var l=Number(u[r]);s[o].mid==l&&(s[o].active=1,e.curNum++)}}n.push(s[o])}t?(e.page++,e.tagList=e.tagList.concat(n)):e.tagList=n,e.moreText="加载更多"}else e.moreText="没有更多数据了"}setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300)},fail:function(t){setTimeout((function(){e.isLoading=1,clearTimeout("timer")}),300);e.isLoading=1,e.isLoad=0,e.moreText="加载更多"}})},toCategoryContents:function(t,e,a){if("all"==this.type){uni.navigateTo({url:"/pages/contents/contentlist?title="+t+"&type=meta&id="+e})}else if(1==this.tagList[a].active)this.curNum--,this.tagList[a].active=0;else{if(this.curNum>4)return uni.showToast({title:"最多选择五个标签",icon:"none"}),!1;this.curNum++,this.tagList[a].active=1}},searchTag:function(){this.searchText;this.page=1,this.getTagList()},submit:function(){var t="",e=this.tagList;for(var a in e)1==e[a].active&&(t+=","+e[a].mid);if(""==t)return uni.showToast({title:"请选择分类",icon:"none"}),!1;i.localStorage.setItem("ctag",t);this.tagList;for(var a in e)this.tagList[a].active=0;this.back()}}};e.default=s}}]);