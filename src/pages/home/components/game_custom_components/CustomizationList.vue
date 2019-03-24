<template>
  <!-- 定制化列表 -->
  <div class="game-customization-list-page">
    <div class="game-customization-components-header">定制化列表</div>
    <!-- 列表 -->
    <div class="game-customization-list-body">
      <ul>
        <li v-for="i of 3" :key="i">
          <!-- 头部 -->
          <div class="game-customization-list-body-header">
            <span class="game-customization-lbh-game-name">造梦西游3</span>
            <span class="game-customization-lbh-game-type">【动作、角色扮演】</span>
            <span class="game-customization-lbh-game-datetime">2018/11/10 14:22:34</span>
          </div>
          <!-- 内容 -->
          <div class="game-customization-list-body-content">
            <div>
              <img src="http://www.4399.com/flashzt/img/zmxy4_20160927/swk2.jpg" alt>
            </div>
            <div>
              <!-- 游戏简介 -->
              <p>
                <span>游戏简介：</span>
                <span>这是一款由美国的动漫明星为游戏人物的格斗对战游戏， 游戏中有很多大家很熟悉的人物，游戏中的每个人物都有多种技能，快来体验一下吧！</span>
              </p>
              <!-- 游戏玩法 -->
              <p>
                <span>游戏玩法：</span>
                <span>这是一款由美国的动漫明星为游戏人物的格斗对战游戏， 游戏中有很多大家很熟悉的人物，游戏中的每个人物都有多种技能，快来体验一下吧！</span>
              </p>
            </div>
          </div>
          <!-- 尾部 -->
          <div class="game-customization-list-body-footer">
            <div>作者：旧颜丶消失殆尽</div>
            <div>
              <span
                class="game-customization-list-body-footer-zan"
                @click="handleGameCustomizationZanClick(i)"
              >
                <img src="static/images/game_customization/zan.png" alt>
                【{{i}}】
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizationList',
  methods: {
    handleGameCustomizationZanClick (index) {
      // TODO:点赞功能
      console.log(index)
    }
  }
}
</script>

<style>
.game-customization-list-body {
  margin-right: 10px;
}
.game-customization-list-body ul li {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  background-color: #f5f5f5;
  margin-top: 20px;
}
/* ================头部内容 */
/* 游戏名称 */
.game-customization-lbh-game-name {
  font-size: 16px;
  font-family: '微软雅黑', 'Times New Roman', Times, serif;
  font-weight: 700;
}
/* 游戏类别 */
.game-customization-lbh-game-type {
  color: #999;
}
/* =======审核状态——投票中、已通过、未通过 */
/* 进行中 */
.game-customization-status-ing {
  color: #777;
}
/* 已通过 */
.game-customization-status-succ {
  color: green;
}
/* 已过期 */
.game-customization-status-faild {
  color: red;
}
/* 游戏发布时间 */
.game-customization-lbh-game-datetime {
  float: right;
  margin-right: 10px;
}
/* =================内容 */
.game-customization-list-body-content {
  display: flex;
  margin-top: 20px;
}
.game-customization-list-body-content img {
  width: 130px;
  height: 180px;
  margin-left: 10px;
}
.game-customization-list-body-content p {
  width: 500px;
  color: #666;
  line-height: 18px;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 12px;
}
.game-customization-list-body-content p span:nth-child(1) {
  color: #ff9933;
  display: block;
  margin-bottom: 10px;
}
.game-customization-list-body-content p span:nth-child(2) {
  display: inline-block;
  text-indent: 2em;
}
/* ==============尾部 */
.game-customization-list-body-footer {
  text-align: right;
  margin: 20px 20px 10px 0;
}
.game-customization-list-body-footer-zan {
  font-size: 16px;
  display: inline-block;
  margin-top: 10px;
  color: #666;
  font-weight: 700;
  cursor: pointer;
}
</style>
