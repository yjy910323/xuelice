<template>
  <div>
    <div>
      <router-view />
    </div>
    <div class="footer">
      <div class="tabs">
        <div class="tab" v-for="(tab, index) in tabs" :key="index">
          <router-link :to="tab.path">
            <i :class="tab.icon"></i>
            <div>{{tab.name}}</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Layout',
  props: {},
  data: function () {
    return {
      tabs: [{
        name: '评 测',
        path: '/home/main',
        icon: 'el-icon-news'
      },
      {
        name: '训 练',
        path: '/home/practice',
        icon: 'el-icon-edit-outline'
      },
      {
        name: '我 的',
        path: '/home/me',
        icon: 'el-icon-tickets'
      }]
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

<style lang="stylus" rel="stylesheet/stylus" scoped>
.footer
  position fixed
  bottom 0px
  width 100vw
  height 60px
  border-top 1px solid #d2d2d2
  .tabs
    display flex
    justify-content center
    align-content center
    align-items center
    width 100%
    height 100%
    .tab
      flex:1
      text-align center
      i
        font-size 25px
      div
        font-size 10px
      .router-link-active
        color cornflowerblue

</style>
