<template>
    <div class="tab">
        <h3>分类:{{title}}</h3>
        <!-- 由于插槽有名字需要在组件标签里指明插槽 -->
        <slot name="center"></slot>
        <slot name="bottom"></slot>
        <!-- slot告诉Vue解析时候组件标签里的内容放哪 -->
        <!-- <ul>
            <li v-for="(list,index) in ListData" :key="index">{{list}}</li>
        </ul> -->
    </div>
</template>

<script>
export default {
    name: 'category',
    props: ['title']
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