XSS: 跨站脚本攻击，黑客在网站中插入一段javascript脚本，盗取隐私，因为浏览器无法区分注入的是恶意的代码，还是正常内容
所以他都会进行执行
1.反射型：恶意 JavaScript 脚本属于用户发送给网站请求中的一部分，随后网站又将这部分返回给用户，恶意脚本在页面中被执行。一般发生在前后端一体的应用中，服务端逻辑会改变最终的网页代码。
2.基于Dom型：目前更流行前后端分离的项目，反射型 XSS 无用武之地。 但这种攻击不需要经过服务器，我们知道，网页本身的 JavaScript 也是可以改变 HTML 的，黑客正是利用这一点来实现插入恶意脚本。
3.存储型：又叫持久型 XSS，顾名思义，黑客将恶意 JavaScript 脚本长期保存在服务端数据库中，用户一旦访问相关页面数据，恶意脚本就会被执行。常见于搜索、微博、社区贴吧评论等。


怎么防护
一切用户输入皆不可信，
在输出时进行验证将 HTML 元素内容、属性以及 URL 请求参数、CSS 值进行编码当编码
影响业务时，使用白名单规则进行检测和过滤使用 
W3C 提出的 CSP (Content Security Policy，内容安全策略)，
定义域名白名单设置 Cookie 的 HttpOnly 属性
