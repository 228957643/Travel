<template>
  <div class="index-image-swiper">
    <swiper :options="swiperOption">
      <swiper-slide>
        <ul>
          <li v-for="(item,index) of 11" :key="index" class="index-image-swiper-item">
            <router-link to>
              <div>
                <img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt>
              </div>
              <div>暴力摩托</div>
            </router-link>
            <router-link to>
              <div>
                <img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt>
              </div>
              <div>暴力摩托</div>
            </router-link>
            <router-link to>
              <div>
                <img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt>
              </div>
              <div>暴力摩托</div>
            </router-link>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul>
          <li v-for="(item,index) of 11" :key="index" class="index-image-swiper-item">
            <router-link to>
              <div>
                <img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt>
              </div>
              <div>暴力摩托</div>
            </router-link>
            <router-link to>
              <div>
                <img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt>
              </div>
              <div>暴力摩托</div>
            </router-link>
            <router-link to>
              <div>
                <img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt>
              </div>
              <div>暴力摩托</div>
            </router-link>
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

<style scoped>
.index-image-swiper {
  height: 252px;
  border: 1px solid #ffdead;
  box-sizing: border-box;
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
.index-image-swiper ul {
  display: flex;
  margin-top: 14px;
  margin-left: 30px;
}
.swiper-slide-active {
  overflow: hidden;
}
.index-image-swiper-item {
  margin-left: 5px;
}
.index-image-swiper-item > a {
  display: block;
  width: 78px;
  height: 69px;
  text-align: center;
  margin-bottom: 8px;
}
.index-image-swiper-item > a:hover {
  text-decoration: underline;
  color: orange;
}
.index-image-swiper-item > a img {
  width: 66px;
  height: 50px;
}
.index-image-swiper-item > a > div:nth-child(2) {
  font-size: 12px;
  margin-top: 4px;
}
</style>
