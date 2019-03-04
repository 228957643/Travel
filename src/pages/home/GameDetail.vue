<template>
  <div class="game-detail" :style="bgImg">
    <!-- header -->
    <home-header></home-header>
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
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeIndexHeader from './components/index_components/IndexHeader'
import PathTracking from './components/game_detail_components/PathTracking'
import GameDetailSlider from './components/game_detail_components/Slider'

export default {
  name: 'GameDetail',
  components: {
    HomeHeader,
    HomeIndexHeader,
    PathTracking,
    GameDetailSlider
  },
  data () {
    return {
      bgImg: this.GLOBAL.bgImg
    }
  }
}
</script>

<style>
.game-detail-second-header {
  width: 980px;
  margin: 10px auto 0 auto;
}
.game-detail-slider{
  width: 980px;
  margin: 10px auto 0 auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #f5f5f5;
}
.game-detail-path-tracking {
  width:980px;
  margin: 20px auto 10px auto;
}
</style>
