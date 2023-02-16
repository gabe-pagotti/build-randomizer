<script>
export default {
    data() {
        return {
            oferings: [
                {
                    name: 'Ardent Raven Wreath',
                    description: 'Grants 100 % bonus Bloodpoints in the Deviousness Category.',
                    iconUrl: "/images/icons/offerings/iconFavors_ardentRavenWreath_lg.png",
                },
                {
                    name: 'Ivory Memento Mori',
                    description: 'Grants the ability to kill one SurvivorIconHelpLoading survivor.png in the Dying State, who has progressed two Hook Stages.',
                    iconUrl: "/images/icons/offerings/iconFavors_momentoMoriIvory_lg.png",
                },
                {
                    name: 'Ardent Raven Wreath',
                    description: 'Grants 100 % bonus Bloodpoints in the Deviousness Category.',
                    iconUrl: "/images/icons/offerings/iconFavors_ardentRavenWreath_lg.png",
                },
                {
                    name: 'Ivory Memento Mori',
                    description: 'Grants the ability to kill one SurvivorIconHelpLoading survivor.png in the Dying State, who has progressed two Hook Stages.',
                    iconUrl: "/images/icons/offerings/iconFavors_momentoMoriIvory_lg.png",
                },
                {
                    name: 'Ardent Raven Wreath',
                    description: 'Grants 100 % bonus Bloodpoints in the Deviousness Category.',
                    iconUrl: "/images/icons/offerings/iconFavors_ardentRavenWreath_lg.png",
                },
            ]
        }
    },
}
</script>

<template>
    <div>
        <div class="flex flex-wrap gap-9 pl-10 xl:pr-96 py-0 justify-start">
            <Offering v-for="offering in this.oferings" :offering="offering"></Offering>
        </div>
        <div class="flex flex-wrap gap-9 pl-10 md:pr-12 md:justify-end xl:justify-start xl:pl-28 py-0">
            <Offering v-for="offering in this.oferings" :offering="offering"></Offering>
        </div>
        <div class="flex flex-wrap gap-9 pl-10 xl:pr-96 py-0 justify-start">
            <Offering v-for="offering in this.oferings" :offering="offering"></Offering>
        </div>
    </div>
</template>

<style scoped>
</style>