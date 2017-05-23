<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
@import 'styles/main';


h2,
h3,
h4,
h5,
h6,
a,
span,
p,
blockquote {
  font-family: $primary_font;
  text-align: left;
}

h1 {
  font-family: $accent_font;
  color: white;
  font-weight: normal;
  margin: 0;
  font-size: 2.5em;
  @media #{$break-md} {
    font-size: 4em;
  }
  @include poly-fluid-sizing('font-size', (576px: 45px, 320px: 30px, 992px: 60px));
}


h2 {
  font-weight: 300;
  color: $header-text-color;
  @include poly-fluid-sizing('font-size', (576px: 22px, 320px: 18px, 992px: 30px));
}

h3 {
  color: white;
  font-weight: lighter;
  @include poly-fluid-sizing('font-size', (576px: 22px, 320px: 18px, 992px: 30px));
}

p {
  color: $body-text-color;
  line-height: 1.6;
  @include poly-fluid-sizing('font-size', (576px: 18px, 320px: 14px, 992px: 20px));
}

blockquote {
  font-weight: lighter;
  font-style: italic;
  color: $quote-color;
  text-align: center;
  margin: 10px;
  @include poly-fluid-sizing('font-size', (576px: 24px, 320px: 20px, 992px: 26px));
}
</style>
