import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LeftNavBar from './components/LeftNavBar.vue'
import Container from './components/Container.vue'
import NavLink from './components/NavLink.vue'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('LeftNavBar', LeftNavBar)
   .component('Container', Container)
   .component('NavLink', NavLink)

app.mount('#app')
