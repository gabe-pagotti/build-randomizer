<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="app" class="w-screen h-screen bg-cover bg-no-repeat bg-loadout bg-contain">
        <div class="flex min-h-screen">
            <LeftNavBar/>
            <RouterView/>
        </div>
    </div>
</template>

<style>
</style>
