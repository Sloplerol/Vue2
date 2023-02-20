import VueRouter  from "vue-router";

import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Message from '../pages/Message.vue';
import News from '../pages/News.vue';
import Detail from '../pages/Detail.vue';
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
                    component:  Message,
                    children: [
                        {
                            name: 'xiaoxi',
                            // :占位符代表detail后面的两个参数是由你来决定的
                            path: 'detail/:id/:name',
                            // 最终params呈现的结果是{id:第一个参数,name:第二个参数}
                            component: Detail,
                            //对象写法 将对象的数据传递给目标路由
                            // props: {a: 1,msg: 'hello'}
                            // 布尔值写法 若布尔值为真将路由组件收到的所有parms参数以props的形式传入
                            // props: true
                            // 函数写法 参数是$route
                            // props($route){
                            //     return {id:$route.query.id,name:$route.query.name}
                            // }
                            //逐层解构赋值
                            props({query:{id,name}}) {
                                return {id,name}
                            }
                        
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News
                }
            ]

        },
        
        

    
    ]
})
