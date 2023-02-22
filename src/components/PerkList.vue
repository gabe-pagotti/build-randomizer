<script>
export default {
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="pl-10 pt-5">
        <div class="flex flex-wrap gap-3 pl-10 py-0 justify-start">
            <PerkIcon v-for="perk in this.$store.state.perks" :perk="perk"></PerkIcon>
        </div>
        <div class="flex flex-wrap gap-3 pl-4 py-0 justify-end">
            <PerkIcon v-for="perk in this.$store.state.perks" :perk="perk"></PerkIcon>
        </div>
        <div class="flex flex-wrap gap-3 pl-10 py-0 justify-start">
            <PerkIcon v-for="perk in this.$store.state.perks" :perk="perk"></PerkIcon>
        </div>
    </div>
</template>

<style scoped>
</style>