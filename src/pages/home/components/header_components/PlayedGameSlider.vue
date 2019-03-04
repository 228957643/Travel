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
      <swiper-slide>
          <ul>
            <li v-for="(item,index) of 3" :key="index" class="header-played-game-slider-item">
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
            <li v-for="(item,index) of 3" :key="index" class="header-played-game-slider-item">
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
      <div id="header-played-game-slider-pagination" class="swiper-pagination" slot="pagination"></div>
    </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderPlayedGameSlider',
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
.header-played-game-slider{
  width:280px;
  background-color: #fff;
}
/* 每个a标签（包含图片和名称） */
.header-played-game-slider ul{
  display:flex;
  margin: 14px auto 30px 13px;
}
.swiper-slide-active{
  overflow: hidden;
}
.header-played-game-slider-item{
  margin-left: 5px;
}
.header-played-game-slider-item>a{
  display:block;
  width:78px;
  height:69px;
  text-align: center;
  margin-bottom: 8px;
}
.header-played-game-slider-item>a:hover{
  text-decoration: underline;
  color:orange;
}
.header-played-game-slider-item>a img{
  width:66px;
  height:50px;
}
.header-played-game-slider-item>a>div:nth-child(2){
  font-size: 12px;
  margin-top: 4px;
}
#header-played-game-slider-pagination{
  bottom: 5%;
}
/* 头部样式 */
.header-played-game-slider-header {
  width: 100%;
  height: 32px;
  line-height: 32px;
  background-color: #ffefd5;
}
.header-played-game-slider-header > ul {
  display: flex;
  margin: 0;
}
.header-played-game-slider-explain{
  margin: 20px auto 20px auto;
  font-size: 12px;
  color:#fb6400;
}
</style>
