<template>
  <header>
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
    <section class="triangles">
    </section>
  </header>
</template>

<script>
export default {
  name: 'header',
};

</script>

<style scoped lang="scss">
@import '../styles/main';

header {
  margin: 0;
  background: $primary;
  @include gradient-radial($primary, $primary_dark);
  width: 100%;
  height: 80vh;
  position: relative;
  padding: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.highlight {
  @include gradient-vertical($accent_light, $accent);
  color: $accent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
}

.introduction {
  height: 100%;
  width: 100%;
  top: -50px;
  position: relative;
}

.triangles {
  position: absolute;
  bottom: 0;
  left: 0;
  background: url(../assets/header_triangles.png);
  background-size: 100% 100%;
  height: 200px;
  width: 100%;
}

.logo {
  background: url(../assets/logo.png);
  background-size: 100% 100%;
  position: relative;
  width: 150px;
  height: 150px;
  @media #{$break-md} {
    width: 100px;
    height: 100px;
  }
}
</style>
