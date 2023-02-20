<template>
  <div class="container">
    <Category title="电影">
      <!-- 往组件标签里面写图片 -->
      <img src="./pic.png" alt="">
    </Category>

    <Category title="爱好">
      <ul>
          <li v-for="(h,index) in hobby" :key="index">{{h}}</li>
      </ul>
    </Category>
     
    <Category title="美食">
      <img src="./pic.png" alt="">
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
    .container {
      display: flex;
      flex: 1;
      justify-content: space-around;
    }
    img {
      width: 100%;
    }
</style>


