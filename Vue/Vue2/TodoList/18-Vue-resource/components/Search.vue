<template>
    <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model="Keyword"/>&nbsp;
        <button @click="Findusers">Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Search',
    data(){
        return {
            Keyword: ''
        }
    },
    methods: {
        Findusers(){
            console.log(this);
            // 请求前更新数据
            this.$bus.$emit('updateList',{isFirst:false,isLoading:true,errMsg:'',users:[]});
            // 与axios语法格式完全一致 是早期Vue发送请求的方式
            this.$http.get(`https://api.github.com/search/users?q=${this.Keyword}`).then(
                response=>{
                    // console.log('请求成功',response.data);
                    // 第一种方法讲究顺序且不容易让别人理解
                    // this.$bus.$emit('updateList',false,false,'',response.data.items);
                    // 成功后更新数据
                    this.$bus.$emit('updateList',{isLoading:false,errMsg:'',users:response.data.items});
                },
                error=>{
                    // console.log('请求失败',error.message);
                    // 发生错误时更新数据
                    this.$bus.$emit('updateList',{isLoading:false,errMsg:error.message,users:[]});
                }
            )
        }
    },
    
}
</script>

<style>

</style>