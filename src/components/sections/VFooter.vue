<template>
  <footer class="footer">
    <section class="footer-inner container">
      <h2 class="footer__title">Contact Us</h2>
      <div class="footer__content">
        <form class="content__contact-form">
          <v-input
            v-model="contactForm.name"
            :validator="$v.contactForm.name"
            name="name"
            type="text"
            label="Name"
            class="contact-form__input"
          />
          <v-input
            v-model="contactForm.phone"
            :validator="$v.contactForm.phone"
            name="phone"
            type="tel"
            label="Phone"
            class="contact-form__input"
          />
          <v-input
            v-model="contactForm.email"
            :validator="$v.contactForm.email"
            name="email"
            type="email"
            label="Email"
            class="contact-form__input"
          />
          <v-checkbox
            v-model="isAgree"
            label="I agree the processing of personal data"
            class="contact-form__input contact-form__input_agreement"
          />
        </form>
        <p class="content__description text_light">
          Please tell us more about your request and give us info about your company and country
        </p>
      </div>
    </section>
  </footer>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import { phone } from '@/utils/validators'

export default {
  name: 'VFooter',
  mixins: [validationMixin],
  data () {
    return {
      contactForm: {
        name: '',
        phone: '',
        email: ''
      },
      isAgree: true
    }
  },
  validations: {
    contactForm: {
      name: { required },
      phone: { phone, required },
      email: { email, required }
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'colors';
  @import 'media';

  .footer {
    background: url("~@/assets/img/footerBg.png");
    background-size: 5%;

    padding-top: 100px;
    padding-bottom: 100px;

    @include tablet {
      padding-top: 40px;
      padding-bottom: 40px;
    }

    &__title {
      color: $c-white;
      margin-bottom: 50px;
    }

    &__content {
      display: flex;

      @include tablet {
        flex-direction: column;
      }
    }
  }

  .content {
    &__contact-form {
      width: 48%;
      max-width: 550px;
      margin-right: 75px;

      @include tablet {
        width: 100%;
        max-width: 100%;
        margin-right: 0;
        order: 2;
      }
    }

    &__description {
      max-width: 550px;
      font-size: 1.8rem;
      line-height: 2;

      @include tablet {
        max-width: 100%;
        order: 1;
        margin-bottom: 30px;
      }
    }
  }

  .contact-form {
    &__input {
      margin-bottom: 15px;
    }
  }
</style>
