// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

console.log(Vue.config);

// 创建vue实例
var vue = new Vue({
    // 指定Vue加载的元素，使用选择器表示
    el: '#root',
    // 定义一些自定义的数据，在el元素中使用，data变量用双花括号使用，例如 {{username}}
    data: {
        username: '晚风A',
        unitCode: 'SimpleProto',
        url: 'https://www.bilibili.com',
        var1: 56,
        
    }
});
// 构建vue对象后 页面上的DevTools插件已经可以生效
console.log(vue);

// 获取vue实例中定义的数据，需要在变量前加$
console.log(vue.$data);
console.log(vue.$el);

