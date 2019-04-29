<template>
  <div class="page-register-Content-Main">
    <div class="page-register-Content-Main1">
      <h1>玩家注册</h1>
    </div>
    <div class="page-register-form">
      <label>
        <span>用户名:</span>
        <input
          type="text"
          placeholder="长度为6-12个字符，区分大小写"
          maxlength="12"
          v-model="saveData.registerAccount"
          @input="handleInputChange('account')"
        >
        <p v-show="accountWarnShow">用户名为6-12个字符（字母或数字）</p>
      </label>
      <label>
        <span>密码:</span>
        <input
          type="password"
          placeholder="长度为6-20个字符，区分大小写"
          maxlength="20"
          v-model="saveData.registerPassword"
          @input="handleInputChange('password')"
        >
        <p v-show="passwordWarnShow">密码为6-20个字符（字母或数字）</p>
      </label>
      <label>
        <span>再次输入密码:</span>
        <input
          type="password"
          placeholder="长度为6-20个字符，区分大小写"
          maxlength="20"
          v-model="saveData.registerAduitPassword"
          @input="handleInputChange('aduit-password')"
        >
        <p v-show="aduitPasswordWarnShow">两次输入的密码不同</p>
      </label>
      <label>
        <span>真实姓名:</span>
        <input
          type="text"
          placeholder="防沉迷法要求填写真实姓名"
          maxlength="5"
          v-model="saveData.registerRealName"
          @input="handleInputChange('real-name')"
        >
        <p v-show="realNameWarnShow">真实姓名不能为空</p>
      </label>
      <label>
        <span>身份证号:</span>
        <input
          type="text"
          placeholder="请填写真实的身份证号"
          maxlength="20"
          v-model="saveData.registerIdCard"
          @input="handleInputChange('id-card')"
        >
        <p v-show="idCardWarnShow">身份证号不能为空</p>
      </label>
      <label>
        <button class="page-register-button" @click="handleregisterBtnClick">提交</button>
        <router-link to="/" class="page-register-back">返回首页</router-link>
      </label>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from 'js-md5'
export default {
  name: 'Register',
  data () {
    return {
      // 用户填写的数据
      saveData: {
        registerAccount: '',
        registerPassword: '',
        registerAduitPassword: '',
        registerRealName: '',
        registerIdCard: ''
      },
      // 是否显示提示
      accountWarnShow: false,
      passwordWarnShow: false,
      aduitPasswordWarnShow: false,
      realNameWarnShow: false,
      idCardWarnShow: false
    }
  },
  methods: {
    handleregisterBtnClick () {
      var reg = /^[0-9a-zA-Z]*$/ // 只能为数字和字母的组合
      var flag = false
      if (!reg.test(this.saveData.registerAccount) || this.saveData.registerAccount.length < 6 ||
        this.saveData.registerAccount.length > 18) {
        this.accountWarnShow = true
        flag = true
      }
      if (!reg.test(this.saveData.registerPassword) || this.saveData.registerPassword.length < 6 ||
        this.saveData.registerPassword.length > 20) {
        this.passwordWarnShow = true
        flag = true
      }
      if (this.saveData.registerPassword !== this.saveData.registerAduitPassword) {
        this.aduitPasswordWarnShow = true
        flag = true
      }
      if (this.saveData.registerRealName.length === 0) {
        this.realNameWarnShow = true
        flag = true
      }
      if (this.saveData.registerIdCard.length === 0) {
        this.idCardWarnShow = true
        flag = true
      }
      if (flag) {
        return false
      }
      // 注册逻辑
      var _this = this
      var params = new URLSearchParams()
      params.append('account', this.saveData.registerAccount)
      params.append('password', md5(this.saveData.registerPassword)) // 此处先对用户密码进行一次加密
      params.append('real_name', this.saveData.registerRealName)
      params.append('id_card', this.saveData.registerIdCard)
      axios.post(this.GLOBAL.apiPath + '/home/register', params, {
        headers: { 'Authorization': sessionStorage.getItem('gmp-token') }
      }).then(function (response) {
        var res = response.data
        if (res.success) {
          alert('注册成功，请登录后再进入网站')
          _this.$router.push({ path: '/login' })
        } else {
          alert(res.errors)
        }
      }).catch(function (err) {
        alert(err.response.status + '：' + err.response.statusText)
      })
    },
    handleInputChange (p) {
      switch (p) {
        case 'account':
          this.accountWarnShow = false
          break
        case 'password':
          this.passwordWarnShow = false
          break
        case 'aduit-password':
          this.aduitPasswordWarnShow = false
          break
        case 'real-name':
          this.realNameWarnShow = false
          break
        case 'id-card':
          this.idCardWarnShow = false
          break
      }
    }
  }
}
</script>

<style scoped>
.page-register-Content-Main {
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
.page-register-Content-Main h1 {
  display: block;
  padding: 0px 0px 10px 40px;
  margin: -10px -30px 30px -30px;
  font: 25px 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid #dadada;
  color: #888;
  letter-spacing: 2px;
}
.page-register-Content-Main h1 > span {
  display: block;
  font-size: 11px;
}
.page-register-Content-Main label {
  display: block;
  margin: 0px 0px 5px;
}
.page-register-Content-Main label > span {
  float: left;
  width: 20%;
  padding-right: 10px;
  margin-top: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  text-align: right;
  color: #333;
}
.page-register-Content-Main input {
  width: 70%;
  height: 20px;
  padding: 5px 0px 5px 5px;
  margin-bottom: 6px;
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
.page-register-button {
  padding: 10px 25px 10px 25px;
  margin-left: 111px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
  cursor: pointer;
}
.page-register-button:hover {
  color: #333;
  background-color: #ebebeb;
  border-color: #adadad;
}
.page-register-back {
  margin-left: 10px;
}
.page-register-back:hover {
  text-decoration: underline;
  color: red;
}
.page-register-form p {
  color: red;
  margin: 5px 0 8px 110px;
}
</style>
