<template>
  <footer class="footer">
    <section class="footer-inner container">
      <h2 class="footer__title">Contact Us</h2>
      <div style="width: 350px; margin-top: 100px;">
        <v-input
          v-model="contactForm.name"
          :validator="$v.contactForm.name"
          name="name"
          type="text"
          label="Name"
        />
        <v-input
          v-model="contactForm.phone"
          :validator="$v.contactForm.phone"
          name="phone"
          type="tel"
          label="Phone"
        />
        <v-input
          v-model="contactForm.email"
          :validator="$v.contactForm.email"
          name="email"
          type="email"
          label="Email"
        />
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
      }
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
    height: 500px;
    background: url("~@/assets/img/footerBg.png");

    &-inner {
      padding-top: 100px;
      padding-bottom: 100px;

      @include tablet {
        padding-top: 40px;
        padding-bottom: 40px;
      }
    }

    &__title {
      color: $c-white;
    }
  }
</style>
