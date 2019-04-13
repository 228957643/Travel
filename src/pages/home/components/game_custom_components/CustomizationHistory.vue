<template>
  <!-- 我的赏金 -->
  <div class="game-customization-my-bounty-page" v-if="isPageShow">
    <div class="game-customization-components-header">历史记录（我的申请记录）</div>
    <!-- 列表 -->
    <!-- ===============以下共用CustomizationList.vue中的css样式================ -->
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
              <!-- 闪光点 -->
              <p>
                <span>游戏特色（闪光点）：</span>
                <span>{{i.flash_point}}</span>
              </p>
            </div>
          </div>
          <!-- 尾部 -->
          <div class="game-customization-list-body-footer">
            <div style="font-size:18px;font-weight:600;">
              点赞数量：
              <span style="color:#CC0000;">【{{i.zan_number}}】</span>
            </div>
            <!-- 审核状态——进行中、已通过、已过期  -->
            <div style="font-size:18px;font-weight:600;margin-top:10px;">
              审核状态：
              <span class="game-customization-status-faild">{{i.status === 1?'进行中':(i.status === 2?'已通过':'未通过')}}</span>
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
        @pagechange="ajaxGetCustomizeHistory"
      ></pagination>
    </div>
  </div>
</template>

<script>
import Pagination from '../Pagination'
import axios from 'axios'
export default {
  name: 'CustomizationHistory',
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
    // 请求列表数据
    ajaxGetCustomizeHistory (currentPage) {
      var _this = this
      axios.get(_this.GLOBAL.apiPath + '/home/customize/history', {
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
    this.ajaxGetCustomizeHistory(1)
  }
}
</script>

<style>
</style>
