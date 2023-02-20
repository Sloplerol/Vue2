<template>
  <div class="school">
    <h2>欢迎学习{{msg}}</h2>
    <h2>我的学校叫做{{name}}</h2>
    <h2>我的年龄是{{myage+1}}</h2>
    <h2>他位于{{address}}</h2>
    <button @click="chanage">点击age++</button>
  </div>
</template>

<script>
export default {
    
    name: 'School',
    data(){
        console.log(this);
        return {
        msg: 'Vue',
        // 外部props输入的属性优先级更高
        // name: 'zjj',
        myage: this.age
    }
    },
    methods: {
        chanage(){
            this.myage++
        }
    },
    //查收组件标签里传入的数据 提高代码的复用率 简单数据属性接收
    // props: ['name','age','address']
    //给定限制属性的类型
    // props: {
    //     'name': String,
    //     'age': Number,
    //     'address': String
    // }
    //限制类型的同时给定是否输入以及默认值
    props: {
        // 尽量避免修改props接受过来的属性值
        name: {
            typeof: String,
            required: true,
            
        },
        age: {
            typeof: Number,
            default: 20
        },
        address: {
            typeof: String,
            required: true
        },
        // phone: {
        //     typeof: String 
        //     //不要随意声明不存在的数据
        // }
    }
    
}
</script>

<style>
    .school {
        background-color: aqua;
    }
</style>