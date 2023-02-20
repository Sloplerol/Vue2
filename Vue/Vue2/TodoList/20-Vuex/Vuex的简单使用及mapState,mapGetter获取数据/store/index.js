// 该文件用于创建store

import Vuex from 'vuex';

import Vue from 'vue';
//actions用来响应vc实例对象动作 所有业务逻辑都写到action里面
const actions = {
    // context里面存的是一个精简版的store 
    // 如果认为action里的某些无业务逻辑可以直接跳过
    // jia(context,value){
    //     context.commit('JIA',value);
    // },
    // jian(context,value){
    //     context.commit('JIAN',value);
    // },
    jiaOdd(context,value) {
        if(context.state.sum) {
            context.commit('JIA',value);
        }
    },
    jiaWait(context,value) {
        setTimeout(()=>{
            context.commit('JIA',value);
        },500)
    }
    

}
// mutations用来真正操作数据
const mutations = {
    // state是vuex包装完的数据
    JIA(state,value) {
        state.sum+=value;
    },
    JIAN(state,value) {
        state.sum-=value;
    },
    
}
// state用来存储数据
const state = {
    sum: 0,
    school: 'Zhicheng',
    student: 'zjj'
}
//配置getter项用于数据加工 
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//因为在使用store之前必须配置Vuex插件
Vue.use(Vuex);

//创建并不向外暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})