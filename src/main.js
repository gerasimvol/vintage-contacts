import Vue from 'vue'
import App from './App'

import './plugins/global-components'
import './plugins/google-map'

import './assets/styles/main.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
