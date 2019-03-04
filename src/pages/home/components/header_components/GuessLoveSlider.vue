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
      <swiper-slide>
          <ul>
            <li v-for="(item,index) of 3" :key="index" class="hpdls-swiper-item">
              <router-link to="">
                <div><img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt=""></div>
                <div>暴力摩托</div>
              </router-link>
              <router-link to="">
                <div><img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt=""></div>
                <div>暴力摩托</div>
              </router-link>
              <router-link to="">
                <div><img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt=""></div>
                <div>暴力摩托</div>
              </router-link>
            </li>
          </ul>
      </swiper-slide>
      <swiper-slide>
          <ul>
            <li v-for="(item,index) of 3" :key="index" class="hpdls-swiper-item">
              <router-link to="">
                <div><img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt=""></div>
                <div>暴力摩托</div>
              </router-link>
              <router-link to="">
                <div><img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt=""></div>
                <div>暴力摩托</div>
              </router-link>
              <router-link to="">
                <div><img src="http://i3.7k7kimg.cn/cms/cms10/20180810/143007_9202.jpg" alt=""></div>
                <div>暴力摩托</div>
              </router-link>
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
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style>
.header-page-down-list-slider{
  width:280px;
  z-index: 1;
  background-color: #fff;
}

/* 每个a标签（包含图片和名称） */
.header-page-down-list-slider ul{
  display:flex;
  margin: 14px auto 30px 13px;
}
.swiper-slide-active{
  overflow: hidden;
}
.hpdls-swiper-item{
  margin-left: 5px;
}
.hpdls-swiper-item>a{
  display:block;
  width:78px;
  height:69px;
  text-align: center;
  margin-bottom: 8px;
}
.hpdls-swiper-item>a:hover{
  text-decoration: underline;
  color:orange;
}
.hpdls-swiper-item>a img{
  width:66px;
  height:50px;
}
.hpdls-swiper-item>a>div:nth-child(2){
  font-size: 12px;
  margin-top: 4px;
}
#hpdls-swiper-pagination{
  bottom: 5%;
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
.header-guess-love-slider-explain{
  margin: 20px auto 10px auto;
  font-size: 12px;
  color:#fb6400;
}
</style>
