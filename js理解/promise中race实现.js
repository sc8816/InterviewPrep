Promise.prototype.race = function (promises) {
    promises.forEach(promise=>{
        promise.then(resolve, reject)
    })
}
