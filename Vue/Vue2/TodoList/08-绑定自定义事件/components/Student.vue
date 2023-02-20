<template>
  <div class="demo">
    <h2>欢迎学习{{msg}}</h2>
    <h2>我叫做{{name}}</h2>
    <h2>我今年{{age}}</h2>
    <button @click="sendStudentName">点我查看学生姓名</button>
    <button @click="unbind">解绑事件</button>
    <button @click="add">点我age++</button>
    <button @click="death">点击销毁VC实例对象</button>
    <button @click="hello">点击hello</button>
  </div>
</template>

<script>
export default {
    name: 'Student',
    data(){
        return {
        msg: 'Vue',
        name: 'zjj',
        age: 30,
    }
    },
    methods: {
      sendStudentName(){
        //触发StudentVC实例身上的bangding事件
        // this.$emit('bangding',this.name,222,111,22);
        //实现子组件给父组件传递数据
        this.$emit('bangding2',this.name,22,11,233);
      },
      unbind(){
        this.$off('bangding') //解绑单个事件
        // this.$off(['bangding','bangding2']); //解绑多个事件
        // this.$off() //解绑所有自定义事件
      },
      death(){
        this.$destroy(); 
        //此时StudentVC实例对象被销毁了 自定义事件全部失效
      },
      add(){
        console.log('我被调用了一次');
        this.age++;
      },
      hello(){
        this.$emit('bindevent',this.name);
      }
    }
}
</script>

<style scoped>
    .demo {
        background-color: skyblue;
    }
</style>