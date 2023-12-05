import './assets/style/main.css'
import './assets/style/tailwind.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as IconsFa from '@fortawesome/free-solid-svg-icons'


library.add(
    IconsFa.faPlus,
    IconsFa.faCaretDown,
    IconsFa.faArrowRight,
    IconsFa.faArrowLeftLong,
    IconsFa.faArrowRightLong,
    IconsFa.faBars,
    fab.faFacebook,
    fab.faTwitter,
    fab.faInstagram,
    fab.faYoutube,
)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
