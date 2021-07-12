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
    if(can){
        return function () {
            can = false
            setTimeout(()=>{
                // if()
                fn.apply(this,[...arguments])
                can = true
            },delay)
        }
    }
}
