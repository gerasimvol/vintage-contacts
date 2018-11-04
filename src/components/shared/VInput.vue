<template>
  <div class="input-wrapper">
    <div :class="inputClasses">
      <label
        :for="id"
        class="input__label text_light"
      >
        {{ label }}
      </label>
      <input
        :id="id"
        :type="$attrs.type"
        :value="value"
        :name="$attrs.name"
        class="input__field text_light"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
      >
    </div>
    <transition name="slide-from-top">
      <span
        v-if="validate()"
        class="input__error text_light"
      >
        {{ validate() }}
      </span>
    </transition>
  </div>
</template>

<script>
const validationMessages = {
  email: 'Invalid email',
  required: 'This field is required',
  phone: 'Invalid phone number'
}

export default {
  name: 'VInput',
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String
    },
    validator: {
      type: Object
    }
  },
  data () {
    return {
      id: `input-${this._uid}`,
      isFocused: false
    }
  },
  computed: {
    inputClasses () {
      return [
        'input-inner',
        { 'input-inner_focus': this.isFocused },
        { 'input-inner_error': this.validate() }
      ]
    }
  },
  methods: {
    onFocus () {
      this.$emit('focus')
      this.isFocused = true

      if (this.validator) this.validator.$reset()
    },
    onBlur () {
      this.$emit('blur')
      this.isFocused = false

      if (this.validator) this.validator.$touch()
      this.validate()
    },
    onInput (event) {
      this.$emit('input', event.target.value)
    },
    validate () {
      if (!this.validator) return false

      const validationTypes = Object.keys(this.validator.$params || {})
      let message = ''
      message = validationTypes.reduce((acc, type) => {
        if (!this.validator[type]) {
          acc = validationMessages[type]
        }
        return acc
      }, '')

      if (this.validator.$invalid && this.validator.$dirty) {
        return message
      } else {
        this.validator.$reset()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'colors';

  .input {
    &-inner {
      display: flex;
      position: relative;
      color: $c-black;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background: $c-black;
        transition: background 0.2s;
        z-index: 1;
      }

      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1px;
        background: $c-white;
        transition: width 0.2s;
        z-index: 2;
      }

      &_focus {
        color: $c-white;

        &::before {
          width: 100%;
        }
      }

      &_error {
        color: $c-error;

        &::before,
        &::after {
          width: 100%;
          background: $c-error;
        }
      }
    }

    &-wrapper {
      position: relative;
      padding-bottom: 25px;
    }

    &__label {
      font-size: 1.8rem;
      padding-bottom: 20px;
      padding-top: 5px;
      transition: color 0.2s;
    }

    &__field {
      font-size: 1.8rem;
      background: none;
      border: none;
      outline: none;
      padding-left: 45px;
      padding-bottom: 20px;
      flex: 1;
      color: inherit;
      transition: color 0.2s;
    }

    &__error {
      position: absolute;
      bottom: 0;
      left: 0;
      font-size: 1.6rem;
      color: $c-error;
    }
  }

  .slide-from-top {
    &-enter-active,
    &-leave-active {
      transition: all 0.2s linear;
      opacity: 1;
      transform: translateY(0);
    }

    &-enter,
    &-leave-to {
      transform: translateY(-40%);
      opacity: 0;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
</style>
