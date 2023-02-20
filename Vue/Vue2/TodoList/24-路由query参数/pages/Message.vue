<template>
    <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
            <!-- 跳转路由同时携带参数 字符串写法-->
          <!-- <router-link :to="`/home/message/detail?id=${m.id}&name=${m.name}`">{{m.name}}</router-link>&nbsp;&nbsp; -->
          <!-- 对象写法 -->
          <router-link :to="{
            path: '/home/message/detail',
            query: {
                id: m.id,
                name: m.name
            }
          }">{{m.name}}</router-link>
        </li>
      </ul>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: 'Message',
    data(){
        return {
            messageList: [
            {id:'001',name:'zjj'},
            {id:'002',name:'ljm'},
            {id:'003',name:'dsb'}
            
        ]
        }
    }
}
</script>

