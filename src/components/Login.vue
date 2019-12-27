<!--
 * @Descripttion: pc_cms
 * @version: 登陆组件
 * @Author: yang_ft
 * @Date: 2019-12-23 15:21:05
 * @github: famensaodiseng
 * @LastEditTime : 2019-12-27 14:20:26
-->
<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/1.jpeg" alt />
      </div>
      <!-- 头像 -->
      <el-form
        :model="form"
        label-width="80px"
        class="login_form"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <el-form-item label="用户名" prop="username">
          <el-input prefix-icon="el-icon-s-custom" v-model="form.username"></el-input>
        </el-form-item>
        <!-- 用户名 -->
        <el-form-item label="密码" prop="password">
          <el-input prefix-icon="el-icon-lock" v-model="form.password" type="password" prop="pwd"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
      <!-- 登陆表单区域 -->
      <h3>
        <router-link to="http://www.yangfangtao.com" class="copy">&copy;法门扫地僧</router-link>
      </h3>
      <!-- 版权区域 -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      loginFormRules: {
        // 验证用户是否合法
        username: [
          { required: true, message: '请输入登陆用户名', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登陆密码', trigger: 'blur' },
          { min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm() {
      // console.log(this)重置按钮。
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      // console.log(this)登陆时候的预校验。
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.form)
        // console.log(res)
        if (res.meta.status !== 200) return this.$message.error('登陆失败')
        this.$message.success('登陆成功')
        window.sessionStorage.setItem('token', res.data.token)
        this.$router.push('/home')
      })
    }
  }
}
</script>
<style lang="less" scoped>
.login_container {
  height: 100%;
  background-color: #2ba246;
}
.login_box {
  width: 450px;
  height: 300px;
  border: 3px dash #304960;
  background-color: #f6f9fa;
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
a {
  text-decoration: none;
  color: aquamarine;
}
.copy {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.avatar_box img {
  width: 100px;
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid #fcb77e;
  border-radius: 50px;
  box-shadow: 0 0 20px #dddddd;
}
.login_form {
  position: absolute;
  bottom: 30px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
