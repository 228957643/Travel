<template>
  <div class="game-comment-show">
    <div class="game-comment-show-title">
      <img src="static/images/detail/detail-1.png" alt>&nbsp;精彩评论
    </div>
    <div class="game-comment-show-body">
      <ul>
        <li v-for="i of 4" :key="i">
          <div class="game-comment-show-body-headimg">
            <img src="static/images/detail/default-head-img.png" alt>
          </div>
          <div class="game-comment-show-body-div">
            <!-- 昵称，评论时间 -->
            <div class="gcsbd-nickname-time">
              <span>旧颜丶消失殆尽</span>
              <span>1234玩家</span>
              <span>2019/02/12 12:05</span>
            </div>
            <!-- 评论内容 -->
            <div class="gcsbd-comment-content">讨厌第11关，我都玩了50次还没过</div>
            <!-- 其他 -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCommentShow'
}
</script>

<style>
.game-comment-show {
  width: 750px;
  margin-top: 20px;
}
.game-comment-show-title {
  font-size: 16px;
  font-weight: 700;
  font-family: '微软雅黑', 'Times New Roman', Times, serif;
}
.game-comment-show-body {
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}
.game-comment-show-body li {
  min-height: 120px;
  border-bottom: 1px dashed #ccc;
  box-sizing: border-box;
  padding-left: 90px;
  position: relative;
}
.game-comment-show-body-headimg img {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  position: absolute;
  top: 10px;
  left: 20px;
}
/* 昵称和评论时间这一行 */
.gcsbd-nickname-time {
  padding-top: 10px;
  font-size: 12px;
}
.gcsbd-nickname-time span:nth-child(1) {
  color: #000;
  font-size: 14px;
  font-weight: 700;
}
.gcsbd-nickname-time span:nth-child(2) {
  color: #037ae0;
  margin-left: 6px;
}
.gcsbd-nickname-time span:nth-child(3) {
  color: #b5b5b5;
  margin-left: 6px;
}
/* 评论内容 */
.gcsbd-comment-content {
  padding: 15px 10px 15px 0;
  font-family: '宋体', 'Times New Roman', Times, serif;
  line-height: 24px;
}
</style>
