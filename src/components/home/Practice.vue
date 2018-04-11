<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane v-for="(classification, index) in practiceLibrary" :label="classification.name" :key="classification.name" :name="classification.name">
        <el-card v-for="(partition, index) in classification.subClassifications" :key="partition.name" class="box-card">
          <div slot="header" class="clearfix">
            <span>{{partition.name}}</span>
          </div>
          <div class="text item">
            <el-carousel :interval="4000" type="card" height="150px">
              <el-carousel-item v-for="(practice, index) in partition.practices" :key="practice.id">
                <h3>{{ practice.name }}</h3>
              </el-carousel-item>
            </el-carousel>
          </div>
        </el-card>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'Practice',
  props: {},
  data: function () {
    return {
      activeName: '学科',
      practiceLibrary: [{
        name: '学科',
        subClassifications: [{
          name: '语文',
          practices: [{
            name: '语文古诗文',
            id: 1234,
            imgPath: ''
          },
          {
            name: '语文古诗文',
            id: 1235,
            imgPath: ''
          }]
        },
        {
          name: '数学',
          practices: [{
            name: '语文古诗文',
            id: 1236,
            imgPath: ''
          }]
        }]
      },
      {
        name: '逻辑',
        subClassifications: [{
          name: '反应力',
          practices: [{
            name: '语文古诗文',
            id: 1237,
            imgPath: ''
          },
          {
            name: '语文古诗文',
            id: 1238,
            imgPath: ''
          }]
        },
        {
          name: '计算力',
          practices: [{
            name: '语文古诗文',
            id: 1239,
            imgPath: ''
          }]
        },
        {
          name: '想象力',
          practices: [{
            name: '语文古诗文',
            id: 12311,
            imgPath: ''
          }]
        }]
      },
      {
        name: '心理',
        subClassifications: [{
          name: '反应力',
          practices: [{
            name: '语文古诗文',
            id: 12312,
            imgPath: ''
          },
          {
            name: '语文古诗文',
            id: 12313,
            imgPath: ''
          }]
        },
        {
          name: '计算力',
          practices: [{
            name: '语文古诗文',
            id: 12314,
            imgPath: ''
          }]
        },
        {
          name: '想象力',
          practices: [{
            name: '语文古诗文',
            id: 12315,
            imgPath: ''
          }]
        }]
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

<style lang="stylus" rel="stylesheet/stylus">
.el-tabs__nav-wrap
  padding 0px 20px
.el-card__header
  padding 12px 20px
.el-card.box-card
  margin-bottom 15px
</style>
