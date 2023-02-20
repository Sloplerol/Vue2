<template>
    <div class="tab">
        <h3>分类:{{title}}</h3>
        <slot :hobbies = 'hobby'></slot>
    </div>
</template>

<script>
export default {
    name: 'category',
    props: ['title'],
    data(){
      return {
        hobby: ['吃饭','睡觉','打游戏','敲代码'],
      }
    }
}
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        padding-left: 10px;
    }
    .tab {
        width: 200px;
        height: 300px;
        background-color: aqua;
    }
    h3 {
        text-align: center;
        background-color: aquamarine;
    }
</style>