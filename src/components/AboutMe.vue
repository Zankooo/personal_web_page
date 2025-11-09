<script setup>
// zaenkrat ne rabimo logike – tu lahko kasneje dodaš npr. props za CV/LinkedIn linke
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
          ABOUT ME
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
            Get to know me!
          </h3>

          <div
            class="text-sm sm:text-base text-gray-800 leading-relaxed space-y-4"
          >
            <p>
              I'm a Frontend Focused Web Developer building and managing the
              front-end of websites and web applications that leads to the
              success of the overall product.
            </p>

            <p>
              Check out some of my work in the Projects section. I also like
              sharing content related to the stuff that I have learned over the
              years in Web Development so it can help other people of the Dev
              Community.
            </p>

            <p>
              Feel free to connect or follow me on my
              <span class="font-semibold underline">LinkedIn</span> and
              <span class="font-semibold underline">Instagram</span>, where I
              post useful content related to Web Development and Programming.
            </p>

            <p>
              I'm open to job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
            <p>
              I'm open to job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>

          <!-- Gumba -->
          <div
            class="mt-10 flex flex-wrap gap-3 justify-center lg:justify-start"
          >
            <a
              href="/generalen-cv.pdf"
              download="Zan-Stankovic-CV.pdf"
              class="inline-flex items-center justify-center
                    px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3
                    rounded-xl bg-blue-500 text-white
                    text-xs sm:text-sm md:text-base
                    font-semibold uppercase tracking-wide
                    shadow-md hover:bg-blue-600 hover:shadow-lg transition"
            >
              Get my CV
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
            class="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-[2.5rem] overflow-hidden shadow-md bg-gray-200"
          >
            <img
              src="@/assets/ludi-zan.jpg"
              alt="Žan avatar"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
