<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">内容</div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
.header{
    display:flex;
}
.header-left{
    float:left
    widows:0.64rem
}
.header-input{
    flex:1
}
.header-right{
    widows:1.24rem
    float:right
}
</style>
