#####script标签中defer和async的区别
如果没有defer或async属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。
<p>下图可以直观的看出三者之间的区别:</p>

![image.png](https://upload-images.jianshu.io/upload_images/8825664-b83ec0c8e3038ba6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

其中蓝色代表js脚本网络加载时间，红色代表js脚本执行时间，绿色代表html解析。
defer 和 async属性都是去异步加载外部的JS脚本文件，它们都不会阻塞页面的解析，其区别如下：
- defer: 多个带defer属性的标签，按照加载顺序执行；后续文档的加载和执行与js脚本的加载和执行是并行进行的即异步执行
- async：多个带async属性的标签，不能保证加载的顺序;加载后续文档的过程和js脚本的加载(此时仅加载不执行)是并行进行的(异步)，js脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded事件触发执行之前
