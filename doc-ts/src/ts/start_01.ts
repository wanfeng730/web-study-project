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
 * tuple：元组，固定数量的数组
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

// 声明对象的结构 必须包含string类型的name，number类型的age可以没有
let obj1: {
  name: string, 
  age?: number,
  [key: string]: any   //索引签名，表示可以在对象中追加任意string的key，任意类型的值
}
obj1 = {name: 'wanfeng', age: 18}

//声明函数的参数类型、返回值类型
let func4: (a: string, b: number) => number;
func4 = function (a, b) {
  return 0;
}

// 声明数组的类型
let arr1: string[]
let arr2: Array<string> //泛型格式

// 声明元组(固定数量的数组)
let tup1: [string, number, boolean]
let tup2: [string, ...number[]];
tup1 = ['wanfeng', 28, true];
tup2 = ['wanfeng', 24, 56, 7, 9];

//声明枚举，默认的值为顺序数字
enum Status{
  DRAFT = '草稿',
  PROCESS = '进行中',
  DONE = '完成'
};

let status1 = Status.DONE;

// 声明某种类型的别名
type T1 = number;
type T2 = number | boolean;
type Gender = '男' | '女';  //可以用于定义枚举

// 交叉类型，拼接两种对象类型
type Area = {
  height: number,
  weight: number
}
type Address = {
  num: number,
  room: string
}
type House = Area & Address;
const house1: House = {
  height: 100,
  weight: 100,
  num: 3,
  room: 'wanfeng'
}

//特殊情况：使用类型声明函数返回值类型时 TypeSxcript并不会严格要求函数返回空
type LogFunc = () => void;
const func5: LogFunc = () => {
  return 666;
}