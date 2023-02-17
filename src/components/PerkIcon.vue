<script>
export default {
    props: {
        "perk": Object
    },
    data() {
        return {
        }
    },
    methods: {
        select() {
            this.$store.commit('setPerk', this.perk);
            this.$router.push('/loadout/perks');
        }
    },
    computed: {
        isSelected() {
            return this.$store.state.selectedPerk.name == this.perk.name && this.$route.name == 'perks';
        }
    },
}
</script>

<template>
    <div class="basis-1/6 grow-0">
        <div class="relative w-20 h-20 cursor-pointer bg-none -rotate-45 bg-black group inline-block" @click="select">
            <a>
                <div class="absolute bg-white w-0 h-0.5 top-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
                <div class="absolute bg-white w-0 h-0.5 bottom-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
                <div class="absolute bg-white w-0.5 h-0 left-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
                <div class="absolute bg-white w-0.5 h-0 right-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
                <img :src="this.perk.iconUrl" class="rotate-45" style="position: absolute; height: 7rem; width: 7rem; max-width: max-content; left: -16px; top: -16px;">
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>