/**
 * NAVBAR - Terrosa Chaotic Design
 * Navigazione con elementi asimmetrici
 */

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ lenis }) {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { name: 'Chi Siamo', href: '#about', number: '01' },
    { name: 'Menu', href: '#menu', number: '02' },
    { name: 'Servizi', href: '#services', number: '03' },
    { name: 'Galleria', href: '#gallery', number: '04' },
    { name: 'Contatti', href: '#contact', number: '05' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 2.8, ease: 'power3.out' }
    )
  }, [])

  const scrollTo = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target && lenis?.current) {
      lenis.current.scrollTo(target, { offset: -100 })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-nav transition-all duration-500 ${
          scrolled ? 'py-4' : 'py-6 md:py-8'
        }`}
        style={{
          background: scrolled ? 'rgba(28, 25, 23, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
        }}
      >
        <div className="flex items-center justify-between container-wide">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => scrollTo(e, '#hero')}
            className="relative group"
          >
            <span
              className="text-headline"
              style={{ color: 'var(--color-text)' }}
            >
              Caffè
            </span>
            <span
              className="absolute -bottom-1 left-[55%] text-mono"
              style={{ color: 'var(--color-rust)' }}
            >
              del Corso
            </span>
          </a>

          {/* Desktop Navigation */}
          <div
            className="hidden lg:flex items-center"
            style={{ gap: 'clamp(2rem, 3vw, 3.5rem)' }}
          >
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="nav-link group relative"
                style={{
                  color: 'var(--color-text-muted)',
                  transform: `translateY(${i % 2 === 0 ? 0 : 3}px)`,
                }}
              >
                <span
                  className="absolute -top-3 -left-2 text-mono opacity-0 group-hover:opacity-50 transition-opacity"
                  style={{ fontSize: '0.5rem', color: 'var(--color-rust)' }}
                >
                  {link.number}
                </span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+390364793167"
              className="hidden md:flex items-center gap-3 text-small"
              style={{ color: 'var(--color-text-muted)' }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: 'var(--color-rust)' }}
              />
              0364 793167
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              aria-label="Menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                className="w-6 h-[2px] block origin-center"
                style={{ background: 'var(--color-text)' }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                className="w-4 h-[2px] block ml-auto"
                style={{ background: 'var(--color-rust)' }}
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                className="w-6 h-[2px] block origin-center"
                style={{ background: 'var(--color-text)' }}
              />
            </button>
          </div>
        </div>

        {/* Scroll progress line */}
        {scrolled && (
          <div
            className="absolute bottom-0 left-0 w-full h-px"
            style={{ background: 'var(--color-bg-warm)' }}
          />
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-overlay"
            style={{ background: 'var(--color-bg)' }}
          >
            <div className="h-full flex flex-col justify-center container-wide">
              <div className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: -40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{
                      delay: 0.1 + i * 0.08,
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="border-b"
                    style={{
                      borderColor: 'var(--color-bg-warm)',
                      marginLeft: `${(i % 3) * 1}rem`,
                    }}
                  >
                    <a
                      href={link.href}
                      onClick={(e) => scrollTo(e, link.href)}
                      className="flex items-baseline gap-4 py-5 text-display transition-colors group"
                      style={{ color: 'var(--color-text)' }}
                    >
                      <span
                        className="text-mono opacity-30 group-hover:opacity-100 transition-opacity"
                        style={{ color: 'var(--color-rust)', fontSize: '0.7rem' }}
                      >
                        {link.number}
                      </span>
                      <span
                        className="group-hover:text-[var(--color-rust)] transition-colors"
                      >
                        {link.name}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-16 pt-8 border-t space-y-4"
                style={{ borderColor: 'var(--color-bg-warm)' }}
              >
                <a
                  href="tel:+390364793167"
                  className="text-body block"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  +39 0364 793167
                </a>
                <a
                  href="mailto:info@caffedelcorso.it"
                  className="text-body block"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  info@caffedelcorso.it
                </a>
              </motion.div>

              {/* Bottom decoration */}
              <motion.div
                initial={{ scaleX: 0, rotate: -5 }}
                animate={{ scaleX: 1, rotate: -5 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute bottom-12 left-8 w-24 h-[2px] origin-left"
                style={{ background: 'var(--color-rust)' }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
