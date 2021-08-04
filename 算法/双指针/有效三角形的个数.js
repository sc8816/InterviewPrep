// 示例 1:
//
//
//输入: [2,2,3,4]
//输出: 3
//解释:
//有效的组合是:
//2,3,4 (使用第一个 2)
//2,3,4 (使用第二个 2)
//2,2,3
//
//
// 注意:
//
//
// 数组长度不超过1000。
// 数组里整数的范围为 [0, 1000]。
//
// Related Topics 贪心 数组 双指针 二分查找 排序
// 👍 217 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function triangleNumber(nums) {
    //先进行排序
    //我们需要先确定一个边，然后定义两个指针分别为另外两个边
    nums.sort((a, b) => a - b)
    const n = nums.length
    let ans = 0
    for(let i = 2; i<n; i++) {
        let l = 0, r = i - 1
        while (l<r) {
            if(nums[i] < nums[l] + nums[r]) { //当以r为另一个边时，l有（r - l）种选择
                ans += r - l
                r --
            } else l++
        }
    }

    return ans
};
//leetcode submit region end(Prohibit modification and deletion)
