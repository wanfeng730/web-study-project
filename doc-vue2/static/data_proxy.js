// 数据代理

// Vue中的数据代理：将data对象中的属性复制一份到Vue中，方便开发人员使用

var vue = new Vue({
    el: '#root',
    data(){
        return{
            username: '晚风A',
            unitCode: 'SimpleProto',
            url: 'https://www.bilibili.com',
            var1: 56
            
        }
    }
});
console.log(vue);
console.log(vue.$data);
console.log(vue._data);
