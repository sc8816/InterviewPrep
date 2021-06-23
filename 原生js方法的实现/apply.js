function _apply(ctx=window,args=[]) {
    let fn = `fn${Date.now()}`
    ctx[fn] = this
    let result = ctx[fn](args)
    delete ctx[fn]
    return result
}

function call(ctx=window,...args) {
    let fn = `fn${Date.now()}`
    ctx[fn] = this
    let result = ctx[fn](...args)
    delete ctx[fn]
    return result
}

function bind() {
    let ctx = [].shift.call(arguments)
    let self = this
    let args = Array.from(arguments)
    return function () {
        self.call(ctx, ...args)
    }
}

Function.prototype.apply = function (ctx, args = []) {
    ctx = ctx||window
    let fn = `fn${Date.now()}`
    ctx[fn] = this
    let res = ctx[fn](args)
    delete ctx[fn]
    return res
}


