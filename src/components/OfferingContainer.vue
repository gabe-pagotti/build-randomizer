<script>
export default {
    data() {
        return {}
    },
    methods: {
        getRadomOffering() {
            let offerings = [
                {
                    name: 'Ardent Raven Wreath',
                    description: 'Grants 100 % bonus Bloodpoints in the Deviousness Category.',
                    rarity: 'Rare',
                    iconUrl: "/images/icons/offerings/iconFavors_ardentRavenWreath_lg.png",
                },
                {
                    name: 'Ivory Memento Mori',
                    description: 'Grants the ability to kill one SurvivorIconHelpLoading survivor.png in the Dying State, who has progressed two Hook Stages',
                    rarity: 'Rare',
                    iconUrl: "/images/icons/offerings/iconFavors_momentoMoriIvory_lg.png",
                }
            ];

            return offerings[Math.floor(Math.random() * offerings.length)];
        }
    },
}
</script>

<template>
    <div class="flex flex-wrap flex-col content-around gap-3 w-1/2 mt-auto align-bottom">
        <h1 class="text-white text-bold">OFFERING</h1>
        <Offering :offering="this.getRadomOffering()"/>
    </div>
</template>

<style scoped>
</style>