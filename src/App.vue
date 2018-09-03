<template>
  <div id="app" v-bind:class="[{ appcustomer: currentTab === 'Customer' }, { apppartner: currentTab === 'Partner' }, { appem: currentTab === 'Engineering Manager' }]">
    <div class="title-bar">
      <a class="app-title" href="#navigation">
        <svg class="time-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path class="stroke" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
            <path class="stroke" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
        <span class="app-name">TimeX Partner Portal</span>
      </a>
      <nav>
        <button
          v-for="tab in tabs"
          v-bind:key="tab"
          v-bind:class="['nav-tab', { active: currentTab === tab }]"
          v-on:click="currentTab = tab"
        >{{ tab }}</button>
      </nav>
    </div>
    <component v-bind:is="currentTabComponent" />
  </div>
</template>

<script>
import ContentCustomer from './components/ContentCustomer.vue'
import ContentPartner from './components/ContentPartner.vue'
import ContentEM from './components/ContentEM.vue'

export default {
  name: 'app',
  components: {
    ContentCustomer,
    ContentPartner,
    ContentEM
  },
  data: function () {
    return {
      currentTab: 'Customer',
      tabs: ['Customer', 'Partner', 'Engineering Manager']
    }
  },
  computed: {
    currentTabComponent: function () {
      if (this.currentTab === 'Customer') {
        return (ContentCustomer)
      } if (this.currentTab === 'Partner') {
        return (ContentPartner)
      } else {
        return (ContentEM)
      }
    }
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/fonts/proximanova-light-webfont.eot');
  src: url('./assets/fonts/proximanova-light-webfont.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/proximanova-light-webfont.woff') format('woff'),
  url('./assets/fonts/proximanova-light-webfont.ttf') format('truetype'),
  url('./assets/fonts/proximanova-light-webfont.svg#proxima_novalight') format('svg');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/fonts/proximanova-regular-webfont.eot');
  src: url('./assets/fonts/proximanova-regular-webfont.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/proximanova-regular-webfont.woff') format('woff'),
  url('./assets/fonts/proximanova-regular-webfont.ttf') format('truetype'),
  url('./assets/fonts/proximanova-regular-webfont.svg#proxima_nova_rgregular') format('svg');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/fonts/proximanova-semibold-webfont.eot');
  src: url('./assets/fonts/proximanova-semibold-webfont.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/proximanova-semibold-webfont.woff') format('woff'),
  url('./assets/fonts/proximanova-semibold-webfont.ttf') format('truetype'),
  url('./assets/fonts/proximanova-semibold-webfont.svg#proxima_nova_rgbold') format('svg');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Proxima Nova';
  src: url('./assets/fonts/proximanova-bold-webfont.eot');
  src: url('./assets/fonts/proximanova-bold-webfont.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/proximanova-bold-webfont.woff') format('woff'),
  url('./assets/fonts/proximanova-bold-webfont.ttf') format('truetype'),
  url('./assets/fonts/proximanova-bold-webfont.svg#proxima_nova_rgbold') format('svg');
  font-weight: 700;
  font-style: normal;
}

#app {
  color: $textColorMain;
  font-family: 'Proxima Nova', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-style: normal;
  @include font-smoothing();
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  .main-content {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; /* Lets it scroll lazy */
    padding: $lg $md;
  }

  &.appcustomer,
  &.apppartner {
    grid-template-rows: $titleBarHeight auto;

    .title-bar{
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .main-content {
      grid-row-start: 2;
      height: calc(100vh - #{$titleBarHeight});
      padding: $lg $md;
    }
  }

  &.appem {
    grid-template-rows: $titleBarHeight $navbarHeight auto;

    .title-bar{
      grid-row-start: 1;
      grid-row-end: 2;
    }

    .pmr-navbar {
      grid-row-start: 2;
      grid-row-end: 3;
    }

    .main-content {
      grid-row-start: 3;
      height: calc(100vh - (#{$titleBarHeight} + #{$navbarHeight}));
      padding: $lg $md;
    }
  }
}

.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: $titleBarHeight;
  padding: 0 $md;
  background: $white;
  z-index: $zTitleBar;
  box-shadow: 0px 2px 2px 2px rgba($grayDark, .15);
  grid-row-start: 1;
  grid-row-end: 2;

  .app-title {
    color: $textColorMain;
    text-decoration: none;
  }

  .time-logo {
    margin-right: $sm;
  }

  .wwt-logo,
  .time-logo {
    height: 29px;
  }

  .wwt-logo,
  .time-logo,
  .app-name {
    vertical-align: middle;
  }

  .app-name {
    color: $grayMid;
    font-size: 18px;
  }

  nav {
    display: flex;
  }

  .nav-tab {
    border: 2px solid transparent;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
    color: $grayMid;
    padding: $sm 0;
    transition: 300ms all ease;
    position: relative;
    margin: 0 $sm;
    background: transparent;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      width: 0%;
      height: 2px;
      transition: 300ms all ease;
    }

    &:hover,
    &:focus,
    &.active{
      color: $wwtBlue;

      &:after {
        background-color: $wwtBlue;
        width: 100%;
      }
    }
  }
}
</style>
