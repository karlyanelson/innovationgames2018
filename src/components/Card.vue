<template>
  <div id="card" class="card">
    <h1>Project #1234</h1>
    <div class="dateRangeGroup" v-for="(dateRange, index) in mockData.customer.project.dateRange" :key=index>
      <div class="week-selector">
        <span class="arrow-left"></span>
        <span class="week-selector-dates">
          <span class="week-selector-date first">{{ dateRange.start }}</span>
          <span class="dash">-</span>
          <span class="week-selector-date last">{{ dateRange.end }}</span>
        </span>
        <span class="arrow-right"></span>
      </div>
      <div class="hours-grid">
        <div class="hours-grid-header">
          <span class="hours-grid-header-col name">Name</span>
          <span class="hours-grid-header-col task">Task</span>
          <span class="hours-grid-header-col day-of-week">
            <span class="hours-grid-header-day">Mon</span>
            <span class="hours-grid-header-date">08/05</span>
          </span>
          <span class="hours-grid-header-col day-of-week">
            <span class="hours-grid-header-day">Tue</span>
            <span class="hours-grid-header-date">08/05</span>
          </span>
          <span class="hours-grid-header-col day-of-week">
            <span class="hours-grid-header-day">Wed</span>
            <span class="hours-grid-header-date">08/05</span>
          </span>
          <span class="hours-grid-header-col day-of-week">
            <span class="hours-grid-header-day">Thu</span>
            <span class="hours-grid-header-date">08/05</span>
          </span>
          <span class="hours-grid-header-col day-of-week">
            <span class="hours-grid-header-day">Fri</span>
            <span class="hours-grid-header-date">08/05</span>
          </span>
          <span class="hours-grid-header-col total">Total</span>
          <span class="hours-grid-header-col approval">Approval</span>
        </div>
        <div class="hours-grid-body">
          <div class="resource" v-for="(resource, index) in dateRange.resources" :key=index>
            <span class="resource-name">{{ resource.name }}</span>
            <span class="resource-task">{{ resource.task }}</span>
            <span name="Monday" class="resource-hour">{{ resource.hours[0].hourscompleted }}</span>
            <span name="Tuesday" class="resource-hour">{{ resource.hours[1].hourscompleted }}</span>
            <span name="Wednesday" class="resource-hour">{{ resource.hours[2].hourscompleted }}</span>
            <span name="Thursday" class="resource-hour">{{ resource.hours[3].hourscompleted }}</span>
            <span name="Friday" class="resource-hour">{{ resource.hours[4].hourscompleted }}</span>
            <span class="resource-total">null hours</span>
            <span class="resource-approval">
              <Button btnType="error" text="Reject"/>
              <Button btnType="success" text="Approve"/>
            </span>
            <ProgressBar :completed="resource.burnrate.completed" :total="resource.burnrate.total" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import ProgressBar from './ProgressBar.vue'

import mockDataJson from '../mock-data.json'
var mockData = mockDataJson

export default {
  name: 'Card',
  components: {
    Button,
    ProgressBar
  },
  data: function () {
    return {
      mockData
    }
  }
  // computedHoursTotal: {
  //   totalHours () {
  //     return this.customer.project.dateRange.resources.hours.reduce((sum, hours) => {
  //       return sum + hours.hourscompleted
  //     }, 0)
  //   }
  // }
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

.hours-grid {
  display: grid;
}

// .hours-table {
//   &,
//   table {
//     width: 100%;
//   }
//
//   .burnrate {
//     text-align: left;
//   }
//
//   .name,
//   .task {
//     text-align: left;
//     padding-bottom: 1rem;
//   }
// }
</style>
