<script>

</script>

<template>
    <div class="row-span-2 m-40">
        <div class="relative w-0 group bg-blue-500">
            <div class="group hex">
                <div class="absolute rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[50px] bottom-[120px] group-hover:w-[63px] group-hover:bottom-[105px] group-hover:left-[46px]"></div>
                <div class="absolute -rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[51px] bottom-[120px] group-hover:w-[62px] group-hover:bottom-[105px] group-hover:left-[-6px]"></div>
            </div>
            <div class="relative middle">
                <div class="absolute bg-white w-0.5 h-0 left-[-2px] bottom-0 transition-all duration-500 group-hover:h-[62px]"></div>
                <div class="absolute bg-white w-0.5 h-0 right-[-1px] bottom-[-1px] transition-all duration-500 group-hover:h-[62px]"></div>
                <img class="absolute" src="/images/icons/offerings/iconFavors_ardentRavenWreath_lg.png">
            </div>
            <div class="hex2">
                <div class="absolute rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[-2px] bottom-[28px]  group-hover:w-[63px] group-hover:left-[-6px] group-hover:bottom-[13px]"></div>
                <div class="absolute -rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[105px] bottom-[29px] group-hover:w-[60px] group-hover:bottom-[13px] group-hover:left-[49px]"></div>
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