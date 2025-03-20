const vue = new Vue({
    el: '#root',
    data:{
        personList:[
            {
                id: '001',
                name: '晚风',
                age: 25
            },
            {
                id: '002',
                name: '遐蝶',
                age: 21
            },
            {
                id: '003',
                name: '万叶',
                age: 26
            }
        ],
        archive:{
            archivalId: 'A001',
            title: '001档案',
            fileYear: 2025
        },
        searchNameContent: '',
        filterPersonList: [],
        searchIdContent: ''
    },
    methods:{
        
    },
    computed:{
        // 计算属性实现过滤，定义过滤后的列表=全部数据中包含搜索内容的结果
        // get调用时机：初次调用时、所以依赖的数据发生变化时
        filterIdList: {
            get(){
                console.log('compute filterIdList');
                return this.personList.filter((item) => {
                    return item.id.indexOf(this.searchIdContent) != -1;
                })
            }
        }
    },
    watch:{
        // watch监视实现过滤，监听到搜索内容变化时修改显示过滤的列表
        searchNameContent:{
            immediate: true,
            handler(value){
                console.log('watch searchNameContent='+value);
                this.filterPersonList = this.personList.filter((item) => {
                    return item.name.indexOf(value) != -1;
                });
            }
        }
    }
})

console.log(vue);