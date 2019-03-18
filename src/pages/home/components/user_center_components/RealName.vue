<template>
  <div class="user-center-real-name">
    <div class="user-center-components-header">实名认证</div>
    <div class="user-center-real-name-table">
      <table class="user-center-table">
        <tr>
          <td>您的账号：</td>
          <td>meien228957643</td>
        </tr>
        <tr>
          <td>真实姓名：</td>
          <td>
            <input type="text" maxlength="5" v-model="saveRealName.realName">
          </td>
        </tr>
        <tr>
          <td>身份证号：</td>
          <td>
            <input type="password" maxlength="18" v-model="saveRealName.idCard">
          </td>
        </tr>
      </table>
      <div class="user-center-my-info-btn">
        <button @click="handleRealNameClick">保存实名认证信息</button>
      </div>
      <p class="user-center-real-name-warn">实名认证信息保存之后不允许修改。</p>
      <div class="user-center-my-info2-message">
        <p>1、信息一旦保存，不可修改。</p>
        <p>2、根据2010年8月1日实施的《网络游戏管理暂行办法》，网络游戏用户需使用有效身份证件进行实名注册。为保证流畅游戏体验，享受健康游戏生活，请广大4399游戏的玩家尽快实名注册。</p>
        <p>3、保护未成年人身心健康，未满18岁的用户将受到防沉迷系统的限制：</p>
        <p>·&nbsp;&nbsp;游戏过程，会提示您的累计在线时间。</p>
        <p>·&nbsp;&nbsp;累计游戏时间超过3小时，游戏收益（经验，金钱）为0。</p>
        <p>·&nbsp;&nbsp;累计游戏时间超过5小时，建议您下线休息。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCenterRealName',
  data () {
    return {
      saveRealName: {
        realName: '',
        idCard: ''
      }
    }
  },
  methods: {
    handleRealNameClick () {
      alert('程序猿正在加班开发中……')
      return false
    }
  }
}
</script>

<style>
.user-center-real-name {
  width: 700px;
  min-height: 600px;
}
.user-center-real-name-warn{
  margin: 10px 0 0 100px;
}
</style>
