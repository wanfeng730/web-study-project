var vue = new Vue({
    el: '#root',
    data:{
        formData:{
            // data中初识的值对应到表单元素的value后可以设定默认值
            username: '',
            password: '',
            dayCount: 23,
            sex: '2',
            hobby: [],
            area: 'jinhua',
            desc: '默认信息',
            agreeUserPaper: false,
        }
    },
    
    methods:{
        submitInfo(){
            // 获取表单数据（即vue代理的数据），转为json字符串格式
            body = JSON.stringify(this.formData)
            console.log(body);
        }
    },
    
    
    
});
console.log(vue);