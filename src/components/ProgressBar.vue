<template>
  <span class="progress-bar">
    <span class="progress-bar-fill" v-bind:style="{ width: computed + '%' }"></span>
    <span class="progress-bar-background"></span>
  </span>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    completed: Number,
    total: Number
  },
  computed: {
    totalProgress () {
      return this.completed / this.total * 100
    }
  }
}

</script>

<style scoped lang="scss">
.progress-bar {
  height: 1rem;
  width: 100%;
  min-width: 5rem;
  display: inline-block;
  position: relative;

  &-fill {
    background-color: $blue;
    display: inline-block;
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-radius: .5rem;
  }

  &-background {
    background-color: $graySuperLight;
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: .5rem;
  }
}
</style>
