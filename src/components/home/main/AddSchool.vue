<template>
  <div class="pager">
    <router-link to="/home/main">
      <i style="float:right;color:white;" @click="reged = false" class="el-icon-close"></i>
    </router-link>
    <h4>赶快加入自己的学校班级</h4>

    <div>
      <div class="menu-type">
        <div @click="codeType=true;searchType=false;" :class="{choosen : codeType}" class="menu-type">验证加入</div>
        <div @click="codeType=false;searchType=true;" :class="{choosen : searchType}" class="menu-type">搜索加入</div>
      </div>
      <div class="tab" v-show="searchType">
      </div>
      <div class="tab" v-show="codeType">
        <form>
          <div class="form-group">
            <div class="form-group-title">班级号</div>
            <div class="form-group-val">
              <el-input class="class-input" maxlength="14 "/>
              <div class="fk-wrapper">
                <div v-for="item in 14" class="fk"></div>
              </div>
            </div>
          </div>
          <div style="text-align: center;">
            <el-button size="mini" round>快速加入</el-button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    name: 'AddSchool',
    props: {},
    data: function () {
      return {
        codeType: true,
        searchType: false,
        classId: null
      }
    },
    watch: {},
    methods: {},
    created: function () {
    },
    destroyed: function () {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .pager
    height 100%
    background-color cornflowerblue
    padding 30px
    color white
    .menu-type
      display flex
      flex 1
      justify-content center
      .menu-type
        padding 5px 5px
        font-size 15px
        color #ddd
      &.choosen
        border-bottom 1px solid
        color white
    .tab
      margin-top 20px
      form
        .form-group
          padding-bottom 20px
          .form-group-title
            padding-bottom 10px
            font-size 18px
            font-weight bold
          .form-group-val
            position relative
            .el-input
              z-index 9999
            .class-input
              >input
                border none
                background-color transparent
                height 30px
                font-size: 16px
                color white
                letter-spacing: 11px
                padding-left 5px
                z-index 9999
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
            .fk-wrapper
              width 100%
              display flex
              flex 1
              justify-content left
              position absolute
              top 3px
              left 0px
              .fk
                border 1px solid
                margin 2px 4px 2px 0px
                padding 2px
                width 10px
                height 14px

</style>
