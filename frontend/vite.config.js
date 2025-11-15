// vite.config.js

import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // DODAJ TO VRSTICO:
      // To pove Vitu, naj vedno uporabi polno (full) verzijo vue-i18n,
      // ki vključuje tudi prevajalnik (compiler).
      'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
    }
  },
})


// GEMINI RESITEV DA JE TKO KER SE CONTACT KOMPONENTA
// NI RENDERALA