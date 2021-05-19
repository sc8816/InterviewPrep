String.prototype.repeat = function (num) {
    //当前this指向调用方法的字符串
    let str = ''
    for(let i = 0; i<num; i++) {
        str += this
    }
    return str
}

console.log('hello'.repeat(5));
