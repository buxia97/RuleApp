<view class="user"><view class="header" style="{{'height:'+(CustomBar+'px')+';'}}"><view class="cu-bar bg-white" style="{{'height:'+(CustomBar+'px')+';'+('padding-top:'+(StatusBar+'px')+';')}}"><view data-event-opts="{{[['tap',[['back',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-back"></text></view><view class="content text-bold" style="{{'top:'+(StatusBar+'px')+';'}}">商品管理</view></view></view><view style="{{'padding:'+(NavBar+'px 10px 0px 10px')+';'}}"></view><view class="data-box"><block qq:if="{{shopList.length==0}}"><view class="no-data">暂时没有商品</view></block><view class="shop-list grid col-2"><block qq:for="{{shopList}}" qq:for-item="item" qq:for-index="index"><view class="shop-box"><view class="shop-main"><block qq:if="{{item.status==0}}"><text class="bg-orange shop-status">待审核</text></block><block qq:if="{{item.status==1}}"><text class="bg-green shop-status">已上架</text></block><block qq:if="{{item.status==2}}"><text class="bg-red shop-status">已禁用</text></block><view data-event-opts="{{[['tap',[['editShop',['$0'],[[['shopList','',index,'id']]]]]]]}}" class="shop-img" bindtap="__e"><image src="{{item.imgurl}}" mode="widthFix"></image></view><view class="shop-title">{{''+item.title+''}}</view><view class="shop-info text-center"><block qq:if="{{item.status==0}}"><text data-event-opts="{{[['tap',[['auditShop',['$0'],[[['shopList','',index,'id']]]]]]]}}" class="shop-btn text-yellow" bindtap="__e">审核</text></block><text data-event-opts="{{[['tap',[['deleteShop',['$0'],[[['shopList','',index,'id']]]]]]]}}" class="shop-btn text-red" bindtap="__e">删除</text></view></view></view></block></view></view><block qq:if="{{shopList.length>0}}"><view data-event-opts="{{[['tap',[['loadMore',['$event']]]]]}}" class="load-more" bindtap="__e"><text>{{moreText}}</text></view></block><block qq:if="{{isLoading==0}}"><view class="loading"><view class="loading-main"><image src="../../static/loading.gif"></image></view></view></block></view>