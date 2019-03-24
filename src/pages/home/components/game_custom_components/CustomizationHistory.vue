<template>
  <!-- 我的赏金 -->
  <div class="game-customization-my-bounty-page">
    <div class="game-customization-components-header">历史记录（我的申请记录）</div>
    <!-- 列表 -->
    <!-- ===============以下共用CustomizationList.vue中的css样式================ -->
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
              <!-- 闪光点 -->
              <p>
                <span>游戏特色（闪光点）：</span>
                <span>这是一款由美国的动漫明星为游戏人物的格斗对战游戏， 游戏中有很多大家很熟悉的人物，游戏中的每个人物都有多种技能，快来体验一下吧！</span>
              </p>
            </div>
          </div>
          <!-- 尾部 -->
          <div class="game-customization-list-body-footer">
            <div style="font-size:18px;font-weight:600;">
              点赞数量：
              <span style="color:#CC0000;">【29】</span>
            </div>
            <!-- 审核状态——进行中、已通过、已过期  -->
            <div style="font-size:18px;font-weight:600;margin-top:10px;">
              审核状态：
              <span class="game-customization-status-faild">未通过</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomizationHistory'
}
</script>

<style>
</style>
