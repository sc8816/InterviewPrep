//通过借用apply call 方法在子构造函数这调用父构造函数
//然后添加属性在子类的实例上
function SuperType(name) {
    this.name = name
}
function SubType() {
    SubType.call(this,"sc")
    this.age = 23
}
//缺点：方法都在构造函数中定义，函数无法得到复用
