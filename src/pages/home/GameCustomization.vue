<template>
  <div class="game-customization" v-if="isShowPage">
    <!-- 顶部的导航栏 -->
    <div class="game-customization-header">
      <home-header></home-header>
    </div>
    <!-- 内容部分 -->
    <div class="game-customization-body">
      <!-- 左侧导航栏 -->
      <div class="game-customization-body-left">
        <ul>
          <li
            @click="handlePageChange('page1')"
            style="background:url('static/images/user_center/icon.png') no-repeat 32px 8px"
            :class="{'game-customization-current-page':showPage.page1}"
          >局部定制化</li>
          <li
            @click="handlePageChange('page2')"
            style="background:url('static/images/user_center/icon.png') no-repeat 32px -26px"
            :class="{'game-customization-current-page':showPage.page2}"
          >全部定制化</li>
          <li
            @click="handlePageChange('page3')"
            style="background:url('static/images/user_center/icon.png') no-repeat 32px -60px"
            :class="{'game-customization-current-page':showPage.page3}"
          >定制化列表</li>
          <li
            @click="handlePageChange('page4')"
            style="background:url('static/images/user_center/icon.png') no-repeat 32px 8px"
            :class="{'game-customization-current-page':showPage.page4}"
          >历史记录</li>
        </ul>
      </div>
      <div class="game-customization-body-right">
        <game-local-customization v-if="showPage.page1" :gameList="ajaxData.game_list"></game-local-customization>
        <game-all-customization v-if="showPage.page2" :gameTypes="ajaxData.game_types"></game-all-customization>
        <game-customization-list v-if="showPage.page3"></game-customization-list>
        <game-customization-history v-if="showPage.page4"></game-customization-history>
      </div>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import GameCustomizationHistory from './components/game_custom_components/CustomizationHistory'
import GameCustomizationList from './components/game_custom_components/CustomizationList'
import GameLocalCustomization from './components/game_custom_components/LocalCustomization'
import GameAllCustomization from './components/game_custom_components/AllCustomization'
import axios from 'axios'
export default {
  name: 'GameCustomization',
  components: {
    HomeHeader,
    GameCustomizationHistory,
    GameCustomizationList,
    GameLocalCustomization,
    GameAllCustomization
  },
  data () {
    return {
      // 决定显示哪个界面
      showPage: { page1: true, page3: false, page2: false, page4: false },
      isShowPage: false, // 当后端返回数据之后，再一起显示界面
      ajaxData: { // 请求后端接口返回的数据
        'game_list': [], // 允许定制化的游戏列表
        'game_types': [] // 所有的游戏类型
      }
    }
  },
  methods: {
    // 变更界面
    handlePageChange (val) {
      switch (val) {
        case 'page1':
          this.showPage = { page1: true, page3: false, page2: false, page4: false }
          break
        case 'page2':
          this.showPage = { page1: false, page3: false, page2: true, page4: false }
          break
        case 'page3':
          this.showPage = { page1: false, page3: true, page2: false, page4: false }
          break
        case 'page4':
          this.showPage = { page1: false, page3: false, page2: false, page4: true }
          break
      }
    },
    // 请求后端，获取数据
    ajaxGetData () {
      var _this = this
      axios.get(_this.GLOBAL.apiPath + '/home/customize/get_all', {
        headers: { 'Authorization': sessionStorage.getItem('gmp-token') }
      }).then(function (response) {
        var res = response.data
        if (res.success) {
          _this.ajaxData = res.data
          _this.isShowPage = true // 当成功获取数据后，显示界面
        } else {
          alert(res.errors)
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
  mounted () {
    this.ajaxGetData() // 调用请求数据的方法
  }
}
</script>

<style>
/* 内容部分 */
.game-customization-body {
  width: 960px;
  margin: 10px auto 20px auto;
  box-sizing: border-box;
  border: 1px solid #b5e0ea;
  display: flex;
  justify-content: space-between;
}
.game-customization-body-left {
  width: 210px;
  min-height: 400px;
  box-sizing: border-box;
  padding-left: 10px;
  background-color: #f0fbfd;
  border-right: 1px solid #b5e0ea;
}
/* 列表项 */
.game-customization-body-left > ul > li {
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
.game-customization-body-left > ul > li:hover {
  text-decoration: underline;
}
.game-customization-body-left > ul > li:nth-child(1) {
  border-top: none;
}
.game-customization-body-left > ul > li:nth-last-child(1) {
  border-bottom: 1px solid #b5e0ea;
}
/* 子组件 */
.game-customization-body-right {
  width: 700px;
}
/* 当前页面，左侧导航栏的样式 */
.game-customization-current-page {
  background-color: #fff !important;
  border-left: 1px solid #b5e0ea;
}
</style>
