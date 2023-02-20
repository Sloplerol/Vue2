import Vue from 'vue';

import App from './App.vue';
//引入插件
import vr from 'vue-resource';

Vue.config.productionTip = false;

// 使用插件 
Vue.use(vr);

new Vue({
    el: '#app',
    render: h=>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})