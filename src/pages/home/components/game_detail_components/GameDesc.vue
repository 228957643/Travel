<template>
  <div class="game-description">
    <div class="game-description-left-div">
      <div>
        <img :src="gameDesc.desc_img" alt>
      </div>
      <div>
        <a
          :href="gameDesc.link"
          target="_blank"
          @click="handleUserPlayGame(gameDesc.id,gameDesc.type_id)"
        >开始游戏</a>
      </div>
    </div>
    <div class="game-description-right-div">
      <ul>
        <li class="game-description-right-div-title">{{gameDesc.name}}</li>
        <li class="game-description-right-div-type">
          <div>分类：</div>
          <span>{{gameDesc.game_type}}</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>大小：{{gameDesc.size}}</span>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <span>日期：{{gameDesc.publish_date}}</span>
        </li>
        <li class="game-description-right-div-project">
          <div>专题：</div>
          <span v-for="(item,index) of gameDesc.tags" :key="index">{{item}}</span>
        </li>
        <li class="game-description-right-div-desc">
          <div>介绍：</div>
          <span>{{gameDesc.game_desc}}</span>
        </li>
        <li class="game-description-right-div-btns">
          <ul>
            <li>
              <a href="javascript:alert('您的浏览器暂不支持该功能，请使用Ctrl+D进行添加')" :style="gdrdbStar">收藏</a>
            </li>
            <li class="gdrdb-strategy">
              <a href="javascript:alert('坚持不懈，就是最好的攻略')" :style="gdrdbStrategy">攻略</a>
            </li>
            <li class="gdrdb-comment">
              <a href="#game-comment" :style="gdrdbComment">评论</a>
            </li>
          </ul>
        </li>
        <li class="game-description-right-div-hint">温馨提示：此游戏文件较大({{gameDesc.size}})，加载时请耐心等待...</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'GameDesc',
  props: ['gameDesc'],
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
  },
  methods: {
    // 用户点击“开始游戏”时，记录
    handleUserPlayGame (gameId, typeId) {
      var _this = this
      var params = new URLSearchParams()
      params.append('game_id', gameId)
      params.append('type_id', typeId)
      axios.post(_this.GLOBAL.apiPath + '/home/play_game/insert', params, {
        headers: { 'Authorization': sessionStorage.getItem('gmp-token') }
      }).then(function (response) {
        var res = response.data
        if (!res.success) {
          alert(res.errors)
          return false
        }
      }).catch(function (err) {
        if (err.response.status === 401) {
          alert('登录失效，请重新登录')
          sessionStorage.clear()
          _this.$router.push({ path: '/login' })
        } else {
          alert(err.response.status + '：' + err.response.statusText)
        }
        return false
      })
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
.game-description-left-div a {
  width: 240px;
  height: 45px;
  line-height: 45px;
  display: inline-block;
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin: 20px 0 30px 50px;
  background-color: #ff6600;
  letter-spacing: 4px;
  border-radius: 5px;
  opacity: 1;
}
.game-description-left-div a:hover {
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
  margin-right: 6px;
}
/* 介绍 */
.game-description-right-div-desc {
  min-height: 90px;
  padding-top: 10px;
  font-size: 12px;
  line-height: 18px;
  padding-right: 10px;
  margin-bottom: 15px;
}
/* 按钮 */
.game-description-right-div-btns > ul {
  width: 410px;
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
