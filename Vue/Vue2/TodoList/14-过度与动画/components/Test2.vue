<template>
    <div>
        <button @click="isTrue = !isTrue">点击显示/隐藏</button>
        <transition-group 
        appear
        name="animate__animated animate__bounce" 
        enter-active-class="animate__swing" 
        leave-active-class="animate__backOutRight"
        >
            <h1 v-show="isTrue" key="1"></h1>
            
        </transition-group>
    </div>
</template>

<script>
import 'animate.css';
export default {
    name: 'test2',
    data(){
        return {
            isTrue: true
        }
    }
}
</script>
<style>
    h1 {
        width: 200px;
        height: 50px;
        background-color: yellow;
    }
</style>
