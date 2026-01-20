/**
 * CONTACT - Broken Layout with Map
 * Layout asimmetrico con form e informazioni di contatto
 */

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 1500)
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{ background: 'var(--color-bg-cream)' }}
    >
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
          {/* Contact Info - sinistra con offset */}
          <div ref={infoRef} className="col-span-12 lg:col-span-5 lg:col-start-1">
            <div className="space-y-10">
              {/* Address */}
              <div className="info-item group" style={{ marginLeft: '1rem' }}>
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
              <div className="info-item group" style={{ marginLeft: '-0.5rem' }}>
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
              <div className="info-item group" style={{ marginLeft: '2rem' }}>
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
              <div className="info-item" style={{ marginLeft: '0.5rem' }}>
                <p
                  className="text-small mb-4"
                  style={{ color: 'var(--color-rust)' }}
                >
                  Social
                </p>
                <div className="flex gap-3">
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

          {/* Form - destra con rotazione */}
          <div
            ref={formRef}
            className="col-span-12 lg:col-span-6 lg:col-start-7"
            style={{ transform: 'rotate(-1deg)' }}
          >
            <div
              className="p-8 md:p-10"
              style={{ background: 'var(--color-bg)' }}
            >
              <div style={{ transform: 'rotate(1deg)' }}>
                <h3
                  className="text-headline mb-8"
                  style={{ color: 'var(--color-text)' }}
                >
                  Inviaci un
                  <br />
                  <em style={{ color: 'var(--color-rust)' }}>messaggio</em>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        className="block text-small mb-3"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        style={{ color: 'var(--color-text)' }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-small mb-3"
                        style={{ color: 'var(--color-text-muted)' }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        style={{ color: 'var(--color-text)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-small mb-3"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Oggetto
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-field cursor-pointer"
                      style={{
                        color: 'var(--color-text)',
                        background: 'transparent',
                      }}
                    >
                      <option value="" style={{ background: 'var(--color-bg)' }}>Seleziona...</option>
                      <option value="prenotazione" style={{ background: 'var(--color-bg)' }}>Prenotazione tavolo</option>
                      <option value="informazioni" style={{ background: 'var(--color-bg)' }}>Informazioni generali</option>
                      <option value="eventi" style={{ background: 'var(--color-bg)' }}>Eventi privati</option>
                      <option value="altro" style={{ background: 'var(--color-bg)' }}>Altro</option>
                    </select>
                  </div>

                  <div>
                    <label
                      className="block text-small mb-3"
                      style={{ color: 'var(--color-text-muted)' }}
                    >
                      Messaggio *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="input-field resize-none"
                      style={{ color: 'var(--color-text)' }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-between disabled:opacity-50"
                  >
                    <span>
                      {isSubmitting ? 'Invio in corso...' : 'Invia messaggio'}
                    </span>
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
                  </button>

                  {submitStatus === 'success' && (
                    <div
                      className="p-4 text-center"
                      style={{
                        background: 'var(--color-olive)',
                        color: 'var(--color-text)',
                      }}
                    >
                      <p className="text-body">Messaggio inviato con successo!</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section - con rotazione */}
        <div className="mt-24 md:mt-32 relative">
          <div
            className="aspect-[21/9] w-full overflow-hidden"
            style={{ transform: 'rotate(1deg)' }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.5891234567!2d10.183!3d45.883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDUyJzU4LjgiTiAxMMKwMTAnNTkuOCJF!5e0!3m2!1sit!2sit!4v1234567890"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'grayscale(100%) contrast(1.1) sepia(20%)',
                transform: 'rotate(-1deg) scale(1.05)',
              }}
              allowFullScreen=""
              loading="lazy"
              title="Mappa Caffè del Corso"
            />
          </div>

          {/* Map overlay */}
          <div
            className="absolute bottom-6 left-6 p-6"
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
