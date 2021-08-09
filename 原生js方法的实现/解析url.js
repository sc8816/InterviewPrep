function parseUrlParams(url) {
    let obj = {}
    url.replace(/([^?&]+)=([^&]+)/g, (_, k, v)=> {
        obj[k] = v
    })

    return obj
}


function parseUrl(url) {
    url = new URL(url)
    let paramsStr = url.search.slice(1)
    let obj = {}
    for(let k of paramsStr.keys()) {
        obj[k] = paramsStr.get(k)
    }

    return obj
}
