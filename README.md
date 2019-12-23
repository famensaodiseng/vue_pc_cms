<!--
 * @Descripttion: 
 * @version: 
 * @Author: yang_ft
 * @Date: 2019-12-23 14:20:00
 * @github: famensaodiseng
 * @LastEditTime : 2019-12-23 14:57:57
 -->
# vue_pc_project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration


#### 电商项目基本的项目概述

pc端，pc后台管理，小程序，移动web，移动App  

pc后台管理项目是给企业用的。管理员。

#### 后台项目的环境安装配置

-   安装MySql数据库
-   安装node.js
-   配置项目相关信息
-   启动项目
-   使用postman/postwoman  测试后台项目接口是否正常

#### 后台接口再vue_api_server中,开启步骤见文件

接口跑起来之后，可以进行接口测试
>   http://127.0.0.1:8888/api/private/v1/login
username:admin
password:123456

![](https://raw.githubusercontent.com/famensaodiseng/Warehouse/master/Rlf4LM.png?token=AD7VZ776FWCH4JZVT7QMWL26ABQUY)

#### 登陆概述
    1.  在登陆页面输入用户名和密码
    2.  调用后台接口进行验证
    3.  通过验证以后，根据后台的响应状态跳转到项目主页


    登陆业务的相关技术点。
    http是无状态的，那么我们需要记录用户的状态。
    第一种方案：我们可以采用cookie和session保存用户的登陆状态————不存在跨域
    第二种方案：我们可以采用token和session保存用户的状态————存在跨域
    
    我们现在的情况是有可能存在跨域的问题。
    
    token的原理
    客户端登陆输入账户和密码以后，如果登陆成功以后，服务器验证通过以后会生成该用户的token并返回。token是由服务器生成的。
    客户端拿到token以后需要存储token，后续所有的请求都需要携带token发送请求。    

#### 登陆模块

    首先我们创建一个login分支并且切换过去`git checkout -b login`
    查看分支`git branch`
