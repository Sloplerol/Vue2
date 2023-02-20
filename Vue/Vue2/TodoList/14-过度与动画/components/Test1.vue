<template>
    <div>
        <button @click="isTrue=!isTrue">显示隐藏</button>
        <transition-group name="world" appear>
            <!-- 通过transition-group和key值来定义多个同步的元素 -->
            <div class="box1" v-show="!isTrue" key="1"></div>
            <div class="box1" v-show="isTrue" key="2"></div>
            <!-- 可以设置一来一去的效果 -->
        </transition-group>
        <!-- 以下这种能实现同步但是一来一去的效果无法实现 -->
        <transition name="world" appear>
            <div v-show="isTrue">
                <div class="box2"></div>
                <div class="box2"></div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'test1',
    data(){
        return {
            isTrue: true
        }
    }
}
</script>

<style>
    .box1 {
        width: 700px;
        height: 200px;
        background-color: aquamarine;
        
    }
    .box2 {
        width: 700px;
        height: 200px;
        background-color: pink;
    }
    /* 设置进入起点和离开终点的位置 */
    .world-enter,
    .world-leave-to {
        transform: translateX(-100%);
    }
    /* 进入过程和离开过程设置过度效果 */
    .world-enter-active,
    .world-leave-active {
        transition: all 0.4s linear;
    }
    /* 设置进入终点和离开起点的位置 */
    .world-enter-to,
    .world-leave {
        transform: translateX(0px);
    }

    
</style>