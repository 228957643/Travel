<template>
  <div class="index-game-list">
    <div class="igl-best-game-list">
      <ul>
        <li>
          <!-- 最新游戏 —— 锚点-->
          <a name="best-new-game"></a>
          <div class="igl-best-game-list-header">
            <ul>
              <li class="igl-bglh-img">
                <img src="static/images/index/more-game.png" alt>
              </li>
              <li class="igl-bglh-text">
                <span>最好玩的小游戏</span>
              </li>
              <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li>
            </ul>
          </div>
          <div class="igl-best-game-list-content">
            <ul class="igl-best-game-list-content-ul">
              <li v-for="(item,index) of 147" :key="index">
                <router-link to>
                  <div>
                    <img
                      src="http://imga5.5054399.com/upload_pic/2019/2/19/4399_09280951080.jpg"
                      alt
                    >
                  </div>
                  <div>泡泡星球</div>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <!-- 女生游戏——锚点 -->
          <a name="girl-game"></a>
          <div class="igl-best-game-list-header">
            <ul>
              <li class="igl-bglh-img">
                <img src="static/images/index/more-game.png" alt>
              </li>
              <li class="igl-bglh-text">
                <span>女生游戏</span>
              </li>
              <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li>
            </ul>
          </div>
          <div class="igl-best-game-list-content">
            <ul class="igl-best-game-list-content-ul">
              <li v-for="(item,index) of 147" :key="index">
                <router-link to>
                  <div>
                    <img
                      src="http://i4.7k7kimg.cn/cms/cms10/20160401/154850_6912.jpg"
                      alt
                    >
                  </div>
                  <div>泡泡星球</div>
                </router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexGameList'
}
</script>

<style>
.index-game-list {
  width: 720px;
  min-height: 300px;
  box-sizing: border-box;
  border: 1px solid #ffdead;
  margin-top: 10px;
}
/* 最好玩的小游戏列表 */
.igl-best-game-list-header {
  width: 100%;
  height: 32px;
  line-height: 32px;
  background-color: #ffefd5;
}
.igl-best-game-list-header > ul {
  display: flex;
}
/* 头部样式中的组成部分 */
.igl-bglh-img {
  margin-left: 10px;
  margin-top: -1px;
}
.igl-bglh-text {
  color: #4e4e4e;
  font-weight: bold;
  margin-left: 4px;
}
.igl-bglh-more {
  margin-left: auto;
  margin-right: 10px;
}
.igl-bglh-more a {
  font-size: 12px;
  color: #4e4e4e;
}
.igl-bglh-more a:hover {
  text-decoration: underline;
  color: red;
}
.igl-bglh-more img {
  margin-top: -2px;
}
/*  */
.igl-best-game-list-content-ul {
  display: flex;
  flex-flow: row wrap;
}
.igl-best-game-list-content-ul > li {
  width: 95px;
  height: 98px;
  text-align: center;
  margin-top: 10px;
  margin-left: 6px;
}
.igl-best-game-list-content-ul > li img {
  width: 72px;
  height: 72px;
  margin-bottom: 7px;
}
.igl-best-game-list-content-ul > li > a {
  font-size: 12px;
  color: #000;
}
.igl-best-game-list-content-ul > li > a:hover {
  text-decoration: underline;
  color: orange;
}
</style>
