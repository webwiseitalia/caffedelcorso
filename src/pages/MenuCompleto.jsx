/**
 * Menu Completo Page
 * Pagina dedicata alla visualizzazione del listino completo in PDF
 */

import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import sfondo4 from '../assets/sfondi/sfondi-4.webp'
import listinoPDF from '../assets/LISTINO PIANTE_aggiunta anta_2026.pdf'

export default function MenuCompleto() {
  const sectionRef = useRef(null)
  const heroRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const ctx = gsap.context(() => {
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
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: 'var(--color-bg-warm)' }}
      >
        {/* Sfondo decorativo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${sfondo4})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
        />

        <div ref={heroRef} className="container-wide relative px-6 md:px-4">
          {/* Back link */}
          <Link
            to="/"
            className="animate-item inline-flex items-center gap-2 text-body hover:text-[var(--color-rust)] transition-colors mb-8"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </Link>

          <p
            className="animate-item text-small mb-4"
            style={{ color: 'var(--color-rust)' }}
          >
            Il Nostro Listino
          </p>

          <h1
            className="animate-item text-display mb-6"
            style={{ color: 'var(--color-text)' }}
          >
            Menù{' '}
            <em style={{ color: 'var(--color-rust)' }}>Completo</em>
          </h1>

          <p
            className="animate-item text-body-xl max-w-2xl"
            style={{ color: 'var(--color-text-muted)' }}
          >
            Scopri tutte le nostre proposte: dalla caffetteria al brunch,
            dai cocktail ai vini selezionati, fino ai piatti del pranzo.
          </p>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <main className="relative py-12 md:py-20">
        <div className="container-wide px-6 md:px-4">
          {/* PDF Embed */}
          <div
            className="w-full overflow-hidden shadow-2xl"
            style={{ border: '1px solid var(--color-bg-warm)' }}
          >
            <iframe
              src={`${listinoPDF}#toolbar=1&navpanes=0&scrollbar=1&view=FitH`}
              title="Menù Completo - Caffè del Corso"
              className="w-full"
              style={{
                height: '85vh',
                minHeight: '600px',
                border: 'none',
              }}
            />
          </div>

          {/* Fallback download link */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <p
              className="text-body"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Non riesci a visualizzare il menù?
            </p>
            <a
              href={listinoPDF}
              download="Listino-Caffe-del-Corso-2026.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 transition-all duration-300 hover:scale-105"
              style={{
                background: 'var(--color-rust)',
                color: 'var(--color-text)',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="text-small">Scarica il PDF</span>
            </a>
          </div>

          {/* Note */}
          <p
            className="mt-8 text-mono text-center"
            style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}
          >
            * Prezzi e disponibilità possono variare. Chiedi al nostro staff per allergeni.
          </p>

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
