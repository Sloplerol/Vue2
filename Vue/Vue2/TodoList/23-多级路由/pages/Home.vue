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
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: 'Home',
    
}
</script>
