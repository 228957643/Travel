<template>
  <div class="header">
    <div class="website-logo">
      <router-link to="/">
        <img src="static/images/common/website-logo.jpg" alt>
      </router-link>
    </div>
    <div class="search-input">
      <input
        @keyup.enter="handleSearchBtnClick"
        v-model="searchContent"
        type="text"
        placeholder="请输入游戏名..."
        style="background:#fff url('static/images/common/search.png') no-repeat 6px 6px"
      >
      <button @click="handleSearchBtnClick">搜索</button>
    </div>
    <!-- 登录状态才显示的内容 -->
    <div class="user-show">
      <ul>
        <li v-if="!isLogin" :style="verticalLineStyle">
          <img src="static/images/common/person.png" alt>
          <router-link to="/login">登录</router-link>&nbsp;/&nbsp;
          <router-link to="/register">注册</router-link>
        </li>
        <li
          class="header-user"
          v-if="isLogin"
          @mouseenter="handleMouseChange('user')"
          @mouseleave="handleMouseChange('user')"
          style="background:url('static/images/common/vertical-line.png') no-repeat 170px 16px;width:180px;"
        >
          <router-link to="/user_center">
            <img src="static/images/login/after-login.png" alt>
            <span>{{nickName}}</span>
            <img src="static/images/login/xia.png" style="margin-top:-4px;" alt>
          </router-link>
          <div class="pull-down-list pdl" v-if="pullDownList.user">
            <ul>
              <li>
                <router-link to="/user_center">个人中心</router-link>
              </li>
              <li>
                <a href="javascript:void(0)" @click="handleUserUnLogin">退出登录</a>
              </li>
            </ul>
          </div>
        </li>
        <li
          @mouseenter="handleMouseChange('played')"
          @mouseleave="handleMouseChange('played')"
          :style="verticalLineStyle"
        >
          <span>
            <img src="static/images/common/time.png" alt>
          </span>&nbsp;
          <span>我玩过的</span>
          <div class="pull-down-list" v-if="pullDownList.played">
            <header-played-game-slider></header-played-game-slider>
          </div>
        </li>
        <li
          @mouseenter="handleMouseChange('love')"
          @mouseleave="handleMouseChange('love')"
          :style="verticalLineStyle"
        >
          <span>
            <img src="static/images/common/love.png" alt>
          </span>&nbsp;
          <span>猜你喜欢</span>
          <div class="pull-down-list" v-if="pullDownList.love">
            <header-guess-love-slider></header-guess-love-slider>
          </div>
        </li>
        <li @mouseenter="handleMouseChange('more')" @mouseleave="handleMouseChange('more')">
          <span>
            <img src="static/images/common/more.png" alt>
          </span>&nbsp;
          <span>更多</span>
          <div class="pull-down-list pdl" v-if="pullDownList.more">
            <ul>
              <li>
                <router-link to="/game_customization">定制化</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderGuessLoveSlider from './header_components/GuessLoveSlider'
import HeaderPlayedGameSlider from './header_components/PlayedGameSlider'
export default {
  name: 'HomeHeader',
  components: {
    HeaderGuessLoveSlider,
    HeaderPlayedGameSlider
  },
  data () {
    return {
      isLogin: false, // 用户是否登录
      nickName: '', // 用户昵称
      searchContent: '',
      pullDownList: {
        played: false,
        love: false,
        more: false,
        user: false
      },
      verticalLineStyle: {
        background: "url('static/images/common/vertical-line.png') no-repeat 110px 16px"
      }
    }
  },
  mounted () {
    var nickName = sessionStorage.getItem('gmp-nickname')
    if (nickName !== null) {
      this.nickName = nickName
      this.isLogin = true
    }
  },
  methods: {
    // 退出登录
    handleUserUnLogin () {
      sessionStorage.clear()
      location.reload()
    },
    // 按名称搜索游戏
    handleSearchBtnClick: function () {
      // 打开新的窗口展示游戏
      // 需要传递两个参数，两个参数互斥，如果typeid存在就根据typeId获取数据，如果gameName存在，就根据游戏名模糊搜索
      var routeData = this.$router.resolve({ path: '/search', query: { typeId: 0, gameName: this.searchContent } })
      window.open(routeData.href, '_blank')
    },
    handleMouseChange: function (index) {
      switch (index) {
        case 'played':
          this.pullDownList.played = !this.pullDownList.played
          break
        case 'love':
          this.pullDownList.love = !this.pullDownList.love
          break
        case 'more':
          this.pullDownList.more = !this.pullDownList.more
          break
        case 'user':
          this.pullDownList.user = !this.pullDownList.user
          break
      }
    }
  }
}
</script>

<style>
.header {
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 0 10px #ececec;
}
.header > div {
  flex: none;
}
/* 用户昵称 */
.header-user img:nth-child(1) {
  width: 24px;
  height: 24px;
  margin-top: -10px;
}
.header-user a {
  color: #777;
}
.header-user span {
  max-width: 102px;
  height: 16px;
  line-height: 16px;
  display: inline-block;
  overflow: hidden;
}
.website-logo img {
  height: 40px;
  width: 120px;
  margin-left: 20px;
}
.search-input input {
  width: 360px;
  height: 32px;
  margin-left: 60px;
  box-sizing: border-box;
  padding-left: 32px;
  padding-right: 10px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border: 1px solid #ccc;
}
.search-input button {
  width: 72px;
  height: 32px;
  border: none;
  margin-left: -6px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  letter-spacing: 4px;
  background-color: orange;
  color: #fff;
  cursor: pointer;
}
/* 登录才显示的内容 */
.user-show {
  margin-left: auto;
}
.user-show > ul {
  display: flex;
}
.user-show > ul > li {
  width: 120px;
  height: 48px;
  box-sizing: border-box;
  padding-top: 16px;
  text-align: center;
  position: relative;
}
/* 下拉框样式 */
.pull-down-list {
  position: absolute;
  top: 48px;
  left: -50px;
  width: 240px;
  min-height: 10px;
  border: 1px solid #ffdead;
  z-index: 11;
}
.pdl {
  background-color: #fff;
  border: 1px solid #ccc;
  width: 100%;
  left: -6px;
}
.pdl > ul > li {
  height: 32px;
  box-sizing: border-box;
  padding-top: 8px;
}
.pdl > ul > li a:hover {
  color: #ff8937;
  text-decoration: underline;
}
</style>
