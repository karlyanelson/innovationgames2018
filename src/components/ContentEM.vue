<template>
  <div class="">
    <nav class="pmr-navbar">
      <ul class="nav-group">
        <li v-for="tab in tabs"
        v-bind:key="tab"
        class="nav-item"
        v-on:click="currentTab = tab">
          <a v-bind:class="[{ active: currentTab === tab }]" href="#">{{ tab }}</a>
        </li>
      </ul>
    </nav>
    <component v-bind:is="currentTabComponent" />
  </div>
</template>

<script>
import EMPageHours from './EMPageHours.vue'
import EMPageAdmin from './EMPageAdmin.vue'

export default {
  name: 'ContentEM',
  components: {
    EMPageHours,
    EMPageAdmin
  },
  data: function () {
    return {
      currentTab: 'Review Hours',
      tabs: ['Review Hours', 'Admin']
    }
  },
  computed: {
    currentTabComponent: function () {
      if (this.currentTab === 'Review Hours') {
        return (EMPageHours)
      } else {
        return EMPageAdmin
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pmr-navbar {
  width: 100%;
  height: $navbarHeight;
  font-size: $md;
  background-color: $navbarColor;
  display: flex;
  justify-content: flex-start;
  box-shadow: 0px 2px 2px 2px rgba($grayDark, .15);
  border-bottom: 1px solid $blueDark;

  .nav-group,
  .nav-input {
    @include reset-list();
    display: flex;
    justify-content: flex-start;

    &.right {
      margin-left: auto;
    }
  }

  .nav-item {
    > a {
      transition: all 120ms ease;
      padding: 10px 25px;
      text-decoration: none;
      color: $white;
      display: flex;
      align-items: center;
      height: 100%;

      &:hover {
        background: rgba(0,0,0,.18);
      }

      &.active {
        background: rgba(0,0,0,.23);
        box-shadow: inset 0 0 2px 2px rgba(0,0,0,.15);
      }
    }
  }

  .nav-input {
    .input-addon {
      padding: 0 $sm;
      min-height: 43px;
      width: $lg;
      color: rgba(255,255,255,.7);
      background-color: rgba(0,0,0,.18);
      transition: all 120ms ease;
      order: -1;

      &:before {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    input {
      order: 0;
      min-height: 43px;
      border: 0;
      color: $white;
      @include placeholder(rgba(255,255,255,.7));
      transition: all 120ms ease;
      background-color: rgba(0,0,0,.18);

      &:focus {
        background-color: rgba(0,0,0,.23);
        outline: none;

        & + .input-addon {
          color: $white;
          background-color: rgba(0,0,0,.23);
        }
      }
    }
  }
}

</style>
