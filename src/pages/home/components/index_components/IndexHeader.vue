<template>
  <!-- 首页——主要内容部分头部导航条：main-header -->
  <div class="main-header-index">
    <ul>
      <li :class="{'main-header-current-page':currentTypeId === 0}">
        <a href="javascript:void(0)" @click="handleGameTypeBtnClick(0)">首页</a>
      </li>
      <li
        v-for="item of gameType"
        :key="item.id"
        :class="{'main-header-current-page':currentTypeId == item.id}"
      >
        <a href="javascript:void(0)" @click="handleGameTypeBtnClick(item.id)">{{item.type_name}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeIndexHeader',
  props: ['currentTypeId', 'gameType'],
  methods: {
    handleGameTypeBtnClick (typeId) {
      if (typeId === 0) {
        // 跳转到首页
        this.$router.push({ path: '/' })
      } else {
        // 打开新的窗口展示游戏
        // 需要传递两个参数，两个参数互斥，如果typeid存在就根据typeId获取数据，如果gameName存在，就根据游戏名模糊搜索
        var routeData = this.$router.resolve({ path: '/search', query: { typeId: typeId, gameName: '' } })
        window.open(routeData.href, '_blank')
      }
    }
  }
}
</script>

<style>
/* 头部导航栏样式 */
.main-header-index {
  height: 36px;
  width: 980px;
  background-color: #ff8937;
}
.main-header-index > ul {
  display: flex;
}
.main-header-index > ul > li {
  padding: 0 9px 0 9px;
  height: 36px;
  line-height: 36px;
  text-align: center;
}
.main-header-index > ul > li:hover {
  background-color: #f4a460;
}
.main-header-index a {
  color: #fff;
}
/* “首页”字样 样式 */
.main-header-current-page {
  background-color: #f4a460;
}
</style>
