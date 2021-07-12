function Sub(name, age) {
    inheirt(Sub, Sup)
    Object.getPrototypeOf(Sub).call(this, name)
    this.age = age
    return this
}

function Sup(name) {
    this.name = name
}

function inheirt(subType, superType){
    subType.prototype.__proto__ = superType.prototype
    subType.prototype.constructor = subType
    Object.setPrototypeOf(subType, subType);
}
