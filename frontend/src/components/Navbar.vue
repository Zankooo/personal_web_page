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
  <header class="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#1f2420]/90 text-white backdrop-blur-xl">
    <div
      class="max-w-6xl mx-auto flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 lg:px-8 transition-all duration-300"
    >
      <div
        class="flex items-center space-x-3 sm:space-x-4 transition-colors duration-300"
      >
        <img
          src="@/assets/MyAvatar.jpg"
          alt="Avatar"
          class="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover ring-1 ring-[#d8c29a]/60 transition-all duration-300"
        />
        <a
          @click="scrollToTop"
          class="font-serif text-lg sm:text-xl md:text-2xl font-semibold tracking-[0.06em] transition-colors duration-300 hover:text-[#d8c29a] cursor-pointer bg-transparent border-none outline-none"
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

        <div class="flex items-center gap-2 border-l border-white/15 pl-4">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="changeLanguage(lang.code)"
            class="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em]"
            :class="locale === lang.code ? 'text-[#d8c29a]' : 'text-white/55 hover:text-white'"
          >
            {{ lang.label }}
          </button>
        </div>
        
      </nav>

      <!-- BURGER GUMB -->
      <button
        class="lg:hidden inline-flex items-center gap-2 p-2 text-white/85 hover:text-[#d8c29a] focus:outline-none transition-all duration-300"
        @click="isOpen = !isOpen"
        aria-label="Toggle navigation"
      >
        <span v-if="!isOpen" class="space-y-1 sm:space-y-1.5">
          <span class="block w-5 sm:w-6 h-px bg-current"></span>
          <span class="block w-5 sm:w-6 h-px bg-current"></span>
          <span class="block w-5 sm:w-6 h-px bg-current"></span>
        </span>
        <span v-else class="relative w-5 sm:w-6 h-5 sm:h-6">
          <span
            class="absolute inset-0 rotate-45 origin-center block h-px bg-current mt-2.5 sm:mt-3"
          ></span>
          <span
            class="absolute inset-0 -rotate-45 origin-center block h-px bg-current mt-2.5 sm:mt-3"
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
        class="lg:hidden absolute inset-x-0 top-full border-b border-white/10 bg-[#1f2420]/95 shadow-2xl backdrop-blur-xl"
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

          <div class="pt-3 border-t border-white/10 flex items-center gap-3">
            <span class="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
              {{ t('nav.language') || 'Language' }}
            </span>
            <div class="flex items-center gap-2">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="changeLanguage(lang.code); isOpen = false"
                class="text-xs font-semibold uppercase tracking-[0.16em]"
                :class="locale === lang.code ? 'text-[#d8c29a]' : 'text-white/55 hover:text-white'"
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
  @apply font-serif font-semibold text-[17px] uppercase tracking-[0.10em] text-white/70 hover:text-[#d8c29a] whitespace-nowrap transition-all duration-200;
}

.mobile-link {
  @apply font-serif font-semibold text-[17px] uppercase tracking-[0.10em] text-white/75 hover:text-[#d8c29a];
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
