<template>
  <div class="game-comment">
    <div class="game-comment-func-btns">
      <ul>
        <!-- 常用表情 -->
        <li>
          <button @click="btnsO1DivShow = !btnsO1DivShow;btnsO2DivShow = false">
            <img src="static/images/detail/01.gif">常用表情
          </button>
          <div v-show="btnsO1DivShow" class="game-comment-func-btns-01div">
            <ul>
              <li v-for="item of faceGifList" :key="item.id" @click="handleBtns01Click(item)">
                <img :src="item.path" alt>
              </li>
            </ul>
          </div>
        </li>
        <!-- 点击快捷发言 -->
        <li>
          <button @click="btnsO2DivShow = !btnsO2DivShow; btnsO1DivShow = false">
            <img src="static/images/detail/comment.png">点我快捷发言
          </button>
          <div v-show="btnsO2DivShow" class="game-comment-func-btns-02div">
            <ul>
              <li
                v-for="list of commentFillList"
                :key="list.id"
                @click="handleBtns02Click(list)"
              >{{list.text}}</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!-- 评论框 和 评论提示-->
    <div class="game-comment-input-hint">
      <div class="game-comment-input">
        <textarea v-model="userCommentContent" name="game-comment-content" cols="30" rows="10"></textarea>
      </div>
      <div class="game-comment-hint">
        <p>发表评论需知：</p>
        <p>1、请勿在评论中发表违法违规信息</p>
        <p>2、谢绝人身攻击、地域歧视、刷屏、广告等恶性言论</p>
        <p>3、所有评论均代表玩家本人意见，不代表4399立场</p>
        <p>4、用户发表的评论，经管理员审核后方可显示</p>
        <p>5、如果游戏出现问题，请在此以评论方式留言给我们</p>
      </div>
    </div>
    <!-- 评分和提交评论按钮 -->
    <div class="game-comment-grade-submit">
      <!-- 评分 -->
      <div class="game-comment-grade">
        <ul @mouseleave="handleUserMouseLeave">
          <li
            v-for="(st,index) of commentStarList"
            :key="index"
            :style="st === 0 ? commentNoStyle : commentYesStyle"
            @click="handleUserGradeClick(index)"
            @mouseenter="handleUserMouseEnter(index)"
          ></li>
          <li>我要评分（{{userCommentText}}）</li>
        </ul>
      </div>
      <!-- 提交 -->
      <div class="game-comment-submit">
        <button @click="handleUserSubmitComment">发表评论</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameComment',
  data () {
    return {
      btnsO1DivShow: false, // 常用表情下的div是否显示
      btnsO2DivShow: false, // 快捷发言下的div是否显示
      commentFillList: [
        { id: '001', text: '大神好,我就是人见人爱,花见花开的小萌新~' },
        { id: '002', text: '游戏好好玩啊,重要的事情说三遍,三遍,三遍' },
        { id: '003', text: '好难啊,仿佛身体被掏空。有没有大神带我飞' },
        { id: '004', text: '4399小游戏陪伴我们美好童年时光,谢谢你！' },
        { id: '005', text: '打开电脑想到的就是4399，海量游戏任我选择' },
        { id: '006', text: '这款游戏陪伴我好久,非常喜欢。' },
        { id: '007', text: '这个游戏玩不了,需要小编们尽快处理。谢谢~' },
        { id: '008', text: '抢到沙发的感觉就是不一样,每次都坐上沙发' }
      ],
      faceGifList: [
        { id: '01', path: 'static/images/detail/01.gif', code: '[face:01]' },
        { id: '02', path: 'static/images/detail/02.gif', code: '[face:02]' },
        { id: '03', path: 'static/images/detail/03.gif', code: '[face:03]' },
        { id: '04', path: 'static/images/detail/04.gif', code: '[face:04]' }
      ],
      userCommentContent: '', // 用户评论的内容
      userCommentStarLevel: -1, // 用户打分的等级（-1为未打分）
      userCommentText: '滑动星星评分',
      commentTextList: ['不好玩', '较一般', '有意思', '很推荐', '超好玩'],
      commentStarList: [0, 0, 0, 0, 0],
      commentNoStyle: {
        background: "url('static/images/detail/comment-star-no.png') no-repeat"
      },
      commentYesStyle: {
        background: "url('static/images/detail/comment-star-yes.png') no-repeat"
      }
    }
  },
  methods: {
    // 用户点击常用表情
    handleBtns01Click (obj) {
      this.userCommentContent += obj.code
      this.btnsO1DivShow = false
    },
    // 用户点击快捷发言
    handleBtns02Click (obj) {
      this.userCommentContent += obj.text
      this.btnsO2DivShow = false
    },
    // 用户点击评论下的星星，进行打分
    handleUserGradeClick (level) {
      this.userCommentStarLevel = level
      this.userCommentText = this.commentTextList[level]
    },
    // 用户鼠标滑过评论下的星星
    handleUserMouseEnter (index) {
      this.userCommentText = this.commentTextList[index]
      this.assistFunc(index)
    },
    // 用户鼠标离开评论下的星星
    handleUserMouseLeave () {
      if (this.userCommentStarLevel === -1) {
        this.userCommentText = '滑动星星评分'
      } else {
        this.userCommentText = this.commentTextList[this.userCommentStarLevel]
      }
      this.assistFunc(this.userCommentStarLevel)
    },
    // 用户点击“发表评论”按钮
    handleUserSubmitComment () {
      // TODO: 用户发表评论（这里需要请求后端接口，将数据存入数据库中）
      alert('评论成功')
    },
    // 辅助函数——复用
    assistFunc (index) {
      switch (index) {
        case -1:
          this.commentStarList = [0, 0, 0, 0, 0]
          break
        case 0:
          this.commentStarList = [1, 0, 0, 0, 0]
          break
        case 1:
          this.commentStarList = [1, 1, 0, 0, 0]
          break
        case 2:
          this.commentStarList = [1, 1, 1, 0, 0]
          break
        case 3:
          this.commentStarList = [1, 1, 1, 1, 0]
          break
        case 4:
          this.commentStarList = [1, 1, 1, 1, 1]
          break
      }
    }
  }
}
</script>

