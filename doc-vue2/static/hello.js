// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

console.log('Vue.config:', Vue.config);

// 创建vue实例
var vue = new Vue({
    // 指定Vue加载的元素，使用选择器表示
    el: '#root',

    // 定义一些自定义的数据，在el元素中使用，data变量用双花括号使用，例如 {{username}}
    // （推荐写法）data为一个函数，返回一个对象，对象中定义在自定义的变量
    data(){
        return{
            username: '晚风A',
            unitCode: 'SimpleProto',
            url: 'https://www.bilibili.com',
            var1: 56
        }
    },

    //定义一些函数,事件处理函数
    //不能写箭头函数，this的指向会变成window
    methods:{
        showInfo(event){
            console.log(event);
            // this指向Vue实例对象
            console.log(this);
        },
        showDetail(event, id){
            console.log(id);
            console.log(event);
        },
        keyupFunc(event){
            console.log(event);
            console.log(event.keyCode, event.key);
        }
    }

});
// 构建vue对象后 页面上的DevTools插件已经可以生效
console.log('Vue实例对象:', vue);

// 获取vue实例中定义的数据
console.log(vue.username);
console.log(vue.unitCode);

// 可以手动挂载元素，效果等同于Vue实例的el属性
vue.$mount('#root')

console.log(vue.$data);


let gobalTitle = 'GGG';
let data1 = {
    id: 200
}
// （推荐使用） Object.defineProperty定义对象的属性
Object.defineProperty(data1, 'title', {
    // value:'777888',
    // // 属性是否可以被遍历
    // enumerable: true,
    // // 属性是否可以被修改
    // writable: true,
    // // 属性是否可以被删除
    // configurable: true,

    // 定义获取属性值的函数getter
    get(){
        console.log('getter...');
        return gobalTitle;
    },

    // 定义获取属性值的函数getter
    set(value){
        console.log('setter...');
        gobalTitle = value;
    }
})
console.log(data1);



