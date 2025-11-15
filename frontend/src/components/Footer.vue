<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const currentYear = new Date().getFullYear()

// tvoje ikone
const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zan-stankovic-53b98725b/',
    icon: new URL('@/assets/linkedin.png', import.meta.url).href
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Zankooo',
    icon: new URL('@/assets/github.png', import.meta.url).href
  }
]
</script>

<template>
  <footer class="bg-black text-white pt-14 pb-8">
    <div class="max-w-6xl mx-auto px-4">
      <!-- Zgornji del -->
      <div
        class="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16"
      >
        <!-- Levo: ime in opis -->
        <div>
          <h3 
            class="text-xl sm:text-2xl font-semibold tracking-[0.16em] uppercase"
            style="font-family: 'Playfair Display', serif;"
          >
            Žan Stanković
          </h3>
          <p class="mt-4 max-w-xl text-sm sm:text-base text-gray-300 leading-relaxed">
            {{ t('footer.besedilo') }}
          </p>
        </div>

        <!-- Desno: social -->
        <div class="w-full md:w-auto">
          <p
            class="text-sm font-semibold tracking-[0.16em] uppercase mb-4 text-gray-200 text-left md:text-right"
          >
            {{ t('footer.linki') }}
          </p>

          <div class="flex md:justify-end items-center gap-5">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noreferrer"
              class="transition-transform hover:scale-110"
              :aria-label="social.name"
            >
              <img
                :src="social.icon"
                :alt="social.name"
                :class="[
                  'object-contain',
                  social.name === 'GitHub' ? 'w-20 sm:w-24 md:w-28' : 'w-8 sm:w-10 md:w-12'
                ]"
              />
            </a>
          </div>
        </div>
      </div>

      <!-- Črta -->
      <div class="mt-10 border-t border-gray-700"></div>

      <!-- Copyright -->
      <div class="mt-6 text-center text-xs sm:text-sm text-gray-400">
        © Copyright {{ currentYear }} · Made by
        <span class="font-semibold text-white">
          Žan Stanković
        </span>
      </div>
    </div>
  </footer>
</template>
