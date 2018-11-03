<template>
  <header class="header container">
    <h1>Contacts</h1>
    <div class="header-content">
      <section>
        <h2 class="header-content__contacts-title">
          <span class="header-content__contacts-title-prefix">GMS</span> Headquarters
        </h2>
        <div class="header-content__contacts">
          <div class="contacts__address-and-tel">
            <address class="contacts__address">
              Global Message Services Ukraine LLC
              Bundesstrasse 5 | 3rd Floor
              6300 Zug
              Switzerland
            </address>
            <a
              href="tel:+41415446200"
              class="contacts__tel"
            >
              +41 41 544 62 00
            </a>
          </div>
          <!-- <div>
            email
            tel
            form
          </div> -->
        </div>
      </section>
      <section class="header-content__support">
        <h2>Technical support 24/7</h2>
      </section>
    </div>
  </header>
</template>

<script>
export default {
  name: 'VHeader'
}
</script>

<style scoped lang="scss">
@import 'colors';

.header {
  padding: 60px 60px 100px;

  &-content {
    display: flex;
    justify-content: space-between;
    margin-top: 48px;

    &__contacts {
      &-title {
        margin-bottom: 48px;

        &-prefix {
          text-transform: uppercase;
          color: $c-active;
        }
      }
    }
  }
}
</style>
