<template>
    <div>
        <h1>现在算是About页面</h1>
    </div>
</template>

<script>
export default {
    name: 'About',
    // 通过路由规则 进入该组件时被调用
    beforeRouteEnter(to,from,next){
        if(to.meta.isAuth) {
            if(localStorage.name == 'zjj') {                               
                next()
            }else {
                alert('name Error')
            }
        }
        else {
            next();
        }
    },
    // 通过路由组件离开时被调用
    beforeRouteLeave(to,from,next){
        console.log('我离开了');
        next();
    }
    
}
</script>
