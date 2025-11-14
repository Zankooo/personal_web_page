// main.js
import './assets/main.css'
import { i18n } from './i18n'
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)
app.use(i18n)

// Vstavi speed insights


app.mount('#app')