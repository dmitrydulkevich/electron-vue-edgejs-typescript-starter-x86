// Make sure to register before importing any components
// https://github.com/vuejs/vue-class-component#adding-custom-hooks
import './register-hooks';

import Vue from 'vue';
import app from '@/components/app.vue';

// plugins
import '@/plugins/bootstrap-vue';

import router from '@/router';
import store from '@/store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(app),
}).$mount('#app');
