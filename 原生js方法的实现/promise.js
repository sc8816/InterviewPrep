let resolvePromise = (promise2, x, resolve, reject) => {
    if (x === promise2) {
        // reject报错
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
    let called
    if (x != null && (typeof x == "function" || typeof x == 'object')) {
        try {
            const {then} = x
            if (typeof then == "function") {
                then.call(x, y => {
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, (err) => {
                    if (called) return
                    called = true
                    reject(err)
                })
            } else {
                resolve(x)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(e)
        }
    } else {
        resolve(x)
    }
}

class Promise {
    constructor(executor) {
        this.state = 'pending'
        this.reason = undefined
        this.value = undefined
        // 成功存放的数组
        this.onResolvedCallbacks = [];
        // 失败存放法数组
        this.onRejectedCallbacks = [];
        let resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled'
                this.value = value
                this.onResolvedCallbacks.forEach(fn => fn())
            }
        }

        let reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected'
                this.reason = reason
                this.onRejectedCallbacks.forEach(fn => fn())
            }
        }
        try {
            executor(resolve, reject)
        } catch (reason) {
            reject(reason)
        }
    }

    then(onFulfilled, onRejected) {
        // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        // onRejected如果不是函数，就忽略onRejected，直接扔出错误
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }
        let promise2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            if (this.state === 'rejected') {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }
            // 当状态state为pending时
            if (this.state === 'pending') {
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
                // onRejected传入到失败数组
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0)
                })
            }
        })
        return promise2
    }

    finally(callback) {
        return this.then((val) => {
            callback()
            return val
        }, (err) => {
            callback()
            throw err
        })
    }

    catch(onRejected) {
        return this.then(undefined, onRejected)
    }
}

Promise.resolve = function (val) {
    return new Promise((resolve) => resolve(val))
}

Promise.reject = function (val) {
    return new Promise((reject) => reject(val))
}

Promise.race = function (promises) {
    promises.forEach(promise => promise.then(resolve, reject))
}

Promise.all = function (promises) {
    if (!Array.isArray(promises)) throw new Error('请传入数组')
    let res = []
    let len = promises.length

    return new Promise((resolve, reject) => {
        if (!len) resolve(res)
        for (let i = 0; i < len; i++) {
            promises[i].then(data => {
                res.push(data)
                if (i === len - 1) resolve(res)
            }, err => reject(err))
        }
    })
}
Promise.defer = Promise.deferred = function () {
    let dfd = {}
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
module.exports = Promise;
