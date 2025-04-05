<!-- 用户信息组件 -->

<template>
    <div class="defaultBorderClass">
        <span>用户：{{username}}</span> <br>
        <span>状态：{{status}}</span>
        <button @click="showStatus()">提示用户状态</button>
    </div>
</template>

<script>
    // 使用export默认暴露一些数据或方法
    export default {
        name: 'UserInfo',
        data () {
            return {
                username: 'wanfeng',
                status: 'study...'
            }
        },
        methods:{
            showStatus(){
                alert(this.status);
            }
        }
    }
</script>

<style scoped>
    .defaultBorderClass{
        border: 1px solid white;
        border-radius: 10px;
        width: 300px;
    }
</style>

