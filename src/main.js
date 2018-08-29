// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import store from '@/store/index'

import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import '~/font/iconfont.css'
import './styles/style.scss'


Vue.config.productionTip = false
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
