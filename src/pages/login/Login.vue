<template>
  <div class="page-login-Content-Main">
    <div class="page-login-Content-Main1">
      <h1>玩家登录</h1>
    </div>
    <div class="page-login-form">
      <label>
        <span>用户名:</span>
        <input
          type="text"
          placeholder="请输入用户名（6-12个字符）"
          v-model="loginAccount"
          @input="handleInputChange('account')"
        >
        <p class="page-login-account-warn" v-show="accountWarnShow">用户名为6-12个字符</p>
      </label>
      <label>
        <span>密码:</span>
        <input
          type="password"
          placeholder="请输入密码（6-20个字符）"
          v-model="loginPassword"
          @input="handleInputChange('password')"
        >
        <p class="page-login-password-warn" v-show="passwordWarnShow">密码为6-20个字符</p>
      </label>
      <label>
        <button class="page-login-button" @click="handleLoginBtnClick">提交</button>
        <router-link to="/" class="page-login-back">返回首页</router-link>
      </label>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'js-md5'
export default {
  name: 'Login',
  data () {
    return {
      loginAccount: '',
      loginPassword: '',
      accountWarnShow: false,
      passwordWarnShow: false
    }
  },
  methods: {
    ajaxLogin () {
      var params = new URLSearchParams()
      var this_ = this
      params.append('account', this.loginAccount)
      params.append('password', md5(this.loginPassword))
      axios.post(this.GLOBAL.apiPath + '/home/login', params)
        .then(function (response) {
          var res = response.data
          if (res.success) {
            // 将token保存到session中
            sessionStorage.setItem('gmp-token', res.data.token)
            sessionStorage.setItem('gmp-nickname', res.data.nickname)
            // 登录成功，跳转到首页
            this_.$router.push({ path: '/' }) // 登录成功后，跳转到首页
            return false
          } else {
            this_.$toast.top(res.errors)
            this_.loginPassword = ''
            return false
          }
        })
    },
    handleLoginBtnClick () {
      if (this.loginAccount.length < 6 || this.loginAccount.length > 12) {
        this.accountWarnShow = true
        return false
      }
      if (this.loginPassword.length < 6 || this.loginPassword.length > 20) {
        this.passwordWarnShow = true
        return false
      }
      // 登录逻辑
      this.ajaxLogin()
    },
    handleInputChange (p) {
      switch (p) {
        case 'account':
          this.accountWarnShow = false
          break
        case 'password':
          this.passwordWarnShow = false
          break
      }
    }
  }
}
</script>

<style scoped>
.page-login-Content-Main {
  margin: auto;
  margin-top: 100px;
  max-width: 500px;
  padding: 20px 30px 20px 30px;
  font: 12px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-shadow: 1px 1px 1px #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #888;
  background: #fff;
}
.page-login-Content-Main h1 {
  display: block;
  padding: 0px 0px 10px 40px;
  margin: -10px -30px 30px -30px;
  font: 25px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid #dadada;
  color: #888;
  letter-spacing: 2px;
}
.page-login-Content-Main h1 > span {
  display: block;
  font-size: 11px;
}
.page-login-Content-Main label {
  display: block;
  margin: 0px 0px 5px;
}
.page-login-Content-Main label > span {
  float: left;
  width: 20%;
  padding-right: 10px;
  margin-top: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  text-align: right;
  color: #333;
}
.page-login-Content-Main input {
  width: 70%;
  height: 20px;
  padding: 5px 0px 5px 5px;
  margin-bottom: 26px;
  margin-right: 6px;
  margin-top: 2px;
  line-height: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #888;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.page-login-button {
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  margin-left: 111px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
}
.page-login-button:hover {
  color: #333;
  background-color: #ebebeb;
  border-color: #adadad;
}
.page-login-back {
  margin-left: 10px;
}
.page-login-back:hover {
  text-decoration: underline;
  color: red;
}
.page-login-form {
  position: relative;
}
.page-login-account-warn {
  color: red;
  position: absolute;
  left: 23%;
  top: 25%;
}
.page-login-password-warn {
  color: red;
  position: absolute;
  left: 23%;
  top: 62%;
}
</style>
