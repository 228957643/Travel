<template>
  <!-- 首页——主要内容部分——游戏分类：game-class -->
  <div class="game-class">
    <ul>
      <li
        v-for="gameClassLiData of gameClassData"
        :key="gameClassLiData.id"
        :class="gameClassLiData.is_half ? 'game-class-li-half' : 'game-class-li'"
      >
        <ul>
          <li
            v-for="item of gameClassLiData.data"
            :key="item.id"
            :class="{'game-class-type':item.is_head}"
          >
            <router-link to>{{item.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeGameClass',
  props: ['gameClassData']
}
</script>

<style>
.game-class {
  width: 100%;
  min-height: 218px;
  padding-bottom: 10px;
}
.game-class > ul {
  display: flex;
  flex-flow: row wrap;
}
.game-class-li-half {
  width: 483px;
  height: 26px;
  line-height: 26px;
  margin-left: 7px;
  box-sizing: border-box;
}
.game-class-li {
  width: 100%;
  height: 26px;
  line-height: 26px;
  margin-left: 7px;
  box-sizing: border-box;
}
.game-class > ul > li > ul {
  display: flex;
}
.game-class > ul > li > ul > li {
  padding: 1px 4px 1px 5px;
}
.game-class > ul > li > ul > li a {
  font-size: 12px;
  color: #000;
}
.game-class > ul > li > ul > li a:hover {
  color: #ff8937;
  text-decoration: underline;
}
/* 类别样式 */
.game-class-type a {
  border: 1px solid #0090eb;
  padding: 2px 4px 2px 4px;
  background-color: #ececec;
  color: #0090eb;
}
</style>
