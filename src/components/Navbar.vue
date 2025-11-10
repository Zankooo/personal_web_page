<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const isOpen = ref(false)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
// ta vrstica poveze nas file i18n.js
// t je prevajalska funkcija
// recimo: t('nav.about')
// messages[trenutni_jezik].nav.about
// torej: locale.value === 'sl' ->  "O meni"
// locale.value === 'en' -> "About Me"
const { t, locale } = useI18n()

const languages = [
  { code: 'sl', label: 'SLO' },
  { code: 'en', label: 'ENG' }
]

function changeLanguage(lang) {
  locale.value = lang
}

onMounted(() => {
  // ko se page nalozi se ta koda izvede takoj
  // prebere iz local storage ce je kej tam
  const saved = localStorage.getItem('locale')
  // ce je, je ta jezik zdej v locale
  // brez te funkcije bi se stran vedno odprla v default jeziku
  if (saved) {
    locale.value = saved
  }
  else {

  }
})

// ta funkcija pa skozi opazuje spremembe vrednosti locale
// in ko se spremeni se izvede funkcija
// in nato nov jezik shrani v local storage
watch(locale, (newVal) => {
  localStorage.setItem('locale', newVal)
})

</script>

<template>
  <header class="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap"
      rel="stylesheet"
    />

    <div
      class="max-w-6xl mx-auto flex items-center justify-between py-2 sm:py-3 md:py-4 px-3 sm:px-5 lg:px-8 transition-all duration-300"
    >
      <div
        class="flex items-center space-x-2 sm:space-x-4 rounded-2xl p-1 sm:p-2 bg-white transition-colors duration-300"
      >
        <img
          src="@/assets/MyAvatar.jpg"
          alt="Avatar"
          class="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl object-cover transition-all duration-300"
        />
        <a
          @click="scrollToTop"
          class="font-bold tracking-wide text-base sm:text-lg md:text-xl lg:text-2xl transition-colors duration-300 hover:text-gray-500 cursor-pointer bg-transparent border-none outline-none"
          style="font-family: 'Playfair Display', serif;"
        >
          ŽAN STANKOVIĆ
        </a>
      </div>

      <!-- DESKTOP NAV -->
      <nav class="hidden lg:flex items-center space-x-8">
        <a href="#about" class="nav-link">{{ t('nav.about') }}</a>
        <a href="#skills" class="nav-link">{{ t('nav.skills') }}</a>
        <a href="#collaborations" class="nav-link">{{ t('nav.collaborations') }}</a>
        <a href="#contact" class="nav-link">{{ t('nav.contact') }}</a>

        <div class="flex items-center gap-2 border-l border-gray-200 pl-4">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="changeLanguage(lang.code)"
            class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em]"
            :class="locale === lang.code ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'"
          >
            {{ lang.label }}
          </button>
        </div>
        
      </nav>

      <!-- BURGER GUMB -->
      <button
        class="lg:hidden inline-flex items-center gap-1 sm:gap-2 p-1 sm:p-2 rounded-md text-gray-700 hover:text-blue-500 hover:bg-gray-100 focus:outline-none transition-all duration-300"
        @click="isOpen = !isOpen"
        aria-label="Toggle navigation"
      >
        <span v-if="!isOpen" class="space-y-1 sm:space-y-1.5">
          <span class="block w-5 sm:w-6 h-0.5 bg-gray-800"></span>
          <span class="block w-5 sm:w-6 h-0.5 bg-gray-800"></span>
          <span class="block w-5 sm:w-6 h-0.5 bg-gray-800"></span>
        </span>
        <span v-else class="relative w-5 sm:w-6 h-5 sm:h-6">
          <span
            class="absolute inset-0 rotate-45 origin-center block h-0.5 bg-gray-800 mt-2.5 sm:mt-3"
          ></span>
          <span
            class="absolute inset-0 -rotate-45 origin-center block h-0.5 bg-gray-800 mt-2.5 sm:mt-3"
          ></span>
        </span>

        <span
          class="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] sm:tracking-[0.14em]"
        >
          {{ t('nav.menu') }}
        </span>
      </button>
    </div>

    <!-- MOBILNI MENU -->
    <Transition name="mobile-menu">
      <div
        v-if="isOpen"
        class="lg:hidden absolute inset-x-0 top-full bg-white border-b border-gray-200 shadow-md"
      >
        <nav class="flex flex-col px-4 py-3 space-y-2 max-w-6xl mx-auto">
          <a href="#about" class="mobile-link py-1" @click="isOpen = false">{{ t('nav.about') }}</a>
          <a href="#skills" class="mobile-link py-1" @click="isOpen = false">{{ t('nav.skills') }}</a>
          <a href="#collaborations" class="mobile-link py-1" @click="isOpen = false">
            {{ t('nav.collaborations') }}
          </a>
          <a href="#projects" class="mobile-link py-1" @click="isOpen = false">
            {{ t('nav.projects') }}
          </a>
          <a href="#contact" class="mobile-link py-1" @click="isOpen = false">{{ t('nav.contact') }}</a>

          <div class="pt-3 border-t border-gray-200 flex items-center gap-3">
            <span class="text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
              {{ t('nav.language') || 'Language' }}
            </span>
            <div class="flex items-center gap-2">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLanguage(lang.code); isOpen = false"
                class="text-xs font-semibold uppercase tracking-[0.16em]"
                :class="locale === lang.code ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'"
              >
                {{ lang.label }}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-link {
  @apply font-semibold text-xs sm:text-sm uppercase tracking-[0.14em] sm:tracking-[0.16em] text-black hover:text-blue-500 whitespace-nowrap transition-all duration-200;
}

.mobile-link {
  @apply font-semibold text-sm uppercase tracking-[0.14em] text-black hover:text-blue-500;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.5s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
