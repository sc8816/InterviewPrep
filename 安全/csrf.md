CSRF:“跨站请求伪造”, CSRF 攻击就是黑客引诱用户打开黑客的网站，利用用户的登陆状态发起跨站请求。

实现：
最容易实现的是 Get 请求，一般进入黑客网站后，可以通过设置 img的 src 属性来自动发起请求
在黑客的网站中，构造隐藏表单来自动发起 Post 请求
通过引诱链接诱惑用户点击触发请求，利用 a 标签的 href。

防护：
针对实际情况，设置关键 Cookie 的 SameSite 属性为 Strict 或 Lax
服务端验证请求来源站点(Referer、Origin)
使用 CSRF Token，服务端随机生成返回给浏览器的 Token，每一次请求都会携带不同的 CSRF Token

