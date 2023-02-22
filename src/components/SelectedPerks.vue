<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <div>
        <h1 class="text-white font-bold mt-5 ml-16">PERKS</h1>
        <div class="flex justify-between gap-1 pt-6 px-24 mb-5 xl:pr-24">
            <PerkIcon v-for="perk in this.$store.state.selectedPerks" :perk="perk"></PerkIcon>
        </div>
    </div>
</template>

<style scoped>
</style>