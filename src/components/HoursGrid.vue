<template>
  <div class="hours-grid">
    <div class="hours-grid-header">
      <span class="hours-grid-header-col name">Name</span>
      <span class="hours-grid-header-col task">Task</span>
      <span class="hours-grid-header-col day-of-week">
        <span class="hours-grid-header-day">{{ days[0].shorthand }}</span>
        <span class="hours-grid-header-date">{{ days[0].date }}</span>
      </span>
      <span class="hours-grid-header-col day-of-week">
        <span class="hours-grid-header-day">{{ days[1].shorthand }}</span>
        <span class="hours-grid-header-date">{{ days[1].date }}</span>
      </span>
      <span class="hours-grid-header-col day-of-week">
        <span class="hours-grid-header-day">{{ days[2].shorthand }}</span>
        <span class="hours-grid-header-date">{{ days[2].date }}</span>
      </span>
      <span class="hours-grid-header-col day-of-week">
        <span class="hours-grid-header-day">{{ days[3].shorthand }}</span>
        <span class="hours-grid-header-date">{{ days[3].date }}</span>
      </span>
      <span class="hours-grid-header-col day-of-week">
        <span class="hours-grid-header-day">{{ days[4].shorthand }}</span>
        <span class="hours-grid-header-date">{{ days[4].date }}</span>
      </span>
      <span class="hours-grid-header-col total">Total</span>
      <span class="hours-grid-header-col approval">Approval</span>
    </div>
    <div class="hours-grid-body">
      <div class="resource-grid" v-for="(resource, index) in resources" :key="index" >
        <div class="resource-grid-row">
          <span class="resource-grid-col resource-name">{{ resource.name }}</span>
          <span class="resource-grid-col resource-task">{{ resource.task }}</span>
          <span name="Monday" class="resource-grid-col resource-hour">{{ resource.hours[0].hourscompleted }}</span>
          <span name="Tuesday" class="resource-grid-col resource-hour">{{ resource.hours[1].hourscompleted }}</span>
          <span name="Wednesday" class="resource-grid-col resource-hour">{{ resource.hours[2].hourscompleted }}</span>
          <span name="Thursday" class="resource-grid-col resource-hour">{{ resource.hours[3].hourscompleted }}</span>
          <span name="Friday" class="resource-grid-col resource-hour">{{ resource.hours[4].hourscompleted }}</span>
          <span class="resource-grid-col resource-total">{{ resource.hours[0].hourscompleted + resource.hours[1].hourscompleted + resource.hours[2].hourscompleted + resource.hours[3].hourscompleted + resource.hours[4].hourscompleted}}</span>
          <span class="resource-grid-col resource-approval">
            <Button btnType="error" text="Reject"/>
            <Button btnType="success" text="Approve"/>
          </span>
        </div>
        <div class="resource-grid-row">
          <ProgressBar :completed="resource.burnrate.completed" :total="resource.burnrate.total" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import ProgressBar from './ProgressBar.vue'

export default {
  name: 'HoursGrid',
  components: {
    Button,
    ProgressBar
  },
  props: {
    resources: Array,
    days: Array
  }
}
</script>

<style scoped lang="scss">
.hours-grid {
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  text-align: left;
}

.resource-grid {
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr;

  .burn-rate {
    grid-column-start: 2;
    grid-column-end: 8;
  }
}

.hours-grid-header {
  grid-row-start: 1;
  border-bottom: 1px solid $grayVeryLight;
}

.resource-hour,
.hours-grid-header-col.day-of-week,
.resource-total,
.hours-grid-header-col.total {
  border-left: 1px solid $grayVeryLight;
  text-align: center;
}

.resource-grid-row,
.hours-grid-header {
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 2fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 1fr 1fr;
}

.resource-grid {
  padding: $lg 0;
  border-bottom: 1px solid $grayVeryLight;

  &-row:first-child {
    margin-bottom: $lg;
  }
}

.hours-grid-header-col,
.resource-grid-col {
  display: inline-block;
  padding: $sm;
  align-self: center;
}

.hours-grid-body {
  grid-row-start: 2
}
</style>
