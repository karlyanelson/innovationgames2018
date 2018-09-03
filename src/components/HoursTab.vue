<template>
  <div class="">
    <div class="dateRangeGroup" v-for="(dateRange, index) in project.dateRange" v-bind:key="index">
      <div class="hours-tab-header">
        <div class="week-selector">
          <span class="arrow-left"></span>
          <span class="week-selector-dates">
            <span class="week-selector-date first">{{ dateRange.start }}</span>
            <span class="dash"> - </span>
            <span class="week-selector-date last">{{ dateRange.end }}</span>
          </span>
          <span class="arrow-right"></span>
        </div>
        <Button btnType="primary" text="Export"/>
      </div>
      <HoursGrid v-bind:days="dateRange.days" v-bind:resources="dateRange.resources" />
    </div>
  </div>
</template>

<script>
import HoursGrid from './HoursGrid.vue'
import Button from './Button.vue'
export default {
  name: 'HoursTab',
  components: {
    HoursGrid,
    Button
  },
  props: {
    project: Object
  }
}
</script>

<style scoped lang="scss">
.hours-tab-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: .5rem;
  border-bottom: 1px solid $grayVeryLight;
  padding-left: $md;
  padding-right: $md;

  button {
    align-self: flex-end;
  }
}

.week-selector {
  font-weight: 800;
}
</style>
