<template>
  <div class="school">
    <h2>欢迎学习{{msg}}</h2>
    <h2>我的学校叫做{{name}}</h2>
    <h2>我的学校地址是{{address}}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return {
        msg: 'Vue',
        name: 'Zhicheng',
        address: 'shangjai'
    }
    },
    
    
    
    
}
</script>

<style>
    .school {
        background-color: aqua;
    }
</style>