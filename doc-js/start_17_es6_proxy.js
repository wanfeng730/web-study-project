// ES6 Proxy 代理对象
// 1. 可以监控数据更新，数据同时渲染到页面上

var title = document.querySelector('.titleClass');

const o1 = {
    username: 'wanfeng',
    age: 19
}

const proxy1 = new Proxy(o1, {
    // 获取对象数据的处理函数
    get(target, property){
        console.log(`Proxy get target=${target} property=${property}`);
        return o1[property];

    },
    // 修改对象数据的处理函数
    set(target, property, value){
        console.log(`Proxy get target=${target} property=${property} value=${value}`);
        o1[property] = value;
        // 将数据设置到元素上
        title.textContent = o1.username;
    }
})


console.log(proxy1.username);
proxy1.username = '6787';
