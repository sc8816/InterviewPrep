//假设有从 1 到 N 的 N 个整数，如果从这 N 个数字中成功构造出一个数组，使得数组的第 i 位 (1 <= i <= N) 满足如下两个条件中的一个，
//我们就称这个数组为一个优美的排列。条件：
//
//
// 第 i 位的数字能被 i 整除
// i 能被第 i 位上的数字整除
//
//
// 现在给定一个整数 N，请问可以构造多少个优美的排列？
//
// 示例1:
//
//
//输入: 2
//输出: 2
//解释:
//
//第 1 个优美的排列是 [1, 2]:
//  第 1 个位置（i=1）上的数字是1，1能被 i（i=1）整除
//  第 2 个位置（i=2）上的数字是2，2能被 i（i=2）整除
//
//第 2 个优美的排列是 [2, 1]:
//  第 1 个位置（i=1）上的数字是2，2能被 i（i=1）整除
//  第 2 个位置（i=2）上的数字是1，i（i=2）能被 1 整除
//
//
// 说明:
//
//
// N 是一个正整数，并且不会超过15。
//
// Related Topics 位运算 数组 动态规划 回溯 状态压缩
// 👍 174 👎 0


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function (n) {
    // dp[state]为当前选择数值情况为 state 时的所有方案的数量
    // dp[state] 可以由之前的选择情况推导，

    let dp = new Array(1 << n).fill(0)
    dp[0] = 1
    let countOnes = (state) => {
        return state.toString(2).split('0').join('').length
    }
    for (let mask = 1; mask < (1 << n); mask++) {
        let num = countOnes(mask)
        for (let i = 0; i < n; i++) {
            //用来判断 mask 第 i 位是否为 1，如果为 1，说明第 i+1 (因为从0开始)个数字被选取
            if (mask & (1 << i) === 0) continue
            if (num % (i + 1) !== 0 && (i + 1) % num !== 0) continue
            // 1^0 = 1 、 0^0 = 0 、1^1 = 0 异或相同值为0 不同为1
            // mask ^ (1 << i)则是把第i位 置于 0
            dp[mask] += dp[mask ^ (1 << i)]
        }
    }

    return dp[(1 << n) - 1]

};
//leetcode submit region end(Prohibit modification and deletion)
