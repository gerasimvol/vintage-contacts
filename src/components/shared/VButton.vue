<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
  >
    <span
      :class="['button__spinner', { 'hidden': !loading }]"
    ></span>
    <span
      :class="['button__text', 'text_bold', { 'hidden': loading }]"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses () {
      return [
        'button',
        { 'button_disabled': this.disabled },
        { 'button_loading': this.loading }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'colors';

  .button {
    position: relative;
    background: $c-gray;
    border: none;
    padding: 35px 95px;
    cursor: pointer;

    &__spinner {
      transition: opacity 0.2s;

      &::before {
        content: "";
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        border: 2px solid $c-white;
        border-radius: 50%;
        border-left-color: transparent;
        top: 50%;
        left: 50%;
        transform: rotate(0deg) translate(-50%, -50%);
        animation: spin 0.9s linear infinite;
        transform-origin: 0 0;
      }
    }

    &__text {
      font-size: 1.1rem;
      text-transform: uppercase;
      color: $c-white;
      letter-spacing: 1px;
      transition: opacity 0.2s;
    }

    &_disabled {
      cursor: not-allowed;
      opacity: 0.9;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg) translate(-50%, -50%);
    }

    to {
      transform: rotate(360deg) translate(-50%, -50%);
    }
  }

  .hidden {
    opacity: 0;
  }
</style>
