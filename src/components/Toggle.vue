<template>
  <span class="toggle">
    <input type="checkbox" v-bind:name="value" v-bind:id="value" class="ios-toggle" checked/>
    <label v-bind:for="value" class="checkbox-label" data-off="off" data-on="on"></label>
  </span>
</template>

<script>
export default {
  name: 'Toggle',
  props: {
    value: String
  }
}
</script>

<style scoped lang="scss">
*,
*:after,
*:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: 0.25s ease-in-out;
    outline: none;
}
.toggle {
    display: inline-block;
    width: 60px;
    margin: 0 auto;
    text-align: center;
}
.ios-toggle,
.ios-toggle:active {
    position: absolute;
    top: -5000px;
    height: 0;
    width: 0;
    opacity: 0;
    border: none;
    outline: none;
}
.checkbox-label {
    display: block;
    position: relative;
    padding: 10px;
    font-size: 12px;
    line-height: 16px;
    width: 100%;
    height: 36px;
    border-radius: 18px;
    background: #f8f8f8;
    cursor: pointer;

    &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 1;
        line-height: 34px;
        text-indent: 40px;
        height: 36px;
        width: 36px;
        border-radius: 100%;
        top: 0;
        left: 0;
        right: auto;
        background: white;
        box-shadow: 0 3px 3px rgba(0,0,0,.2),0 0 0 2px #dddddd;
    }

    &:after {
        // content: attr(data-off);
        display: block;
        position: absolute;
        z-index: 0;
        top: 0;
        left: -300px;
        padding: 10px;
        height: 100%;
        width: 300px;
        text-align: right;
        color: #bfbfbf;
        white-space: nowrap;
    }
}

.ios-toggle {
  & + .checkbox-label {
      box-shadow: inset 0 0 0 0 $blue,0 0 0 2px $grayVeryLight;
  }

  &:focus + .checkbox-label {
    box-shadow: inset 0 0 0 0 $wwtBlue,0 0 0 2px $wwtBlue;

    &:before {
        box-shadow: 0 0 0 2px transparent,0 3px 3px $wwtBlue;
    }
  }
}

.ios-toggle:checked {
  & + .checkbox-label {
      box-shadow: inset 0 0 0 20px $blue,0 0 0 2px $blue;
  }

  & + .checkbox-label:before {
      left: calc(100% - 36px);
      box-shadow: 0 0 0 2px transparent,0 3px 3px rgba(0,0,0,.3);
  }

  & + .checkbox-label:after {
      // content: attr(data-on);
      left: 60px;
      width: 36px;
  }

  &:focus + .checkbox-label {
    box-shadow: inset 0 0 0 20px $wwtBlue,0 0 0 2px $wwtBlue;
  }
}

</style>
