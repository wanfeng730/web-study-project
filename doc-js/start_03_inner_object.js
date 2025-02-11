// 内置对象的使用


// 字符串String
var s1 = 'wanfeng';
// 查找字符位置
console.log(s1.indexOf('n'));
console.log(s1.indexOf('n', 2)); // 从2的位置开始查找
console.log(s1.lastIndexOf('n'));
// 根据位置返回字符
console.log(s1[2]);
console.log(s1.charAt(3));


// 圆周率
console.log(Math.PI);
// 最大值
console.log(Math.max(4, 6, 2));
console.log(Math.max(4, 'dfg'));  // NaN
// 最小值
console.log(Math.min(4, 6, 2));
// 向下取整
console.log(Math.floor(3.5));
// 向上取整
console.log(Math.ceil(3.5));
// 四舍五入
console.log(Math.round(5.3));
console.log(Math.round(-3.5));  //五入本质是数值增大，所以为-3
// 绝对值
console.log(Math.abs(-5.46));
// 随机数
console.log(Math.random());
// 随机整数 5-15
console.log(Math.floor(5 + Math.random() * 10));


// 日期
var date1 = new Date();
console.log(date1);
//当前日期时间戳
console.log(Date.now());
var date2 = new Date('2024-10-14 17:00:00');
console.log(date2);
// 日期格式化
console.log(date2.getFullYear());
console.log(date2.get);

// 倒计时
function getRemainingTime(endMillis){
    var remainingMillis = endMillis - Date.now();

    if(remainingMillis <= 0){
        return '倒计时已结束';
    }
    var totalSeconds = remainingMillis / 1000;
    var hour = Math.floor(totalSeconds / 3600);
    var minute = Math.floor((totalSeconds % 3600) / 60);
    var seconds = Math.floor(totalSeconds % 60);
    return hour + ':' + minute + ':' + seconds;
}
var endDate = new Date('2025-02-09 21:40:00');
console.log(getRemainingTime(endDate.getTime()));

// 数组
var arr1 = [4, 3, 4];
var arr2 = new Array(2);
var arr3 = new Array(2, 3); // [2, 3]
console.log(arr1[1]);
console.log(arr3[1]);
console.log(typeof arr1);
// 判断是否为数组
console.log(arr1 instanceof Array);
console.log(Array.isArray(arr1));
// 末尾添加数组元素
arr1.push(67, 'wanfeng');
// 开头添加数组元素
arr1.unshift('build', 0);
// 末尾删除数组元素
arr1.pop();
// 开头删除数组元素
arr1.shift();
// 获取数组元素的位置
console.log(arr1.indexOf(4));
console.log(arr1.lastIndexOf(4));
console.log(arr1);