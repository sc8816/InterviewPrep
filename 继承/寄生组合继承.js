function Anmial() {

}
function Dog() {
    Anmial.apply(this,[...arguments])
}
//
//Dog.prototype = Object.create(Anmial.prototype)
Dog.prototype = new Anmial()
Dog.prototype.constructor = Dog ``