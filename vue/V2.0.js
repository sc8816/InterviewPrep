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