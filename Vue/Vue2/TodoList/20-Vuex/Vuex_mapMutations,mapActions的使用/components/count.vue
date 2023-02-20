<template>
    <div>
        <h1>当前和为{{sum}}</h1>
        <h1>放大后的结果为{{bigSum}}</h1>
        <h2>我在学校{{school}} 是{{student}}</h2>
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
        // add(){
        //     this.$store.commit('JIA',this.n);
        // },
        // decrease(){
        //     this.$store.commit('JIAN',this.n);
        // },
        //借助mapMutation生成方法 联系Mutation
        ...mapMutations({add:'JIA',decrease:'JIAN'}),
        // 上面的代码相当于是
        // add(value){
        //     // 因为add本来没参数 value默认值是event
        //     this.$store.commit('JIA',value);
        // },
        // addodd(){
        //     this.$store.dispatch('jiaOdd',this.n);
            
        // },
        // addwait(){
        //     this.$store.dispatch('jiaWait',this.n);
        // }
        //联系actions
        ...mapActions({addodd:'jiaOdd',addwait:'jiaWait'})
    },
    computed: {
        // 计算属性进行编写
        // he(){
        //     return this.$store.getters.sum
        // },
        // xuesheng(){
        //     return this.$store.getters.student
        // },
        // xuexiao(){
        //     return this.$store.getters.school
        // },
        // mapState读取数据 简化return时重复的代码 通过扩展运算符来展开对象
        // ...mapState({'he':'sum','xuesheng':'student','xuexiao':'school'}),//对象写法 当属性名和数据名一致不能简写 因为值里的不是变量
        // 当计算属性的名和获取state数据里的名一致 数组写法简化代码
        // sum(){
        //     return this.$store.getters.sum
        // },
        // student(){
        //     return this.$store.getters.student
        // },
        // school(){
        //     return this.$store.getters.school
        // },
        ...mapState(['sum','student','school']),
        // bigSum(){
        //     return this.$store.getters.bigSum
        // },
        ...mapGetters(['bigSum'])
        
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

