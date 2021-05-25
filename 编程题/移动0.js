/*
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。
 */

function removeZero(arr) {
    let index = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) index++
        else if (index !== 0) {
            arr[i - index] = arr[i] //非0位置和为0的位置进行交换
            arr[i] = arr[index]
        }
    }
    return arr
}
