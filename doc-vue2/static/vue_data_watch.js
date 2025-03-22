
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