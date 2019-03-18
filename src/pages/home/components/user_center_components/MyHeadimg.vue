<template>
  <div class="user-center-my-headimg">
    <div class="user-center-components-header">更换我的头像</div>
    <div class="user-center-my-headimg-body">
      <p>因为缓存原因，头像上传成功后可能无法立即同步，上传成功后若长时间未生效，请按"F5"刷新页面查看</p>
      <input
        type="file"
        name="user-center-mhb-avatar"
        id="user-center-mhb-uppic"
        accept="image/gif, image/jpeg, image/jpg, image/png"
        @change="handleChangeImage($event)"
        ref="user-center-mhb-avatarInput"
        class="user-center-mhb-uppic"
      >
      <img :src="avatar" class="img-avatar">
      <div class="user-center-my-info-btn">
        <button @click="handleSaveMyHeadimgClick">保存</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserCenterMyHeadimg',
  data () {
    return {
      avatar: 'static/images/user_center/default-head-img.png'
    }
  },
  methods: {
    handleChangeImage (e) {
      var file = e.target.files[0]
      var reader = new FileReader()
      var that = this
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        that.avatar = this.result
      }
    },
    handleSaveMyHeadimgClick () {
      alert('程序猿正在加班开发中……')
      return false
    }
  }
}
</script>

<style>
.user-center-my-headimg {
  width: 700px;
  min-height: 600px;
}
.user-center-mhb-uppic {
  margin-left: 20px;
}
.user-center-my-headimg-body img {
  width: 300px;
  height: 300px;
  border: 1px solid #ccc;
  display: block;
  margin-top: 20px;
  margin-left: 20px;
}
.user-center-my-headimg-body p {
  font-size: 12px;
  color: red;
  margin: 20px;
}
</style>
