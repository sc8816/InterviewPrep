//
// 有 N 件物品和一个容量为 V 的背包。第 i 件物品的体积是 c[i]，价值是 w[i]。 求解将哪些物品装入背包可使价值总和最大。
//
//dp[i][j] = Max(dp[i][j-c[i]] + w[i], dp[i-1][v])
function f() {
    let dp = Array.from(new Array(N), ()=>new Array(V+1).fill(0))
    for(let i=0; i<N; i++){
        for(let j=0; j<=V; j++){
            if(j-c[i]>=0){
                dp[i][j] = Math.max(dp[i][j-c[i]]+w[i], dp[i-1][j])
            }else{
                dp[i][j] = dp[i-1][j]
            }
        }
    }
}

//空间优化
function f() {
    let dp = Array.from(new Array(N), ()=>new Array(V+1).fill(0))
    for(let i=0; i<N; i++){
        for(let j=V; j>=0; j--){
            if(j-c[i]>=0){
                dp[i][j] = Math.max(dp[i][j-c[i]]+w[i], dp[i-1][j])
            }
        }
    }
}

//
function f() {
    let dp = Array.from(new Array(N), ()=>new Array(V+1).fill(0))
    for(let i=0; i<N; i++){
        for(let j=V; j>=c[i]; j--){
            dp[i][j] = Math.max(dp[i][j-c[i]]+w[i], dp[i-1][j])
        }
    }
}
