// Vue Instance
const vue = new Vue({
    el: '#root',
    data:{
       opacity: 1,
       number: 0,
    },
    methods:{
        start(){
            setInterval(() => {
                vue.opacity -= 0.05;
                // console.log(`opacity=${vue.opacity}`);
                if (vue.opacity <= 0) {
                    vue.opacity = 1;
                }
            }, 100);
        },
        incrNumber(){
            this.number++;
        }
    },
    computed:{
        
    },
    watch:{
        
    },
    // 初始化生命周期、事件完成后调用
    beforeCreate(){
        console.log('LifeCycle: beforeCreate');
    },
    // 初始化数据监测、数据代理后调用（data中的数据、methods中的方法） 
    created(){
        console.log('LifeCycle: created');
    },
    // 解析模版，生成虚拟DOM在内存中后调用
    beforeMount(){
        console.log('LifeCycle: beforeMount');
    },
    // vue在第一次渲染真实的DOM元素后调用mounted函数 
    mounted() {
        console.log('LifeCycle: mounted');
        // setInterval(() => {
        //     this.opacity -= 0.05;
        //     // console.log(`opacity=${vue.opacity}`);
        //     if (this.opacity <= 0){
        //         this.opacity = 1;
        //     }
        // }, 100);
    },
    // 页面依赖的数据发生改变，重新渲染前调用（此时vue实例的数据更新，页面未更新）
    beforeUpdate(){
        console.log('LifeCycle: beforeUpdate');

    },
    // 页面依赖的数据发生改变，重新渲染后调用（此时页面的数据已更新）
    updated(){
        console.log('LifeCycle: updated');
    },
    beforeDestroy(){
        console.log('LifeCycle: beforeDestroy');
    },
    destroyed(){
        console.log('LifeCycle: destroyed');
    }
});
console.log(vue);

// 通过外部的定时器实现，不推荐
// setInterval(() => {
//     vue.opacity -= 0.05;
//     // console.log(`opacity=${vue.opacity}`);
//     if(vue.opacity <= 0){
//         vue.opacity = 1;
//     }
// }, 100);