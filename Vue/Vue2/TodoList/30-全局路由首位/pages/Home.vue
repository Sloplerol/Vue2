<template>
    <div>
        <h2>Home组件内容</h2>
        <div>
            <ul class="nav nav-tabs">
            <li>
                <!-- to到达的路径一定要指明一级路由下的路由规则 -->
                <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
            </li>
            <li>
                <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
            </li>
            </ul>
            <ul>
            </ul>
        </div>
        
        <keep-alive :include="['News','Message']">
            <!-- 为了防止缓存所有导航区需要添加include标签 include标签里面的是组件名-->
            <router-view></router-view>
        </keep-alive>
    </div>

</template>

<script>
export default {
    name: 'Home',
    
}
</script>
