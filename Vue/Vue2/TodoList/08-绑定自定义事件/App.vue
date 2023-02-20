<template>
    <div>
        <h1>学生的姓名是{{studentName}}</h1>
        <!-- 子组件通过函数去调用父组件 -->
        <School :getName="getName"/>
        <!-- 父组件给子组件绑定自定义事件(1) -->
        <!-- <Student v-on:bangding="demo"/> -->
        <!-- <Student @bangding="demo"/> -->
        <Student @bindevent="trial"></Student>
        <!-- <Student @bangding.once="demo"></Student> -->
        <!-- 父组件给子组件绑定自定义事件(2) -->
        
        <Student ref="student" @bangding2="fak"/>
        <!-- 给组件绑定原生事件Vue默认将其解析为自定义事件 -->

        <Student @click.native="wei"></Student>
        <!-- 添加native将click事件自动绑定为Student组件的最外层元素 -->
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
            studentName:''
        }
    },
    methods: {
        getName(name){
            console.log('学校的姓名是',name);
        },
        demo(name,...params) {
            // 通过扩展运算符以数组的形式将剩余数据放到a里面
            console.log('我绑定了bangding2事件',name,params);
            this.studentName = name;
        },
        fak() {
            console.log('我绑定了');
        },
        trial(name){
            console.log('你好啊');
            this.studentName = name;
        },
        wei(){
            alert('nb');
        }
    },
    // mounted(){
    //     //在当前App组件挂载完毕后等3秒可以触发该自定义事件 体现了refs绑定自定义组件的灵活性
    //     setTimeout(()=>{
                // 以demo回调函数存在的位置为主
    //         this.$refs.student.$on('bangding',this.demo)
    //     },1000)
    // }
    mounted(){
        // 解决this指向将普通函数更改为箭头函数 此时this为App
        this.$refs.student.$on('bangding2',(name,...params)=> {
            //直接将回调写在绑定自定义事件身上 谁触发该事件this就指向谁
            console.log('我绑定了bangding2事件',name,params);
            console.log(this);
            this.studentName = name;
        })
    }
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