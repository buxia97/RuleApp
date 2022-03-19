<wxs module="handler">
// 行内标签列表
var inlineTags = {
  abbr: true,
  b: true,
  big: true,
  code: true,
  del: true,
  em: true,
  i: true,
  ins: true,
  label: true,
  q: true,
  small: true,
  span: true,
  strong: true,
  sub: true,
  sup: true
}
/**
 * @description 是否使用 rich-text 显示剩余内容
 */
module.exports = {
  use: function (item) {
    if (item.c) return false
    // 微信和 QQ 的 rich-text inline 布局无效
    return !inlineTags[item.name] && (item.attrs.style || '').indexOf('display:inline') == -1
  }
}
</wxs>
<view class="{{['_block _'+name+' '+attrs.class]}}" style="{{(attrs.style)}}" id="{{attrs.id}}"><block qq:for="{{childs}}" qq:for-item="n" qq:for-index="i" qq:key="i"><block><block qq:if="{{n.name==='img'&&(opts[1]&&!ctrl[i]||ctrl[i]<0)}}"><image class="_img" style="{{(n.attrs.style)}}" src="{{ctrl[i]<0?opts[2]:opts[1]}}" mode="widthFix"></image></block><block qq:if="{{n.name==='img'}}"><image class="{{['_img '+n.attrs.class]}}" style="{{((ctrl[i]===-1?'display:none;':'')+'width:'+(ctrl[i]||1)+'px;height:1px;'+n.attrs.style)}}" id="{{n.attrs.id}}" src="{{n.attrs.src}}" mode="{{n.h?'':'widthFix'}}" lazy-load="{{opts[0]}}" webp="{{n.webp}}" show-menu-by-longpress="{{opts[3]&&!n.attrs.ignore}}" image-menu-prevent="{{!opts[3]||n.attrs.ignore}}" data-i="{{i}}" data-event-opts="{{[['load',[['imgLoad',['$event']]]],['error',[['mediaError',['$event']]]],['tap',[['imgTap',['$event']]]],['longpress',[['imgLongTap',['$event']]]]]}}" bindload="__e" binderror="__e" catchtap="__e" bindlongpress="__e"></image></block><block qq:else><block qq:if="{{n.text}}"><text user-select="{{n.us}}" decode="{{true}}">{{n.text}}</text></block><block qq:else><block qq:if="{{n.name==='br'}}"><text>\n</text></block><block qq:else><block qq:if="{{n.name==='a'}}"><view class="{{[(n.attrs.href?'_a ':'')+n.attrs.class]}}" style="{{('display:inline;'+n.attrs.style)}}" id="{{n.attrs.id}}" hover-class="_hover" data-i="{{i}}" data-event-opts="{{[['tap',[['linkTap',['$event']]]]]}}" catchtap="__e"><node style="display:inherit;" vue-id="{{'1d2efc14-1-'+i}}" name="span" childs="{{n.children}}" opts="{{opts}}" bind:__l="__l"></node></view></block><block qq:else><block qq:if="{{n.name==='video'}}"><video class="{{[n.attrs.class]}}" style="{{(n.attrs.style)}}" id="{{n.attrs.id}}" autoplay="{{n.attrs.autoplay}}" controls="{{n.attrs.controls}}" loop="{{n.attrs.loop}}" poster="{{n.attrs.poster}}" src="{{n.src[ctrl[i]||0]}}" data-i="{{i}}" data-event-opts="{{[['play',[['play',['$event']]]],['error',[['mediaError',['$event']]]]]}}" muted="{{n.attrs.muted}}" bindplay="__e" binderror="__e"></video></block><block qq:else><block qq:if="{{n.name==='table'&&n.c||n.name==='li'}}"><view class="{{['_'+n.name+' '+n.attrs.class]}}" style="{{(n.attrs.style)}}" id="{{n.attrs.id}}"><block qq:if="{{n.name==='li'}}"><node vue-id="{{'1d2efc14-2-'+i}}" childs="{{n.children}}" opts="{{opts}}" bind:__l="__l"></node></block><block qq:else><block qq:for="{{n.children}}" qq:for-item="tbody" qq:for-index="x" qq:key="x"><view class="{{['_'+tbody.name+' '+tbody.attrs.class]}}" style="{{(tbody.attrs.style)}}"><block qq:if="{{tbody.name==='td'||tbody.name==='th'}}"><node vue-id="{{'1d2efc14-3-'+i+'-'+x}}" childs="{{tbody.children}}" opts="{{opts}}" bind:__l="__l"></node></block><block qq:else><block qq:for="{{tbody.children}}" qq:for-item="tr" qq:for-index="y" qq:key="y"><block><block qq:if="{{tr.name==='td'||tr.name==='th'}}"><view class="{{['_'+tr.name+' '+tr.attrs.class]}}" style="{{(tr.attrs.style)}}"><node vue-id="{{'1d2efc14-4-'+i+'-'+x+'-'+y}}" childs="{{tr.children}}" opts="{{opts}}" bind:__l="__l"></node></view></block><block qq:else><view class="{{['_'+tr.name+' '+tr.attrs.class]}}" style="{{(tr.attrs.style)}}"><block qq:for="{{tr.children}}" qq:for-item="td" qq:for-index="z" qq:key="z"><view class="{{['_'+td.name+' '+td.attrs.class]}}" style="{{(td.attrs.style)}}"><node vue-id="{{'1d2efc14-5-'+i+'-'+x+'-'+y+'-'+z}}" childs="{{td.children}}" opts="{{opts}}" bind:__l="__l"></node></view></block></view></block></block></block></block></view></block></block></view></block><block qq:else><block qq:if="{{n.name=='audio'}}"><my-audio class="{{[n.attrs.class]}}" style="{{(n.attrs.style)}}" vue-id="{{'1d2efc14-6-'+i}}" aid="{{n.attrs.id}}" author="{{n.attrs.author}}" controls="{{n.attrs.controls}}" autoplay="{{n.attrs.autoplay}}" loop="{{n.attrs.loop}}" name="{{n.attrs.name}}" poster="{{n.attrs.poster}}" src="{{n.src[ctrl[i]||0]}}" data-i="{{i}}" data-source="audio" data-event-opts="{{[['^play',[['play']]],['^error',[['mediaError']]]]}}" bind:play="__e" bind:error="__e" bind:__l="__l"></my-audio></block><block qq:else><block qq:if="{{handler.use(n)}}"><rich-text style="{{(n.f)}}" id="{{n.attrs.id}}" nodes="{{[n]}}"></rich-text></block><block qq:else><block qq:if="{{n.c===2}}"><view class="{{['_block _'+n.name+' '+n.attrs.class]}}" style="{{(n.f+';'+n.attrs.style)}}" id="{{n.attrs.id}}"><block qq:for="{{n.children}}" qq:for-item="n2" qq:for-index="j" qq:key="j"><node style="{{(n2.f)}}" vue-id="{{'1d2efc14-7-'+i+'-'+j}}" name="{{n2.name}}" attrs="{{n2.attrs}}" childs="{{n2.children}}" opts="{{opts}}" bind:__l="__l"></node></block></view></block><block qq:else><node style="{{(n.f)}}" vue-id="{{'1d2efc14-8-'+i}}" name="{{n.name}}" attrs="{{n.attrs}}" childs="{{n.children}}" opts="{{opts}}" bind:__l="__l"></node></block></block></block></block></block></block></block></block></block></block></block></view>