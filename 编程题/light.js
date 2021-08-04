// 红绿灯交替，红灯三秒绿灯两秒，黄灯一秒（promise实现）
function red(){
    console.log('red')
}
function green(){
    console.log('green')
}
function yellow(){
    console.log('yellow')
}

let light = (timer, whoLight) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            whoLight()
            resolve()
        }, timer)
    })
}

function step() {
    Promise.resolve()
        .then(()=> {
            return light(3000, red)
        })
        .then(()=>{return light(2000,green)})
        .then(()=>{return light(1000,yellow)})
        .then(()=>{step()})

}
step()
