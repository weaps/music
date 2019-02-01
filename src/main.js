import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@/assets/font/iconfont.css'
import '@/assets/css/index.styl'

import Notification from './components/notification'
Vue.use(Notification)
import FastClick from 'fastclick'
FastClick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
