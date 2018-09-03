<template>
  <div class="title-bar">
    <a class="app-title" href="#navigation">
      <svg class="time-logo" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path class="stroke" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path class="stroke" d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
      <span class="app-name">{{ title }}</span>
    </a>
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
  box-shadow: 0px 2px 2px 2px rgba($grayDark, .15);

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
