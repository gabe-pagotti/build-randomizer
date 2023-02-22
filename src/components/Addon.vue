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
            if (this.$store.state.selectedAddon == null) {
                return false;
            }

            return this.$store.state.selectedAddon.name == this.addon.name && this.$route.name == 'addons';
        }
    },
}
</script>

<template>
    <div class="grow basis-1/5">
        <div class="relative w-22 h-22 cursor-pointer bg-cover bg-black group inline-block" :class="getBackground(this.addon.rarity)" @click="select">
            <div class="absolute bg-white w-0 h-0.5 top-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
            <div class="absolute bg-white w-0 h-0.5 bottom-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
            <div class="absolute bg-white w-0.5 h-0 left-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
            <div class="absolute bg-white w-0.5 h-0 right-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
                    <img src="/images/icons/square-active.webp" class="absolute" id="active" v-show="isSelected">
            <img :src="this.addon.iconUrl">
        </div>
    </div>
</template>

<style scoped>
</style>