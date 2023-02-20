<template>
  <div class="demo">
    <h2>欢迎学习{{msg}}</h2>
    <h2>我叫做{{name}}</h2>
    <h2>我今年{{age}}</h2>
    <button @click="sayName">将Student组件里的学生名给到学校</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';
export default {
    name: 'Student',
    data(){
        return {
        msg: 'Vue',
        name: 'zjj',
        age: 30,
    }
    },
    methods: {
      sayName(){
          pubsub.publish('hello',this.name);
      },
      // 在利用完this.$bus解绑当前组件所用到的事件
      
    }
    
    
}
</script>

<style scoped>
    .demo {
        background-color: skyblue;
    }
</style>