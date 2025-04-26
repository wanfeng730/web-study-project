<!--  -->

<template>
<div class="defaultBorderClass divMargin">
    <span>组件名称：{{componentName}}</span><br>
    <span>用户：{{username}}</span> <br>
    <span>状态：{{status}}</span><br>
    <button @click="startHahaha()">触发hahaha事件</button>
</div>
</template>

<script>
import { userConfig } from '@/UserMethods';

export default {
    name: 'UserInfoCustomEvent',
    data(){
        return{
            componentName: '自定义事件'
        }
    },
    methods:{
        sendStatus(){
            this.getCustomEventData(this.status);
        },
        startHahaha(){
            // 触发该组件绑定的hahaha自定义事件
            // this.$emit(eventName, data)
            this.$emit('hahaha', '那刻夏');
        }
    },
    props:['getCustomEventData'],
    mixins: [userConfig]
}
</script>

<style scoped>

</style>
