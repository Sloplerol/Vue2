<template>
  <div class="school">
    <h2>欢迎学习{{msg}}</h2>
    <h2 @click="appearName">我的学校叫做{{name}}</h2>
    <h2>我的学校地址是{{address}}</h2>
  </div>
</template>

<script>
import {mixin} from '../mixin';
export default {
    name: 'School',
    data(){
        console.log(this);
        return {
        msg: 'Vue',
        name: 'Zhicheng',
        address: 'shangjai'
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