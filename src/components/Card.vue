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
  margin-bottom: $lg;
}
.card {
  background: $white;
  max-width: 80rem;
  width: 100%;
  box-shadow: 0px 2px 2px 2px rgba($grayDark, .15);

  & + .card {
    margin-top: $xl;
  }
}

.card-header{
  padding: $lg;
}

.card-body {
  padding: $lg $md
}

.card-header {
  border-bottom: 1px solid $grayVeryLight;
  padding-bottom: 0;
  padding-top: $md;
  background: $blue10;
  color: $white;
}

.tab-group {
  display: flex;
}

.tab {
  color: $white;
  border: 1px solid transparent;
  display: inline-block;
  position: relative;
  border-radius: 0;
  padding: $sm $lg;
  font-size: .875rem;
  line-height: $inputLineHeight;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;
  background-color: transparent;
  cursor: pointer;
  transition: all ease 300ms;
  top: 1px;

  &:hover,
  &:focus {
    background: rgba($white, .15);
    outline: none;
  }

  &.active {
    color: $blue;
    background: $white;
    border-top: 1px solid $grayVeryLight;
    border-right: 1px solid $grayVeryLight;
    border-bottom: 1px solid $white;
    border-left: 1px solid $grayVeryLight;

    &:hover,
    &:focus {
      color: $wwtBlue;
    }
  }
}
</style>
