<script>

</script>

<template>
    <div class="row-span-2 m-40">
        <!-- First try, wrong animation -->
        <div class="relative w-0 group bg-blue-500">
            <div class="group hex">
                <div class="absolute rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[80px] bottom-[105px]  group-hover:w-[64px] group-hover:left-[47px]"></div>
                <div class="absolute -rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[25px] bottom-[105px] group-hover:w-[64px] group-hover:left-[-7px]"></div>
            </div>
            <div class="relative middle">
                <div class="absolute bg-white w-0.5 h-0 left-[-3px] top-1/2 transition-all duration-500 group-hover:h-[61px] group-hover:top-0"></div>
                <div class="absolute bg-white w-0.5 h-0 right-[-3px] top-[32px] transition-all duration-500 group-hover:h-[61px] group-hover:top-0"></div>
                <img class="absolute" src="/images/icons/offerings/iconFavors_ardentRavenWreath_lg.png">
            </div>
            <div class="hex2">
                <div class="absolute rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[25px] bottom-[13px]  group-hover:w-[64px] group-hover:left-[-7px]"></div>
                <div class="absolute -rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[80px] bottom-[13px] group-hover:w-[63px] group-hover:left-[48px]"></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        top: -38%;
    }
    .hex {
        width: 0;
        border-bottom: 30px solid #000;
        border-left: 52px solid transparent;
        border-right: 52px solid transparent;
    }
    .middle {
        width: 104px;
        height: 60px;
        background-color: #000;
    }
    .hex2 {
        width: 0;
        border-top: 30px solid #000;
        border-left: 52px solid transparent;
        border-right: 52px solid transparent;
    }
</style>