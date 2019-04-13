<template>
  <div class="header-played-game-slider">
    <!-- 我的收藏 -->
    <div class="header-played-game-slider-header">
      <ul>
        <!-- 此处（头部）共享了GameList.vue中的部分样式 -->
        <li class="igl-bglh-img">
          <img src="static/images/index/more-game.png" alt>
        </li>
        <li class="igl-bglh-text">
          <span>我的收藏</span>
        </li>
      </ul>
    </div>
    <p class="header-played-game-slider-explain">您还未收藏过任何游戏</p>
    <!-- 我玩过的 -->
    <!-- 头部 -->
    <div class="header-played-game-slider-header">
      <ul>
        <!-- 此处（头部）共享了GameList.vue中的部分样式 -->
        <li class="igl-bglh-img">
          <img src="static/images/index/more-game.png" alt>
        </li>
        <li class="igl-bglh-text">
          <span>我玩过的</span>
        </li>
        <li class="igl-bglh-more">
          <router-link to>更多</router-link>
        </li>
      </ul>
    </div>
    <!-- 轮播图部分 -->
    <div class="header-played-game-slider-body">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(games,index) of footPrint" :key="index">
          <ul class="hpgsb-body-swiper-box">
            <li v-for="it of games" :key="it.id" @click="handleSwiperGameClick(it.id)">
              <img :src="it.icon" alt>
              <p>{{it.name}}</p>
            </li>
          </ul>
        </swiper-slide>
        <div id="header-played-game-slider-pagination" class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPlayedGameSlider',
  props: ['footPrint'],
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    // 游戏被点击，进入详情界面
    handleSwiperGameClick (gameId) {
      var routeData = this.$router.resolve({ path: '/game_detail', query: { id: gameId } })
      window.open(routeData.href, '_blank')
    }
  }
}
</script>

<style>
.header-played-game-slider {
  width: 280px;
  background-color: #fff;
}
/* 每个a标签（包含图片和名称） */
.hpgsb-body-swiper-box {
  width: 246px;
  max-height: 234px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 30px;
}
.hpgsb-body-swiper-box li {
  margin-top: 2px;
  margin-left: 4px;
  width: 78px;
  height: 76px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.hpgsb-body-swiper-box li p {
  width: 78px;
  height: 12px;
  overflow: hidden;
}

.hpgsb-body-swiper-box li:hover {
  color: orange;
  text-decoration: underline;
}
.hpgsb-body-swiper-box li img {
  width: 66px;
  height: 50px;
  margin-bottom: 7px;
}
/*  */
.swiper-slide-active {
  overflow: hidden;
}
#header-played-game-slider-pagination {
  bottom: 5%;
}
/* 头部样式 */
.header-played-game-slider-header {
  width: 100%;
  height: 32px;
  line-height: 32px;
  background-color: #ffefd5;
  margin-bottom: 10px;
}
.header-played-game-slider-header > ul {
  display: flex;
  margin: 0;
}
.header-played-game-slider-explain {
  margin: 20px auto 20px auto;
  font-size: 12px;
  color: #fb6400;
}
</style>
