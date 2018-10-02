import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

import { store } from "./store/store"

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
