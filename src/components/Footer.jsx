/**
 * FOOTER - Chaotic Dark Design
 * Layout irregolare con elementi spostati
 */

import { Link } from 'react-router-dom'

export default function Footer({ lenis }) {
  const currentYear = new Date().getFullYear()

  const scrollTo = (e, href) => {
    e.preventDefault()
    if (href === '#top') {
      lenis?.current?.scrollTo(0, { duration: 2 })
    } else {
      const target = document.querySelector(href)
      if (target && lenis?.current) {
        lenis.current.scrollTo(target, { offset: -100 })
      }
    }
  }

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Chi Siamo', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Servizi', href: '#services' },
    { name: 'Galleria', href: '#gallery' },
    { name: 'Contatti', href: '#contact' },
  ]

  return (
    <footer
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Linea top */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{ background: 'var(--color-bg-warm)' }}
      />

      <div className="container-wide">
        {/* Main Footer Grid - Layout caotico solo su desktop */}
        <div className="grid grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-20 px-6 lg:px-0">
          {/* Brand Column - spostato solo su desktop */}
          <div className="col-span-12 lg:col-span-4 text-center lg:text-left footer-offset-brand">
            <div className="mb-6">
              <h3
                className="text-display leading-none mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                Caffè
              </h3>
              <p
                className="text-small"
                style={{ color: 'var(--color-rust)' }}
              >
                del Corso
              </p>
            </div>

            <p
              className="text-body max-w-xs mx-auto lg:mx-0"
              style={{ color: 'var(--color-text-muted)' }}
            >
              Il tuo bar di fiducia nel cuore di Boario Terme. Caffè di qualità
              e un'atmosfera che ti fa sentire a casa.
            </p>
          </div>

          {/* Navigation - offset solo su desktop */}
          <div className="col-span-6 lg:col-span-2 lg:col-start-6 footer-offset-nav">
            <p
              className="text-small mb-6"
              style={{ color: 'var(--color-rust)' }}
            >
              Navigazione
            </p>
            <ul className="space-y-3">
              {navLinks.map((link, i) => (
                <li
                  key={link.name}
                  className="footer-nav-item"
                  style={{ '--nav-offset': `${(i % 3) * 0.5}rem` }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-body transition-colors duration-300 hover:text-[var(--color-rust)] inline-block"
                    style={{ color: 'var(--color-text-muted)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - offset solo su desktop */}
          <div className="col-span-6 lg:col-span-3 footer-offset-contact">
            <p
              className="text-small mb-6"
              style={{ color: 'var(--color-rust)' }}
            >
              Contatti
            </p>
            <div className="space-y-4">
              <div>
                <p
                  className="text-body"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  Via Vittorio Montiglio, 1
                </p>
                <p
                  className="text-small mt-1"
                  style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}
                >
                  25047 Darfo Boario Terme (BS)
                </p>
              </div>
              <a
                href="tel:+390364793167"
                className="text-body block transition-colors hover:text-[var(--color-rust)]"
                style={{ color: 'var(--color-text-muted)' }}
              >
                +39 0364 793167
              </a>
              <a
                href="mailto:info@caffedelcorso.it"
                className="text-body block transition-colors hover:text-[var(--color-rust)]"
                style={{ color: 'var(--color-text-muted)' }}
              >
                info@caffedelcorso.it
              </a>
            </div>
          </div>

          {/* Social + Back to Top */}
          <div className="col-span-12 lg:col-span-2 flex flex-col items-center lg:items-end justify-between footer-offset-social">
            <div className="mb-6 lg:mb-0 text-center lg:text-right">
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
                  className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-6"
                  style={{
                    border: '1px solid var(--color-bg-warm)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://facebook.com/caffedelcorso"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-[-6deg]"
                  style={{
                    border: '1px solid var(--color-bg-warm)',
                    color: 'var(--color-text-muted)',
                  }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={(e) => scrollTo(e, '#top')}
              className="group flex items-center gap-3 transition-all duration-300"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <span className="text-small">Torna su</span>
              <span
                className="w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:-translate-y-2 group-hover:rotate-6"
                style={{ border: '1px solid var(--color-bg-warm)' }}
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
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Bar - asimmetrico */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderColor: 'var(--color-bg-warm)' }}
        >
          <p className="text-mono" style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}>
            © {currentYear} Caffè del Corso. Tutti i diritti riservati.
          </p>

          <div className="flex items-center gap-6">
            <Link
              to="/privacy-policy"
              onClick={() => window.scrollTo(0, 0)}
              className="text-mono transition-colors hover:text-[var(--color-rust)]"
              style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookie-policy"
              onClick={() => window.scrollTo(0, 0)}
              className="text-mono transition-colors hover:text-[var(--color-rust)]"
              style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}
            >
              Cookie Policy
            </Link>
            <span className="text-mono" style={{ color: 'var(--color-text-muted)', opacity: 0.6 }}>
              Powered By{' '}
              <a
                href="https://webwiseitalia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:opacity-80"
                style={{ color: 'var(--color-rust)' }}
              >
                Webwise
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Grande testo decorativo */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none"
        style={{ transform: 'translateY(55%)' }}
      >
        <p
          className="text-center whitespace-nowrap"
          style={{
            fontSize: 'clamp(6rem, 15vw, 15rem)',
            fontFamily: 'var(--font-display)',
            color: 'var(--color-bg-warm)',
            lineHeight: 1,
            fontWeight: 400,
          }}
        >
          CAFFÈ DEL CORSO
        </p>
      </div>

      {/* Linea decorativa diagonale */}
      <div
        className="absolute top-20 left-[30%] w-px h-[100px] hidden lg:block"
        style={{
          background: 'var(--color-rust)',
          opacity: 0.2,
          transform: 'rotate(25deg)'
        }}
      />
    </footer>
  )
}
