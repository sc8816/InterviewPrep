http: http 明文传输数据未加密，端口在80 响应速度比https更快，只需要Tcp三次握手即可

https：HTTP+SSL/TLS，通过 SSL证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密。除了Tcp连接的三个包还需要SSL握手的九个包，端口443，https更耗费服务器资源