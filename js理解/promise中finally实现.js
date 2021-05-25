Promise.prototype.finally = function (callback) {
    return this.then((value)=>{
        callback()
        return value
    }, err=>{
        callback()
        throw err
    })
}
