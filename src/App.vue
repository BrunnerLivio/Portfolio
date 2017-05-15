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
}


h2 {
  font-weight: 400;
  color: $text-color;
  font-size: 1em;
  @media #{$break-md} {
    font-size: 1.8em;
  }
}

p {
  color: $text-color;
  font-size: 0.8em;
  @media #{$break-md} {
    font-size: 1.25em;
  }
}

blockquote {
  font-weight: lighter;
  font-style: italic;
  color: $quote-color;
  text-align: center;
  margin: 10px;
  font-size: 1em;
  @media #{$break-md} {
    font-size: 1.6em;
    margin: 80px;
  }
}
</style>
