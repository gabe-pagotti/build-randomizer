<script>
export default {
    props: {
        "link": String
    },
    data() {
        return {}
    }
}
</script>

<template>
    <div class="relative w-20 h-20 mb-6 m-auto cursor-pointer bg-none bg-black group last:w-28 last:h-28 last:mt-60">
        <a :href="link">
            <div class="absolute bg-white w-0 h-1.5 top-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
            <div class="absolute bg-white w-0 h-1.5 bottom-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
            <div class="absolute bg-white w-1.5 h-0 left-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
            <div class="absolute bg-white w-1.5 h-0 right-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
            <div :class="$attrs.class" class="bg-auto bg-no-repeat bg-center w-full h-full"></div>
        </a>
    </div>
</template>

<style scoped>

</style>