<template>
  <div class="game-description">
    <div class="game-description-left-div">
      <div>
        <img src="http://imga1.5054399.com/upload_pic/2018/12/29/4399_16023219958.jpg" alt>
      </div>
      <div>
        <button>开始游戏</button>
      </div>
    </div>
    <div class="game-description-right-div">
      <ul>
        <li class="game-description-right-div-title">超人大乱斗</li>
        <li class="game-description-right-div-type">
          <div>分类：</div>
          <span>动作小游戏</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>大小：16.00M</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>日期：2015-10-11</span>
        </li>
        <li class="game-description-right-div-project">
          <div>专题：</div>
          <span>蜘蛛侠</span>
          <span>超人</span>
          <span>格斗</span>
          <span>男生游戏精选</span>
        </li>
        <li class="game-description-right-div-desc">
          <div>介绍：</div>
          <span>
            这是一款由美国的动漫明星为游戏人物的格斗对战游戏，
            游戏中有很多大家很熟悉的人物，游戏中的每个人物都有多种技能，快来体验一下吧！
          </span>
        </li>
        <li class="game-description-right-div-btns">
          <ul>
            <li>
              <a href="javascript:alert('您的浏览器暂不支持该功能，请使用Ctrl+D进行添加')" :style="gdrdbStar">收藏</a>
            </li>
            <li class="gdrdb-strategy">
              <router-link to :style="gdrdbStrategy">攻略</router-link>
            </li>
            <li class="gdrdb-comment">
              <router-link to :style="gdrdbComment">评论</router-link>
            </li>
          </ul>
        </li>
        <li class="game-description-right-div-hint">温馨提示：此游戏文件较大(16.00MB)，加载时请耐心等待...</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameDesc',
  data () {
    return {
      gdrdbStar: {
        background: "#fff url('static/images/detail/star.png') no-repeat 10px 5px"
      },
      gdrdbStrategy: {
        background: "#fff url('static/images/detail/strategy.png') no-repeat 10px 5px"
      },
      gdrdbComment: {
        background: "#fff url('static/images/detail/comment.png') no-repeat 8px 3px"
      }
    }
  }
}
</script>

<style>
.game-description {
  width: 750px;
  background-color: #f5f5f5;
  display: flex;
}
.game-description-left-div img {
  width: 300px;
  height: 200px;
  margin: 20px;
}
.game-description-left-div button {
  width: 240px;
  height: 45px;
  font-size: 20px;
  color: #fff;
  margin: 20px 0 30px 50px;
  background-color: #ff6600;
  letter-spacing: 4px;
  border-radius: 5px;
  cursor: pointer;
  opacity: 1;
}
.game-description-left-div button:hover {
  opacity: 0.8;
}
.game-description-right-div-title {
  color: #333;
  font-size: 16px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
}
.game-description-right-div > ul > li > div {
  color: #999;
  display: inline;
  font-size: 12px;
}
/* 分类 */
.game-description-right-div-type {
  color: #999;
  font-size: 12px;
}
/* 专题 */
.game-description-right-div-project {
  height: 40px;
  line-height: 40px;
}
.game-description-right-div-project span {
  color: #333;
  border: 1px solid #ccc;
  padding: 2px 6px 2px 6px;
  font-size: 12px;
}
/* 介绍 */
.game-description-right-div-desc {
  height: 90px;
  padding-top: 10px;
  font-size: 12px;
  line-height: 18px;
  padding-right: 10px;
  overflow: hidden;
}
/* 按钮 */
.game-description-right-div-btns > ul {
  display: flex;
  justify-content: center;
}
.game-description-right-div-btns a {
  display: inline-block;
  color: #333;
  font-size: 12px;
  text-align: right;
  padding-right: 10px;
  line-height: 28px;
  box-sizing: border-box;
  width: 67px;
  height: 28px;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #ccc;
  margin-right: 20px;
}
/* 温馨提示 */
.game-description-right-div-hint {
  font-size: 12px;
  color: #999;
  height: 30px;
  padding-top: 10px;
  line-height: 30px;
  text-align: center;
}
</style>
