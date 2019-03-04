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
        <li :style="verticalLineStyle">
          <img src="static/images/common/person.png" alt>
          <router-link to="/login">登录</router-link>&nbsp;/&nbsp;
          <router-link to="/register">注册</router-link>
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
          <div class="pull-down-list pdl" v-show="pullDownList.more">
            <ul>
              <li>
                <router-link to="/game_detail">我的赏金</router-link>
              </li>
              <li>
                <router-link to>我的收藏</router-link>
              </li>
              <li>
                <router-link to>定制化列表</router-link>
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
      searchContent: '',
      pullDownList: {
        played: false,
        love: false,
        more: false
      },
      verticalLineStyle: {
        background: "url('static/images/common/vertical-line.png') no-repeat 110px 16px"
      }
    }
  },
  methods: {
    handleSearchBtnClick: function () {
      alert(this.searchContent)
      this.searchContent = ''
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
  width: 120px;
  left: -6px;
}
.pdl > ul > li {
  height: 28px;
  box-sizing: border-box;
  padding-top: 6px;
}
.pdl > ul > li:hover {
  background-color: #ececec;
}
</style>
