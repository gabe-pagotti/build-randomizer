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
                description: 'Grants the ability to kill one SurvivorIconHelpLoading survivor.png in the Dying State, who has progressed two Hook Stages',
                rarity: 'Rare',
                iconUrl: "/images/icons/offerings/iconFavors_momentoMoriIvory_lg.png",
            }
        ];

        return {
            offering: offerings[Math.floor(Math.random() * offerings.length)]
        }
    },
    mutations: {
        setOffering (state, offering) {
            state.offering = offering;
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
