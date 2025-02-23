// ES6 Module 模块
// 主流的两种：ESM，CommonJS


// ESM导入模块使用

// // 默认导出的功能
// import m1 from './modules/m1.js'
// // 非默认导出的功能需要手动声明
// import {URL, getCurrentDate} from './modules/m1.js'

// console.log(m1);
// console.log(URL);
// console.log(getCurrentDate);


// CommonJS导入模块使用
// 文件js后缀可以省略
// 浏览器无法直接运行，需要用node命令执行
const c1 = require('./modules/c1');
console.log(c1);

