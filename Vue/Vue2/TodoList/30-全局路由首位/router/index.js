import VueRouter  from "vue-router";

import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Message from '../pages/Message.vue';
import News from '../pages/News.vue';
import Detail from '../pages/Detail.vue';
// 创建一个路由器
const router = new VueRouter({
    // 生成路由
    routes:[
        // 设置路由规则
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: 'home'},
            //设置二级路由
            children: [
                {
                    name: 'xiangqing',
                    path: 'message',
                    // 二级路由遍历时自动加上了/
                    component:  Message,
                    meta: {isAuth: true,title: '消息'},
                    children: [
                        {
                            name: 'xiaoxi',
                            // :占位符代表detail后面的两个参数是由你来决定的
                            // path: 'detail/:id/:name',
                            path: 'detail',
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
                            },
                            meta:{title: '详情'}
                        
                        }
                    ]
                },
                {
                    path: 'news',
                    component: News,
                    meta: {isAuth: false,title: '新闻'},

                }
            ]

        },
        
        

    
    ]
})
//全局前置路由守卫 初始化时候被调用 在切换路由之前调用回调函数
router.beforeEach((to,from,next)=>{
    //from to判断路由组件的起点与终点
    // console.log(to,from);
    // next代表是否允许路由组件的切换
    // if(to.path == '/home/message' || to.path == '/home/news') { 
    // meta鉴权判断
    if(to.meta.isAuth) {
        if(localStorage.name == 'zjj') {
            // document.title = to.meta.title || '首页';
            next()
        }else {
            alert('name Error')
        }
    }
    else {
        // document.title = to.meta.title || '首页';
        next();
    }
})
//全局后置路由守卫 初始化时候被调用 在切换路由之后调用回调函数
router.afterEach((to,from)=>{
    // 在路由组件切换完之后对标题进行修改此时所有判断都已经结束
    document.title = to.meta.title || '首页';
})


export default router;
