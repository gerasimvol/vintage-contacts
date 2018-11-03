<template>
  <gmap-map
    :center="coordinates"
    :zoom="9"
    :options="options"
    class="map"
  >
    <gmap-marker
      :icon="icon"
      :position="coordinates"
      :animation="2"
    />
  </gmap-map>
</template>

<script>
import mapStyle from '@/utils/googleMapStyle.json'

export default {
  name: 'VMap',
  props: {
    coordinates: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      icon: {
        url: require('@/assets/img/marker.png')
      },
      options: {
        styles: mapStyle,
        disableDefaultUI: true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .map {
    width: 100%;
    height: 100%;
  }
</style>

