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
    },
    computed: {
    },
}
</script>

<template>
    <div>
        <div class="relative w-20 h-20 cursor-pointer bg-cover bg-black group inline-block" :class="'bg-'+this.addon.rarity">
            <div class="absolute bg-white w-0 h-0.5 top-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
            <div class="absolute bg-white w-0 h-0.5 bottom-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
            <div class="absolute bg-white w-0.5 h-0 left-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
            <div class="absolute bg-white w-0.5 h-0 right-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
            <img :src="this.addon.iconUrl">
        </div>
    </div>
</template>

<style scoped>
</style>