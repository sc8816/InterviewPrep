//给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重
//复的三元组。
//
// 注意：答案中不可以包含重复的三元组。
//
//
//
// 示例 1：
//
//
//输入：nums = [-1,0,1,2,-1,-4]
//输出：[[-1,-1,2],[-1,0,1]]
//
//
// 示例 2：
//
//
//输入：nums = []
//输出：[]
//
//
// 示例 3：
//
//
//输入：nums = [0]
//输出：[]
//
//
//
//
// 提示：
//
//
// 0 <= nums.length <= 3000
// -105 <= nums[i] <= 105
//
// Related Topics 数组 双指针 排序
// 👍 3586 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
function threeSum(nums) {
    if(nums.length<3) return []
    nums.sort((a, b) => a - b)
    const n = nums.length
    if(nums[0]>0) return []
    let res = []

    for(let i = 0; i<n; i++) {
        if(nums[i] === nums[i - 1]) continue
        let l = i + 1, r = n - 1
        while (l<r) {
            let sum = nums[i] + nums[l] + nums[r]
            if(sum>0) {
                r--
            } else if(sum<0) {
                l++
            } else {
                res.push(nums[i], nums[l], nums[r])
                //去除重复的元素
                while (l<r && nums[l] === nums[l+1]) l++
                while (l<r && nums[r] === nums[r-1]) r--
                l++
                r--
            }
        }
    }

    return res
};
//leetcode submit region end(Prohibit modification and deletion)
