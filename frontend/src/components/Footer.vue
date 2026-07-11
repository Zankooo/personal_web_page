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
  <footer class="bg-[#1f2420] text-white pt-14 pb-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 md:gap-16"
      >
        <div>
          <h3 
            class="font-serif text-2xl sm:text-3xl font-semibold tracking-normal"
            style="font-family: 'Playfair Display', serif;"
          >
            Žan Stanković
          </h3>
          <p class="mt-4 max-w-xl text-sm sm:text-base text-white/58 leading-7">
            {{ t('footer.besedilo') }}
          </p>
        </div>

        <div class="w-full md:w-auto">
          <p
            class="text-xs font-semibold tracking-[0.22em] uppercase mb-4 text-[#d8c29a] text-left md:text-right"
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
              class="opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
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

      <div class="mt-10 border-t border-white/10"></div>

      <div class="mt-6 text-center text-xs sm:text-sm text-white/45">
        © Copyright {{ currentYear }} · Made by
        <span class="font-semibold text-white/75">
          Žan Stanković
        </span>
      </div>
    </div>
  </footer>
</template>
