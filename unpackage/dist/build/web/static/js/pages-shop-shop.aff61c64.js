(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shop-shop"],{8876:function(t,s,e){"use strict";e.d(s,"b",(function(){return i})),e.d(s,"c",(function(){return o})),e.d(s,"a",(function(){}));var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("v-uni-view",{staticClass:"user",class:t.$store.state.AppStyle},[i("v-uni-view",{staticClass:"header",style:[{height:t.CustomBar+"px"}]},[i("v-uni-view",{staticClass:"cu-bar bg-white",style:{height:t.CustomBar+"px","padding-top":t.StatusBar+"px"}},[i("v-uni-view",{staticClass:"action",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.back.apply(void 0,arguments)}}},[i("v-uni-text",{staticClass:"cuIcon-back"})],1),i("v-uni-view",{staticClass:"content text-bold",style:[{top:t.StatusBar+"px"}]},[t._v("商城")]),i("v-uni-view",{staticClass:"action"})],1)],1),i("v-uni-view",{style:[{padding:t.NavBar-5+"px 10px 0px 10px"}]}),i("v-uni-view",{staticClass:"data-box shop-operate"},[i("v-uni-view",{staticClass:"cu-bar bg-white search"},[i("v-uni-view",{staticClass:"search-form round"},[i("v-uni-text",{staticClass:"cuIcon-search"}),i("v-uni-input",{attrs:{type:"text",placeholder:"搜索商品"},on:{input:function(s){arguments[0]=s=t.$handleEvent(s),t.searchShop.apply(void 0,arguments)}},model:{value:t.searchText,callback:function(s){t.searchText=s},expression:"searchText"}})],1)],1),i("v-uni-view",{staticClass:"shop-sort shop-filter"},[i("v-uni-view",{staticClass:"grid col-2 text-center"},[i("v-uni-view",{staticClass:"shop-filter-box text-bold",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.sortShow=!t.sortShow,t.subtypeShow=!1}}},[0==t.sort?[t._v("全部大类")]:[t._v(t._s(t.sortText))],i("v-uni-text",{staticClass:"cuIcon-unfold margin-left-sm"})],2),i("v-uni-view",{staticClass:"shop-filter-box text-bold",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.subtypeShow=!t.subtypeShow,t.sortShow=!1}}},[0==t.sort||""==t.subtypeText?[t._v("全部")]:[t._v(t._s(t.subtypeText))],i("v-uni-text",{staticClass:"cuIcon-unfold margin-left-sm"})],2)],1),t.sortShow?i("v-uni-view",{staticClass:"shop-sort-list"},[i("v-uni-view",{staticClass:"shop-sort-list-box",class:0==t.sort?"text-blue":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.setSort(null)}}},[t._v("全部")]),t._l(t.sortList,(function(s,e){return i("v-uni-view",{staticClass:"shop-sort-list-box",class:s.id==t.sort?"text-blue":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSort(s)}}},[t._v(t._s(s.name))])}))],2):t._e(),t.subtypeShow?i("v-uni-view",{staticClass:"shop-sort-list"},[i("v-uni-view",{staticClass:"shop-sort-list-box",class:0==t.subtype?"text-blue":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.setSubtype(null)}}},[t._v("全部")]),t._l(t.subtypeList,(function(s,e){return i("v-uni-view",{staticClass:"shop-sort-list-box",class:s.id==t.subtype?"text-blue":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setSubtype(s)}}},[t._v(t._s(s.name))])}))],2):t._e()],1),t.sortShow||t.subtypeShow?i("v-uni-view",{staticClass:"shop-sort-list-bg",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.sortShow=!1,t.subtypeShow=!1}}}):t._e(),i("v-uni-view",{staticClass:"shop-sort shop-type"},[i("v-uni-view",{staticClass:"shop-sort-box",class:"0"==t.type?"active":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.setType(0)}}},[i("v-uni-text",{staticClass:"cuIcon-apps margin-right-xs"}),t._v("全部")],1),i("v-uni-view",{staticClass:"shop-sort-box",class:"1"==t.type?"active":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.setType(1)}}},[t._v("实物")]),i("v-uni-view",{staticClass:"shop-sort-box",class:"2"==t.type?"active":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.setType(2)}}},[t._v("代码")]),i("v-uni-view",{staticClass:"shop-sort-box",class:"3"==t.type?"active":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.setType(3)}}},[t._v("软件")]),i("v-uni-view",{staticClass:"shop-sort-box",class:"4"==t.type?"active":"",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.setType(4)}}},[t._v("付费阅读")])],1)],1),i("v-uni-view",{staticClass:"data-box"},[0==t.shopList.length?i("v-uni-view",{staticClass:"no-data"},[t._v("暂时没有商品")]):t._e(),i("v-uni-view",{staticClass:"shop-list"},[t._l(t.shopList,(function(t,s){return[i("shopItem",{key:s+"_0",attrs:{item:t}})]}))],2)],1),t.shopList.length>0?i("v-uni-view",{staticClass:"load-more",on:{click:function(s){arguments[0]=s=t.$handleEvent(s),t.loadMore.apply(void 0,arguments)}}},[i("v-uni-text",[t._v(t._s(t.moreText))])],1):t._e(),0==t.isLoading?i("v-uni-view",{staticClass:"loading"},[i("v-uni-view",{staticClass:"loading-main"},[i("v-uni-image",{attrs:{src:e("14d6")}})],1)],1):t._e()],1)},o=[]},9382:function(t,s,e){"use strict";e("7a82");var i=e("ee27").default;Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0,e("14d9"),e("4e82"),e("e9c4"),e("99af");var o=i(e("fc11")),a=i(e("74ee")),n=e("625a"),u={data:function(){var t;return t={StatusBar:this.StatusBar,CustomBar:this.CustomBar,NavBar:this.StatusBar+this.CustomBar,AppStyle:this.$store.state.AppStyle,userInfo:null,token:"",sort:0,subtype:0,shopList:[],isLoad:0,page:1,moreText:"加载更多",type:0,isLoading:0,searchText:"",shopTypelist:[],sortShow:!1},(0,o.default)(t,"sort",0),(0,o.default)(t,"sortText",""),(0,o.default)(t,"sortList",[]),(0,o.default)(t,"subtypeShow",!1),(0,o.default)(t,"subtype",0),(0,o.default)(t,"subtypeText",""),(0,o.default)(t,"subtypeList",[]),t},onPullDownRefresh:function(){this.page=1,this.getShopList(!1);setTimeout((function(){uni.stopPullDownRefresh()}),1e3)},onReachBottom:function(){0==this.isLoad&&this.loadMore()},onShow:function(){n.localStorage.getItem("userinfo")&&(this.userInfo=JSON.parse(n.localStorage.getItem("userinfo")),this.userInfo.style="background-image:url("+this.userInfo.avatar+");"),n.localStorage.getItem("token")&&(this.token=n.localStorage.getItem("token")),this.isLoad=0,this.page=1,this.allCache(),this.userStatus()},onLoad:function(){this.getShopTypeList(),this.getShopList(!1)},methods:{back:function(){uni.navigateBack({delta:1})},searchShop:function(){this.page=1,this.getShopList()},loadMore:function(){this.moreText="正在加载中...",this.isLoad=1,this.getShopList(!0)},setType:function(t){this.type=t,this.page=1,this.getShopList()},allCache:function(){n.localStorage.getItem(this.type+"_shopList")&&(this.shopList=JSON.parse(n.localStorage.getItem(this.type+"_shopList")))},getShopTypeList:function(){var t=this;t.$Net.request({url:t.$API.shopTypeList(),data:{limit:50,page:1,token:t.token},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(s){if(uni.stopPullDownRefresh(),t.isLoad=0,1==s.data.code){t.shopTypelist=s.data.data;var e=s.data.data,i=[];for(var o in e)0==e[o].parent&&i.push(e[o]);if(t.sortList=i,t.sort>0)for(var a in i)i[a].id==t.sort&&t.setSort(i[a],!0)}setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)},fail:function(s){uni.stopPullDownRefresh(),t.moreText="加载更多",t.isLoad=0;setTimeout((function(){t.isLoading=1,clearTimeout("timer")}),300)}})},setSort:function(t,s){if(this.sortShow=!1,null==t)return this.sort=0,this.sortText="",this.subtype=0,this.subtypeText="",this.page=1,this.getShopList(),!1;if(this.sort=t.id,this.sortText=t.name,0!=this.sort){var e=this.shopTypelist,i=[];for(var o in e)e[o].parent==this.sort&&i.push(e[o]);this.subtypeList=i,this.subtype=0,this.subtypeText=""}this.getShopList()},setSubtype:function(t){if(this.subtypeShow=!1,null==t)return this.subtype=0,this.subtypeText="",this.page=1,this.getShopList(),!1;this.subtype=t.id,this.subtypeText=t.name,this.getShopList()},getShopList:function(t){var s=this,e={status:"1",isView:"1"};0!=s.type&&(e.type=s.type),0!=s.sort&&(e.sort=s.sort),0!=s.subtype&&(e.subtype=s.subtype);var i=s.page;t&&i++,s.$Net.request({url:s.$API.shopList(),data:{searchParams:JSON.stringify(s.$API.removeObjectEmptyKey(e)),searchKey:s.searchText,limit:6,page:i},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(e){setTimeout((function(){s.isLoading=1,clearTimeout("timer")}),300);if(s.isLoad=0,s.moreText="加载更多",1==e.data.code){var i=e.data.data;0==i.length&&(s.moreText="没有更多数据了"),t?i.length>0&&(s.page++,s.shopList=s.shopList.concat(i)):s.shopList=i,n.localStorage.setItem(s.type+"_shopList",JSON.stringify(s.shopList))}},fail:function(t){s.moreText="加载更多",s.isLoad=0,uni.showToast({title:"网络开小差了哦",icon:"none"});setTimeout((function(){s.isLoading=1,clearTimeout("timer")}),300)}})},shopInfo:function(t){uni.navigateTo({url:"/pages/shop/shopinfo?sid="+t})},userStatus:function(){var t=this,s="";if(n.localStorage.getItem("userinfo")){var e=JSON.parse(n.localStorage.getItem("userinfo"));s=e.token}t.$Net.request({url:t.$API.userStatus(),data:{token:s},header:{"Content-Type":"application/x-www-form-urlencoded"},method:"get",dataType:"json",success:function(s){1==s.data.code&&(t.vip=s.data.data.vip,t.isvip=s.data.data.isvip)},fail:function(t){uni.showToast({title:"网络开小差了哦",icon:"none"})}})}},components:{waves:a.default}};s.default=u},a2af:function(t,s,e){"use strict";e.r(s);var i=e("8876"),o=e("d601");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(s,t,(function(){return o[t]}))}(a);var n=e("f0c5"),u=Object(n["a"])(o["default"],i["b"],i["c"],!1,null,"015963b2",null,!1,i["a"],void 0);s["default"]=u.exports},d601:function(t,s,e){"use strict";e.r(s);var i=e("9382"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(s,t,(function(){return i[t]}))}(a);s["default"]=o.a}}]);