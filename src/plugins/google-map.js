import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

const API_KEY = 'AIzaSyAVylLqwU7Q4ltUU2fMINJ7nW0I1cKiu2I'

Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY,
    language: 'en'
  }
})
