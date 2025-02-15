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
    
}

// 事件对象的常用属性和方法
var div1 = document.getElementById('divLevel1');
div1.addEventListener('click', function(e){
    // 获取触发事件的元素
    console.log(e.target);
    // 获取事件类型
    console.log(e.type);
    // 阻止默认行为(标准写法)，例如链接跳转
    e.preventDefault();
    // 阻止冒泡（事件不会再向上级传播）
    // 意义：冒泡行为有好处也会有坏处，合理利用阻止冒泡的方式可以实现特定的需求
    e.stopPropagation();
});

// 事件委托，在jQuery中称为事件委派
// 原理：不给每个子节点设置事件函数，而是将时间统一设置在父节点上，利用冒泡原理即可实现所有子节点也设置了这个事件函数的效果
// 只操作了一次DOM，明显提高了性能
var ul1 = document.querySelector('.ul1');
ul1.addEventListener('click', function(e){
    console.log(e.target);
    e.target.style.backgroundColor = 'blue';
})

// 常用鼠标事件
// contextmenu: 右键菜单
ul1.addEventListener('contextmenu', function(e){
    // 阻止contextmenu事件的行为
    e.preventDefault();
});
// selectstart：选中文字
ul1.addEventListener('selectstart', function(e){
    e.preventDefault();
})

// 鼠标事件对象
ul1.addEventListener('click', function(e){
    // PointerEvent 
    console.log(e);
    // 浏览器窗口可视区的坐标(可以看到的视区的左上角为0,0)
    console.log(e.clientX, e.clientY);
    // 文档页面的坐标（整个页面左上角为0,0）
    console.log(e.pageX, e.pageY);
    // 电脑屏幕的坐标
    console.log(e.screenX, e.screenY);
})

// 鼠标事件对象，鼠标移动
var imgDiv1 = document.getElementById('img-div1');
var img1 = document.getElementById('img1');
console.log(img1.style);
imgDiv1.addEventListener('mousemove', function(e){
    // 修改图片位置(图片需要是绝对定位，position: absolute)
    var x = e.pageX;
    var y = e.pageY;
    console.log('pos:(' + x + ',' +y+ ')');
    img1.style.top = y + 'px';
    img1.style.left = x + 'px';
})

// 键盘事件
// 案件按下时触发
document.addEventListener('keydown', function(e){
    console.log('keydown event');
    console.log(e);
    // 获取按键键位
    console.log(e.key);
    // 获取键位编码ascii（开发中常用该属性区分键位）
    console.log(e.keyCode);
})
// 按键弹起时触发
document.addEventListener('keyup', function(e){
    console.log('keyup event');
    console.log(e);
})