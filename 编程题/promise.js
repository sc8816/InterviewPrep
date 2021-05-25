Promise.all = function (promises) {
    if(!Array.isArray(promises)) throw new Error('错了')
    let len = promises.length
    let res = []
    return new Promise((resolve,reject)=>{
        if(!promises.length) resolve(res)
        for(let i=0;i<promises.length;i++){
            Promise.resolve(promises[i]).then((data)=>{
                res.push(data)
                if(res.length===len){
                    resolve(res)
                }
            }, err=>reject(err))
        }
    })
}
