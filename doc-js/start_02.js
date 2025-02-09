// if语句
if(3 < 5){
    console.log('if语句1执行');
} else if(3 > 5){
    console.log('if语句2执行');
} else{
    console.log('if语句3执行');
}


// 函数声明
function eat(){
    console.log("Eat...");
}

function run(arg1, arg2){
    console.log("arg1="+arg1);
    console.log("arg2="+arg2);
    return arg1 + arg2;
}

// 匿名函数
var func1 = function(){
    console.log('func1...');
}

// 匿名函数带参数和返回值
var func2 = function(arg1){
    return 'func2 result:' + arg1;
}

// 函数调用
eat();
var res = run('A', 'B');
console.log(res);

console.log(func1);
console.log(typeof func1);

console.log(func2);
console.log(func2('wanfeng'));




// 对象的创建和使用
var o1 = {
    username: 'wanfeng',
    password: '730',
    loginTime: 3,
    login: function (){
        console.log('user['+this.username+'] login success');
    }
}
console.log(o1);
console.log(o1.username);
o1.login()

// 空对象
var o2 = new Object();
// 设置属性
o2.username = 'abc';
o2.loginTime = 5;
o2.login = function (){
    console.log('user['+this.username+'] login success');
}
console.log(o2);
o2.login();

// 构造函数
// 首字母要大写
function User(username, password){
    this.username = username;
    this.password = password;
}
var user1 = new User('abc constructor', '7630');
console.log(user1);