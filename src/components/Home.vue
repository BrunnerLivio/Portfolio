<template>
  <main>
    <app-header>
    </app-header>
    <app-about-me></app-about-me>
  </main>
</template>

<script>
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';

export default {
  name: 'home',
  components: {
    'app-header': Header,
    'app-about-me': AboutMe,
  },
  data() { },
};
</script>

<style scoped>

</style>
