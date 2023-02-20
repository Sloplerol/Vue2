<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
export default {
    name: 'About',
    beforeDestroy(){
        console.log('About组件即将被销毁');
    },
    mounted(){
        console.log('About组件已经挂载');
    }
}
</script>
