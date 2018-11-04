<template>
  <label :for="id">
    <input
      :id="id"
      type="checkbox"
      class="checkbox__input visually-hidden"
      :checked="value"
      @change="$emit('input', $event.target.checked)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
    <span class="checkbox__container">
      <span :class="checkmarkClasses"></span>
      <span class="checkbox__label text_light">{{ label }}</span>
    </span>
  </label>
</template>

<script>
export default {
  name: 'VCheckbox',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      id: `input-${this._uid}`,
      isFocused: false
    }
  },
  computed: {
    checkmarkClasses () {
      return [
        'checkbox__checkmark',
        { 'checkbox__checkmark_active': this.value },
        { 'checkbox__checkmark_focus': this.isFocused }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import 'colors';
  @import 'media';

  .checkbox {
    &__container {
      display: flex;
      align-items: center;
    }

    &__label {
      display: block;
      font-size: 1.8rem;
      color: $c-white;

      @include mobileSm {
        font-size: 1.6rem;
      }
    }

    &__checkmark {
      display: block;
      position: relative;
      width: 16px;
      height: 16px;
      margin-right: 16px;
      background: $c-white;
      transform: translateY(-1px);
      cursor: pointer;

      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 2px;
        background: $c-black;
        transition: transform 0.1s;
      }

      &::before {
        width: 7px;
        top: 10px;
        left: 1px;
        transform: rotate(50deg) scale(0);
      }

      &::after {
        content: '';
        width: 12px;
        top: 7px;
        left: 4px;
        transform: rotate(-60deg) scale(0);
      }

      &_active {
        &::before {
          transform: rotate(50deg) scale(1);
        }

        &::after {
          transform: rotate(-60deg) scale(1);
        }
      }

      &_focus {
        box-shadow: 0px 0px 3px $c-white;
      }
    }
  }
</style>
