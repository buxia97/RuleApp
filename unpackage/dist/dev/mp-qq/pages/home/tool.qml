<view><view class="header" style="{{'height:'+(CustomBar+'px')+';'}}"><view class="cu-bar bg-white" style="{{'height:'+(CustomBar+'px')+';'+('padding-top:'+(StatusBar+'px')+';')}}"><view data-event-opts="{{[['tap',[['toSearch',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-search"></text></view><view class="content text-bold" style="{{'top:'+(StatusBar+'px')+';'}}">工具库</view></view></view><view style="{{'padding:'+(NavBar+'px 10px 0px 10px')+';'}}"></view><view class="data-box"><view class="cu-bar bg-white"><view class="action data-box-title"><text class="cuIcon-titles text-rule"></text>常用功能</view><view class="action more"></view></view><view class="index-sort grid col-4"><view class="index-sort-box"><waves vue-id="ce06d62e-1" itemClass="butclass" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['toPage',['使用攻略','$0'],['raiders']]]]]}}" class="index-sort-main" bindtap="__e"><view class="index-sort-i"><text class="cuIcon-appreciate"></text></view><view class="index-sort-text">使用攻略</view></view></waves></view><view class="index-sort-box"><waves vue-id="ce06d62e-2" itemClass="butclass" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['toLink',['../user/post?type=add']]]]]}}" class="index-sort-main" bindtap="__e"><view class="index-sort-i"><text class="cuIcon-edit"></text></view><view class="index-sort-text">发布文章</view></view></waves></view><view class="index-sort-box"><waves vue-id="ce06d62e-3" itemClass="butclass" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['toRand',['$event']]]]]}}" class="index-sort-main" bindtap="__e"><view class="index-sort-i"><text class="cuIcon-refresh"></text></view><view class="index-sort-text">随机阅读</view></view></waves></view><view class="index-sort-box"><waves vue-id="ce06d62e-4" itemClass="butclass" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['toCategoryContents',['#精选#','$0'],['featured']]]]]}}" class="index-sort-main" bindtap="__e"><view class="index-sort-i"><text class="cuIcon-choicenessfill"></text></view><view class="index-sort-text">精选作品</view></view></waves></view></view></view><view class="data-box"><view class="cu-bar bg-white"><view class="action data-box-title"><text class="cuIcon-titles text-rule"></text>创意区</view><view class="action more"></view></view><view class="index-sort grid col-4"><view class="index-sort-box"><waves vue-id="ce06d62e-5" itemClass="butclass" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['toImagetoday',['$event']]]]]}}" class="index-sort-main" bindtap="__e"><view class="index-sort-i"><text class="cuIcon-picfill"></text></view><view class="index-sort-text">图库</view></view></waves></view><view class="index-sort-box"><waves vue-id="ce06d62e-6" itemClass="butclass" bind:__l="__l" vue-slots="{{['default']}}"><view class="index-sort-main"><view class="index-sort-i"><text class="cuIcon-read"></text></view><view class="index-sort-text">广告位</view></view></waves></view><view class="index-sort-box"><waves vue-id="ce06d62e-7" itemClass="butclass" bind:__l="__l" vue-slots="{{['default']}}"><view data-event-opts="{{[['tap',[['toShop',['$event']]]]]}}" class="index-sort-main" bindtap="__e"><view class="index-sort-i"><text class="cuIcon-taoxiaopu"></text></view><view class="index-sort-text">积分商城</view></view></waves></view></view></view><view class="data-box"><view class="cu-bar bg-white"><view class="action data-box-title"><text class="cuIcon-titles text-rule"></text>实用工具</view><view data-event-opts="{{[['tap',[['toCategoryContents',['实用工具','$0'],['toolid']]]]]}}" class="action more" bindtap="__e"><text>阅读更多</text><text class="cuIcon-right"></text></view></view><view class="cu-card article no-card"><block qq:for="{{$root.l0}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view data-event-opts="{{[['tap',[['toInfo',['$0'],[[['toolList','',index]]]]]]]}}" class="cu-item shadow" bindtap="__e"><view class="content"><block qq:if="{{item.$orig.images.length>0}}"><image src="{{item.$orig.images[0]}}" mode="aspectFill"></image></block><view class="desc"><view class="text-content">{{item.$orig.title}}</view><view class="text-i"><block qq:if="{{item.$orig.category.length>0}}"><view class="cu-tag bg-blue light sm round">{{item.$orig.category[0].name}}</view></block><view class="cu-tag data-time">{{item.m0}}</view></view></view></view></view></block></view></view><block qq:if="{{isLoading==0}}"><view class="loading"><view class="loading-main"><image src="../../static/loading.gif"></image></view></view></block></view>