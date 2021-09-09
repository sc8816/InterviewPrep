/*
1.i循环1～n，我们需要保证0～i是有序的
2.j循环0～i我们对数字i和前面进行比较
*/

function insertSort(arr) {
    if (arr === null || arr.length < 2) return arr
    for (let i = 1; i < arr.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if(arr[j]<arr[j-1]) [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
        }
    }
}