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
      text1: 'Študent računalništva, ki z ustvarjalnim pristopom, entuziazmom in uporabo IT tehnologij iščem praktične rešitve izzivov. Veseli me raziskovanje delovanja različnih sistemov ter pretvarjanje idej v funkcionalne, premišljene in uporabniku prijazne digitalne rešitve.',
      text2: 'Trenutno izpopolnjujem in nadgrajujem znanje sodobnih frontend ogrodij in se pripravljam na pridobitev certifikata CCNA, s katerim želim poglobiti svoje razumevanje računalniških omrežij.',
      text3: 'Učenje in raziskovanje, preučevanje novih tehnologij, izboljševanje delovnih procesov, pridobivanje novih znanj, širjenje strokovnega pogleda na podlagi izkušenj ter pridobivanja kompetenc na strokovnem področju dela, zame predstavljajo temelj mojega razvoja in so stalnica v mojem življenju.',
      text4: 'Sem pozitivno naravnana osebnost, odprt za nova sodelovanja, projekte ter izmenjavo idej s področja tehnologij in digitalnih rešitev. Vztrajnost in požrtvovalnost sem izpilil že v mladosti, ki se jo preživel na nogometnih zelenicah zato sem zelo ponosen na dvakrat pridobljeni naslovom državnega prvaka v mladinski selekciji.',
      text5: 'Veselim se novih znanj in sodelovanj, zato sem pripravljen na nove izzive in povezovanja. Za dodatne informacije ali morebitno sodelovanje me lahko kontaktirate.',
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
      subtitle: 'Profile and focus',
      summary: 'Digital development with a focus on structure, usability, and a clean visual presence.',
      text1: 'I am a computer science student who uses a creative approach, enthusiasm, and IT technologies to find practical solutions to challenges. I enjoy exploring how different systems work and turning ideas into functional, thoughtful, and user-friendly digital solutions.',
      text2: 'I am currently refining and expanding my knowledge of modern frontend frameworks and preparing to obtain the CCNA certification, through which I aim to deepen my understanding of computer networks.',
      text3: 'Learning and research, studying new technologies, improving work processes, gaining new knowledge, broadening my professional perspective through experience, and developing competencies in my field are the foundation of my growth and a constant part of my life.',
      text4: 'I am a positive person, open to new collaborations, projects, and the exchange of ideas in the fields of technology and digital solutions. I developed persistence and dedication at a young age on the football pitch, and I am proud to have twice won the national championship title in the youth category.',
      text5: 'I look forward to gaining new knowledge and working with others, so I am ready for new challenges and connections. For additional information or potential collaboration, feel free to contact me.',
      zivljenjepis: 'Download CV'
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
