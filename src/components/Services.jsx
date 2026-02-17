/**
 * SERVICES - Scattered Chaos
 * Cards posizionate in modo irregolare con sovrapposizioni
 */

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import serviceImage from '../assets/foto/foto-21.webp'
import sfondo1 from '../assets/sfondi/sfondi-1.webp'
import sfondo4 from '../assets/sfondi/sfondi-4.webp'
import sfondo6 from '../assets/sfondi/sfondi-6.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)
  const imageRef = useRef(null)
  const hoursRef = useRef(null)

  const services = [
    {
      number: '01',
      title: 'Colazioni & Brunch',
      description:
        'Inizia la giornata con energia: caffè espresso, cappuccini cremosi, cornetti fragranti.',
      features: ['Caffè 100% Arabica', 'Cornetti artigianali', 'Brunch weekend'],
      offset: { x: 0, y: 0, rotate: -2 },
      link: '/colazioni-brunch',
      bgImage: sfondo1,
    },
    {
      number: '02',
      title: 'Aperitivi & Drink',
      description:
        'Rilassati con un aperitivo in compagnia. Spritz, cocktail classici e vini locali.',
      features: ['Cocktail bar', 'Vini locali', 'Taglieri stuzzichini'],
      offset: { x: -15, y: 20, rotate: -1 },
      bgImage: sfondo4,
    },
    {
      number: '03',
      title: 'Eventi Privati',
      description:
        'Organizziamo eventi privati e feste. Contattaci per creare il tuo evento su misura.',
      features: ['Feste private', 'Eventi aziendali', 'Menu personalizzati'],
      offset: { x: 30, y: -10, rotate: 2 },
      link: '/eventi-privati',
      bgImage: sfondo1,
    },
  ]

  const hours = [
    { day: 'Lun — Ven', time: '07:00 — 22:00' },
    { day: 'Sabato', time: '07:00 — 23:00' },
    { day: 'Domenica', time: '08:00 — 21:30' },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Titolo - reveal caotico
      gsap.fromTo(
        titleRef.current?.querySelectorAll('.word') || [],
        {
          y: 100,
          opacity: 0,
          rotate: () => gsap.utils.random(-10, 10),
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: {
            each: 0.12,
            from: 'random'
          },
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      )

      // Cards - entrano da direzioni diverse
      const cards = cardsRef.current?.querySelectorAll('.service-card') || []
      cards.forEach((card, i) => {
        const directions = [
          { x: -80, rotate: -5 },
          { x: 80, rotate: 5 },
          { x: -60, rotate: 3 },
          { x: 60, rotate: -3 },
        ]
        const dir = directions[i % 4]

        gsap.fromTo(
          card,
          {
            x: dir.x,
            opacity: 0,
            rotate: dir.rotate,
          },
          {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            },
          }
        )
      })

      // Immagine parallax
      gsap.to(imageRef.current, {
        yPercent: 30,
        rotate: 5,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      // Hours section
      gsap.fromTo(
        hoursRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: hoursRef.current,
            start: 'top 80%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--color-bg-cream)' }}
    >
      {/* Sfondo FULL PAGE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${sfondo1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }}
      />

      {/* Grande testo decorativo */}
      <div
        className="absolute top-20 left-0 whitespace-nowrap pointer-events-none select-none"
        style={{
          fontSize: 'clamp(8rem, 20vw, 20rem)',
          fontFamily: 'var(--font-display)',
          color: 'var(--color-bg-sand)',
          lineHeight: 0.8,
          fontWeight: 400,
        }}
      >
        Servizi
      </div>

      {/* Label verticale */}
      <div
        className="absolute right-4 md:right-8 top-32 text-small text-vertical hidden md:block"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Servizi — 04
      </div>

      {/* Immagine decorativa */}
      <div
        ref={imageRef}
        className="absolute bottom-[10%] left-[5%] w-[20vw] max-w-[250px] hidden lg:block"
        style={{ transform: 'rotate(-8deg)' }}
      >
        <div className="overflow-hidden shadow-xl" style={{ aspectRatio: '4/5' }}>
          <img
            src={serviceImage}
            alt="I nostri servizi al Caffè del Corso"
            title="Servizi - Dalla colazione all'aperitivo, siamo qui per te"
            loading="lazy"
            width={400}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="container-wide relative">
        {/* Header asimmetrico */}
        <div className="grid grid-cols-12 gap-4 mb-16 md:mb-28">
          <div className="col-span-12 md:col-span-8 md:col-start-4">
            <p
              className="text-small mb-4"
              style={{ color: 'var(--color-rust)' }}
            >
              I Nostri Servizi
            </p>
            <div ref={titleRef}>
              <h2 className="text-display" style={{ color: 'var(--color-text-dark)' }}>
                {'Tutto quello'.split(' ').map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.3em]">
                    {word}
                  </span>
                ))}
                <br />
                <span className="word inline-block mr-[0.3em]">che</span>
                <span className="word inline-block" style={{ fontStyle: 'italic', color: 'var(--color-rust)' }}>
                  cerchi
                </span>
              </h2>
            </div>

            <p
              className="text-body-xl mt-8 max-w-lg"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Dalla prima colazione all'aperitivo serale, siamo qui per offrirti
              il meglio in ogni momento della giornata.
            </p>
          </div>
        </div>

        {/* Services Grid - Layout caotico solo su desktop */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
        >
          {services.map((service, index) => {
            const CardWrapper = service.link ? Link : 'div'
            const cardProps = service.link ? { to: service.link } : {}
            // Centra l'ultima card se è dispari (terza card)
            const isLastAndOdd = index === services.length - 1 && services.length % 2 === 1

            return (
              <CardWrapper
                key={index}
                {...cardProps}
                className={`service-card group relative block ${service.link ? 'cursor-pointer' : ''} ${isLastAndOdd ? 'md:col-span-2 md:max-w-[50%] md:mx-auto' : ''}`}
                style={{
                  '--offset-x': `${service.offset.x}px`,
                  '--offset-y': `${service.offset.y}px`,
                  '--offset-rotate': `${service.offset.rotate}deg`,
                }}
              >
                <div
                  className="relative p-8 md:p-10 transition-all duration-500 group-hover:translate-y-[-5px] overflow-hidden"
                  style={{
                    background: index % 2 === 0 ? 'var(--color-bg)' : 'var(--color-bg-warm)',
                  }}
                >
                  {/* Sfondo decorativo card */}
                  {service.bgImage && (
                    <div
                      className="absolute -bottom-4 -right-4 w-[60%] h-[70%] pointer-events-none transition-transform duration-500 group-hover:scale-110"
                      style={{
                        backgroundImage: `url(${service.bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.25,
                      }}
                    />
                  )}

                  {/* Number grande */}
                  <span
                    className="absolute -top-6 -right-2 opacity-20"
                    style={{
                      fontSize: 'clamp(4rem, 8vw, 8rem)',
                      fontFamily: 'var(--font-display)',
                      color: 'var(--color-rust)',
                      lineHeight: 1,
                    }}
                  >
                    {service.number}
                  </span>

                  {/* Content */}
                  <span
                    className="text-small mb-6 block"
                    style={{ color: 'var(--color-rust)' }}
                  >
                    {service.number}
                  </span>

                  <h3
                    className="text-headline mb-4"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-body mb-8"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className="text-mono px-3 py-2"
                        style={{
                          background: 'var(--color-rust)',
                          color: 'var(--color-text)',
                          fontSize: '0.65rem',
                          transform: `rotate(${i % 2 === 0 ? -1 : 1}deg)`,
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Link indicator for clickable cards */}
                  {service.link && (
                    <div
                      className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'var(--color-rust)' }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        style={{ color: 'var(--color-text)' }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  )}

                  {/* Linea hover */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                    style={{ background: 'var(--color-rust)' }}
                  />
                </div>
              </CardWrapper>
            )
          })}
        </div>

        {/* Hours Section - Posizionata asimmetricamente */}
        <div className="mt-28 md:mt-40 grid grid-cols-12 gap-8">
          {/* Box orari */}
          <div
            ref={hoursRef}
            className="col-span-12 lg:col-span-5 lg:col-start-2"
            style={{ transform: 'rotate(-2deg)' }}
          >
            <div
              className="p-8 md:p-12"
              style={{ background: 'var(--color-rust)' }}
            >
              <h3
                className="text-headline mb-8"
                style={{ color: 'var(--color-text)' }}
              >
                Orari di
                <br />
                <em>Apertura</em>
              </h3>

              <div className="space-y-4">
                {hours.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-4 border-b"
                    style={{ borderColor: 'rgba(254, 252, 232, 0.2)' }}
                  >
                    <span
                      className="text-body"
                      style={{ color: 'var(--color-text)', opacity: 0.8 }}
                    >
                      {item.day}
                    </span>
                    <span
                      className="text-headline"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA chiamata */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-center lg:pl-12">
            <p
              className="text-small mb-4"
              style={{ color: 'var(--color-rust)' }}
            >
              Vuoi prenotare?
            </p>
            <p className="text-headline mb-8" style={{ color: 'var(--color-text-dark)' }}>
              Chiamaci o passa
              <br />
              <em style={{ color: 'var(--color-rust)' }}>a trovarci</em>
            </p>

            <a
              href="tel:+390364793167"
              className="group inline-flex items-center gap-6 self-start"
            >
              <span
                className="w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: 'var(--color-bg)' }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{ color: 'var(--color-rust)' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <span>
                <span
                  className="block text-display"
                  style={{ color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}
                >
                  0364 793167
                </span>
                <span
                  className="text-small"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Chiamaci per prenotare
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Linee decorative */}
      <div
        className="absolute top-[30%] right-[10%] w-px h-[200px] hidden lg:block"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.3,
          transform: 'rotate(15deg)'
        }}
      />
      <div
        className="absolute bottom-[20%] right-[25%] w-[150px] h-px hidden lg:block"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.2,
          transform: 'rotate(-5deg)'
        }}
      />
    </section>
  )
}
