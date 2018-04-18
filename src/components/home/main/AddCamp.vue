<template>
  <div>
    <div class="block">
      <el-carousel height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="sel">
      <div class="title">推荐训练营</div>
      <div class="sel-card">
        <div class="camp">
          <div class="camp-img">
            <img src="../../../assets/logo.png">
          </div>
          <div class="camp-info">
            <div>
              <div class="camp-name">考前突击</div>
              <div class="camp-leader">
                <span>
                  营长: 颜隽彦
                </span>
              </div>
              <div class="camp-used">23412 次学习</div>
              <div class="camp-intro">
                <div class="camp-lession-num">
                  3 节课程
                </div>
              </div>
              <el-button class="camp-add-btn" size="mini" round>加入营地</el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="sel-card">
        <div class="camp">
          <div class="camp-img">
            <img src="../../../assets/logo.png">
          </div>
          <div class="camp-info">
            <div>
              <div class="camp-name">考前突击</div>
              <div class="camp-leader">
                <span>
                  营长: 颜隽彦
                </span>
              </div>
              <div class="camp-used">23412 次学习</div>
              <div class="camp-intro">
                <div class="camp-lession-num">
                  3 节课程
                </div>
              </div>
              <el-button class="camp-add-btn" size="mini" round>加入营地</el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="sel-card">
        <div class="camp">
          <div class="camp-img">
            <img src="../../../assets/logo.png">
          </div>
          <div class="camp-info">
            <div>
              <div class="camp-name">考前突击</div>
              <div class="camp-leader">
                <span>
                  营长: 颜隽彦
                </span>
              </div>
              <div class="camp-used">23412 次学习</div>
              <div class="camp-intro">
                <div class="camp-lession-num">
                  3 节课程
                </div>
              </div>
              <el-button class="camp-add-btn" size="mini" round>加入营地</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'AddCamp',
    props: {},
    data: function () {
      return {}
    },
    watch: {},
    methods: {},
    created: function () {
    },
    destroyed: function () {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.sel
  border-top 10px solid #c9d9e9
  padding 10px
  .title
    font-size 12px
  .sel-card
    padding 10px 0px
    border-bottom 1px solid #eee
    .camp
      display flex
      .camp-img
        width 90px
        height 128px
        img
          width 100%
          display block
      .camp-info
        position relative
        margin-left 15px
        flex 1
        font-size 10px
        color #333333
        .camp-name
          font-weight bold
          font-size 16px
          padding 3px 0px 8px 0px
        .camp-leader
          padding-top 5px
        .camp-used
          padding-top 4px
          color #555
        .camp-intro
          padding 25px 0px 0px 0px
        .camp-add-btn
          position absolute
          bottom 0px
          right 10px
</style>
