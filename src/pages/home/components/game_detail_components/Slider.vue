<template>
  <div class="game-detail-slider-component">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(slider,index) of sliderGames" :key="index">
        <ul class="game-detail-slider-ul">
          <li v-for="item of slider" :key="item.id">
            <a style="cursor:pointer;" @click="handleGameClick(item.id)">
              <div>
                <img :src="item.icon" alt>
              </div>
              <div>{{item.name}}</div>
            </a>
          </li>
        </ul>
      </swiper-slide>
      <div id="game-detail-slider-btn-prev" class="swiper-button-prev" slot="button-prev"></div>
      <div id="game-detail-slider-btn-next" class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'GameDetailSlider',
  props: ['sliderGames'],
  data () {
    return {
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        loop: true
      }
    }
  },
  methods: {
    // 游戏被点击，进入详情界面
    handleGameClick (gameId) {
      // 打开新的窗口展示游戏
      var routeData = this.$router.resolve({ path: '/game_detail', query: { id: gameId } })
      window.open(routeData.href, '_blank')
    }
  }
}
</script>

<style>
/* 左右翻页的箭头 */
#game-detail-slider-btn-prev {
  top: 60%;
  width: 30px;
  height: 20px;
}
#game-detail-slider-btn-next {
  top: 60%;
  width: 30px;
  height: 20px;
}
/* 每个a标签（包含图片和名称） */
.game-detail-slider-ul {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.game-detail-slider-ul > li {
  width: 95px;
  height: 98px;
  text-align: center;
  margin-top: 10px;
  margin-left: 6px;
}
.game-detail-slider-ul > li img {
  width: 72px;
  height: 72px;
  margin-bottom: 7px;
}
.game-detail-slider-ul > li > a {
  font-size: 12px;
  color: #000;
}
.game-detail-slider-ul > li > a:hover {
  text-decoration: underline;
  color: orange;
}
</style>
