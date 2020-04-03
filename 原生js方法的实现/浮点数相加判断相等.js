//加法
function floatAdd (num1,num2){
    let r1,r2
    try{
        r1 = num1.toString().split('.')[1].length
    }catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split('.')[1].length
    }catch (e) {
        r2 = 0
    }
    let m = Math.pow(10, Math.max(r1,r2))
    return (num1*m+num2*m)/m
}
console.log(floatAdd(0.1,0.2)===0.3)

//减法
function floatSub (num1,num2){
    let r1,r2
    try{
        r1 = num1.toString().split('.')[1].length
    }catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split('.')[1].length
    }catch (e) {
        r2 = 0
    }
    let maxPoint = Math.max(r1,r2)
    let m = Math.pow(10, maxPoint)
    return (num1*m - num2*m)/m.toFixed(maxPoint)
}