<template>
  <div class="header-page-down-list-slider">
    <!-- 头部 -->
    <div class="hpdls-header">
      <ul>
        <!-- 此处（头部）共享了GameList.vue中的部分样式 -->
        <li class="igl-bglh-img">
          <img src="static/images/index/more-game.png" alt>
        </li>
        <li class="igl-bglh-text">
          <span>猜你喜欢</span>
        </li>
        <li class="igl-bglh-more">
          <router-link to>更多</router-link>
        </li>
      </ul>
    </div>
    <!-- 解释说明 -->
    <p class="header-guess-love-slider-explain">根据您的游戏记录，为您推荐以下游戏</p>
    <!-- 轮播图部分 -->
    <div class="hpdls-body">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(games,index) of guessLike" :key="index">
          <ul class="hpdls-body-swiper-box">
            <li v-for="it of games" :key="it.id" @click="handleSwiperGameClick(it.id)">
              <img :src="it.icon" alt>
              <p>{{it.name}}</p>
            </li>
          </ul>
        </swiper-slide>
        <div id="hpdls-swiper-pagination" class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderGuessLoveSlider',
  props: ['guessLike'],
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
.header-page-down-list-slider {
  width: 280px;
  z-index: 1;
  background-color: #fff;
}

/* 每个a标签（包含图片和名称） */
.hpdls-body-swiper-box {
  width: 246px;
  max-height: 234px;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  margin-bottom: 30px;
}
.hpdls-body-swiper-box li {
  margin-top: 2px;
  margin-left: 4px;
  width: 78px;
  height: 76px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.hpdls-body-swiper-box li p {
  width: 78px;
  height: 12px;
  overflow: hidden;
}

.hpdls-body-swiper-box li:hover {
  color: orange;
  text-decoration: underline;
}
.hpdls-body-swiper-box li img {
  width: 66px;
  height: 50px;
  margin-bottom: 7px;
}
/*  */

.swiper-slide-active {
  overflow: hidden;
}
#hpdls-swiper-pagination {
  bottom: 10px;
}
/* 头部样式 */
.hpdls-header {
  width: 100%;
  height: 32px;
  line-height: 32px;
  background-color: #ffefd5;
}
.hpdls-header > ul {
  display: flex;
  margin: 0;
}
/* 解释说明 */
.header-guess-love-slider-explain {
  margin: 20px auto 20px auto;
  font-size: 12px;
  color: #fb6400;
}
</style>
