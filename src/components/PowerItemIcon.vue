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
            return this.$store.state.item.name == this.item.name && this.$route.name == 'items';
        }
    },
}
</script>

<template>
    <div class="grow basis-1/5">
        <div class="relative w-22 h-22 cursor-pointer bg-cover bg-black group inline-block" :class="getBackground(this.item.rarity)" @click="select">
            <div class="absolute bg-white w-0 h-0.5 top-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
            <div class="absolute bg-white w-0 h-0.5 bottom-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
            <div class="absolute bg-white w-0.5 h-0 left-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
            <div class="absolute bg-white w-0.5 h-0 right-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
            <img src="/images/icons/square-active.webp" class="absolute" id="active" v-show="isSelected">
            <img :src="this.item.iconUrl">
        </div>
    </div>
</template>

<style scoped>
</style>