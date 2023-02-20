import axios from 'axios';
import {nanoid} from 'nanoid';
export default {
    namespaced: true,
    actions: {
        Personwang(context,value){
            if(value.name.indexOf('王')===0) {
                context.commit('ADDPERSON',value);
            }else {
                alert('用户必须姓王');
            }
        },
        // 向服务器发送请求
        Sendperson(context){
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                request=>{
                    context.commit('ADDPERSON',{id:nanoid(),name:request.data});
                },
                error=>{
                    alert(error.message);
                }
            )
        }
    },
    mutations: {
        ADDPERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001',name:'zjj',age:28}
        ]
    },
    getters: {
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}