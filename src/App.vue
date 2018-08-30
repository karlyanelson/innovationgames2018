<template>
  <div id="app">
    <TitleBar title="TimeX Partner Portal"/>
    <MainContent/>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue'
import MainContent from './components/MainContent.vue'

export default {
  name: 'app',
  components: {
    TitleBar,
    MainContent
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
}
</style>
