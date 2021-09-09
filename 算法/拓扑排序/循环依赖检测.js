/**
 * 现有n个编译项，编号为0 ~n - 1。给定一个二维数组，表示编译项之间有依赖关系。如[0, 1]表示1依赖于0。

若存在循环依赖则返回空；不存在依赖则返回可行的编译顺序。

题目分析
若给定一个依赖关系是[[0,2],[1,2],[2,3],[2,4]]

可行的编译序列是[0,1,2,3,4]，也可以是[1,0,2,4,3]等。

拓扑排序可以求这样的一个序列。可以看出，这个序列结果可能不唯一。
 */

//拓扑排序 判环

function haveCircularDependency(n, prerequisites) {
  let graph = Array.from({ length: n }, () => []);
  let indeg = new Array(n).fill(0);
  for (let [a, b] of prerequisites) {
    graph[a].push(b);
    indeg[b]++;
  }
  let queue = [];
  let res = [];
  for (let i = 0; i < n; i++) {
    if (indeg[i] === 0) queue.push(i);
  }
  while (queue.length) {
    let cur = queue.shift();
    for (let next of graph[cur]) {
      indeg[next]--;
      if (indeg[next] === 0) queue.push(next);
    }
    res.push(cur);
  }
  if (res.length === n) return res;
  return [];
}
