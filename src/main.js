// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ele from 'element-ui'
import store from './store/index'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/icon.css'

Vue.config.productionTip = false
Vue.use(ele)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  // template: '<App/>'
  render: h => h(App)
})
