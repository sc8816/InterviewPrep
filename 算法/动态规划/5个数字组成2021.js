// 将 3 分解成两个正整数的和，有两种分解方法，分别是 3 = 1 + 2 和
// 3 = 2 + 1。注意顺序不同算不同的方法。
// 将 5 分解成三个正整数的和，有 6 种分解方法，它们是 1+1+3 = 1+2+2 =
//     1 + 3 + 1 = 2 + 1 + 2 = 2 + 2 + 1 = 3 + 1 + 1。
// 请问，将 2021 分解成五个正整数的和，有多少种分解方法？
// ————————————————

function resolve(m, n) {
    //dp[i][j]表示i个数字组成j有多少种解法
    let dp = Array.from({length: m+1}, () => new Array(n+1).fill(0))
    for (let i = 1; i < n+1; i++) dp[1][i] = 1

    for (let i = 2; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            for (let k = 1; k < j; k++) {
                dp[i][j] += dp[i - 1][j - k]
            }
        }
    }

    return dp[m][n]
}

console.log(resolve(5, 2021));
