/*
* parseInt() 函数解析一个字符串参数，并返回一个指定基数的整数 (数学系统的基础)。
* 其中接收两个参数 parseInt(string, ？radix); 第一个表示一个字符串，如果不是的话会进行强制转换
* 第二个参数表示需要转换的基数，如果radix=2 则表示将string转换成二进制的值，同时第二个参数可选如果不进行选择的话默认是取整
*
* 在radix为 undefined，或者radix为 0 或者没有指定的情况下，JavaScript 作如下处理：

如果字符串 string 以"0x"或者"0X"开头, 则基数是16 (16进制).
如果字符串 string 以"0"开头, 基数是8（八进制）或者10（十进制），那么具体是哪个基数由实现环境决定。ECMAScript 5 规定使用10，但是并不是所有的浏览器都遵循这个规定。因此，永远都要明确给出radix参数的值。
如果字符串 string 以其它任何值开头，则基数是10 (十进制)。
*
 */
['10','10','10','10','10'].map(parseInt);

// console.log: 10 NaN 2 3 4


//变型

let unary = fn => val => fn(val)
let parse = unary(parseInt)
console.log(['1.1', '2', '0.3'].map(parse))

//只会接收第一个参数 所以对他们进行取整
// console.log: 1 2 0
