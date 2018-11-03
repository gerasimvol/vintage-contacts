<template>
  <div id="app">
    <v-header />
    <v-offices />
    <v-footer />
  </div>
</template>

<script>
import VHeader from '@/components/sections/VHeader'
import VOffices from '@/components/sections/VOffices'
import VFooter from '@/components/sections/VFooter'

export default {
  components: {
    VHeader,
    VOffices,
    VFooter
  }
}
</script>

<style scoped lang="scss">
  @import 'colors';
</style>
