// Object.create实现
function object(obj) {
    function Super() {}
    Super.prototype = obj
    return new Super()
}