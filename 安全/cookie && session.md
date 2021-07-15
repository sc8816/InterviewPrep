#####cookie
1. 存储位置不一样
cookie 存储在客户端
session 存储在服务端

2. 存储大小
cookie 好像是2kb
session一般没有限制

3.cookie的话如果没有设置httponly我们可以对cookie进行访问

4. cookie和session一般搭配使用，用来进行用户鉴权，我们访问服务端时服务端会创建一个sessionid，通过cookie存储在客户端
