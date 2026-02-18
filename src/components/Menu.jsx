/**
 * MENU - Asymmetric Chaos
 * Layout completamente spezzato con elementi sovrapposti e posizioni irregolari
 */

import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import menuImage from '../assets/foto/foto-7.webp'
import sfondo3 from '../assets/sfondi/sfondi-3.webp'
import sfondo4 from '../assets/sfondi/sfondi-4.webp'
import sfondo5 from '../assets/sfondi/sfondi-5.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('caffetteria')
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const itemsRef = useRef(null)
  const imageRef = useRef(null)
  const bigNumberRef = useRef(null)

  const categories = [
    { id: 'caffetteria', name: 'Caffetteria', number: '01' },
    { id: 'brunch', name: 'Brunch', number: '02' },
    { id: 'pranzo', name: 'Pranzo', number: '03' },
    { id: 'aperitivi', name: 'Aperitivi', number: '04' },
    { id: 'cocktail', name: 'Cocktail', number: '05' },
    { id: 'vini-birre', name: 'Vini & Birre', number: '06' },
    { id: 'te-tisane', name: 'Tè & Tisane', number: '07' },
    { id: 'pasticceria', name: 'Pasticceria Fresca', number: '08' },
  ]

  const menuItems = {
    caffetteria: [
      { name: 'Caffè liscio', description: 'Miscela selezionata', price: '1.30' },
      { name: 'Cappuccino', description: 'Espresso con latte montato a crema', price: '1.60' },
      { name: 'Caffè shakerato', description: 'Fresco e cremoso', price: '2.50' },
      { name: 'Latte matcha', description: 'Tè verde giapponese con latte', price: '3.50' },
      { name: 'Caffè marocchino', description: 'Caffè, cacao e schiuma di latte', price: '1.50' },
      { name: 'Nutelcoffee', description: 'Caffè, nutella, panna montata', price: '3.00', tag: 'Speciale' },
      { name: 'Pistacchietto', description: 'Caffè, pistacchio, panna montata', price: '3.50', tag: 'Speciale' },
      { name: 'Cioccolata calda', description: 'Latte, fondente o bianca + aggiunte', price: '3.50' },
    ],
    brunch: [
      { name: 'Bagel Mediterraneo', description: 'Prosciutto crudo, burrata, insalata, origano', price: '6.50' },
      { name: 'Bagel Norvegese', description: 'Salmone, philadelphia, insalata', price: '7.00', tag: 'Bestseller' },
      { name: 'Avocado Toast', description: 'Pane integrale, avocado, philadelphia, salmone, sesamo', price: '8.00' },
      { name: 'Avocado Toast Vegano', description: 'Pane integrale, avocado, pomodorini, humus di ceci', price: '7.00' },
      { name: 'Pancake pistacchio e lamponi', description: 'Soffici pancake con topping a scelta', price: '6.50' },
      { name: 'Porridge', description: "Fiocchi d'avena con frutta e topping", price: '6.00' },
      { name: 'Yogurt frutti rossi e granola', description: 'Yogurt frozen con frutta fresca, topping e granola', price: '6.50' },
      { name: 'Uovo', description: 'Due uova sbattute con fette di pane tostato', price: '6.00' },
    ],
    pranzo: [
      { name: 'Pinsa Margherita', description: 'Pomodoro, mozzarella, origano', price: '8.00' },
      { name: 'Pinsa Bologna & Burrata', description: 'Mortadella, burrata, granella di pistacchi', price: '9.50', tag: 'Consigliato' },
      { name: 'Piadina Fresca', description: 'Cotto, fontina, insalata, maionese, pomodoro', price: '7.00' },
      { name: 'Panino Corso', description: 'Mozzarella, prosciutto crudo, gamberetti salsa rosa', price: '8.00', tag: 'Speciale' },
      { name: 'Panino Valdostano', description: 'Cotoletta, fontina, insalata, maionese', price: '8.00' },
      { name: 'Insalatona Norvegese', description: 'Salmone, cipolle croccanti, carote, philadelphia', price: '12.00' },
      { name: 'Tagliere di affettati grande', description: 'Salumi e formaggi selezionati', price: '20.00', tag: 'Da condividere' },
      { name: 'Bresaola, rucola e grana', description: 'Piatto freddo classico', price: '12.00' },
    ],
    aperitivi: [
      { name: 'Spritz Aperol / Campari', description: "L'iconico aperitivo italiano", price: '6.00', tag: 'Aperitivo' },
      { name: 'Spritz Hugo', description: 'Fresco con fiori di sambuco', price: '6.00' },
      { name: 'Pirlo Aperol / Campari', description: 'Tradizione bresciana', price: '6.00' },
      { name: 'Negroni', description: 'Martini rosso, bitter Campari, gin', price: '8.00' },
      { name: 'Negroni Sbagliato', description: 'Martini rosso, bitter Campari, prosecco', price: '8.00' },
      { name: 'Americano', description: 'Martini rosso, bitter Campari, seltz', price: '7.00' },
      { name: 'Aperol Sour', description: 'Aperol, lime, sciroppo di zucchero', price: '6.00' },
      { name: 'Analcolico della casa', description: 'Fresco e dissetante', price: '6.00' },
    ],
    cocktail: [
      { name: 'Mojito', description: 'Rum bianco, zucchero di canna, lime, menta, seltz', price: '7.00', tag: 'Bestseller' },
      { name: 'Moscow Mule', description: 'Vodka, lime, zenzero, ginger beer', price: '7.00' },
      { name: 'Caipiroska alla fragola', description: 'Vodka, zucchero di canna, lime, fragole', price: '7.00' },
      { name: 'Caipirinha', description: 'Cachaça, lime, zucchero di canna', price: '7.00' },
      { name: 'Piña Colada', description: 'Rum bianco, succo d\'ananas, latte di cocco', price: '7.00' },
      { name: 'Long Island', description: 'Tequila, vodka, rum, triple sec, gin, limone', price: '8.00' },
      { name: 'Whiskey Sour', description: 'Whiskey, lime, zucchero di canna, albume', price: '8.00' },
      { name: 'Sex on the Beach', description: 'Vodka alla pesca, vodka, granatina, succo d\'arancia', price: '7.00' },
    ],
    'vini-birre': [
      { name: 'Franciacorta', description: 'Bollicine', price: '6.00', tag: 'Bollicine' },
      { name: 'Prosecco (Treviso)', description: 'Bollicine', price: '4.00' },
      { name: 'Mea Culpa (Puglia)', description: 'Vino rosso corposo', price: '5.50' },
      { name: 'Pinot Nero (Alto Adige)', description: 'Rosso elegante', price: '5.50' },
      { name: 'Vermentino (Sardegna)', description: 'Bianco fresco e minerale', price: '5.00' },
      { name: 'Forst Kronen alla spina', description: 'Media 0,4l', price: '4.00' },
      { name: 'Leffe Rossa alla spina', description: 'Media 0,33l', price: '5.00' },
      { name: 'Birra in bottiglia', description: "Beck's, Ceres, Corona", price: '4.00' },
    ],
    'te-tisane': [
      { name: 'Camomilla', description: 'Classica e rilassante', price: '3.00' },
      { name: 'Tè Bergamotto', description: 'Tè nero cinese con estratto naturale di bergamotto', price: '3.50' },
      { name: 'Tè Marrakesh', description: 'Tè verde gunpowder e foglie di menta Nanah', price: '3.50' },
      { name: 'Tè degli Amanti', description: 'Tè nero con petali di fiordaliso e cuori di zucchero', price: '3.50', tag: 'Speciale' },
      { name: 'Arancia e Zenzero', description: 'Karkadè, mela, carota, bacche di goji, zenzero', price: '3.50' },
      { name: 'Sottobosco', description: 'Karkadè, uvetta, sambuco, mora, mirtillo, malva', price: '3.50' },
      { name: 'Fiocco di Neve', description: 'Mela, cannella, mandorle, cardamomo, pepe rosa', price: '3.50' },
      { name: 'Panna e Fragola', description: 'Karkadè, mela selvatica, rosa canina, fragola', price: '3.50' },
    ],
    pasticceria: [
      { name: 'Brioches', description: 'Secondo disponibilità', price: '1.50' },
      { name: 'Crostata della Nonna', description: 'Secondo disponibilità', price: '3.50' },
      { name: 'Crostata vegana', description: 'Secondo disponibilità', price: '3.00' },
      { name: 'Crostatine vegane', description: 'Secondo disponibilità', price: '3.00' },
      { name: 'Tortine di mele (senza lattosio)', description: 'Secondo disponibilità', price: '3.50' },
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
      className="relative py-20 md:py-28 overflow-hidden"
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
        className="absolute top-[5%] right-[5%] w-[18vw] max-w-[220px] hidden lg:block pointer-events-none"
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
        <div className="grid grid-cols-12 gap-4 mb-8 md:mb-12">
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
        <div className="mb-12 md:mb-20 relative z-10">
          <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3">
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
                  className="block px-3 py-2 md:px-4 md:py-3 transition-all duration-400"
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


        {/* Note */}
        <p
          className="mt-12 text-mono text-center md:text-left md:ml-16"
          style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}
        >
          * Prezzi e disponibilità possono variare. Chiedi al nostro staff per allergeni.
        </p>

        {/* Bottone visualizza menù completo */}
        <div className="mt-10 flex justify-center">
          <Link
            to="/menu-completo"
            className="group inline-flex items-center gap-3 px-8 py-4 transition-all duration-400 hover:scale-105"
            style={{
              background: 'var(--color-rust)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-rust)',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
            <span className="text-small" style={{ letterSpacing: '0.1em' }}>
              Visualizza il Menù Completo
            </span>
          </Link>
        </div>
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
