/**
 * Dati centralizzati del sito Caffè del Corso
 * Utilizzati in Privacy Policy, Cookie Policy, Footer, Contact, ecc.
 */

export const siteData = {
  // Informazioni aziendali
  name: 'Caffè del Corso',
  legalName: 'Caffè del Corso',
  description: 'Il tuo bar di fiducia a Boario Terme. Colazioni, pranzi leggeri, caffè di qualità e drink.',
  foundedYear: 1985,

  // Contatti
  contact: {
    address: {
      street: 'Via Vittorio Montiglio, 1',
      city: 'Darfo Boario Terme',
      province: 'BS',
      postalCode: '25047',
      country: 'Italia',
      full: 'Via Vittorio Montiglio, 1, 25047 Darfo Boario Terme (BS)',
    },
    phone: '+39 0364 793167',
    phoneDisplay: '0364 793167',
    email: 'info@caffedelcorso.it',
    whatsapp: '+390364793167',
  },

  // Social media
  social: {
    instagram: 'https://www.instagram.com/caffedelcorsoboario/',
    instagramHandle: '@caffedelcorsoboario',
    facebook: 'https://facebook.com/caffedelcorso',
  },

  // Sito web
  website: {
    url: 'https://caffedelcorso.it',
    domain: 'caffedelcorso.it',
  },

  // Coordinate geografiche
  coordinates: {
    latitude: 45.883,
    longitude: 10.183,
  },

  // Orari di apertura
  openingHours: [
    { day: 'Lunedì - Venerdì', time: '07:00 - 22:00' },
    { day: 'Sabato', time: '07:00 - 23:00' },
    { day: 'Domenica', time: '08:00 - 21:30' },
  ],

  // Policy - date ultimo aggiornamento
  policy: {
    lastUpdate: '20 Gennaio 2026',
    privacyVersion: '1.0',
    cookieVersion: '1.0',
  },
}

export default siteData
