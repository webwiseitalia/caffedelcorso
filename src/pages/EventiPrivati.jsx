/**
 * Eventi Privati Page
 * Pagina dedicata agli eventi personalizzati
 */

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import images
import foto1 from '../assets/foto/foto-1.webp'
import foto5 from '../assets/foto/foto-5.webp'
import foto8 from '../assets/foto/foto-8.webp'
import foto10 from '../assets/foto/foto-10.webp'
import foto14 from '../assets/foto/foto-14.webp'
import foto18 from '../assets/foto/foto-18.webp'
import pancakeFrutta from '../assets/new/new-11.webp'
import eventoBirthday from '../assets/new/new-9.webp'
import eventoLaurea from '../assets/new/new-6.webp'
import eventoParty from '../assets/new/new-1.webp'
import eventoAllestimento from '../assets/foto/foto-31.webp'
import sfondoCocktail from '../assets/sfondi/sfondi-3.webp'

gsap.registerPlugin(ScrollTrigger)

export default function EventiPrivati() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current?.querySelectorAll('.animate-item') || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
        }
      )

      // Cards animation
      const cards = cardsRef.current?.querySelectorAll('.event-card') || []
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const formule = [
    {
      title: 'Apericorso',
      subtitle: 'Un aperitivo più ricco e conviviale',
      description: 'Perfetto per iniziare la serata con gusto.',
      items: [
        'Taglieri di stuzzichini rinforzati',
        'Focacce in vari gusti',
        'Frittini',
        'Salse dip',
        'Patatine, olive e noccioline',
      ],
      price: '15€ a persona',
      note: '1 consumazione a scelta inclusa',
      image: foto1,
    },
    {
      title: 'Apericena Silver',
      subtitle: 'Formula base per chi vuole qualcosa in più',
      description: 'Un aperitivo più sostanzioso, con possibilità di personalizzazione.',
      items: [
        'Stuzzicherie miste (fritti e focacce)',
        'Opzione affettati o vegetariana',
        'Primo piatto',
        'Allestimento incluso',
      ],
      price: '20€ a persona',
      note: 'Bevande escluse',
      image: eventoAllestimento,
    },
    {
      title: 'Apericena Gold',
      subtitle: 'La formula completa tutto incluso',
      description: 'L\'esperienza completa con bevande incluse.',
      items: [
        'Stuzzicherie miste (fritti e focacce)',
        'Opzione affettati o vegetariana',
        'Primo piatto',
        'Boul di spritz / birra / analcolico / prosecco / Campari + aranciata (1 litro ogni 3 persone)',
        'Allestimento incluso',
      ],
      price: '25€ a persona',
      note: 'Tutto incluso',
      image: eventoBirthday,
    },
    {
      title: 'Platinum',
      subtitle: 'Creiamo l\'evento su misura per te',
      description: 'L\'esperienza esclusiva e completamente personalizzata per il tuo evento speciale.',
      items: [
        'Menu completamente personalizzabile',
        'Consulenza dedicata per la creazione del menu',
        'Bevande premium a scelta',
        'Allestimento personalizzato',
        'Staff dedicato',
        'Ogni dettaglio studiato insieme a te',
      ],
      price: 'Su preventivo',
      note: 'Contattaci per un preventivo personalizzato',
      highlight: true,
      image: eventoLaurea,
      rotateImage: 90,
    },
    {
      title: 'CorsoBrunch',
      subtitle: 'Brunch a buffet dolce e salato',
      description: 'Perfetto per un evento mattutino o pomeridiano.',
      items: [
        'Pancake fantasia',
        'Brioches e torte',
        'Avocado & salmon toast',
        'Uova strapazzate con bacon',
        'Centrifughe e succhi bio',
        'Una bevanda calda a persona',
      ],
      price: '20€ a persona',
      note: 'Minimo 5 persone',
      image: foto10,
    },
    {
      title: 'Merenda Brunch',
      subtitle: 'Un momento dolce e leggero',
      description: 'Merenda a buffet ideale per un break speciale.',
      items: [
        'Pancake e mini yogurt frozen fantasia',
        'Brioches e tortine monoporzione',
        'Cubotti di focaccia salata farcita',
        '1 bevanda a scelta tra centrifughe, spremute, succhi bio o bevanda calda',
      ],
      price: '15€ a persona',
      note: 'Minimo 5 persone',
      image: pancakeFrutta,
    },
  ]

  return (
    <div ref={sectionRef} className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <header
        ref={heroRef}
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ background: 'var(--color-bg-warm)' }}
      >
        {/* Sfondo decorativo cocktail grande */}
        <div
          className="absolute -bottom-5 -left-5 md:-bottom-10 md:-left-10 w-[70%] md:w-[60%] h-[80%] md:h-[120%] pointer-events-none"
          style={{
            backgroundImage: `url(${sfondoCocktail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
            opacity: 0.4,
          }}
        />

        {/* Background decorative text */}
        <div
          className="absolute top-10 left-0 whitespace-nowrap pointer-events-none select-none opacity-10"
          style={{
            fontSize: 'clamp(6rem, 15vw, 15rem)',
            fontFamily: 'var(--font-display)',
            color: 'var(--color-rust)',
            lineHeight: 0.8,
          }}
        >
          Eventi
        </div>

        <div className="container-wide px-6 relative z-10">
          <Link
            to="/"
            className="animate-item inline-flex items-center gap-2 text-small mb-8 hover:text-[var(--color-rust)] transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </Link>

          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <p
                className="animate-item text-small mb-4"
                style={{ color: 'var(--color-rust)' }}
              >
                Il tuo evento al Corso
              </p>

              <h1
                className="animate-item text-display mb-6"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Eventi{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--color-rust)' }}>
                  personalizzati
                </span>
              </h1>

              <p
                className="animate-item text-body-xl max-w-2xl"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Organizziamo eventi su misura per ogni occasione: compleanni, lauree,
                feste private e piccoli eventi aziendali. Scegli la formula che
                preferisci e noi ci occupiamo di tutto.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-5 animate-item">
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{ aspectRatio: '4/3', transform: 'rotate(2deg)' }}
              >
                <img
                  src={foto18}
                  alt="Eventi privati al Caffè del Corso"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Formule Section */}
      <main className="py-16 md:py-24">
        <div className="container-wide px-6">
          <div ref={cardsRef} className="space-y-12 md:space-y-20">
            {formule.map((formula, index) => (
              <div
                key={index}
                className={`event-card grid grid-cols-12 gap-6 md:gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`col-span-12 md:col-span-5 ${
                    index % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <div
                    className="overflow-hidden shadow-xl"
                    style={{
                      aspectRatio: '4/3',
                      transform: `rotate(${index % 2 === 0 ? -2 : 2}deg)`,
                    }}
                  >
                    <img
                      src={formula.image}
                      alt={formula.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      style={formula.rotateImage ? { transform: `rotate(${formula.rotateImage}deg) scale(1.4)` } : {}}
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`col-span-12 md:col-span-7 ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}
                >
                  <div
                    className="p-8 md:p-12 relative"
                    style={{
                      background: formula.highlight
                        ? '#95B58E'
                        : 'var(--color-bg-cream)',
                    }}
                  >
                    {formula.highlight && (
                      <span
                        className="absolute top-4 right-4 text-mono px-3 py-1"
                        style={{
                          background: 'var(--color-text)',
                          color: '#95B58E',
                          fontSize: '0.65rem',
                        }}
                      >
                        Consigliato
                      </span>
                    )}

                    <p
                      className="text-small mb-2"
                      style={{
                        color: formula.highlight
                          ? 'rgba(254, 252, 232, 0.7)'
                          : 'var(--color-rust)',
                      }}
                    >
                      {formula.subtitle}
                    </p>

                    <h2
                      className="text-headline mb-4"
                      style={{
                        color: formula.highlight
                          ? 'var(--color-text)'
                          : 'var(--color-text-dark)',
                      }}
                    >
                      {formula.title}
                    </h2>

                    <p
                      className="text-body mb-6"
                      style={{
                        color: formula.highlight
                          ? 'rgba(254, 252, 232, 0.8)'
                          : 'var(--color-text-muted)',
                      }}
                    >
                      {formula.description}
                    </p>

                    {/* Items list */}
                    <ul className="space-y-2 mb-8">
                      {formula.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-body"
                          style={{
                            color: formula.highlight
                              ? 'var(--color-text)'
                              : 'var(--color-text-muted)',
                          }}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{
                              background: formula.highlight
                                ? 'var(--color-text)'
                                : 'var(--color-rust)',
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div
                      className="flex items-end justify-between border-t pt-6"
                      style={{
                        borderColor: formula.highlight
                          ? 'rgba(254, 252, 232, 0.2)'
                          : 'var(--color-bg-sand)',
                      }}
                    >
                      <div>
                        <p
                          className="text-display"
                          style={{
                            color: formula.highlight
                              ? 'var(--color-text)'
                              : 'var(--color-text-dark)',
                            fontFamily: 'var(--font-display)',
                          }}
                        >
                          {formula.price}
                        </p>
                        <p
                          className="text-small"
                          style={{
                            color: formula.highlight
                              ? 'rgba(254, 252, 232, 0.7)'
                              : 'var(--color-text-muted)',
                          }}
                        >
                          {formula.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Special Note */}
          <div
            className="mt-16 p-8 md:p-12 text-center"
            style={{ background: 'var(--color-bg-sand)' }}
          >
            <p
              className="text-body-xl mb-4"
              style={{ color: 'var(--color-text-dark)' }}
            >
              Su richiesta anche opzioni{' '}
              <strong style={{ color: 'var(--color-rust)' }}>vegane</strong> e{' '}
              <strong style={{ color: 'var(--color-rust)' }}>senza glutine</strong>
            </p>
            <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
              Contattaci per qualsiasi esigenza alimentare specifica
            </p>
          </div>

          {/* CTA Section */}
          <div
            className="mt-16 md:mt-24 p-8 md:p-16 text-center"
            style={{ background: '#95B58E' }}
          >
            <h2
              className="text-display mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Prenota il tuo{' '}
              <em>evento</em>
            </h2>

            <p
              className="text-body-xl max-w-2xl mx-auto mb-8"
              style={{ color: 'rgba(254, 252, 232, 0.8)' }}
            >
              I prezzi indicati si riferiscono alle formule standard.
              Per variazioni, esigenze particolari o menu personalizzati,
              richiedi un preventivo: i costi possono variare in base alle modifiche.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+390364793167"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--color-text)',
                  color: '#95B58E',
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-title">Chiamaci: 0364 793167</span>
              </a>

              <Link
                to="/#contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border transition-all duration-300 hover:bg-[var(--color-text)] hover:text-[#95B58E]"
                style={{
                  borderColor: 'var(--color-text)',
                  color: 'var(--color-text)',
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-title">Scrivici un messaggio</span>
              </Link>
            </div>
          </div>

          {/* Back to home */}
          <div className="mt-12 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-body hover:text-[var(--color-rust)] transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alla Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
