<template>
  <!-- 局部定制化 -->
  <div class="game-customization-local-page">
    <div class="game-customization-components-header">局部定制化</div>
    <!-- 表格 -->
    <table class="game-customization-table">
      <tr>
        <td>游戏：</td>
        <td>
          <select name="game_id" id="game_id" v-model="formValue.game_id">
            <option value="0" selected>请选择游戏</option>
            <option v-for="game of gameList" :key="game.id" :value="game.id">{{game.name}}</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>定制化需求：</td>
        <td class="game-customization-local-nees-list">
          <!-- UI -->
          <input
            type="checkbox"
            id="customization_need1"
            value="1"
            v-model="formValue.customization_needs"
          >
          <label for="customization_need1">UI</label>
          <!-- 特效 -->
          <input
            type="checkbox"
            id="customization_need2"
            value="2"
            v-model="formValue.customization_needs"
          >
          <label for="customization_need2">特效</label>
          <!-- 背景音乐 -->
          <input
            type="checkbox"
            id="customization_need3"
            value="3"
            v-model="formValue.customization_needs"
          >
          <label for="customization_need3">背景音乐</label>
          <!-- 任务皮肤 -->
          <input
            type="checkbox"
            id="customization_need4"
            value="4"
            v-model="formValue.customization_needs"
          >
          <label for="customization_need4">皮肤</label>
          <!-- 自定义 -->
          <input
            type="checkbox"
            id="customization_need5"
            value="5"
            v-model="formValue.customization_needs"
          >
          <label for="customization_need5">自定义</label>
        </td>
      </tr>
      <tr>
        <td>期限：</td>
        <td>
          <select name="time_limit" id="time_limit" v-model="formValue.time_limit">
            <option value="0" selected>请选择定制期限</option>
            <option value="1">7天</option>
            <option value="2">30天</option>
            <option value="3">永久</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>备注：</td>
        <td class="game-customization-local-remark">
          <textarea
            name="remark"
            id="remark"
            cols="50"
            rows="4"
            v-model="formValue.remark"
            placeholder="如果您想自定义“需求”，请在这里告诉我们"
            maxlength="1000"
          ></textarea>
        </td>
      </tr>
      <tr class="game-customization-local-phone">
        <td>手机号码：</td>
        <td>
          <input type="text" maxlength="11" v-model="formValue.phone">
        </td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td style="position:relative;">
          <button @click="handleLocalCustomizationClick">提交申请</button>
          <span
            style="color:#00CC33;font-size:16px;font-weight:700;position:absolute;bottom:0;"
          >&nbsp;&nbsp;应付金额：{{payMoney}}元</span>
        </td>
      </tr>
    </table>
    <!-- 温馨提示 -->
    <p class="game-customization-local-wxts">温馨提示：请保证您的联系方式正确无误，同时保持手机畅通，工作人员会尽快联系您处理订单，谢谢！</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'LocalCustomization',
  props: ['gameList'],
  data () {
    return {
      formValue: {
        game_id: 0, // 游戏id
        customization_needs: [], // 定制化需求
        time_limit: 0, // 期限
        phone: '', // 联系方式
        remark: '' // 备注
        // 还有一个payMoney（待支付金额）
      }
    }
  },
  methods: {
    // 用户定制化
    handleLocalCustomizationClick () {
      if (this.formValue.game_id === 0) {
        this.$toast.top('请选择游戏')
        return false
      }
      console.log(this.formValue.customization_needs)
      if (this.formValue.customization_needs.length === 0) {
        this.$toast.top('请选择定制化需求')
        return false
      }
      if (this.formValue.time_limit === 0) {
        this.$toast.top('请选择期限')
        return false
      }
      var re = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if (!re.test(this.formValue.phone)) {
        this.$toast.top('请输入正确的手机号')
        return false
      }
      // 向后台提交订单
      var params = new URLSearchParams()
      params.append('game_id', this.formValue.game_id)
      params.append('customize_need', this.formValue.customization_needs.join(','))
      params.append('time_limit', this.formValue.time_limit)
      params.append('remark', this.formValue.remark)
      params.append('phone', this.formValue.phone)
      params.append('money', this.payMoney)
      // 在这里验证支付
      var _this = this
      axios.post(_this.GLOBAL.apiPath + '/home/customize/local_insert', params, {
        headers: { 'Authorization': sessionStorage.getItem('gmp-token') }
      }).then(function (response) {
        var res = response.data
        if (res.success) {
          alert('定制化成功，请保持电话畅通')
          location.reload()
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
  computed: {
    // 计算应该支付的金额
    payMoney: function () {
      var price = 0
      switch (this.formValue.time_limit) {
        case '1':
          price = 30 // 7天30元
          break
        case '2':
          price = 100 // 30天100元
          break
        case '3':
          price = 488 // 永久488元
          break
        default:
          price = 0
      }
      return this.formValue.customization_needs.length * price
    }
  }
}
</script>

<style>
/* =====================================公共css属性=====================================*/
.game-customization-components-header {
  margin: 10px;
  border-bottom: 1px solid #237daf;
  overflow: hidden;
  line-height: 30px;
  text-indent: 5px;
  font-size: 14px;
  font-weight: 700;
  color: #237daf;
}
.game-customization-table tr td:nth-child(1) {
  width: 120px;
  font-size: 14px;
  line-height: 30px;
  text-align: right;
  padding: 4px;
  vertical-align: top;
}
.game-customization-table tr td:nth-child(2) {
  display: inline-block;
  width: 380px;
  font-size: 14px;
  line-height: 30px;
  padding: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.game-customization-table select {
  border: 1px solid #ccc;
}
.game-customization-table input[type='text'] {
  border: 1px solid #cccccc;
  font-size: 14px;
  height: 22px;
  padding: 4px 8px;
  color: #666666;
  width: 200px;
  vertical-align: middle;
}
.game-customization-table button {
  border: 1px solid #ccc;
  padding: 4px 20px 4px 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  border-radius: 5px;
}
.game-customization-table textarea {
  resize: none;
  padding: 5px;
  font-size: 12px;
  color: #666;
  border: 1px solid #ccc;
}
.game-customization-table input[type='submit'] {
  border: 1px solid #ccc;
  padding: 4px 20px 4px 20px;
  background-color: #f5f5f5;
  cursor: pointer;
  border-radius: 5px;
}

/* ================================页面私有的样式===================================== */
.game-customization-local-nees-list label {
  margin-right: 15px;
}
.game-customization-local-phone input {
  border: 1px solid #ccc;
  width: 120px;
  height: 24px;
  padding: 2px 0 2px 5px;
  font-size: 12px;
}
/* 温馨提示 */
.game-customization-local-wxts {
  color: red;
  font-size: 12px;
  margin: 20px 0 20px 40px;
}
</style>
