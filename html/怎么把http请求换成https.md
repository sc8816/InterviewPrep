 在项目中如何把http的请求换成https:

- 一般在项目中是会对axios做一层封装，所以每次请求的域名也是写在配置文件中，通过baseURL字段专门用于存储它，所以只要改这个字段就可以达到替换所有请求http为https了。


- 利用meta标签把http请求换为https:
```
<meta http-equiv ="Content-Security-Policy" content="upgrade-insecure-requests">
```

