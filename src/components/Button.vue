<template>
  <button type="button" v-bind:class="['pmr-btn', btnType]">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnType: String,
    text: String
  }
}
</script>

<style scoped lang="scss">
.pmr-btn {
  color: $white;
  border: 1px solid transparent;
  display: inline-block;
  position: relative;
  border-radius: 0;
  padding: 0.375em .75em;
  font: inherit;
  line-height: $inputLineHeight;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  transition: all ease 300ms;

  &::selection {
    background: transparent;
  }

  &.sm {
    font-size: .875rem;
    padding: $xs .75rem;
  }

  &.md {
    font-size: $md;
  }

  &.lg {
    font-size: 1.25rem;
    padding: .75rem 1.25rem;
    line-height: 1.33333;
  }

  &.default {
    @include button-color($grayLight);

    &.dismiss {
    @include dismiss-button($grayLight);
    }
  }

  &.primary {
    @include button-color($primaryColor);

    &.dismiss {
      @include dismiss-button($primaryColor);
    }
  }

  &.success {
    @include button-color($successColor);

    &.dismiss {
      @include dismiss-button($successColor);
    }
  }

  &.warning {
    @include button-color($warningColor);

    &.dismiss {
      @include dismiss-button($warningColor);
    }
  }

  &.error {
    @include button-color($errorColor);

    &.dismiss {
      @include dismiss-button($errorColor);
    }
  }

  &.full {
    display: block;
    width: 100%;
  }
}
</style>
