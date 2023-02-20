import Vue from 'vue';

import App from './App.vue';

//引入ElementUI组件库
// import ElementUI from 'element-ui';
//实现按需引入 想要那个组件标签就引入哪个
import { Button,Row } from 'element-ui';
//引入ElementUI所有的样式
// import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

Vue.component('fir-button', Button);
Vue.component('fir-row',Row);

// Vue.use(ElementUI);

new Vue({
    el: '#app',
    render: h=>h(App),
    
})