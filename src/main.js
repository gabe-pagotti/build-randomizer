import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LeftNavBar from './components/LeftNavBar.vue'
import PerkIcon from './components/PerkIcon.vue'
import SelectedPerks from './components/SelectedPerks.vue'
import StuffList from './components/StuffList.vue'
import TopSection from './components/TopSection.vue'
import NavLink from './components/NavLink.vue'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('LeftNavBar', LeftNavBar)
   .component('PerkIcon', PerkIcon)
   .component('SelectedPerks', SelectedPerks)
   .component('StuffList', StuffList)
   .component('TopSection', TopSection)
   .component('NavLink', NavLink)

app.mount('#app')
