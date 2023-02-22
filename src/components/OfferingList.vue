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
        <div class="flex flex-wrap gap-3 pl-10 py-0 justify-start">
            <Offering v-for="offering in this.$store.state.offerings" :offering="offering"></Offering>
        </div>
        <div class="flex flex-wrap gap-3 pl-4 py-0 justify-end">
            <Offering v-for="offering in this.$store.state.offerings" :offering="offering"></Offering>
        </div>
        <div class="flex flex-wrap gap-3 pl-10 py-0 justify-start">
            <Offering v-for="offering in this.$store.state.offerings" :offering="offering"></Offering>
        </div>
    </div>
</template>

<style scoped>
</style>