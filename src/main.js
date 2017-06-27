// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import 'vanilla-tilt';
import 'flexboxgrid/css/flexboxgrid.css';
import 'normalize.css/normalize.css';
import 'font-mfizz/font/font-mfizz.css';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
