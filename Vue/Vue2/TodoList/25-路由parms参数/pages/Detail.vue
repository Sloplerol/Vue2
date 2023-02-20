<template>
    <ul>
        <li>该信息id为{{$route.params.id}}</li>
        <li>该信息用户为{{$route.params.name}}</li>
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    // mounted(){
    //     console.log(this.$route);
    // }
}
</script>
