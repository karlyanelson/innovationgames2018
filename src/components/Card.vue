<template>
  <div id="card" class="card">
    <h1>Project #{{ project.projectId }}</h1>
    <button
      v-for="tab in tabs"
      v-bind:key="tab"
      v-bind:class="['tab-button', { active: currentTab === tab }]"
      v-on:click="currentTab = tab"
    >{{ tab }}</button>

    <component v-bind:project="project"  v-bind:is="currentTabComponent" />
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
.card {
  background: $white;
  max-width: 80rem;
  padding: $md;
  width: 100%;
  box-shadow: 0px 2px 2px 2px $graySuperLight;

  & + .card {
    margin-top: $xl;
  }
}
</style>
