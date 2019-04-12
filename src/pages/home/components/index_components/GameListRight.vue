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
              <!-- <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li> -->
            </ul>
          </div>
          <!-- 共享style结束 -->
          <div class="igl-best-game-list-content-right">
            <ul class="igl-best-game-list-content-ul-right">
              <li v-for="item of rightGame.right_today_game" :key="item.id">
                <a style="cursor:pointer;" @click="handleRightGameClick(item.id)">
                  <div>
                    <img :src="item.icon" alt>
                  </div>
                  <div>{{item.name}}</div>
                </a>
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
                <span>热门推荐</span>
              </li>
              <!-- <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li> -->
            </ul>
          </div>
          <!-- 共享style结束 -->
          <div class="igl-best-game-list-content-right">
            <ul class="igl-best-game-list-content-ul-right">
              <li v-for="item of rightGame.right_hot_game" :key="item.id">
                <a style="cursor:pointer;" @click="handleRightGameClick(item.id)">
                  <div>
                    <img :src="item.icon" alt>
                  </div>
                  <div>{{item.name}}</div>
                </a>
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
                <span>好玩推荐</span>
              </li>
              <!-- <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li> -->
            </ul>
          </div>
          <!-- 共享style结束 -->
          <div class="igl-best-game-list-content-right">
            <ul class="igl-best-game-list-content-ul-right">
              <li v-for="item of rightGame.right_good_game" :key="item.id">
                <a style="cursor:pointer;" @click="handleRightGameClick(item.id)">
                  <div>
                    <img :src="item.icon" alt>
                  </div>
                  <div>{{item.name}}</div>
                </a>
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
  name: 'IndexGameListRight',
  props: ['rightGame'],
  methods: {
    handleRightGameClick (gameId) {
      // 打开新的窗口展示游戏
      var routeData = this.$router.resolve({ path: '/game_detail', query: { id: gameId } })
      window.open(routeData.href, '_blank')
    }
  }
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
.index-game-list-right>ul>li:nth-child(2), /* 热门推荐 */
.index-game-list-right>ul>li:nth-child(3) /* 好玩推荐 */{
  margin-top: 30px;
}
/*  */
/*  */
.igl-best-game-list-content-ul-right {
  display: flex;
  flex-flow: row wrap;
}
.igl-best-game-list-content-ul-right > li {
  width: 81px;
  min-height: 86px;
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
