<template>
    <div>
        <button @click="sendStu">发送请求获取学生信息</button>
        <button @click="sendCar">发送请求获取汽车信息</button>
    </div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'App',
    methods: {
      sendStu(){
        //向代理服务器发送请求 发送请求的结果先去找当前服务器下public文件是否有 其次是第三方服务器
        axios.get('http://localhost:8080/api/students').then(
          response=>{
            // response返回结果为响应对象
            console.log('请求成功了',response.data)
          },
          error=>{
            console.log('请求失败了',error.message);
          }
        )
      },
      sendCar(){
        //向代理服务器发送请求 发送请求的结果先去找当前服务器下public文件是否有 其次是第三方服务器
        axios.get('http://localhost:8080/demo/cars').then(
          response=>{
            // response返回结果为响应对象
            console.log('请求成功了',response.data)
          },
          error=>{
            console.log('请求失败了',error.message);
          }
        )
      }
    }
}
</script>

