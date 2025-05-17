<!-- 用户信息组件 -->

<template>
    <div class="defaultBorderClass divMargin">
        <span>用户：{{username}}</span> <br>
        <span>状态：{{status}}</span><br>
        <span>密码：{{password}}</span><br>
        <span>年龄：{{age}}</span><br>
        <button @click="showStatus()"></button>
    </div>
</template>

<script>
    import {userConfig} from '../UserMethods'
    // 使用export默认暴露一些数据或方法
    export default {
        name: 'UserInfo',
        // props用于指定传入组件的data数据
        // props:['username', 'status'],
        props:{
            password:{
                // 属性类型
                type: String,
                // 是否必填
                required: false,
                // 默认值
                default: '12345'
            },
            age: {
                type: Number,
                required: false
            }
        },
        // 如果mixin混合里的数据或方法已存在，则不会覆盖
        // 如果是生命周期函数，则都会生效
        mixins:[userConfig],
    }
</script>

<style scoped lang="less">
</style>

