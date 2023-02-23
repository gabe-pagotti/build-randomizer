<script>
</script>

<template>
    <div class="flex flex-wrap px-28 py-0">
        <PowerItemIcon v-for="item in this.$store.state.items" :item="item"/>
        <PowerItemIcon v-for="item in this.$store.state.items" :item="item"/>
        <PowerItemIcon v-for="item in this.$store.state.items" :item="item"/>
    </div>
</template>

<style scoped>
</style>