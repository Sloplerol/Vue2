<template>
    <div class="row">
      <div v-show="info.users.length" class="card" v-for="user in info.users" :key="user.login">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      <h1 v-show="info.isFirst">欢迎使用</h1>
      <h1 v-show="info.isLoading">加载中....</h1>
      <h1 v-show="info.errMsg">{{info.errMsg}}</h1>
      
        
    </div>
</template>

<script>
export default {
    name: 'List',
    data(){
        return {
            info: {
                isFirst: true,
                isLoading: false,
                errMsg: '',
                // 用来存储请求回来的数据
                users: []
            }
        }
    },
    mounted() {
        // 这种方式实现了对info数据进行整体替换
        this.$bus.$on('updateList',(dataObj)=>{
            // console.log('我绑定了sj',data);
            this.info = {...this.info,...dataObj}
            // 以重复的以后面的为主 不重复的接着保留 防止属性丢失
        })
    }
}
</script>

<style>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>