<view class="user"><view class="header" style="{{'height:'+(CustomBar+'px')+';'}}"><view class="cu-bar bg-white" style="{{'height:'+(CustomBar+'px')+';'+('padding-top:'+(StatusBar+'px')+';')}}"><view data-event-opts="{{[['tap',[['back',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-back"></text></view><view class="content text-bold" style="{{'top:'+(StatusBar+'px')+';'}}">发布评论</view></view></view><view style="{{'padding:'+(NavBar+'px 10px 0px 10px')+';'}}"></view><form><view class="cu-form-group margin-top"><block qq:if="{{isreply>0}}"><view class="title">回复：</view></block><block qq:else><view class="title">文章：</view></block><input name="input" disabled value="{{title}}"/></view><view class="cu-form-group"><textarea maxlength="-1" placeholder="如首次发布评论,将审核后再给予显示" data-event-opts="{{[['input',[['__set_model',['','text','$event',[]]]]]]}}" value="{{text}}" bindinput="__e"></textarea></view><view class="comments-owo"><text data-event-opts="{{[['tap',[['OwO',['$event']]]]]}}" class="cuIcon-emoji" bindtap="__e"></text><block qq:if="{{isOwO}}"><view class="owo"><scroll-view class="owo-list" scroll-y="{{true}}"><view class="owo-main"><block qq:for="{{owoList}}" qq:for-item="item" qq:for-index="index"><view data-event-opts="{{[['tap',[['setOwO',['$0'],[[['owoList','',index]]]]]]]}}" class="owo-lit-box" bindtap="__e"><image src="{{'/'+item.icon}}" mode="aspectFill"></image></view></block></view></scroll-view><view class="owo-type"><view data-event-opts="{{[['tap',[['toOwO',['paopao']]]]]}}" class="{{['owo-box',OwOtype=='paopao'?'cur':'']}}" bindtap="__e">泡泡</view><view data-event-opts="{{[['tap',[['toOwO',['adai']]]]]}}" class="{{['owo-box',OwOtype=='adai'?'cur':'']}}" bindtap="__e">阿呆</view><view data-event-opts="{{[['tap',[['toOwO',['alu']]]]]}}" class="{{['owo-box',OwOtype=='alu'?'cur':'']}}" bindtap="__e">阿鲁</view><view data-event-opts="{{[['tap',[['toOwO',['quyinniang']]]]]}}" class="{{['owo-box',OwOtype=='quyinniang'?'cur':'']}}" bindtap="__e">蛆音娘</view></view></view></block></view><view class="all-btn"><view class="user-btn flex flex-direction"><button data-event-opts="{{[['tap',[['commentsadd',['$event']]]]]}}" class="cu-btn bg-cyan margin-tb-sm lg" bindtap="__e">提交评论</button></view></view></form></view>