##### for in 和for of的区别

1. for in通常用来循环对象，遍历对象的键名(会返回原型上的属性)

2. for..of适用遍历数/数组对象/字符串/map/set等拥有迭代器对象的集合.但是不能遍历对象,
   因为没有迭代器对象.与forEach()不同的是，它可以正确响应break、continue和return语句
   
