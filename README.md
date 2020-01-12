<!--
 * @Descripttion: 
 * @version: 
 * @Author: yang_ft
 * @Date: 2019-12-23 14:20:00
 * @github: famensaodiseng
<<<<<<< HEAD
 * @LastEditTime : 2020-01-09 17:54:08
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

接口跑起来之后，可以用postman进行接口测试
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
    切换分支`git checkout master`
    合并分支`git merge  login`
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
#### 通过接口获取菜单数据

通过axios请求拦截器添加token,保证拥有获取数据的权限。

```
//axios 请求拦截
axios.interceptors.request.use(config => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
```
有权限的api就可以发送成功请求了。


我们再进行切换的时候发现点击一个的时候，多个都进行了折叠，那么此时，我们
设置index，动态绑定属性。设置唯一的id.而由于id是字符串，所以后面加了‘’空字符串
<el-submenu :index="item.id +''" v-for="item in menuList" :key="item.id">

侧边栏路由的改造：
为整个menu菜单添加一个router属性即可。接下来通过index属性可以进行跳转，此时我们选用path进行路由跳转。

保持高亮的时候，我们把当前的index值保存在了sessionStorage中。


卡片视图组局。并且使用到了栅格布局。

通过作用域插槽，获取获取用户列表这一状态。
{{scope.row}}就是这一行的属性


操作这一列也必须通过作用域插槽来进行渲染。

#### 自定义校验规则

#### 添加用户的close状态，整个对话框关闭后重置表单。

#### 表单提交之前一定要预校验。

#### 作用域插槽自定义权限等级  
作用域插槽使用了但是报错，可以再eslintrc.js中的rules配置 `"no-unused-vars": 'off'`
```
 <template slot-scope="scope">
            <el-tag v-if="scope.row.level=== '0'">一级</el-tag>
            <el-tag type="success">二级</el-tag>
            <el-tag type="warning">三级</el-tag>
          </template>
```

####    权限管理
不同的角色有不同的权限。不同的用户有不同的权限。

只要不同的用户拥有了不同的角色，就可以拥有不同的权限。

设置展开列,`type="expand" `
```
 <el-table-column type="expand" label="是否折叠" width="100px"></el-table-column>

```
#### 这里没有做角色列表页的添加，编辑和删除（后期有时间了补充）。

<pre> 这个标签可以对角色下面的children标签进行美化</pre>


####  一级，二级，三级权限

思路：
    1.首先，我们通过作用域插槽拿到了这一行角色的数据。
    2.通过.children拿到了所有的一级权限。
    3.通过第一次for循环渲染一级
    4.通过第二次第三次分别渲染第二三级权限。

美化，增加一个最小宽度min-width:1366px;

#### 没当我删除权限列表以后，会合上，这是为什么呢？
因为每次删除完以后，我们会重新渲染一次列表。。
为了防止关上窗口，不要进行this.getRolesList()重新完整渲染。


####  通过递归的形式，获取角色下所有三级权限的id，并保存到数组中defKeys

```
getLeafKeys(node, arr) {
      //如果当前node节点不包含children属性，则是三级节点
      if (!node.children) {
        return arr.push(node.id)
      }
      node.children.forEach(item => this.getLeafKeys(item, arr))
    }
```


报错：Duplicate keys detected: '0'. This may cause an update error. found in

原因：一个template中有两个一样的v-for, key属性冲突导致
解决方法：
在第二个v-for中， key属性设置一下即可：
:key="index+1"

#### 参数列表

由于只允许为第三级分类设置相关参数
所以我们必须有选择商品分类的时候才可以进行参数的设置
这里我们就用到了计算属性
计算selectedCateKeys: [],数组的length的长度为3的时候返回布尔值，
进行参数的禁用和启用








#### 添加进度条效果 nprogress

在发起请求之前和结束以后，NProgress.start()和NProgress.start()



#### 发布优化build

eg: 发布阶段是不允许有console.log的。
此时我们可以配置一个babel插件`babel-pulgin-transfrom-remove-console`，不让进行console
