//给定一个字符串 s ，找到其中最长的回文子序列，并返回该序列的长度。可以假设 s 的最大长度为 1000 。
//
//
//
// 示例 1:
//输入:
//
// "bbbab"
//
//
// 输出:
//
// 4
//
//
// 一个可能的最长回文子序列为 "bbbb"。
//
// 示例 2:
//输入:
//
// "cbbd"
//
//
// 输出:
//
// 2
//
//
// 一个可能的最长回文子序列为 "bb"。
//
//
//
// 提示：
//
//
// 1 <= s.length <= 1000
// s 只包含小写英文字母
//
// Related Topics 动态规划


//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
    //该题一般解决方案为动态规划，尝试使用dfs+记忆化进行解题
    let n = s.length
    if (s.length == 0 || s.length == 1) return s.length
    let memo = Array.from({length: n}, () => new Array(n).fill(0))
    let dfs = (memo, i, j) => {
        if (memo[i][j]) return memo[i][j]
        if (i > j) return 0
        if (i == j) return 1
        let ans = 0
        if (s[i] == s[j]) ans = dfs(memo, i + 1, j - 1) + 2
        else ans = Math.max(dfs(memo, i + 1, j), dfs(memo, i, j - 1))

        return memo[i][j] = ans
    }

    return dfs(memo, 0, n - 1)

};
//leetcode submit region end(Prohibit modification and deletion)
