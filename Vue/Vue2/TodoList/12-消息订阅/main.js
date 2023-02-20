import Vue from 'vue';

import App from './App.vue';



Vue.config.productionTip = false;

// 给Vue原型对象上绑定属性相当于是给每一个VC实例对象上去绑定属性 一种方法
// const demo = Vue.extend({});
// Vue.prototype.x = new demo();

new Vue({
    el: '#app',
    render: h=>h(App),
    //在所有事情发生之前往Vue实例对象身上挂载vm
    
})