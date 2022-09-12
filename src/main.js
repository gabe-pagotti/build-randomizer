import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LeftNavBar from './components/LeftNavBar.vue'
import PerkIcon from './components/PerkIcon.vue'
import Container from './components/Container.vue'
import SelectedPerks from './components/SelectedPerks.vue'
import StuffList from './components/StuffList.vue'
import TopSection from './components/TopSection.vue'
import RightSection from './components/RightSection.vue'
import NavLink from './components/NavLink.vue'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('LeftNavBar', LeftNavBar)
   .component('PerkIcon', PerkIcon)
   .component('Container', Container)
   .component('SelectedPerks', SelectedPerks)
   .component('StuffList', StuffList)
   .component('TopSection', TopSection)
   .component('RightSection', RightSection)
   .component('NavLink', NavLink)

app.mount('#app')
