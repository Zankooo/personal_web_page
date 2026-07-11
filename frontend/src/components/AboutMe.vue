<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n()

const cvFile = computed(() => locale.value === 'en' ? 'cv-eng.pdf' : 'cv.pdf')
const cvDownloadName = computed(() => locale.value === 'en' ? 'Zan-Stankovic-CV-ENG.pdf' : 'Zan-Stankovic-CV.pdf')
</script>

<template>
  <section
    id="about"
    class="scroll-mt-28 bg-[#f7f3ec] min-h-screen flex items-center py-20 sm:py-24 md:py-28"

  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="mb-12 flex flex-col gap-6 border-b border-[#b08a4a]/18 pb-10 lg:flex-row lg:items-end lg:justify-between">
        <div>
        <p class="section-kicker">
          Profile
        </p>
        <h2 class="section-title">
          {{ t('about.title') }}
        </h2>
        <div class="section-rule"></div>
        </div>
        
      </div>

      <div class="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
        <div class="premium-surface p-6 sm:p-8">
          <h3 class="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold mb-7 text-[#171512]">
            {{t('about.subtitle')}}
          </h3>

          <div
            class="max-w-2xl text-sm sm:text-base text-[#4f4a43] leading-8 space-y-5"
          >
            <p>
              {{ t('about.text1') }}
            </p>

            <p>
              {{ t('about.text2') }}
            </p>

            <p>
              {{ t('about.text3') }}
            </p>

            <p>
              {{ t('about.text4') }}
            </p>
            <p>
              {{ t('about.text5') }}
            </p>
          </div>

          <div
            class="mt-10 flex flex-wrap gap-3"
          >
            <a
              :href="cvFile"
              :download="cvDownloadName"
              class="premium-button"
            >
              {{ t('about.zivljenjepis') }}
            </a>

            <a
              href="https://www.linkedin.com/in/zan-stankovic-53b98725b/"
              class="premium-button-outline"

            >
              LinkedIn
            </a>
          </div>
        </div>

        <div class="flex flex-col items-center lg:items-end">
          <div
              class="relative w-full max-w-[380px] aspect-[4/5] bg-[#ded4c5] p-3 shadow-[0_34px_90px_rgba(31,36,32,0.22)] ring-1 ring-[#b08a4a]/25"
            >
              <div class="absolute -right-4 -top-4 h-24 w-24 border-r border-t border-[#b08a4a]/45"></div>
              <div class="absolute -bottom-4 -left-4 h-24 w-24 border-b border-l border-[#b08a4a]/45"></div>
              <div class="absolute inset-6 border border-white/40 z-10 pointer-events-none"></div>
              <img
                src="@/assets/ludi-zan.jpg"
                alt="Žan avatar"
                class="relative w-full h-full object-cover object-[50%_65%]"
              />
            </div>
        </div>
      </div>
    </div>
  </section>
</template>
