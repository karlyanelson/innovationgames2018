<template>
  <main class="main-content">
    <div class="customer-card-group">
      <div class="customer-card-group-header">
        <h1>Customers</h1>
        <Button btnType="primary" text="Add New Customer"/>
      </div>
      <CardAdmin v-for="(customer, index) in mockData.admin.customers" v-bind:key="index" v-bind:customer="customer"/>
    </div>
    <div class="partner-card-group">
      <div class="partner-card-group-header">
        <h1>Partners</h1>
        <Button btnType="primary" text="Add New Partner"/>
      </div>
      <CardAdmin v-for="(partner, index) in mockData.admin.partners" v-bind:key="index" v-bind:customer="partner"/>
    </div>
  </main>
</template>

<script>
import Button from './Button.vue'
import CardAdmin from './CardAdmin.vue'
import mockDataJson from '../json/em-mock-data.json'
var mockData = mockDataJson

export default {
  name: 'EMPageAdmin',
  components: {
    Button,
    CardAdmin
  },
  data: function () {
    return {
      mockData
    }
  }
}
</script>

<style scoped lang="scss">
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.customer-card-group-header,
.partner-card-group-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1,
  button {
    flex: 0 0 auto;
  }
}

.customer-card-group,
.partner-card-group {
  width: 100%;
  max-width: 80rem;
}

.customer-card-group {
  margin-bottom: $xl;
}
</style>
