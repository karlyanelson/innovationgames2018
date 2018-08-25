<template>
  <div id="card" class="card">
    <h1>Project #1234</h1>
    <div class="dateRangeGroup" v-for="dateRange in mockData.customer.project.dateRange">
      <div class="week-selector">
        <span class="arrow-left"></span>
        <span class="week-selector-dates">
          <span class="week-selector-date first">August 6, 2018</span><span class="dash">-</span><span class="week-selector-date last">August 10, 2018</span>
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
        </div>
        <div class="table-grid-body">

        </div>
      </div>

      <table class="hours-table">
        <thead>
          <th class="name">Name</th>
          <th class="task">Task</th>
          <th class="hide-on-mobile">
            <span class="hours-table-day">Mon</span>
            <span class="hours-table-date">08/05</span>
          </th>
          <th class="hide-on-mobile">
            <span class="hours-table-day">Tue</span>
            <span class="hours-table-date">08/06</span>
          </th>
          <th class="hide-on-mobile">
            <span class="hours-table-day">Wed</span>
            <span class="hours-table-date">08/06</span>
          </th>
          <th class="hide-on-mobile">
            <span class="hours-table-day">Thu</span>
            <span class="hours-table-date">08/06</span>
          </th>
          <th class="hide-on-mobile">
            <span class="hours-table-day">Fri</span>
            <span class="hours-table-date">08/06</span>
          </th>
          <th>Total</th>
          <th>Approval</th>
        </thead>
        <tbody>
          <tr v-for="resource in dateRange.resources">
            <td>
              <table>
                <tbody>
                  <tr>
                    <!-- <td class="name">John Johnson</td> -->
                    <td class="name">{{ resource.name }}</td>
                  </tr>
                  <tr>
                    <td>
                      <ProgressBar :completed="resource.burnrate.completed" :total="resource.burnrate.total" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td class="task">Download free song for ipod</td>
                  </tr>
                  <tr>
                    <td class="burnrate">
                      <span>{{resource.burnrate.completed}}/{{resource.burnrate.total}} hours</span>
                      <span>20%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td class="hide-on-mobile">8</td>
            <td class="hide-on-mobile">8</td>
            <td class="hide-on-mobile">8</td>
            <td class="hide-on-mobile">8</td>
            <td class="hide-on-mobile">8</td>
            <td>40</td>
            <td>
              <Button btnType="error" text="Reject"/>
              <Button btnType="success" text="Approve"/>
            </td>
          </tr>
        </tbody>
      </table>
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
  },
  computed: {
    totalProgress () {
      return this.completed / this.total * 100
    }
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

.hours-table {
  &,
  table {
    width: 100%;
  }

  .burnrate {
    text-align: left;
  }

  .name,
  .task {
    text-align: left;
    padding-bottom: 1rem;
  }
}

@media (max-width: 1000px) {
  .hide-on-mobile {
    display: none;
  }
}
</style>
