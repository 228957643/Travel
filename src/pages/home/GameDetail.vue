<template>
  <div class="game-detail" :style="bgImg">
    <!-- header -->
    <home-header></home-header>
    <div class="game-detail-body">
      <!-- second-header -->
      <div class="game-detail-second-header">
        <home-index-header :headerListActive="4"></home-index-header>
      </div>
      <!-- 路径跟踪 -->
      <div class="game-detail-path-tracking">
        <path-tracking></path-tracking>
      </div>
      <!-- 轮播图 -->
      <div class="game-detail-slider">
        <game-detail-slider :sliderGames="ajaxData.sliderGames"></game-detail-slider>
      </div>
      <!-- 游戏简介和排行榜的父亲盒子 -->
      <div class="game-detail-description-ranking">
        <!-- 游戏简介 -->
        <div class="game-detail-description">
          <game-detail-desc :gameDesc="ajaxData.gameDesc"></game-detail-desc>
          <!-- 游戏玩法 -->
          <div class="game-detail-game-play">
            <ul>
              <li class="game-detail-game-play-title">
                <img src="static/images/detail/detail-1.png" alt>&nbsp;游戏玩法
              </li>
              <li>
                <div>
                  <img src="static/images/detail/right.png" alt>&nbsp;操作指南 (本游戏合适16岁以上用户)
                </div>
                <p>{{ajaxData.gameDesc.play.text1 === ''?'暂无操作指南，程序猿正火速赶往添加中……':ajaxData.gameDesc.play.text1}}</p>
              </li>
              <li>
                <div>
                  <img src="static/images/detail/right.png" alt>&nbsp;如何开始
                </div>
                <p>{{ajaxData.gameDesc.play.text2 === ''?'游戏加载完毕点击[开始]即可开始游戏':ajaxData.gameDesc.play.text2}}</p>
              </li>
              <li>
                <div>
                  <img src="static/images/detail/right.png" alt>&nbsp;游戏目标
                </div>
                <p>{{ajaxData.gameDesc.play.text3 === ''?'合理操作，获取游戏胜利':ajaxData.gameDesc.play.text3}}</p>
              </li>
            </ul>
          </div>
          <!-- 评论 -->
          <div class="game-detail-comment">
            <game-detail-comment :gameId="ajaxData.gameDesc.id"></game-detail-comment>
            <game-detail-comment-show :gameComment="ajaxData.gameComment"></game-detail-comment-show>
          </div>
        </div>
        <!-- 右侧的热门推荐，排行榜 -->
        <div class="game-detail-right-ranking">
          <game-detail-rank :ranking="ajaxData.ranking" :hotGames="ajaxData.hotGames"></game-detail-rank>
        </div>
      </div>
    </div>
    <!-- 使用了首页footer的样式（Index.vue） -->
    <div class="game-detail-footer">
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
import GameDetailSlider from './components/game_detail_components/Slider'
import GameDetailDesc from './components/game_detail_components/GameDesc'
import GameDetailRank from './components/game_detail_components/GameRank'
import GameDetailComment from './components/game_detail_components/GameComment'
import GameDetailCommentShow from './components/game_detail_components/GameCommentShow'
import axios from 'axios'

export default {
  name: 'GameDetail',
  components: {
    HomeHeader,
    HomeIndexHeader,
    PathTracking,
    GameDetailSlider,
    GameDetailDesc,
    GameDetailRank,
    GameDetailComment,
    GameDetailCommentShow
  },
  data () {
    return {
      bgImg: this.GLOBAL.bgImg, // 背景图片
      header: { // 请求后端需要的token
        headers: { 'Authorization': sessionStorage.getItem('gmp-token') }
      },
      ajaxData: { // 请求后台接口返回的数据
        gameDesc: { play: { test1: '', text2: '', text3: '' } }, // 游戏详情（初始化一下，免得console中报错
        gameComment: [], // 游戏评论
        sliderGames: [], // 轮播游戏列表
        hotGames: [], // 热门推荐
        ranking: [] // 排行榜（总榜）
      }
    }
  },
  methods: {
    // 子组件传递的游戏详情界面事件
    handleGetDescInfo () {
      var _this = this
      var gameId = _this.$route.query.id
      axios.get(this.GLOBAL.apiPath + '/home/game/desc/' + gameId, _this.header).then(function (response) {
        var res = response.data
        if (res.success) {
          _this.ajaxData.gameDesc = res.data.game_desc
          _this.ajaxData.gameComment = res.data.game_comment
          _this.ajaxData.sliderGames = res.data.game_slider
          _this.ajaxData.hotGames = res.data.hot_game
          _this.ajaxData.ranking = res.data.ranking
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
    window.scrollTo(0, 0) // 每次进入都显示最上方（否则在首页滑动鼠标滚轮后，进入本页面就不是在最上方了）
    // 请求后台接口，获取数据
    this.handleGetDescInfo()
  }
}
</script>

<style>
.clearBoth {
  clear: both;
}
.game-detail-body {
  width: 980px;
  margin: 0 auto;
}
.game-detail-second-header {
  margin-top: 10px;
}
.game-detail-slider {
  margin-top: 10px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f5f5f5;
}
.game-detail-path-tracking {
  margin-top: 20px;
  margin-bottom: 10px;
}
.game-detail-description-ranking {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.game-detail-description {
  width: 750px;
}
/* 游戏玩法 */
.game-detail-game-play-title {
  font-size: 16px;
  font-weight: 700;
  font-family: '微软雅黑', 'Times New Roman', Times, serif;
  margin-top: 20px;
}
.game-detail-game-play li div {
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 700;
  font-family: '微软雅黑', 'Times New Roman', Times, serif;
  margin-top: 10px;
  margin-bottom: 10px;
}
.game-detail-game-play li p {
  line-height: 20px;
}
/* 底部 */
.game-detail-footer {
  width: 990px;
  margin: 20px auto 20px auto;
}
.game-detail-footer span {
  font-size: 12px;
  color: #999;
  display: block;
  line-height: 20px;
  margin-top: 10px;
}
</style>
