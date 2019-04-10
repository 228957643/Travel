<template>
  <div class="game-comment-show">
    <div class="game-comment-show-title">
      <img src="static/images/detail/detail-1.png" alt>&nbsp;精彩评论
    </div>
    <div class="game-comment-show-body">
      <ul>
        <li v-for="item of gameComment" :key="item.id">
          <div class="game-comment-show-body-headimg">
            <img
              :src="item.user.head_img === ''?'static/images/detail/default-head-img.png':item.user.head_img"
              alt
            >
          </div>
          <div class="game-comment-show-body-div">
            <!-- 昵称，评论时间 -->
            <div class="gcsbd-nickname-time">
              <span>{{item.user.nickname}}</span>
              <span>1234玩家</span>
              <span>{{item.created_at}}</span>
            </div>
            <!-- 评论内容 内容中包含html标签，因此用v-html代替{{}}-->
            <div class="gcsbd-comment-content" v-html="item.content"></div>
            <!-- 其他 -->
          </div>
        </li>
      </ul>
      <p class="game-comment-show-no-comment" v-if="gameComment.length === 0">暂无评论</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameCommentShow',
  props: ['gameComment']
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
  min-height: 100px;
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
/* 没有评论时显示 */
.game-comment-show-no-comment{
  text-align: center;
  font-size: 32px;
  color:#ccc;
  letter-spacing: 10px;
  margin-top: 34px;
}
</style>
