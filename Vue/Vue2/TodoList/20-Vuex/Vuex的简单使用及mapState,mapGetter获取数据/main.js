import Vue from 'vue';

import App from './App.vue';
//引入插件
import vr from 'vue-resource';

import store from './store/index'

Vue.config.productionTip = false;

// 使用插件 
Vue.use(vr);


new Vue({
    el: '#app',
    render: h=>h(App),
    store,
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})