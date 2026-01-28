/**
 * Cookie Banner Component
 * Banner GDPR compliant con blur del sito
 * I pulsanti Accetta e Rifiuta sono identici
 */

import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const COOKIE_KEY = 'caffedelcorso-cookie-consent'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const location = useLocation()

  // Le pagine policy non devono avere il blur
  const isPolicyPage = location.pathname === '/privacy-policy' || location.pathname === '/cookie-policy'

  useEffect(() => {
    // Controlla se l'utente ha già dato il consenso
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop blur - non appare sulle pagine policy */}
      {!isPolicyPage && (
        <div
          className="fixed inset-0 z-[9998] backdrop-blur-md"
          style={{ background: 'rgba(28, 25, 23, 0.6)' }}
        />
      )}

      {/* Banner */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
        style={{ background: 'var(--color-bg)' }}
      >
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6">
            {/* Icon */}
            <div
              className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-full hidden md:flex"
              style={{ background: 'var(--color-rust)' }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-text)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="text-title mb-2" style={{ color: 'var(--color-text)' }}>
                Questo sito utilizza cookie tecnici
              </h3>
              <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                Utilizziamo esclusivamente cookie tecnici necessari al funzionamento del sito. Non usiamo cookie di profilazione o tracciamento.
                Per maggiori informazioni, consulta la nostra{' '}
                <Link
                  to="/privacy-policy"
                  className="underline hover:text-[var(--color-rust)]"
                  style={{ color: 'var(--color-rust)' }}
                >
                  Privacy Policy
                </Link>{' '}
                e la{' '}
                <Link
                  to="/cookie-policy"
                  className="underline hover:text-[var(--color-rust)]"
                  style={{ color: 'var(--color-rust)' }}
                >
                  Cookie Policy
                </Link>.
              </p>
            </div>

            {/* Buttons - stesso stile e dimensioni */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <button
                onClick={handleReject}
                className="px-8 py-4 text-small font-medium transition-all duration-300 hover:opacity-80"
                style={{
                  background: 'var(--color-rust)',
                  color: 'var(--color-text)',
                  minWidth: '140px',
                }}
              >
                Rifiuta
              </button>
              <button
                onClick={handleAccept}
                className="px-8 py-4 text-small font-medium transition-all duration-300 hover:opacity-80"
                style={{
                  background: 'var(--color-rust)',
                  color: 'var(--color-text)',
                  minWidth: '140px',
                }}
              >
                Accetta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
