<!-- App根组件 -->

<template>
    <div>
        <!-- ref属性代表该元素/组件被标记，可用vue.$refs获取所有的ref标记的元素/组件 -->
        <!-- <span ref="span1">span短语内容</span> -->

        <!-- <UserInfo ref="userinfo"></UserInfo> -->
        <!-- <Search ref="search"></Search> -->

        <!-- <button @click="showRef()">输出ref内容</button> -->

        <!-- props用于指定传入组件的data数据 -->
        <!-- <UserInfo password="自定义1" :age="14-9"></UserInfo> -->

        <!-- <UserInfoMixin></UserInfoMixin> -->

        <!-- 自定义事件 绑定在vc上，可通过vc.$emit(事件名)触发这个时间 -->
        <!-- 若在组件上绑定默认的事件，需要加上.native后缀 -->
        <!-- <UserInfoCustomEvent ref="userInfoCustomEvent" @click.native="clickCustomEvent" v-on:hahaha="hahahaFunc" :getCustomEventData="getCustomEventData"></UserInfoCustomEvent> -->

        <!-- 待办事项列表 -->
        <Todo></Todo>

        <button @click="testArrayReduceFunction()">测试数组的Reduce方法</button>

        <!-- 动画效果 进入，离开 -->
        <AnimationInOut></AnimationInOut>

        <!-- 集成第三方动画样式库 -->
        <AnimateUse></AnimateUse>
    </div>
</template>

<script>
// 引入组件
import UserInfo from './components/UserInfo.vue';
import Search from './components/Search.vue';
import UserInfoMixin from './components/UserInfoMixin.vue';
import Todo from './components/todo/Todo.vue';
import UserInfoCustomEvent from './components/UserInfoCustomEvent.vue';
import AnimationInOut from './components/animation/AnimationInOut.vue';
import AnimateUse from './components/animation/AnimateUse.vue';

// 暴露当前组件的属性和方法
export default {
    name: 'App',
    data () {
        return {
            todoItemList:[
                {
                    id: '001',
                    name: '事项1',
                    isDone: true
                },
                {
                    id: '002',
                    name: '事项2',
                    isDone: false
                },
                {
                    id: '003',
                    name: '事项3',
                    isDone: true
                },
            ]
        }
    },
    methods:{
        showRef(){
            console.log(this.$refs);
            console.log(this.$refs.search);
        },
        testArrayReduceFunction(){
            // finalRes是reduce函数的最终返回值，即最后一次遍历的返回值
            var finalRes = this.todoItemList.reduce((pre, currenItem)=>{
                // pre是上一次遍历函数的返回值， currentItem是遍历当前的数组元素
                console.log(`pre=${pre}, current=`, currenItem);
                return pre + 1;
            }, 0); // 0 为初始值，即遍历第一次时的pre值
            console.log('reduce function final result: ', finalRes);
        },
        getCustomEventData(value){
            console.log('getCustomEventData: ', value);
        },
        hahahaFunc(username){
            console.log(username + '：哈哈哈哈哈哈哈哈哈哈');
        },
        clickCustomEvent(){
            alert('clickCustomEvent');
        }
    },
    components:{
        UserInfo,
        Search,
        UserInfoMixin,
        Todo,
        UserInfoCustomEvent,
        AnimationInOut,
        AnimateUse
    },
    mounted(){
        console.log('App mounted');
        // 获取组件实例对象，设置自定义事件被触发时执行的函数
        this.$refs.userInfoCustomEvent.$on('hahaha', () => {
            console.log('hahaha事件回调 this:', this);
        })
    }
}
</script>

<!-- 根组件配置的样式，需要应用于下级所有组件，此处不用scoped -->
<style>
    html{
        background: #22252A;
        color: aliceblue;
        font-weight: bold;
    }
    /* 全局样式 */
    *{
        font-family: '苹方-简', 'PingFang SC', monospace;
    }

    div{
        /* margin-bottom: 20px; */
        /* border: 1px solid pink;
        border-radius: 5px;
        border-style: dotted; */
        padding: 5px;
    }
    .flex_center_div{
        display: flex;
        flex-direction: row;
        align-items: center;
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
    .divMargin{
        margin-top: 5px;
        margin-bottom: 5px;
    }

    [v-cloak]{
        display: none;
    }
</style>
