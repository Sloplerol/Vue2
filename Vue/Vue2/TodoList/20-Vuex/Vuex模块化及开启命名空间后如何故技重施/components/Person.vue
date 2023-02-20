<template>
  <div>
        <h1>你好兄弟会</h1>
        <input type="text" placeholder="请输入内容" v-model="name">
        
        <button @click="add">Add</button>
        <button @click="addWang">添加一个姓王的人</button>
        <button @click="addServe">随机添加一个人</button>
        <h3>列表中第一个人的姓名为{{firstPersonName}}</h3>
        <h2>上方组件的求和为{{sum}}</h2>
        <ul>
            <li v-for="p in personList" :key="p.id">{{p.name}}</li>
            

        </ul>
        
  </div>
</template>

<script>
import {nanoid} from 'nanoid';
export default {
    name: 'Person',
    data(){
        return {
            name: ''
        }
    },
    computed: {
        personList(){
            return this.$store.state.Managerabout.personList
        },
        sum(){
            return this.$store.state.Adderabout.sum
        },
        firstPersonName(){
            // getter里面包含的对象名为Managerabout/firstPersonName 
            // return this.$store.getters.Managerabout.firstPersonName
            // 因为点和/不能共存 所以需要索引到对象属性名来获取里面的值
            return this.$store.getters['Managerabout/firstPersonName'];
        }

    },
    methods: {
        add(){
            let personObj = {id:nanoid(),name:this.name};
            // /告诉Vuex是在ManagerAbout Mutations下的ADDPERSON方法
            this.$store.commit('Managerabout/ADDPERSON',personObj);
            this.name = ''
        },
        addWang(){
            let personObj = {id:nanoid(),name:this.name};
            this.$store.dispatch('Managerabout/Personwang',personObj);
            this.name = '';
        },
        addServe(){
            this.$store.dispatch('Managerabout/Sendperson');
            this.name = '';
        }
        
    }

}
</script>
