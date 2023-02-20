<template>
    <ul>
        <li>该信息id为{{id}}</li>
        <li>该信息用户为{{name}}</li>
        <!-- <li>a:{{a}}</li>
        <li>msg:{{msg}}</li> -->
    </ul>
</template>

<script>
export default {
    name: 'Detail',
    // props: ['a','msg']
    props: ['id','name']
    
}
</script>
