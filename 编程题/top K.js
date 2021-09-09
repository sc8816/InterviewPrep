//找出数组中最小的k个数

//快排法
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  if (k == 0) return [];
  if (arr.length <= k) return arr;
  let part = (arr, start, end) => {
    let base = arr[(start + end) >> 1];
    while (start <= end) {
      while (arr[start] < base) start++;
      while (arr[end] > base) end--;
      if (start <= end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
      }
    }
    return start;
  };
  let sort = (arr, start, end) => {
    if (arr.length <= 1) return;
    let index = part(arr, start, end);
    // console.log(index)
    if (index == k) return;
    if (index > k) sort(arr, start, index - 1);
    if (index < k) sort(arr, index, end);
  };
  sort(arr, 0, arr.length - 1);
  return arr.slice(0, k);
};

console.log(getLeastNumbers([1, 2, 3, 6, 8, 5], 4));

let getLeastNumber = (arr, k) => {
  if (k == 0) return [];
  if (arr.length <= k) return arr;
  let heapfy = (heap, i, k) => {
    while (true) {
      let maxIndex = i;
      if (2 * i <= k && heap[2 * i] > heap[i]) {
        maxIndex = 2 * i;
      }
      if (2 * i + 1 <= k && heap[2 * i + 1] > heap[maxIndex]) {
        maxIndex = 2 * i + 1;
      }

      if (i !== maxIndex) {
        [heap[i], heap[maxIndex]] = [heap[maxIndex], heap[i]];
        i = maxIndex;
      } else {
        break;
      }
    }
  };
  let buildHeap = (heap, size) => {
    for (let i = size >> 1; i >= 1; i--) {
      heapfy(heap, i, size);
    }
  };

  let heap = arr.slice(0, k);
  heap.unshift(null);
  buildHeap(heap, k);

  for (let i = k; i < arr.length; i++) {
    if (arr[i] < heap[1]) {
      heap[1] = arr[i];
      heapfy(heap, 1, k);
    }
  }

  return heap;
};
