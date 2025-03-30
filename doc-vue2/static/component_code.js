
// 创建用户信息组件实例
const userInfoComponent = Vue.extend({
    // 定义组件不需要写el，组件一定是在vue中服务的
    // 定义组件的html结构
    template:`
        <div class="userInfo">
            <span>用户：{{username}}</span> <br>
            <span>状态：{{status}}</span>
        </div>
    `,
    // 组件的data必须使用函数式，若为对象式会与其他组件冲突，因为key相同
    data() {
        return {
            username: 'wanfeng',
            status: 'study...'
        }
    }
})

const searchComponent = Vue.extend({
    template:`
        <div>
            搜索：
            <input type="text" :placeholder="holderMessage">
        </div>
    `,
    data() {
        return {
            holderMessage: '请输入搜索...'
        }
    }
})

// 全局注册组件
Vue.component('user', userInfoComponent);
Vue.component('search', searchComponent);

// Vue Instance
const vue = new Vue({
    el: '#root',
    // 实例局部注册组件   组件名：Vue组件实例
    components:{
        userInfo: userInfoComponent,
        search: searchComponent
    }
});
console.log(vue);

