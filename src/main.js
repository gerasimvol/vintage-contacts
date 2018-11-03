import Vue from 'vue'
import App from './App.vue'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

import './assets/styles/main.scss'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAVylLqwU7Q4ltUU2fMINJ7nW0I1cKiu2I',
    libraries: 'places'
  }
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
