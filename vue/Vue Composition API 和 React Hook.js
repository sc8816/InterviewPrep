/*
React HOOK:
           1.react hook 会按照顺序执行，我们必须保证每次顺序都是一样的，（不允许在循环内部、条件语句中或嵌套函数里调用 Hooks）（底层是链表实现的）
           2.react hook 数据更改的时候，会导致重新render，重新render又会重新把hooks重新注册一次
           3.声明状态：useState 返回初始值和setter函数、
           4.生命周期: 函数组件中useEffect相当于componentWillUnMounted、componentDidMounted、componentDidUpdate
           5.useEffect 性能需要自己把控在相关依赖没有改变的情况下，追踪依赖允许第二个参数参入数组添加依赖项，依赖性改变的时候才进行执行
 */

/*
vue-composition-api:
            1.setup函数只会执行一次，晚于beforeCreated，早于created
            2.reactive和ref，reactive解构后会失去响应式
            3.vue中提供了对应钩子的函数进行调用 （onMounted、onUpdated 和 onBeforeUnmount：）
            4.使用watch和watchEffect执行响应状态的变化，会自动进行追踪依赖，其他数据改变不会影响到函数的执行
 */
