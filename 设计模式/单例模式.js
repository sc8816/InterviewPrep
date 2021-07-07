/*
**只存在一个实例
 */
let Single = (function() {
    let instance = null
    return function (name) {
        if(instance) return instance
        this.name = name
        this.getName = function() {
            return instance.name
        }
        return instance = this
    }
})()
let winner = new Single("winner");  //winner
console.log(winner.getName());
let sunner = new Single("sunner");  //winner
console.log(sunner.getName())
