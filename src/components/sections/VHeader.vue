<template>
  <header class="header container">
    <h1>Contacts</h1>
    <div class="header-content">
      <section class="header-content__section">
        <h2 class="section-title">
          <span class="section-title-highlight">GMS</span> Headquarters
        </h2>
        <div class="contacts">
          <div>
            <address class="contacts__address text_light">
              Global Message Services Ukraine LLC<br>
              Bundesstrasse 5 | 3rd Floor<br>
              6300 Zug<br>
              Switzerland
            </address>
            <a
              href="tel:+41415446200"
              class="tel text_light"
              tabindex="1"
            >
              +41 41 544 62 00
            </a>
          </div>
          <div class="contacts__links">
            <div class="contacts__link contacts__link_email">
              <label class="contacts__link-label text_light">Email</label>
              <a
                href="mailto:info@gms-worldwide.com"
                target="_blank"
                class="contacts__link-href text_bold"
                tabindex="2"
              >
                info@gms-worldwide.com
              </a>
            </div>
            <div class="contacts__link contacts__link_msg">
              <label class="contacts__link-label text_light">Send message</label>
              <a
                href="https://www.viber.com/"
                target="_blank"
                class="contacts__link-href text_bold"
                tabindex="3"
              >
                Viber us
              </a>
            </div>
            <div class="contacts__link contacts__link_form">
              <label class="contacts__link-label text_light">Send form</label>
              <a
                href="#contact-us"
                class="contacts__link-href text_bold"
                tabindex="4"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="header-content__section">
        <h2 class="section-title">
          Technical support <span class="section-title-highlight">24/7</span>
        </h2>
        <p class="support__text text_light">
          GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.
        </p>
        <a
          href="tel:+41415446200"
          class="tel text_light"
          tabindex="5"
        >
          +41 41 544 62 00
        </a>
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
  @import 'media';

  .header {
    padding-top: 60px ;
    padding-bottom: 100px;

    @include tablet {
      padding-top: 20px ;
      padding-bottom: 60px;
    }

    &-content {
      display: flex;
      justify-content: space-between;
      margin-top: 48px;

      @include tablet {
        display: block;
      }

      &__section {
        width: 48%;

        @include tablet {
          width: 100%;

          &:first-child {
            margin-bottom: 48px;
          }
        }
      }
    }
  }

  .contacts {
    display: flex;

    @include mobile {
      display: block;
    }

    &__links {
      margin-left: 40px;
      font-size: 1.6rem;

      @include mobile {
        margin-left: 0;
        margin-top: 40px;
      }
    }

    &__link {
      line-height: 2;

      &:last-child {
        margin-bottom: 0;
      }

      &-label {
        display: block;
      }

      &-href {
        display: block;
        line-height: 2;
        text-transform: uppercase;
        text-decoration: none;
        color: $c-active;

        &:focus {
          outline: none;
          color: darken($c-active, 10%);
        }
      }
    }

    &__address {
      font-size: 1.6rem;
      line-height: 2;
      margin-bottom: 40px;
    }
  }

  .support {
    &__text {
      line-height: 2;
      margin-bottom: 40px;
    }
  }

  .section-title {
    margin-bottom: 40px;

    &-highlight {
      text-transform: uppercase;
      color: $c-active;
    }
  }

  .tel {
    font-size: 2.6rem;
    color: $c-active;
    text-decoration: none;

    &:focus {
      outline: none;
      color: darken($c-active, 10%);
    }
  }
</style>
