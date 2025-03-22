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
        searchIdContent: '',
        sortType: 0
    },
    methods:{
        // 修改对象时把整个对象赋值后，会进行新对象的创建，此时vue不会监测到数据改变
        updateObject(){
            console.log('updateObject');
            this.personList[0] = {
                id: '001',
                name: '晚风-UPDATE',
                age: 26
            };
        }
    },
    computed:{
        // 计算属性实现过滤，定义过滤后的列表=全部数据中包含搜索内容的结果
        // get调用时机：初次调用时、所以依赖的数据发生变化时
        showPersonList: {
            get(){
                console.log('compute showPersonList');
                list = this.personList.filter((item) => {
                    return item.id.indexOf(this.searchIdContent) != -1;
                });
                // 年龄升序
                if(this.sortType == 1){
                    list = list.sort((p1, p2) => p1.age - p2.age);
                }
                // 姓名降序
                if(this.sortType == 2){
                    list = list.sort((p1, p2) => p2.name.localeCompare(p1.name));
                }
                return list;
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