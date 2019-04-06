<template>
  <div class="user-center">
    <!-- 顶部的图片 -->
    <div :style="pageStyle">
      <div class="user-center-header">
        <router-link to="/">
          <img src="http://s1.img4399.com/u4399/logo.gif" alt>
        </router-link>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="user-center-body">
      <!-- 左侧导航栏 -->
      <div class="user-center-body-left">
        <ul>
          <li class="user-center-body-left-first">
            <div class="user-center-blf-img">
              <router-link to>
                <img
                  :src="userInfo.head_img === ''?'static/images/user_center/default-head-img.png':userInfo.head_img"
                  alt
                >
              </router-link>
            </div>
            <div class="user-center-blf-text">
              <div :title="userInfo.nickname">{{userInfo.nickname}}</div>
              <div>
                <a @click="handlePageChange('my_headimg')">更换头像</a>
                |
                <a @click="handleUserOutLogin">退出</a>
              </div>
            </div>
          </li>
          <li
            @click="handlePageChange('my_info')"
            style="background:url('static/images/user_center/icon.png') no-repeat 32px 8px"
            :class="{'user-center-current-page':showPage.my_info}"
          >我的信息</li>
          <li
            @click="handlePageChange('my_headimg')"
            style="background:url('static/images/user_center/icon.png') no-repeat 32px -26px"
            :class="{'user-center-current-page':showPage.my_headimg}"
          >我的头像</li>
          <li
            @click="handlePageChange('update_pwd')"
            style="background:url('static/images/user_center/icon.png') no-repeat 32px -60px"
            :class="{'user-center-current-page':showPage.update_pwd}"
          >修改密码</li>
          <li
            @click="handlePageChange('real_name')"
            style="background:url('static/images/user_center/icon.png') no-repeat 32px 8px"
            :class="{'user-center-current-page':showPage.real_name}"
          >实名认证</li>
        </ul>
      </div>
      <div class="user-center-body-right">
        <user-center-my-info
          :userInfo="userInfo"
          @rnclick="handlePageChange('real_name')"
          v-if="showPage.my_info"
        ></user-center-my-info>
        <user-center-update-pwd v-if="showPage.update_pwd"></user-center-update-pwd>
        <user-center-my-headimg :headImg="userInfo.head_img" v-if="showPage.my_headimg"></user-center-my-headimg>
        <user-center-real-name :account="userInfo.account" v-if="showPage.real_name"></user-center-real-name>
      </div>
    </div>
  </div>
</template>

<script>
import UserCenterMyInfo from './components/user_center_components/MyInfo'
import UserCenterUpdatePwd from './components/user_center_components/UpdatePwd'
import UserCenterRealName from './components/user_center_components/RealName'
import UserCenterMyHeadimg from './components/user_center_components/MyHeadimg'
import axios from 'axios'
export default {
  name: 'UserCenter',
  components: {
    UserCenterMyInfo,
    UserCenterUpdatePwd,
    UserCenterRealName,
    UserCenterMyHeadimg
  },
  data () {
    return {
      pageStyle: {
        background: "url('static/images/user_center/header_bg.gif')"
      },
      // 决定显示哪个界面
      showPage: {
        my_info: true,
        update_pwd: false,
        my_headimg: false,
        real_name: false
      },
      userInfo: {}
    }
  },
  methods: {
    // 点击按钮，变更界面
    handlePageChange (val) {
      switch (val) {
        case 'my_info':
          this.showPage = { my_info: true, update_pwd: false, my_headimg: false, real_name: false }
          break
        case 'my_headimg':
          this.showPage = { my_info: false, update_pwd: false, my_headimg: true, real_name: false }
          break
        case 'update_pwd':
          this.showPage = { my_info: false, update_pwd: true, my_headimg: false, real_name: false }
          break
        case 'real_name':
          this.showPage = { my_info: false, update_pwd: false, my_headimg: false, real_name: true }
          break
      }
    },
    // 退出登录
    handleUserOutLogin () {
      sessionStorage.clear() // 清除session
      this.$router.push({ path: '/' })
    },
    // 获取用户信息
    getUserInfo () {
      var _this = this
      axios.get(this.GLOBAL.apiPath + '/home/user_center/list', {
        headers: {
          'Authorization': sessionStorage.getItem('gmp-token')
        }
      }).then(function (response) {
        var res = response.data
        if (res.success) {
          _this.userInfo = res.data.userInfo
        } else {
          alert(res.errors)
          _this.$router.push({ path: '/' })
        }
      }).catch(function (err) {
        if (err.response.status === 401) {
          alert('登录失效，请重新登录')
          sessionStorage.clear()
          _this.$router.push({ path: '/login' })
        } else {
          alert(err.response.status + '：' + err.response.statusText)
        }
      })
    }
  },
  created () {
    this.getUserInfo()
  }
}
</script>

<style>
/* 用户中心顶部的logo */
.user-center-header {
  width: 960px;
  margin: auto;
}
/* 内容部分 */
.user-center-body {
  width: 960px;
  margin: 10px auto 20px auto;
  box-sizing: border-box;
  border: 1px solid #b5e0ea;
  display: flex;
  justify-content: space-between;
}
.user-center-body-left {
  width: 210px;
  box-sizing: border-box;
  padding-left: 10px;
  background-color: #f0fbfd;
  border-right: 1px solid #b5e0ea;
}
/* 我的头像 */
.user-center-body-left > ul > li:nth-child(1) {
  width: 200px;
  height: 100px;
}
.user-center-body-left-first {
  box-sizing: border-box;
  padding-top: 10px;
}
/* 头像 */
.user-center-blf-img img {
  float: left;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border: 1px solid #ccc;
}
/* 昵称 */
.user-center-blf-text > div:nth-child(1) {
  color: #237daf;
  width: 120px;
  height: 12px;
  font-size: 12px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
}
/* 按钮 */
.user-center-blf-text > div:nth-child(2) {
  margin-top: 15px;
}
.user-center-blf-text > div:nth-child(2) a {
  cursor: pointer;
  font-size: 12px;
  color: #ff7500;
  font-weight: bold;
}
.user-center-blf-text > div:nth-child(2) a:hover {
  text-decoration: underline;
}
/* 列表项 */
.user-center-body-left > ul > li:nth-child(n + 2) {
  cursor: pointer;
  box-sizing: border-box;
  border-top: 1px solid #b5e0ea;
  width: 200px;
  height: 34px;
  font-size: 14px;
  line-height: 34px;
  padding-left: 65px;
  color: #237daf;
}
.user-center-body-left > ul > li:nth-child(n + 2):hover {
  text-decoration: underline;
}
/* 当前页面，左侧导航栏的样式 */
.user-center-current-page {
  background-color: #fff !important;
  border-left: 1px solid #b5e0ea;
}
</style>
