const vue = new Vue({
    el: '#root',
    data:{
        personList:[
            {
                id: '001',
                name: 'wanfeng',
                age: 25
            },
            {
                id: '002',
                name: 'xiadie',
                age: 23
            }
        ],
        archive:{
            archivalId: 'A001',
            title: '001档案',
            fileYear: 2025
        }
    },
    methods:{
        
    }
})

console.log(vue);