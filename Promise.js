class Promise{
    /**
     * pending,fullfilled,rejected
     * 我们需要一个内部变量来保存promise的当前状态
     */
    _status = 'pending'

    /**
     * 我们需要一个变量保存promise的决议结果
     * 考虑 new Promise((resolve) => resolve(2));
     **/

    _result

    // 描述完then后，我们发现我们需要两个回调队列来保存使用then注册的回调
    _successCallback = []
    _errorCallback = []

    /**
     * 构造函数接收一个函数作为入参
     * 该函数会接收resolve,reject作为入参，并且立即执行
     * Promise将在fn调用resolve/reject后决议
     */
    constructor(fn) {
        try {
            //new Promise((resolve, reject) => {})
            fn(this.resolve.bind(this), this.reject.bind(this))
        } catch(e) {
            this.reject(e)
        }
    }

    /**
     * 常用方式Promise.resolve(something).then(...)
     * 可见Promise.resolve返回一个新的Promise实例
     **/
    static resolve(result){
        if(this._status!=='pending') throw new Error("重复决议")
        this._result = result
        this._runCallbackAsync('success')
    }

    static reject(){
        if(this._status !== 'pending') throw new Error('重复决议promise')
        this._result = err
        // 这里我们执行错误回调
        this._runCallbackAsync('error')
    }

    /**
     * 考虑一下resolve做了什么事情
     * 其实resolve改变promise的状态并将入参作为回调函数的入参
     **/
    resolve(){}

    reject(){}

    /**
     * then称得上是promise的核心方法，到底then做了什么，我们考虑一下
     * then会接收两个函数，在promise的状态发生改变后会调用对应的函数
     * 所以在这里then的作用应当是个事件注册器。
     * 需要注意的是then是能多次调用的
     * const promise = new Promise(fn)
     * promise.then(fn1)
     * promise.then(fn2)
     * 另外then是支持链式调用的，如promise.then(fn3).then(fn4)
     * 所以调用then还应当返回一个promise对象
     **/

    then(){}

    // 我们再定义一个内部方法来异步执行这些回调函数
    // 使用入参type区分执行successCallback还是errorCallback
    _runCallbackAsync(type) {}
}