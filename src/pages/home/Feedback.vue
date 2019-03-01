<template>
  <div class="index-feedback">
    <div class="index-feedback-main-warp">
      <div class="index-feedback-main-top">
        <div class="index-feedback-info">
          <p style="line-height:35px">
            亲爱的用户，您可以在这里将“游戏时遇到的问题和困难”以及对本游戏平台的“意见或者建议”发
            送给我们（详细的说明更有助于我们了解您的想法）。我们每天都会查看您的意见，并且很快解决哦！
          </p>
        </div>
      </div>
    </div>
    <div class="index-feedback-Content-Main">
      <div class="index-feedback-Content-Main1">
        <h1>用户反馈</h1>
      </div>
      <form action method="post" class="index-feedback-form-report">
        <label>
          <span>联系方式:</span>
          <select name="select2" class="index-feedback-select2" v-model="fbContactWay">
            <option value="Email">Email</option>
            <option value="Phone" selected>Phone</option>
            <option value="QQ">QQ</option>
          </select>
          <input type="text" placeholder v-model="fbContactContent">
        </label>
        <label>
          <span>反馈内容:</span>
          <textarea
            id="index-feedback-mesaage"
            name="message"
            placeholder="请填写您的意见建议 ... "
            v-model="fbContent"
            required
          ></textarea>
        </label>
        <label>
          <span>反馈类别:</span>
          <select name="select1" class="index-feedback-select1" v-model="fbType">
            <option value="suggest" selected>对本网站提出的建议</option>
            <option value="question">遇到困难的问题需要解决</option>
          </select>
        </label>
        <label>
          <input type="button" class="index-feedback-button" value="提交" @click="handleBtnClick">
          <router-link to="/" class="index-feedback-back">返回首页</router-link>
        </label>
      </form>
    </div>
    <div class="index-feedback-footer"></div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  data () {
    return {
      fbContactWay: 'Phone', // 联系方式
      fbContactContent: '', // 联系方式的内容
      fbContent: '', // 反馈内容
      fbType: 'suggest' // 反馈类型
    }
  },
  methods: {
    handleBtnClick () {
      // 参数验证
      if (this.fbContent.length === 0) {
        alert('反馈内容不能为空')
        return
      }
      // 将用户输入的数据发送到后台
      alert('反馈成功，感谢您的建议')
      // 重置反馈数据
      this.fbContactWay = 'Phone'
      this.fbContactContent = ''
      this.fbContent = ''
      this.suggest = 'suggest'
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
.index-feedback {
  background: url("http://i.7k7kimg.cn/themes/zt/feedback/ff_01.jpg") repeat-x
    #7cb08c;
}
.index-feedback-main-warp {
  margin: 0 auto;
  width: 960px;
  position: relative;
}
.index-feedback-main-top {
  background: url("http://i.7k7kimg.cn/themes/zt/feedback/ff_07.png") repeat-x;
  height: 110px;
  padding: 37px 20px 17px;
}
.index-feedback-main-top .index-feedback-info {
  width: 840px;
  height: 72px;
  line-height: 72px;
  padding: 14px 40px;
  background: #f7fedb;
}
.index-feedback-main-top .index-feedback-info p {
  color: #7ca185;
  text-indent: 2em;
}

.index-feedback-Content-Main {
  max-width: 500px;
  margin: auto;
  margin-top: 50px;
  padding: 20px 30px 20px 30px;
  font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-shadow: 1px 1px 1px #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #888;
  background: #fff;
}
.index-feedback-Content-Main h1 {
  display: block;
  padding: 0px 0px 10px 40px;
  margin: -10px -30px 30px -30px;
  font: 25px "Helvetica Neue", Helvetica, Arial, sans-serif;
  border-bottom: 1px solid #dadada;
  color: #888;
}
.index-feedback-Content-Main h1 > span {
  display: block;
  font-size: 11px;
}
.index-feedback-Content-Main label {
  display: block;
  margin: 0px 0px 5px;
}
.index-feedback-Content-Main label > span {
  float: left;
  width: 20%;
  padding-right: 10px;
  margin-top: 10px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: bold;
  text-align: right;
  color: #333;
}
.index-feedback-Content-Main input[type="text"],
.index-feedback-Content-Main textarea {
  width: 70%;
  height: 20px;
  padding: 5px 0px 5px 5px;
  margin-bottom: 16px;
  margin-right: 6px;
  margin-top: 2px;
  line-height: 15px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #888;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.index-feedback-select1 {
  width: 71%;
  height: 35px;
  margin-bottom: 16px;
  margin-right: 6px;
  margin-top: 2px;
  line-height: 15px;
  padding: 5px 0px 5px 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #888;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.index-feedback-select2 {
  width: 13%;
  border-radius: 4px;
  border: 1px solid #ccc;
  color: #888;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
}
.index-feedback-Content-Main textarea {
  width: 70%;
  height: 100px;
  padding: 5px 0px 0px 5px;
}
.index-feedback-button {
  padding: 10px 25px 10px 25px;
  margin-left: 111px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #fff;
  color: #333;
}
.index-feedback-button:hover {
  color: #333;
  background-color: #ebebeb;
  border-color: #adadad;
}
.index-feedback-footer {
  min-height: 200px;
}
.index-feedback-back{
  margin-left: 10px;
}
.index-feedback-back:hover{
  text-decoration:underline;
  color:red;
}
</style>
