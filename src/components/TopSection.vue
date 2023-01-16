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
    <div class="flex justify-around h-72 w-full gap-7">
        <PowerItem />
        <OfferingContainer @selected="changeList" />
    </div>
</template>

<style scoped>
</style>