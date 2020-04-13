function Parent(name) {
    this.name = [name]
}
Parent.prototype.sayName = function () {
    return this.name
}
function Child() {
    Parent.call(this, 'sc')
}
Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child