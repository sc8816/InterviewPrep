//正则匹配
let str = 'sVadASfAsDSFJ'
function transformWord(str) {
    return str.split('').map(s => /[a-z]/.test(s) ? s.toUpperCase() : s.toLowerCase()).join('')
}
console.log(transformWord(str))

//

function transformW(str) {
    let res = ''
    for(let s of str) {
        if(s.toLowerCase()===s){
            res += s.toUpperCase()
        }else{
            res += s.toLowerCase()
        }
    }

    return res
}

console.log(transformW(str));
