<script setup>
// zaenkrat ne rabimo logike – tu lahko kasneje dodaš npr. props za CV/LinkedIn linke
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section
    id="about"
    class="scroll-mt-28 bg-[#F5F5F5] font-poppins min-h-screen flex items-start pt-16 sm:pt-20 md:pt-24"

  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <!-- Glavni naslov -->
      <div class="text-center mb-8">
        <h2 class="text-2xl sm:text-3xl font-bold tracking-wide">
          {{ t('about.title') }}
        </h2>
        <div class="mt-3 flex justify-center">
          <span class="h-1 w-16 rounded-full bg-blue-500"></span>
        </div>
      </div>

      <!-- Vsebina: levo tekst, desno slika -->
      <div class="grid gap-10 lg:grid-cols-2 items-center">
        <!-- LEVA STRAN – tekst -->
        <div class="text-center lg:text-left">
          <h3 class="text-lg sm:text-xl md:text-2xl font-semibold mb-6">
            {{t('about.subtitle')}}
          </h3>

          <div
            class="text-sm sm:text-base text-gray-800 leading-relaxed space-y-4"
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

          <!-- Gumba -->
          <div
            class="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a
              href="cv.pdf"
              download="Zan-Stankovic-CV.pdf"
              class="inline-flex items-center justify-center
                    px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3
                    rounded-xl bg-blue-500 text-white
                    text-xs sm:text-sm md:text-base
                    font-semibold uppercase tracking-wide
                    shadow-md hover:bg-blue-600 hover:shadow-lg transition"
            >
              {{ t('about.zivljenjepis') }}
            </a>

            <a
              href="https://www.linkedin.com/in/zan-stankovic-53b98725b/"
              class="inline-flex items-center justify-center
              px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3
              rounded-xl border border-blue-500 text-blue-500
              bg-white
              text-xs sm:text-sm md:text-base
              font-semibold uppercase tracking-wide
              hover:bg-blue-500 hover:text-white transition-colors duration-300"

            >
              LinkedIn
            </a>
          </div>
        </div>

        <!-- DESNA STRAN – slika -->
        <div class="flex flex-col items-center lg:items-end space-y-3 -mt-4">
          <div
              class="w-40 sm:w-52 md:w-64 lg:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-sm bg-gray-200"
            >
              <img
                src="@/assets/ludi-zan.jpg"
                alt="Žan avatar"
                class="w-full h-full object-cover object-[50%_65%]"
              />
            </div>


        </div>
      </div>
    </div>
  </section>
</template>
