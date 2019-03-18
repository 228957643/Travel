<template>
  <div class="user-center-my-info">
    <!-- 我的信息 -->
    <div class="user-center-components-header">我的信息</div>
    <!-- 点击修改键之前 -->
    <div v-if="myInfoShow" class="user-center-my-info1">
      <table class="user-center-table">
        <tr>
          <td>您的账号：</td>
          <td>me228957643</td>
        </tr>
        <tr>
          <td>昵称：</td>
          <td>{{saveInfo.nickname}}</td>
        </tr>
        <tr>
          <td>电子邮箱：</td>
          <td>{{saveInfo.email}}</td>
        </tr>
        <tr>
          <td>性别：</td>
          <td>{{saveInfo.sex}}</td>
        </tr>
        <tr>
          <td>生日：</td>
          <td>{{saveInfo.birthday}}</td>
        </tr>
        <tr>
          <td>所在地：</td>
          <td>{{saveInfo.address}}</td>
        </tr>
        <tr>
          <td>QQ：</td>
          <td>{{saveInfo.qq}}</td>
        </tr>
        <tr>
          <td>联系电话：</td>
          <td>{{saveInfo.phone}}</td>
        </tr>
      </table>
      <div class="user-center-my-info-btn">
        <button @click="handleMyInfoShow">修改个人信息</button>
      </div>
    </div>
    <!-- 点击修改键之后 -->
    <div v-if="!myInfoShow" class="user-center-my-info1-change">
      <table class="user-center-table">
        <tr>
          <td>您的账号：</td>
          <td>me228957643</td>
        </tr>
        <tr>
          <td>昵称：</td>
          <td>
            <input type="text" v-model="saveInfo.nickname" maxlength="8">
          </td>
        </tr>
        <tr>
          <td>电子邮箱：</td>
          <td>
            <input type="text" v-model="saveInfo.email" maxlength="20">
          </td>
        </tr>
        <tr>
          <td>性别：</td>
          <td>
            <input id="sex0" v-model="saveInfo.sex" type="radio" value="男" name="sex" checked>
            <label for="sex0">男</label>
            <input id="sex1" v-model="saveInfo.sex" type="radio" value="女" name="sex">
            <label for="sex1">女</label>
          </td>
        </tr>
        <tr>
          <td>生日：</td>
          <td>
            <input
              type="text"
              v-model="saveInfo.birthday"
              maxlength="10"
              placeholder="格式：xxxx-xx-xx"
            >
          </td>
        </tr>
        <tr>
          <td>所在地：</td>
          <td>
            <input type="text" v-model="saveInfo.address" maxlength="20">
          </td>
        </tr>
        <tr>
          <td>QQ：</td>
          <td>
            <input type="text" v-model="saveInfo.qq" maxlength="11">
          </td>
        </tr>
        <tr>
          <td>联系电话：</td>
          <td>
            <input type="text" v-model="saveInfo.phone" maxlength="11">
          </td>
        </tr>
      </table>
      <div class="user-center-my-info-btn">
        <button style="background-color:red;" @click="handleSaveUserInfo">保存个人信息</button>
      </div>
    </div>
    <!-- 我的实名认证信息 -->
    <div class="user-center-components-header">我的实名认证信息</div>
    <div class="user-center-my-info2">
      <table class="user-center-table">
        <tr>
          <td>真实姓名：</td>
          <td>梅恩</td>
        </tr>
        <tr>
          <td>身份证号：</td>
          <td>5113**********3616</td>
        </tr>
      </table>
      <div class="user-center-my-info-btn">
        <button @click="handleRealNameBtnClick">添加实名认证信息</button>
      </div>
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
  name: 'UserCenterMyInfo',
  data () {
    return {
      myInfoShow: true,
      saveInfo: {
        nickname: 'me228957643',
        sex: '男',
        email: 'meien643@163.com',
        birthday: '1996-11-10',
        address: '四川省成都市',
        qq: '228957643',
        phone: '-'
      }
    }
  },
  methods: {
    // 点击“保存个人信息”按钮
    handleSaveUserInfo () {
      // TODO: 此处应该请求后端接口，修改数据
      alert('敬请期待')
      this.myInfoShow = true
    },
    // 点击“修改个人信息”按钮
    handleMyInfoShow () {
      this.myInfoShow = false
    },
    // 向父组件触发一个跳转事件，用于跳到“实名认证”界面
    handleRealNameBtnClick () {
      this.$emit('rnclick')
    }
  }
}
</script>

<style>
.user-center-my-info {
  width: 700px;
}
/* 公共css属性 */
.user-center-components-header {
  margin: 10px;
  border-bottom: 1px solid #237daf;
  overflow: hidden;
  line-height: 30px;
  text-indent: 5px;
  font-size: 14px;
  font-weight: 700;
  color: #237daf;
}
.user-center-table tr td:nth-child(1) {
  width: 120px;
  font-size: 14px;
  line-height: 30px;
  text-align: right;
  padding: 4px;
}
.user-center-table tr td:nth-child(2) {
  display: inline-block;
  width: 330px;
  font-size: 14px;
  line-height: 30px;
  padding: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* button样式 */
.user-center-my-info-btn button {
  background: #237daf;
  border-color: #abcdef #4979ac #4979ac #abcdef;
  font-weight: bold;
  overflow-x: visible;
  border: solid 1px;
  color: #ffffff;
  cursor: pointer;
  font-size: 14px;
  height: 28px;
  line-height: 20px;
  padding: 3px 15px;
  text-align: center;
  margin: 10px 0 10px 100px;
}
.user-center-my-info2-message {
  border: 1px solid #ffccaa;
  background-color: #fcfadf;
  color: #237daf;
  padding: 10px;
  margin: 20px;
  line-height: 22px;
  font-size: 12px;
}
.user-center-my-info2-message > p:nth-child(n + 4):nth-child(-n + 6) {
  text-indent: 2em;
}
/* input框样式 */
.user-center-table input[type='text'],
.user-center-table input[type='password'] {
  border: 1px solid #cccccc;
  font-size: 14px;
  height: 22px;
  padding: 4px 8px;
  color: #666666;
  width: 200px;
  vertical-align: middle;
}
</style>
