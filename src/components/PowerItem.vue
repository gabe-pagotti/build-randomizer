<script>
export default {
    props: {
        "item": Object
    },
    methods: {
        select() {
            this.$store.commit('setItem', this.item);
            this.$router.push('/loadout/items');
        }
    },
    computed: {
        isSelected() {
            if (this.$store.state.item == null) {
                return false;
            }

            return this.$store.state.item.name == this.item.name && this.$route.name == 'items';
        }
    },
}
</script>

<template>
    <div>
        <h1 class="text-white font-bold mb-3">ITEM</h1>
        <PowerItemIcon :item="this.item"></PowerItemIcon>
    </div>
</template>

<style scoped>
</style>