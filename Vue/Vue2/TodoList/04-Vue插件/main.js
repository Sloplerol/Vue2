import Vue from 'vue';

import App from './App.vue';

import plugin from './plugin'


Vue.config.productionTip = false;


Vue.use(plugin,1,2,3);

new Vue({
    el: '#app',
    render: h=>h(App),
})