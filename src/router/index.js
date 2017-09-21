import Awesome from '@/components/Awesome';
import Home from '@/components/Home';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/awesome',
    name: 'awesome',
    component: Awesome,
  }],
});
