// 手动实现jsonp
function jsonp(url,data) {
    return new Promise((resolve,reject)=>{
        //定义方法
        let fn = `fn${Date.now()}`
        //url处理
        url = url.indexOf('?')!==-1 ? url+'&' : url+'?'
        url+= param(data)
        //动态创建script
        let jsNode = document.createElement('script')
        jsNode.src = url+`callback=${fn}`
        console.log(jsNode.src)
        //将方法定义在window
        window[fn] = function (data) {
            delete window[fn]
            document.removeChild(jsNode)
            if(data){
                resolve(data)
            }else {
                reject('no data')
            }
        }
        //处理错误
        jsNode.addEventListener('error',()=>{
            delete window[fn]
            document.removeChild(jsNode)
            reject('error')
        },false)
        document.appendChild(jsNode)
    })
}
function param(data) {
    let res = ''
    for(let key in data){
        res+=`&${key=data[key]}`
    }
}
jsonp('http://192.168.0.103:8081/jsonp', {a: 1, b: 'heiheihei'})