<script>
export default {
    emits: ['selected'],
    props: {
        "perk": Object
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
                this.$router.push('/loadout/perks');

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
    },
}
</script>

<template>
    <div class="basis-1/6 grow-0">
        <div class="relative w-20 h-20 cursor-pointer bg-none -rotate-45 bg-black group inline-block" @click="toggleSelected">
            <a>
                <div class="absolute bg-white w-0 h-0.5 top-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
                <div class="absolute bg-white w-0 h-0.5 bottom-0 left-1/2 transition-all duration-500 group-hover:w-full group-hover:left-0"></div>
                <div class="absolute bg-white w-0.5 h-0 left-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
                <div class="absolute bg-white w-0.5 h-0 right-0 top-1/2 transition-all duration-500 group-hover:h-full group-hover:top-0"></div>
                <img :src="this.perk.iconUrl" class="rotate-45" style="position: absolute;
    height: 7rem;
    width: 7rem;
    max-width: max-content;
    left: -16px;
    top: -16px;">
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>