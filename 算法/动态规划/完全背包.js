/*
题目
有 N 种物品和一个容量为 V 的背包，每种物品都有无限件可用。第 i 种物品的费 用是 c[i]，价值是 w[i]。
求解将哪些物品装入背包可使这些物品的费用总和不 超过背包容量，且价值总和最大。
*/

function Knapsack() {
    let dp = Array.from(new Array(N+1), ()=>new Array(V+1).fill(0))
    for (let i = 0; i < N; i++){
        for (let j = 0; j <= V; j++){
            for (let k = 0; k * c[i] <= j; k++){
                dp[i+1][j] = Math.max(dp[i+1][j], dp[i][j-k * c[i]] + k * w[i]);
            }
        }
    }
    return dp[N][V]
}

function Knapsack() {
    let dp = ()=>new Array(V+1).fill(0)
    for (let i = 0; i < N; i++){
        for (let j = c[i]; j <= V; j++){
            dp[j] = Math.max(dp[j], dp[j-c[i]] +  w[i])
        }
    }
    return dp[V]
}
