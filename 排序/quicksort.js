// 空间复杂度为O（n）
// function quickSort(arr) {
//     if(arr.length <= 1){ return arr; }
//     // console.log();
//     let pivotIndex = Math.floor(arr.length / 2);
//     let pivot = arr.splice(pivotIndex,1)[0]
//     let left =[],right = []
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat(pivot, quickSort(right))
// }
// let array = [8,7,0,7,5,2,5,3,1];
// console.log(quickSort(array))
//不需要额外空间
function quickSort(arr) {
    return sort(arr, 0, arr.length - 1)
}

function sort(arr, left, right) {
    if (arr.length <= 1) return arr
    let index = partition(arr, left, right)
    console.log(left, right, index);
    if (left < index-1) {
        sort(arr, left, index-1)
    }
    if (right > index) {
        sort(arr, index, right)
    }
    return arr
}

function partition(arr, left, right) {
    let base = arr[Math.floor((left + right) / 2)]
    let i = left
    let j = right
    while (i <= j) {
        while (arr[i] < base) {
            i++
        }
        while (arr[j] > base) {
            j--
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        }
    }
    return i
}

let array = [8, 7, 0, 7, 5, 2, 5, 3, 1];
console.log(quickSort(array))