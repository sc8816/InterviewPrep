function findIndex(arr, target) {
    let start = 0;
    let end = arr.length
    //闭区间
    while (start <= end) {
        let mid = start + ((end - start) >> 1)
        if (arr[mid] === target) {
            return mid
        } else if (arr[mid] > target) {
            end = mid - 1
        } else if (arr[mid] < target) {
            start = mid + 1
        }
    }
    return -1
}
let arr = [1,2,3,4,4,6]
console.log(findIndex(arr, 8))