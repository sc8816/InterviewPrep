function permutate(str) {
    let res = []
    let vis = {}
    if(!str) return res

    let dfs = (s, vis, temp, res)=>{
        //截止条件
        if(temp.length===s.length){
            res.push([...temp])
            return
        }
        //候选节点
        for(let i=0; i<s.length;i++){
            if(vis[str[i]]>0){
                vis[str[i]]--
                temp.push(str[i])
                dfs(s, vis, temp, res)
                vis[str[i]]++
                temp.pop()
            }
        }
    }
    for(let i=0; i<str.length;i++){
        if(vis[str[i]]){
            vis[str[i]]++
        }else{
            vis[str[i]] = 1
        }
    }
    for(let i=0; i<str.length;i++){
        vis[str[i]]--
        dfs(str, vis, [str[i]], res)
        vis[str[i]]++
    }
    return res
}
console.log(permutate('1234'))