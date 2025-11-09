<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <header class="bg-white border-b border-gray-200 fixed top-0 left-0 w-full z-50">
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&display=swap"
      rel="stylesheet"
    />

    <!-- Glavna vsebina -->
    <div
      class="max-w-6xl mx-auto flex items-center justify-between py-2 sm:py-3 md:py-4 px-3 sm:px-5 lg:px-8 transition-all duration-300"
    >
      <!-- LEVA STRAN -->
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
        <a href="#about" class="nav-link">About Me</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#collaborations" class="nav-link">Collaborations</a>
        
        <a href="#contact" class="nav-link">Contact</a>
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
          Menu
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
          <a href="#about" class="mobile-link py-1" @click="isOpen = false">About Me</a>
          <a href="#skills" class="mobile-link py-1" @click="isOpen = false">Skills</a>
          <a href="#collaborations" class="mobile-link py-1" @click="isOpen = false">Collaborations</a>
          <a href="#projects" class="mobile-link py-1" @click="isOpen = false">Projects</a>
          <a href="#contact" class="mobile-link py-1" @click="isOpen = false">Contact</a>
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
