// 声明变量类型
// JavaScript中的数据类型：string、number、boolean、null、undefined、bigint、symbol、object
// TypeScriupt自定义类型：type、interface
let str1: string;
let num1: number;
let bool1: boolean;
str1 = '6gsh';


// 声明函数参数类型
// 参数a为string类型，b为布尔类型，返回值为object类型
function getObject(a: string, b: boolean): object{
  return {a, b};
}

// 字面量类型（常量）
let str2: 'wanfeng'

// 类型推断，根据值的类型自动设置类型
let num2 = 99;

// 包装类型，包装类型可以赋值为null
let str3: String;
let bool2: Boolean;

str3 = new String('GGG');
bool2 = false;


/**
 * TypeScript中的新类型：
 * any：任何类型，定义为该种类型表示放弃类型检查
 * unknown：未知类型，类型安全的any，可以随便赋值，但是不能将unknown变量赋值给特定类型的变量，不能对unknown变量调用方法
 * never: 无论什么值都不能存，通常用于永远不会执行结束或一定抛出异常的函数的返回值类型
 * void：空类型，通常用于指定函数返回值为空
 * tuple：元组
 * enum：枚举
 */
let any1: any;
any1 = 56;
any1 = 'f';
str1 = any1;

let unk1: unknown;
unk1 = 56;
unk1 = 'f';
// str1 = unk1;
// unk1.toUpperCase();
(unk1 as string).toUpperCase();

//死循环
function func1():never{
  func1();
}
//抛出异常函数
function func2():never{
  throw new Error('message');
}

//返回值空，即undefined
function func3():void{
  console.log('func3');
}

