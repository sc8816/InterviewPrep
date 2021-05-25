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

Array.prototype.flat = function(){
    return [].concat(...this.map(item => Array.isArray(item) ? item.flat() : [item]))
}
let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]

console.log(arr.flat())
