<!--  -->

<template>
    <div>
        搜索：
        <input type="text" :placeholder="holderMessage">
    </div>
</template>

<script>
    export default {
        name: 'Search',
        data () {
            return {
                holderMessage: '请输入搜索...'
            }
        }
    }
</script>

<style scoped>

</style>
