function parseUrlParams(url) {
    let obj = {}
    url.replace(/([^?&]+)=([^&]+)/g, (_, k, v)=> {
        obj[k] = v
    })

    return obj
}
