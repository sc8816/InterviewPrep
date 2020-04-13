// Object.create实现
function object(obj) {
    function Super() {}
    Super.prototype = obj
    return new Super()
}

function SuperType() {
    this.property = true
}
function SubType() {
    this.subproperty = false
}
SubType.prototype = new SuperType()