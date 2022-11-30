<script>
export default {
    emits: ['selected'],
    props: {
        "item": Object
    },
    data() {
        return {
            selected: false,
        }
    },
    methods: {
        toggleSelected() {
            this.selected = !this.selected;

            // TODO: Adicionar img das setas que indicam a selecao
            let divs = this.$el.querySelectorAll("div.absolute"),
                add = "bg-white",
                remove = "bg-red-500";

            if (this.selected) {
                this.$router.push('/loadout/offerings');

                add = "bg-red-500";
                remove = "bg-white";
            }

            divs.forEach(div => {
                div.classList.add(add);
                div.classList.remove(remove);
            });
        }
    },
    computed: {
        isSelected() {
            return this.selected;
        }
    }
}
</script>

<template>
    <div class="relative cursor-pointer group" @click="toggleSelected">
        <div class="top-triangle">
            <div class="absolute rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[50px] bottom-[120px] group-hover:w-[63px] group-hover:bottom-[105px] group-hover:left-[46px]"></div>
            <div class="absolute -rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[51px] bottom-[120px] group-hover:w-[62px] group-hover:bottom-[105px] group-hover:left-[-6px]"></div>
        </div>
        <div class="relative middle">
            <div class="absolute bg-white w-0.5 h-0 left-[-2px] bottom-0 transition-all duration-500 group-hover:h-[62px]"></div>
            <div class="absolute bg-white w-0.5 h-0 right-[-1px] bottom-[-1px] transition-all duration-500 group-hover:h-[62px]"></div>

            <img class="absolute drop-shadow-2xl" :src="this.item.iconUrl">
        </div>
        <div class="bottom-triangle">
            <div class="absolute rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[-2px] bottom-[28px]  group-hover:w-[63px] group-hover:left-[-6px] group-hover:bottom-[13px]"></div>
            <div class="absolute -rotate-[30deg] w-0 bg-white h-0.5 transition-all duration-500 left-[105px] bottom-[29px] group-hover:w-[60px] group-hover:bottom-[13px] group-hover:left-[49px]"></div>
        </div>
    </div>
</template>

<style scoped>
    img {
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