<template>
  <div class="container">
    

    <Category title="爱好">
        <!-- 作用域插槽最外层必须要有template -->
          <template scope="dataName">
            <!-- 可以结构赋值将dataName写成{dataName} 下面遍历的对象直接写dataName数组 -->
            <!-- dataName是一个包裹hobby数组的对象 -->
              <ul>
                <li style="color:red" v-for="(h,index) in dataName.hobbies" :key="index">{{h}}</li>
              </ul>
          </template>
    </Category>
    <!-- <Category title="爱好">
          <li v-for="(h,index) in hobby" :key="index">{{h}}</li>
    </Category>
    <Category title="爱好">
          <li v-for="(h,index) in hobby" :key="index">{{h}}</li>
    </Category> -->
     


  </div>
</template>

<script>
import Category from './components/category.vue'
export default {
    name: 'App',
    components: {Category},
    

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


