function deepClone(data) {
    if(!isArrary(data) && !isObject(data)) return data
    let cloneObj = isObject(data) ? {} :[]
    if(isArrary(data)){
        for(let i of data){
            cloneObj.push(deepClone(i))
        }
    }else {
        for(let key in data){
            if(data.hasOwnProperty(key)){
                cloneObj[key] = deepClone(data[key])
            }
        }
    }
    return cloneObj
}
function isArrary(arr) {
    return Array.isArray(arr)
}
function isObject(data) {
    return typeof data === 'object' && data != null;
}
data = {a:1,b:2}
let param = deepClone(data)
param.a = 3
console.log(data,param)