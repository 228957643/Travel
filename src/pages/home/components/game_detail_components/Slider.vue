<template>
  <div class="game-detail-slider-component">
    <swiper :options="swiperOption">
      <swiper-slide>
        <ul class="game-detail-slider-ul">
          <li v-for="(item,index) of 9" :key="index">
            <router-link to>
              <div>
                <img src="http://imga3.5054399.com/upload_pic/2019/1/18/4399_17341338332.jpg" alt>
              </div>
              <div>完美漂移</div>
            </router-link>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul class="game-detail-slider-ul">
          <li v-for="(item,index) of 9" :key="index">
            <router-link to>
              <div>
                <img src="http://imga1.5054399.com/upload_pic/2017/6/21/4399_15415471465.jpg" alt>
              </div>
              <div>楚乔传</div>
            </router-link>
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
