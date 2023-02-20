<template>
    <div>
        <h1>当前和为{{sum}}</h1>
        <h1>放大后的结果为{{bigSum}}</h1>
        <h2>我在学校{{school}} 是{{student}}</h2>
        <h3>下方组件的人员{{personList.length}}个</h3>
        <select v-model.number="n"> 
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <!-- 通过传递参数的形式防止参数为event -->
        <button @click="add(n)">+</button>
        <button @click="decrease(n)">-</button>
        <button @click="addodd(n)">当当前为奇数时再加</button>
        <button @click="addwait(n)">过一会再加</button>

    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    name: 'count',
    data(){
        return {
            n: 1
        }
    },
    methods: {
        
        ...mapMutations('Adderabout',{add:'JIA',decrease:'JIAN'}),
        
        ...mapActions('Adderabout',{addodd:'jiaOdd',addwait:'jiaWait'})
    },
    computed: {
        
        // ...mapState(['Adderabout','Managerabout']), //如果不想一个个写点
        ...mapState('Adderabout',['sum','school','student']), //需要将Adderabout开启命名空间
        
        ...mapState('Managerabout',['personList']),

        ...mapGetters('Adderabout',['bigSum'])
        
    },
    mounted(){
        // const x = mapState({student:'name'},{school:'school'},{sum:'sum'});
        // console.log(x);
        // mapState返回结果是一个对象
    }
    
}
</script>
<style>
    button {
        margin: 0 5px;
    }
</style>

