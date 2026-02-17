/**
 * ABOUT - Broken Grid Chaos
 * Layout completamente asimmetrico con elementi che si sovrappongono
 */

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import aboutImage from '../assets/foto/foto-11.webp'
import chefImage from '../assets/foto/foto-13.webp'
import verandaImage from '../assets/foto/foto-20.webp'
import internoImage from '../assets/new/new-13.webp'
import sfondoAbout from '../assets/sfondi/sfondi-2.webp'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const bigTextRef = useRef(null)
  const image1Ref = useRef(null)
  const image2Ref = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Grande testo di sfondo - scrolla più lento
      gsap.to(bigTextRef.current, {
        xPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      })

      // Titolo reveal
      gsap.fromTo(
        titleRef.current?.querySelectorAll('.word') || [],
        { y: 100, opacity: 0, rotate: 5 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
          },
        }
      )

      // Immagine 1 - reveal da sinistra
      gsap.fromTo(
        image1Ref.current,
        { x: -100, opacity: 0, rotate: -5 },
        {
          x: 0,
          opacity: 1,
          rotate: 3,
          duration: 1.4,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: image1Ref.current,
            start: 'top 80%',
          },
        }
      )

      // Immagine 2 - reveal da destra con delay
      gsap.fromTo(
        image2Ref.current,
        { x: 100, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: image2Ref.current,
            start: 'top 75%',
          },
        }
      )

      // Parallax immagini
      gsap.to(image1Ref.current, {
        yPercent: -15,
        rotate: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      })

      gsap.to(image2Ref.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // Content fade
      gsap.fromTo(
        contentRef.current?.children || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
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
      id="about"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--color-bg-cream)' }}
    >
      {/* Sfondo FULL PAGE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${sfondoAbout})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          opacity: 0.2,
        }}
      />

      {/* Grande testo di sfondo */}
      <div
        ref={bigTextRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 whitespace-nowrap pointer-events-none select-none"
        style={{
          fontSize: 'clamp(10rem, 25vw, 25rem)',
          fontFamily: 'var(--font-display)',
          color: 'var(--color-bg-sand)',
          lineHeight: 0.8,
          fontWeight: 400,
        }}
      >
        Tradizione & Qualità
      </div>

      {/* Label verticale */}
      <div
        className="absolute left-4 md:left-8 top-32 text-small text-vertical hidden md:block"
        style={{ color: 'var(--color-text-muted)', transform: 'rotate(180deg)' }}
      >
        Chi Siamo — 02
      </div>

      <div className="container-wide relative">
        {/* Grid caotica */}
        <div className="grid grid-cols-12 gap-4">
          {/* Titolo - occupa colonne irregolari */}
          <div className="col-span-12 md:col-span-8 md:col-start-4 mb-10 md:mb-14 relative z-content">
            <div ref={titleRef}>
              <p
                className="text-small mb-4"
                style={{ color: 'var(--color-rust)' }}
              >
                La Nostra Storia
              </p>
              <h2 className="text-display" style={{ color: 'var(--color-text-dark)' }}>
                {'Una tradizione'.split(' ').map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.3em]">
                    {word}
                  </span>
                ))}
                <br />
                <span className="word inline-block" style={{ fontStyle: 'italic', color: 'var(--color-rust)' }}>
                  di qualità
                </span>
              </h2>
            </div>
          </div>

          {/* Immagine 1 - posizionata sotto il titolo */}
          <div
            ref={image1Ref}
            className="col-span-10 md:col-span-5 col-start-1 md:col-start-1 row-start-2 mt-4 md:mt-0"
            style={{ transform: 'rotate(3deg)' }}
          >
            <div className="relative">
              <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={aboutImage}
                  alt="Interno del Caffè del Corso - Ambiente accogliente"
                  title="Il nostro locale - Un'atmosfera che ti fa sentire a casa"
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Etichetta decorativa */}
              <div
                className="absolute -bottom-4 -right-4 px-6 py-3"
                style={{ background: 'var(--color-rust)' }}
              >
                <span className="text-small" style={{ color: 'var(--color-text)' }}>
                  Est. 1985
                </span>
              </div>
            </div>
          </div>

          {/* Contenuto testuale - posizionato a destra */}
          <div
            ref={contentRef}
            className="col-span-12 md:col-span-5 md:col-start-7 row-start-3 md:row-start-2 mt-12 md:mt-32 space-y-6"
          >
            <p className="text-body-xl" style={{ color: 'var(--color-text-dark)' }}>
              La nostra identità si basa sulla <strong style={{ color: 'var(--color-rust)' }}>ricerca</strong>: prodotti selezionati, scelte curate e una proposta che punta sulla qualità e sulla convivialità.
            </p>

            <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
              Qui ogni pausa è un'esperienza semplice, ma mai banale.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="line-horizontal flex-1" style={{ background: 'var(--color-rust)' }} />
              <span className="text-mono" style={{ color: 'var(--color-rust)' }}>
                35+ anni
              </span>
            </div>
          </div>

          {/* Immagine 2 - sovrapposta, posizione diversa */}
          <div
            ref={image2Ref}
            className="col-span-8 md:col-span-4 col-start-5 md:col-start-5 row-start-4 md:row-start-3 -mt-16 md:-mt-32 z-content"
          >
            <div className="overflow-hidden shadow-2xl" style={{ aspectRatio: '3/4' }}>
              <img
                src={chefImage}
                alt="Preparazione del caffè al Caffè del Corso"
                title="L'arte del caffè - Qualità e passione dal 1985"
                loading="lazy"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats - posizionati in modo irregolare */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-8 md:gap-16">
          {[
            { value: '35+', label: 'Anni', offset: 0 },
            { value: '200+', label: 'Caffè/giorno', offset: 30 },
            { value: '100%', label: 'Passione', offset: -20 },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center"
              style={{ transform: `translateY(${stat.offset}px)` }}
            >
              <p className="text-display" style={{ color: 'var(--color-rust)' }}>
                {stat.value}
              </p>
              <p className="text-small mt-2" style={{ color: 'var(--color-text-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Storytelling - Due blocchi */}
        <div className="mt-20 md:mt-28 space-y-16 md:space-y-24">
          {/* Blocco 1 - La Veranda */}
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <div
                className="overflow-hidden shadow-2xl"
                style={{ aspectRatio: '4/3', transform: 'rotate(-2deg)' }}
              >
                <img
                  src={verandaImage}
                  alt="La veranda del Caffè del Corso"
                  title="La nostra veranda - Uno spazio verde e accogliente"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  style={{ objectPosition: 'center 30%' }}
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 order-1 md:order-2">
              <p
                className="text-small mb-4"
                style={{ color: 'var(--color-rust)' }}
              >
                La Veranda
              </p>
              <h3
                className="text-headline mb-6"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Dove il tempo{' '}
                <em style={{ color: 'var(--color-rust)' }}>rallenta</em>
              </h3>
              <p
                className="text-body-xl mb-4"
                style={{ color: 'var(--color-text-dark)' }}
              >
                In veranda il tempo sembra rallentare, lasciando spazio solo al piacere di stare insieme.
              </p>
              <p
                className="text-body"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Uno spazio verde, accogliente. Aperta d'estate e intima d'inverno, è pensata per vivere momenti conviviali senza tempo.
              </p>
            </div>
          </div>

          {/* Blocco 2 - L'Interno */}
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-5 md:col-start-2">
              <p
                className="text-small mb-4"
                style={{ color: 'var(--color-rust)' }}
              >
                L'Interno
              </p>
              <h3
                className="text-headline mb-6"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Un'esperienza{' '}
                <em style={{ color: 'var(--color-rust)' }}>mai banale</em>
              </h3>
              <p
                className="text-body-xl mb-4"
                style={{ color: 'var(--color-text-dark)' }}
              >
                Prodotti selezionati, scelte curate e una proposta che punta sulla qualità.
              </p>
              <p
                className="text-body"
                style={{ color: 'var(--color-text-muted)' }}
              >
                Ogni dettaglio è pensato per offrirti un momento di piacere autentico. Dal caffè della mattina all'aperitivo serale, qui trovi sempre qualcosa di speciale.
              </p>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <div
                className="overflow-hidden shadow-2xl"
                style={{ aspectRatio: '4/3', transform: 'rotate(2deg)' }}
              >
                <img
                  src={internoImage}
                  alt="Interno del Caffè del Corso"
                  title="Il nostro interno - Qualità e convivialità"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Linea decorativa */}
      <div
        className="absolute bottom-0 left-[10%] right-[30%] h-px"
        style={{ background: 'var(--color-rust)', opacity: 0.3 }}
      />
    </section>
  )
}
