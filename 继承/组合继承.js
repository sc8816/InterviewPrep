function Anmial() {

}
function Dog() {
    Anmial.apply(this,[...arguments])
}
//
//Dog.prototype = Object.create(Anmial.prototype)
Dog.prototype = new Anmial()
Dog.prototype.constructor = Dog

//缺点每次创建子类实例的时候都执行了两次构造函数Parent。call和new Parent