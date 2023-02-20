<template>
  <div class="container">
    <Category title="电影">
      <!-- 往组件标签里面写图片 -->
      <img slot="center" src="./pic.png" alt="">
      <div class="alian" slot="bottom">
        <a href="javascript:;">我是深</a>
        <a href="javascript:;">nihao</a>
      </div>
    </Category>

    <Category title="爱好">
      <ul slot="center">
          <li v-for="(h,index) in hobby" :key="index">{{h}}</li>
      </ul>
      <h4 slot="bottom">吃我一榔头</h4>
    </Category>
     
    <Category title="美食">
      <img src="./pic.png" alt="" slot="center">
      <!-- 为了防止多次出现slot指明插槽  -->
      <!-- 第一种 缺点破环了页面结构 -->
      <!-- <div slot="bottom">
        <div class="alan">
          <a href="">你</a>
          <a href="">号</a>
        </div>
        <h4>我去你大爷</h4>
      </div> -->
      <!-- 第二种 template在页面中不会显示结构  **template里面**slot="bottom"还可以写成v-slot:bottom--> 
      <template slot="bottom"> 
        <div class="alan">
          <a href="">你</a>
          <a href="">号</a>
        </div>
        <h4>我去你大爷</h4>
      </template>
    </Category>


  </div>
</template>

<script>
import Category from './components/category.vue'
export default {
    name: 'App',
    components: {Category},
    data(){
      return {
        film: ['地狱男爵','环太平洋','月光光','心慌慌'],
        hobby: ['吃饭','睡觉','打游戏','敲代码'],
        foods: ['干锅','鸡腿','火锅','快餐']
      }
    }

}
</script>
<style>
    .container,
    .alian,
    .alan {
      display: flex;
      flex: 1;
      justify-content: space-around;
    }
    img {
      width: 100%;
    }
    h4 {
      text-align: center;
    }
</style>


