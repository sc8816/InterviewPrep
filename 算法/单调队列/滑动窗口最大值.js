/**
 * 
题目描述：

给你一个整数数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。

返回滑动窗口中的最大值。
 */

function maxWindows(nums, k) {
  let res = [];
  let quenue = []; //单调递增队列，前面存在的比它小的数字没有意义直接移除
  let getLast = () => quenue[quenue.length - 1];
  for (let i = 0; i < k; i++) {
    while (nums[getLast()] < nums[i]) {
      quenue.pop();
    }
    quenue.push(i);
  }
  res.push(nums[quenue[0]]);
  for (let i = k; i < nums.length; i++) {
    while (nums[getLast()] < nums[i]) {
      quenue.pop();
    }
    quenue.push(i);
    while (getLast() - quenue[0] >= k) {
      quenue.shift();
    }
    res[i - k + 1] = nums[quenue[0]];
  }

  return res;
}
