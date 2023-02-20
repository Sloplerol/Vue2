import Vue from 'vue';

import App from './App.vue';

import { Button,Row } from 'element-ui';


Vue.config.productionTip = false;

Vue.component('zjj-button', Button);
Vue.component('zjj-row', Row);



new Vue({
  el: '#app',
  render: h => h(App)
});




