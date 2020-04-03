function CreateAnother(obj) {
    // 通过调用函数创建一个新对象
 let o = Object.create(obj)
    // 以某种方式来增强这个对象
    o.sayName = function () {
        console.log('my name is' + this.name)
    }
    return o
}
// 使用寄生式继承来为对象添加函数，会由于不能做到函数复用而降低效率；这一点和构造函数模式类似。