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
      text1: 'Sem študent računalništva z velikim zanimanjem za tehnologijo, ustvarjalnost ter reševanje praktičnih problemov s pomočjo programiranja in oblikovanja. Veseli me raziskovanje delovanja različnih sistemov ter pretvarjanje idej v funkcionalne, premišljene in uporabniku prijazne digitalne rešitve.',
      text2: 'Trenutno nadgrajujem znanje sodobnih frontend ogrodij in se pripravljam na pridobitev certifikata CCNA, s katerim želim poglobiti svoje razumevanje računalniških omrežij.',
      text3: 'Trenutno izpopolnjujem svoje znanje sodobnih frontend ogrodij in se pripravljam na pridobitev certifikata CCNA, da poglobim svoje razumevanje računalniških omrežij.',
      text4: 'Pomemben del mojega razvoja predstavlja stalno učenje. Redno raziskujem nove tehnologije, izboljšujem svoje delovne procese, pridobivam nova znanja in z različnimi izkušnjami širim svoj strokovni pogled.',
      text5: 'Odprt sem za nova sodelovanja, projekte ter izmenjavo idej s področja tehnologije in digitalnih rešitev. Za dodatne informacije ali morebitno sodelovanje me lahko kontaktirate.',
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
      validationError: 'Prosimo, izpolni vsa polja.',
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
      text1: 'I am a computer science student with a strong interest in technology, creativity, and solving real-world problems through programming and design. I enjoy exploring how different systems work and transforming ideas into functional, thoughtful, and user-friendly digital solutions.',
      text2: 'My interests include frontend and backend development, user interface and user experience design, computer networks, automation, and artificial intelligence. In my work, I aim to create solutions that simplify complex processes, improve the user experience, and deliver meaningful value.',
      text3: 'I am currently expanding my knowledge of modern frontend frameworks and preparing for the CCNA certification to deepen my understanding of computer networks.',
      text4: 'Continuous learning is an important part of my professional development. I regularly explore new technologies, improve my workflows, develop new skills, and broaden my perspective through different experiences and collaborations.',
      text5: 'I am open to new opportunities, projects, and discussions related to technology and digital solutions. Please feel free to contact me regarding potential collaboration or further information.',
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
      validationError: 'Please fill in all fields.',
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
