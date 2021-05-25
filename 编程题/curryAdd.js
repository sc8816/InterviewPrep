function curryAdd() {
    let args = [...arguments]
    let add = function () {
        args = args.concat([...arguments])
        return add
    }
    add.toString = function () {
        return args.reduce((a,b)=>a+b)
    }
    return add
}
// console.log(curryAdd(1,2,3))

/*
1.实现一个add方法
add(1)(2,3)(4).value()   输出： 10
 */
function add() {
    let args = [...arguments]
    let _add = function () {
        args = args.concat([...arguments])
        return _add
    }
    _add.value = function () {
        return args.reduce((a,b)=>a+b)
    }
    return _add
}
console.log(add(1)(2,3)(4).value())