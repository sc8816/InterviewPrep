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
    //dp[i][j]表示区间i - j 最长的回文子序列长度
    let n = s.length
    if (s.length == 0 || s.length == 1) return s.length
    let dp = Array.from(new Array(n), () => new Array(n).fill(0))
    for (let i = n - 2; i >= 0; i--) {
        dp[i][i] = 1
        for (let j = i + 1; j < n; j++) {
            if (s[i] == s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
            }
        }
    }

    return dp[0][n - 1]
};
//leetcode submit region end(Prohibit modification and deletion)
