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
                <span>最新的小游戏</span>
              </li>
              <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li>
            </ul>
          </div>
          <div class="igl-best-game-list-content">
            <ul class="igl-best-game-list-content-ul">
              <li v-for="item of newGames" :key="item.id">
                <a style="cursor:pointer;"  @click="handleGameClick(item.id)">
                  <div>
                    <img :src="item.icon" alt>
                  </div>
                  <div>{{item.name}}</div>
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <!-- 最热游戏——锚点 -->
          <a name="hot-game"></a>
          <div class="igl-best-game-list-header">
            <ul>
              <li class="igl-bglh-img">
                <img src="static/images/index/more-game.png" alt>
              </li>
              <li class="igl-bglh-text">
                <span>最热门的小游戏</span>
              </li>
              <li class="igl-bglh-more">
                <router-link to>更多</router-link>
                <img src="static/images/index/more-red.png" alt>
              </li>
            </ul>
          </div>
          <div class="igl-best-game-list-content">
            <ul class="igl-best-game-list-content-ul">
              <li v-for="item of hotGames" :key="item.id">
                <a style="cursor:pointer;" @click="handleGameClick(item.id)">
                  <div>
                    <img :src="item.icon" alt>
                  </div>
                  <div>{{item.name}}</div>
                </a>
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
  name: 'IndexGameList',
  props: ['newGames', 'hotGames'],
  methods: {
    // 游戏被点击，进入详情界面
    handleGameClick (gameId) {
      var routeData = this.$router.resolve({ path: '/game_detail', query: { id: gameId } })
      window.open(routeData.href, '_blank')
    }
  }
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
