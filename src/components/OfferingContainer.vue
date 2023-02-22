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
    <div class="flex flex-col gap-3 mt-auto align-bottom">
        <h1 class="text-white font-bold ml-5">OFFERING</h1>
        <Offering :offering="this.$store.state.offering" class="ml-5 pb-1"/>
    </div>
</template>

<style scoped>
</style>