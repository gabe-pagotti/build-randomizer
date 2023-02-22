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
        <Addon v-for="addon in this.$store.state.addons" :addon="addon"></Addon>
        <Addon v-for="addon in this.$store.state.addons" :addon="addon"></Addon>
        <Addon v-for="addon in this.$store.state.addons" :addon="addon"></Addon>
    </div>
</template>

<style scoped>
</style>