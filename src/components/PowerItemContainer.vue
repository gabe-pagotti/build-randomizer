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
    <div class="w-2/3 flex items-end ml-16 pb-5">
        <PowerItem :item="this.$store.state.item"/>
        <AddonsContainer/>
    </div>
</template>

<style scoped>
</style>