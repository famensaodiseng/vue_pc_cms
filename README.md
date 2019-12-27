<!--
 * @Descripttion: 
 * @version: 
 * @Author: yang_ft
 * @Date: 2019-12-23 14:20:00
 * @github: famensaodiseng
<<<<<<< HEAD
 * @LastEditTime : 2019-12-27 18:47:31
=======
 * @LastEditTime : 2019-12-27 18:36:52
>>>>>>> login
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
<<<<<<< HEAD
    查看分支`git branch`
    切换分支`git checkout master`
    合并分支`git merge  login`
=======
    查看当前项目中的分支`git branch`

注意：由于eslint语法限制或者说vscode的问题。
有些语句后面会加分号，或者有些单引号会变成双引号。



解决：
在根目录下面创建一个文件.prettierrc ,他是一个json格式的文件
内容
```
    {
        "singleQuote": true,    启用单引号格式化的方式       
        "semi": false           后面不会再加分号了
    }
```
如果报错：`Missing space before function parentheses`
函数后面需要有空格,其实这不是一个错。
那么此时需要在eslintrc文件中 rules里面配置下面的东西即可
 'space-before-function-paren': 0,  

安装less-loader和less安装到开发依赖


#### 发起请求之前可以先进行预校验

    点击登陆的时候调用函数的validate函数进行预调验。

#### 将登陆成功之后的token, 保存sessionStorage中
     seeionStorage是会话期间的存储机制，localStorage是长期的存储机制。
     项目中除了登陆之外的其他API接口，必须在登陆之后才可以访问。
     token只应该再当前网站打开期间生效，所有token保存在sessionStorage中


#### 路由导航守卫
home属于有权限的页面，此时，用户没有登陆。但是直接通过url访问特定页面。
需要重新导航到登陆页面。
为路由对象，添加beforeEach 导航守卫


```
//挂载路由导航守卫
router.beforeEach((to, from, next) => {
  //to表示访问的路径
  //from表示从哪个路径跳转而来
  //next是一个函数，表示放行。
  //next()放行  next('/login')强制跳转
  if (to.path === '/login') return next();
  //获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
})
```

#### 退出
原理：基于token的方式退出实现是比较简单的，只需要销毁本地的token即可，这样，后续的请求就不会携带token,必须重新登陆生成一个新的token之后才可以访问页面。
>>>>>>> login
