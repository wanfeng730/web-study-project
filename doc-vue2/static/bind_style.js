const vue = new Vue({
    el: '#root',
    data(){
        return {
            title: 'TitleValue',
            textClassName: 'bule-class',
            textClassObj:{
                redClass: true,
                buleClass: false
            },
            styleObject:{
                fontSize: '40px'
            },
            isShow: 1
        } 
    },
    methods:{
        changeTextRed(){
            console.log('change red');
            this.textClassName = 'redClass'
        },
        changeTextBlue(){
            console.log('change blue');
            this.textClassName = 'buleClass'
        },
        changeIsShow(){
            this.isShow++;
        }
    }
})