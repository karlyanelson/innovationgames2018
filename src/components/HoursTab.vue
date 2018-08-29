<template>
  <div class="">
    <div class="dateRangeGroup" v-for="(dateRange, index) in project.dateRange" v-bind:key="index">
      <div class="week-selector">
        <span class="arrow-left"></span>
        <span class="week-selector-dates">
          <span class="week-selector-date first">{{ dateRange.start }}</span>
          <span class="dash">-</span>
          <span class="week-selector-date last">{{ dateRange.end }}</span>
        </span>
        <span class="arrow-right"></span>
      </div>
      <HoursGrid v-bind:days="dateRange.days" v-bind:resources="dateRange.resources" />
    </div>
  </div>
</template>

<script>
import HoursGrid from './HoursGrid.vue'
export default {
  name: 'HoursTab',
  components: {
    HoursGrid
  },
  props: {
    project: Object
  }
}
</script>

<style lang="css">
</style>
