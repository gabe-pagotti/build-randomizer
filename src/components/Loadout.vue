<script>
export default {
    emits: ['changeList'],
    props: {
    },
    data() {
        return {}
    },
    methods: {
        changeList(type) {
            this.$emit('changeList', type);
        }
    },
}
</script>

<template>
    <div class="flex-row w-1/2">
        <TopSection @changeList="changeList" />
        <SelectedPerks/>
        <StuffList/>
    </div>
</template>

<style scoped>
</style>