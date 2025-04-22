<!--  -->

<template>
<div class="defaultBorderClass">
    <span>组件名称：{{componentName}}</span><br>
    <span>用户：{{username}}</span> <br>
    <span>状态：{{status}}</span><br>
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
