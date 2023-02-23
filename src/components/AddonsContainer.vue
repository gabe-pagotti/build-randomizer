<script>
</script>

<template>
    <div>
        <h1 class="text-white font-bold mb-3">ADD-ONS</h1>
        <div class="flex">
            <Addon v-for="addon in this.$store.state.selectedAddons" :addon="addon" class="scale-90"/>
        </div>
    </div>
</template>

<style scoped>
</style>