<script setup>
function handleSubmit(event) {
  event.preventDefault();
  // tukaj lahko kasneje dodaš logiko (EmailJS, API, itd.)
}
</script>

<template>
  <section
    id="contact"
    class="bg-[#e5f1f9] min-h-screen flex flex-col justify-center font-poppins py-16"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <!-- Naslov -->
      <div class="text-center mb-10">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide">
          CONTACT
        </h2>
        <div class="mt-3 h-1 w-16 mx-auto rounded-full bg-blue-500"></div>

        <p
          class="mt-6 text-sm sm:text-base md:text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed"
        >
          Feel free to contact me by submitting the form below or by reaching out directly at
          <span class="font-semibold">stankovic.zan@gmail.com</span> — I will reply you back as soon as possible!
        </p>
      </div>

      <!-- Form “karta” -->
      <form @submit="handleSubmit" class="space-y-8">
        <div
          class="bg-[#dedede] rounded-[2.5rem] px-6 sm:px-10 py-8 sm:py-10 shadow-md shadow-gray-300 space-y-6"
        >
          <!-- Name -->
          <div class="space-y-2">
            <label class="block text-sm sm:text-base font-semibold text-gray-900">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              class="w-full bg-white rounded-md px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <!-- Email -->
          <div class="space-y-2">
            <label class="block text-sm sm:text-base font-semibold text-gray-900">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your Email"
              class="w-full bg-white rounded-md px-4 py-3 text-sm sm:text-base outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <!-- Message -->
          <div class="space-y-2">
            <label class="block text-sm sm:text-base font-semibold text-gray-900">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Enter your Message"
              class="w-full bg-white rounded-md px-4 py-3 text-sm sm:text-base outline-none resize-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
        </div>

        <!-- Submit gumb -->
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
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>
