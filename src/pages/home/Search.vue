<template>
  <div class="search" :style="bgImg">
    <!-- header -->
    <home-header></home-header>
    <div class="search-body">
      <!-- second-header -->
      <div class="search-second-header">
        <!-- 这里currentTypeId传递-1的意思，是因为搜索到的游戏杂乱，没有固定的类别 -->
        <home-index-header :currentTypeId="currentGameType === 0?-1:currentGameType" :gameType="ajaxData.gameType"></home-index-header>
      </div>
      <!-- 路径跟踪 -->
      <div class="search-path-tracking">
        <path-tracking :pathList="ajaxData.pathList"></path-tracking>
      </div>
      <!-- 全部 xx 小游戏 -->
      <div class="search-type-name-title">
        <img src="static/images/detail/detail-1.png" alt>&nbsp;全部小游戏
      </div>
      <!-- 游戏部分 -->
      <div class="search-games">
        <ul class="search-games-content-ul">
          <li v-for="item of ajaxData.games" :key="item.id">
            <a style="cursor:pointer;" @click="handleGameClick(item.id)">
              <div>
                <img :src="item.icon" alt>
              </div>
              <div>{{item.name}}</div>
            </a>
          </li>
        </ul>
        <div class="search-no-games-warning" v-if="isShowNoGameWarn">
          <div class="search-no-games-warning-box">
            <img src="static/images/search/cry.png" alt>
            <div>
              <p>
                很抱歉，没找到&nbsp;
                <span>{{gameName}}</span>&nbsp;相关游戏
              </p>
              <p>提示：你可以减少搜索关键字，来找到你要查找的小游戏。</p>
              <p>如：你搜索关键字为“三国游戏”，可以改为搜索“三国”，这样可以搜到更多的游戏哦</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 使用了首页footer的样式（Index.vue） -->
    <div class="search-footer">
      <img src="static/images/index/page-bottom_LI.jpg" alt>
      <span>
        备注：本网站作者模仿自：http://www.4399.com/，和http://www.7k7k.com，仅用于毕业设计，不传播贩卖，牟取利润。
        如果侵犯了您的版权，请及时练习我们，本站将在1个工作日内删除，谢谢。联系方式：meien643@163.com
      </span>
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeIndexHeader from './components/index_components/IndexHeader'
import PathTracking from './components/game_detail_components/PathTracking'
import axios from 'axios'

export default {
  name: 'Search',
  components: {
    HomeHeader,
    HomeIndexHeader,
    PathTracking
  },
  data () {
    return {
      bgImg: this.GLOBAL.bgImg, // 背景图片
      gameName: '', // 警告中——搜索的游戏名称
      currentGameType: 0, // 搜索的游戏名称
      isShowNoGameWarn: false, // 是否展示警告
      ajaxData: {
        gameType: [], // 游戏类别
        pathList: [{ name: '1234小游戏', pre: false }, { name: '小游戏', pre: true }], // 路径跟踪
        games: [] // 搜索到的游戏
      }
    }
  },
  methods: {
    // 根据typeId或者游戏名搜索游戏
    ajaxGetGames () {
      var _this = this
      axios.get(_this.GLOBAL.apiPath + '/home/search', {
        params: {
          'type_id': _this.$route.query.typeId,
          'game_name': _this.$route.query.gameName
        }
      }).then(function (response) {
        var res = response.data
        if (res.success) {
          _this.ajaxData.games = res.data.games
          if (res.data.games.length === 0) { // 如果为空，则显示警告
            _this.isShowNoGameWarn = true
          }
          _this.ajaxData.pathList.push({ name: res.data.game_type, pre: true })
        } else {
          alert(res.errors)
        }
      }).catch(function (err) {
        alert(err.response.status + '：' + err.response.statusText)
      })
    },
    // 单纯的获取游戏类型
    ajaxGetGameType () {
      var _this = this
      axios.get(_this.GLOBAL.apiPath + '/home/game_type').then(function (response) {
        var res = response.data
        if (res.success) {
          _this.ajaxData.gameType = res.data
        } else {
          alert(res.errors)
        }
      }).catch(function (err) {
        alert(err.response.status + '：' + err.response.statusText)
      })
    },
    // 游戏被点击，进入详情界面
    handleGameClick (gameId) {
      // 打开新的窗口展示游戏
      var routeData = this.$router.resolve({ path: '/game_detail', query: { id: gameId } })
      window.open(routeData.href, '_blank')
    }
  },
  mounted () {
    this.ajaxGetGames()
    this.gameName = this.$route.query.gameName
    this.currentGameType = this.$route.query.typeId
    // 获取session中的游戏类别（Index.vue中放入的）
    var gameType = sessionStorage.getItem('gmp-gameType')
    if (gameType != null) {
      this.ajaxData.gameType = JSON.parse(gameType)
    } else {
      // 如果session没有，则自己请求接口获取
      this.ajaxGetGameType()
    }
  }
}
</script>

<style>
.search-body {
  min-height: 400px;
  width: 980px;
  margin: 0 auto;
}
.search-second-header {
  margin-top: 10px;
}
.search-path-tracking {
  height: 32px;
  line-height: 32px;
  background-color: #f4f4f4;
}
/* 全部 xx 小游戏文字样式 */
.search-type-name-title {
  height: 42px;
  line-height: 42px;
  color: #555;
  font-size: 16px;
  font-weight: 700;
  font-family: '微软雅黑', 'Times New Roman', Times, serif;
}
/* 游戏部分样式（采用了首页游戏样式，组件GameList.vue */
.search-games {
  text-align: center;
}
.search-games-content-ul {
  margin-left: 30px;
  display: flex;
  flex-flow: row wrap;
}
.search-games-content-ul > li {
  width: 95px;
  height: 98px;
  text-align: center;
  margin-top: 10px;
  margin-left: 6px;
}
.search-games-content-ul > li img {
  width: 72px;
  height: 72px;
  margin-bottom: 7px;
}
.search-games-content-ul > li > a {
  font-size: 12px;
  color: #000;
}
.search-games-content-ul > li > a:hover {
  text-decoration: underline;
  color: orange;
}
/* 底部 */
.search-footer {
  width: 990px;
  margin: 20px auto 20px auto;
}
.search-footer span {
  font-size: 12px;
  color: #999;
  display: block;
  line-height: 20px;
  margin-top: 10px;
}
/* 没有搜索到游戏时，显示的提示信息 */
.search-no-games-warning {
  margin-top: 50px;
}
.search-no-games-warning-box {
  margin: 0 auto;
  width: 600px;
}
.search-no-games-warning-box img {
  float: left;
  margin-right: 20px;
}
.search-no-games-warning-box div {
  text-align: left;
}
.search-no-games-warning-box div p:first-child {
  font-size: 18px;
  font-weight: 700;
  color: #484848;
}
.search-no-games-warning-box div p:first-child span {
  color: #fb6400;
}
.search-no-games-warning-box div p:nth-child(2),
p:nth-child(3) {
  font-size: 12px;
  font-family: 宋体;
  color: #484848;
  margin: 10px 0 10px 0;
}
</style>
