<template>
  <div class="index-game-list-right">
    <ul>
      <li>
        <!-- 今日推荐 -->
        <div class="iglr-today-recommend">
          <!-- 此处（header）共享GameList.vue中的style，需要谨慎 -->
          <div class="igl-best-game-list-header">
            <ul>
              <li class="igl-bglh-img">
                <img src="static/images/index/more-game.png" alt>
              </li>
              <li class="igl-bglh-text">
                <span>今日推荐</span>
              </li>
              <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li>
            </ul>
          </div>
          <!-- 共享style结束 -->
          <div class="igl-best-game-list-content-right">
            <ul class="igl-best-game-list-content-ul-right">
              <li v-for="(item,index) of 27" :key="index">
                <router-link to>
                  <div>
                    <img
                      src="http://imga2.5054399.com/upload_pic/2018/5/16/4399_14130126032.jpg"
                      alt
                    >
                  </div>
                  <div>泡泡星球</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <!-- 第二栏 -->
      <li>
        <div class="iglr-today-recommend">
          <!-- 此处（header）共享GameList.vue中的style，需要谨慎 -->
          <div class="igl-best-game-list-header">
            <ul>
              <li class="igl-bglh-img">
                <img src="static/images/index/more-game.png" alt>
              </li>
              <li class="igl-bglh-text">
                <span>今日推荐</span>
              </li>
              <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li>
            </ul>
          </div>
          <!-- 共享style结束 -->
          <div class="igl-best-game-list-content-right">
            <ul class="igl-best-game-list-content-ul-right">
              <li v-for="(item,index) of 27" :key="index">
                <router-link to>
                  <div>
                    <img
                      src="http://imga2.5054399.com/upload_pic/2019/1/10/4399_16302459871.jpg"
                      alt
                    >
                  </div>
                  <div>泡泡星球</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
      <!-- 第三栏 -->
      <li>
        <div class="iglr-today-recommend">
          <!-- 此处（header）共享GameList.vue中的style，需要谨慎 -->
          <div class="igl-best-game-list-header">
            <ul>
              <li class="igl-bglh-img">
                <img src="static/images/index/more-game.png" alt>
              </li>
              <li class="igl-bglh-text">
                <span>今日推荐</span>
              </li>
              <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li>
            </ul>
          </div>
          <!-- 共享style结束 -->
          <div class="igl-best-game-list-content-right">
            <ul class="igl-best-game-list-content-ul-right">
              <li v-for="(item,index) of 26" :key="index">
                <router-link to>
                  <div>
                    <img
                      src="http://imga4.5054399.com/upload_pic/2019/2/26/4399_15163913359.jpg"
                      alt
                    >
                  </div>
                  <div>泡泡星球</div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'IndexGameListRight'
}
</script>

<style>
.index-game-list-right {
  width: 246px;
  min-height: 200px;
  box-sizing: border-box;
  border: 1px solid #ffdead;
  margin-top: 10px;
}
/*  */
/*  */
.igl-best-game-list-content-ul-right {
  display: flex;
  flex-flow: row wrap;
}
.igl-best-game-list-content-ul-right > li {
  width: 81px;
  height: 86px;
  text-align: center;
  margin-top: 10px;
}
.igl-best-game-list-content-ul-right > li img {
  width: 72px;
  height: 62px;
  margin-bottom: 6px;
}
.igl-best-game-list-content-ul-right > li > a {
  font-size: 12px;
  color: #000;
}
.igl-best-game-list-content-ul-right > li > a:hover {
  text-decoration: underline;
  color: orange;
}
</style>
