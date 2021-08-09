// 1.去除所有的空格
let str = str.replace(/\s+/g, '')

//去除首部空格

let str = str.replace(/^\s+/g, '')

//去除尾部空格

let str = str.replace(/\s+$/g, '')

//去除首尾空格

let str = str.replace(/^\s+|\s+$/g, '')
