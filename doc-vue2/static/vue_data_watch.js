
// 观察者对象（用于监测数据改变）
function Observer(object){
    const keys = Object.keys(object);
    keys.forEach((key)=>{
        Object.defineProperty(this, key, {
            get(){
                console.log('get...');
                return object[key];
            },
            set(newVal){
                console.log('set...');
                object[key] = newVal;
            }
        })
    })
}

let archive = {
    archivalId: 'A001',
    title: 'A0001档案'
}

const obs = new Observer(archive);
console.log(obs);


const vue = new Vue({
    el: '#root',
    data:{
        archive:{
            archivalId: 'A001',
            title: 'A0001档案',
            linkPaths: [
                '/档案库',
                '/专题库'
            ]
        }
    },
    methods:{
        setType(){
            console.log('set type...');
            Vue.set(this.archive, 'type', 'Record');
        },
        updateLinkPaths(){
            /**
             Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：
                push()
                pop()
                shift()
                unshift()
                splice()
                sort()
                reverse()
             */
            this.archive.linkPaths.push('/业务系统收集');
        }
    },
    computed:{
        
    },
    watch:{
        
    }
});
console.log(vue);

// 给vue中增加数据要用响应式写法，追加数据只能往vue中的数据对象中加，不能在data中直接加入
Vue.set(vue.archive, 'parentId', '0');
