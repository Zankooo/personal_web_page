// src/i18n.js
import { createI18n } from 'vue-i18n'

const messages = {
  sl: {
    nav: {
      about: 'O meni',
      skills: 'Znanja',
      collaborations: 'Sodelovanja',
      projects: 'Projekti',
      contact: 'Kontakt',
      menu: 'Meni',
      slo: 'SLO',
      eng: 'ENG',
      language: 'Jezik',
    },
    hero: {
      titleLine1: 'Žan Stanković',
      titleLine2: 'Dobrodošel na moji',
      titleLine3: 'osebni spletni strani!',
      desc1: 'Študent računalništva, osredotočen na razvoj čistih, uporabnih in premišljenih digitalnih rešitev.',
      desc2: 'Združujem frontend, backend, omrežja in avtomatizacijo v projekte, ki rešujejo konkretne probleme.',
      desc3: 'Vsak izziv je priložnost za učenje in izgradnjo nekaj novega, nekaj boljšega.',
      button: 'Kontakt',
      scroll: 'scroll'
    },

    about: {
      title: 'O MENI',
      subtitle: 'Profil in usmeritev',
      text1: 'Sem 26-letni študent računalništva, strasten glede tehnologije, ustvarjalnosti in reševanja resničnih problemov s pomočjo kode in oblikovanja. Rad raziskujem, kako stvari delujejo, in svoje nekonvencionalne ideje pretvarjam v funkcionalne, elegantne digitalne rešitve.',
      text2: 'Moji interesi segajo na številna področja — od frontend in backend razvoja do oblikovanja uporabniške izkušnje (UI/UX), omrežij, avtomatizacije, AI... Uživam v ustvarjanju izkušenj, ki poenostavijo kompleksne stvari in prinašajo resnično vrednost.',
      text3: 'Trenutno izpopolnjujem svoje znanje sodobnih frontend ogrodij in se pripravljam na pridobitev certifikata CCNA, da poglobim svoje razumevanje računalniških omrežij.',
      text4: 'Na koncu koncev sem vedno v procesu učenja — preizkušam nove tehnologije, izpopolnjujem svoje delovne procese, spoznavam nove ljudi in z vsako izkušnjo širim svoja obzorja.',
      text5: 'Če si želiš sodelovati z mano ali se samo pogovarjati  o tehnologiji in novih idejah, me z veseljem kontaktiraš!',
      zivljenjepis: 'Pridobi CV'
    },
    skills: {
      title: 'ZNANJA IN VEŠČINE',
      projekti: 'PROJEKTI'
    },
    sodelovanja: {
      title: 'SODELOVANJA'
    },
    kontakt: {
      title: 'KONTAKT',
      // poenostavljen tekst v dveh delih
      nagovor_prvi_del:
        'Lahko me kontaktiraš tako, da izpolniš spodnji obrazec ali mi pišeš neposredno na e-naslov: ',
      nagovor_drugi_del: 'Odgovoril ti bom takoj, ko bo mogoče.',

      label1: 'Ime',
      label2: 'E-pošta',
      label3: 'Sporočilo',
      napis_tabela_1: 'Vnesi svoje ime',
      napis_tabela_2: 'Vnesi svoj e-naslov',
      napis_tabela_3: 'Vnesi svoje sporočilo',
      gumb: 'POŠLJI',
      sending: 'Sporočilo se pošilja. To lahko traja nekaj sekund.',
      sendingButton: 'POŠILJAM',
      success: 'Sporočilo je bilo uspešno poslano.',
      error: 'Prišlo je do napake. Prosimo, poskusi znova.'
    },
    footer: {
      besedilo:
        '26-letni študent računalništva, strasten do tehnologije, ustvarjalnosti in reševanja resničnih problemov s pomočjo kode in oblikovanja. Osredotočen na ustvarjanje čistih, funkcionalnih in uporabniku prijaznih digitalnih izkušenj, medtem ko se nenehno uči, raziskuje nove tehnologije in napreduje z vsakim projektom.',
      linki: 'Uporabne povezave'
    }
  },

  // ----------------- EN -----------------
  en: {
    nav: {
      about: 'About Me',
      skills: 'Skills',
      collaborations: 'Collaborations',
      projects: 'Projects',
      contact: 'Contact',
      menu: 'Menu',
      slo: 'SLO',
      eng: 'ENG',
      language: 'Language',
    },
    hero: {
      titleLine1: 'Žan Stanković',
      titleLine2: 'Welcome to my personal',
      titleLine3: 'webpage!',
      desc1: 'Computer Science student focused on clean, useful, and considered digital solutions.',
      desc2: 'I bring together frontend, backend, networking, and automation to build projects that solve concrete problems.',
      desc3: 'Every challenge is an opportunity to learn and build something new, something better.',
      button: 'Contact',
      scroll: 'scroll'
    },
    about: {
      title: 'ABOUT ME',
      subtitle: 'Profile and direction',
      summary: 'Digital development with a focus on structure, usability, and a clean visual presence.',
      text1: 'I’m a 26-year-old Computer Science student passionate about technology, creativity, and solving real-world problems through code and design. I love exploring how things work and turning unconventional ideas into functional, elegant digital solutions.',
      text2: 'My interests span multiple areas — from frontend and backend development to UI/UX design, networking, automation, AI... I enjoy creating experiences that simplify complexity and deliver real value.',
      text3: 'Currently, I’m sharpening my skills in modern frontend frameworks and preparing for the CCNA certification to deepen my understanding of computer networks.',
      text4: 'All in all, I’m always learning — experimenting with new technologies, refining my workflows, meeting new people, and broadening my perspective with every new experience.',
      text5: 'If you’d like to collaborate or just chat about technology and fresh ideas, feel free to reach out!',
      zivljenjepis: 'Get my CV'
    },
    skills: {
      title: 'SKILLS AND KNOWLEDGE',
      projekti: 'MY PROJECTS'
    },
    sodelovanja: {
      title: 'COLLABORATIONS'
    },
    kontakt: {
      title: 'CONTACT',
      // enako razbito kot pri sl
      nagovor_prvi_del:
        'You can contact me by filling out the form below or by writing directly to my email address: ',
      nagovor_drugi_del: 'I will get back to you as soon as possible.',

      label1: 'Name',
      label2: 'Email',
      label3: 'Message',
      napis_tabela_1: 'Enter your Name',
      napis_tabela_2: 'Enter your Email',
      napis_tabela_3: 'Enter your Message',
      gumb: 'SUBMIT',
      sending: 'Your message is being sent. This may take a few seconds.',
      sendingButton: 'SENDING',
      success: 'Your message has been sent successfully.',
      error: 'Something went wrong. Please try again.'
    },
    footer: {
      besedilo:
        'A 26-year-old computer science student passionate about technology, creativity, and solving real-world problems through code and design. Focused on building clean, functional, and user-friendly digital experiences while constantly learning, exploring new technologies, and improving with every project.',
      linki: 'Useful links'
    }
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'sl',
  fallbackLocale: 'en',
  messages,
})
