<template>
  <div class="user-center-update-pwd">
    <div class="user-center-components-header">修改登录密码</div>
    <div class="user-center-update-pwd-table">
      <table class="user-center-table">
        <tr>
          <td>请输入原始密码：</td>
          <td>
            <input type="password" maxlength="18" v-model="updatePwd.originalPwd">
          </td>
        </tr>
        <tr>
          <td>请输入新密码：</td>
          <td>
            <input type="password" maxlength="18" v-model="updatePwd.newPwd">
          </td>
        </tr>
        <tr>
          <td>再次输入新密码：</td>
          <td>
            <input type="password" maxlength="18" v-model="updatePwd.comfirmPwd">
          </td>
        </tr>
      </table>
      <p class="user-center-update-pwd-warn">注意：密码为6~18个字符（仅包含数字和字母）组成</p>
      <div class="user-center-my-info-btn">
        <button @click="handleUpdatePwdClick">修改密码</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCenterUpdatePwd',
  data () {
    return {
      updatePwd: {
        originalPwd: '',
        newPwd: '',
        comfirmPwd: ''
      }
    }
  },
  methods: {
    handleUpdatePwdClick () {
      var reg = /^[0-9a-zA-Z]*$/ // 只能为数字和字母的组合
      if (!reg.test(this.updatePwd.originalPwd) || this.updatePwd.originalPwd.length < 6 ||
        this.updatePwd.originalPwd.length > 18) {
        this.$toast.center('原始密码格式不正确')
        return false
      }
      if (!reg.test(this.updatePwd.newPwd) || this.updatePwd.newPwd.length < 6 ||
        this.updatePwd.newPwd.length > 18) {
        this.$toast.center('新密码格式不正确')
        return false
      }
      if (this.updatePwd.newPwd !== this.updatePwd.comfirmPwd) {
        this.$toast.center('两次输入的密码不相同')
        return false
      }
      // TODO: 此处应该请求接口，修改密码
      alert('修改密码——api正在努力开发……')
      // 清空输入
      this.updatePwd.originalPwd = ''
      this.updatePwd.newPwd = ''
      this.updatePwd.comfirmPwd = ''
    }
  }
}
</script>

<style>
.user-center-update-pwd {
  width: 700px;
  min-height: 600px;
}
/* toast弹窗的背景色 */
/* .lx-toast {} */
.user-center-update-pwd-warn {
  margin: 20px;
  color: red;
}
</style>
