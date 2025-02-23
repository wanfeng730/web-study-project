// es6新特性

// 使用let定义变量，与var相同
let count = 0;

// 常量，不能被修改
const BASE_URL = 'http://localhost:8888/api';

// 作用域，分割代码块划分区域，也可以避免变量冲突混乱
{
    let a1 = 1;
}

// 模版字符串
let str1 = `count=${count}
this is next line`;


// 解构赋值（批量赋值）
let [s2, s3, s4] = ['AAA', 'BBB', 'ccc'];

// 解构赋值，以键的形式赋值。   ...otherInfo表示获取剩余的数据
const {username, age: userAge, ...otherInfo} = {
    username: 'wanfeng',
    age: 24,
    gender: 1,
    desc: '前端开发'
}
console.log(username, userAge, otherInfo);

// 扩展运算符：获取数组展开的所有元素
// 按照开发习惯，我们通常将拿过来的数据放在后面，以突显变量自身的功能，方便区分
const arr1 = [1, 3]
const arr2 = [74, 7, 0]
const arr3 = ['A3', ...arr1, ...arr2];
console.log(arr3);

// 扩展运算符：获取对象展开的所有键值对
// 按照开发习惯，我们通常将拿过来的数据放在后面，以突显变量自身的功能，方便区分
const o1 = {
    username: 'wanfeng'
}
const o2 = {
    account: 'wanfeng730'
}
const o3 = {
    start: 1,
    end: 5,
    ...o1,
    ...o2
}
console.log(o3);


// Array.from() 伪数组转为真实数据，以方便使用数组的一些方法，如push，forEach
function func1(){
    let argArr = Array.from(arguments);
    argArr.push('wanfeng');
    console.log(argArr);

    argArr.forEach(function(item){
        console.log(item);
    })
}
func1(1, 3, 4);

// Object.assign({}, o3) 对象的浅拷贝
const o4 = Object.assign({}, o3);
console.log(o4);
const o5 = Object.assign({}, o3, {title:'GGG'});
console.log(o5);

// Class 类的声明和使用
class Archive{
    // 构造器
    constructor (archivalId, title){
        this.archivalId = archivalId;
        this.title = title;
    }
    // 自定义方法
    logInfo(){
        console.log(`Archive[archivalId=${this.archivalId}, title=${this.title}]`);
    }
}

class Record extends Archive{
    constructor(archivalId, title, archiveType){
        super(archivalId, title);
        this.archiveType = archiveType;
    }

    // 重写父类的方法
    logInfo(){
        console.log(`Record[archivalId=${this.archivalId}, title=${this.title}, archiveType=${this.archiveType}]`);
    }

    getArchiveType(){
        return this.archiveType;
    }
}

let archive1 = new Archive('A001', 'wanfeng-KJL');
console.log(archive1);
archive1.logInfo();

let record1 = new Record('R001', 'wanfeng-HJK', 'record');
record1.logInfo()
console.log(record1);
console.log(record1.getArchiveType());

// 箭头函数
document.addEventListener('mousedown', (e) => console.log(e));
document.addEventListener('mouseup', (e) => {
    console.log("mouseup event");
    console.log(e);
});

let func2 = (s1, s2, ...other) => {
    console.log(s1 + s2);
    console.log(other);
}
func2(1, 4, 'wanfeng', 'CMN');


// Promise 同步和异步
// resolve为成功的处理函数，reject为失败拒绝时的处理函数
const promise = new Promise((resolve, reject) => {
    // resolve，在成功时将成功的数据传值给resolve函数
    // resolve('wanfeng');
    reject('error info reject!');
});

// then方法
//      第一个函数参数接收resolve函数中成功的数据处理
//      第二个函数参数接收reject函数失败的数据处理，如果没有定义第二个函数，则为找catch
// catch方法接收reject函数中失败的数据，并进行同步的处理
promise.then(data => {
    console.log(data);
}, err => {
    console.log(`then second func: ${err}`);
    throw new Error('任务失败终止!');
}).catch(err => {
    console.log(`carch func: ${err}`);
})

// Promise异步任务嵌套同步处理
promise.then(data => {
    console.log(data);
    return new Promise((resolve, reject) => {
        resolve('wanfeng success~');
    });
}).then(data2 => {
    // data2接收上一个then函数返回的Promise对象的执行结果
    console.log(data2);
    return new Promise((resolve, reject) => {
        resolve('wanfeng SUCCESS~');
    });
}).then(data3 => {
    // data3接收上一个then函数返回的Promise对象的执行结果
    console.log(data3);
})


