<script>
export default {
    props: {},
    data() {
        return {};
    },
    methods: {},
    computed: {},
}
</script>

<template>
    <div class="">
        <h1 class="text-white font-bold mb-5">ADD-ONS</h1>
        <div class="flex gap-6">
            <Addon v-for="addon in this.$store.state.selectedAddons" :addon="addon"/>
        </div>
    </div>
</template>

<style scoped>
</style>