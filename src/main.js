import './assets/main.css'
import { i18n } from './i18n'
import { createApp } from 'vue'
import App from './App.vue'
import { inject } from '@vercel/analytics'

// za vercel analitiko
inject()

const app = createApp(App)

app.use(i18n)

app.mount('#app')
