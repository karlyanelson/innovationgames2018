<template>
  <div class="title-bar">
    <a class="app-title" href="#navigation">
      <!-- <svg id="wwtLogo" class="wwt-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 326.9 176.2" enable-background="new 0 0 326.9 176.2" xml:space="preserve"><polyline points="0,0 100.4,119 241.4,0.1 182,0 148.6,28.1 125.1,0 72.9,0 117.8,54 105,64.7 51.2,0 0,0" class="style0"/><polyline points="236.3,26.5 260.8,55.7 326.9,0 267.1,0 236.3,26.5" class="style0"/><polyline points="225.4,35.7 249.8,64.9 208.5,99.5 272.7,176.1 220.7,176.2 177.7,125.4 135.3,161 110.8,131.9 225.4,35.7" class="style1"/></svg> -->
      <svg class="time-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path class="stroke" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path class="stroke" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
      <span class="app-name">{{ title }}</span>
    </a>
    <span class="user">Customer</span>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
.title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: $titleBarHeight;
  padding: 0 $md;
  background: $white;
  z-index: $zTitleBar;
  box-shadow: 0px 2px 2px 2px $graySuperLight;

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
}
</style>
