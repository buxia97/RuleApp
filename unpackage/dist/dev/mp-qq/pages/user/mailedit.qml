<view class="user"><view class="header" style="{{'height:'+(CustomBar+'px')+';'}}"><view class="cu-bar bg-white" style="{{'height:'+(CustomBar+'px')+';'+('padding-top:'+(StatusBar+'px')+';')}}"><view data-event-opts="{{[['tap',[['back',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-back"></text></view><view class="content text-bold" style="{{'top:'+(StatusBar+'px')+';'}}">个人设置</view></view></view><view style="{{'padding:'+(NavBar+'px 10px 0px 10px')+';'}}"></view><form><view class="cu-form-group margin-top"><view class="title">用户名</view><input name="input" disabled="disabled" value="{{name}}"/></view><view class="cu-form-group" margin-top="{{true}}"><view class="title">新邮箱</view><input placeholder="请输入新邮箱" name="input" data-event-opts="{{[['input',[['__set_model',['','mail','$event',[]]]]]]}}" value="{{mail}}" bindinput="__e"/></view><view class="cu-form-group"><view class="title">验证码</view><input placeholder="填写新邮箱验证码" name="input" data-event-opts="{{[['input',[['__set_model',['','code','$event',[]]]]]]}}" value="{{code}}" bindinput="__e"/><block qq:if="{{show}}"><view data-event-opts="{{[['tap',[['RegSendCode',['$event']]]]]}}" class="sendcode text-blue" bindtap="__e">发送</view></block><block qq:if="{{!show}}"><view class="sendcode text-gray">{{times+"s"}}</view></block></view><view data-event-opts="{{[['tap',[['userEdit',['$event']]]]]}}" class="post-update bg-blue" bindtap="__e"><text class="cuIcon-upload"></text></view></form></view>