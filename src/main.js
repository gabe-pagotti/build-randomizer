import { createApp } from 'vue';
import { createStore } from 'vuex';
import { RouterView } from 'vue-router';
import Addon from './components/Addon.vue';
import AddonsContainer from './components/AddonsContainer.vue';
import App from './App.vue';
import LeftNavBar from './components/LeftNavBar.vue';
import NavLink from './components/NavLink.vue';
import Offering from './components/Offering.vue';
import OfferingContainer from './components/OfferingContainer.vue';
import PerkIcon from './components/PerkIcon.vue';
import PowerItem from './components/PowerItem.vue';
import PowerItemContainer from './components/PowerItemContainer.vue';
import PowerItemIcon from './components/PowerItemIcon.vue';
import router from './router';
import SelectedPerks from './components/SelectedPerks.vue';
import StuffList from './components/StuffList.vue';
import TopSection from './components/TopSection.vue';
import './assets/main.css';

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

        let items = [
            {
                name: 'Camping Aid Kit',
                description: 'A rudimentary First Aid Kit which can save lives in emergencies, even if it\'s lacking some of its supplies.',
                rarity: 'Common',
                iconUrl: "/images/survivor/item/camping-aid-kit.webp",
            },
            {
                name: 'Emergency Med-Kit',
                description: 'A sturdy and well organised Med-Kit equipped with top condition emergency supplies.',
                rarity: 'Rare',
                iconUrl: "/images/survivor/item/emergency-med-kit.webp",
            },
            {
                name: 'First Aid Kit',
                description: 'A standard First Aid Kit with all the necessary equipment for treating common to more serious injuries.',
                rarity: 'Uncommon',
                iconUrl: "/images/survivor/item/first-aid-kit.webp",
            },
            {
                name: 'Masquerade Med-Kit',
                description: 'A festive Med-Kit with a shocking surprise, giving a whole new meaning to the term "Health Scare".',
                rarity: 'Event',
                iconUrl: "/images/survivor/item/masquerade-med-kit.webp",
            },
            {
                name: 'Ranger Med-Kit',
                description: 'A large metal box containing medical supplies aimed at emergency rescues in hard to reach, often isolated locations.',
                rarity: 'Very Rare',
                iconUrl: "/images/survivor/item/ranger-med-kit.webp",
            },
        ];

        let addons = [
            {
                name: 'Gel Dressings',
                description: 'A pack of gel forming pads used to patch up heavily exuding wounds.',
                rarity: 'Rare',
                iconUrl: "/images/survivor/item/addon/gel-dressings.webp",
            },
            {
                name: 'Anti-Haemorrhagic Syringe',
                description: 'An anti-haemorrhagic substance that stops the bleeding in a matter of seconds.',
                rarity: 'Ultra Rare',
                iconUrl: "/images/survivor/item/addon/syringe.webp",
            },
            {
                name: 'Gauze Roll',
                description: 'A sterile gauze used for a variety of wounds.',
                rarity: 'Uncommon',
                iconUrl: "/images/survivor/item/addon/gauze-roll.webp",
            },
            {
                name: 'Butterfly Tape',
                description: 'Medical quality tape used to close small wounds.',
                rarity: 'Common',
                iconUrl: "/images/survivor/item/addon/butterfly-tape.webp",
            },
            {
                name: 'Abdominal Dressing',
                description: 'A highly absorbent pad that prevents bodily fluid leakage when applied to large abdominal wounds.',
                rarity: 'Rare',
                iconUrl: "/images/survivor/item/addon/abdominal-dressing.webp",
            },
        ];
        const shuffledAddons = addons.sort(() => 0.5 - Math.random());

        return {
            offering: offerings[Math.floor(Math.random() * offerings.length)],
            offerings: offerings,
            selectedPerk: null,
            selectedPerks: selectedPerks,
            perks: perks,
            items: items,
            item: items[Math.floor(Math.random() * items.length)],
            addons: addons,
            selectedAddons: shuffledAddons.slice(0, 2),
            selectedAddon: null,
        }
    },
    mutations: {
        setOffering (state, offering) {
            state.offering = offering;
        },
        setPerk (state, perk) {
            let index = state.selectedPerks.findIndex((item) => item.name === perk.name);

            if (index === -1) {
                index = state.selectedPerks.findIndex((item) => item.name === state.selectedPerk.name);
                state.selectedPerks.splice(index, 1, perk);
            }

            state.selectedPerk = perk;
        },
        setAddon (state, addon) {
            let index = state.selectedAddons.findIndex((item) => item.name === addon.name);

            if (index === -1) {
                index = state.selectedAddons.findIndex((item) => item.name === state.selectedAddon.name);
                state.selectedAddons.splice(index, 1, addon);
            }

            state.selectedAddon = addon;
        },
        setItem (state, item) {
            state.item = item;
        }
    }
})

const app = createApp(App);

app.use(store)
   .use(router)
   .component('LeftNavBar', LeftNavBar)
   .component('PerkIcon', PerkIcon)
   .component('SelectedPerks', SelectedPerks)
   .component('StuffList', StuffList)
   .component('TopSection', TopSection)
   .component('NavLink', NavLink)
   .component('Offering', Offering)
   .component('OfferingContainer', OfferingContainer)
   .component('PowerItem', PowerItem)
   .component('PowerItemContainer', PowerItemContainer)
   .component('PowerItemIcon', PowerItemIcon)
   .component('Addon', Addon)
   .component('AddonsContainer', AddonsContainer)
   .component('RouterView', RouterView)
   .mixin({
        methods: {
            getBackground: function (rarity) {
                switch (rarity) {
                    case 'Common':
                        return 'bg-common';
                    case 'Rare':
                        return 'bg-rare';
                    case 'Very Rare':
                        return 'bg-very-rare';
                    case 'Ultra Rare':
                        return 'bg-ultra-rare';
                    case 'Event':
                        return 'bg-event';
                    case 'Uncommon':
                        return 'bg-uncommon';
                    default:
                        return 'bg-common';

                }
            },
        },
    })
    .mount('#app');
