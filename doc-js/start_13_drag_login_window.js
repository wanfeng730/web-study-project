var showLoginButton = document.getElementById('showLoginButton');
var login = document.getElementsByClassName('login')[0];
var loginClose = document.getElementsByClassName('login-close');

showLoginButton.addEventListener('click', function(e){
    login.style.display = 'block';
});

loginClose.addEventListener('click', function(e){
    login.style.display = 'none';
});
