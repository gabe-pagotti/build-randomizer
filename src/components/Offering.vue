<script>
export default {
    props: {
        "offering": Object
    },
    data() {
        return {
        }
    },
    methods: {
        select() {
            if (this.isSelected) {
                return;
            }

            this.$router.push('/loadout/offerings');
        }
    },
    computed: {
        isSelected() {
            return this.$route.name == 'offerings';
        }
    },
}
</script>

<template>
    <div class="relative cursor-pointer group" @click="select">
        <div class="top-triangle">
            <div class="absolute rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[50px] bottom-[120px] group-hover:w-[63px] group-hover:bottom-[105px] group-hover:left-[46px]"></div>
            <div class="absolute -rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[51px] bottom-[120px] group-hover:w-[62px] group-hover:bottom-[105px] group-hover:left-[-6px]"></div>
        </div>
        <div class="relative middle">
            <div class="absolute bg-white w-0.5 h-0 left-[-2px] bottom-0 transition-all duration-500 group-hover:h-[62px]"></div>
            <div class="absolute bg-white w-0.5 h-0 right-[-1px] bottom-[-1px] transition-all duration-500 group-hover:h-[62px]"></div>

            <img src="/images/icons/offering-active.png" class="absolute" id="active" v-show="isSelected">
            <img class="absolute drop-shadow-2xl" id="icon" :src="this.offering.iconUrl">
        </div>
        <div class="bottom-triangle">
            <div class="absolute rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[-2px] bottom-[28px]  group-hover:w-[63px] group-hover:left-[-6px] group-hover:bottom-[13px]"></div>
            <div class="absolute -rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[105px] bottom-[29px] group-hover:w-[60px] group-hover:bottom-[13px] group-hover:left-[49px]"></div>
        </div>
    </div>
</template>

<style scoped>
    #active {
        max-width: unset;
        width: 8.4rem;
        top: -75%;
        left: -16%;
    }
    #icon {
        top: -38%;
    }
    .top-triangle {
        width: 0;
        border-bottom: 30px solid #151;
        border-left: 52px solid transparent;
        border-right: 52px solid transparent;
    }
    .middle {
        width: 104px;
        height: 60px;
        background-color: #151;
    }
    .bottom-triangle {
        width: 0;
        border-top: 30px solid #151;
        border-left: 52px solid transparent;
        border-right: 52px solid transparent;
    }
</style>