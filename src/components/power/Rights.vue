<!--
 * @Descripttion: 11
 * @version: 11
 * @Author: yang_ft
 * @Date: 2020-01-04 09:59:26
 * @github: famensaodiseng
 * @LastEditTime : 2020-01-06 22:14:21
 -->
<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 卡片视图 -->
    <el-card>
      <el-table :data="rightsList" border stripe>
        <el-table-column type="index" label="序列"></el-table-column>
        <el-table-column prop="authName" label="权限名称"></el-table-column>
        <el-table-column prop="path" label="路径"></el-table-column>
        <el-table-column prop="level" label="权限等级">
          <!-- 作用域插槽自定义权限等级 -->
          <template slot-scope="scope">
            <el-tag v-if="scope.row.level=== '0'">一级</el-tag>
            <el-tag type="success" v-else-if="scope.row.level=== '1'">二级</el-tag>
            <el-tag type="warning" v-else>三级</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rightsList: []
    }
  },
  created() {
    this.getRightsList()
  },
  methods: {
    async getRightsList() {
      const { data: res } = await this.$http.get('rights/list')
      //   console.log(res)
      if (res.meta.status !== 200) {
        return this.$message.error('获取权限列表失败')
      }
      this.rightsList = res.data
      // console.log(this.rightsList)

      //   this.$message.success('获取权限列表成功')
      //   this.getRightsList()
    }
  }
}
</script>
<style lang="less" scoped></style>
