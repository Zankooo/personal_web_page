<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section
    id="skills"
    class="bg-[#e9f1f7] min-h-screen flex flex-col justify-center py-20"
  >
    <div class="max-w-5xl mx-auto px-4">
      <!-- Naslov -->
      <div class="text-center mb-12">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
          {{ t('skills.title') }}
        </h2>
        <div class="mt-3 h-1 w-16 mx-auto rounded-full bg-blue-500"></div>
      </div>

      <!-- Grid kartic -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">


        <!-- Backend Tech -->
        <div class="bg-white rounded-3xl shadow-lg p-7 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-blue-100 text-blue-500">
            <span class="text-xl">🗄️</span>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-2">Backend Tech</h3>
            <ul class="space-y-1 text-sm sm:text-base text-slate-700 list-disc list-inside">
              <li>Node.js / Express</li>
              <li>REST APIs</li>
            </ul>
          </div>
        </div>

        <!-- Frontend Tech -->
        <div class="bg-white rounded-3xl shadow-lg p-7 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-green-100 text-green-500">
            <span class="text-xl">📱</span>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-2">Frontend Tech</h3>
            <ul class="space-y-1 text-sm sm:text-base text-slate-700 list-disc list-inside">
              <li>React</li>
              <li>Vue</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
        </div>

        <!-- Other Tools & Services -->
        <div class="bg-white rounded-3xl shadow-lg p-7 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-purple-100 text-purple-500">
            <span class="text-xl">⚡</span>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-2">Other Tools & Services</h3>
            <ul class="space-y-1 text-sm sm:text-base text-slate-700 list-disc list-inside">
              <li>Git & GitHub</li>
              <li>Vercel Deployment</li>
              <li>Figma</li>
              <li>CCNA basics</li>
              <li>Chat GPT effective prompting</li>
            </ul>
          </div>
        </div>

        <!-- Programming Languages -->
        <div class="bg-white rounded-3xl shadow-lg p-7 flex flex-col gap-4 transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div class="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-amber-100 text-amber-500">
            <span class="text-xl">&lt;/&gt;</span>
          </div>
          <div>
            <h3 class="font-semibold text-lg mb-2">Programming Languages</h3>
            <ul class="space-y-1 text-sm sm:text-base text-slate-700 list-disc list-inside">
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>HTML / CSS</li>
              <li>Shell scripting</li>
            </ul>
          </div>
        </div>


      </div>
      <div class="flex items-center justify-center mt-12">
        <a
        href="https://github.com/Zankooo"
        class="inline-flex items-center justify-center
        px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3
        rounded-xl border border-blue-500 text-blue-500
        bg-white
        text-xs sm:text-sm md:text-base
        font-semibold uppercase tracking-wide
        hover:bg-blue-500 hover:text-white transition-colors duration-300"
        >
        {{t('skills.projekti')}}
        </a>
      </div>

    </div>


  </section>
</template>