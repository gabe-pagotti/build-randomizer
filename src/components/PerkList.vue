<script>
export default {
    data() {
        return {
            perks: [
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
    <div>
        <div class="flex flex-wrap gap-3 pl-10 xl:pr-96 py-0 justify-start">
            <PerkIcon v-for="perk in this.perks" :perk="perk"></PerkIcon>
        </div>
        <div class="flex flex-wrap gap-3 pl-10 xl:pr-96 py-0 justify-end">
            <PerkIcon v-for="perk in this.perks" :perk="perk"></PerkIcon>
        </div>
        <div class="flex flex-wrap gap-3 pl-10 xl:pr-96 py-0 justify-start">
            <PerkIcon v-for="perk in this.perks" :perk="perk"></PerkIcon>
        </div>
    </div>
</template>

<style scoped>
</style>