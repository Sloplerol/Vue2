// 该文件用于创建store

import Vuex from 'vuex';

import Vue from 'vue';

//vuex模块话

import Adder from './Adder';

import Manager from './Manager';



//因为在使用store之前必须配置Vuex插件
Vue.use(Vuex);

//创建并向外暴露store
export default new Vuex.Store({
    // 利用模块化去使用store里的两个类 这两个类里分别存储不同的数据
    modules: {
        Adderabout: Adder,
        Managerabout: Manager
   }

})