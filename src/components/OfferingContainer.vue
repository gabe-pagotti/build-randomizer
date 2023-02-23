<script>
</script>

<template>
    <div class="w-1/3 flex flex-col gap-1 justify-end bg-offering bg-cover">
        <h1 class="text-white font-bold ml-5">OFFERING</h1>
        <Offering :offering="this.$store.state.offering" class="ml-5 pb-1"/>
    </div>
</template>

<style scoped>
</style>