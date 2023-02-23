<script>
</script>

<template>
    <div class="flex flex-wrap px-28 py-0">
        <Addon v-for="addon in this.$store.state.addons" :addon="addon"/>
        <Addon v-for="addon in this.$store.state.addons" :addon="addon"/>
        <Addon v-for="addon in this.$store.state.addons" :addon="addon"/>
    </div>
</template>

<style scoped>
</style>