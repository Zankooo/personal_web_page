<script setup>
import { useI18n } from "vue-i18n"
import { ref } from "vue"

const { t, locale } = useI18n()

const name = ref("")
const email = ref("")
const message = ref("")

const success = ref(false)
const error = ref(false)

async function handleSubmit() {
  success.value = false
  error.value = false

  if (!name.value || !email.value || !message.value) {
    error.value = true
    return
  }

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
  }
}
</script>

<template>
  <section
    id="contact"
    class="bg-[#e5f1f9] min-h-screen flex flex-col justify-center font-poppins py-16"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
          {{ t("kontakt.title") }}
        </h2>
        <div class="mt-3 h-1 w-16 mx-auto rounded-full bg-blue-500"></div>

        <p
          class="mt-6 text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed"
        >
          {{ t("kontakt.nagovor_prvi_del") }}
          <a href="mailto:stankovic.zan@gmail.com" style="
              text-decoration: underline;
              font-weight: 500;
              color: #2563eb;
              cursor: pointer;">stankovic.zan@gmail.com</a>.
          {{ t("kontakt.nagovor_drugi_del") }}
        </p>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-8">
        <div
          class="bg-[#dedede] rounded-[2.5rem] px-6 sm:px-10 py-8 sm:py-10 shadow-md shadow-gray-300 space-y-6"
        >
          <div class="space-y-2">
            <label class="block text-sm sm:text-base font-semibold text-gray-900">
              {{ t("kontakt.label1") }}
            </label>
            <input
              v-model="name"
              type="text"
              :placeholder="t('kontakt.napis_tabela_1')"
              class="w-full bg-white rounded-md px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm sm:text-base font-semibold text-gray-900">
              {{ t("kontakt.label2") }}
            </label>
            <input
              v-model="email"
              type="email"
              :placeholder="t('kontakt.napis_tabela_2')"
              class="w-full bg-white rounded-md px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div class="space-y-2">
            <label class="block text-sm sm:text-base font-semibold text-gray-900">
              {{ t("kontakt.label3") }}
            </label>
            <textarea
              v-model="message"
              rows="5"
              :placeholder="t('kontakt.napis_tabela_3')"
              class="w-full bg-white rounded-md px-4 py-3 text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
        </div>

        <p v-if="success" class="text-green-600 text-center">
          ✔ {{ t('kontakt.success') }}
        </p>

        <p v-if="error" class="text-red-600 text-center">
          ✖ {{ t('kontakt.error') }}
        </p>


        <div class="flex justify-center">
          <button
            type="submit"
            class="inline-flex items-center justify-center
            px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3
            rounded-xl bg-blue-500 text-white
            text-xs sm:text-sm md:text-base
            font-semibold uppercase tracking-wide
            shadow-md hover:bg-blue-600 hover:shadow-lg transition"
          >
            {{ t("kontakt.gumb") }}
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
