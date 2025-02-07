// 单行注释 浏览器弹窗
// alert('test message');

// 输入框
// var content1 = prompt('请输入内容：');

// 控制台输出日志
console.log('TEST CONSOLE');

// 声明变量
var v1 = 'wanfeng';
console.log(v1 + 'test log');

// 声明变量不赋值，为undefined
// 变量不要使用name作为变量名
var v2;
console.log(v2);
// undefined与字符串拼接，结果直接拼接
v2 = undefined + 'ddd';
console.log('undefined + \'ddd\' = ' + v2);
// undefined参与数字运算，结果为NaN
v2 = undefined + 1;
console.log('undefined + 1 = ' + v2);

// 变量值为null
v2 = null;
console.log(v2);
// null值与字符串拼接，结果直接拼接
v2 = null + 'ddd';
console.log('null + \'ddd\' = ' + v2);
// null参与数字运算，作为0
v2 = null + 1;
console.log('null + 1 = ' + v2);




// 变量的数据类型可以动态变化，即数据类型无需严格定义，一个变量可以被重新赋值为其他类型的值
var v3 = 10;
v3 = 'AAA';
v3 = true;
// true参与数字运算作为1
v3 = true + 1;
console.log('true + 1=' + v3);
// false参与数字运算作为0
v3 = false + 1;
console.log('false + 1=' + v3);



//八进制
// var v4 = 010;
var v4 = 0o10;

// 十六进制
var v5 = 0x6f;

// 最大数
var v6 = Number.MAX_VALUE;

// 最小数
var v7 = Number.MIN_VALUE;

// 无穷大
var v8 = Infinity;

// 无穷小
var v9 = -Infinity;

// 不是数字
var v10 = NaN;
// 判断是不是非数字，NaN为true，字符串为true
console.log(isNaN(v10));

// 字符串长度
var v11 = 'assdfsdfsdf';
console.log('v11.length=' + v11.length);

// 获取数据类型 typeof
console.log(typeof v11);
console.log(typeof v6);
console.log(typeof v10);
console.log(typeof null);

// 数字转为字符串
var v12 = 24;
console.log(v12 + '');
console.log(v12.toString());
console.log(String(v12));

// 字符串转数字
var v13 = '34';
var v14 = '34.567';
var v15 = '34岁';
var v16 = 'rem50px';
console.log(parseInt(v13));
console.log(parseFloat(v14));
// 开头是数字，非数字的字符会自动去掉
console.log(parseInt(v15));
// 开头不是数字，结果为NaN
console.log(parseInt(v16));













