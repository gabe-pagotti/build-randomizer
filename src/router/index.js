import { createRouter, createWebHistory } from 'vue-router'
import Loadout from '../components/Loadout.vue'
import OfferingList from '../components/OfferingList.vue'
import PerkList from '../components/PerkList.vue'
import AddonList from '../components/AddonList.vue'
import ItemList from '../components/ItemList.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Loadout
        },
        {
            path: '/loadout',
            redirect: '/loadout/offerings',
            name: 'loadout',
            component: Loadout,
            children: [{
                path: 'offerings',
                name: 'offerings',
                component: OfferingList
            },
            {
                path: 'items',
                name: 'items',
                component: ItemList
            },
            {
                path: 'perks',
                name: 'perks',
                component: PerkList
            },
            {
                path: 'addons',
                name: 'addons',
                component: AddonList
            },
            {
                path: 'items',
                name: 'items',
                component: ItemList
            }],
        },
    ]
})

export default router
