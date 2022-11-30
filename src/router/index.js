import { createRouter, createWebHistory } from 'vue-router'
import Loadout from '../components/Loadout.vue'
import OfferingList from '../components/OfferingList.vue'
import PerkList from '../components/PerkList.vue'

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
            name: 'loadout',
            component: Loadout,
            children: [{
                path: 'offerings',
                name: 'offerings',
                component: OfferingList
            },
            {
                path: 'perks',
                name: 'perks',
                component: PerkList
            }],
        },
    ]
})

export default router
