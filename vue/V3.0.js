const toProxy = new WeakMap() //存放代理后的对象 （防止再次代理）
const toRaw = new WeakMap() //存放的是代理前的对象（已经代理过的对象再次传入去代理）
function reactive(target) {
    return createReactive(target)
}

function trigger() {
    console.log('触发试图更新')
}

function isObject(target) {
    return typeof target === 'object' && target !== null
}

function createReactive(target) {
    if (!isObject(target)) {
        return target
    }
    // 如果已经代理过，直接返回代理对象
    if(toProxy.get(target)){
        return toProxy.get(target)
    }
    //传入的是代理对象直接返回
    if(toRaw.has(target)){
        return target
    }
    let observeHandle = {
        get(target, key, receiver) {
            // console.log(`getting ${key}!`);
            let data = Reflect.get(target, key, receiver)
            return isObject(target) ? createReactive(data) : data;
        },
        set(target, key, value, receiver) {
            //触发的是私有属性，更新视图否则屏蔽掉（数组的length）
            if (target.hasOwnProperty(key)) {
                trigger()
            }
            return Reflect.set(target, key, value, receiver);
        },
        deleteProperty(target, key) {
            return Reflect.deleteProperty(target, key)
        }
    }
    let observe = new Proxy(target, observeHandle)
    toProxy.set(target, observe) //原对象：代理后的结果
    toRaw.set(observe,target)
    return observe
}

let obj = {
    name: 'sc',
    arr: [1, 2, 3]
}
let arr = [1, 2, 3]
let proxy = reactive(obj)
//toProxy作用：防止再次代理
proxy = reactive(obj)
proxy = reactive(obj)
proxy = reactive(obj)
//toRaw作用：已经代理过的对象再次传入去代理
proxy = reactive(proxy)
proxy.arr.push(4)
console.log(proxy);