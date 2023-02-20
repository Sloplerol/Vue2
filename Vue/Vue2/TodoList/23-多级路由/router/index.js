import VueRouter  from "vue-router";

import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Message from '../pages/Message.vue';
import News from '../pages/News.vue';
// 创建一个路由器
export default new VueRouter({
    // 生成路由
    routes:[
        // 设置路由规则
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            //设置二级路由
            children: [
                {
                    path: 'message',
                    // 二级路由遍历时自动加上了/
                    component:  Message
                },
                {
                    path: 'news',
                    component: News
                }
            ]

        },
        
        

    
    ]
})
