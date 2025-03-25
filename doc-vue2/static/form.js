var vue = new Vue({
    el: '#root',
    data:{
        // data中初识的值对应到表单元素的value后可以设定默认值
        username: '',
        password: '',
        sex: '2',
        hobby: [],
        area: 'jinhua',
        desc: '默认信息',
        agreeUserPaper: false,
    }
});
console.log(vue);