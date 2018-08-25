<template>
  <main class="main-content">
    <div class="card-group">
      <Card/>
    </div>
  </main>
</template>

<script>

import Card from './Card.vue'

export default {
  name: 'MainContent',
  components: {
    Card
  }
}
</script>
