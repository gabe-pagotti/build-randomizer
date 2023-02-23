<script>
</script>

<template>
    <div class="w-2/3 flex items-end ml-16 pb-5">
        <PowerItem :item="this.$store.state.item"/>
        <div class="mb-3">
            <img src="/images/icons/addon.png">
        </div>
        <AddonsContainer/>
    </div>
</template>

<style scoped>
</style>