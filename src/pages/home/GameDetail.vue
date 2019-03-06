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
        <game-detail-slider></game-detail-slider>
      </div>
      <!-- 游戏简介 -->
      <div class="game-detail-description">
        <game-detail-desc></game-detail-desc>
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
              <p>鼠标左键操作</p>
            </li>
            <li>
              <div>
                <img src="static/images/detail/right.png" alt>&nbsp;如何开始
              </div>
              <p>游戏加载完毕点击[开始]即可开始游戏</p>
            </li>
            <li>
              <div>
                <img src="static/images/detail/right.png" alt>&nbsp;游戏目标
              </div>
              <p>合理操作，爬到萝卜顶端。</p>
            </li>
          </ul>
        </div>
        <!-- 评论 -->
        <div class="game-detail-comment">
          <game-detail-comment></game-detail-comment>
          <game-detail-comment-show></game-detail-comment-show>
        </div>
      </div>
      <!-- 右侧的热门推荐，排行榜 -->
      <div class="game-detail-right-ranking">
        <game-detail-rank></game-detail-rank>
      </div>
    </div>
    <!-- clear:both -->
    <div class="clearBoth"></div>
    <!-- 使用了首页footer的样式（Index.vue） -->
    <div class="game-detail-footer">
      <img src="static/images/index/page-bottom_LI.jpg" alt="">
      <span>备注：本网站作者模仿自：http://www.4399.com/，和http://www.7k7k.com，仅用于毕业设计，不传播贩卖，牟取利润。
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
      bgImg: this.GLOBAL.bgImg
    }
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
.game-detail-description {
  margin-top: 20px;
  float: left;
  width: 750px;
}
.game-detail-right-ranking {
  margin-top: 20px;
  float: right;
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
  width:990px;
  margin:20px auto 20px auto;
}
.game-detail-footer span{
  font-size: 12px;
  color:#999;
  display: block;
  line-height: 20px;
  margin-top: 10px;
}
</style>
