import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import LeftNavBar from './components/LeftNavBar.vue'

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.component('LeftNavBar', LeftNavBar)
app.mount('#app')
