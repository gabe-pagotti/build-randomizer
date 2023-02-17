<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="flex justify-between gap-1 p-10 px-24 mb-10 xl:pr-96">
        <PerkIcon v-for="perk in this.$store.state.selectedPerks" :perk="perk"></PerkIcon>
    </div>
</template>

<style scoped>
</style>