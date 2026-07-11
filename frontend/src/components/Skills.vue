<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const skillGroups = [
  {
    eyebrow: '01',
    title: 'Backend Tech',
    items: ['Node.js / Express', 'Fast API','REST APIs']
  },
  {
    eyebrow: '02',
    title: 'Frontend Tech',
    items: ['React', 'Vue', 'Tailwind CSS',]
  },
  {
    eyebrow: '03',
    title: 'Other Tools & Services',
    items: ['Git & GitHub', 'Vercel Deployment', 'Figma', 'CCNA basics', 'ChatGPT effective prompting']
  },
  {
    eyebrow: '04',
    title: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript', 'SQL', 'HTML / CSS', 'Shell scripting']
  }
]
</script>

<template>
  <section
    id="skills"
    class="bg-[#1f2420] text-white min-h-screen flex flex-col justify-center py-20 sm:py-24"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="mb-12 sm:mb-14">
        <p class="section-kicker text-[#d8c29a]">
          Capabilities
        </p>
        <h2 class="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-semibold tracking-normal text-white">
          {{ t('skills.title') }}
        </h2>
        <div class="mt-5 h-px w-24 bg-[#d8c29a]"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 border border-white/16 bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.16)]">
        <div
          v-for="group in skillGroups"
          :key="group.title"
          class="group border-b border-white/16 p-6 sm:p-8 transition duration-300 hover:bg-white/[0.055] md:odd:border-r md:[&:nth-last-child(-n+2)]:border-b-0"
        >
          <div class="flex items-start justify-between gap-6">
            <div>
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8c29a]/80">
                {{ group.eyebrow }}
              </p>
              <h3 class="mt-4 font-serif text-2xl font-semibold text-white">
                {{ group.title }}
              </h3>
            </div>
            <span class="mt-1 h-px w-10 bg-[#d8c29a]/60 transition duration-300 group-hover:w-16"></span>
          </div>
          <ul class="mt-7 grid gap-3 text-sm sm:text-base text-white/78">
            <li
              v-for="item in group.items"
              :key="item"
              class="flex items-center gap-3"
            >
              <span class="h-px w-5 bg-[#d8c29a]/55"></span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center mt-12">
        <a
        href="https://github.com/Zankooo"
        class="inline-flex items-center justify-center border border-[#d8c29a]/55 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8c29a] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d8c29a] hover:text-[#1f2420]"
        >
        {{t('skills.projekti')}}
        </a>
      </div>

    </div>


  </section>
</template>
