<template>
  <span class="burn-rate">
    <span class="progress-bar">
      <span class="progress-bar-fill" v-bind:style="{ width: totalProgress() + '%' }"></span>
      <span class="progress-bar-background"></span>
    </span>
    <span class="progress-text">
      <span class="fraction"><span class="completed">{{ completed }}</span><span class="total">/{{ total }} hours</span></span>
      <span class="percent">{{ totalProgress() }}%</span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    completed: Number,
    total: Number
  },
  methods: {
    totalProgress: function () {
      return this.completed / this.total * 100
    }
  }
}

</script>

<style scoped lang="scss">
.burn-rate,
.progress-text {
  display: flex;
  align-items: center;
}

.progress-text {
  display: flex;
  justify-content: flex-end;
  flex: 0 0 250px;
  margin-left: $lg;
  text-transform: uppercase;
  line-height: 1;
  text-align: right;

  .fraction {
    letter-spacing: .03em;
  }

  .completed {
    font-weight: 600;
    font-size: 1.5rem;
  }

  .percent {
    font-size: 1.5rem;
    margin-left: 1rem;
    padding-left: 1rem;
    font-weight: 600;
  }
}

.progress-bar {
  height: 1rem;
  width: 100%;
  min-width: 5rem;
  display: inline-block;
  position: relative;
  flex: 1 1 auto;

  &-fill {
    background-color: $blue10;
    display: inline-block;
    width: 0%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-radius: .5rem;
    max-width: 100%;
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
