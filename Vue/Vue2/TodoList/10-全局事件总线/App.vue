<template>
    <div>
        <h1>学生的姓名是{{msg}}</h1>
        <School/>
        <Student/>
    </div>

</template>

<script>
import School from './components/School.vue'
//如果样式名矛盾按照引入组件的先后去决定遵循谁的样式
import Student from './components/Student.vue'
export default {
    name: 'App',
    components: {
        School,
        Student
    },
    data(){
        return {
            msg: 'zjj'
        }
    },
    
}
</script>
<style lang="less">
    /* App设置的样式别的子组件都可以直接使用所以尽量不要去给App样式添加scoped */
    .title {
        color: red;
        .inner {
            font-size: 40px;
        }
    }
</style>