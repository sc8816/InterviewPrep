function debounce(fn,time) {
    let timer = null
    return function () {
        timer&&clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.call(this, ...arguments)
        },time)
    }
}
function throttle(fn,delay) {
    let can = true
    return function () {
        can = false
        setTimeout(()=>{
            fn.apply(this,[...arguments])
            can = true
        },delay)
    }
}