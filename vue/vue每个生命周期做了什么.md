
1. new Vue()初始化我们内部的option配置生成vue的实例，执行init操作
    1.初始化生命周期、初始化事件、initRender等操作

2.  执行beforeCreated

3. 初始化依赖注入的，响应式的处理
    1. 初始化 inject
    2. 初始化 state 
        1. 初始化 props
        2. 初始化 methods
        3. 初始化 data
        4. 初始化 computed
        5.初始化 watch
    3. 初始化 provide
    
4. created完成 （data初始化完成，计算属性，watch/event事件回调完成，dom未挂载）

5. 执行dom mounted 开始挂载组件到dom节点上
    1. 将我们传入的template 选项，或者 html 文本，通过一系列的编译生成 render 函数，中间过程如下：
        1. 编译我们的模板template，生成ast抽象语法树
        2. 优化ast，标记静态节点
        3. 根据ast生成render函数
        
6. beforeMounted调用
    ```javascript
       updateComponent = () => {
         vm._update(vm._render(), hydrating)
       }
    ```
    1. 执行我们生成的render函数 vm._update 方法则会对这个 vnode 进行 patch 操作，
       帮我们把 vnode 通过 createElm函数创建新节点并且渲染到 dom节点 中。
    2. 是由 响应式原理 的一个核心类 Watcher 负责执行这个函数，为什么要它来代理执行呢？
    因为我们需要在这段过程中去 观察 这个函数读取了哪些响应式数据，将来这些响应式数据更新的时候，
    我们需要重新执行 updateComponent 函数。
    3. 如果是更新后调用 updateComponent 函数的话，updateComponent 内部的
     patch 就不再是初始化时候的创建节点，而是对新旧 vnode 进行 diff，最小化的更新到 dom节点 上去。
     
     ```javascript
       new Watcher(vm, updateComponent, noop, {
         before () {
           if (vm._isMounted) {
             callHook(vm, 'beforeUpdate')
           }
         }
       }, true /* isRenderWatcher */)
    ```
     
7.  mounted被调用完成 
    1. beforeUpdate 数据更新时候调用, 当一个响应式属性被更新后，触发了 Watcher 的回调函数，
    也就是 vm._update(vm._render())，在更新之前，会先调用刚才在 before 属性上定义的函数，也就是
    ```javascript
        callHook(vm, 'beforeUpdate')
    ```
    2.updated 
          
![生命周期](../assets/vue生命周期.png)


[]: https://cloud.tencent.com/developer/article/1612869

[https://cloud.tencent.com/developer/article/1612869]
