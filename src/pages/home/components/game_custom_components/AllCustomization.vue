<template>
  <!-- 全部定制化 -->
  <div class="game-customization-all-page">
    <div class="game-customization-components-header">全部定制化</div>
    <!-- 表格 -->
    <form action method="POST" onsubmit="return false;">
      <table class="game-customization-table">
        <tr>
          <td>游戏名称：</td>
          <td>
            <input type="text" maxlength="20" required placeholder v-model="formValue.game_name">
          </td>
        </tr>
        <tr>
          <td>游戏分类：</td>
          <td>
            <select name="game_type" id="game_type" v-model="formValue.game_type">
              <option value="0">请选择游戏类别</option>
              <option value="1">女生游戏</option>
              <option value="2">动作</option>
              <option value="3">射击</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>游戏简介：</td>
          <td>
            <textarea
              name="game_desc"
              id="game_desc"
              cols="50"
              rows="4"
              v-model="formValue.game_desc"
              placeholder="请给您的游戏做一个简单的自我介绍..."
              required
              maxlength="1000"
            ></textarea>
          </td>
        </tr>
        <tr>
          <td>游戏玩法：</td>
          <td>
            <textarea
              name="game_play"
              id="game_play"
              cols="50"
              rows="4"
              v-model="formValue.game_play"
              placeholder="请告诉我们您的游戏是怎么玩的"
              maxlength="300"
              required
            ></textarea>
          </td>
        </tr>
        <tr>
          <td>闪光点：</td>
          <td>
            <textarea
              name="why_good"
              id="why_good"
              cols="50"
              rows="4"
              v-model="formValue.why_good"
              placeholder="相比与同类型的游戏，您的宝作有什么优势呢？"
              maxlength="500"
              required
            ></textarea>
          </td>
        </tr>
        <tr>
          <td>游戏Logo：</td>
          <td>
            <input type="file">
          </td>
        </tr>
        <tr>
          <td>手机：</td>
          <td>
            <input type="text" maxlength="11" required v-model="formValue.phone">
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td>
            <input type="submit" @click="handleAllCustomFormClick" value="发起申请">
          </td>
        </tr>
      </table>
    </form>
    <div class="game-customization-all-message">
        <p>1、信息一旦提交，则消耗一次申请资格，修改和补充信息只能重新申请（不返还申请资格）。</p>
        <p>2、请认真填写材料，保证材料的条理性和完整性，同时保持电话畅通，工作人员可能随时找你沟通游戏设计的具体事宜。</p>
        <p>3、承诺：该游戏百分之百属于创新项目，导致的任何产权纠纷，均由申请者承担全部责任。</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AllCustomization',
  data () {
    return {
      formValue: {
        game_name: '', // 游戏名称
        game_type: '0', // 游戏类别
        game_desc: '', // 游戏简介
        game_play: '', // 游戏玩法
        why_good: '' // 闪光点
      }
    }
  },
  methods: {
    handleAllCustomFormClick () {
      if (this.formValue.game_type === '0') {
        this.$toast.top('请选择游戏类别')
        return false
      }
      // 验证电话号码的正则表达式
      var re = /^[1][3,4,5,7,8,9][0-9]{9}$/
      if (!re.test(this.formValue.phone)) {
        this.$toast.top('请输入正确的手机号')
        return false
      }
      // TODO:跟后台交互
      alert('程序员正在加班开发中...')
      // 重置表单
      this.formValue = {
        game_name: '',
        game_type: '0',
        game_desc: '',
        game_play: '',
        why_good: ''
      }
    }
  }
}
</script>

<style>
/* 提示信息 */
.game-customization-all-message {
  border: 1px solid #ffccaa;
  background-color: #fcfadf;
  color: #237daf;
  padding: 10px;
  margin: 20px;
  line-height: 22px;
  font-size: 12px;
}
</style>
