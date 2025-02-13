// DOM：节点操作

var divLevel2 = document.getElementById('divLevel2');
console.log(divLevel2);

// 获取上一级父节点
console.log(divLevel2.parentNode);

// 获取所有的子节点数组 包含换行文本和元素节点
console.log(divLevel2.childNodes);
console.log(divLevel2.childNodes.length);

// 获取所有的子节点数组 只包含元素节点
console.log(divLevel2.children);
console.log(divLevel2.children.length);

// 获取第一个子节点 包含换行文本
console.log(divLevel2.firstChild);

// 获取第一个子节点 元素
console.log(divLevel2.children[0]);

// 获取最后一个子节点 包含换行文本
console.log(divLevel2.lastChild);

// 获取最后一个子节点 元素
console.log(divLevel2.children[divLevel2.children.length - 1]);

var div4 = document.getElementById('divLevel4')

// 获取上一个兄弟节点 包含换行文本
console.log(div4.previousSibling);

// 获取上一个兄弟节点 元素 (IE9以上支持)
console.log(div4.previousElementSibling);
console.log(getPrevElementSiling(div4));

// 获取下一个兄弟节点 包含换行文本
console.log(div4.nextSibling);

// 获取下一个兄弟节点 元素 (IE9以上支持)
console.log(div4.nextElementSibling);

// 自定义实现获取上一个兄弟节点，解决兼容性问题
function getPrevElementSiling(e){
    var temp = e;
    while(temp = temp.previousSibling){
        // 如果节点类型为元素则返回
        if(temp.nodeType == 1){
            return temp;
        }
    }
    return null;
}



// 创建节点
var div8 = document.createElement('div');
div8.innerHTML = 'NewDiv';

// 将创建的节点添加某个元素的末尾子节点
divLevel2.appendChild(div8);

// 将创建的节点添加到某个元素的某个子节点前面
var div9 = document.createElement('div');
div9.innerHTML = 'NewDiv2';
divLevel2.insertBefore(div9, document.getElementById('divLevel4'));

// 删除某个元素的子节点
divLevel2.removeChild(div9);

// 复制节点 浅拷贝 复制一个空的元素
divLevel2.appendChild(div9.cloneNode());

// 复制节点 深拷贝 复制一个完全一样的元素
divLevel2.appendChild(div9.cloneNode(true))


/**
 * 创建元素节点的几种方式比较
 * 1. document.write 将内容直接写入页面流，写入完成后会导致页面重绘
 * 2. innerHTML 不会导致页面重绘，创建多个元素效率高（采用数组形式拼接）
 * 3. document.createElement 效率比innerHTML略低，但结构清晰
 */

