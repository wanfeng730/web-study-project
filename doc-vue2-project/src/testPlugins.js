export default {
    install(Vue){
        console.log('testPlugins install...');
        // 传参为Vue对象（构造函数）
        console.log(Vue);

        // 全局过滤器
        // Vue.filter('', function(value){})

        // 全局自定义指令
        // Vue.directive('', {})

        // 定义混入mixin
        // Vue.mixin({});

    }
}