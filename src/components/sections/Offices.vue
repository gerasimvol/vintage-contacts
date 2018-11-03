<template>
  <main class="offices-wrapper">
    <div class="offices">
      <section class="offices__info-wrapper container">
        <div class="offices__info">
          <h2 class="info__title">Our Offices</h2>
          <ul class="offices__list">
            <li
              v-for="(office, index) in offices"
              :key="`office-${index}`"
              :class="getOfficeClasses(index)"
              @click="onOfficeSelect(index)"
            >
              {{ office.name }}
            </li>
          </ul>
          <section class="offices__office">
            <h3 class="office__title text_light">{{ selectedOffice.title }}</h3>
            <address class="office__address text_light">
              {{ selectedOffice.location }}<br>
              {{ selectedOffice.index }}<br>
              {{ selectedOffice.country }}
            </address>
          </section>
        </div>
      </section>
      <section class="offices__map-wrapper">
        <div class="offices__map"></div>
      </section>
    </div>
  </main>
</template>

<script>
import offices from '@/utils/offices.json'

export default {
  name: 'Offices',
  data () {
    return {
      offices,
      activeOfficeIndex: 0
    }
  },
  computed: {
    selectedOffice () {
      return offices[this.activeOfficeIndex].address
    }
  },
  methods: {
    getOfficeClasses (officeIndex) {
      return [
        'offices__list-item', 'text_bold',
        { 'offices__list-item_active': officeIndex === this.activeOfficeIndex }
      ]
    },
    onOfficeSelect (officeIndex) {
      this.activeOfficeIndex = officeIndex
    }
  }
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
      width: 45%;
      position: relative;
      z-index: 2;

      &-wrapper {
        padding-top: 60px ;
        padding-bottom: 100px;

        @include tablet {
          padding-top: 20px ;
          padding-bottom: 80px;
        }
      }
    }

    &__list {
      display: flex;
      margin: 38px 0 42px;

      &-item {
        color: $c-white;
        text-transform: uppercase;
        font-size: 1.2rem;
        cursor: pointer;
        letter-spacing: 2px;
        transition: color 0.3s;
        padding: 10px 15px;

        &:first-child {
          padding-left: 0;
        }

        &:hover {
          color: $c-active;
        }

        &_active {
          color: $c-active;
        }
      }
    }

    &__office {
      color: $c-white;
    }

    &__map {
      &-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100%;
        z-index: 0;
      }

      width: 50%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background: gray;
    }
  }

  .info {
    &__title {
      color: $c-white;
    }
  }

  .office {
    &__title {
      margin-bottom: 38px;
    }

    &__address {
      font-size: 1.2rem;
      line-height: 1.8;
      letter-spacing: 1px;
    }
  }
</style>
