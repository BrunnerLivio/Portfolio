<template>
  <header>
    <app-bubbles></app-bubbles>
    <div class="sunset"></div>
    <section class="row center-xs middle-xs introduction">
      <div>
        <div class="row center-xs">
          <div class="logo"></div>
        </div>
        <h1>
          Hi, I'm
          <span class="highlight">Livio</span>
        </h1>
      </div>
    </section>
    <section class="triangles"></section>
  </header>
</template>

<script>
import Bubbles from '@/components/Bubbles';

export default {
  name: 'header',
  components: {
    'app-bubbles': Bubbles,
  },
};

</script>

<style scoped lang="scss">
@import '../styles/main';
header {
  margin: 0;
  background: $primary;
  @include gradient-radial($primary, $primary_dark);
  width: 100%;
  position: relative;
  padding: 0;
  height: 100vh;
  overflow: hidden;
  .sunset {
    width: 100%;
    height: 50%;
    display: block;
    position: absolute;
    bottom: 0;
    @include gradient-vertical(rgba(255, 255, 255, 0), $accent);
    opacity: 0.38;
  }
}

.highlight {
  @include gradient-vertical($accent_light, $accent);
  color: $accent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

@-moz-document url-prefix() {
  /* Mozilla Only */
  .highlight {
    background-image: none !important;
  }
}

.introduction {
  height: 100%;
  width: 100%;
  top: -50px;
  position: relative;
  margin: 0;
}

.triangles {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 136px;
  background-size: cover;
  background-position: center;
  background-image: url(../../static/header/header_triangles_small.png);
  @media #{$break-sm} {
    background-image: url(../../static/header/header_triangles_medium.png);
    height: 180px;
  }
  @media #{$break-md} {
    background-image: url(../../static/header/header_triangles_large.png);
    height: 241px;
  }
}

.logo {
  background: url(../assets/logo.png);
  background-size: 100% 100%;
  position: relative;
  height: 75px;
  width: 75px;
  margin: 10px;
  @media #{$break-md} {
    height: 100px;
    width: 100px;
  }
}
</style>