<style>
.game-comment {
  position: relative;
  width: 750px;
  margin-top: 20px;
  box-sizing: border-box;
  padding-left: 20px;
  border: 1px solid #ccc;
  background-color: #fafafa;
}
/* 功能按钮组 */
.game-comment-func-btns {
  margin-top: 15px;
}
.game-comment-func-btns > ul {
  display: flex;
}
.game-comment-func-btns > ul > li > button {
  display: inline-block;
  padding: 2px 6px 2px 6px;
  color: #999;
  border: 1px solid #ccc;
  background-color: #ececec;
  border-radius: 4px;
  margin-right: 20px;
  cursor: pointer;
}
.game-comment-func-btns li button img {
  margin-right: 4px;
}
/* 常用表情下的隐藏div */
.game-comment-func-btns-01div {
  position: absolute;
  width: 220px;
  border: 2px solid #ccc;
  background-color: #fff;
  top: 23%;
}
.game-comment-func-btns-01div ul {
  display: flex;
  margin: 10px;
  justify-content: space-around;
}
.game-comment-func-btns-01div > ul > li {
  display: inline-block;
  padding: 4px 8px 4px 8px;
  line-height: 20px;
  text-align: center;
  border: 1px solid greenyellow;
  cursor: pointer;
}
/* 快捷发言下的隐藏div */
.game-comment-func-btns-02div {
  position: absolute;
  width: 260px;
  text-align: center;
  font-size: 12px;
  border: 1px solid #ff8937;
  background-color: #fff8d9;
  top: 23%;
  border-radius: 5px;
}
.game-comment-func-btns-02div li {
  height: 24px;
  line-height: 24px;
  cursor: pointer;
}
.game-comment-func-btns-02div li:hover {
  background-color: orange;
  color: #fff;
}
/* 评论框 和 评论提示 */
.game-comment-input-hint {
  margin-top: 10px;
  display: flex;
}
.game-comment-input textarea {
  width: 390px;
  height: 125px;
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid #aeaeae;
  color: #979797;
  font-size: 12px;
  resize: none;
}
.game-comment-hint {
  width: 300px;
  font-size: 12px;
  color: #333;
  line-height: 18px;
  border: 1px solid #ccc;
  padding: 5px;
  margin-left: 14px;
}
/* 评分和提交评论按钮 */
.game-comment-grade-submit {
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
}
.game-comment-grade ul {
  display: flex;
}
.game-comment-grade ul li {
  width: 24px;
  height: 24px;
}
.game-comment-grade ul li:nth-child(6) {
  font-size: 12px;
  color: #ff8937;
  width: 150px;
  line-height: 24px;
  margin-left: 10px;
}
.game-comment-submit button {
  width: 110px;
  height: 28px;
  color: #fff;
  background-color: #ff9c46;
  border-radius: 8px;
  cursor: pointer;
}
</style>
