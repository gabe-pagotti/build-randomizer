<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="app" class="w-screen h-screen bg-auto bg-no-repeat bg-loadout bg-contain">
        <div class="flex min-h-screen bg-gray-500/50">
            <LeftNavBar/>
            <RouterView/>
        </div>
    </div>
</template>

<style>
</style>
