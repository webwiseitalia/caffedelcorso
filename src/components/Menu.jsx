/**
 * MENU - Asymmetric Chaos
 * Layout completamente spezzato con elementi sovrapposti e posizioni irregolari
 */

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import menuImage from '../assets/foto/foto-7.webp'
import sfondo3 from '../assets/sfondi/sfondi-3.webp'
import sfondo4 from '../assets/sfondi/sfondi-4.webp'
import sfondo5 from '../assets/sfondi/sfondi-5.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('colazioni')
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const itemsRef = useRef(null)
  const imageRef = useRef(null)
  const bigNumberRef = useRef(null)

  const categories = [
    { id: 'colazioni', name: 'Colazioni', number: '01' },
    { id: 'piatti-leggeri', name: 'Piatti Leggeri', number: '02' },
    { id: 'piatti-caldi', name: 'Piatti Caldi', number: '03' },
    { id: 'bevande', name: 'Bevande', number: '04' },
  ]

  const menuItems = {
    colazioni: [
      { name: 'Espresso Classico', description: 'Miscela 100% arabica selezionata', price: '1.20', tag: 'Bestseller' },
      { name: 'Cappuccino', description: 'Espresso con latte montato a crema', price: '1.50' },
      { name: 'Cornetto Artigianale', description: 'Sfogliato, vuoto o farcito', price: '1.30', tag: 'Fatto in casa' },
      { name: 'Colazione Completa', description: 'Cappuccino + cornetto + spremuta', price: '5.50', tag: 'Consigliato' },
      { name: 'Yogurt e Granola', description: 'Greco con miele e frutta fresca', price: '4.50' },
      { name: 'Pancakes', description: "Soffici con sciroppo d'acero", price: '6.00' },
    ],
    'piatti-leggeri': [
      { name: 'Bagel Salmone', description: 'Con cream cheese, capperi e cipolla', price: '8.50', tag: 'Bestseller' },
      { name: 'Club Sandwich', description: 'Pollo, bacon, uovo e verdure', price: '9.00' },
      { name: 'Insalata Caesar', description: 'Lattuga, pollo grigliato, parmigiano', price: '10.00' },
      { name: 'Poke Bowl', description: 'Salmone, avocado, edamame', price: '12.00', tag: 'Novità' },
      { name: 'Bruschette Miste', description: 'Trio di bruschette del giorno', price: '7.00' },
    ],
    'piatti-caldi': [
      { name: 'Pinsa Margherita', description: 'Pomodoro San Marzano e bufala', price: '9.00', tag: 'Bestseller' },
      { name: 'Pinsa Prosciutto', description: 'Crudo di Parma DOP e rucola', price: '11.00' },
      { name: 'Tagliere del Corso', description: 'Salumi e formaggi locali', price: '14.00', tag: 'Da condividere' },
      { name: 'Pasta del Giorno', description: 'Chiedi la specialità al nostro staff', price: '10.00' },
      { name: 'Hamburger Gourmet', description: 'Manzo 180g, cheddar, bacon', price: '13.00' },
    ],
    bevande: [
      { name: 'Spritz Aperol', description: "L'iconico aperitivo italiano", price: '5.00', tag: 'Aperitivo' },
      { name: 'Negroni', description: 'Gin, Campari, vermut rosso', price: '6.00' },
      { name: 'Vino della Casa', description: 'Selezione Franciacorta', price: '4.00' },
      { name: 'Birra Artigianale', description: 'Selezione rotante alla spina', price: '5.00' },
      { name: 'Smoothie Fresco', description: 'Frutta fresca a scelta', price: '5.50' },
    ],
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grande numero di sfondo - parallax
      gsap.to(bigNumberRef.current, {
        yPercent: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })

      // Titolo reveal caotico
      gsap.fromTo(
        titleRef.current?.querySelectorAll('.word') || [],
        {
          y: 80,
          opacity: 0,
          rotate: () => gsap.utils.random(-8, 8),
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          scale: 1,
          stagger: {
            each: 0.1,
            from: 'random'
          },
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      )

      // Immagine decorativa
      gsap.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
          },
        }
      )

      // Parallax immagine
      gsap.to(imageRef.current, {
        yPercent: -25,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Animate items when category changes
  useEffect(() => {
    if (itemsRef.current) {
      const items = itemsRef.current.querySelectorAll('.menu-item')
      gsap.fromTo(
        items,
        {
          x: () => gsap.utils.random(-30, 30),
          y: 40,
          opacity: 0
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
        }
      )
    }
  }, [activeCategory])

  const currentCategoryData = categories.find(c => c.id === activeCategory)

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Sfondo FULL PAGE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${sfondo4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
          opacity: 0.12,
        }}
      />

      {/* Secondo sfondo decorativo angolo */}
      <div
        className="absolute bottom-0 right-0 w-[50%] h-[40%] pointer-events-none"
        style={{
          backgroundImage: `url(${sfondo3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top left',
          opacity: 0.2,
        }}
      />

      {/* Grande numero di sfondo */}
      <div
        ref={bigNumberRef}
        className="absolute -top-20 -right-20 pointer-events-none select-none"
        style={{
          fontSize: 'clamp(15rem, 40vw, 45rem)',
          fontFamily: 'var(--font-display)',
          color: 'var(--color-bg-warm)',
          lineHeight: 0.8,
          fontWeight: 400,
        }}
      >
        {currentCategoryData?.number || '01'}
      </div>

      {/* Label verticale */}
      <div
        className="absolute left-4 md:left-8 top-32 text-small text-vertical hidden md:block"
        style={{ color: 'var(--color-text-muted)', transform: 'rotate(180deg)' }}
      >
        Menu — 03
      </div>

      {/* Immagine decorativa flottante */}
      <div
        ref={imageRef}
        className="absolute top-[20%] right-[5%] w-[25vw] max-w-[300px] hidden lg:block z-base"
        style={{ transform: 'rotate(-5deg)' }}
      >
        <div className="overflow-hidden shadow-2xl" style={{ aspectRatio: '3/4' }}>
          <img
            src={menuImage}
            alt="Preparazione al bar del Caffè del Corso"
            title="Menu - Prodotti freschi e di qualità ogni giorno"
            loading="lazy"
            width={450}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div
          className="absolute -bottom-4 -left-4 px-4 py-2"
          style={{ background: 'var(--color-rust)' }}
        >
          <span className="text-mono" style={{ color: 'var(--color-text)' }}>
            Freschezza
          </span>
        </div>
      </div>

      <div className="container-wide relative px-6 md:px-4">
        {/* Header con layout asimmetrico */}
        <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
          {/* Titolo - spostato */}
          <div className="col-span-12 md:col-span-7 md:col-start-2">
            <p
              className="text-small mb-4"
              style={{ color: 'var(--color-rust)' }}
            >
              Il Nostro Menu
            </p>
            <div ref={titleRef}>
              <h2 className="text-display" style={{ color: 'var(--color-text)' }}>
                {'Gusto autentico'.split(' ').map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.3em]">
                    {word}
                  </span>
                ))}
                <br />
                <span className="word inline-block" style={{ fontStyle: 'italic', color: 'var(--color-rust)' }}>
                  qualità vera
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Category Tabs - stile irregolare */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-wrap gap-3 md:gap-6 md:ml-8">
            {categories.map((category, i) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className="relative group"
                style={{
                  transform: `translateY(${i % 2 === 0 ? 0 : 8}px)`,
                }}
              >
                <span
                  className="absolute -top-2 -right-2 text-mono opacity-50"
                  style={{
                    fontSize: '0.6rem',
                    color: activeCategory === category.id ? 'var(--color-rust)' : 'var(--color-text-muted)'
                  }}
                >
                  {category.number}
                </span>
                <span
                  className="block px-5 py-3 transition-all duration-400"
                  style={{
                    background: activeCategory === category.id ? 'var(--color-rust)' : 'transparent',
                    border: `1px solid ${activeCategory === category.id ? 'var(--color-rust)' : 'var(--color-text-muted)'}`,
                    color: activeCategory === category.id ? 'var(--color-text)' : 'var(--color-text-muted)',
                  }}
                >
                  <span className="text-small">{category.name}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items - Layout irregolare */}
        <div className="relative">
          {/* Linea decorativa */}
          <div
            className="absolute top-0 left-[15%] w-px h-full hidden md:block"
            style={{ background: 'var(--color-rust)', opacity: 0.2 }}
          />

          <div
            ref={itemsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2"
          >
            {menuItems[activeCategory].map((item, index) => (
              <div
                key={index}
                className={`menu-item group relative py-6 md:ml-0 ${
                  index % 3 === 1 ? 'md:ml-8' : index % 3 === 2 ? 'md:-ml-4' : ''
                }`}
              >
                {/* Linea sottostante */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: 'var(--color-bg-warm)' }}
                />

                {/* Tag */}
                {item.tag && (
                  <span
                    className="absolute -top-2 right-0 text-mono px-3 py-1"
                    style={{
                      background: 'var(--color-terracotta)',
                      color: 'var(--color-text)',
                      fontSize: '0.6rem',
                      transform: 'rotate(2deg)',
                    }}
                  >
                    {item.tag}
                  </span>
                )}

                {/* Name & Price */}
                <div className="flex items-baseline justify-between gap-4 mb-2">
                  <h4
                    className="text-title group-hover:text-[var(--color-rust)] transition-colors duration-300"
                    style={{ color: 'var(--color-text)' }}
                  >
                    {item.name}
                  </h4>
                  <div
                    className="flex-1 border-b border-dotted mx-2 opacity-30"
                    style={{ borderColor: 'var(--color-text-muted)' }}
                  />
                  <span
                    className="text-headline font-display whitespace-nowrap"
                    style={{
                      color: 'var(--color-rust)',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    €{item.price}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-body"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Delivery CTA - Posizionato asimmetricamente */}
        <div className="mt-24 md:mt-32 grid grid-cols-12">
          <div className="col-span-12 md:col-span-10 md:col-start-2">
            <div
              className="relative p-8 md:p-12 overflow-hidden"
              style={{
                background: 'var(--color-bg-cream)',
                transform: 'rotate(-1deg)',
              }}
            >
              {/* Sfondo decorativo card */}
              <div
                className="absolute -top-10 -right-10 w-[50%] h-[120%] pointer-events-none"
                style={{
                  backgroundImage: `url(${sfondo5})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.3,
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'var(--color-bg-cream)',
                  transform: 'rotate(1deg) scale(1.02)',
                  zIndex: -1,
                }}
              />

              <div className="relative grid md:grid-cols-2 gap-8 items-center" style={{ transform: 'rotate(1deg)' }}>
                <div>
                  <p
                    className="text-small mb-3"
                    style={{ color: 'var(--color-rust)' }}
                  >
                    Consegna a domicilio
                  </p>
                  <h3
                    className="text-headline"
                    style={{ color: 'var(--color-text-dark)' }}
                  >
                    Non puoi venire da noi?
                    <br />
                    <em style={{ color: 'var(--color-rust)' }}>Veniamo noi da te.</em>
                  </h3>
                </div>

                <div className="flex justify-start md:justify-end">
                  <a
                    href="https://deliveroo.it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <span>Ordina su Deliveroo</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <p
          className="mt-12 text-mono text-center md:text-left md:ml-16"
          style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}
        >
          * Prezzi e disponibilità possono variare. Chiedi al nostro staff per allergeni.
        </p>
      </div>

      {/* Linea decorativa diagonale */}
      <div
        className="absolute bottom-20 left-[5%] w-[40%] h-px hidden lg:block"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.3,
          transform: 'rotate(-3deg)'
        }}
      />
    </section>
  )
}
