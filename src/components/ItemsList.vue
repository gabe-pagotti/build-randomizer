<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="pl-10">
        <h1 class="text-white m-8"><span class="font-bold">INVENTORY</span>/ITEMS</h1>
        <div class="flex flex-wrap px-40 py-0">
            <PowerItem v-for="item in this.$store.state.items" :item="item"></PowerItem>
            <PowerItem v-for="item in this.$store.state.items" :item="item"></PowerItem>
            <PowerItem v-for="item in this.$store.state.items" :item="item"></PowerItem>
        </div>
    </div>
</template>

<style scoped>
</style>