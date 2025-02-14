// 事件

// 传统注册方式：同一个元素同一个事件只能绑定一个函数
var h1 = document.getElementsByClassName('titleClass')[0];
h1.onclick = function(){
    alert('h1 click');
}

// 方法监听注册方式 W3C推荐：同一个元素同一个事件可以绑定多个函数，绑定的多个函数按绑定顺序依次执行
// element.addEventListener(事件类型, 事件函数)
var button1 = document.getElementById('button1');
button1.addEventListener('click', function(){
    alert('add event listener func!');
})

function func2(){
    alert('add event listener func 2222!');
}
button1.addEventListener('click', func2);
// 删除绑定的事件
button1.removeEventListener('click', func2);

// DOM事件流的捕获：根据文档层级加载顺序（document -> html -> div）捕获对应的事件执行
// DOM事件流的冒泡：从发生事件的函数从当前层级往上查找，对应的事件执行
// 1. 实际开发中我们基本都使用冒泡
// 2. 有些事件是没有冒泡的，比如onblur, onfocus, onmouseenter, onmouseleave


// 事件对象：事件处理函数中的参数，包含触发事件的各种信息，比如鼠标点击位置，事件绑定的元素等
var input1 = document.getElementById('input1');
input1.onclick = function(e) {
    console.log(e);
    // 事件对象的常用属性和方法

}


