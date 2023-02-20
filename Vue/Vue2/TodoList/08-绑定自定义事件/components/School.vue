<template>
  <div class="demo">
    <h2 class="title">欢迎学习{{msg}}
        <div class="inner">你可真是可爱</div>
    </h2>
    <h2>我的学校叫做{{name}}</h2>
    <h2>我的学校地址是{{address}}</h2>
    <button @click="getSchName">点击获取学校的姓名</button>
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
    props: ['getName'],
    methods: {
        getSchName(){
            this.getName(this.name);
        }
    }
    
    
    
    
    
}
</script>

<style scoped>
    .demo {
        background-color: aqua;
        
    }
</style>