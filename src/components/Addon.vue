<script>
export default {
    props: {
        "addon": Object
    },
    data() {
        return {
        }
    },
    methods: {
        select() {
            this.$store.commit('setAddon', this.addon);
            this.$router.push('/loadout/addons');
        }
    },
    computed: {
        isSelected() {
            return this.$store.state.addon.name == this.addon.name && this.$route.name == 'addons';
        }
    },
}
</script>

<template>
    <div class="relative w-20 h-20 cursor-pointer bg-cover bg-black group inline-block" :class="getBackground(this.addon.rarity)" @click="select">
        <div class="absolute bg-white w-0 h-0.5 top-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
        <div class="absolute bg-white w-0 h-0.5 bottom-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
        <div class="absolute bg-white w-0.5 h-0 left-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
        <div class="absolute bg-white w-0.5 h-0 right-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
        <img :src="this.addon.iconUrl">
    </div>
</template>

<style scoped>
</style>