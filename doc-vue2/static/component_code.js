const hobbyComponent = {
    template: `
        <div class="defaultBorderClass">
            <span>爱好1：{{hobby1}}</span> <br>
            <span>爱好2：{{hobby2}}</span>
        </div>
    `,
    data() {
        return {
            hobby1: 'code',
            hobby2: 'ride'
        }
    }
}

// 创建用户信息组件实例
const userInfoComponent = Vue.extend({
    // 指定组件名称，在开发者工具中显示该名称（不是引入时的标签名称）
    name: 'userInfoComp',
    // 定义组件不需要写el，组件一定是在vue中服务的
    // 定义组件的html结构
    template:`
        <div class="defaultBorderClass">
            <span>用户：{{username}}</span> <br>
            <span>状态：{{status}}</span>
            <hobby></hobby>
        </div>
    `,
    // 组件的data必须使用函数式，若为对象式会与其他组件冲突，因为key相同
    data() {
        return {
            username: 'wanfeng',
            status: 'study...'
        }
    },
    components:{
        hobby: hobbyComponent
    }
})

console.log('userInfoComponent:', userInfoComponent);

// 创建搜索框组件实例（简写形式）
const searchComponent = {
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
}



// 全局注册组件
Vue.component('user', userInfoComponent);
Vue.component('search', searchComponent);

// Vue Instance
const vue = new Vue({
    el: '#root',
    // 实例局部注册组件   组件名：Vue组件实例
    /*
        组件名称命名规约：
        一个单词则全小写，多个单词则短横连接、大驼峰格式（需要脚手架cli环境）
        不要和html已有的元素同名
    */
    components:{
        'user-info': userInfoComponent,
        search: searchComponent
    }
});
console.log(vue);

