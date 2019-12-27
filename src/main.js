/*
 * @Descripttion: 11
 * @version: 11
 * @Author: yang_ft
 * @Date: 2019-12-23 14:20:00
 * @github: famensaodiseng
 * @LastEditTime : 2019-12-23 19:30:31
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
