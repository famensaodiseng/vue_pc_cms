<!--
 * @Descripttion: Home
 * @version: Home
 * @Author: yang_ft
 * @Date: 2019-12-27 14:21:21
 * @github: famensaodiseng
 * @LastEditTime : 2020-01-02 16:09:36
 -->
<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/lz.png" alt />
        <span>SAP后台管理系统</span>
      </div>
      <el-button type="info" @click="logout" class="exit">退出</el-button>
    </el-header>
    <!-- 头部区域 -->
    <el-container>
      <!-- 主题部分 -->
      <el-aside :width="isCollapse ? '64px':'200px'">
        <div class="toggle-button" @click="toggleCollapse">
          <i class="el-icon-s-help"></i>
        </div>
        <!-- 侧边栏菜单区域 -->
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="activePath"
        >
          <!-- 一级菜单 -->
          <el-submenu :index="item.id +''" v-for="item in menuList" :key="item.id">
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.id]"></i>
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item
              :index="'/'+subItem.path"
              v-for="subItem in item.children"
              :key="subItem.id"
              @click="saveNavState('/'+subItem.path)"
            >
              <i class="el-icon-menu"></i>
              <span>{{subItem.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 左侧区域 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- 右侧区域 -->
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menuList: [],
      iconsObj: {
        '125': 'el-icon-user-solid',
        '103': 'el-icon-s-tools',
        '101': 'el-icon-s-shop',
        '102': 'el-icon-s-order',
        '145': 'el-icon-s-operation'
      },
      // 是否折叠
      isCollapse: false,
      activePath: ''
    }
  },
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList() {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) return this.$message.error(res.meta.msg)
      this.menuList = res.data
      // console.log(res)
    },
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    saveNavState(activePath) {
      window.sessionStorage.setItem('activePath', activePath)
      this.activePath = activePath
    }
  },
  created() {
    this.getMenuList()
    this.activePath = window.sessionStorage.getItem('activePath')
  }
}
</script>
<style lang="less" scoped>
.el-header {
  background-color: #0706;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
  span {
    margin-left: 10px;
  }
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #fff;
}
.home-container {
  height: 100%;
}
.exit {
  float: right;
  color: rgb(255, 255, 255);
}
.home-container div img {
  width: 50px;
}
.el-submenu-item {
  color: #fff;
}
.el-menu {
  border: 0;
}
.toggle-button {
  font-size: 16px;
  line-height: 30px;
  text-align: center;
  color: #fff;
  background-color: #333744;
}
</style>
