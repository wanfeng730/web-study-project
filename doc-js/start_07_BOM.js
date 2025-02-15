// BOM: Browse Object Model 浏览器对象模型（缺乏标准，兼容性比较差）
// 顶级对象为 window
// 作用是浏览器窗口交互
// 浏览器厂商各自定义的，没有统一规范，容易出现兼容性问题
// window对象包括：document(DOM), location, navigation, screen, history
// js中定义的全局变量和方法都被加载到了window中，可以从window中获取，js中也可以省略window前缀，就是常规的变量写法

var v1 = 'wanfeng';
console.log(window.v1);

console.log(window);

// 窗口事件

// 加载事件DOMContentLoaded（在DOM加载完成时调用，此时未加载图片、样式表、falsh等）
// DOMContentLoaded常用于图片或样式资源很多时，提前加载交互效果，
window.addEventListener('DOMContentLoaded', function(e){
    console.log('start DOMContentLoaded1: ' + e);
})
// 加载事件onload（在html，样式，脚本文件都加载完后调用该事件）
window.addEventListener('load', function(e){
    console.log('start onload 1:' + e);
})
window.addEventListener('load', function(e){
    console.log('start onload 2:' + e);
})
// 调整窗口大小事件
window.addEventListener('resize', function(e){
    console.log('start resize 1:');
    console.log(e);
    // 获取当前窗口宽度，高度
    console.log(window.innerWidth, window.innerHeight);
})


// 定时器，一定时间后调用一次函数
// 使用变量区分不同的定时器
// window.setTimeout(function, millis)    millis默认为0
var timer1 = setTimeout(f1, 2000);
function f1(){
    console.log('f1');
}
var timer2 = setTimeout(() => {
    console.log('f2');
}, 3000);
// 停止定时器
clearTimeout(timer2);

// 定时器，每间隔一段时间调用一次函数
var interval1 = setInterval((e) => {
    console.log('interval');
    console.log(e);
}, 1000);
// 停止间隔定时器
clearInterval(interval1);
// var interval2 = setInterval((e) => {
//     console.log('interval');
// }, 1000);

var time = prompt('set seconds:');
var endTime = Date.now() + time * 1000;
console.log('endTime', endTime);
var interval3 = setInterval(() => {
    var millis = endTime - Date.now()
    console.log('剩余时间：' + Math.floor(millis/1000) + 's');
}, 1000);
