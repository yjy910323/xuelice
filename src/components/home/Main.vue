<template>
  <div>
    <div class="user-info">
      <div class="avatar-wrapper">
        <img class="avatar" src="../../assets/img/index-logo.jpg">
      </div>
      <div class="x-wrapper">
        <div class="name-wrapper">
          123
        </div>
        <div class="exp-wrapper">
          1234
        </div>
      </div>
    </div>
    <div class="user-calendar">
      <vue-event-calendar title="我的日程" :events="demoEvents" @day-changed="dayChange">
        <template slot-scope="props">
          <div v-for="(event, index) in props.showEvents" class="event-item">
            {{event}}
          </div>
        </template>
      </vue-event-calendar>
    </div>
    <div class="add-school selection">
      <div class="title">
        加入自己学校班级
      </div>
      <div class="info">
        课程、作业、全面测评
      </div>
      <div class="nav">
        <router-link to="/addSchool">
          <el-button type="primary" size="mini" round>去添加</el-button>
        </router-link>
      </div>
    </div>

    <div class="add-camp selection">
      <div class="title">
        发现更多训练营
      </div>
      <div class="info">
        练习、定制、个性学习
      </div>
      <div class="nav">
        <el-button type="primary" size="mini" round>去搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Main',
  props: {},
  data: function () {
    return {
      demoEvents: [{
        date: '2018/04/15',
        title: 'eat',
        desc: 'longlonglong description'
      },
      {
        date: '2018/04/11',
        title: 'this is a title'
      }]
    }
  },
  watch: {},
  methods: {
    dayChange (day) {
      console.log(day)
    }
  },
  created: function () {
  },
  destroyed: function () {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .selection
    margin-top 10px

  .user-info
    padding 10px 20px
    display flex
    background-color cornflowerblue
    .avatar-wrapper
      width 50px
      .avatar
        width 50px
        height 50px
        display block
        border-radius 50px
    .x-wrapper
      padding-left 20px
      display flex
      flex-direction column
      justify-content center
  .add-school
    padding 30px 20px
    background-color antiquewhite
    .title
      font-size 25px
    .info
      font-size 15px
    .nav
      margin-top 15px
  .add-camp
    padding 30px 20px
    background-color honeydew
    .title
      font-size 25px
    .info
      font-size 15px
    .nav
      margin-top 15px
</style>
