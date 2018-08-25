<template>
  <main class="main-content">
    <div class="card-group">
      <Card :project="mockData.customer.project" v-for="(project, index) in mockData.customer" :key="index" />
    </div>
  </main>
</template>

<script>

import Card from './Card.vue'
import mockDataJson from '../mock-data.json'
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
