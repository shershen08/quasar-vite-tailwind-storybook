import { createApp } from 'vue'
import './index.css'

import App from './App.vue'
import { Quasar} from 'quasar'

// DISABLE TO SEE TAILWIND STYLES
// Import Quasar css
// import 'quasar/src/css/index.sass'
// import '@quasar/extras/material-icons/material-icons.css'

// Import tailwind css
import '@/tailwind.css'
import '@/assets/styles/index.css'

const quasarUserOptions = {
    config: {
      loadingBar: {
        html: false
      },
    //   brand: {
    //     primary: '#0b9b90', // green
    //     secondary: '#ef941b' // orange
    //   }
    },
    plugins: {}
  }

const app = createApp(App)
app.use(Quasar, quasarUserOptions)
app.mount('#app')
