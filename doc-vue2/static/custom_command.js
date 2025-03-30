// Vue Instance
const vue = new Vue({
    el: '#root',
    data:{
       ffbindDefaultValue: 'custom-wanfeng'
    },
    methods:{
        
    },
    computed:{
        
    },
    watch:{
        
    },
    // 自定义指令
    directives:{
        // 自定义指令接收的参数
        bigger(element, binding){
            console.log('bigger...');
            // 指令所在的真实DOM元素
            console.log(element);
            console.log(binding);
            console.log(binding.value);
            // 根据指令的值修改文字大小
            element.style.fontSize = binding.value + 'px';
        },
        ffbind:{
            // 指令与元素绑定时调用
            bind(element, binding){
                // 指令的函数内的this是windows对象!
                console.log(this);
                console.log(element, binding);
                // binding.value必须是表达式或变量
                element.value = binding.value
            },
            // 指令元素插入页面时调用
            inserted(element, binding){
                console.log('inserted...');
            },
            // 指令所在模版被重新解析后调用
            update(element, binding){
                console.log('update...');
                element.value = binding.value
            }
        }
    }
});
console.log(vue);