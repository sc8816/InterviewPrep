//堆
/*
满足下面两个条件的就是堆：

堆是一个完全二叉树
堆上的任意节点值都必须大于等于（大顶堆）或小于等于（小顶堆）其左右子节点值
如果堆上的任意节点都大于等于子节点值，则称为 大顶堆

如果堆上的任意节点都小于等于子节点值，则称为 小顶堆

也就是说，在大顶堆中，根节点是堆中最大的元素；

在小顶堆中，根节点是堆中最小的元素；
 */
//假设我们所以从1开始
//那么我们假设当前节点为i 父节点i/2 左子节点为2i 右节点为2i+1

class Heap {
    // 小顶堆
    items = [,]

    constructor(arr) {
        this.items = arr
        //从下往上
        // this.build(1)
        //从上往下
        for (let i = this.items.length >> 1; i >= 1; i--) {
            this.heapifyUp2Down(i)
        }
    }

    //建堆
    build(heapSize = 1) {
        let size = this.items.length
        while (heapSize < size) {
            this.heapifyUp2Down(heapSize)
            heapSize += 1
        }
    }

    // 自下而上 有效位置从1开始
    heapifyDown2Up(i) {
        while (Math.floor(i / 2) > 0 && this.items[Math.floor(i / 2)] > this.items[i]) {
            this.swap(i, Math.floor(i / 2))
            i >>= 1
        }
    }

    //需要左右两个节点比较找到最小的值 赋值给父节点
    heapifyUp2Down(i) {
        let size = this.items.length
        while (true) {
            let minIndex = i
            if (i * 2 < size && this.items[i * 2] < this.items[i]) {
                minIndex = 2 * i
            }
            if (i * 2 + 1 < size && this.items[i * 2 + 1] < this.items[minIndex]) {
                minIndex = i * 2 + 1
            }
            console.log('minIndex:', minIndex, 'i', i);
            if (minIndex === i) break
            this.swap(i, minIndex)
            i = minIndex
        }
    }

    //插入
    insert(num) {
        this.items.push(num)
        let i = this.items.length - 1
        while ((i >> 1) > 0 && this.items[i] < this.items[i >> 1]) {
            this.swap(i, i >>= 1)
        }
    }

    swap(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]]
    }
}

const heap = new Heap([, 5, 2, 3, 4, 1])
// heap.insert(0)
console.log(heap.items)
