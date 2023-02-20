import VueRouter  from "vue-router";

import About from '../components/About.vue';
import Home from '../components/Home.vue';
// 创建一个路由器
const router = new VueRouter({
    // 生成路由
    routes:[
        // 设置路由规则
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home 
        },
    
    ]
})

export default router;