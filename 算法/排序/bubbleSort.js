//冒泡排序
// function swap(a, b) {
//     let temp = a
//     a = b
//     b = temp
// }

//常规冒泡
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                // swap(arr[j], arr[j+1])
            }
        }
    }
    return arr
}

//优化版(记录住最后进行交换的位置，从那个位置之后都是有序的)
function bubbleSorts(arr) {
    let i = arr.length - 1
    while (i > 0) {
        let pos = 0
        for(let j = 0; j<i; j++) {
            if(arr[j]>arr[j+1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                pos = j
            }
        }
        i = pos
    }

    return arr
}

console.log(bubbleSorts([1, 5, 7, 4, 3, 6, 9, 8]))
