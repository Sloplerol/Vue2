<template>
      <ul>
        <h1 :style={opacity}>欢迎学习Vue</h1>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
      </ul>
</template>

<script>
export default {
    name: 'News',
    // 如果想要不展示的区域里的数据不被销毁 需要到展示该区域的外层包裹一层keep-alive标签
    data(){
        return{
            opacity: 1
        }
    },
    // mounted() {
    //     //在调用mounted函数的时候this指向为vm
    //     console.log('mounted',this);
        // this.timer = setInterval(()=>{
        //     this.opacity -= 0.01;
        //     if (this.opacity <= 0) this.opacity = 1
        // }, 16)
    // },
    // beforeDestroy(){{
        // clearInterval(this.timer);
    //     console.log('News即将被销毁');
    // }}
    // 两个声明周期钩子
    activated(){
        // 当被激活的时候
        this.timer = setInterval(()=>{
            // console.log('hello world');
            this.opacity -= 0.01;
            if (this.opacity <= 0) this.opacity = 1
        }, 16)
    },
    deactivated(){
        // 当失活的时候
        clearInterval(this.timer);
        
    }

}
</script>

<style>

</style>