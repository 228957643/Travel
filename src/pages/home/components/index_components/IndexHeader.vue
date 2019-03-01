<template>
<!-- 首页——主要内容部分头部导航条：main-header -->
    <div class='main-header-index'>
        <ul>
        <li class="main-header-index-page"><router-link to="">首页</router-link></li>
        <li><router-link to="">动作</router-link></li>
        <li><router-link to="">体育</router-link></li>
        <li><router-link to="">益智</router-link></li>
        <li><router-link to="">射击</router-link></li>
        <li><router-link to="">冒险</router-link></li>
        <li><router-link to="">棋牌</router-link></li>
        <li><router-link to="">策略</router-link></li>
        <li><router-link to="">休闲</router-link></li>
        <li><router-link to="">女生</router-link></li>
        <li><router-link to="">装扮</router-link></li>
        <li><router-link to="">儿童</router-link></li>
        <li><router-link to="">过关</router-link></li>
        <li><router-link to="">双人</router-link></li>
        <li><router-link to="">桌趣</router-link></li>
        <li><router-link to="">漫画</router-link></li>
        <li><router-link to="">闪艺小说</router-link></li>
        <li><router-link to="">手机游戏</router-link></li>
        <li><router-link to="">网页游戏</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeIndexHeader'
}
</script>

<style>
/* 头部导航栏样式 */
.main-header-index{
  height:36px;
  width:980px;
  background-color: #ff8937;
}
.main-header-index>ul{
  display: flex;
}
.main-header-index>ul>li{
  padding: 0 9px 0 9px;
  height:36px;
  line-height: 36px;
  text-align: center;
}
.main-header-index>ul>li:hover{
  background-color: #F4A460;
}
.main-header-index a{
  color:#fff;
}
/* “首页”字样 样式 */
.main-header-index-page{
   background-color: #F4A460;
}
</style>
