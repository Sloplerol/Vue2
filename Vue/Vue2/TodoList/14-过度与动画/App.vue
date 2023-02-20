<template>
    <div>
      <test2/>  
      <test/>   
      <test1/>  
      
    </div>

</template>

<script>
import test2 from './components/Test2.vue'
import test1 from './components/Test1.vue'
import test from './components/Test.vue'
export default {
    name: 'App',
    components: {
        test,
        test1,
        test2

    }
}
</script>

