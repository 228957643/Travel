<template>
  <div class="path-tracking">
    <ul>
      <li>
        <img src="static/images/detail/house.png" alt>
      </li>
      <li v-for="(item,index) of pathList" :key="index">
        <span class="path-tracking-gt" v-if="item.pre">&nbsp;&nbsp;&gt;&nbsp;</span>
        <span>{{item.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PathTracking',
  props: ['pathList'] // 格式pathList: [ { name: '1234小游戏', pre: false } ]
}
</script>

<style>
.path-tracking ul {
  display: flex;
  margin-left: 10px;
}
.path-tracking span,
.path-tracking-gt {
  color: #a9a9a9;
  font-size: 12px;
}
.path-tracking img {
  margin-right: 6px;
  margin-top: -6px;
}
</style>
