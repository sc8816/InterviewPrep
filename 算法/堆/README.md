#### 堆（二叉堆）

二叉堆是一种特殊的二叉树，存在以下特性
1. 完全二叉树，表示树的每一层都存在左侧和右侧的子节点（除了最后一层的叶子节点）
2. 二叉堆不是最小堆就是最大堆。最小堆允许你快速查找到最小的值，最大堆允许你快速查找到最大的值，对于每一个节点都存在大于等于（大顶堆）和小于等于（小顶堆）每个它的子节点

> 尽管二叉堆是一个二叉树但是不一定是二叉搜索树

##### 二叉堆的表示

二叉堆有两种表达方式， 第一种是动态的表达式，也就是指针的方式，第二种使用一个数组通过数组的索引进行检索父节点、左右孩子节点；
如果我们给定的位置idx节点，根据完全二叉树的特性可得：
1. 它的左节点位置为2*index+1
2. 它的右节点位置为2*index+1
3. 它的父节点为 (int)（index - 1）/2

##### 二叉堆的操作

- insert(value) 插入新值，成功返回true否则返回false
- extract() 移除堆顶元素（最大值或者是最小值）返回移除的值
- getTop() 返回堆顶元素
- pop() 弹出堆顶后重新建堆
- isEmpty 判空


##### 用途

1. 快速查找最大值最小值
2. 优先队列
3. 堆排序
   
##### 代码实现

```javascript
    class MaxHeap {
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
        while (idx > 0 && this.heap[parentIdx] < this.heap[idx]) {
          this.swap(this.heap, idx, parentIdx);
          idx = parentIdx;
          parentIdx = this.getParentIdx(idx);
        }
      }
    
      shiftDown(idx) {
        let maxIdx = idx;
        const left = this.getLiftIdx(idx);
        const right = this.getRightIdx(idx);
        let size = this.heap.length;
        if (left < size && this.heap[maxIdx] < this.heap[left]) {
          maxIdx = left;
        }
        if (right < size && this.heap[maxIdx] < this.heap[right]) {
          maxIdx = right;
        }
    
        if (maxIdx !== idx) {
          this.swap(this.heap, maxIdx, idx);
          this.shiftDown(maxIdx);
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
        const top = this.heap.shift();
        this.shiftDown(0);
        return top;
      }
    }

```