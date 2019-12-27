<!--
 * @Descripttion: Home
 * @version: Home
 * @Author: yang_ft
 * @Date: 2019-12-27 14:21:21
 * @github: famensaodiseng
 * @LastEditTime : 2019-12-27 18:50:58
 -->
<template>
  <div>
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="less" scoped>
</style>
