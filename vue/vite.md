##### vite 原理： 
基于现代浏览器对es module的支持， script标签会设置type = module，
当我们页面通过 import 时候，浏览器会发起一个请求，vite拦截请求后会进行代码的编译解析，实现了按需加载的能力。（由于引入文件的时候只支持./ 、../ 、/） 所以对于 vue 的引入 其实就是判断import文件的路径是不是支持的方式，不是的话我们需要从node_module去加载文件、然后.vue文件的引入，也是通过node_module 里面引入vue/compile/sfc 文件来进行解析、（.css\.less）那些其实也是通过获取文件的内容加入link标签

