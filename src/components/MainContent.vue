<template>
  <main class="main-content">
    <div class="card-group">
      <Card v-for="(project, index) in mockData.projects" v-bind:key="index" v-bind:project="mockData.projects[index]"/>
    </div>
  </main>
</template>

<script>

import Card from './Card.vue'
import mockDataJson from '../json/mock-data.json'
var mockData = mockDataJson

export default {
  name: 'MainContent',
  components: {
    Card
  },
  data: function () {
    return {
      mockData
    }
  }
}
</script>

<style scoped lang="scss">
.card-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
