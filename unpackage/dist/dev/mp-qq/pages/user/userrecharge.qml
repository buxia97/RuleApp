<view class="user"><view class="header" style="{{'height:'+(CustomBar+'px')+';'}}"><view class="cu-bar bg-white" style="{{'height:'+(CustomBar+'px')+';'+('padding-top:'+(StatusBar+'px')+';')}}"><view data-event-opts="{{[['tap',[['back',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-back"></text></view><view class="content text-bold" style="{{'top:'+(StatusBar+'px')+';'}}">在线充值</view><view class="action"></view></view></view><view style="{{'padding:'+(NavBar+'px 10px 0px 10px')+';'}}"></view><view class="data-box userrecharge"><view class="userrecharge-type"></view><block qq:if="{{isToPay==0}}"><block><view class="userrecharge-form"><input placeholder="请输入充值金额(￥),最低5元" name="input" data-event-opts="{{[['input',[['__set_model',['','num','$event',[]]]]]]}}" value="{{num}}" bindinput="__e"/><button data-event-opts="{{[['tap',[['pay',['$event']]]]]}}" class="cu-btn bg-yellow radius" bindtap="__e">确定充值</button></view></block></block><block qq:if="{{isToPay==1}}"><block><view class="userrecharge-code"><image src="{{codeImg}}"></image></view><view class="userrecharge-btn"><text data-event-opts="{{[['tap',[['dtImg',['$event']]]]]}}" class="cu-btn bg-cyan radius" bindtap="__e">保存二维码</text><text data-event-opts="{{[['tap',[['toAlipay']]]]}}" class="cu-btn bg-yellow radius" bindtap="__e">打开支付宝</text></view></block></block><view class="userrecharge-intro"><view class="userrecharge-intro-title">充值注意：</view><view class="userrecharge-intro-text">1.如果支付宝未成功开启，可尝试保存二维码再进行扫码支付，部分设备可能无权限打开支付宝。</view><view class="userrecharge-intro-text">2.充值金额与网站积分的比例为<text class="text-red text-bold">1:100</text>，最低充值金额<text class="text-red text-bold">5</text>元。</view><view class="userrecharge-intro-text">3.如果充值金额未到账，请查看账户中的充值记录，并立即反馈。</view></view></view></view>