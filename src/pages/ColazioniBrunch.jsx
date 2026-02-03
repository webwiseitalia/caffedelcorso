/**
 * Colazioni e Brunch Page
 * Pagina dedicata alle colazioni e brunch del locale
 */

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Import images - foto dalla cartella new (quelle non usate in Eventi)
import colazioneAmiche from '../assets/new/new-2.webp'
import colazioneConviviale from '../assets/new/new-3.webp'
import brunchPinsa from '../assets/new/new-4.webp'
import brunchCompleto from '../assets/new/new-5.webp'
import colazioneDolce from '../assets/new/new-7.webp'
import brunchBrindisi from '../assets/new/new-10.webp'
import pancakeFrutta from '../assets/new/new-11.webp'
import verandaRelax from '../assets/new/new-12.webp'

// Sfondo decorativo
import sfondoBrunch from '../assets/sfondi/sfondi-4.webp'
import sfondo2 from '../assets/sfondi/sfondi-2.webp'

gsap.registerPlugin(ScrollTrigger)

export default function ColazioniBrunch() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)
  const storytellingRef = useRef(null)
  const menuRef = useRef(null)

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

      // Storytelling blocks animation
      const storyBlocks = storytellingRef.current?.querySelectorAll('.story-block') || []
      storyBlocks.forEach((block) => {
        gsap.fromTo(
          block,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%',
            },
          }
        )
      })

      // Menu cards animation
      const menuCards = menuRef.current?.querySelectorAll('.menu-card') || []
      menuCards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
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

  const colazioniMenu = [
    {
      category: 'Colazioni Dolci',
      items: [
        { name: 'Cornetto artigianale', desc: 'Vuoto, crema, cioccolato, marmellata' },
        { name: 'Pancake fantasia', desc: 'Con frutta fresca, sciroppo d\'acero e panna' },
        { name: 'French toast', desc: 'Con frutti di bosco e miele' },
        { name: 'Bowl di yogurt', desc: 'Yogurt greco, granola, frutta fresca e miele' },
        { name: 'Torta del giorno', desc: 'Fatta in casa ogni mattina' },
      ],
    },
    {
      category: 'Colazioni Salate',
      items: [
        { name: 'Avocado toast', desc: 'Pane tostato, avocado, uovo in camicia, semi' },
        { name: 'Eggs Benedict', desc: 'Uova, bacon croccante, salsa olandese' },
        { name: 'Toast al salmone', desc: 'Salmone affumicato, cream cheese, capperi' },
        { name: 'Bagel farcito', desc: 'Con cream cheese, salmone o prosciutto' },
        { name: 'Uova strapazzate', desc: 'Con bacon e pane tostato' },
      ],
    },
    {
      category: 'Bevande Calde',
      items: [
        { name: 'Espresso / Doppio', desc: 'Caffè 100% arabica' },
        { name: 'Cappuccino', desc: 'Classico o con latte vegetale' },
        { name: 'Caffè americano', desc: 'Lungo, cremoso e aromatico' },
        { name: 'Tè e tisane', desc: 'Selezione premium Kusmi Tea' },
        { name: 'Cioccolata calda', desc: 'Fondente o bianca' },
      ],
    },
    {
      category: 'Bevande Fresche',
      items: [
        { name: 'Spremuta d\'arancia', desc: 'Arance fresche spremute al momento' },
        { name: 'Centrifughe', desc: 'Mix di frutta e verdura a scelta' },
        { name: 'Succhi bio', desc: 'Mela, pera, pesca, albicocca' },
        { name: 'Smoothie bowl', desc: 'Frutta fresca frullata con topping' },
      ],
    },
  ]

  const brunchFormule = [
    {
      title: 'CorsoBrunch',
      subtitle: 'Il brunch completo della domenica',
      description: 'Un\'esperienza completa con dolce e salato, perfetta per la domenica.',
      items: [
        'Pancake fantasia con frutta fresca',
        'Brioches e torte artigianali',
        'Avocado & salmon toast',
        'Uova strapazzate con bacon',
        'Centrifughe e succhi bio',
        'Una bevanda calda a persona',
      ],
      price: '20€',
      note: 'Minimo 5 persone',
      highlight: true,
    },
    {
      title: 'Merenda Brunch',
      subtitle: 'Un momento dolce e leggero',
      description: 'Perfetto per un break pomeridiano con le amiche.',
      items: [
        'Pancake e mini yogurt frozen',
        'Brioches e tortine monoporzione',
        'Cubotti di focaccia farcita',
        '1 bevanda a scelta',
      ],
      price: '15€',
      note: 'Minimo 5 persone',
      highlight: false,
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
        {/* Sfondo decorativo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${sfondoBrunch})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />

        {/* Background decorative text */}
        <div
          className="absolute top-10 left-0 whitespace-nowrap pointer-events-none select-none opacity-10"
          style={{
            fontSize: 'clamp(5rem, 12vw, 12rem)',
            fontFamily: 'var(--font-display)',
            color: 'var(--color-rust)',
            lineHeight: 0.8,
          }}
        >
          Colazioni & Brunch
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
            <div className="col-span-12 lg:col-span-6">
              <p
                className="animate-item text-small mb-4"
                style={{ color: 'var(--color-rust)' }}
              >
                Inizia la giornata con gusto
              </p>

              <h1
                className="animate-item text-display mb-6"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Colazioni &{' '}
                <span style={{ fontStyle: 'italic', color: 'var(--color-rust)' }}>
                  Brunch
                </span>
              </h1>

              <p
                className="animate-item text-body-xl mb-6"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Dalla colazione veloce al bancone al brunch rilassato della domenica,
                ogni mattina al Caffè del Corso è un'occasione per concedersi qualcosa di speciale.
              </p>

              <p
                className="animate-item text-body"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Prodotti freschi selezionati, ricette curate con passione e un'atmosfera
                che ti fa sentire a casa. Perché la colazione non è solo un pasto,
                è il modo migliore per iniziare la giornata.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 animate-item">
              <div
                className="relative overflow-hidden shadow-2xl"
                style={{ aspectRatio: '4/3', transform: 'rotate(2deg)' }}
              >
                <img
                  src={brunchBrindisi}
                  alt="Brunch con amiche al Caffè del Corso"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Storytelling Section - La Filosofia */}
      <section ref={storytellingRef} className="py-20 md:py-32" style={{ background: 'var(--color-bg-cream)' }}>
        <div className="container-wide px-6">
          {/* Intro */}
          <div className="story-block max-w-3xl mx-auto text-center mb-20 md:mb-32">
            <p className="text-small mb-4" style={{ color: 'var(--color-rust)' }}>
              La nostra filosofia
            </p>
            <h2 className="text-headline mb-6" style={{ color: 'var(--color-text-dark)' }}>
              Ogni mattina merita{' '}
              <em style={{ color: 'var(--color-rust)' }}>attenzione</em>
            </h2>
            <p className="text-body-xl" style={{ color: 'var(--color-text-muted)' }}>
              Non crediamo nella colazione frettolosa. Crediamo nel piacere di sedersi,
              assaporare un buon caffè, gustare un cornetto appena sfornato.
              Crediamo che i momenti migliori nascano quando ci si prende il tempo giusto.
            </p>
          </div>

          {/* Blocco 1 - La Colazione Italiana */}
          <div className="story-block grid grid-cols-12 gap-6 md:gap-12 items-center mb-20 md:mb-32">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <div
                className="overflow-hidden shadow-2xl"
                style={{ aspectRatio: '4/5', transform: 'rotate(-2deg)' }}
              >
                <img
                  src={colazioneDolce}
                  alt="Colazione dolce italiana"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
              <p
                className="text-small mb-4"
                style={{ color: 'var(--color-rust)' }}
              >
                La tradizione
              </p>
              <h3
                className="text-headline mb-6"
                style={{ color: 'var(--color-text-dark)' }}
              >
                La colazione{' '}
                <em style={{ color: 'var(--color-rust)' }}>all'italiana</em>
              </h3>
              <p
                className="text-body-xl mb-4"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Cappuccino cremoso e cornetto fragrante: il classico intramontabile.
              </p>
              <p
                className="text-body"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Ogni mattina i nostri cornetti arrivano freschi dal forno: vuoti, alla crema,
                al cioccolato o alla marmellata. Il caffè? 100% arabica, tostato con cura
                per un espresso dal gusto pieno e un cappuccino dalla schiuma perfetta.
              </p>
            </div>
          </div>

          {/* Blocco 2 - Il Brunch */}
          <div className="story-block grid grid-cols-12 gap-6 md:gap-12 items-center mb-20 md:mb-32">
            <div className="col-span-12 md:col-span-5 md:col-start-2">
              <p
                className="text-small mb-4"
                style={{ color: 'var(--color-rust)' }}
              >
                La domenica
              </p>
              <h3
                className="text-headline mb-6"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Il brunch della{' '}
                <em style={{ color: 'var(--color-rust)' }}>domenica</em>
              </h3>
              <p
                className="text-body-xl mb-4"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Un rituale da condividere con chi ami.
              </p>
              <p
                className="text-body"
                style={{ color: 'var(--color-text-muted)' }}
              >
                La domenica mattina al Caffè del Corso diventa un momento speciale.
                Pancake con frutta fresca, avocado toast, uova strapazzate con bacon,
                spremute e centrifughe. Tutto servito con calma, per goderti ogni boccone
                in compagnia.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div
                className="overflow-hidden shadow-2xl"
                style={{ aspectRatio: '4/5', transform: 'rotate(2deg)' }}
              >
                <img
                  src={pancakeFrutta}
                  alt="Pancake con frutta fresca"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Blocco 3 - Lo spazio */}
          <div className="story-block grid grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <div
                className="overflow-hidden shadow-2xl"
                style={{ aspectRatio: '3/4', transform: 'rotate(-2deg)' }}
              >
                <img
                  src={verandaRelax}
                  alt="La veranda del Caffè del Corso"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
              <p
                className="text-small mb-4"
                style={{ color: 'var(--color-rust)' }}
              >
                L'atmosfera
              </p>
              <h3
                className="text-headline mb-6"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Un posto dove{' '}
                <em style={{ color: 'var(--color-rust)' }}>stare bene</em>
              </h3>
              <p
                className="text-body-xl mb-4"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Dentro al calore del bar o fuori nella nostra veranda verde.
              </p>
              <p
                className="text-body"
                style={{ color: 'var(--color-text-muted)' }}
              >
                D'estate la veranda ti accoglie tra le piante, con la luce del mattino
                che filtra tra le foglie. D'inverno l'interno diventa un rifugio caldo
                dove leggere il giornale sorseggiando un caffè. Qualunque sia la stagione,
                il Caffè del Corso è il posto giusto per iniziare la giornata.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery - Momenti */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{ background: 'var(--color-bg-warm)' }}>
        {/* Sfondo decorativo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${sfondo2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
        />

        <div className="container-wide px-6 relative z-10">
          <div className="text-center mb-12">
            <p className="text-small mb-4" style={{ color: 'var(--color-rust)' }}>
              I nostri momenti
            </p>
            <h2 className="text-headline" style={{ color: 'var(--color-text-dark)' }}>
              Ogni colazione racconta{' '}
              <em style={{ color: 'var(--color-rust)' }}>una storia</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="overflow-hidden shadow-lg" style={{ aspectRatio: '3/4' }}>
              <img
                src={colazioneAmiche}
                alt="Colazione con amiche"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden shadow-lg mt-8" style={{ aspectRatio: '3/4' }}>
              <img
                src={colazioneConviviale}
                alt="Momento conviviale"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden shadow-lg" style={{ aspectRatio: '3/4' }}>
              <img
                src={brunchPinsa}
                alt="Brunch con pinsa"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden shadow-lg mt-8" style={{ aspectRatio: '3/4' }}>
              <img
                src={brunchCompleto}
                alt="Brunch completo"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-bg-cream)' }}>
        <div className="container-wide px-6">
          <div className="text-center mb-16">
            <p className="text-small mb-4" style={{ color: 'var(--color-rust)' }}>
              La nostra proposta
            </p>
            <h2 className="text-display" style={{ color: 'var(--color-text-dark)' }}>
              Il{' '}
              <em style={{ color: 'var(--color-rust)' }}>menu</em>
            </h2>
            <p className="text-body mt-4 max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              Dalla colazione classica alle proposte più ricercate,
              c'è sempre qualcosa di buono che ti aspetta.
            </p>
          </div>

          <div ref={menuRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {colazioniMenu.map((section, index) => (
              <div
                key={index}
                className="menu-card p-8 md:p-10"
                style={{ background: 'var(--color-bg)' }}
              >
                <h3
                  className="text-title mb-6 pb-4 border-b"
                  style={{
                    color: 'var(--color-rust)',
                    borderColor: 'var(--color-bg-sand)',
                  }}
                >
                  {section.category}
                </h3>

                <ul className="space-y-4">
                  {section.items.map((item, i) => (
                    <li key={i}>
                      <p
                        className="text-body font-medium"
                        style={{ color: 'var(--color-text-dark)' }}
                      >
                        {item.name}
                      </p>
                      <p
                        className="text-small"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brunch Formule Section */}
      <section className="py-16 md:py-24" style={{ background: 'var(--color-bg-warm)' }}>
        <div className="container-wide px-6">
          <div className="text-center mb-16">
            <p className="text-small mb-4" style={{ color: 'var(--color-rust)' }}>
              Per gruppi e occasioni speciali
            </p>
            <h2 className="text-display" style={{ color: 'var(--color-text-dark)' }}>
              Formule{' '}
              <em style={{ color: 'var(--color-rust)' }}>Brunch</em>
            </h2>
            <p className="text-body mt-4 max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              Perfette per festeggiare un compleanno, una laurea o semplicemente
              per passare una domenica speciale con gli amici.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {brunchFormule.map((formula, index) => (
              <div
                key={index}
                className="p-8 md:p-12 relative"
                style={{
                  background: formula.highlight
                    ? '#95B58E'
                    : 'var(--color-bg)',
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

                <h3
                  className="text-headline mb-4"
                  style={{
                    color: formula.highlight
                      ? 'var(--color-text)'
                      : 'var(--color-text-dark)',
                  }}
                >
                  {formula.title}
                </h3>

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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 md:py-24"
        style={{ background: '#95B58E' }}
      >
        <div className="container-wide px-6 text-center">
          <h2
            className="text-display mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            Ti aspettiamo ogni{' '}
            <em>mattina</em>
          </h2>

          <p
            className="text-body-xl max-w-2xl mx-auto mb-4"
            style={{ color: 'rgba(254, 252, 232, 0.8)' }}
          >
            Colazioni servite dalle 7:30 alle 12:00.
            Brunch della domenica su prenotazione.
          </p>

          <p
            className="text-body max-w-xl mx-auto mb-8"
            style={{ color: 'rgba(254, 252, 232, 0.7)' }}
          >
            Per gruppi di 5 o più persone, prenota il tuo brunch
            e personalizza il menu in base alle tue esigenze.
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
              <span className="text-title">Prenota: 0364 793167</span>
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-title">Come raggiungerci</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to home */}
      <div className="py-12 text-center" style={{ background: 'var(--color-bg)' }}>
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
  )
}
