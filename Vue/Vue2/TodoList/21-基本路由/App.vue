<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原来是通过a标签实现页面的跳转 -->
          <!-- 路由借助router-link来实现路由的切换 -->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <!-- active-class激活样式属性 -->
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
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


export default {
    name: 'App',
  
    
}
</script>



