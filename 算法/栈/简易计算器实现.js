/**
 * 实现一个基本的计算器来计算一个简单的字符串表达式的值。
 * 字符串表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
 * 考虑所有输入都是合法
 */

function calc(s) {
  const n = s.length;
  let opt = "+"; //记录当前操作符
  let num = 0; //记录上一个数
  let res = 0;
  let stack = [];

  for (let i = 0; i < n; i++) {
    let t = s[i];
    if (!isNaN(t)) num = num * 10 + (t - "0");
    if ((t < "0" && t != " ") || i == n - 1) {
      if (opt == "+") stack.push(num);
      if (opt == "-") stack.push(-num);
      if (opt == "*") {
        let last = stack.pop();
        stack.push(last * num);
      }
      if (opt == "/") {
        let last = stack.pop();
        stack.push(Math.floor(last / num));
      }
      opt = t;
      num = 0;
    }
  }
  while (stack.length) res += stack.pop();
  return res;
}
