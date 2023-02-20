<template>
    <div>
        <h2>我是Home的内容</h2>
    </div>
</template>

<script>
export default {
    name: 'Home',
    beforeDestroy(){
        console.log('Home组件即将被销毁');
    },
    mounted(){
        console.log('Home组件已经挂载');
    }
}
</script>
