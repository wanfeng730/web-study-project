<!-- App根组件 -->

<template>
    <div>
        <!-- ref属性代表该元素/组件被标记，可用vue.$refs获取所有的ref标记的元素/组件 -->
        <span ref="span1">span短语内容</span>
        <UserInfo ref="userinfo"></UserInfo>
        <Search ref="search"></Search>
        <button @click="showRef()">输出ref内容</button>

        <!-- props用于指定传入组件的data数据 -->
        <UserInfo password="自定义1" :age="14-9"></UserInfo>
    </div>
</template>

<script>
    // 引入组件
    import UserInfo from './components/UserInfo.vue';
    import Search from './components/Search.vue';

    // 暴露当前组件的属性和方法
    export default {
        name: 'App',
        data () {
            return {
                
            }
        },
        methods:{
            showRef(){
                console.log(this.$refs);
                console.log(this.$refs.search);
            }
        },
        components:{
            UserInfo,
            Search
        }
    }
</script>

<style scoped>
    html{
        background: #22252A;
        color: aliceblue;
        font-weight: bold;
    }
    /* 全局样式 */
    *{
        font-family: '苹方-简', 'PingFang SC', monospace;
        font-size: 18px;
    }

    div{
        margin-bottom: 20px;
        border-left: 4px solid pink;
        padding: 10px;
    }
    #root{
        border: none;
    }
    button{
        background-color: pink;
        width: 160px;
        height: 40px;
        border: 1px solid gray;
        border-radius: 10px;
    }
    input{
        height: 25px;
        border-radius: 5px;
        border: 2px solid skyblue;
    }
    span{
        font-weight: bold;
        font-style: italic;
        background-color: gray;
    }

    li{
        background-color: gainsboro;
        border-radius: 3px;
        width: 300px;
        height: 20px;
        font-size: 15px;
        padding: 10px;
        margin-bottom: 5px;
        color: black;
        list-style-type: none;
    }

    .buleClass{
        color: blue;
    }
    .redClass{
        color: red;
    }
    .defaultBorderClass{
        border: 1px solid white;
        border-radius: 10px;
        width: 300px;
    }

    [v-cloak]{
        display: none;
    }
</style>
