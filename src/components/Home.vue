<template>
  <main>
    <app-header>
    </app-header>
    <app-about-me></app-about-me>
    <app-projects></app-projects>
  </main>
</template>

<script>
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';

export default {
  name: 'home',
  components: {
    'app-header': Header,
    'app-about-me': AboutMe,
    'app-projects': Projects,
  },
};
</script>

<style scoped>

</style>
