###### 什么是虚拟DOM

简单来说，虚拟dom就是一个最少包含tagName attr children 属性的js对象，是一层对真实dom节点的抽象，通过js对象（vdom）作为基础的树，使用对象的属性来描述节点，最后通过一系列的操作反映到真实节点上。

######  为什么需要虚拟dom

使用用传统的原生api或jQuery去操作DOM时，浏览器会从构建DOM树开始从头到尾执行一遍流程，当我们需要更新多个dom结点的时候，传统的操作，会一个一个进行操作，最终 频繁的dom操作引起的浏览器的回流和重绘造成
性能开销大，虚拟dom出现是在针对性的对更新的dom进行修改，会在指定时间内对修改的dom进行更新，从而减少性能的消耗；

##### 简单实现虚拟dom

```javascript
//node 节点
 var node = {
    tagName: 'div',
    css: {
        width: '100px' ,
        height: '100px' ,
        backgroundColor: 'red'
    },
    events:{
        onClick: ()=> {
            console.log('virtual dom')
        }
    },
    children: [
        {
            tagName: 'span',
            attr: {
                innerText: 'nice'
            }
        }
    ]
 }

```
```javascript
      function addAttr(obj, attrs) {
              for(let keyName in attrs) {
                obj[keyName] = attrs[keyName]
              }
      }
     function render(node) {
        const vNode = document.creatElement(node.tagName)
        const {css, attr, events, children} = node
        addAttr(vNode.style, css)
        addAttr(vNode, attr)
        addAttr(vNode, events)
        if(node.children) {
            for(let child of node.children) {
                vNode.append(render(child))
            }
        }

        return vNode
     }
```


