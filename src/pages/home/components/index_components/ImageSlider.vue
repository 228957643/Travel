<template>
  <div class="index-image-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(games,index) of sliderGame" :key="index">
        <ul class="index-image-swiper-box">
          <li v-for="it of games" :key="it.id" @click="handleSwiperGameClick(it.id)">
            <img :src="it.icon" alt>
            <p>{{it.name}}</p>
          </li>
        </ul>
      </swiper-slide>
      <div id="index-image-swiper-btn-prev" class="swiper-button-prev" slot="button-prev"></div>
      <div id="index-image-swiper-btn-next" class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'IndexImageSlider',
  props: ['sliderGame'],
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
    handleSwiperGameClick (gameId) {
      // 打开新的窗口展示游戏
      var routeData = this.$router.resolve({ path: '/game_detail', query: { id: gameId } })
      window.open(routeData.href, '_blank')
    }
  }
}
</script>

<style scoped>
.index-image-swiper {
  height: 252px;
  border: 1px solid #ffdead;
  box-sizing: border-box;
  padding-top: 9px;
}
/* 左右翻页的箭头 */
#index-image-swiper-btn-prev {
  width: 30px;
  height: 20px;
}
#index-image-swiper-btn-next {
  width: 30px;
  height: 20px;
}
/* 每个a标签（包含图片和名称） */
.index-image-swiper-box {
  width: 904px;
  max-height: 234px;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
}
.index-image-swiper-box li {
  margin-top: 2px;
  margin-left: 4px;
  width: 78px;
  height: 76px;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
}
.index-image-swiper-box li p {
  width: 78px;
  height: 12px;
  overflow: hidden;
}

.index-image-swiper-box li:hover {
  color: orange;
  text-decoration: underline;
}
.index-image-swiper-box li img {
  width: 66px;
  height: 50px;
  margin-bottom: 7px;
}
.swiper-slide-active {
  overflow: hidden;
}
</style>
