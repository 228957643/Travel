<template>
  <!-- 定制化列表 -->
  <div class="game-customization-list-page" v-if="isPageShow">
    <div class="game-customization-components-header">定制化列表</div>
    <!-- 列表 -->
    <div class="game-customization-list-body">
      <ul>
        <li v-for="i of ajaxData" :key="i.id">
          <!-- 头部 -->
          <div class="game-customization-list-body-header">
            <span class="game-customization-lbh-game-name">{{i.game_name}}</span>
            <span class="game-customization-lbh-game-type">【{{i.game_type.type_name}}】</span>
            <span class="game-customization-lbh-game-datetime">{{i.created_at}}</span>
          </div>
          <!-- 内容 -->
          <div class="game-customization-list-body-content">
            <div>
              <img src="http://www.4399.com/flashzt/img/zmxy4_20160927/swk2.jpg" alt>
            </div>
            <div>
              <!-- 游戏简介 -->
              <p>
                <span>游戏简介：</span>
                <span>{{i.game_desc}}</span>
              </p>
              <!-- 游戏玩法 -->
              <p>
                <span>游戏玩法：</span>
                <span>{{i.play_way}}</span>
              </p>
            </div>
          </div>
          <!-- 尾部 -->
          <div class="game-customization-list-body-footer">
            <div>作者：{{i.user.nickname}}</div>
            <div>
              <span
                class="game-customization-list-body-footer-zan"
                @click="handleGameCustomizationZanClick(i.id,$event)"
              >
                <img src="static/images/game_customization/zan.png" alt>
                【
                <span>{{i.zan_number}}</span>】
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 分页 -->
    <div class="game-customization-list-pagination">
      <pagination
        :total="pagination.total"
        :current-page="pagination.current_page"
        :display="pagination.display"
        @pagechange="ajaxGetCustomizeList"
      ></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '../Pagination'
import axios from 'axios'
export default {
  name: 'CustomizationList',
  components: {
    Pagination
  },
  data () {
    return {
      isPageShow: false,
      pagination: { // 需要传给分页组件的内容
        total: 15, // 记录总条数
        current_page: 1, // 当前的页数
        display: 10 // 每页显示条数
      },
      ajaxData: [] // 后端返回数据
    }
  },
  methods: {
    // 点赞功能
    handleGameCustomizationZanClick (id, e) {
      var _this = this
      axios.get(_this.GLOBAL.apiPath + '/home/customize/click_zan', {
        params: { 'customize_all_id': id },
        headers: { 'Authorization': sessionStorage.getItem('gmp-token') }
      }).then(function (response) {
        var res = response.data
        if (res.success) {
          alert('关注成功，游戏定制成功后，将会在第一时间通知你！')
          location.reload()
        } else {
          alert(res.errors)
        }
      }).catch(function (err) {
        console.log(err)
        if (err.response.status === 401) {
          alert('登录失效，请重新登录')
          sessionStorage.clear()
          _this.$router.push({ path: '/login' })
        } else {
          alert(err.response.status + '：' + err.response.statusText)
        }
      })
    },
    // 请求列表数据
    ajaxGetCustomizeList (currentPage) {
      var _this = this
      axios.get(_this.GLOBAL.apiPath + '/home/customize/all_list', {
        params: { 'page': currentPage },
        headers: { 'Authorization': sessionStorage.getItem('gmp-token') }
      }).then(function (response) {
        var res = response.data
        if (res.success) {
          _this.ajaxData = res.data.data
          _this.pagination.total = res.data.total
          _this.pagination.current_page = res.data.current_page
          _this.pagination.display = res.data.per_page
          _this.isPageShow = true
        } else {
          alert(res.errors)
        }
      }).catch(function (err) {
        if (err.response.status === 401) {
          alert('登录失效，请重新登录')
          sessionStorage.clear()
          _this.$router.push({ path: '/login' })
        } else {
          alert(err.response.status + '：' + err.response.statusText)
        }
      })
    }
  },
  mounted () {
    // 请求定制化列表数据（默认第一页）
    this.ajaxGetCustomizeList(1)
  }
}
</script>

<style>
.game-customization-list-body {
  margin-right: 10px;
}
.game-customization-list-body ul li {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  background-color: #f5f5f5;
  margin-top: 20px;
}
/* ================头部内容 */
/* 游戏名称 */
.game-customization-lbh-game-name {
  font-size: 16px;
  font-family: '微软雅黑', 'Times New Roman', Times, serif;
  font-weight: 700;
}
/* 游戏类别 */
.game-customization-lbh-game-type {
  color: #999;
}
/* =======审核状态——投票中、已通过、未通过 */
/* 进行中 */
.game-customization-status-ing {
  color: #777;
}
/* 已通过 */
.game-customization-status-succ {
  color: green;
}
/* 已过期 */
.game-customization-status-faild {
  color: red;
}
/* 游戏发布时间 */
.game-customization-lbh-game-datetime {
  float: right;
  margin-right: 10px;
}
/* =================内容 */
.game-customization-list-body-content {
  display: flex;
  margin-top: 20px;
}
.game-customization-list-body-content img {
  width: 130px;
  height: 180px;
  margin-left: 10px;
}
.game-customization-list-body-content p {
  width: 500px;
  color: #666;
  line-height: 18px;
  margin-left: 20px;
  margin-top: 20px;
  font-size: 12px;
}
.game-customization-list-body-content p span:nth-child(1) {
  color: #ff9933;
  display: block;
  margin-bottom: 10px;
}
.game-customization-list-body-content p span:nth-child(2) {
  display: inline-block;
  text-indent: 2em;
}
/* ==============尾部 */
.game-customization-list-body-footer {
  text-align: right;
  margin: 20px 20px 10px 0;
}
.game-customization-list-body-footer-zan {
  font-size: 16px;
  display: inline-block;
  margin-top: 10px;
  color: #666;
  font-weight: 700;
  cursor: pointer;
}
.game-customization-list-pagination{
  margin-top: 40px;
}
</style>
