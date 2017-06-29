import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Impressum from '@/components/Impressum';
import Awesome from '@/components/Awesome';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: Home,
  }, {
    path: '/impressum',
    name: 'impressum',
    component: Impressum,
  }, {
    path: '/awesome',
    name: 'awesome',
    component: Awesome,
  }],
});
