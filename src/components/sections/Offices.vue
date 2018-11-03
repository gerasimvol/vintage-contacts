<template>
  <main class="offices-wrapper">
    <div class="offices">
      <section class="offices__info container">
        <h2 class="info__title">Our Offices</h2>
      </section>
      <section class="offices__map-wrapper">
        <div class="offices__map"></div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Offices'
}
</script>

<style scoped lang="scss">
  @import 'colors';
  @import 'media';

  .offices {
    position: relative;
    min-height: 500px;

    &-wrapper {
      background: url("~@/assets/img/officesBg.png");
      overflow: hidden;
    }

    &__info {
      padding: 60px 60px 100px;

      @include tablet {
        padding: 20px 20px 80px;
      }
    }

    &__map {
      &-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 500px;
      }

      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: tomato;
    }
  }

  .info {
    &__title {
      color: $c-white;
    }
  }
</style>
