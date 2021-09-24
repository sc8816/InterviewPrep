/*
给定一个长度为N的整数数组，找出每个数左边比它小的第一个数，不存在输出 - 1
*/
function resolve(arr) {
  let res = [];
  let stack = [];
  let getTop = (stack) => stack[stack.length - 1];
  for (let num of arr) {
    while (getTop(stack) >= num) {
      stack.pop();
    }
    res.push(getTop(stack) || -1);
    stack.push(num);
  }

  return res;
}
