<!--  -->

<template>
<div class="defaultBorderClass">
    <span>组件名称：{{componantName}}</span><br>
    <span>用户：{{username}}</span> <br>
    <span>状态：{{status}}</span><br>
    <span>密码：{{password}}</span><br>
    <span>年龄：{{age}}</span><br>
    <button @click="showStatus()">提示用户状态</button>
</div>
</template>

<script>
import { userConfig } from '@/UserMethods';

export default {
    name: 'UserInfoMixin',
    mixins: [userConfig]
}
</script>

<style scoped>

</style>
