<template>
    <div>
        <School/>
        <Student/>
        <!-- 往props里传入属性名不能为特殊属性 ex:key ref -->
        <!-- <School ref="school"/>  -->
        <!-- 如果通过id来拿 拿到的是一个完整School的HTML元素标签 -->
        <!-- <h1 ref="damn">Moon is not a Sun</h1> -->
        <!-- <button @click="geth1">点击按钮获取上面的文字</button> -->
    </div>

</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
    name: 'App',
    components: {
        School,
        Student
    },
    methods: {
        geth1(){
            //可以通过ref来获取元素
            console.log(this,this.$refs.damn);
            //获取的是school这个组件的VC实例化对象
            console.log(this.$refs.school);
        }
    }
}
</script>
