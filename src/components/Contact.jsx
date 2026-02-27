/**
 * CONTACT - Broken Layout with Map
 * Layout asimmetrico con form e informazioni di contatto
 */

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import sfondo2 from '../assets/sfondi/sfondi-2.webp'
import sfondo5 from '../assets/sfondi/sfondi-5.webp'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Titolo reveal caotico
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

      // Form reveal
      gsap.fromTo(
        formRef.current,
        { x: 50, opacity: 0, rotate: 2 },
        {
          x: 0,
          opacity: 1,
          rotate: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
          },
        }
      )

      // Info items stagger
      gsap.fromTo(
        infoRef.current?.querySelectorAll('.info-item') || [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: infoRef.current,
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
      id="contact"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--color-bg-cream)' }}
    >
      {/* Sfondo FULL PAGE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${sfondo5})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
        }}
      />

      {/* Secondo sfondo angolo destro */}
      <div
        className="absolute top-0 right-0 w-[45%] h-[50%] pointer-events-none"
        style={{
          backgroundImage: `url(${sfondo2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom left',
          opacity: 0.25,
        }}
      />

      {/* Grande testo decorativo */}
      <div
        className="absolute bottom-20 right-0 whitespace-nowrap pointer-events-none select-none"
        style={{
          fontSize: 'clamp(8rem, 20vw, 20rem)',
          fontFamily: 'var(--font-display)',
          color: 'var(--color-bg-sand)',
          lineHeight: 0.8,
          fontWeight: 400,
          transform: 'translateX(20%)',
        }}
      >
        Contatti
      </div>

      {/* Label verticale */}
      <div
        className="absolute right-4 md:right-8 top-32 text-small text-vertical hidden md:block"
        style={{ color: 'var(--color-text-muted)' }}
      >
        Contatti — 06
      </div>

      <div className="container-wide relative">
        {/* Header asimmetrico */}
        <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-7 md:col-start-1">
            <p
              className="text-small mb-4"
              style={{ color: 'var(--color-rust)' }}
            >
              Contattaci
            </p>
            <div ref={titleRef}>
              <h2 className="text-display" style={{ color: 'var(--color-text-dark)' }}>
                {'Vieni a'.split(' ').map((word, i) => (
                  <span key={i} className="word inline-block mr-[0.3em]">
                    {word}
                  </span>
                ))}
                <br />
                <span className="word inline-block" style={{ fontStyle: 'italic', color: 'var(--color-rust)' }}>
                  trovarci
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Contact Info - sinistra con offset solo su desktop */}
          <div ref={infoRef} className="col-span-12 lg:col-span-5 lg:col-start-1 px-6 lg:px-0">
            <div className="space-y-10 text-center lg:text-left">
              {/* Address */}
              <div className="info-item group contact-offset-1">
                <p
                  className="text-small mb-3"
                  style={{ color: 'var(--color-rust)' }}
                >
                  Indirizzo
                </p>
                <a
                  href="https://maps.google.com/?q=Via+Vittorio+Montiglio+1+Darfo+Boario+Terme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <p
                    className="text-headline group-hover:text-[var(--color-rust)] transition-colors duration-300"
                    style={{ color: 'var(--color-text-dark)' }}
                  >
                    Via Vittorio Montiglio, 1
                  </p>
                  <p
                    className="text-body"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    25047 Darfo Boario Terme (BS)
                  </p>
                </a>
              </div>

              {/* Phone */}
              <div className="info-item group contact-offset-2">
                <p
                  className="text-small mb-3"
                  style={{ color: 'var(--color-rust)' }}
                >
                  Telefono
                </p>
                <a
                  href="tel:+390364793167"
                  className="text-display group-hover:text-[var(--color-rust)] transition-colors duration-300 inline-block"
                  style={{ color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}
                >
                  0364 793167
                </a>
              </div>

              {/* Email */}
              <div className="info-item group contact-offset-3">
                <p
                  className="text-small mb-3"
                  style={{ color: 'var(--color-rust)' }}
                >
                  Email
                </p>
                <a
                  href="mailto:info@caffedelcorso.it"
                  className="text-headline group-hover:text-[var(--color-rust)] transition-colors duration-300 inline-block"
                  style={{ color: 'var(--color-text-dark)' }}
                >
                  info@caffedelcorso.it
                </a>
              </div>

              {/* Social */}
              <div className="info-item contact-offset-4">
                <p
                  className="text-small mb-4"
                  style={{ color: 'var(--color-rust)' }}
                >
                  Social
                </p>
                <div className="flex gap-3 justify-center lg:justify-start">
                  <a
                    href="https://instagram.com/caffedelcorsoboario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3"
                    style={{
                      background: 'var(--color-bg)',
                      color: 'var(--color-rust)',
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/caffedelcorso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-[-3deg]"
                    style={{
                      background: 'var(--color-bg)',
                      color: 'var(--color-rust)',
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/390364793167"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-3"
                    style={{
                      background: 'var(--color-bg)',
                      color: 'var(--color-rust)',
                    }}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form - destra con rotazione solo su desktop */}
          <div
            ref={formRef}
            className="col-span-12 lg:col-span-6 lg:col-start-7 px-6 lg:px-0 form-container"
          >
            <div
              className="p-8 md:p-10 flex flex-col items-center justify-center text-center"
              style={{ background: 'var(--color-bg)' }}
            >
              <div style={{ transform: 'rotate(1deg)' }}>
                <h3
                  className="text-headline mb-4"
                  style={{ color: 'var(--color-text)' }}
                >
                  Scrivici su
                  <br />
                  <em style={{ color: 'var(--color-rust)' }}>WhatsApp</em>
                </h3>

                <p
                  className="text-body mb-8"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Per prenotazioni, informazioni o qualsiasi domanda, scrivici direttamente su WhatsApp.
                </p>

                <a
                  href="https://wa.me/393201930925"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-between hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all duration-300"
                >
                  <span>Scrivici su WhatsApp</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - con rotazione e hover colorato */}
        <div className="mt-24 md:mt-32 relative">
          <div
            className="map-container aspect-[21/9] w-full overflow-hidden"
            style={{ transform: 'rotate(1deg)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1390.4!2d10.1847!3d45.8838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47817e3c8b8b8b8b%3A0x1234567890abcdef!2sVia%20Vittorio%20Montiglio%2C%201%2C%2025047%20Darfo%20Boario%20Terme%20BS!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{
                border: 0,
                transform: 'rotate(-1deg) scale(1.05)',
              }}
              allowFullScreen=""
              loading="lazy"
              title="Mappa Caffè del Corso"
            />
          </div>

          {/* Map overlay - nascosto su mobile per permettere interazione con la mappa */}
          <div
            className="hidden lg:block absolute bottom-6 left-6 p-6"
            style={{
              background: 'var(--color-rust)',
              transform: 'rotate(-3deg)',
            }}
          >
            <p
              className="text-headline mb-1"
              style={{ color: 'var(--color-text)' }}
            >
              Caffè del Corso
            </p>
            <p
              className="text-small"
              style={{ color: 'var(--color-text)', opacity: 0.8 }}
            >
              Via Vittorio Montiglio, 1 — Darfo Boario Terme
            </p>
          </div>
        </div>
      </div>

      {/* Linee decorative */}
      <div
        className="absolute top-[40%] left-[5%] w-px h-[200px] hidden lg:block"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.2,
          transform: 'rotate(-10deg)'
        }}
      />
    </section>
  )
}
