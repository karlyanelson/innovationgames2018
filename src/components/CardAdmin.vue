<template>
  <div class="card">
    <div class="card-header">
      <h2>{{ customer.name }}</h2>
      <Button btnType="default" text="Edit"/>
    </div>

    <div class="project-grid">
      <div class="project-grid-header">
        <span class="project-col-name">Assigned Projects</span>
        <span class="project-col-approval">Enable Hours Approval</span>
      </div>
      <div class="project-grid-row" v-for="(project, index) in customer.projects" v-bind:key="index">
        <span class="project-col-name">
          <span class="project-id">Project #{{ project.id }}</span>
          <span class="project-title">{{ project.title }}</span>
        </span>
        <span class="project-col-approval">
          <Toggle v-bind:value="customer.name + index"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import Toggle from './Toggle.vue'
export default {
  name: 'CardAdmin',
  components: {
    Button,
    Toggle
  },
  props: {
    customer: Object
  }
}
</script>

<style scoped lang="scss">
h2 {
  margin-top: 0;
}

.card {
  background: $white;
  max-width: 80rem;
  width: 100%;
  box-shadow: 0px 2px 2px 2px rgba($grayDark, .15);
  padding: $lg;
  margin-bottom: $lg;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: $md;

  h2 {
    margin: 0;
  }
}

.project-grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;

  &-header,
  &-row {
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto ;
  }

  &-header {
    border-bottom: 1px solid $grayVeryLight;
    text-transform: uppercase;
    letter-spacing: .05em;
    padding: $sm 0;
  }

  .project-id {
    font-weight: 800;
    margin-right: .25rem;
  }

  &-row {
    padding: $md 0;
    border-bottom: 1px solid $graySuperLight;
    align-items: center;

    &:last-child {
      border: none;
    }
  }
}

.project-id,
.project-title {
  font-size: 1rem;
}
</style>
