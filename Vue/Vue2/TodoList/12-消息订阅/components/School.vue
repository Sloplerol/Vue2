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
import pubsub from 'pubsub-js';
export default {
    name: 'School',
    data(){
        return {
        msg: 'Vue',
        name: 'Zhicheng',
        address: 'shangjai'
    }
    },
    methods: {
        // 消息订阅回调函数两个参数分别是消息的名字和传递数据的内容
        demo(msgName,con){
            console.log('消息被发布了,消息的名字是'+msgName,'发布的内容是'+con);
        }
    },
    mounted(){
        
        this.pubid = pubsub.subscribe('hello',this.demo);
    },
    beforeDestroy(){
        pubsub.unsubscribe(this.pubid);
    }

}
</script>

<style scoped>
    .demo {
        background-color: aqua;
        
    }
</style>