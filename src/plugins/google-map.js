import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

const API_KEY = 'AIzaSyBIuw3A7CHMlE57y-kcqFV7jQoqOsGsoe8'

Vue.use(VueGoogleMaps, {
  load: {
    key: API_KEY,
    language: 'en'
  }
})
