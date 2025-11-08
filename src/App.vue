<script setup>
import AboutMe from './components/AboutMe.vue';
import Collab from './components/Collab.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import Navbar from './components/Navbar.vue';
import Skills from './components/Skills.vue';

// bugi so na iphone se velikost telefona, scroll una animacija
// in isto iphone se, slika je preveč dol
// in tudi na iphone pro max je slika preveč dol
// na desktop kompu je pa super
</script>

<template>
<Navbar />
<Hero />
<AboutMe />
<Skills />
<Collab />
<Contact />
<Footer />

</template>

