<script setup>
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />

  <section id="hero" class="relative font-poppins">
    <!-- Glavna vsebina heroja -->
    <div
      class="max-w-3xl mx-auto flex flex-col items-center justify-center min-h-[90vh] px-4 text-center"
    >
      <!-- Naslov -->
      <h1
        class="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight mb-6"
      >
        Hey, I'm Žan!
        <br />
        Welcome to my personal
        <br />
        webpage!
      </h1>

      <!-- Opisni tekst -->
      <div class="space-y-2 text-base sm:text-lg text-gray-800 mb-8">
        <p>Driven by curiosity and a need to understand how things work.</p>
        <p>I use technology to solve problems and create value.</p>
        <p>Every challenge is a chance to learn and build something better.</p>
      </div>

      <!-- Gumb -->
      <a
        href="#contact"
        class="inline-flex items-center justify-center
        px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3
        rounded-xl bg-blue-500 text-white
        text-xs sm:text-sm md:text-base
        font-semibold uppercase tracking-wide
        shadow-md hover:bg-blue-600 hover:shadow-lg transition"
      >
        Contact
      </a>
    </div>

    <!-- Scroll indikator -->
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
        scroll
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

/* Scroll indikator */
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

/* 📱 dodatna prilagoditev za zelo majhne zaslone */
@media (max-width: 400px) {
  .scroll-indicator {
    bottom: 10px;
    transform: translateX(-50%) scale(0.65);
  }
}
</style>
