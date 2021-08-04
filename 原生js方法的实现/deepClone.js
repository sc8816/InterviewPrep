function deepClone(data) {
    if(!isArrary(data) && !isObject(data)) return data
    //日期格式
    if(isDate(data)) {
        let time = data.getTime()
        return new Date().setTime(time)
    }
    //正则表达式
    if(isReg(data)) {
        const {source, flags} = data
        return new RegExp(source, flags)
    }
    //function
    if(isFunc(data)) {
        let funcString = data.toString()
        let clone = eval(`(()=>{${funcString})()`)
        clone.prototype = data.prototype
        return clone
    }
    // map
    if(isMap(data)) {
        let result = new Map()
        data.forEach((val, key) => {
            result.set(key, deepClone(val))
        })
        return result
    }
    //set
    if(isSet(data)) {
        let result = new Set()
        data.forEach((val) => {
            set.add(deepClone(val))
        })
        return result
    }
    //对象和数组
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
function isDate(date) {
    return date instanceof Date
}
function isMap(data) {
    return data instanceof Map
}
function isSet(data) {
    return data instanceof Set
}
function isFunc(data) {
    return Object.prototype.toString.call(data) === '[object Function]'
}
function isReg(data) {
    return data instanceof RegExp
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
