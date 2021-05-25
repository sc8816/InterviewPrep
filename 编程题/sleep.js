//实现一个sleep（），sleep(1000)表示1000毫秒后执行
function sleep(n) {
    return new Promise(resolve => setTimeout(resolve, n))
}
//await
async function  asyncSleep(callback) {
    let out  = await sleep(1000)
    callback()
    return out
}

//Generator

function* sleeps() {
    yield new Promise((resolve)=>setTimeout(resolve, 1000))
}
sleeps().next().value.then(()=>{
    console.log('nice')
})


