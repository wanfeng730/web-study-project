// offset 偏移量的使用

var ul1 = document.getElementById('ul1');
var li1List = document.getElementsByClassName('li1');
var div1 = document.getElementById('img-div1');

console.log(li1List);
for (var i = 0; i < li1List.length; i++) {
    var li1 = li1List[i];
    // 获取带有定位的父元素位置，若没有返回body
    console.log(li1.offsetParent);
    // 相对于父元素的位置（父元素要有relative定位）
    console.log('offsetTop='+li1.offsetTop+'  offsetLeft='+li1.offsetLeft);
    // 获得元素大小，包含padding+border+width
    console.log('offsetHeight='+li1.offsetHeight+'  offsetWidth='+li1.offsetWidth);
}