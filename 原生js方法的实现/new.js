function newObj() {
    let obj = {}
    let fn = [].shift.apply(arguments)
    obj.__proto__ = fn.prototype
    fn.apply(obj,[...arguments])
    return obj
}
function Person({name,age}) {
    this.name = name
    this.age = age
}
console.log(newObj(Person,{name:'sc',age:'23'}))