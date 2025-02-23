// ESM导出方式

// 导出的常量
export const URL = "localhost:8888";

// 导出的函数
export function getCurrentDate(){
    console.log('getCurrentDate');
    return new Date();
}

// 导出的对象
export default {
    moduleName: 'M1',
    version: '1.0'
}