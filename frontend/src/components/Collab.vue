<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section
    id="collaborations"
    class="bg-[#f7f3ec] py-20 sm:py-24 scroll-mt-28"
    
  >
    
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="mb-14">
    <p class="section-kicker">
      Selected Work
    </p>
    <h2 class="section-title">
      {{ t('sodelovanja.title') }}
    </h2>
    <div class="section-rule"></div>
  </div>

  <div class="premium-surface grid grid-cols-2 lg:grid-cols-4">
    
    <div class="min-h-36 flex justify-center items-center border-b border-r border-[#b08a4a]/25 p-7 lg:border-b-0">
      <img
        src="../assets/soup.png"
        alt="Logo 1"
        class="h-auto max-h-14 sm:max-h-16 md:max-h-20 object-contain"
      />
    </div>

    <div class="min-h-36 flex justify-center items-center border-b border-[#b08a4a]/25 p-7 lg:border-b-0 lg:border-r">
      <img
        src="../assets/stud-svet.png"
        alt="Logo 2"
        class="h-auto max-h-20 sm:max-h-24 md:max-h-28 object-contain"
      />
    </div>

    <div class="min-h-36 flex justify-center items-center border-r border-[#b08a4a]/25 p-7">
      <img
        src="../assets/celtra.png"
        alt="Logo 3"
        class="h-auto max-h-9 sm:max-h-12 md:max-h-14 object-contain"
      />
    </div>

    <div class="min-h-36 flex justify-center items-center p-7">
      <img
        src="../assets/sparkasse.png"
        alt="Logo 4"
        class="h-auto max-h-16 sm:max-h-20 md:max-h-24 w-full object-contain"
      />
    </div>
    

    
    
  </div>
</div>


  </section>
</template>
