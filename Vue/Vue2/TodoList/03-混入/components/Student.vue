<template>
  <div class="school">
    <h2>欢迎学习{{msg}}</h2>
    <h2 @click="appearName">我叫做{{name}}</h2>
    <h2>我今年{{age}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin';
export default {
    name: 'Student',
    data(){
        // console.log(this);
        return {
        msg: 'Vue',
        name: 'zjj',
        age: 30,
        x: 300
        // 混入数据的时候如果数据重复以当前数据为主
    }
    },
    
    mixins: [mixin]
    
    
    
    
}
</script>

<style>
    .school {
        background-color: aqua;
    }
</style>