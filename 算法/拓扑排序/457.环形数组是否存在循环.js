/*
 * @lc app=leetcode.cn id=457 lang=javascript
 *
 * [457] 环形数组是否存在循环
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {
  //拓扑排序
  let n = nums.length;
  let graph = Array.from({ length: n }, () => new Array());
  let degree = Array(n).fill(0); //入度
  let getTarget = (cur, step) => {
    if (step > 0) {
      return cur + step >= n ? (cur + step) % n : cur + step;
    }
    return cur + step < 0 ? n + ((cur + step) % n) : cur + step;
  };

  let topoSort = () => {
    let queue = [];
    for (let i = 0; i < n; i++) degree[i] == 0 && queue.push(i);
    while (queue.length) {
      let cur = queue.shift();
      let [next] = graph[cur];
      degree[next]--;
      if (degree[next] == 0) queue.push(next);
    }
    // 仍有入度不为 0 的点，说明图中有环
    for (let i = 0; i < n; i++) {
      if (degree[i]) return true;
    }
    return false;
  };
  //先查找所有正向序列
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0 || getTarget(i, nums[i]) == i) continue;
    let t = getTarget(i, nums[i]);
    graph[i].push(t);

    degree[t]++;
  }

  if (topoSort(n)) return true;

  degree = Array(n).fill(0); //入度
  graph = Array.from({ length: n }, () => new Array());
  for (let i = 0; i < n; i++) {
    if (nums[i] > 0 || getTarget(i, nums[i]) == i) continue;
    let t = getTarget(i, nums[i]);
    graph[i].push(t);

    degree[t]++;
  }

  return topoSort(n);
};
// @lc code=end
