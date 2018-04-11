// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import 'vue-event-calendar/dist/style.css'
import vueEventCalendar from 'vue-event-calendar'

Vue.use(vueEventCalendar, {locale: 'zh'})

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
