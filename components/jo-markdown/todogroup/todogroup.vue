<template>
<uni-shadow-root class="towxml-todogroup-todogroup"><checkbox-group v-if="todoData.tag === 'todogroup'" :class="todoData.attr.class" @change="_change">
    <block v-for="(item,index1) in (todoData.child)" :key="index1" v-if="todoData.child">
        <label v-if="item.tag" :class="item.attr.class">
            <block v-for="(item,index2) in (item.child)" :key="index2" v-if="item.child">
                
                <checkbox v-if="item.tag === 'checkbox'" :class="item.attr.class" :value="item.attr.value" :data-_e="item" :checked="item.attr.checked" :disabled="item.attr.disabled"></checkbox>

                
                <decode v-if="item.child" :nodes="item" @click.stop="_tap($event, item)"></decode>
            </block>
        </label>
    </block>
</checkbox-group></uni-shadow-root>
</template>

<script>
export default {
	name: 'Todogroup',
	options: {
		styleIsolation: 'shared'
	},
	props: {
		todoData: {
			type: Object,
			value: {}
		}
	},
	components:{
		Decode: ()=> import('../decode.vue')
	},
	data(){
		return {
			
		}
	},
	methods: {
		_change:function(...arg){
			if(global._events && typeof global._events.change === 'function'){
				global._events.change(...arg);
			}
		},
		_tap(e, item){
			e.currentTarget.dataset.$el = e.currentTarget.dataset.$el?e.currentTarget.dataset.$el.concat([item]):[item];
			this.$emit('click',e);
		},
	}
}
</script>
<style platform="mp-weixin">
.h2w__todolist {
    display:block;
}
</style>