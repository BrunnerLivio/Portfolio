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
  font-size: 6em;
  color: white;
  font-weight: normal;
  margin: 0;
  @media #{$break-md} {
    font-size: 4em;
  }
}


h2 {
  font-weight: 400;
  font-size: 2.5em;
  color: $text-color;
  @media #{$break-md} {
    font-size: 1.8em;
  }
}

p {
  color: $text-color;
  font-size: 1.8em;
  line-height: 1.4em;
  @media #{$break-md} {
    font-size: 1.25em;
  }
}

blockquote {
  font-size: 2.2em;
  font-weight: lighter;
  font-style: italic;
  color: $quote-color;
  text-align: center;
  margin: 80px;
  @media #{$break-md} {
    font-size: 1.6em;
  }
}
</style>
