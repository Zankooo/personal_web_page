<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />

  <section id="hero" class="relative font-poppins">
    <div
      class="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[90vh] px-4 text-center"
    >
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6"
      >
        {{ t('hero.titleLine1') }}
        <br />
        {{ t('hero.titleLine2') }}
        <br />
        {{ t('hero.titleLine3') }}
      </h1>

      <div class="space-y-2 text-base sm:text-lg text-gray-800 mb-8">
        <p>{{ t('hero.desc1') }}</p>
        <p>{{ t('hero.desc2') }}</p>
        <p>{{ t('hero.desc3') }}</p>
      </div>

      <a
        href="#contact"
        class="inline-flex items-center justify-center
        px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3
        rounded-xl bg-blue-500 text-white
        text-xs sm:text-sm md:text-base
        font-semibold uppercase tracking-wide
        shadow-md hover:bg-blue-600 hover:shadow-lg transition"
      >
        {{ t('hero.button') }}
      </a>
    </div>

    <div
      class="scroll-indicator absolute bottom-16 sm:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none
      scale-75 sm:scale-90 md:scale-100"
    >
      <div class="mouse-box">
        <div class="mouse-wheel"></div>
      </div>
      <span
        class="mt-2 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-gray-500 select-none"
      >
        {{ t('hero.scroll') }}
      </span>
    </div>
  </section>
</template>

<style>
:root {
  --svetlo_modra_background: #e9f1f7;
}

#hero {
  background-color: var(--svetlo_modra_background);
  background-image: radial-gradient(#e5e5e5 1px, transparent 1px);
  background-size: 24px 24px;
}

.mouse-box {
  width: 28px;
  height: 48px;
  border-radius: 999px;
  border: 2px solid #9ca3af;
  position: relative;
}

.mouse-wheel {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: #9ca3af;
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  animation: scrollDot 1.3s infinite ease-in-out;
}

@keyframes scrollDot {
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  20% {
    opacity: 1;
    transform: translate(-50%, 4px);
  }
  60% {
    transform: translate(-50%, 16px);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, 22px);
    opacity: 0;
  }
}

@media (max-width: 400px) {
  .scroll-indicator {
    bottom: 10px;
    transform: translateX(-50%) scale(0.65);
  }
}
</style>
