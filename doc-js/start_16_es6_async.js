// ES6 Async

// 1. 返回Promise对象的函数
function asyncTask(){
    return new Promise((resolve, reject) => { 
        const isSuccess = true;
        if(isSuccess){
            resolve('任务2成功');
        }else{
            reject('任务2失败');
        }
    });
}

async function main() {
    console.log('任务1成功');

    // await：等待函数执行完毕
    const data2 = await asyncTask();
    console.log(`任务2执行结果：${data2}`);

    console.log('任务3执行');
}

main();

