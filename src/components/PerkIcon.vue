<script>
export default {
    props: {
        "perk": Object
    },
    methods: {
        select() {
            this.$store.commit('setPerk', this.perk);
            this.$router.push('/loadout/perks');
        }
    },
    computed: {
        isSelected() {
            if (this.$store.state.selectedPerk == null) {
                return false;
            }

            return this.$store.state.selectedPerk.name == this.perk.name && this.$route.name == 'perks';
        }
    },
}
</script>

<template>
    <div class="basis-1/6 grow-0">
        <div class="relative w-20 h-20 cursor-pointer bg-very-rare bg-cover -rotate-45 bg-black group inline-block" @click="select">
            <a>
                <div class="absolute bg-white w-0 h-0.5 top-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
                <div class="absolute bg-white w-0 h-0.5 bottom-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
                <div class="absolute bg-white w-0.5 h-0 left-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
                <div class="absolute bg-white w-0.5 h-0 right-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
                <img src="/images/icons/square-active.webp" class="absolute" id="active" v-show="isSelected">
                <img :src="this.perk.iconUrl" class="rotate-45 scale-150">
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>