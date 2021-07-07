//数组扁平化
// Array.prototype.flat = function () {
//     return this.reduce((pre, cur)=>{
//         console.log(pre)
//         if(Array.isArray(cur)){
//             return [...pre, ...cur.flat()]
//         }
//         return [...pre, cur]
//     }, [])
// }

Array.prototype.flat = function () {
    return [].concat(...this.map(item => Array.isArray(item) ? item.flat() : [item]))
}
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

console.log(arr.flat())


let status = {
    pending: 'pending',
    resolved: 'resolved',
    rejected: 'rejected'
}
let resolvePromise = (p, x, resolve, reject) => {
    if (p === x) throw new Error('循环调用')
    if (x !== null && (typeof x === 'function' || typeof x === 'object')) {
        let called = false
        try {
            const {then} = x
            if (typeof then === 'function') {
                then.call(x, y => {
                    if (called) return
                    called = true
                    resolve(p, y, resolve, reject)
                }, err => {
                    if (called) return
                    called = true
                    reject(x)
                })
            } else {
                if (called) return
                called = true
                resolve(x)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(x)
        }
    } else {
        resolve(x)
    }
}

class Promise {
    constructor(excuse) {
        this.value = undefined
        this.reason = undefined
        this.state = status.pending
        this.resolveCallBack = []
        this.rejectCallBack = []
        let resolve = (val) => {
            if (this.state === status.pending) {
                this.state = status.resolved
                this.value = val
                this.resolveCallBack.forEach(fn => fn())
            }
        }
        let reject = (reason) => {
            if (this.state === status.pending) {
                this.state = status.rejected
                this.reason = reason
                this.resolveCallBack.forEach(fn => fn())
            }
        }
        try {
            excuse(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    then(onFulifilled, onRejected) {
        onFulifilled = typeof onFulifilled === 'function' ? onFulifilled : (val) => val
        onRejected = typeof onRejected === 'function' ? onRejected : err => throw err
        let p = new Promise((resolve, reject) => {
            if (this.state === status.resolved) {
                setTimeout(() => {
                    try {
                        let x = onFulifilled(this.value)
                        resolvePromise(p, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)

            }
            if (this.state === status.rejected) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(p, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)

            }
            if (this.state === status.pending) {
                this.resolveCallBack.push(() => setTimeout(() => {
                    try {
                        let x = onFulifilled(this.value)
                        resolvePromise(p, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0))
                this.rejectCallBack.push(() => setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(p, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0))
            }
        })
        return p
    }
}

Promise.resolve = function (val) {
    return new Promise((resolve) => resolve(val))
}

Promise.reject = function (reason) {
    return new Promise((reject) => reject(reason))
}

Promise.catch = function (cb) {
    return this.then(undefined, cb)
}

Promise.finally = function (cb) {
    return this.then((value) => {
        cb()
        return value
    }, (reason) => {
        cb()
        throw err
    })
}

Promise.race = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(p => p.then(resolve, reject))
    })
}

Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
        let res = []
        promises.forEach(p => {
            p.then((data) => {
                res.push(data)
                if (res.length === promises.length) resolve(res)
            }, err => {
                reject(err)
            })
        })
    })
}
