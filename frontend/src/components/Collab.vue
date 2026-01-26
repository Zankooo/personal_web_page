<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section
    id="collaborations"
    class="bg-[#f5f5f5] py-16 scroll-mt-28"
    
  >
    
  <div class="max-w-7xl mx-auto px-4 py-12">
  <div class="text-center mb-16">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
      {{ t('sodelovanja.title') }}
    </h2>
    <div class="mt-3 h-1.5 w-20 mx-auto rounded-full bg-blue-500"></div>
  </div>

  <div class="flex flex-wrap lg:flex-nowrap items-center justify-center gap-y-16 gap-x-12 lg:gap-x-16">
    
    <div class="w-[40%] sm:w-[38%] lg:flex-1 flex justify-center items-center">
      <img
        src="../assets/soup.png"
        alt="Logo 1"
        class="h-auto max-h-16 sm:max-h-20 md:max-h-24 lg:max-h-28 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>

    <div class="w-[40%] sm:w-[38%] lg:flex-1 flex justify-center items-center">
      <img
        src="../assets/stud-svet.png"
        alt="Logo 2"
        class="h-auto max-h-24 sm:max-h-28 md:max-h-34 lg:max-h-40 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>

    <div class="w-[40%] sm:w-[38%] lg:flex-[1.1] flex justify-center items-center">
      <img
        src="../assets/celtra.png"
        alt="Logo 3"
        class="h-auto max-h-10 sm:max-h-14 md:max-h-18 lg:max-h-24 object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>

    <div class="w-[40%] sm:w-[38%] lg:flex-[1.7] flex justify-center items-center">
      <img
        src="../assets/sparkasse.png"
        alt="Logo 4"
        class="h-auto max-h-16 sm:max-h-22 md:max-h-28 lg:max-h-38 w-full object-contain transition-transform duration-300 hover:scale-110"
      />
    </div>
    
  </div>
</div>


  </section>
</template>

