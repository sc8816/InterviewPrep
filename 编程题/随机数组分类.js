//随机生成一个长度为 10 的整数类型的数组，例如 [2, 10, 3, 4, 5, 11, 10, 11, 20]，将其排列成一个新数组，要求新数组形式如下，例如 [[2, 3, 4, 5], [10, 11], [20]]。
let generateNum = (max) => Math.floor(Math.random() * (max + 1))
let arr = Array.from(new Array(10), () => generateNum(100))
let res = []
arr = [...new Set(arr)].sort((a, b) => a - b)
arr.forEach(num => {
    let idx = Math.floor(num / 10)
    res[idx] = [...res[idx] ? res[idx] : [], num]
})

res = res.filter(item => item.length)

console.log(res);
