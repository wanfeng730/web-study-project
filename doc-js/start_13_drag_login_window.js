var showLoginButton = document.getElementById('showLoginButton');
var login = document.getElementsByClassName('login')[0];
var loginClose = document.getElementsByClassName('login-close')[0];
var loginMask = document.getElementById('login-mask');
var loginTitle = document.getElementsByClassName('login-title')[0];

showLoginButton.addEventListener('click', function(e){
    loginMask.style.display = 'block';
    login.style.display = 'block';
    
});

console.log(loginClose);
loginClose.addEventListener('click', function(e){
    loginMask.style.display = 'none';
    login.style.display = 'none';
});

loginTitle.addEventListener('mousedown', function(e){
    console.log(e);
    // 获取按下时鼠标在登录框内的坐标
    var x = e.pageX - login.offsetLeft;
    var y = e.pageY - login.offsetTop;


    var loginMove = function(e){
        // 在页面上移动时，鼠标在页面的坐标减去在登录框的坐标，就是登录框移动后的坐标
        login.style.left = e.pageX - x + 'px';
        login.style.top = e.pageY - y + 'px';
        console.log(e.pageX - x, e.pageY - y);
    }

    document.addEventListener('mousemove', loginMove);
    document.addEventListener('mouseup', function(e){
        console.log('mouseup');
        document.removeEventListener('mousemove', loginMove);
    })
});

loginTitle.addEventListener('mouseup', function(e){

});
