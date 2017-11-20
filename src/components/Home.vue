<template>
  <main>
    <app-header></app-header>
    <app-navigation></app-navigation>
    <app-about-me id="about-me"></app-about-me>
    <app-projects id="projects"></app-projects>
    <app-contact id="contact"></app-contact>
  </main>
</template>

<script>
import Header from '@/components/Header';
import AboutMe from '@/components/AboutMe';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default {
  name: 'home',
  components: {
    'app-header': Header,
    'app-about-me': AboutMe,
    'app-projects': Projects,
    'app-contact': Contact,
    'app-navigation': Navigation,
  },
};
</script>

<style scoped>

</style>
