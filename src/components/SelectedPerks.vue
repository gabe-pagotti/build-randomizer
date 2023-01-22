<script>
export default {
    data() {
        return {
            selectedPerks: [
                {
                    name: 'Ardent Raven Wreath',
                    description: 'Grants 100 % bonus Bloodpoints in the Deviousness Category.',
                    iconUrl: "/images/survivor/perks/kinship.gif",
                },
                {
                    name: 'Ardent Raven Wreath',
                    description: 'Grants 100 % bonus Bloodpoints in the Deviousness Category.',
                    iconUrl: "/images/survivor/perks/kinship.gif",
                },
                {
                    name: 'Ardent Raven Wreath',
                    description: 'Grants 100 % bonus Bloodpoints in the Deviousness Category.',
                    iconUrl: "/images/survivor/perks/kinship.gif",
                },
                {
                    name: 'Ardent Raven Wreath',
                    description: 'Grants 100 % bonus Bloodpoints in the Deviousness Category.',
                    iconUrl: "/images/survivor/perks/kinship.gif",
                },
            ]
        }
    },
}
</script>

<template>
    <div class="flex justify-between gap-1 p-10 px-24 mb-10 xl:pr-96">
        <PerkIcon v-for="perk in this.selectedPerks" :perk="perk"></PerkIcon>
    </div>
</template>

<style scoped>
</style>