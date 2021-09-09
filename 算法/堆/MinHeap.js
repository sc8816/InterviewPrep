class MinHeap {
  constructor() {
    this.heap = [];
  }
  getLiftIdx(idx) {
    return 2 * idx + 1;
  }
  swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  }
  getRightIdx(idx) {
    return 2 * idx + 2;
  }

  getParentIdx(idx) {
    if (idx == 0) return undefined;
    return (idx - 1) >> 1;
  }

  insert(val) {
    if (val === undefined) return false;
    this.heap.push(val);
    //上移操作
    this.shiftUp(this.heap.length - 1);
    return true;
  }

  shiftUp(idx) {
    let parentIdx = this.getParentIdx(idx);
    while (idx > 0 && this.heap[parentIdx] > this.heap[idx]) {
      this.swap(this.heap, idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  }

  shiftDown(idx) {
    let minIdx = idx;
    const left = this.getLiftIdx(idx);
    const right = this.getRightIdx(idx);
    let size = this.size;
    if (left < size && this.heap[minIdx] > this.heap[left]) {
      minIdx = left;
    }
    if (right < size && this.heap[minIdx] > this.heap[right]) {
      minIdx = right;
    }

    if (minIdx !== idx) {
      this.swap(this.heap, minIdx, idx);
      this.shiftDown(minIdx);
    }
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.size === 0;
  }

  getTop() {
    return this.heap[0];
  }
  getList() {
    return this.heap;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.size() === 1) {
      return this.heap.shift();
    }
    this.swap(this.heap, 0, this.size() - 1);
    const top = this.heap.pop();
    this.shiftDown(0);
    return top;
  }
}

const minHeap = new MinHeap();

for (let i = 1; i <= 10; i++) {
  minHeap.insert(i);
}

minHeap.insert(-1);
minHeap.insert(0);

console.log(minHeap.getList());
console.log(minHeap.pop());
console.log(minHeap.getList());
