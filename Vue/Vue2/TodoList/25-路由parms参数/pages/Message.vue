<template>
    <div>
      <ul>
        <li v-for="m in messageList" :key="m.id">
        
          <!-- <router-link :to="`/home/message/detail/${m.id}/${m.name}`">{{m.name}}</router-link> -->
          <!-- 跳转路由携带parms参数不允许携带path属性 -->
          <router-link :to="{
            name: 'xiaoxi',
            params: {
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

