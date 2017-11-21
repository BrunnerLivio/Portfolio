import 'vanilla-tilt';
import 'flexboxgrid/css/flexboxgrid.css';
import 'normalize.css/normalize.css';
import 'font-mfizz/dist/font-mfizz.css';

import VueScrollTo from 'vue-scrollto';
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.use(VueScrollTo, {
  offset: -40,
});

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
