<template>
  <div>
    <count/>
    <person/>
  </div>
</template>

<script>
import count from './components/count.vue';
import person from './components/Person.vue'
// import person from './components/Person.vue'
export default {
    name: 'App',
    components: {count,person},
}
</script>



