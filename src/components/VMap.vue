<template>
  <gmap-map
    :center="coordinates"
    :zoom="9"
    :options="options"
    style="width: 100%; height: 100%"
  >
    <gmap-marker
      :icon="icon"
      :position="coordinates"
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
        styles: mapStyle
      }
    }
  }
}
</script>
