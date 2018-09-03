<template>
    <div>
      <div class="hours-tab-header">
        <Button btnType="primary" text="Export"/>
      </div>
      <ul class="burn-rate-list" v-for="(dateRange, index) in project.dateRange" v-bind:key="index">
        <li class="burn-rate-row" v-for="(resource, index) in dateRange.resources" v-bind:key="index">
          <span class="name">{{ resource.name }}</span>
          <span class="progress-bar">
            <ProgressBar v-bind:completed="resource.burnrate.completed" v-bind:total="resource.burnrate.total" />
          </span>
        </li>
      </ul>
    </div>
</template>

<script>
import HoursGrid from './HoursGrid.vue'
import ProgressBar from './ProgressBar.vue'
import Button from './Button.vue'

export default {
  name: 'BurnRateTab',
  components: {
    HoursGrid,
    ProgressBar,
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
  justify-content: flex-end;
  padding-left: $md;
  padding-right: $md;
}

.burn-rate-list {
  margin: 0;
  padding: 0;
  list-style: none;

  &:last-child {
    .burn-rate-row:last-child {
      border-bottom: none;
    }
  }
}

.burn-rate-row {
  display: flex;
  padding: $lg $md;
  border-bottom: 1px solid $graySuperLight;
  align-items: center;

  &:nth-child(even){
    background: rgba($graySuperLight, .5);
  }

  .name{
    flex: 0 0 150px;
    text-align: left;
  }

  .progress-bar {
    flex: 1 1 auto;
  }
}
</style>
