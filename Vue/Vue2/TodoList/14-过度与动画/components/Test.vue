<template>
    <div>
        <button @click="isTrue=!isTrue">点击隐藏div</button>
        <!-- appear初始为激活进入动画 -->
        <transition name="hello" appear>
            <!-- 如果有name那么过度动画的第一个是该名字 -->
            <div class="box" v-show="isTrue"></div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'test',
    data(){
        return {
            isTrue:true
        }
    }
}
</script>

<style>
    .box {
        width: 400px;
        height: 100px;
        background-color: aqua;
    }
    .hello-enter-active {
        animation: move 0.5s linear;
    }
    .hello-leave-active {
        animation: move 0.5s linear reverse;
    }
    @keyframes move {
        from {
            transform: translateX(-100%);
        }to {
            transform: translateX(0px);
        }
    }
</style>