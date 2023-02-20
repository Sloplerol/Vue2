<template>
    <div class="btn">
        <button @click="back">后退</button>
        <button @click="forward">前进</button>
        <button @click="go">GO API</button>
    </div>
</template>

<script>
export default {
    name: 'Banner',
    methods: {
        back(){
          this.$router.back();  
        },
        forward(){
            this.$router.forward();
        },
        go(){
            // 控制往前走几步或者往后走几步
            this.$router.go(-2);
        }
    }
}
</script>
<style lang="css">
    .btn {
        width: 100%;
        margin: 30px auto 0;
    }
    .btn button {
        margin: 0 10px;
    }
</style>

