/*
**缺点： 1、只能够劫持对象的属性，而非对象，需要遍历每个属性进行劫持（导致的结果是新增，删除对象的属性无法检测 a:{b:1}, 给新增a.c）
*       2、无法监听数组的变化，需要对数组的方法进行重写
 */
//监听数组
let ArrayProperty = Array.prototype;
let arrObj = Object.create(ArrayProperty);
['pop', 'push', 'slice'].forEach(method => {
    arrObj[method] = function () {
        updateView()
        ArrayProperty[method].call(this, ...arguments)
    }
})

//更新视图
function updateView() {
    console.log('触发视图更新')
}

//监听数据
function defineProperty(target, key, value) {
    watchData(value)
    Object.defineProperties(target, {
        get() {
            return value
        },
        set(newVal) {
            if (value !== newVal) {
                //当给对象属性赋值为对象的时候，需要对赋值的对象进行监听
                watchData(newVal);
                updateView()
                value = newVal
            }
        }
    })
}

function watchData(val) {
    if (typeof val !== 'object' || val === null) {
        return val
    } else if (Array.isArray(val)) {
        //如果是数组对数组的方法进行重写，进行监听，更新视图
        val.__proto__ = arrObj
    }
    for (let key in val) {
        defineProperty(val, key, val[key])
    }
}
// let data = {name: 'sc', phone: [1,2,3]};
// watchData(data);
// data.phone.push(4);
// console.log(data.phone);
let data = {name: 'songcong', info: {age: 25}}
watchData(data);
data.name = 'sc';
data.info = {sex: 'man'}
data.info.sex = 'woman'
console.log(data)

//delete 原来的属性后，原先的重新给该属性进行赋值不会进行监听

Object.defineProperty(a, 'b', {
    get(){
        console.log(a.b)
    },
    set(val){
        console.log(a.b);
    }
})
let a
a.b =3
delete a.b
a.b = 4

/*
**为什么vue2.0不支持IE9以下
 */
/*
ie9以下不支持ES5语法包括 Function.prototype.bind,
数组：indexOf, forEach, map & filter
对象： defineProperty, create & keys,
字符串： trim()

 */
