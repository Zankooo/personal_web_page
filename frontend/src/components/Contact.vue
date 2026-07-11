<script setup>
import { useI18n } from "vue-i18n"
import { ref } from "vue"

const { t } = useI18n()

const name = ref("")
const email = ref("")
const message = ref("")

const success = ref(false)
const error = ref(false)
const isSubmitting = ref(false)

async function handleSubmit() {
  if (isSubmitting.value) return

  success.value = false
  error.value = false

  if (!name.value || !email.value || !message.value) {
    error.value = true
    return
  }

  isSubmitting.value = true

  try {
    const res = await fetch("https://personal-web-page-backend.onrender.com/api/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          message: message.value,
        }),
      }
    )

    if (!res.ok) {
      error.value = true
      return
    }

    const data = await res.json()

    if (data && data.success) {
      success.value = true
      name.value = ""
      email.value = ""
      message.value = ""
    } else {
      error.value = true
    }
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section
    id="contact"
    class="bg-[#eee7dc] min-h-screen flex flex-col justify-center py-20 sm:py-24"
  >
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div>
        <p class="section-kicker">
          Availability
        </p>
        <h2 class="section-title">
          {{ t("kontakt.title") }}
        </h2>
        <div class="section-rule"></div>

        <p
          class="mt-7 text-sm sm:text-base text-[#4f4a43] max-w-xl leading-8"
        >
          {{ t("kontakt.nagovor_prvi_del") }}
          <a href="mailto:stankovic.zan@gmail.com" class="font-semibold text-[#8f6c35] underline decoration-[#b08a4a]/50 underline-offset-4">stankovic.zan@gmail.com</a>.
          {{ t("kontakt.nagovor_drugi_del") }}
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-7">
        <div
          class="premium-surface relative overflow-hidden px-5 sm:px-8 py-7 sm:py-9 space-y-6"
        >
          <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8c29a] to-transparent"></div>
          <div class="space-y-2">
            <label class="block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f5a34]">
              {{ t("kontakt.label1") }}
            </label>
            <input
              v-model="name"
              type="text"
              :placeholder="t('kontakt.napis_tabela_1')"
              class="w-full border border-[#d8c29a]/55 bg-white/70 px-4 py-3 text-sm sm:text-base text-[#171512] outline-none transition placeholder:text-[#8b857b] focus:border-[#b08a4a] focus:ring-2 focus:ring-[#d8c29a]/50"
            />
          </div>

          <div class="space-y-2">
            <label class="block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f5a34]">
              {{ t("kontakt.label2") }}
            </label>
            <input
              v-model="email"
              type="email"
              :placeholder="t('kontakt.napis_tabela_2')"
              class="w-full border border-[#d8c29a]/55 bg-white/70 px-4 py-3 text-sm sm:text-base text-[#171512] outline-none transition placeholder:text-[#8b857b] focus:border-[#b08a4a] focus:ring-2 focus:ring-[#d8c29a]/50"
            />
          </div>

          <div class="space-y-2">
            <label class="block text-xs font-semibold uppercase tracking-[0.18em] text-[#6f5a34]">
              {{ t("kontakt.label3") }}
            </label>
            <textarea
              v-model="message"
              rows="5"
              :placeholder="t('kontakt.napis_tabela_3')"
              class="w-full border border-[#d8c29a]/55 bg-white/70 px-4 py-3 text-sm sm:text-base text-[#171512] outline-none resize-none transition placeholder:text-[#8b857b] focus:border-[#b08a4a] focus:ring-2 focus:ring-[#d8c29a]/50"
            ></textarea>
          </div>
        </div>

        <p v-if="success" class="text-[#2f7d46] text-sm">
          {{ t('kontakt.success') }}
        </p>

        <p v-if="error" class="text-[#a33b2f] text-sm">
          {{ t('kontakt.error') }}
        </p>

        <p v-if="isSubmitting" class="text-[#6f5a34] text-sm">
          {{ t('kontakt.sending') }}
        </p>


        <div class="flex">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="premium-button disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
          >
            {{ isSubmitting ? t("kontakt.sendingButton") : t("kontakt.gumb") }}
          </button>
        </div>
      </form>
      </div>
    </div>
  </section>
</template>
