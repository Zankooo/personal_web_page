<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-[#1f2420] text-white">
    <div class="absolute inset-0">
      <img
        src="@/assets/hero-premium-bg.png"
        alt=""
        class="h-full w-full object-cover object-center opacity-90"
      />
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,36,32,0.94)_0%,rgba(31,36,32,0.80)_48%,rgba(31,36,32,0.54)_100%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(216,194,154,0.22),transparent_32%)]"></div>
      <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c29a]/50 to-transparent"></div>
    </div>

    <div
      class="relative max-w-6xl mx-auto flex min-h-[92vh] flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-24"
    >
      <div class="max-w-3xl">
        <div class="flex items-center gap-4">
          <span class="h-px w-12 bg-[#d8c29a]"></span>
          <p class="section-kicker text-[#d8c29a]">
            Portfolio / Computer Science
          </p>
        </div>
        <h1
            class="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.94] tracking-normal"
        >
          {{ t('hero.titleLine1') }}
        </h1>

        <div class="mt-8 max-w-2xl border-l border-[#d8c29a]/45 pl-5 space-y-3 text-base sm:text-lg leading-8 text-white/76">
          <p>{{ t('hero.desc1') }}</p>
          <p>{{ t('hero.desc2') }}</p>
        </div>

        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            class="premium-button"
          >
            {{ t('hero.button') }}
          </a>
          <a
            href="#about"
            class="inline-flex items-center justify-center border border-white/20 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 transition duration-300 hover:-translate-y-0.5 hover:border-[#d8c29a] hover:text-[#d8c29a]"
          >
            {{ t('nav.about') }}
          </a>
        </div>

        <div class="mt-14 grid w-fit grid-cols-1 gap-3 border-y border-white/12 py-5 pr-10 text-left text-xs uppercase tracking-[0.22em] text-white/54 sm:w-full sm:max-w-2xl sm:grid-cols-3 sm:pr-0 sm:text-center">
          <span>Frontend</span>
          <span>Backend</span>
          <span>Automation</span>
        </div>
      </div>
    </div>

    <div
      class="scroll-indicator absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none scale-75 sm:scale-90 md:scale-100"
    >
      <div class="mouse-box">
        <div class="mouse-wheel"></div>
      </div>
      <span
        class="mt-2 text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-white/45 select-none"
      >
        {{ t('hero.scroll') }}
      </span>
    </div>
  </section>
</template>

<style>
.mouse-box {
  width: 28px;
  height: 48px;
  border-radius: 999px;
  border: 1px solid rgba(216, 194, 154, 0.55);
  position: relative;
}

.mouse-wheel {
  width: 6px;
  height: 6px;
  border-radius: 999px;
  background-color: #d8c29a;
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
