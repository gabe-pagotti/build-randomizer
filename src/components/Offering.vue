<script>
export default {
    props: {
        "offering": Object
    },
    methods: {
        select() {
            this.$store.commit('setOffering', this.offering);
            this.$router.push('/loadout/offerings');
        }
    },
    computed: {
        isSelected() {
            return this.$store.state.offering.name == this.offering.name && this.$route.name == 'offerings';
        }
    },
}
</script>

<template>
    <div class="basis-1/6 grow-0 mb-2">
        <div class="relative cursor-pointer bg-offering-rare bg-contain bg-no-repeat bg-center w-28 h-28" @click="select">
            <img src="/images/icons/offering-active.png" class="absolute" id="active" v-show="isSelected">
            <img id="icon" :src="this.offering.iconUrl">
        </div>
    </div>
</template>

<style scoped>
    #active {
        max-width: unset;
        width: 7.75rem;
        top: -13%;
        left: -5%;
    }
</style>