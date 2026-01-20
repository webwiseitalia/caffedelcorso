/**
 * Cookie Policy Page
 * Design coerente con lo stile del sito
 */

import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../constants/siteData'

export default function CookiePolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen" style={{ background: 'var(--color-bg)' }}>
      {/* Header */}
      <header
        className="py-8 md:py-12"
        style={{ background: 'var(--color-bg-warm)' }}
      >
        <div className="container-wide px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-small mb-6 hover:text-[var(--color-rust)] transition-colors"
            style={{ color: 'var(--color-text-muted)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Torna alla Home
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full"
              style={{ background: 'var(--color-rust)' }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-text)' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-display" style={{ color: 'var(--color-text)' }}>
                Cookie Policy
              </h1>
              <p className="text-small" style={{ color: 'var(--color-text-muted)' }}>
                Informativa sull'utilizzo dei cookie
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-12 md:py-20">
        <div className="container-wide px-6">
          <div
            className="max-w-4xl mx-auto p-8 md:p-12"
            style={{ background: 'var(--color-bg-cream)' }}
          >
            <p className="text-small mb-8" style={{ color: 'var(--color-text-muted)' }}>
              Ultimo aggiornamento: {siteData.policy.lastUpdate}
            </p>

            {/* Privacy Friendly Notice */}
            <div
              className="p-6 mb-10 border-l-4 flex items-start gap-4"
              style={{ background: 'rgba(132, 204, 22, 0.1)', borderColor: '#84cc16' }}
            >
              <svg className="w-8 h-8 flex-shrink-0" fill="none" stroke="#84cc16" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-title font-semibold mb-2" style={{ color: '#65a30d' }}>
                  Sito Privacy-Friendly
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  Questo sito web utilizza <strong>solo cookie tecnici</strong> necessari al funzionamento. <strong>Non utilizziamo cookie di profilazione, tracciamento o analisi.</strong> La tua privacy è protetta e non serve il tuo consenso per la navigazione.
                </p>
              </div>
            </div>

            {/* Sezione 1 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                1. Cosa sono i Cookie
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet o smartphone) quando visiti un sito web. I cookie permettono al sito di riconoscere il tuo dispositivo e memorizzare alcune informazioni sulle tue preferenze o azioni passate.
              </p>
            </section>

            {/* Sezione 2 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                2. Tipologie di Cookie
              </h2>

              <h3 className="text-title mb-3" style={{ color: 'var(--color-text-dark)' }}>
                2.1 Cookie Tecnici
              </h3>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Sono cookie necessari al funzionamento del sito e permettono di navigare e utilizzare le funzionalità base. Senza questi cookie, il sito potrebbe non funzionare correttamente.
              </p>
              <div
                className="p-6 mb-6"
                style={{ background: 'var(--color-bg-sand)' }}
              >
                <p className="text-small font-semibold mb-3" style={{ color: 'var(--color-rust)' }}>
                  Cookie tecnici utilizzati su questo sito:
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Cookie di navigazione e di sessione</li>
                  <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Cookie per memorizzare le preferenze dell'interfaccia</li>
                </ul>
                <p className="text-small mt-4" style={{ color: 'var(--color-text-muted)' }}>
                  Secondo la normativa vigente, i cookie tecnici non richiedono il consenso dell'utente.
                </p>
              </div>

              <h3 className="text-title mb-3" style={{ color: 'var(--color-text-dark)' }}>
                2.2 Cookie Analitici
              </h3>
              <div
                className="p-4 mb-6 flex items-center gap-3"
                style={{ background: 'rgba(239, 68, 68, 0.1)' }}
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="#ef4444" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <div>
                  <p className="text-small font-semibold" style={{ color: '#ef4444' }}>NON UTILIZZATI</p>
                  <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                    Questo sito NON utilizza cookie analitici come Google Analytics o simili per tracciare il comportamento degli utenti.
                  </p>
                </div>
              </div>

              <h3 className="text-title mb-3" style={{ color: 'var(--color-text-dark)' }}>
                2.3 Cookie di Profilazione
              </h3>
              <div
                className="p-4 mb-6 flex items-center gap-3"
                style={{ background: 'rgba(239, 68, 68, 0.1)' }}
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="#ef4444" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <div>
                  <p className="text-small font-semibold" style={{ color: '#ef4444' }}>NON UTILIZZATI</p>
                  <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                    Questo sito NON utilizza cookie di profilazione per creare profili utente o inviare pubblicità mirata.
                  </p>
                </div>
              </div>

              <h3 className="text-title mb-3" style={{ color: 'var(--color-text-dark)' }}>
                2.4 Cookie di Terze Parti
              </h3>
              <div
                className="p-4 mb-6 flex items-center gap-3"
                style={{ background: 'rgba(239, 68, 68, 0.1)' }}
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="#ef4444" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                </svg>
                <div>
                  <p className="text-small font-semibold" style={{ color: '#ef4444' }}>NON UTILIZZATI</p>
                  <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                    Questo sito NON utilizza servizi di terze parti che installano cookie (Facebook Pixel, Google Ads, ecc.).
                  </p>
                </div>
              </div>
            </section>

            {/* Sezione 3 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                3. Cookie Utilizzati su Questo Sito
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Il nostro sito utilizza esclusivamente i seguenti cookie tecnici:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr style={{ background: 'var(--color-bg-warm)' }}>
                      <th className="text-left p-4 text-small font-semibold" style={{ color: 'var(--color-text-dark)' }}>Nome Cookie</th>
                      <th className="text-left p-4 text-small font-semibold" style={{ color: 'var(--color-text-dark)' }}>Tipologia</th>
                      <th className="text-left p-4 text-small font-semibold" style={{ color: 'var(--color-text-dark)' }}>Finalità</th>
                      <th className="text-left p-4 text-small font-semibold" style={{ color: 'var(--color-text-dark)' }}>Durata</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-bg-warm)' }}>
                      <td className="p-4 text-body" style={{ color: 'var(--color-text-muted)' }}>caffedelcorso-cookie-consent</td>
                      <td className="p-4">
                        <span className="px-2 py-1 text-mono" style={{ background: 'var(--color-olive)', color: 'var(--color-text)', fontSize: '0.7rem' }}>Tecnico</span>
                      </td>
                      <td className="p-4 text-body" style={{ color: 'var(--color-text-muted)' }}>Memorizza lo stato di espansione/chiusura della barra laterale per migliorare l'esperienza di navigazione</td>
                      <td className="p-4 text-body" style={{ color: 'var(--color-text-muted)' }}>1 anno</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                className="p-4 mt-6"
                style={{ background: 'var(--color-bg-sand)' }}
              >
                <p className="text-small" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Nota importante:</strong> I cookie tecnici come "caffedelcorso-cookie-consent" sono essenziali per il funzionamento del sito e non richiedono il consenso dell'utente ai sensi del Provvedimento del Garante Privacy n. 229/2014 e del GDPR.
                </p>
              </div>
            </section>

            {/* Sezione 4 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                4. Come Gestire i Cookie
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Anche se i cookie tecnici non richiedono consenso, puoi comunque gestirli o eliminarli attraverso le impostazioni del tuo browser:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-3">
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Google Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Mozilla Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie e dati dei siti web
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Safari:</strong> Preferenze → Privacy → Cookie e dati dei siti web
                </li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Microsoft Edge:</strong> Impostazioni → Cookie e autorizzazioni del sito → Gestisci e elimina cookie
                </li>
              </ul>

              <div
                className="p-4 border-l-4"
                style={{ background: 'rgba(234, 179, 8, 0.1)', borderColor: '#eab308' }}
              >
                <p className="text-small" style={{ color: 'var(--color-text-muted)' }}>
                  <strong>Attenzione:</strong> La disabilitazione completa dei cookie tecnici potrebbe compromettere alcune funzionalità del sito e ridurre la qualità dell'esperienza di navigazione.
                </p>
              </div>
            </section>

            {/* Sezione 5 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                5. Link a Siti Esterni
              </h2>
              <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                Il nostro sito potrebbe contenere link a siti web di terze parti. Non siamo responsabili per le pratiche di privacy o il contenuto di tali siti esterni. Ti invitiamo a leggere le informative sulla privacy dei siti che visiti.
              </p>
            </section>

            {/* Sezione 6 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                6. Aggiornamenti della Cookie Policy
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Questa Cookie Policy può essere modificata nel tempo. Eventuali modifiche sostanziali saranno comunicate attraverso un avviso pubblicato su questa pagina.
              </p>
              <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                Ti invitiamo a consultare periodicamente questa pagina per rimanere aggiornato sull'utilizzo dei cookie sul nostro sito.
              </p>
            </section>

            {/* Sezione 7 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                7. Base Normativa
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Questa Cookie Policy è redatta in conformità a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Regolamento (UE) 2016/679 del Parlamento Europeo (GDPR)</li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Direttiva 2002/58/CE (Direttiva ePrivacy) aggiornata dalla Direttiva 2009/136/CE</li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014, n. 229</li>
                <li className="text-body" style={{ color: 'var(--color-text-muted)' }}>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021</li>
              </ul>
            </section>

            {/* Sezione 8 */}
            <section className="mb-10">
              <h2 className="text-headline mb-4" style={{ color: 'var(--color-text-dark)' }}>
                8. Contatti
              </h2>
              <p className="text-body mb-4" style={{ color: 'var(--color-text-muted)' }}>
                Per domande o chiarimenti su questa Cookie Policy, puoi contattarci:
              </p>
              <div
                className="p-6"
                style={{ background: 'var(--color-bg-sand)' }}
              >
                <p className="text-body font-semibold mb-2" style={{ color: 'var(--color-text-dark)' }}>
                  {siteData.legalName}
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  {siteData.contact.address.full}
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  Email: <a href={`mailto:${siteData.contact.email}`} className="underline hover:text-[var(--color-rust)]" style={{ color: 'var(--color-rust)' }}>{siteData.contact.email}</a>
                </p>
                <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                  Tel: <a href={`tel:${siteData.contact.phone}`} className="hover:text-[var(--color-rust)]" style={{ color: 'var(--color-rust)' }}>{siteData.contact.phone}</a>
                </p>
              </div>
            </section>

            {/* Zero Tracking Badge */}
            <div
              className="p-8 text-center mt-12"
              style={{ background: 'rgba(132, 204, 22, 0.1)' }}
            >
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="#84cc16" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <h3 className="text-headline mb-2" style={{ color: '#65a30d' }}>
                Zero Tracciamento
              </h3>
              <p className="text-body" style={{ color: 'var(--color-text-muted)' }}>
                Naviga tranquillo: questo sito rispetta la tua privacy e non traccia le tue attività online
              </p>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row gap-4 justify-center px-6">
            <Link
              to="/"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Torna alla Home
            </Link>
            <Link
              to="/privacy-policy"
              className="btn-primary inline-flex items-center justify-center gap-2"
              style={{ background: 'transparent', border: '1px solid var(--color-rust)', color: 'var(--color-rust)' }}
            >
              Leggi la Privacy Policy
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
