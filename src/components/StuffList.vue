<script>
    import { RouterView } from 'vue-router'
</script>

<template>
    <div>
        <h1 class="text-white my-5 ml-16"><span class="font-bold">INVENTORY</span>/{{ this.$route.name.toUpperCase() }}</h1>
        <RouterView/>
    </div>
</template>

<style scoped>
</style>