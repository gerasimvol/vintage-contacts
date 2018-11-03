<template>
  <div id="app">
    <v-header />
    <offices />
    <v-footer />
  </div>
</template>

<script>
import VHeader from '@/components/sections/VHeader'
import Offices from '@/components/sections/Offices'
import VFooter from '@/components/sections/VFooter'

export default {
  components: {
    VHeader,
    Offices,
    VFooter
  }
}
</script>

<style scoped lang="scss">
  @import 'colors';
</style>
