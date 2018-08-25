<template>
  <div id="card" class="card">
    <h1>Project #1234</h1>
    <div class="dateRangeGroup" v-for="(dateRange, index) in project.dateRange" :key="index">
      <div class="week-selector">
        <span class="arrow-left"></span>
        <span class="week-selector-dates">
          <span class="week-selector-date first">{{ dateRange.start }}</span>
          <span class="dash">-</span>
          <span class="week-selector-date last">{{ dateRange.end }}</span>
        </span>
        <span class="arrow-right"></span>
      </div>
      <HoursGrid :resources="dateRange.resources" />
    </div>
  </div>
</template>

<script>
import HoursGrid from './HoursGrid.vue'

export default {
  name: 'Card',
  components: {
    HoursGrid
  },
  props: {
    project: Object
  }
}
</script>

<style scoped lang="scss">
.card {
  background: $white;
  max-width: 80rem;
  padding: $md;
  width: 100%;
  box-shadow: 0px 2px 2px 2px $graySuperLight;
}
</style>
