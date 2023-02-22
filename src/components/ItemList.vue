<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="flex flex-wrap px-40 py-0">
        <PowerItemIcon v-for="item in this.$store.state.items" :item="item"></PowerItemIcon>
        <PowerItemIcon v-for="item in this.$store.state.items" :item="item"></PowerItemIcon>
        <PowerItemIcon v-for="item in this.$store.state.items" :item="item"></PowerItemIcon>
    </div>
</template>

<style scoped>
</style>