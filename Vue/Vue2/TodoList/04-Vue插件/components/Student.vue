<template>
  <div class="school">
    <h2>欢迎学习{{msg}}</h2>
    <h2>我叫做{{name}}</h2>
    <h2>我今年{{age}}</h2>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return {
        msg: 'Vue',
        name: 'zjj',
        age: 30,
    }
    },
    
    
    
    
    
}
</script>

<style>
    .school {
        background-color: aqua;
    }
</style>