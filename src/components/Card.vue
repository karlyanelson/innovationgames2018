<template>
  <div id="card" class="card">
    <div class="card-header">
      <h3>Project #{{ project.projectId }}</h3>
      <h1>{{ project.projectTitle }}</h1>
      <div class="tab-group">
        <button
          v-for="tab in tabs"
          v-bind:key="tab"
          v-bind:class="['tab', { active: currentTab === tab }]"
          v-on:click="currentTab = tab"
        >{{ tab }}</button>
      </div>
    </div>
    <div class="card-body">
      <component v-bind:project="project"  v-bind:is="currentTabComponent" />
    </div>
  </div>
</template>

<script>

import HoursTab from './HoursTab.vue'
import BurnRateTab from './BurnRateTab.vue'

export default {
  name: 'Card',
  components: {
    HoursTab,
    BurnRateTab
  },
  props: {
    project: Object
  },
  data: function () {
    return {
      currentTab: 'Hours',
      tabs: ['Hours', 'Burn Rate']
    }
  },
  computed: {
    currentTabComponent: function () {
      if (this.currentTab === 'Hours') {
        return (HoursTab)
      } else {
        return BurnRateTab
      }
    }
  }
}
</script>

<style scoped lang="scss">
h3{
  margin-bottom: 0;
}
h1 {
  margin-top: 0;
}
.card {
  background: $white;
  max-width: 80rem;
  width: 100%;
  box-shadow: 0px 2px 2px 2px $graySuperLight;

  & + .card {
    margin-top: $xl;
  }
}

.card-header,
.card-body {
  padding: $md;
}

.card-header {
  border-bottom: 1px solid $grayVeryLight;
  padding-bottom: $md;
  margin-bottom: $lg;
}

.tab-group {
  display: flex;
  justify-content: center;
}

.tab {
  color: $wwtBlue;
  border: 1px solid $wwtBlue;
  display: inline-block;
  position: relative;
  border-radius: 0;
  padding: 0.375em .75em;
  font: inherit;
  line-height: $inputLineHeight;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  transition: all ease 300ms;

  &:first-child {
    border-top-left-radius: .25rem;
    border-bottom-left-radius: .25rem;
  }

  &:last-child {
    border-top-right-radius: .25rem;
    border-bottom-right-radius: .25rem;
  }

  &:hover,
  &:focus {
    background: rgba($wwtBlue, .15);
    outline: none;
  }

  &.active {
    background: $wwtBlue;
    color: $white;
  }
}
</style>
