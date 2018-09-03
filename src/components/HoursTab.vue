<template>
  <div class="">
    <div class="dateRangeGroup" v-for="(dateRange, index) in project.dateRange" v-bind:key="index">
      <div class="hours-tab-header">
        <div class="week-selector">
          <button class="arrow-btn arrow-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </button>
          <span class="week-selector-dates">
            <span class="week-selector-date first">{{ dateRange.start }}</span>
            <span class="dash"> - </span>
            <span class="week-selector-date last">{{ dateRange.end }}</span>
          </span>
          <button class="arrow-btn arrow-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          </button>
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
  font-size: 1rem;
  display: flex;
  align-items: center;

  &-dates {
    margin: 0 $md;
  }
}

.arrow-btn {
  background: $white;
  border: 1px solid $blue;
  cursor: pointer;
  outline: none;
  padding: $xs/4 $xs;
  box-shadow: 1px 1px 2px 2px rgba($grayDark, .15);

  &:hover,
  &:focus {
    background: $blue40;
    border-color: $wwtBlue;
  }

  &:active {
    background: $wwtBlue;

    svg {
      fill: $white;
    }
  }

  &:disabled,
  .disabled {
    cursor: auto;
    border: 1px solid $grayLight;
    background: $graySuperLight;
    box-shadow: none;

    &:hover,
    &:focus,
    &:active {
      background: $graySuperLight;
    }

    svg {
      fill: $grayLight;
    }
  }

  svg {
    fill: $blue;
  }
}
</style>
