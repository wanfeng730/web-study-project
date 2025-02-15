var button1 = document.getElementById('button1');
var replace = document.getElementById('replace');
var reload = document.getElementById('reload');

// location对象 记录网页URL等信息


console.log(location);

// 当前页面链接，修改就是跳转效果
console.log(location.href);

// url带的请求参数
console.log(location.search);

// 获取url中的参数
var params = location.search.substring(1).split('&');
console.log(params);
for (var i = 0; i < params.length; i++) {
    var keyValue = params[i].split('=');
    console.log(keyValue[0]);
    console.log(keyValue[1]);
    console.log(typeof keyValue[1]);
}

// 跳转，重定向页面
button1.addEventListener('click', function(e){
    location.assign('https://www.bilibili.com');
});

// 跳转，替换当前页面，不记录历史，不能后退页面
replace.addEventListener('click', function(e){
    location.replace('https://www.bilibili.com');
});

// 刷新页面
console.log(reload);
reload.addEventListener('click', function(e){
    console.log('reload');
    location.reload();
    // 强制刷新
    // location.reload(true);
})