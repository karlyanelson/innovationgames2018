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
      <div class="hours-grid-row" v-for="(resource, index) in resources" v-bind:key="index" >
        <span class="hours-grid-col resource-name">{{ resource.name }}</span>
        <span class="hours-grid-col resource-task">{{ resource.task }}</span>
        <span name="Monday" class="hours-grid-col resource-hour">{{ resource.hours[0].hourscompleted }}</span>
        <span name="Tuesday" class="hours-grid-col resource-hour">{{ resource.hours[1].hourscompleted }}</span>
        <span name="Wednesday" class="hours-grid-col resource-hour">{{ resource.hours[2].hourscompleted }}</span>
        <span name="Thursday" class="hours-grid-col resource-hour">{{ resource.hours[3].hourscompleted }}</span>
        <span name="Friday" class="hours-grid-col resource-hour">{{ resource.hours[4].hourscompleted }}</span>
        <span class="hours-grid-col resource-total">{{ resource.hours[0].hourscompleted + resource.hours[1].hourscompleted + resource.hours[2].hourscompleted + resource.hours[3].hourscompleted + resource.hours[4].hourscompleted}}</span>
        <span class="hours-grid-col resource-approval">
          <Button v-if="resource.approved == false && resource.rejected == false" btnType="error" text="Reject"/>
          <Button v-if="resource.approved == false && resource.rejected == false" btnType="success" text="Approve"/>
          <span class="approved" v-if="resource.approved">Approved</span>
          <span class="rejected" v-if="resource.rejected">Rejected</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'HoursGrid',
  components: {
    Button
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
  grid-template-rows: auto auto;
  grid-template-columns: auto;
  text-align: left;
  padding-top: $md;
}

.hours-grid-header {
  grid-row-start: 1;
  border-bottom: 1px solid $graySuperLight;
}

.hours-grid-body {
  grid-row-start: 2
}

.resource-hour,
.hours-grid-header-col.day-of-week,
.resource-total,
.hours-grid-header-col.total {
  border-left: 1px solid $graySuperLight;
  text-align: center;
}

.hours-grid-row,
.hours-grid-header {
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 2fr 0.5fr 0.5fr 0.5fr 0.5fr 0.5fr 1fr 1.5fr;
  padding: 0;
  align-items: center;
}

.hours-grid-header {
  align-items: flex-end;
  font-weight: 700;
}

.hours-grid-row {
  border-bottom: 1px solid $graySuperLight;

  &:nth-child(even){
    background: rgba($graySuperLight, .5);
  }

  &:last-child {
    border-bottom: none;
  }
}

.hours-grid-header-col,
.hours-grid-col {
  display: inline-block;
  padding: $sm;
}

.hours-grid-header-col {
  display: flex;
  flex-direction: column;
}

.hours-grid-col {
  padding-top: $lg;
  padding-bottom: $lg;
}

.name,
.resource-name {
  padding-left: $md;
}

.resource-approval {
  button {
    margin: $xxs;
  }

  .approved {
    color: $greenDark;
  }

  .rejected {
    color: $redDark;
  }
}

@media (max-width: 1000px) {
  .hours-grid-row,
  .hours-grid-header {
    grid-template-columns: 1fr 2fr 1fr 2fr;
  }

  .day-of-week,
  .resource-hour {
    display: none;
  }

  .resource-total,
  .hours-grid-header-col.total {
    border-left: none;
  }
}

</style>
