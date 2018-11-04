<template>
  <footer class="footer">
    <section class="footer-inner container">
      <h2 id="contact-us" class="footer__title">Contact Us</h2>
      <div class="footer__content">
        <form
          class="content__contact-form"
          @submit.prevent="onFormSubmit"
        >
          <v-input
            v-model="contactForm.name"
            :validator="$v.contactForm.name"
            name="name"
            type="text"
            label="Name"
            tabindex="10"
            class="contact-form__input"
          />
          <v-input
            v-model="contactForm.phone"
            :validator="$v.contactForm.phone"
            name="phone"
            type="tel"
            label="Phone"
            tabindex="11"
            class="contact-form__input"
          />
          <v-input
            v-model="contactForm.email"
            :validator="$v.contactForm.email"
            name="email"
            type="email"
            label="Email"
            tabindex="12"
            class="contact-form__input"
          />
          <v-checkbox
            v-model="isAgree"
            label="I agree the processing of personal data"
            tabindex="13"
            class="contact-form__input contact-form__input_agreement"
          />
          <v-button
            class="contact-form__submit"
            :disabled="isSubmitDisabled"
            :loading="isSubmitInProgress"
            tabindex="14"
            type="submit"
          >
            Get in touch
          </v-button>
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
      isAgree: false,
      isSubmitInProgress: false
    }
  },
  validations: {
    contactForm: {
      name: { required },
      phone: { phone, required },
      email: { email, required }
    }
  },
  computed: {
    isSubmitDisabled () {
      return this.$v.$invalid || !this.isAgree || this.isSubmitInProgress
    }
  },
  methods: {
    async onFormSubmit () {
      this.isSubmitInProgress = true

      try {
        const res = await fetch('http://httpbin.org/post', {
          method: 'POST',
          body: JSON.stringify(this.contactForm)
        })

        console.log(await res.json())
      } catch (err) {
        console.error(err)
      } finally {
        setTimeout(() => {
          this.isSubmitInProgress = false
        }, 500) // min spinner duration
      }
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

    &__submit {
      margin-top: 48px;

      @include mobile {
        width: 100%;
      }
    }
  }
</style>
