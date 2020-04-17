<template>
  <div class="loginimg">
    <div style="display: flex;justify-content: center;padding-top: 350px">
      <el-card style="width: 400px;padding: 0;">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <el-form :model="form" :rules="rules" ref="form" label-width="70px" :label-position="labelPosition">
          <div slot="header" class="clearfix">
            <span>登录</span>
          </div>
          <el-form-item label="账号：" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="form.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doLogin('form')">登录</el-button>
            <el-button>注册</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'left',
        form: {
          username: 'admin',
          password: '123456',
        },
        rules: {
          username: [
            {required: true, message: '请输入用户名！', trigger: 'change'},
          ],
          password: [
            {required: true, message: '请输入密码！', trigger: 'blur'},
            {min: 3, message: '密码最少3位', trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      doLogin(form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.$message({
                type: 'success',
                message: '登录成功'
              }
            );
            this.$router.push('/home')
          } else {
            this.$message({
                type: 'error',
                message: '登录失败'
              }
            );
            return false;
          }
        });
        // alert(JSON.stringify(this.form))
      }
    }
  }
</script>
<style>
  .loginimg {
    width: 100%;
    height: 100%;
    background: url("../../../static/lib/img/login1.jpg") no-repeat;
    background-size: 100% 100%;
    position: absolute;
  }
</style>

