/**
 * HERO - Full Screen Background Image
 * Immagine a tutto schermo con tipografia massiva sopra
 */

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage from '../assets/579725215_18288934612275784_4089771566350949442_n..webp'

gsap.registerPlugin(ScrollTrigger)

export default function Hero({ lenis }) {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)
  const overlayRef = useRef(null)
  const scrollTextRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Immagine - reveal con zoom
      gsap.fromTo(
        imageRef.current,
        { scale: 1.3, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          delay: 2,
          ease: 'power3.out',
        }
      )

      // Overlay fade in
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          delay: 2.2,
          ease: 'power2.out',
        }
      )

      // Titolo - caratteri che entrano in sequenza caotica
      const chars = titleRef.current?.querySelectorAll('.char') || []
      gsap.fromTo(
        chars,
        {
          y: () => gsap.utils.random(100, 200),
          opacity: 0,
          rotate: () => gsap.utils.random(-15, 15)
        },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: {
            each: 0.04,
            from: 'random'
          },
          duration: 1.2,
          delay: 2.4,
          ease: 'power4.out',
        }
      )

      // Parallax immagine sullo scroll - solo movimento verticale, niente zoom
      gsap.to(imageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Scroll text animation
      gsap.fromTo(
        scrollTextRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 4, ease: 'power3.out' }
      )

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target && lenis?.current) {
      lenis.current.scrollTo(target, { offset: -100 })
    }
  }

  const titleText = 'Caffè del Corso'

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Caffè del Corso"
          className="w-full h-full object-cover"
          style={{ opacity: 0 }}
        />
        {/* Overlay scuro per leggibilità */}
        <div
          ref={overlayRef}
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to top, rgba(28, 25, 23, 0.9) 0%, rgba(28, 25, 23, 0.4) 50%, rgba(28, 25, 23, 0.6) 100%)',
            opacity: 0,
          }}
        />
      </div>

      {/* Background - Grande numero decorativo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-massive text-outline pointer-events-none select-none opacity-[0.03]"
        style={{ color: 'var(--color-text)' }}
      >
        1985
      </div>

      {/* Titolo principale - Posizionato al centro-basso */}
      <div className="absolute bottom-[12%] left-0 right-0 container-wide z-content">
        <div ref={titleRef}>
          <h1 className="text-giant" style={{ color: 'var(--color-text)' }}>
            {titleText.split('').map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{
                  color: char === 'd' || char === 'e' || char === 'l'
                    ? 'var(--color-rust)'
                    : 'var(--color-text)',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
        </div>

        {/* Sottotitolo e CTA */}
        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p
            className="text-body-xl max-w-md"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Un luogo dove il tempo rallenta, il caffè è arte
            e ogni momento diventa speciale.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#menu"
              onClick={(e) => scrollTo(e, '#menu')}
              className="btn-primary"
            >
              <span>Scopri il Menu</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Info verticale - Lato destro */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-content"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <div className="line-vertical h-20" />
        <span className="text-small text-vertical" style={{ transform: 'rotate(180deg)' }}>
          Boario Terme
        </span>
        <div className="line-vertical h-20" />
      </div>

      {/* Coordinate - Angolo in basso a sinistra */}
      <div
        className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 text-mono z-content"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <span>45.883°N</span>
        <span className="opacity-30">—</span>
        <span>10.183°E</span>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollTextRef}
        className="absolute bottom-8 right-8 flex items-center gap-4 z-content"
        style={{ color: 'var(--color-text-muted)' }}
      >
        <span className="text-small">Scroll</span>
        <div className="w-8 h-12 border border-current rounded-full flex items-start justify-center p-2">
          <div
            className="w-1 h-3 rounded-full"
            style={{
              background: 'var(--color-rust)',
              animation: 'scrollBounce 2s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      {/* Linea decorativa diagonale */}
      <div
        className="absolute top-0 right-[20%] w-px h-[60vh] origin-top hidden lg:block z-base"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.3,
          transform: 'rotate(15deg)'
        }}
      />

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
      `}</style>
    </section>
  )
}
