<template>
      <ul>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
      </ul>
</template>

<script>
export default {
    name: 'News',
    // 如果想要不展示的区域里的数据不被销毁 需要到展示该区域的外层包裹一层keep-alive标签
    beforeDestroy(){
        console.log('destroying');
    }
}
</script>

<style>

</style>