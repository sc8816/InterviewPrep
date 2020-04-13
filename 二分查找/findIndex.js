//二分查找，第一个出现该元素的索引，未找到返回-1
function findIndex(arr, target) {
    let start = 0;
    let end = arr.length - 1
    //闭区间
    while (start <= end) {
        let mid = start + ((end - start) >> 1)
        if (arr[mid] === target) {
            end = mid - 1
        } else if (arr[mid] > target) {
            end = mid - 1
        } else if (arr[mid] < target) {
            start = mid + 1
        }
    }
    if(start>=arr.length || arr[start]!==target) return -1
    return start
}

arr = [1,2,3,4,5,5,5,6,7,8,8,9]
console.log(findIndex(arr, 9))
