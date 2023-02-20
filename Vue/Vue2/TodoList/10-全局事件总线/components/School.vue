<template>
  <div class="demo">
    <h2 class="title">欢迎学习{{msg}}
        <div class="inner">你可真是可爱</div>
    </h2>
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
    mounted(){
        this.$bus.$on('hello',(data)=>{
            console.log('hello',data);
        })
    }

}
</script>

<style scoped>
    .demo {
        background-color: aqua;
        
    }
</style>