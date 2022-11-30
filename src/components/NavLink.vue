<script>
    export default {
        props: {
            "link": String
        },
        data() {
            return {}
        },
        methods: {
            followLink() {
                this.$router.replace(this.link)
            }
        },
    }
</script>

<template>
    <div class="relative w-22 h-22 cursor-pointer bg-black bg-no-repeat bg-70% bg-center shadow-lt group last:w-28 last:h-28 last:mt-auto last:mb-28" @click="followLink()">
        <div class="absolute bg-white w-0 h-0.5 top-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
        <div class="absolute bg-white w-0 h-0.5 bottom-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
        <div class="absolute bg-white w-0.5 h-0 left-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
        <div class="absolute bg-white w-0.5 h-0 right-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
    </div>
</template>

<style scoped>

</style>