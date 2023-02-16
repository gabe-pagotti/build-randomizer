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
    <div class="flex flex-wrap flex-col content-around gap-3 w-1/2 mt-auto align-bottom">
        <h1 class="text-white text-bold">OFFERING</h1>
        <Offering :offering="this.$store.state.offering"/>
    </div>
</template>

<style scoped>
</style>