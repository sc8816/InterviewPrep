//堆排序
// 将原序列（n个）转化成一个大顶堆
// 设置堆的有效序列长度为 n
// 将堆顶元素（第一个有效序列）与最后一个子元素（最后一个有效序列）交换，并有效序列长度减1
// 堆化有效序列，使有效序列重新称为一个大顶堆
// 重复以上2步，直到有效序列的长度为 1，排序完成
function heapSort(items) {
    items = buildHeap(items, items.length)
    let heapSize = items.length - 1 //初始有效长度
    while (heapSize > 1) {
        swap(items, 1, heapSize)
        heapify(items, heapSize, 1) //传入的size为数组长度而不是数组长度减1
        heapSize--
        // console.log(items);
    }
    return items
}

//构建大顶堆
function buildHeap(items, size) {
    for (let i = size >> 1; i >= 1; i--) {
        heapify(items, size, i)
    }
    return items
}

function heapify(items, size, i) {
    //自上而下，找最大的索引
    while (true) {
        let maxIndex = i
        if (2 * i < size && items[i] < items[2 * i]) {
            maxIndex = 2 * i
        }
        if (2 * i + 1 < size && items[2 * i + 1] > items[maxIndex]) {
            maxIndex = 2 * i + 1
        }
        if (maxIndex === i) break
        swap(items, i, maxIndex)
        i = maxIndex
    }
}

function swap(items, i, j) {
    [items[i], items[j]] = [items[j], items[i]]
}


console.log(heapSort([,2,1]))
