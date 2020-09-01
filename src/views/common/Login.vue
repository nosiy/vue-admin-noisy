<template>
  <div class="login">
    <video
      autoplay="autoplay"
      muted="muted"
      volume="0"
      :poster="background.poster"
      loop="loop"
      class="section-background-video"
    >
      <source type="video/mp4" :src="background.video" />
    </video>
    <div class="mask"></div>
    <el-form ref="FromDate" :model="FromDate" label-width="100px" class="demo-ruleForm">
      <el-form-item prop="username" :rules="validateUsername">
        <i class="icon el-icon-user-solid"></i>
        <el-input
          v-model="FromDate.username"
          name="username"
          placeholder="用户名或者账号"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password" :rules="validatePass">
        <i class="icon el-icon-s-promotion"></i>
        <el-input
          :type="pwdType"
          v-model="FromDate.password"
          name="password"
          placeholder="密码"
          autocomplete="off"
          @keyup.enter="EnterHandle"
        ></el-input>
        <span
          :class="[pwdType === 'password' ? 'el-icon-umbrella' : 'el-icon-view']"
          class="show-pwd"
          @click="showPwd()"
        ></span>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-login" type="primary" @click="submitForm()">提交</el-button>
      </el-form-item>
      <el-form-item class="login-hint-show">
        <div class="login-hint">
          <span>账号: admin</span>
          <el-button
            type="primary"
            size="mini"
            class="copy-btn"
            @click="CliPboardLink('admin',$event)"
          >点击复制</el-button>
        </div>
        <div class="login-hint">
          <span>密码: admin</span>
          <el-button
            type="primary"
            size="mini"
            class="copy-btn"
            @click="CliPboardLink('admin',$event)"
          >点击复制</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Clipboard from './../../utils/clipboard'
// import mock from './../../../mock'
export default {
  data () {
    return {
      pwdType: 'password',
      loading: false,
      background: {
        poster: 'https://ccdn.goodq.top/caches/927a729d326a897a6e2f27a03c31ee07/aHR0cDovLzU3ZThlY2Y0MTE1NWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi85OGIyZTYyYzgwOGRkNTdkMDA0MTUxNWVkNjk0NDg5YXByZXZpZXdfaW1hZ2UucG5n.png',
        video: 'https://ccdn.goodq.top/caches/927a729d326a897a6e2f27a03c31ee07/aHR0cDovLzU3ZThlY2Y0MTE1NWQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi85OGIyZTYyYzgwOGRkNTdkMDA0MTUxNWVkNjk0NDg5YS5tcDQ_p_p100_p_3D.mp4'
      },
      FromDate: {
        username: 'admin',
        password: 'admin'
      }
    }
  },
  computed: {
    validateUsername () {
      return [{ required: this.FromDate.username.length <= 0, message: '账号不能为空' }]
    },
    validatePass () {
      return [{ required: this.FromDate.password.length <= 0, message: '密码不能为空' }]
    }
  },
  methods: {
    CliPboardLink (text, event) {
      Clipboard(text, event)
    },
    showPwd () {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    submitForm () {
      this.$refs.FromDate.validate(valid => {
        // console.log(valid, '校验结果')
        if (valid) {
          // this.$router.push('/');
          this.$store.dispatch('Login', this.FromDate)
          // console.log(this.FromDate)
          // this.$store.dispatch('Login', this.FromDate).then(({ res, err }) => {
          //   console.log('成功')
          // }).catch(() => {
          //   console.log('请求失败')
          // })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      // this.$router.push({ path: '/' })
      // if (this.FromDate.username === 'admin' && this.FromDate.password === 'admin') {
      //   console.log(22222222222)
      //   this.$router.push({ path: '/test1' })
      // }
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}

</script>

<style lang='scss'>
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  .login-hint {
    width: 100%;
    color: #fff;
    text-align: left;
  }
  .section-background-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }
  .mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 0;
    top: 0;
  }

  .demo-ruleForm {
    width: 400px;
    height: auto;
  }
  .btn-login {
    width: 100%;
    padding: 14px 0;
  }
  .el-form-item {
    margin: 25px 0;
    .icon {
      font-size: 18px;
      color: #fff;
      margin: 0 12px;
    }
    .el-form-item__content {
      margin-left: 0 !important;
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .el-input__inner {
      background: rgba(0, 0, 0, 0);
      border: none;
      padding: 25px 0;
      color: rgba(255, 255, 255, 0.8);
    }
    .show-pwd {
      font-size: 18px;
      margin: 0 12px;
      cursor: pointer;
      color: #889aa4;
    }
    .el-form-item__error {
      top: 110%;
    }
  }
  .login-hint-show {
    .el-form-item__content {
      border: 1px solid rgba(255, 255, 255, 0);
      background: rgba(0, 0, 0, 0);
      border-radius: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .login-hint {
      margin-bottom: 8px;
    }
    .el-button {
      margin-left: 15px;
    }
  }
}
</style>
