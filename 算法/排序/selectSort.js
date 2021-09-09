/*
1. 我们首先第一个循环i从0～n，第二个循环则从i+1到n
2.我们循环过程中i对应的索引表示我们的最小值所在的索引
3.我们循环j的过程中查找最小的值的索引和我们的i进行交换
*/

function selectionSort(arr) {
  if (arr == null || arr.length < 2) return arr;
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      minIdx = arr[minIdx] < arr[j] ? j : minIdx;
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
}
