<template>
  <!-- 首页——主要内容部分：main -->
  <div class="main-index">
    <!-- 头部导航栏 -->
    <home-index-header :currentTypeId="0" :gameType="ajaxData.game_type"></home-index-header>
    <!-- 导航栏下的小游戏列表 -->
    <home-game-class :gameClassData="ajaxData.game_class"></home-game-class>
    <!-- 轮播图 -->
    <index-image-slider></index-image-slider>
    <div class="index-body">
      <!-- 游戏内容 -->
      <div>
        <index-game-list :newGames="ajaxData.new_game" :hotGames="ajaxData.hot_game"></index-game-list>
      </div>
      <!-- 游戏内容右边的咨询 -->
      <div>
        <index-game-list-right></index-game-list-right>
      </div>
    </div>
    <!-- 首页最右侧的导航栏 -->
    <div class="index-page-right-slider-btns" v-show="pageRightBtnsShow">
      <index-page-right-slider-btns></index-page-right-slider-btns>
    </div>
    <!-- 首页 footer -->
    <div class="index-footer">
      <img src="static/images/index/page-bottom_LI.jpg" alt>
      <span>
        备注：本网站作者模仿自：http://www.4399.com/，和http://www.7k7k.com，仅用于毕业设计，不传播贩卖，牟取利润。
        如果侵犯了您的版权，请及时练习我们，本站将在1个工作日内删除，谢谢。联系方式：meien643@163.com
      </span>
    </div>
  </div>
</template>

<script>
import HomeIndexHeader from './index_components/IndexHeader'
import HomeGameClass from './index_components/GameClass'
import IndexImageSlider from './index_components/ImageSlider'
import IndexGameList from './index_components/GameList'
import IndexGameListRight from './index_components/GameListRight'
import IndexPageRightSliderBtns from './index_components/PageRightSliderBtns'
import axios from 'axios'
export default {
  name: 'HomeIndex',
  components: {
    HomeIndexHeader,
    HomeGameClass,
    IndexImageSlider,
    IndexGameList,
    IndexGameListRight,
    IndexPageRightSliderBtns
  },
  data () {
    return {
      pageRightBtnsShow: false,
      timer: null,
      ajaxData: {
        'game_type': [], // 游戏类别
        'game_class': [], // 游戏列表
        'hot_game': [], // 热门推荐
        'new_game': [] // 最新小游戏
      }
    }
  },
  methods: {
    // 鼠标滚动事件，用于显示首页右侧的导航条
    handleScroll () {
      // 函数执行频率节流
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 600 && !this.pageRightBtnsShow) {
          this.pageRightBtnsShow = true
        } else if (scrollTop <= 600 && this.pageRightBtnsShow) {
          this.pageRightBtnsShow = false
        }
      }, 16)
    },
    // 通过ajax获取首页内容
    ajaxGetData () {
      var _this = this
      axios.get(this.GLOBAL.apiPath + '/home/index')
        .then(function (response) {
          var res = response.data
          if (res.success) {
            _this.ajaxData.game_class = res.data.game_class
            _this.ajaxData.hot_game = res.data.hot_game
            _this.ajaxData.new_game = res.data.new_game
            _this.ajaxData.game_type = res.data.game_type
            // 将游戏类别放入session中
            sessionStorage.setItem('gmp-gameType', JSON.stringify(res.data.game_type))
          } else {
            alert(res.errors)
          }
        }).catch(function (err) {
          alert(err.response.status + '：' + err.response.statusText)
        })
    }
  },
  mounted () {
    // 每次回到首页，都显示顶部，并且隐藏右侧的导航条
    window.scrollTo(0, 0)
    this.pageRightBtnsShow = false
    window.addEventListener('scroll', this.handleScroll)
    // 每次回到首页，都调用一次接口请求数据
    this.ajaxGetData()
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.main-index {
  min-height: 600px;
  width: 980px;
  margin: 20px auto 0 auto;
}
.index-body {
  display: flex;
  justify-content: space-between;
}
/*  首页最右侧的导航栏 */
.index-page-right-slider-btns {
  position: fixed;
  width: 56px;
  height: auto;
  left: 50%;
  z-index: 9999;
  bottom: 10%;
  margin-left: 540px;
}
.index-footer {
  width: 990px;
  margin: 10px auto 20px auto;
}
.index-footer span {
  font-size: 12px;
  color: #999;
  display: block;
  line-height: 20px;
  margin-top: 10px;
}
</style>
