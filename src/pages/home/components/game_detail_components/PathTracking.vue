<template>
  <div class="path-tracking">
    <ul>
      <li>
        <img src="static/images/detail/house.png" alt>
      </li>
      <li v-for="(p,index) of pathList" :key="p.id">
        <span class="path-tracking-gt" v-if="pathListGap[index] === 't'">&nbsp;&nbsp;&gt;&nbsp;</span>
        <router-link :to="{path: p.href, query: {}}">{{p.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PathTracking',
  data () {
    return {
      pathList: [
        { id: '001', name: '1234小游戏', href: '' },
        { id: '002', name: '小游戏', href: '' },
        { id: '003', name: '造梦西游1', href: '' },
        { id: '004', name: '造梦西游2', href: '' },
        { id: '005', name: '造梦西游3', href: '' }
      ]
    }
  },
  computed: {
    pathListGap: function () {
      var arr = []
      var listLen = this.pathList.length
      for (var i = 0; i < listLen; i++) {
        arr.push(i === 0 ? 'f' : 't')
      }
      return arr
    }
  }
}
</script>

<style>
.path-tracking ul {
  display: flex;
}
.path-tracking a,
.path-tracking-gt {
  color: #a9a9a9;
  font-size: 12px;
}
.path-tracking a:hover {
  text-decoration: underline;
  color: #ff8937;
}
.path-tracking img {
  margin-right: 6px;
  margin-top: -6px;
}
</style>
