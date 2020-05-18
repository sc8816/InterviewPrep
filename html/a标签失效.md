在下面代码中我们给a标签设置了hover和visited ，我们在点击之后hover事件失效
 ``` 
a:hover{
  color: green;
  text-decoration: none;
}
a:visited{ /* visited在hover后面，这样的话hover事件就失效了 */
  color: red;
  text-decoration: none;
}
```
- a:link：未访问时的样式，一般省略成a 
- a:visited：已经访问后的样式 
- a:hover：鼠标移上去时的样式 
- a:active：鼠标按下时的样式

这四个属性我们进行设置时是存在优先顺序的一般以 **LoVeHAte**进行排序
1. 先设置link未访问的样式
2. 在设置visited
3. hover
4. active


