<template>
  <!-- 首页——主要内容部分——游戏分类：game-class -->
  <div class="game-class">
    <ul>
      <li
        v-for="(gameClassLiData,index) of gameClassData"
        :key="index"
        :class="index < 8 ? 'game-class-li-half' : 'game-class-li'"
      >
        <ul>
          <li
            v-for="(item,index) of gameClassLiData"
            :key="index"
            :class="{'game-class-type':index === 0}"
            @click="handleGameClassClick(item.id)"
          >
            <a
              href="javascript:void(0)"
              :style="{color:(item.type_id===2?'#fb6400':(item.type_id===6?'#389904':'#484848'))}"
            >{{item.name}}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeGameClass',
  props: ['gameClassData'],
  methods: {
    // 游戏被点击，搜索
    handleGameClassClick (gameId) {
      // 游戏被点击，进入详情界面
      var routeData = this.$router.resolve({ path: '/game_detail', query: { id: gameId } })
      window.open(routeData.href, '_blank')
    }
  }
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
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.game-class-li {
  width: 100%;
  height: 26px;
  line-height: 26px;
  margin-left: 7px;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/*  */
.game-class > ul > li > ul {
  display: flex;
}
.game-class > ul > li > ul > li {
  padding: 1px 4px 1px 5px;
}
.game-class > ul > li > ul > li a {
  font-size: 12px;
  color: #484848;
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
