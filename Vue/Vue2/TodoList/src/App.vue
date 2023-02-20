<template>
  <div>
    <h1>a: {{person.a}}</h1>
    <h1 v-show="person.b">b: {{person.b}}</h1>
    <h1 v-show="person.c">c: {{person.c}}</h1>
    <h1>{{person.hobby}}</h1>
    <button @click="changeHobby">修改一个爱好</button>
    <button @click="addC">点击添加c</button>
    <button @click="deleteC">点击删除b</button>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
    name: 'App',
    data() {
      return {
        person: {
          a: 1,
          b: 2,
          hobby: ['吃饭','睡觉','打游戏']
        }
      }
    },
    methods: {
      addC(){
        // this.$set(this.person,'c',3);
        Vue.set(this.person,'c','3');
      },
      deleteC(){
        // this.$delete(this.person,'b');
        Vue.delete(this.person,'b')
      },
      changeHobby(){
        this.person.hobby.splice(0,1,'干饭');
        // this.$set(this.person.hobby,0,'伞兵')
        
      }
    }
  };
</script>



