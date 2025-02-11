// Document Object Model: 处理html的文档接口。可以通过接口改变html的结构，内容，样式等

// 根据id获取元素
var link1 = document.getElementById('link1');
console.log(link1);
console.log(typeof link1);
console.dir(link1);

// 根据标签名获取元素，返回数组
var arr1 = document.getElementsByTagName('p')
console.log(arr1);
console.log(arr1[2]);

// 根据类名获取元素，返回数组
var arr2 = document.getElementsByClassName('appLink');
console.log(arr2);

// 根据选择器获取元素，返回第一个
var v3 = document.querySelector('.appLink');
console.log(v3);
// 根据选择器获取元素，返回所有
var arr4 = document.querySelectorAll('.appLink');
console.log(arr4);

// 获取body元素
var v5 = document.body;
console.log(v5);

// 获取html元素
var v6 = document.documentElement;
console.log(v6);




// 事件三要素：事件源、事件类型，事件处理函数
// 按钮点击事件
var button1 = document.getElementById('button1');
var title = document.getElementsByClassName('titleClass')[0];
var desc = document.getElementsByClassName('descClass')[0];
button1.onclick = function(){
    // 修改元素内容，不识别html标签，会去除
    var text = title.innerText;
    console.log(text);
    text = text + new Date();
    title.innerText = text;
    // 修改元素内容，识别html标签（推荐使用）
    desc.innerHTML = new Date();

    // alert('button1点击事件');
}
