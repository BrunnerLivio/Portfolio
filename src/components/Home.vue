<template>
  <main>
    <app-header>
    </app-header>
    <app-about-me></app-about-me>
    <app-projects></app-projects>
    <app-contact></app-contact>
  </main>
</template>

<script>
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default {
  name: 'home',
  components: {
    'app-header': Header,
    'app-about-me': AboutMe,
    'app-projects': Projects,
    'app-contact': Contact,
  },
};
</script>

<style scoped>

</style>
