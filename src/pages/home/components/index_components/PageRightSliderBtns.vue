<template>
  <div class="page-right-slider-btns">
    <ul>
      <li><a href="#best-new-game">最新游戏</a></li>
      <li><a href="#hot-game">热门游戏</a></li>
      <li><router-link to="/feedback">意见反馈</router-link></li>
      <li><a href="javascript:alert('暂未开放')">H5在线玩</a></li>
      <li>
        <a href="#" class="page-right-slider-btns-top">
          <img src="static/images/index/icon-top.png" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PageRightSliderBtns'
}
</script>

<style>
.page-right-slider-btns a{
  display: block;
  box-sizing: border-box;
  border:1px solid #ccc;
  color:#3f3f3f;
  text-align: center;
  box-sizing: border-box;
  padding: 10px 8px 10px 8px;
  width:54px;
  height:52px;
  margin-top: 2px;
  font-size: 12px;
  letter-spacing: 2px;
  line-height: 16px;
}
.page-right-slider-btns-top img{
  margin-top: 6px;
}
</style>
