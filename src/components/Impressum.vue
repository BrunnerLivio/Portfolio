<template>
  <main>
    <h1>Impressum</h1>
    <p>
      Herr
    </p>
    <p>
      Livio Bunner
    </p>
    <p>
      Hochwachtstrasse 45
    </p>
    <p>
      Steinhausen
    </p>
    <p>
      <a href="mailto:hello@brunnerliv.io">hello@brunnerliv.io</a>
    </p>
    <video src="/static/livio-dance.mov" autoplay loop></video>
    <router-link v-bind:to="'/'">Home</router-link>
  </main>
</template>

<script>
export default {
  name: 'impressum',
};
</script>

<style scoped>
body {
  background: white;
}

p {
  margin: 3px;
}

a {
  color: white;
}
</style>
