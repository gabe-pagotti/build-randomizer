import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
import LeftNavBar from './components/LeftNavBar.vue'
import PerkIcon from './components/PerkIcon.vue'
import SelectedPerks from './components/SelectedPerks.vue'
import StuffList from './components/StuffList.vue'
import TopSection from './components/TopSection.vue'
import NavLink from './components/NavLink.vue'
import Offering from './components/Offering.vue'
import OfferingContainer from './components/OfferingContainer.vue'
import PowerItem from './components/PowerItem.vue'

import './assets/main.css'

const store = createStore({
    state () {
        let offerings = [
            {
                name: 'Ardent Raven Wreath',
                description: 'Grants 100 % bonus Bloodpoints in the Deviousness Category.',
                rarity: 'Rare',
                iconUrl: "/images/icons/offerings/iconFavors_ardentRavenWreath_lg.png",
            },
            {
                name: 'Ivory Memento Mori',
                description: 'Grants the ability to kill one SurvivorIconHelpLoading survivor.png in the Dying State, who has progressed two Hook Stages.',
                rarity: 'Rare',
                iconUrl: "/images/icons/offerings/iconFavors_momentoMoriIvory_lg.png",
            },
            {
                name: 'Bloody Party Streamers',
                description: 'Grants 100 % bonus Bloodpoints in all Categories to all Players.',
                rarity: 'Rare',
                iconUrl: "/images/icons/offerings/Anniversary/iconFavors_bloodyPartyStreamers_lg.png",
            },
            {
                name: 'Bound Envelope',
                description: 'Grants 25 % bonus Bloodpoints in all Categories to all Survivors.',
                rarity: 'Rare',
                iconUrl: "/images/icons/offerings/iconFavors_boundEnvelope_lg.png",
            },
            {
                name: 'Fragrant Primrose Blossom',
                description: 'Grants 100 % bonus Bloodpoints in the Altruism Category.',
                rarity: 'Rare',
                iconUrl: "/images/icons/offerings/iconFavors_fragrantPrimroseBlossoml_lg.png",
            },
        ];

        let perks = [
            {
                name: 'Camaraderie',
                description: 'The importance of friendship has given you strength. While you are on the Hook in the Struggle Phase, Kinship activates: If another Survivor is within 16 metres of your Hook while Kinship is active, the Struggle Phase timer is paused for 26/30/34 seconds.',
                rarity: 'Very Rare',
                iconUrl: "/images/survivor/perks/camaraderie.png",
            },
            {
                name: 'Decisive Strike',
                description: 'Using whatever is at hand, you stab your aggressor in an ultimate attempt to escape.',
                rarity: 'Very Rare',
                iconUrl: "/images/survivor/perks/decisive-strike.png",
            },
            {
                name: 'Flashbang',
                description: 'You have adapted to a world in chaos and making what you can from the debris.',
                rarity: 'Very Rare',
                iconUrl: "/images/survivor/perks/flashbang.png",
            },
            {
                name: 'Up the Ante',
                description: 'All will be well in the end; you just know it.',
                rarity: 'Very Rare',
                iconUrl: "/images/survivor/perks/up-the-ante.png",
            },
            {
                name: 'Balanced Landing',
                description: 'Your agility and cat-like relexes are incomparable.',
                rarity: 'Very Rare',
                iconUrl: "/images/survivor/perks/balanced-landing.png",
            },
        ];
        const shuffledPerks = perks.sort(() => 0.5 - Math.random());
        let selectedPerks = shuffledPerks.slice(0, 4);

        return {
            offering: offerings[Math.floor(Math.random() * offerings.length)],
            offerings: offerings,
            selectedPerk: null,
            selectedPerks: selectedPerks,
            perks: perks,
        }
    },
    mutations: {
        setOffering (state, offering) {
            state.offering = offering;
        },
        setPerk (state, perk) {
            state.selectedPerk = perk;
        }
    }
})

const app = createApp(App)

app.use(store)
app.use(router)

app.component('LeftNavBar', LeftNavBar)
   .component('PerkIcon', PerkIcon)
   .component('SelectedPerks', SelectedPerks)
   .component('StuffList', StuffList)
   .component('TopSection', TopSection)
   .component('NavLink', NavLink)
   .component('Offering', Offering)
   .component('OfferingContainer', OfferingContainer)
   .component('PowerItem', PowerItem)

app.mount('#app')
