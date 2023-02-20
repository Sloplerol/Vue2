<template>
  <div class="school">
    <h2>我的学校叫做{{name}}</h2>
    <h2>他位于{{address}}</h2>
  </div>
</template>

<script>
export default {
    name: 'School',
    data(){
        return {
        name: 'Zhicheng',
        address: 'dalian'
    }
    }
}
</script>

<style>
    .school {
        background-color: aqua;
    }
</style>