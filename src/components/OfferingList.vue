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
        <div class="flex flex-wrap gap-9 pl-10 xl:pr-96 py-0 justify-start">
            <Offering v-for="offering in this.$store.state.offerings" :offering="offering"></Offering>
        </div>
        <div class="flex flex-wrap gap-9 pl-10 md:pr-12 md:justify-end xl:justify-start xl:pl-28 py-0">
            <Offering v-for="offering in this.$store.state.offerings" :offering="offering"></Offering>
        </div>
        <div class="flex flex-wrap gap-9 pl-10 xl:pr-96 py-0 justify-start">
            <Offering v-for="offering in this.$store.state.offerings" :offering="offering"></Offering>
        </div>
    </div>
</template>

<style scoped>
</style>