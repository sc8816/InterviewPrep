#####webpack优化
1. 优化打包速度，我们先分析哪些地方可能会影响到我们的打包速度
    1. 我们在进行打包的时候需要获取到所有的依赖模块（）
    2. 解析所有的依赖模块，解析成浏览器能够识别的代码
    3. 将所有的依赖打包成一个文件，需要对代码进行压缩
    4. 二次打包时间，文件修改的时候需要重新打包
    5. 运行在 Node.js 之上的 webpack 是单线程模式的，逐个文件进行解析（）
    6. webpack 缓存，将结果缓存到磁盘，提高第二次构建的速度
    7. 代码压缩（ParallelUglifyPlugin 插件实现了多线程压缩）
    8. 优化搜索时间- 缩小文件搜索范围 减小不必要的编译工作（loader配置test 、 include 、 exclude命中规则， alias配置）
    
2. 优化包体积
    1. 压缩js （ParallelUglifyPlugin）
    2. 提取css，把css文件提取到单独的css样式文件中，因为css和js并行加载的 （mini-css-extract-plugin）
    3. 压缩css （optimize-css-assets-webpack-plugin）

3. 首屏优化
    1. cdn缓存
    2. tree-shaking
    3. 提取公用的代码（SplitChunksPlugin）
    4. 按需加载
