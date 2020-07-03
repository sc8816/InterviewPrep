/*
有 N 种物品和一个容量为 V 的背包。第 i 种物品最多有 n[i]件可用，每件费用 是 c[i]，价值是 w[i]。
求解将哪些物品装入背包可使这些物品的费用总和不超 过背包容量，且价值总和最大。
 */

function multiplePack() {
    let dp = Array.from(new Array(N+1), ()=>new Array(V+1).fill(0))
    for (let i = 0; i < N; i++){
        for (let j = 0; j <= V; j++){
            for (let k = 0; k * c[i] <= j && k<=n[i]; k++){
                dp[i+1][j] = Math.max(dp[i+1][j], dp[i][j-k * c[i]] + k * w[i]);
            }
        }
    }
    return dp[N][V]
}

function multiplePack() {
    let dp = new Array(V+1).fill(0)
    for (let i = 0; i < N; i++){
        //完全背包
        if(c[i] * n[i]>=V){
            for(let j=c[i]; j<=V; j++){
                dp[j] = Math.max(dp[j], dp[j-c[i]] + w[i])
            }
        }else{
            //// 2： c[i] * n[i]<V 则需要在 dp[j-c[i]*k] + w[i] * k 中找到最大值，0 <= k <= M[m]
            for(let j=c[i]; j<=V; j++){
                for(let k=1; k<n[i] && k*c[i]<j; k++){
                    dp[j] = Math.max(dp[j], dp[j-k*c[i]]+k*w[i])
                }
            }
        }

    }
    return dp[V]
}
