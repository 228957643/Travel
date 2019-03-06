<template>
  <!-- 游戏详情页面右边的排名和热门推荐 -->
  <div class="game-ranking">
    <!-- 开局一张图 -->
    <div class="game-ranking-top-img">
      <img src="http://imga.5054399.com/upload_pic/2019/2/28/4399_08534894713.jpg" alt>
    </div>
    <!-- 热门推荐 -->
    <div class="game-ranking-hot">
      <!-- 头部样式 -->
      <div class="game-ranking-header">
        <span>热门推荐</span>
      </div>
      <!-- 主要内容 -->
      <div class="game-ranking-hot-content">
        <ul>
          <li v-for="item of 12" :key="item">
            <router-link to>
              <div>
                <img src="http://imga4.5054399.com/upload_pic/2017/11/27/4399_15171490498.jpg" alt>
              </div>
              <div>凹凸曼</div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 排行榜 -->
    <div class="game-ranking-list">
      <!-- 头部样式 -->
      <div class="game-ranking-header">
        <span>排行榜（总榜）</span>
      </div>
      <div class="game-ranking-list-content">
        <ul>
          <li v-for="rank of 10" :key="rank">
            <span>{{rank}}</span>
            <router-link to>造梦西游3-小游戏{{rank}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameRank'
}
</script>

<style>
.game-ranking {
  width: 200px;
}
/* 开局一张图 */
.game-ranking-top-img {
  width: 200px;
  height: 105px;
}
.game-ranking-header {
  border-bottom: 2px solid #ddd;
  height: 36px;
  line-height: 36px;
  margin-top: 20px;
}
.game-ranking-header span {
  font-size: 16px;
  font-weight: 700;
  font-family: '微软雅黑', 'Times New Roman', Times, serif;
  display: inline-block;
  border-bottom: 2px solid #f29041;
}
.game-ranking-hot-content>ul{
  display: flex;
  flex-flow: row wrap;
}
.game-ranking-hot-content li {
  width: 96px;
  height: 98px;
  margin-top: 10px;
  margin-left: 4px;
}
.game-ranking-hot-content img {
  width: 72px;
  height: 72px;
  border-radius: 10px;
  margin-bottom: 7px;
}
.game-ranking-hot-content a {
  text-align: center;
  color: #333;
  font-size:12px;
}
.game-ranking-hot-content a:hover {
  color: #ff6600;
  text-decoration: underline;
}
/* 排行榜 */
.game-ranking-list-content{
  width:100%;
  height:42px;
}
.game-ranking-list-content>ul>li>span{
  display: inline-block;
  width:20px;
  height: 20px;
  background-color: #ccc;
  color:#fff;
  text-align: center;
  line-height: 20px;
  margin-top: 11px;
  margin-right: 10px;
}
.game-ranking-list-content>ul>li>a{
  color:#333;
}
.game-ranking-list-content>ul>li>a:hover{
  text-decoration: underline;
  color:#ff8937;
}
/* 第一、二、三名的背景样式 */
.game-ranking-list-content>ul>li:nth-child(1)>span{
  background-color: #ff3d3d;
}
.game-ranking-list-content>ul>li:nth-child(2)>span{
  background-color: #ff774c;
}
.game-ranking-list-content>ul>li:nth-child(3)>span{
  background-color: #ff9c46;
}
</style>
