//求和
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        JIA(state,value) {
            state.sum+=value;
        },
        JIAN(state,value) {
            state.sum-=value;
        },
    },
    state: {
        sum: 0,
        school: 'Zhicheng',
        student: 'zjj',
    },
    getters: {
        bigSum(state){
            return state.sum*10
        }
    }
}