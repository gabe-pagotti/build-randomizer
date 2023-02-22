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
    <div class="w-2/3 flex items-end justify-evenly gap-6 px-24 pb-5">
        <PowerItem :item="this.$store.state.item"/>
        <AddonsContainer/>
    </div>
</template>

<style scoped>
</style>