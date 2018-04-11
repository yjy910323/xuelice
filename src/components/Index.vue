<template>
  <div>
    <el-container>
      <el-main>
        <transition name="el-zoom-in-center" mode="out-in">
          <div v-show="!loadinged" class="loading-index">
            <img src="../assets/img/index-logo.jpg"/>
            <div class="idea">认知科学、人工智能、区块链</div>
          </div>
        </transition>

        <transition name="el-zoom-in-center" mode="out-in">
          <div v-show="loadinged" class="introduce">
            <div class="login-box">
              <el-button @click="logined = true;" round size="mini">登录</el-button>
            </div>

            <el-carousel :interval="3000" arrow="never" height="75vh">
              <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>

            <div class="reg-box">
              <el-button @click="reged = true;" type="primary" round size="medium">现在就加入学力测</el-button>
            </div>

          </div>
        </transition>
      </el-main>
    </el-container>
    <transition name="el-zoom-in-bottom" mode="out-in">
      <div v-show="reged" class="reg">
        <div class="reg-wrapper">
          <i @click="reged = false" class="el-icon-close"></i>
          <form>
            <div class="form-title">注册帐号</div>
            <div class="form-group">
              <div class="form-group-title">手机号</div>
              <div class="form-group-val">
                + 86
                <input class="phone"/>
              </div>
            </div>

            <div class="form-group">
              <div class="form-group-title">验证码</div>
              <div class="form-group-val">
                <input placeholder="6位"/>
                <div style="display: inline-block;float: right;">
                  <el-button round size="mini">发送验证码</el-button>
                </div>
              </div>
            </div>

            <div class="form-group">
              <div class="form-group-title">孩子姓名</div>
              <div class="form-group-val">
                <input placeholder=""/>
              </div>
            </div>

            <div class="form-group">
              <div class="form-group-title">班级号</div>
              <div class="form-group-val">
                <input placeholder="14位"/>
              </div>
            </div>

            <div style="text-align: center">
              <el-button @click="reged = true;" round size="medium">完成注册</el-button>
            </div>

          </form>

        </div>
      </div>
    </transition>

    <transition name="el-zoom-in-bottom" mode="out-in">
      <div v-show="logined" class="login">
        <div class="reg-wrapper">
          <i @click="logined = false" class="el-icon-close"></i>
          <form>
            <div class="form-title">登录</div>
            <div class="form-group">
              <div class="form-group-title">手机号</div>
              <div class="form-group-val">
                + 86
                <input class="phone"/>
              </div>
            </div>

            <div class="form-group">
              <div class="form-group-title">密码</div>
              <div class="form-group-val">
                <input placeholder="至少6位"/>
              </div>
            </div>

            <div style="text-align: center">
              <el-button @click="logined = false;" round size="medium">登录</el-button>
            </div>

          </form>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Index',
  props: {},
  data: function () {
    return {
      loadinged: false,
      reged: false,
      logined: false,
      active: 0,
      regInfo: {
        phone: ''
      },
      locations: [{
        value: '上海',
        label: '上海',
        children: [{
          value: '城区',
          label: '城区',
          children: [{
            value: '静安区',
            label: '静安区'
          },
          {
            value: '黄浦区',
            label: '黄浦区'
          }]
        }]
      }],
      schools: [{
        value: '上海市育才初级中学',
        label: '上海市育才初级中学'
      },
      {
        value: '上海市市西初级中学',
        label: '上海市市西初级中学'
      },
      {
        value: '上海市静教附校',
        label: '上海市静教附校'
      }]
    }
  },
  watch: {},
  methods: {},
  created: function () {
    setTimeout(() => {
      this.loadinged = true
    }, 1000)
  },
  destroyed: function () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" >
.loading-index
  width 100%
  height 100%
  img
    padding-top 20%
    width 100%
    height 100%
  .idea
    padding-top 40%
  text-align center

.introduce
  .login-box
    text-align right
  .reg-box
    text-align center

.reg, .login
  position: absolute
  top 0px
  background-color cornflowerblue
  width 100%
  height 100%
  z-index 99
  color white
  .reg-wrapper
    padding 30px
  form
    .form-title
      font-size 20px
      text-align center
      padding-bottom 30px
    .form-group
      padding-bottom 20px
      .form-group-title
        padding-bottom 15px
        font-size 18px
        font-weight bold
      .form-group-val
        border-bottom 1px solid #d2d2d2
        input
          border none
          background-color transparent
          height 30px
          font-size: 16px
          color white
          &.phone
            padding-left 2px
        .el-cascader
          width 100%
          input
            padding-left 0px
          .el-cascader__label
            color white
            font-size: 16px
            padding-left 0px
            span
              color white
</style>
