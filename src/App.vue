<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div id="app" class="w-screen h-screen bg-auto bg-no-repeat bg-loadout overflow-hidden">
        <div class="grid grid-rows-1 grid-flow-col min-h-screen bg-gray-500/50">
            <LeftNavBar/>
            <RouterView/>
        </div>
    </div>
</template>

<style>
</style>
