import { createRouter, createWebHistory } from 'vue-router'
import Loadout from '../components/Loadout.vue'

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
            component: Loadout
        },
    ]
})

export default router
