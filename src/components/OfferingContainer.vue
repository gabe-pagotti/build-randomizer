<script>
export default {
    data() {
        return {}
    },
    methods: {
    },
}
</script>

<template>
    <div class="flex flex-col gap-3 mt-auto align-bottom p-5">
        <h1 class="text-white font-bold">OFFERING</h1>
        <Offering :offering="this.$store.state.offering"/>
    </div>
</template>

<style scoped>
</style>