//数组扁平化
// function flat(arr, res) {
//     for (let data of arr) {
//         if (Array.isArray(data)) {
//             flat(data, res)
//         } else {
//             res.push(data)
//         }
//     }
//     return res
// }
//
// let res = []
// flat([1, 2, [3, 4, [5, 6]]], res)
// console.log(res)
let data = [1, 2, [3, 4, [5, 6]]].flat(Infinity)
console.log(data)