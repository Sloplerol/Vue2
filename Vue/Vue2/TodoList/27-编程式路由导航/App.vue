<template>
  <div>
    <Banner></Banner>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原来是通过a标签实现页面的跳转 -->
          <!-- 路由借助router-link来实现路由的切换 router-link最终呈现在页面上是a标签-->
          <router-link replace class="list-group-item" active-class="active" to="/about">About</router-link>
          <!-- active-class激活样式属性 -->
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
          <!-- 历史记录默认情况下是push模式 会出现压栈的现象 -->
          <!-- 将其替换为replace模式相当于新生成的路由会替换掉旧的路由 不会保留历史记录-->
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件呈现的位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
//引入一般组件
import Banner from './components/Banner.vue';

export default {
    name: 'App',
    components: {Banner}
    
}
</script>



