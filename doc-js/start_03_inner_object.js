// 内置对象的使用


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